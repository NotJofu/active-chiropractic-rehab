import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { blogPosts, blogCategories } from '@/data/blogPosts';

export function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter((post) => post.category === activeCategory);

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-gray-900 text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="text-xs tracking-[0.25em] text-gray-400 uppercase mb-4 block">
              Insights & Education
            </span>
            <h1 className="font-heading text-4xl lg:text-6xl font-medium mb-4">
              Our Blog
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Evidence-based articles on chiropractic care, rehabilitation, and the treatments
              we offer at Active Chiropractic & Rehab.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white border-b border-gray-100 sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex gap-2 py-4 overflow-x-auto">
            {blogCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap transition-colors ${
                  activeCategory === category
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">No posts found in this category yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    to={`/blog/${post.slug}`}
                    className="group block bg-white h-full hover:shadow-lg transition-shadow"
                  >
                    {/* Category Banner */}
                    <div className="bg-gradient-to-r from-teal to-turquoise p-4">
                      <span className="text-xs tracking-[0.2em] text-white/80 uppercase">
                        {post.category}
                      </span>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-4 text-xs text-gray-400">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(post.date).toLocaleDateString('en-US', {
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>

                      <h2 className="font-heading text-xl font-medium text-gray-900 mb-3 group-hover:text-teal transition-colors leading-tight">
                        {post.title}
                      </h2>

                      <p className="text-gray-500 text-sm leading-relaxed mb-6">
                        {post.excerpt}
                      </p>

                      <span className="flex items-center gap-2 text-sm font-medium text-gray-400 group-hover:text-teal transition-colors">
                        Read Article
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-medium text-gray-900 mb-4">
            Ready to Start Feeling Better?
          </h2>
          <p className="text-gray-500 mb-8">
            Schedule your consultation today and discover how our evidence-based treatments
            can help you live an active, pain-free life.
          </p>
          <Link
            to="/#contact"
            className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 text-sm font-medium tracking-wide transition-all"
          >
            SCHEDULE YOUR VISIT
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
