# SEO configuration and launch checks

The site uses Google Search Central guidance for unique titles/descriptions, canonical URLs, crawlable links, sitemaps and structured data. These changes do not guarantee rankings or rich results.

## Configuration

- `lib/seo-pages.json` contains metadata for all 22 public routes, including four articles. Add new routes here when publishing pages.
- The canonical origin defaults to `https://dreamspaceinteriors.co`, matching the existing business contact details and README. Set `NEXT_PUBLIC_SITE_URL` to the actual preferred public origin before building. Preview hostnames are never used automatically.
- Set `GOOGLE_SITE_VERIFICATION` to the raw Search Console token (not an entire meta tag). There is no placeholder verification tag.
- Set `NEXT_PUBLIC_GA_MEASUREMENT_ID` only when a real GA4 property is ready and the business has configured its applicable consent requirements. Analytics is disabled otherwise.
- Set `SITE_NOINDEX=true` on public staging deployments. Vercel preview environments are automatically noindex. These values are evaluated at build time; rebuild after changes.
- `/landing` is an enquiry campaign page marked noindex, follow and excluded from the sitemap. The other 21 pages are indexable. Crawlers can fetch the page to read noindex.
- Sitemap modification dates are omitted because the project does not track meaningful content edit dates. Do not replace them with the current build date.
- Business schema uses only existing name, address, contact information and social links. No invented opening hours, coordinates, awards, ratings or self-serving review markup are added.
- Article schema uses the dates, author names and images shown on each article. Historical 2024 content has not been relabelled as newly published.

## Verification

Run `npm run build`, start the production server with `npm start`, then run `python3 scripts/check-seo.py`. The check covers all routes, unique metadata, canonical/OG alignment, headings, schema JSON, sitemap coverage, robots, internal links, image alt attributes and a real 404 response.

## Before publishing / after deployment

1. Confirm the canonical business domain and redirect alternative hosts to it using permanent redirects on the hosting platform. Confirm HTTPS works.
2. Confirm the accuracy of the visible portfolio claims, testimonial sources, statistics, guarantees, article bylines and business details. Existing stock photographs and sample-looking content must not be represented as verified client work without evidence. Add original project photographs and factual case studies where available.
3. Add the actual Search Console verification token, rebuild and deploy. Submit `/sitemap.xml` in the verified domain property and inspect representative URLs.
4. Run Google's Rich Results Test on the live homepage, contact page and an article. Local JSON checks are not a substitute for Google's live validation.
5. Measure mobile Core Web Vitals using PageSpeed Insights and Search Console after deployment. Local build success cannot establish real-user performance or indexing.
6. Resolve the dependency security findings reported by npm audit. Package upgrades are separate from this SEO change and remain outstanding.

## References

- https://developers.google.com/search/docs/essentials
- https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- https://developers.google.com/search/docs/appearance/structured-data/local-business
- https://developers.google.com/search/docs/appearance/structured-data/sd-policies
