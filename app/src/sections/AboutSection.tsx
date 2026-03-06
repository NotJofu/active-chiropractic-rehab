import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, GraduationCap, Stethoscope, Users, MapPin, Phone, Mail } from 'lucide-react';

const credentials = [
  { icon: GraduationCap, label: 'Doctor of Chiropractic (D.C.)' },
  { icon: Award, label: 'Certified Cox Technique Provider' },
  { icon: Stethoscope, label: 'Dry Needling Certified' },
  { icon: Users, label: 'Louisiana Chiropractic Association Member' },
];

const values = [
  {
    title: 'Patient-First Approach',
    description: 'Your health and comfort are our top priorities. Every treatment plan is customized to your unique needs and goals.',
  },
  {
    title: 'Evidence-Based Care',
    description: 'We use proven techniques backed by research to deliver effective, lasting results for our patients.',
  },
  {
    title: 'Holistic Wellness',
    description: 'We treat the whole person, not just symptoms, focusing on long-term health and prevention.',
  },
];

export function AboutSection() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main About Section */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="/images/doctor-portrait.png"
                alt="Dr. Logan Authement, D.C."
                className="w-full h-full object-cover"
              />
            </div>
            {/* Contact Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 lg:right-8 bg-white shadow-xl p-6 max-w-xs"
            >
              <p className="font-heading text-lg font-medium text-gray-900 mb-4">Get in Touch</p>
              <div className="space-y-3">
                <a href="tel:9854491000" className="flex items-center gap-3 text-sm text-gray-600 hover:text-teal transition-colors">
                  <Phone className="w-4 h-4" />
                  (985) 449-1000
                </a>
                <a href="mailto:activechirorehab1@gmail.com" className="flex items-center gap-3 text-sm text-gray-600 hover:text-teal transition-colors">
                  <Mail className="w-4 h-4" />
                  activechirorehab1@gmail.com
                </a>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <MapPin className="w-4 h-4" />
                  1152 Canal Blvd, Thibodaux
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs tracking-[0.25em] text-gray-400 uppercase mb-4 block">
              Meet Your Chiropractor
            </span>

            <h2 className="font-heading text-4xl lg:text-5xl font-medium text-gray-900 mb-4">
              Dr. Logan Authement
            </h2>

            <p className="text-lg text-teal font-medium mb-8">
              D.C. | Chiropractor & Owner
            </p>

            <div className="space-y-4 text-gray-500 leading-relaxed mb-8">
              <p>
                Dr. Logan Authement is a dedicated chiropractor serving the Thibodaux community 
                with a passion for helping patients achieve optimal health naturally. His approach 
                combines advanced techniques with compassionate, personalized care.
              </p>
              <p>
                As a Certified Cox Technique provider with specialized training in dry needling, 
                Dr. Authement offers evidence-based treatments for a wide range of musculoskeletal 
                conditions—from chronic back pain to sports injuries.
              </p>
              <p>
                His philosophy is simple: everyone deserves access to quality healthcare. That is 
                why Active Chiropractic accepts most insurance plans and offers flexible payment 
                options to ensure nothing stands between you and your health.
              </p>
            </div>

            {/* Quote */}
            <blockquote className="border-l-2 border-teal pl-6 mb-10">
              <p className="text-gray-600 italic leading-relaxed text-lg">
                &ldquo;My goal is not just to relieve your pain, but to help you understand your 
                body and maintain lasting wellness through personalized, compassionate care.&rdquo;
              </p>
              <cite className="text-sm text-gray-400 mt-2 block">— Dr. Logan Authement</cite>
            </blockquote>

            {/* Credentials */}
            <div className="flex flex-wrap gap-3 mb-10">
              {credentials.map((cred) => {
                const Icon = cred.icon;
                return (
                  <div
                    key={cred.label}
                    className="flex items-center gap-2 px-4 py-2.5 bg-gray-50 rounded-full"
                  >
                    <Icon className="w-4 h-4 text-teal" />
                    <span className="text-sm text-gray-600">{cred.label}</span>
                  </div>
                );
              })}
            </div>

            <Button
              onClick={scrollToContact}
              className="bg-gray-900 hover:bg-gray-800 text-white rounded-none px-8 py-6 text-sm font-medium tracking-wide transition-all"
            >
              SCHEDULE A CONSULTATION
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-t border-gray-100 pt-16"
        >
          <div className="text-center mb-12">
            <span className="text-xs tracking-[0.25em] text-gray-400 uppercase mb-4 block">
              Our Philosophy
            </span>
            <h3 className="font-heading text-3xl font-medium text-gray-900">
              What We Stand For
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-5">
                  <span className="text-2xl font-heading font-medium text-teal">{index + 1}</span>
                </div>
                <h4 className="font-heading text-xl font-medium text-gray-900 mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
