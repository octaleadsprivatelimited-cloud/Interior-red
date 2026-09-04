import type { Metadata } from 'next';
import pageData from './seo-pages.json';

export const siteName = 'Dream Space Interiors';
// The public business domain is stable across local and preview builds.
const configuredUrl = new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://dreamspaceinteriors.co');
if (!['https:', 'http:'].includes(configuredUrl.protocol) || configuredUrl.pathname !== '/' || configuredUrl.search || configuredUrl.hash || configuredUrl.username || configuredUrl.password) {
  throw new Error('NEXT_PUBLIC_SITE_URL must be an HTTP(S) origin without a path, query or credentials.');
}
export const siteUrl = configuredUrl.origin;
export const isPreview = process.env.VERCEL_ENV === 'preview' || process.env.SITE_NOINDEX === 'true';
export type SeoPage = {
  title: string;
  description: string;
  noindex?: boolean;
  headline?: string;
  author?: string;
  datePublished?: string;
  image?: string;
};
export const seoPages: Record<string, SeoPage> = pageData;
export const absoluteUrl = (path: string) => path === '/' ? siteUrl : new URL(path, `${siteUrl}/`).href;
export const socialImage = '/images/seo-cover.jpg';

export function pageMetadata(path: string): Metadata {
  const page = seoPages[path];
  if (!page) throw new Error(`Missing SEO configuration for ${path}`);
  const title = `${page.title} | ${siteName}`;
  const image = page.image || socialImage;
  const noindex = isPreview || !!page.noindex;
  return {
    title: { absolute: title },
    description: page.description,
    alternates: { canonical: absoluteUrl(path) },
    openGraph: {
      type: page.headline ? 'article' : 'website',
      title, description: page.description, url: absoluteUrl(path),
      siteName, locale: 'en_IN',
      images: [{ url: absoluteUrl(image), alt: page.headline || `${siteName} — Interior design in Hyderabad` }],
      ...(page.headline ? { publishedTime: page.datePublished, authors: [page.author!] } : {}),
    },
    twitter: { card: 'summary_large_image', title, description: page.description, images: [absoluteUrl(image)] },
    robots: {
      index: !noindex, follow: true,
      googleBot: { index: !noindex, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
    },
  };
}

export function businessSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness', '@id': `${siteUrl}/#business`, name: siteName,
        url: siteUrl, logo: absoluteUrl('/images/logo.png'), image: absoluteUrl(socialImage),
        description: 'Residential and commercial interior design services in Hyderabad, Telangana.',
        telephone: '+918985456887', email: 'info@dreamspaceinteriors.co',
        address: { '@type': 'PostalAddress', streetAddress: 'Primark DeStature, F block 702, Bachupally', addressLocality: 'Hyderabad', addressRegion: 'Telangana', addressCountry: 'IN' },
        areaServed: { '@type': 'City', name: 'Hyderabad' },
        sameAs: ['https://www.instagram.com/dreamspaceinteriorsdecors', 'https://www.youtube.com/@DreamSpace_Interiors'],
      },
      { '@type': 'WebSite', '@id': `${siteUrl}/#website`, url: siteUrl, name: siteName, inLanguage: 'en-IN', publisher: { '@id': `${siteUrl}/#business` } },
    ],
  };
}
