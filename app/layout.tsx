import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { JsonLd } from '@/components/PageSeo';
import { businessSchema, isPreview, siteName, siteUrl } from '@/lib/seo';

const inter = Inter({ subsets: ['latin'], display: 'swap' });
const googleVerification = process.env.GOOGLE_SITE_VERIFICATION;
const analyticsId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const hasAnalytics = analyticsId && /^G-[A-Z0-9]+$/.test(analyticsId);

export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#402530' };
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: siteName, template: `%s | ${siteName}` },
  description: 'Residential and commercial interior design in Hyderabad by Dream Space Interiors.',
  authors: [{ name: siteName }], creator: siteName, publisher: siteName,
  robots: { index: !isPreview, follow: true },
  ...(googleVerification ? { verification: { google: googleVerification } } : {}),
  icons: { icon: '/icon.png', apple: '/apple-icon.png', shortcut: '/favicon.ico' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className="scroll-smooth">
      <body className={inter.className}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-white focus:p-3 focus:text-black">Skip to content</a>
        <JsonLd data={businessSchema()} />
        <Header />
        <main id="main-content" className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
        {hasAnalytics && <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${analyticsId}`} strategy="afterInteractive" />
          <Script id="google-analytics" strategy="afterInteractive">{`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${analyticsId}');`}</Script>
        </>}
      </body>
    </html>
  );
}
