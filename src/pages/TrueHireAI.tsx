
import React from 'react';
import { Bot, Zap, Target, Users, ArrowRight, Sparkles, Brain, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const TrueHireAI = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Bot className="h-20 w-20 text-purple-400 animate-pulse" />
              <Sparkles className="h-6 w-6 text-yellow-400 absolute -top-2 -right-2 animate-bounce" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-6">
            TrueHire AI-Agents
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Revolutionary AI-powered recruitment agents that transform your hiring process with intelligent automation, 
            precision matching, and seamless candidate engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg">
              Deploy AI Agent <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 text-lg">
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
            <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-600/20 rounded-lg group-hover:bg-purple-600/30 transition-colors">
                    <Brain className="h-6 w-6 text-purple-400" />
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

            <Card className="bg-slate-800/50 border-cyan-500/20 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-cyan-600/20 rounded-lg group-hover:bg-cyan-600/30 transition-colors">
                    <Target className="h-6 w-6 text-cyan-400" />
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

            <Card className="bg-slate-800/50 border-pink-500/20 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-pink-600/20 rounded-lg group-hover:bg-pink-600/30 transition-colors">
                    <Users className="h-6 w-6 text-pink-400" />
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

            <Card className="bg-slate-800/50 border-green-500/20 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-600/20 rounded-lg group-hover:bg-green-600/30 transition-colors">
                    <Zap className="h-6 w-6 text-green-400" />
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

            <Card className="bg-slate-800/50 border-orange-500/20 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-orange-600/20 rounded-lg group-hover:bg-orange-600/30 transition-colors">
                    <Cpu className="h-6 w-6 text-orange-400" />
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

            <Card className="bg-slate-800/50 border-indigo-500/20 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-indigo-600/20 rounded-lg group-hover:bg-indigo-600/30 transition-colors">
                    <Sparkles className="h-6 w-6 text-indigo-400" />
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
                <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <div className="absolute -inset-4 bg-purple-600/20 rounded-full animate-ping opacity-75"></div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Configure Your Agent</h3>
              <p className="text-gray-400">
                Set up your AI agent with your specific requirements, company culture, and role criteria in minutes.
              </p>
            </div>

            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <div className="absolute -inset-4 bg-cyan-600/20 rounded-full animate-ping opacity-75 animation-delay-1000"></div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">AI Processes Candidates</h3>
              <p className="text-gray-400">
                Your AI agent automatically screens, evaluates, and ranks candidates based on your defined criteria.
              </p>
            </div>

            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <div className="absolute -inset-4 bg-green-600/20 rounded-full animate-ping opacity-75 animation-delay-2000"></div>
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
          <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-sm rounded-3xl p-12 border border-purple-500/20">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Hiring?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join forward-thinking companies who have revolutionized their recruitment process with TrueHire AI-Agents.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg">
                Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 text-lg">
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
