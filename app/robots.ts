import type { MetadataRoute } from 'next';
import { absoluteUrl, isPreview } from '@/lib/seo';

export default function robots(): MetadataRoute.Robots {
  // Let crawlers read noindex directives on previews and campaign pages.
  return {
    rules: { userAgent: '*', allow: '/', disallow: ['/api/', '/admin/', '/private/'] },
    ...(isPreview ? {} : { sitemap: absoluteUrl('/sitemap.xml') }),
  };
}
