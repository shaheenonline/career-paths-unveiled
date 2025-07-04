
import React from 'react';
import { Users, Target, Zap, Clock, Globe, Shield, BarChart3, ArrowRight, CheckCircle, Trophy, Calendar, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Enterprise = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="absolute inset-0 bg-grid-slate-100 bg-[size:50px_50px]" />
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-6 bg-purple-100 text-purple-700 border border-purple-200">
                Enterprise Suite
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight">
                The skilled talent pool is your competitive advantage.
                <span className="block" style={{background: `linear-gradient(135deg, #9333EA 0%, #3B82F6 100%)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
                  Achieve Talent Supremacy
                </span>
                with TrueFirms Enterprise.
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                TrueFirms Enterprise Solution To Win The Talent War
              </p>
              <Button size="lg" className="text-white px-8 py-4 text-lg mr-4" style={{background: `linear-gradient(135deg, #9333EA 0%, #3B82F6 100%)`}}>
                Let's Talk <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="relative">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-purple-200 shadow-xl">
                <div className="grid grid-cols-3 gap-6 text-center mb-8">
                  <div className="p-4 rounded-lg bg-purple-50">
                    <div className="text-3xl font-bold text-purple-600">98+</div>
                    <div className="text-sm text-gray-600">Countries Covered</div>
                  </div>
                  <div className="p-4 rounded-lg bg-blue-50">
                    <div className="text-3xl font-bold text-blue-600">3000+</div>
                    <div className="text-sm text-gray-600">In-demand Skills</div>
                  </div>
                  <div className="p-4 rounded-lg bg-purple-50">
                    <div className="text-3xl font-bold text-purple-600">90+</div>
                    <div className="text-sm text-gray-600">Service Categories</div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full mx-auto mb-4" style={{background: `linear-gradient(135deg, #9333EA 0%, #3B82F6 100%)`}}>
                      <img src="/lovable-uploads/c7531956-c793-4236-85e4-e80eea0fccb9.png" alt="Talent Pool" className="w-full h-full rounded-full object-cover opacity-90" />
                    </div>
                    <Brain className="h-6 w-6 text-yellow-500 absolute -top-2 -right-2 animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How it Works</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Three simple steps to transform your talent acquisition process
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white hover:shadow-lg transition-all duration-300 group text-center border-purple-200">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center relative" style={{background: `linear-gradient(135deg, #9333EA 0%, #3B82F6 100%)`}}>
                    <Users className="h-8 w-8 text-white" />
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white bg-purple-600">1</div>
                  </div>
                </div>
                <CardTitle className="text-gray-900 text-xl">Comprehensive Solution Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We provide a complete workforce analytics suite that offers in-depth analysis of your objectives and understand workforce needs efficiently. We design turnkey solutions that seamlessly integrate with your existing tech stack.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-all duration-300 group text-center border-blue-200">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center relative" style={{background: `linear-gradient(135deg, #3B82F6 0%, #9333EA 100%)`}}>
                    <Target className="h-8 w-8 text-white" />
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white bg-blue-600">2</div>
                  </div>
                </div>
                <CardTitle className="text-gray-900 text-xl">Precise Candidate Selection for Optimal Hiring</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Upon the submission of your project specifications, our team of evaluators rigorously reviews each response using our criteria and meticulously curates a selection of the highest caliber professionals.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-all duration-300 group text-center border-purple-200">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center relative" style={{background: `linear-gradient(135deg, #9333EA 0%, #3B82F6 100%)`}}>
                    <Shield className="h-8 w-8 text-white" />
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white bg-purple-600">3</div>
                  </div>
                </div>
                <CardTitle className="text-gray-900 text-xl">Personalized Account Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Following the solution integration, you will be assigned a dedicated account manager who will provide round-the-clock on-demand support and address your specific requirements.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* TrueFirms Enterprise Features */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">TrueFirms Enterprise</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive enterprise solutions powered by AI-driven talent acquisition
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white hover:shadow-lg transition-all duration-300 group border-purple-200">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-purple-100">
                    <Globe className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-gray-900">Global On-Demand Talent Pool</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Our expansive workforce extends its reach across 98+ countries. Operating within 9 different time zones, with expertise spanning 3,000+ skills that encompass our comprehensive talent pool at a truly global scope.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-all duration-300 group border-blue-200">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-100">
                    <Zap className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-gray-900">Efficient Onboarding</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  We pride ourselves on our expedited onboarding process. Our seasoned talent developers can be seamlessly integrated into your team within a remarkable timeframe of just 3 to 7 days in certain cases, underlining our commitment to accelerating empowering our commitment to agility.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-all duration-300 group border-purple-200">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-purple-100">
                    <Brain className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-gray-900">AI-Powered Platform</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  At the heart of our services lies our cutting-edge AI-powered platform. This platform seamlessly integrates with and enhance your hiring processes, making them more intelligent and efficient. Harness the potential of AI to transform your talent acquisition strategies.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Businesses Turn to TrueFirms */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why businesses turn to TrueFirms</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-white text-center p-8 border-purple-200 shadow-lg">
              <Clock className="h-12 w-12 mx-auto mb-4 text-purple-600" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Hire the talent you need in</h3>
              <div className="text-3xl font-bold text-purple-600">3 DAYS, NOT 30</div>
            </Card>

            <Card className="bg-white text-center p-8 border-blue-200 shadow-lg">
              <Trophy className="h-12 w-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Trust experienced agencies</h3>
              <div className="text-3xl font-bold text-blue-600">SAVE 60-90%</div>
            </Card>

            <Card className="bg-white text-center p-8 border-purple-200 shadow-lg">
              <BarChart3 className="h-12 w-12 mx-auto mb-4 text-purple-600" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Deliver award-class work</h3>
              <div className="text-3xl font-bold text-purple-600">4X FASTER</div>
            </Card>
          </div>

          <Card className="bg-white border-purple-200 shadow-lg">
            <CardContent className="p-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-4 text-gray-900 font-semibold"></th>
                      <th className="text-center py-4 text-gray-900 font-semibold">Traditional Process</th>
                      <th className="text-center py-4 font-semibold text-purple-600">TrueFirms</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600">
                    <tr className="border-b border-gray-100">
                      <td className="py-4 font-medium">Vendor Reach</td>
                      <td className="py-4 text-center">2 to 10 Vendors</td>
                      <td className="py-4 text-center text-purple-600 font-semibold">5,000+ Vendors</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 font-medium">Global Reach</td>
                      <td className="py-4 text-center">Geographical Limitations</td>
                      <td className="py-4 text-center text-purple-600 font-semibold">98+ Countries</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 font-medium">Hiring Time</td>
                      <td className="py-4 text-center">30 Days</td>
                      <td className="py-4 text-center text-purple-600 font-semibold">3-7 to 48 Hours</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-4 font-medium">Recurring Cost Of Training & Benefits</td>
                      <td className="py-4 text-center">Substantial Cost Involved</td>
                      <td className="py-4 text-center text-purple-600 font-semibold">Negligible</td>
                    </tr>
                    <tr>
                      <td className="py-4 font-medium">Agility To Scale Team Up or Down</td>
                      <td className="py-4 text-center">Very Low</td>
                      <td className="py-4 text-center text-purple-600 font-semibold">Very High</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Insights Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Insights by TrueFirms</h2>
            <p className="text-gray-600 text-lg">Stay updated with the latest trends and insights in talent acquisition</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white hover:shadow-lg transition-all duration-300 group border-purple-200">
              <CardContent className="p-6">
                <div className="h-48 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-white" />
                </div>
                <div className="text-sm text-purple-600">September 5, 2024</div>
                <h3 className="text-lg font-semibold text-gray-900 mt-2 mb-3">Why TrueFirms Job Posting Feature is a Game Changer for Recruiters</h3>
                <p className="text-gray-600 text-sm mb-4">Finding the proper people for your project can be a difficult and time-consuming effort in the fast-paced corporate environment of...</p>
                <Button variant="outline" size="sm" className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white">
                  Read More
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-all duration-300 group border-blue-200">
              <CardContent className="p-6">
                <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg mb-4 flex items-center justify-center">
                  <Shield className="h-12 w-12 text-white" />
                </div>
                <div className="text-sm text-blue-600">July 15, 2024</div>
                <h3 className="text-lg font-semibold text-gray-900 mt-2 mb-3">What is an Employer of Record (EOR)? Benefits of Using TrueFirms EOR Services</h3>
                <p className="text-gray-600 text-sm mb-4">Expanding into new markets and getting foreign talent a simpler then ever in today's workplace company environment. However, understanding...</p>
                <Button variant="outline" size="sm" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                  Read More
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-all duration-300 group border-purple-200">
              <CardContent className="p-6">
                <div className="h-48 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg mb-4 flex items-center justify-center">
                  <BarChart3 className="h-12 w-12 text-white" />
                </div>
                <div className="text-sm text-purple-600">June 10, 2024</div>
                <h3 className="text-lg font-semibold text-gray-900 mt-2 mb-3">The Future of Managed IT Services: Trends to Watch Out For</h3>
                <p className="text-gray-600 text-sm mb-4">Managed IT services have become vital in an ever-changing digital market for businesses seeking to remain competitive and optimize...</p>
                <Button variant="outline" size="sm" className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white">
                  Read More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 border border-purple-200 shadow-xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Learn how TrueFirms Enterprise Suite can help you grow your business
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Transform your talent acquisition strategy with our comprehensive enterprise solutions
            </p>
            <Button size="lg" className="text-white px-8 py-4 text-lg" style={{background: `linear-gradient(135deg, #9333EA 0%, #3B82F6 100%)`}}>
              Let's Talk <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Enterprise;
