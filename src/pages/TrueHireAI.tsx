
import React, { useState } from 'react';
import { Bot, Zap, Target, Users, ArrowRight, Sparkles, Brain, Cpu, CheckCircle, Clock, UserCheck, TrendingUp, Shield, Search, Calendar, BarChart3, MessageSquare, FileText, Star, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const TrueHireAI = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What is TrueHire AI-Agent?",
      answer: "TrueHire AI-Agent is an advanced artificial intelligence system designed to revolutionize recruitment processes through intelligent automation, candidate screening, and precision matching."
    },
    {
      question: "How does TrueHire AI-Agent work?",
      answer: "Our AI-Agent works by analyzing job requirements, screening candidates automatically, and providing intelligent matching based on skills, experience, and cultural fit using advanced machine learning algorithms."
    },
    {
      question: "Can TrueHire AI-Agent replace human recruiters?",
      answer: "TrueHire AI-Agent is designed to augment human recruiters, not replace them. It handles repetitive tasks and initial screening, allowing recruiters to focus on strategic decision-making and relationship building."
    },
    {
      question: "What makes TrueHire AI-Agent different from other hiring platforms?",
      answer: "Our AI-Agent offers 95% accurate talent matching, reduces candidate drop rates to <1%, and provides 10x faster hiring through advanced AI algorithms and continuous learning capabilities."
    },
    {
      question: "Does TrueHire AI-Agent ensure candidate quality?",
      answer: "Yes, our AI-Agent is trained to identify top 3% talent through comprehensive screening, skill assessment, and cultural fit analysis, ensuring only the highest quality candidates are presented."
    },
    {
      question: "How quickly can I implement TrueHire AI-Agent?",
      answer: "TrueHire AI-Agent can be deployed within days. Our team provides comprehensive onboarding and training to ensure smooth integration with your existing hiring processes."
    },
    {
      question: "What industries does TrueHire AI-Agent support?",
      answer: "TrueHire AI-Agent supports various industries including technology, finance, healthcare, manufacturing, and more, with customizable parameters for industry-specific requirements."
    },
    {
      question: "How do I get started with TrueHire AI-Agent?",
      answer: "Getting started is simple - request a demo through our website, and our team will guide you through the setup process and customize the AI-Agent according to your specific needs."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" style={{background: 'linear-gradient(135deg, #1e293b 0%, #581c87 50%, #1e293b 100%)'}}>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{background: `linear-gradient(135deg, #9333EA 0%, #3B82F6 100%)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>
                Enhancing the Recruitment Experience with TrueHire AI-Agents
              </h1>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                TrueFirms AI - Agents and Human Experts to source, vet, and hire top talent
              </p>
              <Button size="lg" className="text-white px-8 py-4 text-lg" style={{background: `linear-gradient(135deg, #9333EA 0%, #3B82F6 100%)`}}>
                Request a Demo <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="relative">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border" style={{borderColor: '#9333EA33'}}>
                <div className="text-center mb-6">
                  <Bot className="h-20 w-20 mx-auto animate-pulse" style={{color: '#9333EA'}} />
                  <h3 className="text-2xl font-bold text-white mt-4">TrueHire AI-Agents</h3>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-4 rounded-lg" style={{backgroundColor: '#9333EA22'}}>
                    <div className="text-2xl font-bold" style={{color: '#9333EA'}}>10x</div>
                    <div className="text-sm text-gray-300">Faster Hiring</div>
                  </div>
                  <div className="p-4 rounded-lg" style={{backgroundColor: '#3B82F622'}}>
                    <div className="text-2xl font-bold" style={{color: '#3B82F6'}}>&lt;1%</div>
                    <div className="text-sm text-gray-300">Candidate Drop Rate</div>
                  </div>
                  <div className="p-4 rounded-lg" style={{backgroundColor: '#9333EA22'}}>
                    <div className="text-2xl font-bold" style={{color: '#9333EA'}}>Top 3%</div>
                    <div className="text-sm text-gray-300">Talent Access</div>
                  </div>
                  <div className="p-4 rounded-lg" style={{backgroundColor: '#3B82F622'}}>
                    <div className="text-2xl font-bold" style={{color: '#3B82F6'}}>95%</div>
                    <div className="text-sm text-gray-300">Accurate Matching</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Are AI Agents Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">What Are AI Agents?</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            AI agents are intelligent systems that can think, act, and adapt to achieve specific goals autonomously. In recruiting they can manage the entire hiring process from job posting to candidate selection, functioning independently while continuously learning and improving their performance over time. They leverage advanced machine learning to make data-driven decisions and streamline complex workflows.
          </p>
        </div>
      </section>

      {/* What is TrueHire AI-Agent Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">What is TrueHire AI-Agent?</h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                TrueHire AI-Agent is a state-of-the-art intelligent recruitment automation system designed to revolutionize your hiring process. Built on advanced machine learning algorithms, our AI-Agent acts as a virtual recruiter that can source, screen, and qualify candidates with unprecedented accuracy and efficiency.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Unlike traditional recruitment tools, our AI-Agent operates autonomously throughout the entire hiring pipeline. It intelligently understands job requirements, proactively sources qualified candidates, conducts initial screenings, and presents you with pre-qualified talent matches that align perfectly with your company culture and role requirements.
              </p>
              <Button size="lg" className="text-white px-8 py-4" style={{background: `linear-gradient(135deg, #9333EA 0%, #3B82F6 100%)`}}>
                Experience AI-Agent <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="relative">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border" style={{borderColor: '#3B82F633'}}>
                <div className="flex items-center justify-center mb-6">
                  <div className="relative">
                    <Brain className="h-16 w-16" style={{color: '#3B82F6'}} />
                    <Sparkles className="h-6 w-6 text-yellow-400 absolute -top-2 -right-2 animate-bounce" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-300">
                    <CheckCircle className="h-5 w-5" style={{color: '#9333EA'}} />
                    <span>Autonomous candidate sourcing</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <CheckCircle className="h-5 w-5" style={{color: '#9333EA'}} />
                    <span>Intelligent screening & qualification</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <CheckCircle className="h-5 w-5" style={{color: '#9333EA'}} />
                    <span>Cultural fit assessment</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <CheckCircle className="h-5 w-5" style={{color: '#9333EA'}} />
                    <span>Continuous learning & improvement</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How TrueHire AI-Agent Works */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">How TrueHire AI-Agent Works</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Experience seamless recruitment automation with our intelligent three-step process
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group text-center" style={{borderColor: '#9333EA33'}}>
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{background: `linear-gradient(135deg, #9333EA 0%, #3B82F6 100%)`}}>
                    <FileText className="h-8 w-8 text-white" />
                  </div>
                </div>
                <CardTitle className="text-white text-xl">Provide Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  Share your job criteria, role specifics, & digital candidate flow with the AI-Agent.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group text-center" style={{borderColor: '#3B82F633'}}>
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{background: `linear-gradient(135deg, #3B82F6 0%, #9333EA 100%)`}}>
                    <Search className="h-8 w-8 text-white" />
                  </div>
                </div>
                <CardTitle className="text-white text-xl">AI-Powered Matching</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  Advanced AI algorithms automatically source and pre-screen relevant candidates from our extensive talent pool.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group text-center" style={{borderColor: '#9333EA33'}}>
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{background: `linear-gradient(135deg, #9333EA 0%, #3B82F6 100%)`}}>
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                </div>
                <CardTitle className="text-white text-xl">Fast & Smart Hiring</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  Get shortlisted, pre-qualified candidates enabling you to directly start a structured interview process.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="text-white px-8 py-4" style={{background: `linear-gradient(135deg, #9333EA 0%, #3B82F6 100%)`}}>
              Request a Demo <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* How TrueHire AI-Agent improves Your Hiring */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-8">How TrueHire AI-Agent improves Your Hiring</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#9333EA'}}>
                    <Clock className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">10x Faster Hiring</h3>
                    <p className="text-gray-300">TrueHire AI-Agent streamlines candidate sourcing and screening, dramatically reducing time-to-hire while maintaining quality standards.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#3B82F6'}}>
                    <TrendingUp className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">95% Recruitment</h3>
                    <p className="text-gray-300">Our advanced matching algorithms ensure 95% accuracy in matching candidates to roles based on comprehensive skill and cultural assessments.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#9333EA'}}>
                    <Target className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Top 3% Talent Experience</h3>
                    <p className="text-gray-300">Get exclusive access to the top 3% of talent through our intelligent sourcing and comprehensive candidate network.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#3B82F6'}}>
                    <Shield className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">99.9% Skilled Experience</h3>
                    <p className="text-gray-300">Ensure consistent high-quality hires with our AI-powered screening process that maintains 99.9% accuracy in skills verification.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border" style={{borderColor: '#9333EA33'}}>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 rounded-lg" style={{backgroundColor: '#9333EA22'}}>
                    <UserCheck className="h-12 w-12 mx-auto mb-3" style={{color: '#9333EA'}} />
                    <div className="text-2xl font-bold text-white">100%</div>
                    <div className="text-sm text-gray-300">Data-Driven Decisions</div>
                  </div>
                  <div className="text-center p-4 rounded-lg" style={{backgroundColor: '#3B82F622'}}>
                    <TrendingUp className="h-12 w-12 mx-auto mb-3" style={{color: '#3B82F6'}} />
                    <div className="text-2xl font-bold text-white">∞</div>
                    <div className="text-sm text-gray-300">Scalable Hiring</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TrueHire AI-Agent Features */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">TrueHire AI-Agent Features</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Comprehensive AI-powered recruitment capabilities designed to transform your hiring process
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group" style={{borderColor: '#9333EA33'}}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg" style={{backgroundColor: '#9333EA33'}}>
                    <Search className="h-6 w-6" style={{color: '#9333EA'}} />
                  </div>
                  <CardTitle className="text-white">Automated Screening & Qualification</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  AI-powered initial screening and qualification of candidates based on job requirements, skills, and experience matching criteria.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group" style={{borderColor: '#3B82F633'}}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg" style={{backgroundColor: '#3B82F633'}}>
                    <Calendar className="h-6 w-6" style={{color: '#3B82F6'}} />
                  </div>
                  <CardTitle className="text-white">Smart Interview Scheduling</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  Automated interview scheduling with intelligent calendar management and seamless coordination between all parties.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group" style={{borderColor: '#9333EA33'}}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg" style={{backgroundColor: '#9333EA33'}}>
                    <Target className="h-6 w-6" style={{color: '#9333EA'}} />
                  </div>
                  <CardTitle className="text-white">Instant Proposal Matching</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  Instant candidate-to-job matching using advanced algorithms that consider skills, experience, and cultural fit parameters.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group" style={{borderColor: '#3B82F633'}}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg" style={{backgroundColor: '#3B82F633'}}>
                    <MessageSquare className="h-6 w-6" style={{color: '#3B82F6'}} />
                  </div>
                  <CardTitle className="text-white">Automated Follow-ups</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  Intelligent follow-up communications with candidates and hiring managers, ensuring consistent engagement throughout the process.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group" style={{borderColor: '#9333EA33'}}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg" style={{backgroundColor: '#9333EA33'}}>
                    <BarChart3 className="h-6 w-6" style={{color: '#9333EA'}} />
                  </div>
                  <CardTitle className="text-white">Predictive Hiring Analytics</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  Advanced analytics and insights on hiring performance, candidate pipeline, and predictive success metrics for better decision-making.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group" style={{borderColor: '#3B82F633'}}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg" style={{backgroundColor: '#3B82F633'}}>
                    <Cpu className="h-6 w-6" style={{color: '#3B82F6'}} />
                  </div>
                  <CardTitle className="text-white">Candidate Automation</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  End-to-end candidate journey automation from initial contact through onboarding, ensuring seamless experience and engagement.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Client Testimonials</h2>
            <p className="text-gray-400 text-lg">What our clients say about TrueHire AI-Agent</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-slate-800/50 backdrop-blur-sm border" style={{borderColor: '#9333EA33'}}>
              <CardContent className="p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" style={{color: '#FFD700'}} />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 text-lg italic">
                  "TrueHire AI-Agent has revolutionized the way we recruit talent. The speed of hiring has gone up and the quality of candidates has significantly improved. Highly recommend their AI-powered recruitment solution."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold" style={{backgroundColor: '#9333EA'}}>
                    SM
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Sarah M.</h4>
                    <p className="text-gray-400">HR Director</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 backdrop-blur-sm border" style={{borderColor: '#3B82F633'}}>
              <CardContent className="p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" style={{color: '#FFD700'}} />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 text-lg italic">
                  "What really impressed me about challenges in finding top talent quickly. TrueHire AI-Agent not only streamlined our hiring process but also helped us find exceptional candidates that we wouldn't have discovered otherwise."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold" style={{backgroundColor: '#3B82F6'}}>
                    ET
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Emily T.</h4>
                    <p className="text-gray-400">Founder</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-400 text-lg">Get answers to common questions about TrueHire AI-Agent</p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-slate-800/50 backdrop-blur-sm border cursor-pointer" style={{borderColor: '#9333EA33'}} onClick={() => toggleFaq(index)}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                    {expandedFaq === index ? (
                      <ChevronUp className="h-5 w-5 text-gray-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                    )}
                  </div>
                  {expandedFaq === index && (
                    <div className="mt-4 pt-4 border-t border-gray-700">
                      <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="backdrop-blur-sm rounded-3xl p-12" style={{background: 'linear-gradient(135deg, #9333EA22 0%, #3B82F622 100%)', borderColor: '#9333EA33', borderWidth: '1px'}}>
            <h2 className="text-4xl font-bold text-white mb-6">
              Need to hire faster and smarter? Let TrueHire AI-Agent find the right talent for you.
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Transform your recruitment process with intelligent automation, precision matching, and unparalleled efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-white px-8 py-4 text-lg" style={{background: `linear-gradient(135deg, #9333EA 0%, #3B82F6 100%)`}}>
                Request a Demo <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="px-8 py-4 text-lg" style={{borderColor: '#9333EA', color: '#9333EA'}} onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = '#9333EA'; e.currentTarget.style.color = 'white'}} onMouseLeave={(e) => {e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#9333EA'}}>
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrueHireAI;
