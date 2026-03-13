import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useScrollPosition } from '@/hooks/useScrollPosition';

const navLinks = [
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
  { name: 'Blog', href: '/blog' },
];

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isScrolled } = useScrollPosition();
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
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

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith('#')) {
      handleNavClick(href);
    } else {
      navigate(href);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-sm shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.a
              href="/"
              className="flex flex-col items-start"
              onClick={(e) => {
                e.preventDefault();
                if (location.pathname !== '/') {
                  navigate('/');
                } else {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              whileHover={{ opacity: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              <span className="font-heading text-2xl font-semibold tracking-tight text-gray-900">
                ACTIVE
              </span>
              <span className="text-[10px] tracking-[0.3em] text-gray-500 uppercase -mt-1">
                Chiropractic & Rehab
              </span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors tracking-wide"
                >
                  {link.name.toUpperCase()}
                </button>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-6">
              <a
                href="tel:9854491000"
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                (985) 449-1000
              </a>
              <Button
                onClick={() => scrollToSection('#contact')}
                className="bg-gray-900 hover:bg-gray-800 text-white rounded-none px-6 py-2.5 text-sm font-medium tracking-wide transition-all"
              >
                BOOK NOW
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-900" />
              ) : (
                <Menu className="w-6 h-6 text-gray-900" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/20"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              className="absolute right-0 top-0 h-full w-80 bg-white shadow-xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <div className="pt-24 px-8">
                <div className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <button
                      key={link.name}
                      onClick={() => handleNavClick(link.href)}
                      className="text-left text-lg font-medium text-gray-900 hover:text-teal transition-colors"
                    >
                      {link.name}
                    </button>
                  ))}
                </div>

                <div className="mt-10 pt-8 border-t border-gray-100">
                  <a
                    href="tel:9854491000"
                    className="flex items-center gap-2 text-gray-600 mb-4"
                  >
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">(985) 449-1000</span>
                  </a>
                  <Button
                    onClick={() => scrollToSection('#contact')}
                    className="w-full bg-gray-900 hover:bg-gray-800 text-white rounded-none py-6 font-medium"
                  >
                    Book Appointment
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
