import { HeroSection } from '@/sections/HeroSection';
import { ServicesSection } from '@/sections/ServicesSection';
import { AboutSection } from '@/sections/AboutSection';
import { WhyChooseSection } from '@/sections/WhyChooseSection';
import { TestimonialsSection } from '@/sections/TestimonialsSection';
import { ContactSection } from '@/sections/ContactSection';

export function HomePage() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}
