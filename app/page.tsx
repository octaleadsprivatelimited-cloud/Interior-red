import { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import AboutPreview from '@/components/sections/AboutPreview';
import Services from '@/components/sections/Services';
import Portfolio from '@/components/sections/Portfolio';
import Testimonials from '@/components/sections/Testimonials';
import Process from '@/components/sections/Process';
// import Stats from '@/components/sections/Stats';

export const metadata: Metadata = {
  title: 'Dream Space Interiors - Transform Your Space with Style',
  description: 'Professional interior design services in Hyderabad. Expert designers creating stunning, functional interiors for residential and commercial spaces. Free consultation, 3D design, and 45-day delivery.',
  keywords: 'interior design, interior designer, home design, office design, residential design, commercial design, Hyderabad, Telangana, 3D design, renovation',
  openGraph: {
    title: 'Dream Space Interiors - Transform Your Space with Style',
    description: 'Professional interior design services in Hyderabad. Expert designers creating stunning, functional interiors for residential and commercial spaces.',
    type: 'website',
    locale: 'en_IN',
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <Services />
      <Portfolio />
      <Process />
      <Testimonials />
    </>
  );
}
