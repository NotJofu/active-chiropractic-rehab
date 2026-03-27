import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function TermsConditionsPage() {
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
              to="/"
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>

            <h1 className="font-heading text-3xl lg:text-5xl font-medium mb-4 leading-tight">
              SMS Terms & Conditions
            </h1>
            <p className="text-gray-400 text-sm">
              Effective Date: March 23, 2026
            </p>
            <p className="text-gray-400 text-sm mt-1">
              Active Chiropractic and Rehab
            </p>
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
            {/* Section 1 */}
            <h2 className="font-heading text-xl font-medium text-gray-900 mt-10 mb-4">
              1. Program Name
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 text-base">
              Active Chiropractic and Rehab SMS Notifications
            </p>

            {/* Section 2 */}
            <h2 className="font-heading text-xl font-medium text-gray-900 mt-10 mb-4">
              2. Program Description
            </h2>
            <p className="text-gray-600 leading-relaxed mb-3 text-base">
              By opting into SMS communications, you agree to receive text messages from Active Chiropractic and Rehab, including:
            </p>
            <ul className="list-disc pl-6 text-gray-600 text-base space-y-1 mb-6">
              <li>Appointment reminders</li>
              <li>Scheduling confirmations and updates</li>
              <li>General clinic communication</li>
            </ul>

            {/* Section 3 */}
            <h2 className="font-heading text-xl font-medium text-gray-900 mt-10 mb-4">
              3. Message Frequency
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 text-base">
              Message frequency may vary depending on your interaction with our clinic.
            </p>

            {/* Section 4 */}
            <h2 className="font-heading text-xl font-medium text-gray-900 mt-10 mb-4">
              4. Message and Data Rates
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 text-base">
              Message and data rates may apply.
            </p>

            {/* Section 5 */}
            <h2 className="font-heading text-xl font-medium text-gray-900 mt-10 mb-4">
              5. Opt-In Consent
            </h2>
            <p className="text-gray-600 leading-relaxed mb-3 text-base">
              By providing your phone number, you consent to receive SMS messages from Active Chiropractic and Rehab.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6 text-base">
              Consent is not a condition of receiving treatment.
            </p>

            {/* Section 6 */}
            <h2 className="font-heading text-xl font-medium text-gray-900 mt-10 mb-4">
              6. Opt-Out Instructions
            </h2>
            <p className="text-gray-600 leading-relaxed mb-3 text-base">
              You may opt out at any time:
            </p>
            <ul className="list-disc pl-6 text-gray-600 text-base space-y-1 mb-3">
              <li>Reply <strong>STOP</strong> to unsubscribe</li>
              <li>Reply <strong>HELP</strong> for assistance</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mb-6 text-base">
              You may also contact us directly at: <a href="tel:9854491000" className="text-teal hover:underline">985-449-1000</a>
            </p>

            {/* Section 7 */}
            <h2 className="font-heading text-xl font-medium text-gray-900 mt-10 mb-4">
              7. Customer Support
            </h2>
            <p className="text-gray-600 leading-relaxed mb-3 text-base">
              For assistance:
            </p>
            <ul className="list-disc pl-6 text-gray-600 text-base space-y-1 mb-6">
              <li>Reply <strong>HELP</strong> to any message</li>
              <li>Call: <a href="tel:9854491000" className="text-teal hover:underline">985-449-1000</a></li>
              <li>Email: <a href="mailto:activechirorehab1@gmail.com" className="text-teal hover:underline">activechirorehab1@gmail.com</a></li>
            </ul>

            {/* Section 8 */}
            <h2 className="font-heading text-xl font-medium text-gray-900 mt-10 mb-4">
              8. Privacy Policy
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 text-base">
              Your information will be handled in accordance with our{' '}
              <Link to="/privacy-policy" className="text-teal hover:underline font-medium">
                Privacy Policy
              </Link>.
            </p>

            {/* Section 9 */}
            <h2 className="font-heading text-xl font-medium text-gray-900 mt-10 mb-4">
              9. Data Sharing Disclosure
            </h2>
            <ul className="list-disc pl-6 text-gray-600 text-base space-y-1 mb-6">
              <li>Mobile information and opt-in consent will NOT be shared with third parties or affiliates for marketing or promotional purposes</li>
              <li>Information may be shared only as required for healthcare operations or by law</li>
            </ul>

            {/* Section 10 */}
            <h2 className="font-heading text-xl font-medium text-gray-900 mt-10 mb-4">
              10. Carrier Disclaimer
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 text-base">
              Carriers are not liable for any delayed or undelivered messages.
            </p>

            {/* Section 11 */}
            <h2 className="font-heading text-xl font-medium text-gray-900 mt-10 mb-4">
              11. Eligibility
            </h2>
            <p className="text-gray-600 leading-relaxed mb-3 text-base">
              By using this service, you confirm that:
            </p>
            <ul className="list-disc pl-6 text-gray-600 text-base space-y-1 mb-6">
              <li>You are the authorized user of the mobile number provided</li>
              <li>You are at least 18 years old or have parental/guardian consent</li>
            </ul>

            {/* Section 12 */}
            <h2 className="font-heading text-xl font-medium text-gray-900 mt-10 mb-4">
              12. Changes to Terms
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 text-base">
              We reserve the right to modify these Terms & Conditions at any time. Updates will be posted on this page.
            </p>

            {/* Section 13 */}
            <h2 className="font-heading text-xl font-medium text-gray-900 mt-10 mb-4">
              13. Contact Information
            </h2>
            <div className="text-gray-600 text-base space-y-1">
              <p className="font-medium text-gray-900">Active Chiropractic and Rehab</p>
              <p>1152 Canal Blvd. Thibodaux, LA</p>
              <p><a href="tel:9854491000" className="text-teal hover:underline">985-449-1000</a></p>
              <p><a href="mailto:activechirorehab1@gmail.com" className="text-teal hover:underline">activechirorehab1@gmail.com</a></p>
            </div>
          </motion.article>
        </div>
      </section>
    </main>
  );
}
