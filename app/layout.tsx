import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Elite Interior Design - Transform Your Space with Style',
    template: '%s | Elite Interior Design'
  },
  description: 'Professional interior design services for residential and commercial spaces. Expert designers creating stunning, functional interiors that reflect your unique style and vision.',
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
  authors: [{ name: 'Elite Interior Design' }],
  creator: 'Elite Interior Design',
  publisher: 'Elite Interior Design',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://eliteinteriordesign.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://eliteinteriordesign.com',
    title: 'Elite Interior Design - Transform Your Space with Style',
    description: 'Professional interior design services for residential and commercial spaces. Expert designers creating stunning, functional interiors.',
    siteName: 'Elite Interior Design',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Elite Interior Design - Professional Interior Design Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elite Interior Design - Transform Your Space with Style',
    description: 'Professional interior design services for residential and commercial spaces.',
    images: ['/images/og-image.jpg'],
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
    google: 'your-google-verification-code',
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
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🏠</text></svg>" />
        <meta name="theme-color" content="#402530" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
