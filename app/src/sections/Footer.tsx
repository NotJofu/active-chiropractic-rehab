import { ArrowUp, Phone, Mail, MapPin } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const quickLinks = [
  { name: 'Services', href: '#services' },
  { name: 'About Dr. Authement', href: '#about' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
  { name: 'Blog', href: '/blog' },
];

const services = [
  { name: 'Cox Technique', href: '#services' },
  { name: 'Dry Needling', href: '#services' },
  { name: 'Performance Rehabilitation', href: '#services' },
  { name: 'Manual Therapy & IASTM', href: '#services' },
  { name: 'Cupping Therapy', href: '#services' },
  { name: 'Chiropractic Adjustments', href: '#services' },
];

export function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      if (location.pathname !== '/') {
        navigate('/' + href);
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      navigate(href);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <span className="font-heading text-2xl font-medium tracking-tight block">
                ACTIVE
              </span>
              <span className="text-[10px] tracking-[0.3em] text-gray-500 uppercase block -mt-1">
                Chiropractic & Rehab
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Evidence-based chiropractic care in Thibodaux, Louisiana. Specializing in Cox Technique,
              dry needling, rehabilitation, and manual therapy to help you live pain-free.
            </p>
            <p className="text-xs text-gray-600">
              Active in Faith. Active in Fitness. Active in Life.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs tracking-[0.2em] text-gray-500 uppercase mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs tracking-[0.2em] text-gray-500 uppercase mb-6">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <button
                    onClick={() => handleNavClick(service.href)}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-[0.2em] text-gray-500 uppercase mb-6">
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                <div className="text-gray-400">
                  <p>1152 Canal Boulevard</p>
                  <p>Thibodaux, LA 70301</p>
                </div>
              </div>
              <a 
                href="tel:9854491000" 
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-gray-500" />
                (985) 449-1000
              </a>
              <a 
                href="mailto:activechirorehab1@gmail.com" 
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-gray-500" />
                activechirorehab1@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-xs">
              © {new Date().getFullYear()} Active Chiropractic & Rehab. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <button className="text-gray-600 hover:text-white transition-colors text-xs">
                Privacy Policy
              </button>
              <button className="text-gray-600 hover:text-white transition-colors text-xs">
                Terms of Service
              </button>
              <button
                onClick={scrollToTop}
                className="w-8 h-8 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors"
              >
                <ArrowUp className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
