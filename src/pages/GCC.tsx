
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Globe, TrendingUp, Users, Lightbulb, Brain, Zap, DollarSign, Clock, Shield, Database, Building2, Cog } from 'lucide-react';

const GCC = () => {
  const benefits = [
    {
      icon: <Globe className="h-8 w-8 text-blue-600" />,
      title: "Access to Global Talent",
      description: "Tap into a vast pool of highly skilled professionals worldwide with cost-effective solutions."
    },
    {
      icon: <DollarSign className="h-8 w-8 text-green-600" />,
      title: "Cost Optimization",
      description: "Achieve significant cost savings and optimize your operational expenses with our GCC solutions."
    },
    {
      icon: <Users className="h-8 w-8 text-purple-600" />,
      title: "Enhanced Collaboration",
      description: "Foster better teamwork and collaboration across different time zones and geographical locations."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-orange-600" />,
      title: "Innovation and R&D",
      description: "Leverage our centers for technology innovation, research, and development to stay ahead of the competition."
    },
    {
      icon: <Brain className="h-8 w-8 text-indigo-600" />,
      title: "Knowledge Retention",
      description: "Build comprehensive organizational knowledge that ensures continuity and expertise."
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-600" />,
      title: "Rapid Deployment",
      description: "Get your teams up and running quickly with streamlined processes and efficient onboarding."
    }
  ];

  const approach = [
    "Specialized Teams: Custom competency frameworks and competency mapping across all business verticals",
    "Experienced Resources: Blend of top-tier and high-potential talent, alongside competent coordinators",
    "KPI Assurance: Continuous KPI enhancement for engaging and active client-focused service delivery",
    "Technology Integration: Comprehensive workforce engagement, group synergy, and team cohesion",
    "Continuous Employee Engagement: Dedicated HRBP, sales compensation schemes, recognition programs, and career advancement"
  ];

  const useCases = [
    {
      icon: <Cog className="h-6 w-6 text-blue-600" />,
      title: "Technology R&D and Innovation",
      description: "Establish dedicated centers for cutting-edge research and development initiatives to drive technological advancement."
    },
    {
      icon: <Database className="h-6 w-6 text-green-600" />,
      title: "Financial Services Operations",
      description: "Create specialized hubs for financial services operations, compliance, and regulatory requirements."
    },
    {
      icon: <Users className="h-6 w-6 text-purple-600" />,
      title: "Retail Customer Experience",
      description: "Improve customer experience and quality with trained customer service teams and support operations."
    },
    {
      icon: <Building2 className="h-6 w-6 text-orange-600" />,
      title: "Automotive Design and Engineering",
      description: "Streamline design and engineering processes to accelerate product development and time-to-market."
    }
  ];

  const whyChoose = [
    "Extensive experience and expertise in setting up and managing GCCs",
    "Proven track record of successful implementations and transformations",
    "Access to a vast network of skilled professionals across multiple domains",
    "Comprehensive solutions tailored to client needs and operational excellence and strategic growth"
  ];

  const faqs = [
    "What are Global Capability Centers (GCC)?",
    "How can TrueFirms GCCs benefit my business?",
    "Is TrueFirms GCC service (GCCs) only available for large companies?",
    "Where are TrueFirms GCCs located?",
    "How does TrueFirms ensure quality and efficiency in its GCCs?",
    "How can I set up a GCC with TrueFirms?"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-blue-50 via-purple-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 to-purple-100/20"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Transform your Business with{' '}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    TrueFirms GCCs in India
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mt-6 leading-relaxed">
                  Empowering Businesses through Strategic Offshore Solutions and Expert Workforce
                </p>
              </div>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg"
              >
                Know More
              </Button>
            </div>
            <div className="relative">
              <div className="relative z-10 bg-white rounded-3xl p-8 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Global team collaboration and business growth" 
                  className="w-full h-auto rounded-2xl"
                />
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-60"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-purple-200 to-blue-200 rounded-full opacity-60"></div>
              
              {/* Stats overlays */}
              <div className="absolute top-4 left-4 bg-white rounded-lg p-3 shadow-lg">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-4 w-4 text-green-500" />
                  <div>
                    <div className="text-sm font-semibold text-green-600">↑ 10%</div>
                    <div className="text-xs text-gray-600">Attention</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute top-4 right-4 bg-white rounded-lg p-3 shadow-lg">
                <div className="flex items-center space-x-2">
                  <DollarSign className="h-4 w-4 text-blue-500" />
                  <div>
                    <div className="text-sm font-semibold text-blue-600">↑ 30%</div>
                    <div className="text-xs text-gray-600">Cost Savings</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-4 left-4 bg-white rounded-lg p-3 shadow-lg">
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4 text-purple-500" />
                  <div>
                    <div className="text-sm font-semibold text-purple-600">100%</div>
                    <div className="text-xs text-gray-600">Control & Transparency</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-4 right-4 bg-white rounded-lg p-3 shadow-lg">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-orange-500" />
                  <div>
                    <div className="text-sm font-semibold text-orange-600">{"< 2 Weeks"}</div>
                    <div className="text-xs text-gray-600">To get Started</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Award Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Award-Winning GCC as a Service Provider in India</h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
            TrueFirms' Global Capability Centers (GCCs) in India specialize in providing comprehensive offshore solutions. With seamless operational efficiency,
            dedicated virtual teams, and access to specialized talent across global client office location. Our GCC services are strategically designed to
            offer exceptional value proposition while maintaining cost-effectiveness and high service quality.
          </p>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Key Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 bg-white shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl w-fit">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-center">{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Approach</h2>
              <div className="space-y-4">
                {approach.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 text-lg">{item}</p>
                  </div>
                ))}
              </div>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg mt-8"
              >
                Get In Touch
              </Button>
            </div>
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Professional team working together on global projects" 
                  className="w-full h-auto rounded-2xl"
                />
              </div>
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full"></div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Use Cases</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-2 border-blue-100 bg-white">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
                      {useCase.icon}
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900">{useCase.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-lg">{useCase.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose TrueFirms Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Business professionals in modern office environment" 
                  className="w-full h-auto rounded-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full"></div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Why Choose TrueFirms?</h2>
              <div className="space-y-4">
                {whyChoose.map((reason, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 text-lg">{reason}</p>
                  </div>
                ))}
              </div>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg mt-8"
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Frequently asked questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium text-gray-900">{faq}</h3>
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">?</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900 to-blue-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Connect with your next best customer on TrueFirms
          </h2>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-3 text-lg"
          >
            Request a proposal
          </Button>
        </div>
      </section>
    </div>
  );
};

export default GCC;
