
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Lock, Database, AlertTriangle, Settings, Monitor, FileText, RotateCcw, Eye, Users, Star, Award } from 'lucide-react';

const ITGCControls = () => {
  const itgcServices = [
    {
      icon: <Settings className="h-8 w-8 text-purple-600" />,
      title: "Access Control Management",
      description: "Limit access to sensitive data and systems."
    },
    {
      icon: <FileText className="h-8 w-8 text-blue-600" />,
      title: "Change Management",
      description: "Manage and document IT system changes securely."
    },
    {
      icon: <RotateCcw className="h-8 w-8 text-purple-600" />,
      title: "Backup And Recovery",
      description: "Safeguard data with robust backup and disaster recovery solutions."
    },
    {
      icon: <Monitor className="h-8 w-8 text-blue-600" />,
      title: "IT Operations Monitoring",
      description: "Proactively monitor and improve system performance."
    },
    {
      icon: <Eye className="h-8 w-8 text-purple-600" />,
      title: "Security Monitoring & Incident Response",
      description: "Detect and respond to security threats in real-time."
    }
  ];

  const benefits = [
    {
      icon: <Users className="h-12 w-12 text-blue-500" />,
      title: "Verified Experts",
      description: "We form a network of trained and skilled ITGC service providers."
    },
    {
      icon: <Star className="h-12 w-12 text-yellow-500" />,
      title: "Customized Solutions",
      description: "Get bespoke ITGC solutions tailored on your specific business needs."
    },
    {
      icon: <Award className="h-12 w-12 text-green-500" />,
      title: "Quick Hiring"
    },
    {
      icon: <Shield className="h-12 w-12 text-purple-500" />,
      title: "Global Access"
    }
  ];

  const criticalReasons = [
    {
      icon: <Shield className="h-6 w-6 text-white" />,
      title: "Protects sensitive data and IT systems from vulnerabilities",
      bgColor: "bg-red-500"
    },
    {
      icon: <FileText className="h-6 w-6 text-white" />,
      title: "Ensures compliance with regulations such as SOX, GDPR, and HIPAA",
      bgColor: "bg-orange-500"
    },
    {
      icon: <Database className="h-6 w-6 text-white" />,
      title: "Enhances data integrity, availability, and confidentiality",
      bgColor: "bg-blue-500"
    },
    {
      icon: <AlertTriangle className="h-6 w-6 text-white" />,
      title: "Reduces the risk of operational failures and cyber threats",
      bgColor: "bg-purple-500"
    }
  ];

  const faqs = [
    "What industries benefit most from ITGC services?",
    "How quickly can I find an ITGC expert on TrueFirms?",
    "How do I ensure the ITGC provider I hire is qualified?"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-purple-50 via-blue-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-100/20 to-blue-100/20"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  ITGC Services –{' '}
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    Secure Your IT Systems
                  </span>{' '}
                  with Trusted Experts
                </h1>
              </div>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 text-lg"
              >
                Let's Talk
              </Button>
            </div>
            <div className="relative">
              <div className="relative z-10 bg-white rounded-3xl p-8 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Colorful software code on computer monitor" 
                  className="w-full h-auto rounded-2xl"
                />
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-purple-200 to-blue-200 rounded-full opacity-60"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-60"></div>
            </div>
          </div>
        </div>
      </section>

      {/* What Are ITGC Controls Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">What Are ITGC Controls?</h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
            IT General Controls (ITGC) are the policies and procedures that govern your IT systems, ensuring that they operate securely 
            and in compliance with regulations. These controls are designed to protect your data from unauthorized access, 
            disruptions, and breaches, while enhancing the reliability of IT operations.
          </p>
        </div>
      </section>

      {/* Why ITGC is Critical Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Why ITGC is Critical for Your Business</h2>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Person using MacBook Pro for business operations" 
                  className="w-full h-auto rounded-2xl"
                />
              </div>
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full"></div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full"></div>
            </div>
            <div className="space-y-6">
              {criticalReasons.map((reason, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className={`${reason.bgColor} p-3 rounded-full flex-shrink-0`}>
                    {reason.icon}
                  </div>
                  <p className="text-gray-700 text-lg">{reason.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our ITGC Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our ITGC Services on TrueFirms</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              TrueFirms connects you with vetted ITGC professionals who offer a wide range of essential ITGC services, including:
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itgcServices.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 bg-white shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl w-fit">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-center">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
            Benefits of Partnering with ITGC Experts on TrueFirms
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-6 p-4 bg-white rounded-2xl shadow-lg w-fit">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                {benefit.description && (
                  <p className="text-gray-600">{benefit.description}</p>
                )}
              </div>
            ))}
          </div>
          <div className="mt-12 space-y-4 max-w-3xl mx-auto">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700"><strong>Quick Hiring:</strong> Find and hire experts within 24-48 hours through the TrueFirms platform.</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700"><strong>Global Access:</strong> Connect with ITGC experts from around the world for comprehensive coverage.</p>
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
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
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
            Learn how TrueFirms Enterprise Suite can help you grow your business
          </h2>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-3 text-lg"
          >
            Let's Talk
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ITGCControls;
