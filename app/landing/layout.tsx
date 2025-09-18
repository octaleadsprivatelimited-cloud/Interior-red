import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Get Your Dream Home Designed - Free Consultation | Dream Space Interiors',
  description: 'Transform your space with professional interior design services. Get free consultation, 3D design, and premium materials. 45-day delivery guarantee. Book your free home visit today!',
  keywords: 'interior design consultation, free home visit, 3D design, home renovation, interior designer Hyderabad, residential design, commercial design, space planning',
  openGraph: {
    title: 'Get Your Dream Home Designed - Free Consultation | Dream Space Interiors',
    description: 'Transform your space with professional interior design services. Get free consultation, 3D design, and premium materials. 45-day delivery guarantee.',
    type: 'website',
    locale: 'en_IN',
  },
};

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
