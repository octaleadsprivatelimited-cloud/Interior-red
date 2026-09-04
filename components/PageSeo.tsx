import { absoluteUrl, seoPages, siteUrl } from '@/lib/seo';

export function JsonLd({ data }: { data: unknown }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }} />;
}

export default function PageSeo({ path }: { path: string }) {
  const page = seoPages[path];
  const url = absoluteUrl(path);
  const graph: object[] = [{
    '@type': path === '/about' ? 'AboutPage' : path === '/contact' ? 'ContactPage' : 'WebPage',
    '@id': `${url}#webpage`, url, name: page.title, description: page.description,
    inLanguage: 'en-IN', isPartOf: { '@id': `${siteUrl}/#website` }, about: { '@id': `${siteUrl}/#business` },
  }];
  if (path !== '/') {
    const crumbs = [{ name: 'Home', item: absoluteUrl('/') }];
    if (path.startsWith('/blog/')) crumbs.push({ name: 'Blog', item: absoluteUrl('/blog') });
    crumbs.push({ name: page.title, item: url });
    graph.push({ '@type': 'BreadcrumbList', '@id': `${url}#breadcrumb`, itemListElement: crumbs.map((crumb, i) => ({ '@type': 'ListItem', position: i + 1, ...crumb })) });
  }
  if (page.headline) {
    graph.push({
      '@type': 'BlogPosting', '@id': `${url}#article`, mainEntityOfPage: { '@id': `${url}#webpage` },
      headline: page.headline, description: page.description, image: page.image,
      datePublished: page.datePublished, author: { '@type': 'Person', name: page.author },
      publisher: { '@id': `${siteUrl}/#business` }, inLanguage: 'en-IN',
    });
  }
  return <JsonLd data={{ '@context': 'https://schema.org', '@graph': graph }} />;
}
