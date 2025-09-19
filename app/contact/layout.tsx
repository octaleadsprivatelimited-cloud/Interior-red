import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Interior Designers in Hyderabad | Dream Space Interiors',
  description: 'Contact Dream Space Interiors, Hyderabad\'s premier interior design company. Free consultation, 3D design, and expert guidance. Call +91-8985456887 or visit our Hyderabad office.',
  keywords: 'contact interior designer Hyderabad, free consultation Hyderabad, interior design Hyderabad, home design consultation Telangana, office design Hyderabad, residential design Hyderabad, commercial design Telangana, interior designers contact Hyderabad',
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
