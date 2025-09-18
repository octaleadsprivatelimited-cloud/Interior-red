import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Interior Design Gallery - Dream Space Interiors | Portfolio',
  description: 'Explore our stunning portfolio of completed interior design projects. Residential, commercial, luxury, and modern designs. View our latest work and get inspired for your next project.',
  keywords: 'interior design gallery, design portfolio, residential design, commercial design, luxury interiors, modern design, home design ideas, office design, Hyderabad interior design',
  openGraph: {
    title: 'Interior Design Gallery - Dream Space Interiors | Portfolio',
    description: 'Explore our stunning portfolio of completed interior design projects. Residential, commercial, luxury, and modern designs.',
    type: 'website',
    locale: 'en_IN',
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
