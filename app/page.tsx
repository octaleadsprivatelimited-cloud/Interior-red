import { pageMetadata } from '@/lib/seo';
import PageSeo from '@/components/PageSeo';
import Hero from '@/components/sections/Hero';
import RecentGallerySlider from '@/components/sections/RecentGallerySlider';
import AboutPreview from '@/components/sections/AboutPreview';
import Services from '@/components/sections/Services';
import Portfolio from '@/components/sections/Portfolio';
import Testimonials from '@/components/sections/Testimonials';
import Process from '@/components/sections/Process';
// import Stats from '@/components/sections/Stats';

export const metadata = pageMetadata('/');

export default function Home() {
  return (
    <>
      <PageSeo path="/" />
      <Hero />
      <RecentGallerySlider />
      <AboutPreview />
      <Services />
      <Portfolio />
      <Process />
      <Testimonials />
    </>
  );
}
