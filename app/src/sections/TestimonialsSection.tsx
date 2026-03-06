import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah M.',
    quote: "After months of lower back pain, Dr. Authement's Cox Technique treatments have given me my life back. I can finally play with my kids without pain!",
    treatment: 'Cox Technique',
    highlight: 'Back to playing with kids',
  },
  {
    name: 'Michael T.',
    quote: 'The dry needling sessions have been a game-changer for my shoulder pain. Professional, gentle, and effective care every single visit.',
    treatment: 'Dry Needling',
    highlight: 'Shoulder pain relief',
  },
  {
    name: 'Jennifer L.',
    quote: 'I received respect, compassion, knowledge, and most importantly—relief from a year of chronic pain. I highly recommend Dr. Authement!',
    treatment: 'Chiropractic Care',
    highlight: 'Year of pain resolved',
  },
  {
    name: 'Olivia D.',
    quote: "Dr. Logan's treatments have been amazing for my sports-related pain from swimming. He has kept me active and competitive throughout the season!",
    treatment: 'Sports Injury Care',
    highlight: 'Stayed competitive',
  },
  {
    name: 'Jonathan D.',
    quote: "Dr. Logan's dry needling has been a game-changer. Training Jiu Jitsu multiple times per week puts serious wear on the body, but Dr. Logan has been key to staying injury-free.",
    treatment: 'Dry Needling',
    highlight: 'Injury-free training',
  },
  {
    name: 'Robert K.',
    quote: "I was skeptical about chiropractic care, but Dr. Authement changed my mind. His Cox Technique fixed my sciatica when nothing else worked.",
    treatment: 'Cox Technique',
    highlight: 'Sciatica resolved',
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-white">
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
            Patient Stories
          </span>
          <h2 className="font-heading text-4xl lg:text-5xl font-medium text-gray-900 mb-4">
            What Our Patients Say
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Real results from real patients in the Thibodaux community. 
            Their stories inspire us to continue delivering exceptional care.
          </p>
        </motion.div>

        {/* Featured Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gray-50 p-8 lg:p-12 mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center">
                <Quote className="w-8 h-8 text-teal" />
              </div>
            </div>
            <div className="flex-1">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gray-900 text-gray-900" />
                ))}
              </div>
              <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-6 font-heading">
                &ldquo;{testimonials[0].quote}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div>
                  <p className="font-medium text-gray-900">{testimonials[0].name}</p>
                  <p className="text-sm text-gray-400">{testimonials[0].treatment}</p>
                </div>
                <span className="px-3 py-1 bg-teal/10 text-teal text-xs rounded-full">
                  {testimonials[0].highlight}
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(1).map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gray-50 p-6 group cursor-pointer transition-all"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gray-900 text-gray-900" />
                ))}
              </div>

              <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">{testimonial.name}</p>
                    <p className="text-xs text-gray-400">{testimonial.treatment}</p>
                  </div>
                  <span className="px-2 py-1 bg-teal/10 text-teal text-xs rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    {testimonial.highlight}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-12 border-t border-gray-100"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: '500+', label: 'Happy Patients' },
              { value: '5.0', label: 'Google Rating' },
              { value: '98%', label: 'Would Recommend' },
              { value: '2', label: 'Specialized Techniques' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              >
                <p className="text-4xl font-heading font-medium text-gray-900 mb-1">{stat.value}</p>
                <p className="text-xs text-gray-400 uppercase tracking-wide">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
