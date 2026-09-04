import type { MetadataRoute } from 'next';
import { absoluteUrl, isPreview, seoPages } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  if (isPreview) return [];
  // Only canonical, indexable pages. Omit lastmod until genuine edit dates are tracked.
  return Object.entries(seoPages)
    .filter(([, page]) => !page.noindex)
    .map(([path]) => ({ url: absoluteUrl(path) }));
}
