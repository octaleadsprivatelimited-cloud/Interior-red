import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio - Our Best Interior Design Projects | Dream Space Interiors',
  description: 'View our portfolio of award-winning interior design projects. Residential homes, commercial spaces, luxury interiors, and modern designs. See how we transform spaces into beautiful, functional environments.',
  keywords: 'interior design portfolio, design projects, residential design, commercial design, luxury interiors, home design, office design, space transformation, design showcase',
  openGraph: {
    title: 'Portfolio - Our Best Interior Design Projects | Dream Space Interiors',
    description: 'View our portfolio of award-winning interior design projects. Residential homes, commercial spaces, and luxury interiors.',
    type: 'website',
    locale: 'en_IN',
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
