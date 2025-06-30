
import React from 'react';
import { Users, Target, Award, Globe, CheckCircle, ArrowRight, TrendingUp, MapPin, Search, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const stats = [
    { number: '51000+', label: 'Verified Agencies' },
    { number: '88+', label: 'Countries Covered' },
    { number: '3000+', label: 'In-demand Skills' },
    { number: '90+', label: 'Service Categories' }
  ];

  const promises = [
    {
      icon: Award,
      title: 'VALUE',
      description: 'We recognize the value of every agency and business, not just for their skills but as integral contributors to our community. TrueFirms ensures that your efforts are acknowledged and rewarded fairly.'
    },
    {
      icon: Users,
      title: 'SUPPORT',
      description: 'We support you with tailored solutions, resources, and tools that make hiring and collaboration seamless, ensuring your journey with us is productive and rewarding.'
    },
    {
      icon: TrendingUp,
      title: 'INVESTMENT',
      description: 'We invest in building a robust platform, equipping you with access to global talent, business growth opportunities, and professional development resources to thrive in today\'s competitive landscape.'
    },
    {
      icon: MapPin,
      title: 'OPPORTUNITY',
      description: 'TrueFirms constantly evolves to create new opportunities—expanding hiring options, enabling global reach, and opening doors to greater success for agencies and businesses.'
    },
    {
      icon: Eye,
      title: 'TRANSPARENCY',
      description: 'We prioritize clear and honest communication, building trust through reliable information, fair practices, and open collaboration between seekers and providers.'
    }
  ];

  const seekerBenefits = [
    'Fast Hiring: Hire qualified Expert within 48 hours',
    'Verified Agencies: Access a network of over 51000 reliable agencies',
    'Free Job Postings: Post Job free',
    'Secure Process: Secure hiring process'
  ];

  const providerBenefits = [
    'Deploy Your Bench: Deploy your bench and apply for available jobs',
    'Make Money: Earn more by taking on various projects globally',
    'Get Client Leads: Access new potential clients looking for your services',
    'Increase Visibility: Showcase your agency to attract more clients'
  ];

  const faqs = [
    'What is TrueFirms?',
    'How does TrueFirms benefit talent seekers?',
    'How do talent providers benefit from TrueFirms?',
    'How quickly can I hire through TrueFirms?',
    'Can I post jobs for free on TrueFirms?',
    'What types of skills are available on TrueFirms?',
    'What is the Employer of Record (EOR) service?',
    'What are Global Capability Centers (GCCs)?',
    'Is TrueFirms suitable for agencies with bench resources?',
    'What makes TrueFirms different from other hiring platforms?'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="text-sm text-purple-600 font-medium mb-4">ABOUT TRUEFIRMS</div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your Gateway to Verified Agencies and Global Projects
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We connect Talent Seekers with over 500,000 professionals from 51000+ top vetted agencies across 88+ countries, regions, and territories.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 Promises Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-sm text-purple-600 font-medium mb-4">5 PROMISES</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">TrueFirms Talent Promise</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {promises.map((promise, index) => (
              <Card key={index} className={`p-6 hover:shadow-lg transition-shadow ${index === 1 ? 'bg-purple-600 text-white' : 'bg-white'}`}>
                <CardContent className="pt-6">
                  <div className={`w-12 h-12 ${index === 1 ? 'bg-purple-700' : 'bg-purple-100'} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                    <promise.icon className={`h-6 w-6 ${index === 1 ? 'text-white' : 'text-purple-600'}`} />
                  </div>
                  <h3 className={`text-lg font-semibold mb-2 ${index === 1 ? 'text-white' : 'text-gray-900'}`}>
                    {promise.title}
                  </h3>
                  <p className={`text-sm ${index === 1 ? 'text-purple-100' : 'text-gray-600'}`}>
                    {promise.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why TrueFirms for Talent Seekers */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-purple-50 to-slate-50 rounded-2xl p-8">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-purple-600" />
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why TrueFirms is Best for Talent Seekers</h2>
              <div className="space-y-4">
                {seekerBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why TrueFirms for Talent Providers */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why TrueFirms is Best for Talent Provider</h2>
              <div className="space-y-4 mb-8">
                {providerBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
              <Button className="bg-purple-600 hover:bg-purple-700">
                Become a Service Provider
              </Button>
            </div>
            <div className="bg-gradient-to-br from-slate-50 to-purple-50 rounded-2xl p-8">
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Talent Providers</h3>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Purpose Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Purpose</h2>
              <p className="text-gray-600 leading-relaxed">
                At TrueFirms, we recognize the harsh reality of global layoffs that compel agencies to let go of skilled professionals during project downturns. Our mission is to break this cycle by linking agencies with talent seekers, keeping professionals engaged in meaningful work. By offering a platform for agencies to utilize their available talent, we not only protect jobs but also help agencies retain their workforce. TrueFirms is dedicated to promoting a dynamic talent ecosystem that benefits both talents and businesses.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-slate-100 rounded-2xl p-8">
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="text-2xl font-bold text-purple-600 mb-2">B2B</div>
                <div className="text-gray-600">Business Solutions</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Frequently asked questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <span className="text-gray-900 font-medium">{faq}</span>
                  <div className="w-6 h-6 rounded-full border-2 border-purple-600 flex items-center justify-center">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Connect with your next best customer on TrueFirms
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Whether you're looking for your next opportunity or seeking top talent, 
            we're here to help you succeed.
          </p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
            Become a Service Provider
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
