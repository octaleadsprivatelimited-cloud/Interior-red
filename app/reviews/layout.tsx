import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Client Reviews - Dream Space Interiors | Testimonials',
  description: 'Read authentic client reviews and testimonials for Dream Space Interiors. See what our satisfied customers say about our interior design services and transformations.',
  keywords: 'interior design reviews, client testimonials, customer feedback, design service reviews, interior designer ratings, Hyderabad interior design, home design reviews',
  openGraph: {
    title: 'Client Reviews - Dream Space Interiors | Testimonials',
    description: 'Read authentic client reviews and testimonials for Dream Space Interiors. See what our satisfied customers say about our interior design services.',
    type: 'website',
    locale: 'en_IN',
  },
};

export default function ReviewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
