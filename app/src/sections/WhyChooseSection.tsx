import { motion } from 'framer-motion';
import { Award, UserCheck, MapPin, Wallet, Clock, Heart, Shield, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Specialized Expertise',
    description: 'Certified in Cox Technique, neurodynamic dry needling, performance rehabilitation, and manual therapy—advanced methods not offered by all chiropractors.',
  },
  {
    icon: UserCheck,
    title: 'Personalized Care',
    description: 'Every patient receives a customized treatment plan based on their unique condition and goals.',
  },
  {
    icon: MapPin,
    title: 'Convenient Location',
    description: 'Easy to find on Canal Boulevard in Thibodaux with ample parking and accessible hours.',
  },
  {
    icon: Wallet,
    title: 'Flexible Payment',
    description: 'Most major insurance plans accepted, plus affordable cash options for uninsured patients.',
  },
  {
    icon: Clock,
    title: 'Timely Appointments',
    description: 'We respect your time with efficient scheduling and minimal wait times.',
  },
  {
    icon: Heart,
    title: 'Compassionate Care',
    description: 'A welcoming environment where you are heard, respected, and treated like family.',
  },
];

export function WhyChooseSection() {
  return (
    <section className="py-24 lg:py-32 bg-gray-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 right-20 w-96 h-96 bg-teal/5 rounded-full"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-64 h-64 bg-white/5 rounded-full"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4 text-teal" />
            <span className="text-xs tracking-[0.2em] text-gray-400 uppercase">Why Patients Choose Us</span>
          </motion.div>
          <h2 className="font-heading text-4xl lg:text-5xl font-medium mb-4">
            The Active Difference
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We combine advanced techniques with personalized care to deliver results 
            that keep our patients coming back—and referring their friends and family.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, backgroundColor: 'rgba(255,255,255,0.05)' }}
                className="p-8 bg-white/5 rounded-lg transition-all"
              >
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-teal" />
                </div>
                <h3 className="font-heading text-lg font-medium mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 flex flex-wrap justify-center items-center gap-8"
        >
          <div className="flex items-center gap-3">
            <Shield className="w-5 h-5 text-teal" />
            <span className="text-sm text-gray-400">Licensed & Insured</span>
          </div>
          <div className="w-px h-6 bg-gray-700" />
          <div className="flex items-center gap-3">
            <Award className="w-5 h-5 text-teal" />
            <span className="text-sm text-gray-400">Board Certified</span>
          </div>
          <div className="w-px h-6 bg-gray-700" />
          <div className="flex items-center gap-3">
            <Heart className="w-5 h-5 text-teal" />
            <span className="text-sm text-gray-400">Patient-Focused</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
