import Hero from '@/components/sections/Hero';
import AboutPreview from '@/components/sections/AboutPreview';
import Services from '@/components/sections/Services';
import Portfolio from '@/components/sections/Portfolio';
import Testimonials from '@/components/sections/Testimonials';
import Process from '@/components/sections/Process';
// import Stats from '@/components/sections/Stats';

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
