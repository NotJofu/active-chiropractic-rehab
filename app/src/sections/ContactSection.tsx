import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, ArrowRight, Facebook, Instagram, Check } from 'lucide-react';
import { useState } from 'react';

const contactInfo = [
  {
    icon: MapPin,
    label: 'Visit Our Office',
    value: '1152 Canal Boulevard',
    subValue: 'Thibodaux, LA 70301',
    href: 'https://maps.google.com/?q=1152+Canal+Boulevard+Thibodaux+LA+70301',
  },
  {
    icon: Phone,
    label: 'Call Us',
    value: '(985) 449-1000',
    href: 'tel:9854491000',
  },
  {
    icon: Mail,
    label: 'Email Us',
    value: 'activechirorehab1@gmail.com',
    href: 'mailto:activechirorehab1@gmail.com',
  },
];

const hours = [
  { day: 'Monday', time: '8:00 AM - 6:00 PM' },
  { day: 'Tuesday', time: '8:00 AM - 6:00 PM' },
  { day: 'Wednesday', time: '8:00 AM - 6:00 PM' },
  { day: 'Thursday', time: '8:00 AM - 6:00 PM' },
  { day: 'Friday', time: '8:00 AM - 12:00 PM' },
  { day: 'Saturday', time: 'By Appointment Only' },
];

const insurancePlans = [
  'Most Major Insurance',
  'Medicare',
  'Workers Compensation',
  'Auto Accident Claims',
  'Flexible Cash Plans',
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will contact you soon to schedule your appointment.');
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-gray-50">
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
            Start Your Journey
          </span>
          <h2 className="font-heading text-4xl lg:text-5xl font-medium text-gray-900 mb-4">
            Schedule Your Visit
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            Ready to experience relief? Contact us today to schedule your initial consultation 
            and take the first step toward a pain-free life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-gray-600 group-hover:text-teal transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">{item.label}</p>
                      <p className="text-gray-900 font-medium">{item.value}</p>
                      {item.subValue && <p className="text-gray-900 font-medium">{item.subValue}</p>}
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Hours */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-5 h-5 text-teal" />
                <p className="text-sm font-medium text-gray-900">Office Hours</p>
              </div>
              <div className="space-y-2">
                {hours.map((hour) => (
                  <div key={hour.day} className="flex justify-between text-sm">
                    <span className="text-gray-600">{hour.day}</span>
                    <span className="text-gray-900 font-medium">{hour.time}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Insurance */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <p className="text-xs text-gray-400 uppercase tracking-wide mb-4">We Accept</p>
              <div className="flex flex-wrap gap-2">
                {insurancePlans.map((plan) => (
                  <span
                    key={plan}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-white text-sm text-gray-600 rounded-full"
                  >
                    <Check className="w-3 h-3 text-teal" />
                    {plan}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Social */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex gap-3"
            >
              <a
                href="https://www.facebook.com/profile.php?id=61576247130509"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center hover:bg-teal transition-colors"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.instagram.com/activechiroandrehab/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-purple-500 hover:via-pink-500 hover:to-orange-400 transition-all"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
            </motion.div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="bg-white p-8 lg:p-10 shadow-sm">
              <h3 className="font-heading text-2xl font-medium text-gray-900 mb-2">
                Request an Appointment
              </h3>
              <p className="text-gray-500 text-sm mb-8">
                Fill out the form below and we will contact you within 24 hours to confirm your appointment.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs text-gray-400 uppercase tracking-wide mb-2">
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full px-4 py-3 rounded-none border border-gray-200 focus:border-gray-900 focus:ring-0"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 uppercase tracking-wide mb-2">
                      Phone Number *
                    </label>
                    <Input
                      type="tel"
                      placeholder="(985) 555-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="w-full px-4 py-3 rounded-none border border-gray-200 focus:border-gray-900 focus:ring-0"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-gray-400 uppercase tracking-wide mb-2">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-none border border-gray-200 focus:border-gray-900 focus:ring-0"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-400 uppercase tracking-wide mb-2">
                    Tell Us About Your Concerns
                  </label>
                  <Textarea
                    placeholder="What symptoms are you experiencing? How long have you had them?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 rounded-none border border-gray-200 focus:border-gray-900 focus:ring-0 resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white rounded-none py-6 text-sm font-medium tracking-wide transition-all"
                >
                  REQUEST APPOINTMENT
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <p className="text-xs text-gray-400 text-center">
                  By submitting, you agree to be contacted about your appointment request.
                </p>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.8033847894584!2d-90.8236!3d29.7916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8620a65c7e5f6c2b%3A0x3e7f8e9d0a1b2c3d!2s1152%20Canal%20Blvd%2C%20Thibodaux%2C%20LA%2070301!5e0!3m2!1sen!2sus!4v1704067200000!5m2!1sen!2sus"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Active Chiropractic & Rehab Location"
          />
        </motion.div>
      </div>
    </section>
  );
}
