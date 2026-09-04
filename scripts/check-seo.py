"""Check rendered SEO on a running site: python3 scripts/check-seo.py [base_url]."""
import json
from html.parser import HTMLParser
from pathlib import Path
import sys
import urllib.request
import urllib.error
from urllib.parse import urlparse
import xml.etree.ElementTree as ET

base = sys.argv[1] if len(sys.argv) > 1 else 'http://127.0.0.1:3000'
pages = json.loads((Path(__file__).resolve().parents[1] / 'lib/seo-pages.json').read_text())
errors = []
class Page(HTMLParser):
    def __init__(self, html):
        super().__init__()
        self.tags = []
        self.schemas = []
        self.in_schema = False
        self.schema = ''
        self.title = ''
        self.in_title = False
        self.feed(html)
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        self.tags.append((tag, attrs))
        if tag == 'title': self.in_title = True
        if tag == 'script' and attrs.get('type') == 'application/ld+json':
            self.in_schema = True
            self.schema = ''
    def handle_data(self, data):
        if self.in_schema: self.schema += data
        if self.in_title: self.title += data
    def handle_endtag(self, tag):
        if tag == 'title': self.in_title = False
        if tag == 'script' and self.in_schema:
            self.schemas.append(json.loads(self.schema))
            self.in_schema = False
    def attrs(self, tag, key, val):
        return [a for t, a in self.tags if t == tag and a.get(key) == val]

def fetch(path):
    try:
        with urllib.request.urlopen(base + path, timeout=45) as r:
            return r.status, r.read().decode()
    except urllib.error.HTTPError as e:
        return e.code, e.read().decode()

def check(condition, message):
    if not condition: errors.append(message)

titles, descriptions, canonical_urls, internal = set(), set(), set(), set()
for path, config in pages.items():
    status, html = fetch(path)
    check(status == 200, f'{path}: HTTP {status}')
    page = Page(html)
    check(page.title and page.title not in titles, f'{path}: missing/duplicate title')
    titles.add(page.title)
    description = page.attrs('meta', 'name', 'description')
    check(len(description) == 1 and description[0].get('content') == config['description'], f'{path}: description mismatch')
    check(config['description'] not in descriptions, f'{path}: duplicate description')
    descriptions.add(config['description'])
    canon = page.attrs('link', 'rel', 'canonical')
    check(len(canon) == 1, f'{path}: expected one canonical')
    url = canon[0]['href'] if canon else ''
    canonical_urls.add(url)
    check(url.startswith('https://') and urlparse(url).path.rstrip('/') == path.rstrip('/'), f'{path}: incorrect canonical {url}')
    check(len([t for t,a in page.tags if t == 'h1']) == 1, f'{path}: expected one H1')
    check(len(page.attrs('meta', 'property', 'og:image')) > 0, f'{path}: missing sharing image')
    check(page.attrs('meta', 'property', 'og:url')[0]['content'] == url, f'{path}: Open Graph URL mismatch')
    robots = page.attrs('meta', 'name', 'robots')
    check(bool(robots) and ('noindex' in robots[0]['content']) == bool(config.get('noindex')), f'{path}: incorrect index directive')
    nodes = [n for schema in page.schemas for n in schema.get('@graph', [schema])]
    types = [n['@type'] for n in nodes]
    check(types.count('LocalBusiness') == 1 and types.count('WebSite') == 1, f'{path}: business/website schema missing or repeated')
    check(types.count('BreadcrumbList') == (0 if path == '/' else 1), f'{path}: incorrect breadcrumb schema')
    check(types.count('BlogPosting') == (1 if config.get('headline') else 0), f'{path}: incorrect article schema')
    check(not any(k in n for n in nodes for k in ['aggregateRating', 'review', 'potentialAction']), f'{path}: unsupported schema claim')
    for tag, attrs in page.tags:
        if tag == 'img': check('alt' in attrs, f'{path}: image missing alt')
        if tag == 'a' and attrs.get('href', '').startswith('/'):
            internal.add(urlparse(attrs['href']).path)
    print(f'Checked {path}')

status, sitemap = fetch('/sitemap.xml')
check(status == 200, 'Sitemap unavailable')
urls = {n.text for n in ET.fromstring(sitemap).findall('{*}url/{*}loc')}
expected = {u for u in canonical_urls if not pages[urlparse(u).path or '/'].get('noindex')}
check(urls == expected, 'Sitemap does not match canonical indexable pages')
check('<lastmod>' not in sitemap, 'Sitemap contains untracked modification dates')
status, robots = fetch('/robots.txt')
check(status == 200 and 'Sitemap: ' + next(iter(urls)).split('/', 3)[0] + '//' + urlparse(next(iter(urls))).netloc + '/sitemap.xml' in robots, 'Robots sitemap mismatch')
for path in internal - set(pages):
    status, _ = fetch(path)
    check(status == 200, f'Broken internal link: {path} ({status})')
status, html = fetch('/seo-check-missing-page')
check(status == 404, 'Missing page must return 404')
check('noindex' in html, 'Missing page must be noindex')
for asset in ['/images/seo-cover.jpg', '/images/logo.png']:
    with urllib.request.urlopen(base + asset) as response: check(response.status == 200, f'Missing {asset}')
if errors:
    print('\n'.join(errors)); sys.exit(1)
print(f'PASS: {len(pages)} pages, sitemap, robots, internal links, images and 404 checked.')
