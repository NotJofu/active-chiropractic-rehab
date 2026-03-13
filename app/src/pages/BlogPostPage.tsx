import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';
import { blogPosts } from '@/data/blogPosts';

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
  const nextPost = blogPosts[currentIndex + 1] || null;
  const prevPost = blogPosts[currentIndex - 1] || null;

  return (
    <main className="pt-20">
      {/* Header */}
      <section className="bg-gray-900 text-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <span className="inline-block px-3 py-1 bg-teal/20 text-teal text-xs uppercase tracking-wider rounded-full mb-4">
              {post.category}
            </span>

            <h1 className="font-heading text-3xl lg:text-5xl font-medium mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            {post.content.map((paragraph, index) => (
              <p
                key={index}
                className="text-gray-600 leading-relaxed mb-6 text-base"
              >
                {paragraph}
              </p>
            ))}
          </motion.article>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 bg-gray-50 p-8 lg:p-10"
          >
            <h3 className="font-heading text-2xl font-medium text-gray-900 mb-3">
              Interested in {post.category}?
            </h3>
            <p className="text-gray-500 mb-6">
              Schedule a consultation with Dr. Authement to find out if this treatment is right for you.
            </p>
            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 text-sm font-medium tracking-wide transition-all"
            >
              SCHEDULE YOUR VISIT
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Post Navigation */}
          <div className="mt-12 pt-8 border-t border-gray-100 grid sm:grid-cols-2 gap-6">
            {prevPost ? (
              <Link
                to={`/blog/${prevPost.slug}`}
                className="group"
              >
                <span className="text-xs text-gray-400 uppercase tracking-wide">Previous</span>
                <p className="font-heading text-lg font-medium text-gray-900 group-hover:text-teal transition-colors mt-1 leading-tight">
                  {prevPost.title}
                </p>
              </Link>
            ) : (
              <div />
            )}
            {nextPost && (
              <Link
                to={`/blog/${nextPost.slug}`}
                className="group sm:text-right"
              >
                <span className="text-xs text-gray-400 uppercase tracking-wide">Next</span>
                <p className="font-heading text-lg font-medium text-gray-900 group-hover:text-teal transition-colors mt-1 leading-tight">
                  {nextPost.title}
                </p>
              </Link>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
