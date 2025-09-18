import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Interior Design Blog - Tips, Trends & Inspiration | Dream Space Interiors',
  description: 'Discover the latest interior design trends, tips, and inspiration. Expert advice on home decoration, color schemes, furniture selection, and space planning from professional designers.',
  keywords: 'interior design blog, home decoration tips, design trends, color schemes, furniture selection, space planning, home improvement, design inspiration',
  openGraph: {
    title: 'Interior Design Blog - Tips, Trends & Inspiration | Dream Space Interiors',
    description: 'Discover the latest interior design trends, tips, and inspiration. Expert advice on home decoration and design.',
    type: 'website',
    locale: 'en_IN',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
