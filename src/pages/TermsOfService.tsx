
import React from 'react';
import { Shield, FileText, Users, Lock, AlertTriangle, Scale } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Please read these terms carefully before using our services. Last updated: January 1, 2024
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <FileText className="h-6 w-6 text-purple-600 mr-3" />
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Welcome to TrueFirms. These Terms of Service ("Terms") govern your use of our website, services, and platform. By accessing or using TrueFirms, you agree to be bound by these Terms and our Privacy Policy.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Users className="h-6 w-6 text-purple-600 mr-3" />
                2. Description of Service
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                TrueFirms is a professional services platform that connects businesses with verified service providers. We facilitate the discovery, evaluation, and engagement of professional firms across various industries including legal, accounting, consulting, and technology services.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Shield className="h-6 w-6 text-purple-600 mr-3" />
                3. User Accounts and Registration
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                To access certain features of our platform, you must create an account. You agree to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Provide accurate, current, and complete information during registration</li>
                <li>Maintain and update your account information</li>
                <li>Keep your login credentials secure and confidential</li>
                <li>Accept responsibility for all activities under your account</li>
                <li>Notify us immediately of any unauthorized access</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Lock className="h-6 w-6 text-purple-600 mr-3" />
                4. User Conduct and Responsibilities
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                When using TrueFirms, you agree not to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Violate any applicable laws or regulations</li>
                <li>Post false, misleading, or fraudulent information</li>
                <li>Impersonate another person or entity</li>
                <li>Engage in spam, harassment, or abusive behavior</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Use our platform for any illegal or unauthorized purpose</li>
                <li>Interfere with or disrupt our services</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <AlertTriangle className="h-6 w-6 text-purple-600 mr-3" />
                5. Content and Intellectual Property
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Your Content:</strong> You retain ownership of content you submit to TrueFirms. By posting content, you grant us a non-exclusive, worldwide, royalty-free license to use, display, and distribute your content in connection with our services.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Our Content:</strong> All TrueFirms content, including text, graphics, logos, and software, is protected by intellectual property laws and owned by TrueFirms or our licensors.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Scale className="h-6 w-6 text-purple-600 mr-3" />
                6. Service Provider Relationships
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                TrueFirms acts as a platform connecting clients with service providers. We are not a party to the agreements between clients and service providers. Each service provider is an independent contractor responsible for:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>The quality and delivery of their services</li>
                <li>Professional licensing and qualifications</li>
                <li>Compliance with applicable laws and regulations</li>
                <li>Their own business practices and client relationships</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Shield className="h-6 w-6 text-purple-600 mr-3" />
                7. Privacy and Data Protection
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We take your privacy seriously. Our collection, use, and protection of your personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <AlertTriangle className="h-6 w-6 text-purple-600 mr-3" />
                8. Disclaimers and Limitation of Liability
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Service Disclaimer:</strong> TrueFirms is provided "as is" without warranties of any kind. We do not guarantee the accuracy, completeness, or reliability of content on our platform.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Limitation of Liability:</strong> To the maximum extent permitted by law, TrueFirms shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <FileText className="h-6 w-6 text-purple-600 mr-3" />
                9. Termination
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may suspend or terminate your account at any time for violation of these Terms or for any other reason at our sole discretion. You may also terminate your account at any time by contacting us.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Scale className="h-6 w-6 text-purple-600 mr-3" />
                10. Dispute Resolution
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Any disputes arising from these Terms or your use of TrueFirms shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association. The arbitration shall take place in San Francisco, California.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <FileText className="h-6 w-6 text-purple-600 mr-3" />
                11. Changes to Terms
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We reserve the right to modify these Terms at any time. We will notify users of material changes via email or through our platform. Continued use of TrueFirms after changes constitutes acceptance of the new Terms.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Lock className="h-6 w-6 text-purple-600 mr-3" />
                12. Contact Information
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 font-medium">Email: legal@truefirms.com</p>
                <p className="text-gray-700 font-medium">Phone: +1 (415) 555-0123</p>
                <p className="text-gray-700 font-medium">
                  Address: 123 Business Street, Suite 456<br />
                  San Francisco, CA 94105
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Questions About Our Terms?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Our legal team is available to help clarify any questions you may have about our terms of service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-md font-medium transition-colors">
              Contact Legal Team
            </a>
            <a href="/" className="border border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 rounded-md font-medium transition-colors">
              Back to Home
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
