
import React from 'react';
import { Shield, FileText, Users, Lock, AlertTriangle, Scale } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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
              Please read these terms of service carefully before using our platform. Last updated: January 1, 2024
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-gray-900">
                  <FileText className="h-6 w-6 text-purple-600 mr-3" />
                  1. Acceptance of Terms
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p className="text-gray-600 leading-relaxed">
                  By accessing and using TrueFirms (the "Service"), you accept and agree to be bound by the terms and provision of this agreement. 
                  If you do not agree to abide by the above, please do not use this service.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-gray-900">
                  <Users className="h-6 w-6 text-purple-600 mr-3" />
                  2. Use License
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p className="text-gray-600 leading-relaxed mb-4">
                  Permission is granted to temporarily download one copy of the materials on TrueFirms for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>modify or copy the materials</li>
                  <li>use the materials for any commercial purpose or for any public display (commercial or non-commercial)</li>
                  <li>attempt to decompile or reverse engineer any software contained on the website</li>
                  <li>remove any copyright or other proprietary notations from the materials</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-gray-900">
                  <Shield className="h-6 w-6 text-purple-600 mr-3" />
                  3. User Accounts
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p className="text-gray-600 leading-relaxed mb-4">
                  When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for safeguarding the password and for maintaining the confidentiality of your account.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  You agree not to disclose your password to any third party and to take sole responsibility for any activities or actions under your account.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-gray-900">
                  <Lock className="h-6 w-6 text-purple-600 mr-3" />
                  4. Privacy Policy
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p className="text-gray-600 leading-relaxed">
                  Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your information when you use our Service. 
                  By using our Service, you agree to the collection and use of information in accordance with our Privacy Policy.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-gray-900">
                  <AlertTriangle className="h-6 w-6 text-purple-600 mr-3" />
                  5. Prohibited Uses
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p className="text-gray-600 leading-relaxed mb-4">
                  You may not use our Service:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>For any unlawful purpose or to solicit others to perform acts that are unlawful</li>
                  <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                  <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                  <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                  <li>To submit false or misleading information</li>
                  <li>To upload or transmit viruses or any other type of malicious code</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-gray-900">
                  <Scale className="h-6 w-6 text-purple-600 mr-3" />
                  6. Service Availability
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p className="text-gray-600 leading-relaxed">
                  We reserve the right to withdraw or amend our Service, and any service or material we provide via the Service, 
                  without notice. We do not warrant that our Service will be available at all times or that access will be uninterrupted or error-free.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-gray-900">
                  <FileText className="h-6 w-6 text-purple-600 mr-3" />
                  7. Limitation of Liability
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p className="text-gray-600 leading-relaxed">
                  In no event shall TrueFirms or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, 
                  or due to business interruption) arising out of the use or inability to use the materials on TrueFirms, 
                  even if TrueFirms or an authorized representative has been notified orally or in writing of the possibility of such damage.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-gray-900">
                  <Shield className="h-6 w-6 text-purple-600 mr-3" />
                  8. Accuracy of Materials
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p className="text-gray-600 leading-relaxed">
                  The materials appearing on TrueFirms could include technical, typographical, or photographic errors. 
                  TrueFirms does not warrant that any of the materials on its website are accurate, complete, or current. 
                  TrueFirms may make changes to the materials contained on its website at any time without notice.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-gray-900">
                  <FileText className="h-6 w-6 text-purple-600 mr-3" />
                  9. Modifications
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p className="text-gray-600 leading-relaxed">
                  TrueFirms may revise these terms of service at any time without notice. By using this website, 
                  you are agreeing to be bound by the then-current version of these terms of service.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-gray-900">
                  <Scale className="h-6 w-6 text-purple-600 mr-3" />
                  10. Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p className="text-gray-600 leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-700 font-medium">Email: legal@truefirms.com</p>
                  <p className="text-gray-700 font-medium">Phone: +1 (555) 123-4567</p>
                  <p className="text-gray-700 font-medium">
                    Address: 123 Business Avenue, Suite 456, San Francisco, CA 94105
                  </p>
                </div>
              </CardContent>
            </Card>

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
            Our legal team is here to help clarify any questions you may have.
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
