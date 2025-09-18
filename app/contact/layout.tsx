import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Dream Space Interiors | Get Free Consultation',
  description: 'Get in touch with Dream Space Interiors for your interior design needs. Free consultation, 3D design, and expert guidance. Call +91-8985456887 or visit our Hyderabad office.',
  keywords: 'contact interior designer, free consultation, interior design Hyderabad, home design consultation, office design, residential design, commercial design',
  openGraph: {
    title: 'Contact Us - Dream Space Interiors | Get Free Consultation',
    description: 'Get in touch with Dream Space Interiors for your interior design needs. Free consultation, 3D design, and expert guidance.',
    type: 'website',
    locale: 'en_IN',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
