import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function PrivacyPolicyPage() {
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
              Privacy Policy
            </h1>
            <p className="text-gray-400 text-sm">
              Effective Date: March 27, 2026
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
              1. Introduction
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 text-base">
              Active Chiropractic and Rehab is committed to protecting your privacy and maintaining the confidentiality of your personal and health information. This Privacy Policy explains how we collect, use, and safeguard your information, including communications via phone and SMS (text messaging).
            </p>

            {/* Section 2 */}
            <h2 className="font-heading text-xl font-medium text-gray-900 mt-10 mb-4">
              2. Information We Collect
            </h2>
            <p className="text-gray-600 leading-relaxed mb-3 text-base">
              We may collect the following information:
            </p>
            <ul className="list-disc pl-6 text-gray-600 text-base space-y-1 mb-6">
              <li>Full name</li>
              <li>Phone number</li>
              <li>Email address</li>
              <li>Date of birth</li>
              <li>Health and treatment information</li>
              <li>Appointment and billing details</li>
              <li>Information submitted through website forms</li>
            </ul>

            {/* Section 3 */}
            <h2 className="font-heading text-xl font-medium text-gray-900 mt-10 mb-4">
              3. How We Use Your Information
            </h2>
            <p className="text-gray-600 leading-relaxed mb-3 text-base">
              We use your information to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 text-base space-y-1 mb-6">
              <li>Schedule and manage appointments</li>
              <li>Provide healthcare services</li>
              <li>Communicate regarding your care</li>
              <li>Send appointment reminders and updates</li>
              <li>Process payments and maintain records</li>
            </ul>

            {/* Section 4 */}
            <h2 className="font-heading text-xl font-medium text-gray-900 mt-10 mb-4">
              4. SMS Communication
            </h2>
            <p className="text-gray-600 leading-relaxed mb-3 text-base">
              By providing your phone number, you consent to receive SMS (text) messages from Active Chiropractic and Rehab. These messages may include:
            </p>
            <ul className="list-disc pl-6 text-gray-600 text-base space-y-1 mb-3">
              <li>Appointment reminders</li>
              <li>Scheduling notifications</li>
              <li>General clinic communication</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mb-6 text-base">
              Message frequency may vary. Message and data rates may apply.
            </p>

            {/* Section 5 */}
            <h2 className="font-heading text-xl font-medium text-gray-900 mt-10 mb-4">
              5. Opt-In and Opt-Out
            </h2>
            <p className="text-gray-600 leading-relaxed mb-3 text-base">
              You may opt out of SMS communications at any time:
            </p>
            <ul className="list-disc pl-6 text-gray-600 text-base space-y-1 mb-3">
              <li>Reply <strong>STOP</strong> to unsubscribe</li>
              <li>Reply <strong>HELP</strong> for assistance</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mb-6 text-base">
              You may also contact our office directly at: <a href="tel:9854491000" className="text-teal hover:underline">985-449-1000</a>
            </p>

            {/* Section 6 */}
            <h2 className="font-heading text-xl font-medium text-gray-900 mt-10 mb-4">
              6. Data Sharing and Privacy Assurance
            </h2>
            <p className="text-gray-600 leading-relaxed mb-3 text-base">
              We respect your privacy and are committed to protecting your information.
            </p>
            <ul className="list-disc pl-6 text-gray-600 text-base space-y-1 mb-6">
              <li>Mobile information and opt-in consent will NOT be shared with third parties or affiliates for marketing or promotional purposes</li>
              <li>We do not sell or rent your personal information</li>
              <li>Information is only shared as necessary for healthcare operations or as required by law</li>
            </ul>

            {/* Section 7 */}
            <h2 className="font-heading text-xl font-medium text-gray-900 mt-10 mb-4">
              7. Confidentiality and HIPAA Compliance
            </h2>
            <p className="text-gray-600 leading-relaxed mb-3 text-base">
              We comply with the Health Insurance Portability and Accountability Act (HIPAA) and maintain appropriate safeguards to protect your protected health information (PHI). Please note:
            </p>
            <ul className="list-disc pl-6 text-gray-600 text-base space-y-1 mb-6">
              <li>SMS communication is not a fully secure method of communication</li>
              <li>Avoid sharing sensitive medical information via text when possible</li>
            </ul>

            {/* Section 8 */}
            <h2 className="font-heading text-xl font-medium text-gray-900 mt-10 mb-4">
              8. Security Measures
            </h2>
            <p className="text-gray-600 leading-relaxed mb-3 text-base">
              We implement reasonable safeguards including:
            </p>
            <ul className="list-disc pl-6 text-gray-600 text-base space-y-1 mb-6">
              <li>Secure electronic medical record systems</li>
              <li>Restricted access to patient data</li>
              <li>Administrative and technical protections</li>
            </ul>

            {/* Section 9 */}
            <h2 className="font-heading text-xl font-medium text-gray-900 mt-10 mb-4">
              9. Website Data Collection
            </h2>
            <p className="text-gray-600 leading-relaxed mb-3 text-base">
              Our website may collect non-personal data such as:
            </p>
            <ul className="list-disc pl-6 text-gray-600 text-base space-y-1 mb-3">
              <li>IP address</li>
              <li>Browser type</li>
              <li>Pages visited</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mb-6 text-base">
              This information is used to improve website functionality and user experience.
            </p>

            {/* Section 10 */}
            <h2 className="font-heading text-xl font-medium text-gray-900 mt-10 mb-4">
              10. Louisiana Privacy Compliance
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 text-base">
              We comply with all applicable federal and state privacy laws governing healthcare providers in Louisiana.
            </p>

            {/* Section 11 */}
            <h2 className="font-heading text-xl font-medium text-gray-900 mt-10 mb-4">
              11. Changes to This Policy
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 text-base">
              We reserve the right to update this Privacy Policy at any time. Updates will be posted on this page with a revised effective date.
            </p>

            {/* Section 12 */}
            <h2 className="font-heading text-xl font-medium text-gray-900 mt-10 mb-4">
              12. Contact Information
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
