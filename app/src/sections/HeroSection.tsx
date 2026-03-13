import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, MapPin, Clock } from 'lucide-react';

const stats = [
  { value: '500+', label: 'Patients Helped' },
  { value: '5.0', label: 'Google Rating' },
  { value: '4', label: 'Specialized Techniques' },
];

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-white pt-20 relative overflow-hidden">
      {/* Animated background shapes */}
      <motion.div
        className="absolute top-40 right-20 w-64 h-64 bg-teal/5 rounded-full"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute bottom-40 left-10 w-48 h-48 bg-turquoise/5 rounded-full"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 min-h-[calc(100vh-5rem)] items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="py-12 lg:py-0"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-2 mb-6"
            >
              <MapPin className="w-4 h-4 text-teal" />
              <span className="text-sm text-gray-500">Thibodaux, Louisiana</span>
              <span className="text-gray-300">|</span>
              <Clock className="w-4 h-4 text-teal" />
              <span className="text-sm text-gray-500">Mon-Thu 8-6 | Fri 8-12</span>
            </motion.div>

            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-medium text-gray-900 leading-[1.05] mb-6">
              Evidence Based Chiropractic
              <br />
              <span className="italic text-teal">Care You Can Trust</span>
            </h1>

            <p className="text-lg text-gray-500 leading-relaxed mb-8 max-w-lg">
              Dr. Logan Authement, D.C. is an evidence-based, rehab-focused chiropractor
              specializing in spinal decompression using the Cox Technique, neurodynamic
              dry needling, and performance rehabilitation. We provide personalized treatment
              plans designed to relieve pain, restore function, and keep you active in faith,
              fitness, and life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  onClick={() => scrollToSection('#contact')}
                  className="bg-gray-900 hover:bg-gray-800 text-white rounded-none px-8 py-6 text-sm font-medium tracking-wide transition-all"
                >
                  SCHEDULE YOUR VISIT
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  onClick={() => scrollToSection('#services')}
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:border-gray-900 hover:text-gray-900 rounded-none px-8 py-6 text-sm font-medium tracking-wide transition-all bg-transparent"
                >
                  EXPLORE SERVICES
                </Button>
              </motion.div>
            </div>

            {/* Quick Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap items-center gap-6 mb-8"
            >
              <a
                href="tel:9854491000"
                className="flex items-center gap-2 text-gray-600 hover:text-teal transition-colors"
              >
                <div className="w-10 h-10 bg-teal/10 rounded-full flex items-center justify-center">
                  <Phone className="w-4 h-4 text-teal" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Call Us</p>
                  <p className="font-medium">(985) 449-1000</p>
                </div>
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex gap-8 pt-6 border-t border-gray-100"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                >
                  <p className="text-3xl font-heading font-medium text-gray-900">{stat.value}</p>
                  <p className="text-xs text-gray-400 uppercase tracking-wide">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] lg:aspect-auto lg:h-[600px]">
              <img
                src="/images/hero-main.jpg"
                alt="Dr. Logan Authement providing expert chiropractic care"
                className="w-full h-full object-cover"
              />
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -left-4 lg:-left-8 bottom-12 bg-white shadow-lg p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-teal/10 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Cox Technique</p>
                    <p className="text-xs text-gray-400">Certified Provider</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
