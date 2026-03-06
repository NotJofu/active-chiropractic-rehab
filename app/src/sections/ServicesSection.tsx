import { motion } from 'framer-motion';
import {
  Activity,
  Target,
  Hand,
  Dumbbell,
  Heart,
  Shield,
  ArrowRight,
  Check,
} from 'lucide-react';

const services = [
  {
    icon: Activity,
    title: 'Cox Technique',
    subtitle: 'Spinal Decompression Therapy',
    description: 'A gentle, non-surgical approach to treating disc herniations, sciatica, and spinal stenosis. The Cox Technique uses specialized flexion-distraction to reduce pressure on spinal nerves and promote healing.',
    benefits: ['Reduces intradiscal pressure', 'Increases spinal canal space', 'Relieves nerve compression', 'Promotes natural healing'],
    cta: 'Learn About Cox Technique',
    href: '#contact',
    image: '/images/cox-technique.jpg',
  },
  {
    icon: Target,
    title: 'Dry Needling',
    subtitle: 'Trigger Point Therapy',
    description: 'Precision treatment targeting myofascial trigger points to release muscle tension, reduce pain, and restore range of motion. Unlike acupuncture, dry needling focuses on musculoskeletal dysfunction.',
    benefits: ['Releases muscle knots', 'Improves flexibility', 'Reduces chronic pain', 'Accelerates recovery'],
    cta: 'Discover Dry Needling',
    href: '#contact',
    image: '/images/dry-needling.jpg',
  },
  {
    icon: Hand,
    title: 'Chiropractic Adjustments',
    subtitle: 'Spinal Manipulation',
    description: 'Traditional hands-on adjustments to correct spinal misalignments, restore proper joint function, and optimize nervous system performance for overall wellness.',
    benefits: ['Restores spinal alignment', 'Improves joint mobility', 'Reduces inflammation', 'Enhances nerve function'],
    cta: 'View Adjustment Options',
    href: '#contact',
  },
  {
    icon: Dumbbell,
    title: 'Rehabilitation Therapy',
    subtitle: 'Exercise & Strengthening',
    description: 'Customized exercise programs designed to strengthen supporting muscles, improve flexibility, and prevent future injuries. Your path to long-term spinal health.',
    benefits: ['Builds core strength', 'Prevents re-injury', 'Improves posture', 'Supports daily activities'],
    cta: 'Start Your Rehab Plan',
    href: '#contact',
  },
  {
    icon: Heart,
    title: 'Pain Management',
    subtitle: 'Comprehensive Care',
    description: 'Holistic approach to managing chronic pain conditions including lower back pain, neck pain, headaches, and sports injuries. We address the root cause, not just symptoms.',
    benefits: ['Drug-free pain relief', 'Personalized treatment', 'Long-term solutions', 'Improved quality of life'],
    cta: 'Find Pain Relief',
    href: '#contact',
  },
  {
    icon: Shield,
    title: 'Wellness Care',
    subtitle: 'Preventive Maintenance',
    description: 'Regular chiropractic maintenance to keep your spine healthy, prevent problems before they start, and maintain optimal function for an active lifestyle.',
    benefits: ['Prevents spinal issues', 'Maintains mobility', 'Optimizes performance', 'Supports overall health'],
    cta: 'Begin Wellness Care',
    href: '#contact',
  },
];

export function ServicesSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.25em] text-gray-400 uppercase mb-4 block">
            Comprehensive Care
          </span>
          <h2 className="font-heading text-4xl lg:text-5xl font-medium text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            From specialized techniques like Cox Technique and dry needling to traditional 
            adjustments and rehabilitation, we offer a full spectrum of chiropractic care 
            tailored to your needs.
          </p>
        </motion.div>

        {/* Featured Services with Images */}
        <div className="space-y-16 mb-16">
          {/* Cox Technique Feature */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-8 items-center bg-white"
          >
            <div className="aspect-video lg:aspect-auto lg:h-full overflow-hidden">
              <img
                src="/images/cox-technique.jpg"
                alt="Cox Technique spinal decompression treatment"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 lg:p-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-teal/10 rounded-full flex items-center justify-center">
                  <Activity className="w-6 h-6 text-teal" />
                </div>
                <span className="text-xs tracking-[0.2em] text-teal uppercase">Specialty Service</span>
              </div>
              <h3 className="font-heading text-3xl font-medium text-gray-900 mb-2">Cox Technique</h3>
              <p className="text-sm text-gray-400 mb-4">Spinal Decompression Therapy</p>
              <p className="text-gray-500 leading-relaxed mb-6">
                A gentle, non-surgical approach to treating disc herniations, sciatica, and spinal stenosis. 
                The Cox Technique uses specialized flexion-distraction to reduce pressure on spinal nerves 
                and promote natural healing.
              </p>
              <ul className="space-y-2 mb-8">
                {['Reduces intradiscal pressure', 'Increases spinal canal space', 'Relieves nerve compression'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 text-teal" />
                    {item}
                  </li>
                ))}
              </ul>
              <motion.button
                onClick={() => scrollToSection('#contact')}
                whileHover={{ x: 5 }}
                className="flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-teal transition-colors"
              >
                Schedule Cox Treatment
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>

          {/* Dry Needling Feature - Reversed */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-8 items-center bg-white"
          >
            <div className="p-8 lg:p-12 order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-turquoise/10 rounded-full flex items-center justify-center">
                  <Target className="w-6 h-6 text-turquoise" />
                </div>
                <span className="text-xs tracking-[0.2em] text-turquoise uppercase">Specialty Service</span>
              </div>
              <h3 className="font-heading text-3xl font-medium text-gray-900 mb-2">Dry Needling</h3>
              <p className="text-sm text-gray-400 mb-4">Trigger Point Therapy</p>
              <p className="text-gray-500 leading-relaxed mb-6">
                Precision treatment targeting myofascial trigger points to release muscle tension, 
                reduce pain, and restore range of motion. Unlike acupuncture, dry needling focuses 
                on musculoskeletal dysfunction for rapid results.
              </p>
              <ul className="space-y-2 mb-8">
                {['Releases muscle knots', 'Improves flexibility', 'Accelerates recovery'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 text-turquoise" />
                    {item}
                  </li>
                ))}
              </ul>
              <motion.button
                onClick={() => scrollToSection('#contact')}
                whileHover={{ x: 5 }}
                className="flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-turquoise transition-colors"
              >
                Try Dry Needling
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
            <div className="aspect-video lg:aspect-auto lg:h-full overflow-hidden order-1 lg:order-2">
              <img
                src="/images/dry-needling.jpg"
                alt="Dry needling trigger point therapy"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Other Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-heading text-2xl font-medium text-gray-900 mb-8 text-center">
            Additional Services
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {services.slice(2).map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white p-8 group cursor-pointer"
                >
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-5 group-hover:bg-teal/10 transition-colors">
                    <Icon className="w-5 h-5 text-gray-600 group-hover:text-teal transition-colors" />
                  </div>
                  <h4 className="font-heading text-xl font-medium text-gray-900 mb-1">
                    {service.title}
                  </h4>
                  <p className="text-xs text-gray-400 uppercase tracking-wide mb-4">
                    {service.subtitle}
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <button
                    onClick={() => scrollToSection(service.href)}
                    className="flex items-center gap-2 text-sm font-medium text-gray-400 group-hover:text-teal transition-colors"
                  >
                    {service.cta}
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
