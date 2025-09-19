import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000');

export const metadata: Metadata = {
        title: {
          default: 'Dream Space Interiors - Transform Your Space with Style',
          template: '%s | Dream Space Interiors'
        },
        description: 'Professional interior design services in Hyderabad, Telangana. Expert designers creating stunning, functional interiors for residential and commercial spaces that reflect your unique style and vision.',
  keywords: [
    'interior design',
    'interior designer',
    'home interior design',
    'residential interior design',
    'commercial interior design',
    'luxury interior design',
    'modern interior design',
    'contemporary interior design',
    'home decor',
    'interior decoration',
    'interior design Hyderabad',
    'interior designer Hyderabad',
    'home interior design Hyderabad',
    'interior design Telangana',
    'interior designer Telangana',
    'interior design India',
    'Hyderabad interior design services',
    'Telangana interior design',
    'interior design companies Hyderabad',
    'best interior designer Hyderabad',
    'space planning',
    'interior architecture',
    'furniture selection',
    'furniture arrangement',
    'color consultation',
    'color scheme design',
    'interior styling',
    'home renovation',
    'kitchen design',
    'bathroom design',
    'living room design',
    'bedroom design',
    'office interior design',
    'restaurant interior design',
    'retail space design',
    'hospitality design',
    'interior design services',
    'custom interior design',
    'interior design consultation',
    'home staging',
    'interior design trends',
    'sustainable interior design',
    'eco-friendly interior design',
    'minimalist interior design',
    'scandinavian interior design',
    'industrial interior design',
    'bohemian interior design',
    'traditional interior design',
    'transitional interior design',
    'interior design portfolio',
    'interior design inspiration',
    'interior design ideas',
    'home improvement',
    'room makeover',
    'interior design cost',
    'interior design budget',
    'interior design process',
    'interior design timeline',
    'virtual interior design',
    'online interior design',
    '3D interior design',
    'interior design visualization',
    'interior design renderings',
    'interior design mood boards',
    'interior design materials',
    'interior design finishes',
    'interior design lighting',
    'interior design accessories',
    'interior design art',
    'interior design plants',
    'interior design textiles',
    'interior design rugs',
    'interior design curtains',
    'interior design wallpaper',
    'interior design paint',
    'interior design flooring',
    'interior design tiles',
    'interior design countertops',
    'interior design cabinets',
    'interior design appliances',
    'interior design fixtures',
    'interior design hardware',
    'interior design storage',
    'interior design organization',
    'interior design decluttering',
    'interior design feng shui',
    'interior design psychology',
    'interior design wellness',
    'interior design accessibility',
    'interior design universal design',
    'interior design aging in place',
    'interior design small spaces',
    'interior design open concept',
    'interior design privacy',
    'interior design acoustics',
    'interior design ventilation',
    'interior design heating',
    'interior design cooling',
    'interior design insulation',
    'interior design windows',
    'interior design doors',
    'interior design security',
    'interior design safety',
    'interior design maintenance',
    'interior design durability',
    'interior design sustainability',
    'interior design energy efficiency',
    'interior design smart home',
    'interior design technology',
    'interior design automation',
    'interior design home theater',
    'interior design home office',
    'interior design home gym',
    'interior design home library',
    'interior design home bar',
    'interior design home spa',
    'interior design home garden',
    'interior design outdoor living'
  ],
        authors: [{ name: 'Dream Space Interiors' }],
        creator: 'Dream Space Interiors',
        publisher: 'Dream Space Interiors',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
            title: 'Dream Space Interiors - Transform Your Space with Style',
            description: 'Professional interior design services for residential and commercial spaces. Expert designers creating stunning, functional interiors.',
            siteName: 'Dream Space Interiors',
    images: [
      {
        url: 'https://placehold.co/1200x630?text=Elite+Interior+Design',
        width: 1200,
        height: 630,
        alt: 'Dream Space Interiors - Professional Interior Design Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dream Space Interiors - Transform Your Space with Style',
    description: 'Professional interior design services for residential and commercial spaces.',
    images: ['https://placehold.co/1200x630?text=Elite+Interior+Design'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification=your-actual-verification-code-here',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="192x192" href="/favicon-192x192.png" />
        <link rel="apple-touch-icon" sizes="512x512" href="/favicon-512x512.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="theme-color" content="#402530" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Google Analytics 4 */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID', {
                page_title: document.title,
                page_location: window.location.href,
              });
            `,
          }}
        />
        {/* JSON-LD structured data for Organization and Website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Dream Space Interiors',
              url: siteUrl,
              logo: `${siteUrl}/images/logo.png`,
              sameAs: [
                'https://www.instagram.com/dreamspaceinteriorsdecors',
                'https://www.youtube.com/@DreamSpace_Interiors'
              ],
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Hyderabad',
                addressRegion: 'Telangana',
                addressCountry: 'IN',
              },
              contactPoint: [{
                '@type': 'ContactPoint',
                contactType: 'customer service',
                telephone: '+91-8985456887',
                areaServed: 'IN',
                availableLanguage: ['English'],
              }],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              url: siteUrl,
              name: 'Dream Space Interiors',
              potentialAction: {
                '@type': 'SearchAction',
                target: `${siteUrl}/search?q={search_term_string}`,
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
