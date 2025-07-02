
import React from 'react';
import { Bot, Zap, Target, Users, ArrowRight, Sparkles, Brain, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const TrueHireAI = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" style={{background: 'linear-gradient(135deg, #1e293b 0%, #581c87 50%, #1e293b 100%)'}}>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Bot className="h-20 w-20 animate-pulse" style={{color: '#9333EA'}} />
              <Sparkles className="h-6 w-6 text-yellow-400 absolute -top-2 -right-2 animate-bounce" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{background: `linear-gradient(135deg, #9333EA 0%, #3B82F6 50%, #06b6d4 100%)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>
            TrueHire AI-Agents
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Revolutionary AI-powered recruitment agents that transform your hiring process with intelligent automation, 
            precision matching, and seamless candidate engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-white px-8 py-4 text-lg" style={{background: `linear-gradient(135deg, #9333EA 0%, #3B82F6 100%)`}}>
              Deploy AI Agent <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg" style={{borderColor: '#9333EA', color: '#9333EA'}} onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = '#9333EA'; e.currentTarget.style.color = 'white'}} onMouseLeave={(e) => {e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#9333EA'}}>
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">AI-Powered Capabilities</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Experience the future of recruitment with our advanced AI agents designed to streamline every aspect of your hiring process.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group" style={{borderColor: '#9333EA33'}}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg group-hover:bg-opacity-30 transition-colors" style={{backgroundColor: '#9333EA33'}}>
                    <Brain className="h-6 w-6" style={{color: '#9333EA'}} />
                  </div>
                  <CardTitle className="text-white">Intelligent Screening</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  AI agents automatically screen resumes, assess qualifications, and rank candidates based on your specific requirements and company culture fit.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group" style={{borderColor: '#3B82F633'}}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg group-hover:bg-opacity-30 transition-colors" style={{backgroundColor: '#3B82F633'}}>
                    <Target className="h-6 w-6" style={{color: '#3B82F6'}} />
                  </div>
                  <CardTitle className="text-white">Precision Matching</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  Advanced algorithms match candidates to roles with unprecedented accuracy, considering skills, experience, and cultural alignment.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group" style={{borderColor: '#9333EA33'}}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg group-hover:bg-opacity-30 transition-colors" style={{backgroundColor: '#9333EA33'}}>
                    <Users className="h-6 w-6" style={{color: '#9333EA'}} />
                  </div>
                  <CardTitle className="text-white">Automated Engagement</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  Personalized communication with candidates throughout the hiring process, ensuring consistent and professional engagement.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group" style={{borderColor: '#3B82F633'}}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg group-hover:bg-opacity-30 transition-colors" style={{backgroundColor: '#3B82F633'}}>
                    <Zap className="h-6 w-6" style={{color: '#3B82F6'}} />
                  </div>
                  <CardTitle className="text-white">Real-time Analytics</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  Comprehensive insights and analytics on hiring performance, candidate pipeline, and recruitment metrics in real-time.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group" style={{borderColor: '#9333EA33'}}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg group-hover:bg-opacity-30 transition-colors" style={{backgroundColor: '#9333EA33'}}>
                    <Cpu className="h-6 w-6" style={{color: '#9333EA'}} />
                  </div>
                  <CardTitle className="text-white">Continuous Learning</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  AI agents continuously learn from your hiring decisions and feedback to improve matching accuracy and efficiency over time.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group" style={{borderColor: '#3B82F633'}}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg group-hover:bg-opacity-30 transition-colors" style={{backgroundColor: '#3B82F633'}}>
                    <Sparkles className="h-6 w-6" style={{color: '#3B82F6'}} />
                  </div>
                  <CardTitle className="text-white">Smart Automation</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  Automate repetitive tasks like scheduling interviews, sending follow-ups, and updating candidate status across all platforms.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">How TrueHire AI Works</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Deploy intelligent AI agents in minutes and revolutionize your recruitment process with cutting-edge automation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300" style={{background: `linear-gradient(135deg, #9333EA 0%, #3B82F6 100%)`}}>
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <div className="absolute -inset-4 rounded-full animate-ping opacity-75" style={{backgroundColor: '#9333EA33'}}></div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Configure Your Agent</h3>
              <p className="text-gray-400">
                Set up your AI agent with your specific requirements, company culture, and role criteria in minutes.
              </p>
            </div>

            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300" style={{background: `linear-gradient(135deg, #3B82F6 0%, #06b6d4 100%)`}}>
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <div className="absolute -inset-4 rounded-full animate-ping opacity-75 animation-delay-1000" style={{backgroundColor: '#3B82F633'}}></div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">AI Processes Candidates</h3>
              <p className="text-gray-400">
                Your AI agent automatically screens, evaluates, and ranks candidates based on your defined criteria.
              </p>
            </div>

            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300" style={{background: `linear-gradient(135deg, #9333EA 0%, #3B82F6 100%)`}}>
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <div className="absolute -inset-4 rounded-full animate-ping opacity-75 animation-delay-2000" style={{backgroundColor: '#9333EA33'}}></div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Get Perfect Matches</h3>
              <p className="text-gray-400">
                Receive pre-qualified candidates with detailed insights and recommendations for faster hiring decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="backdrop-blur-sm rounded-3xl p-12" style={{background: 'linear-gradient(135deg, #9333EA22 0%, #3B82F622 100%)', borderColor: '#9333EA33', borderWidth: '1px'}}>
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Hiring?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join forward-thinking companies who have revolutionized their recruitment process with TrueHire AI-Agents.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-white px-8 py-4 text-lg" style={{background: `linear-gradient(135deg, #9333EA 0%, #3B82F6 100%)`}}>
                Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
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
