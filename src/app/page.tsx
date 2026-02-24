import { Header } from '@/sections/Header';
import { HeroSection } from '@/sections/Hero';
import { ProjectsSection } from '@/sections/Projects';
import { TapeSection } from '@/sections/Tape';
// import { TestimonialsSection } from '@/sections/Testimonials';
import { AboutSection } from '@/sections/About';
import { CTASection } from '@/sections/CTA';
// import { ContactSection } from '@/sections/Contact';
import { Footer } from '@/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-white overflow-x-hidden">
      <Header />
      <HeroSection />
      <ProjectsSection />
      <TapeSection />
      {/* <TestimonialsSection /> */}
      <AboutSection />
      {/* <ContactSection /> */}
      <CTASection />
      <Footer />
    </main>
  );
}

