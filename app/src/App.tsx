import { Navigation } from './sections/Navigation';
import { HeroSection } from './sections/HeroSection';
import { ServicesSection } from './sections/ServicesSection';
import { AboutSection } from './sections/AboutSection';
import { WhyChooseSection } from './sections/WhyChooseSection';
import { TestimonialsSection } from './sections/TestimonialsSection';
import { ContactSection } from './sections/ContactSection';
import { Footer } from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <WhyChooseSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
