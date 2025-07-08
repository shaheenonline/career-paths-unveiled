
import React from 'react';
import { Search, MapPin, Briefcase, Users, TrendingUp, Star, ArrowRight, CheckCircle, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const contractJobs = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      company: "TechCorp",
      location: "Remote",
      type: "Contract",
      salary: "$80-120/hr",
      duration: "6 months",
      skills: ["React", "Node.js", "AWS"]
    },
    {
      id: 2,
      title: "Senior Full Stack Developer",
      company: "Innovation Labs",
      location: "San Francisco, CA",
      type: "Contract",
      salary: "$90-130/hr",
      duration: "3 months",
      skills: ["Python", "Django", "PostgreSQL"]
    },
    {
      id: 3,
      title: "Senior Full Stack Developer",
      company: "Digital Solutions",
      location: "New York, NY",
      type: "Contract",
      salary: "$85-125/hr",
      duration: "4 months",
      skills: ["Vue.js", "PHP", "MySQL"]
    }
  ];

  const categories = [
    { name: "Mobile App Development", jobs: 1247, icon: "📱", color: "bg-orange-500" },
    { name: "Web Development", jobs: 892, icon: "💻", color: "bg-blue-500" },
    { name: "UI/UX Design", jobs: 654, icon: "🎨", color: "bg-green-500" },
    { name: "Data & Analytics", jobs: 543, icon: "📊", color: "bg-purple-500" }
  ];

  const companies = [
    { name: "Google", logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=100&h=100&fit=crop&crop=center" },
    { name: "Meta", logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop&crop=center" },
    { name: "Amazon", logo: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=100&h=100&fit=crop&crop=center" },
    { name: "Microsoft", logo: "https://images.unsplash.com/photo-1633409361618-c73427e4e206?w=100&h=100&fit=crop&crop=center" },
    { name: "Unilever", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=center" },
    { name: "NASA", logo: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=100&h=100&fit=crop&crop=center" }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Full Stack Developer",
      content: "TrueFirms helped me find amazing contract opportunities. The platform is intuitive and connects you with top-tier companies.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=center"
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "UX Designer",
      content: "I've been using TrueFirms for over a year. The quality of projects and client communication is outstanding.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=center"
    },
    {
      id: 3,
      name: "Emily Johnson",
      role: "Data Scientist",
      content: "The best platform for finding high-quality contract work. Professional clients and fair compensation.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=center"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-blue-50 to-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Explore <span className="text-purple-600">Contract Jobs</span>
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Browse 20K+ jobs and skills sorted on TrueFirms to display only match jobs that best match your skills
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="relative">
                  <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 h-6 w-6" />
                  <Input
                    type="text"
                    placeholder="Job, skills or company"
                    className="pl-14 h-16 text-lg border-gray-200 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <div className="relative">
                  <MapPin className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 h-6 w-6" />
                  <Input
                    type="text"
                    placeholder="Select a location"
                    className="pl-14 h-16 text-lg border-gray-200 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <Button className="h-16 bg-purple-600 hover:bg-purple-700 text-lg font-semibold rounded-2xl shadow-lg">
                  Search Jobs
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-5xl font-bold mb-3 text-purple-600">51K+</div>
              <div className="text-gray-600 text-lg">Active Jobs</div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-5xl font-bold mb-3 text-purple-600">10K+</div>
              <div className="text-gray-600 text-lg">Companies</div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-5xl font-bold mb-3 text-purple-600">95%</div>
              <div className="text-gray-600 text-lg">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Companies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Listed Service Providers Have Been <span className="text-purple-600">Trusted By</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Top companies choose our platform to find the best talent for their projects
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {companies.map((company, index) => (
              <div key={index} className="flex items-center justify-center p-8 bg-white rounded-2xl hover:shadow-xl transition-all duration-300 cursor-pointer">
                <img 
                  src={company.logo} 
                  alt={company.name}
                  className="w-20 h-20 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Top Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore trending categories and find your next opportunity
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-0 rounded-3xl overflow-hidden">
                <CardContent className="p-8 text-center">
                  <div className={`w-20 h-20 ${category.color} rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-6`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{category.name}</h3>
                  <p className="text-gray-600">{category.jobs.toLocaleString()} jobs available</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-3 rounded-2xl text-lg">
              View All Categories
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">How It Works</h2>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">Get started in just a few simple steps</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6">1</div>
              <h3 className="text-2xl font-semibold mb-4">Tell Us What You Need</h3>
              <p className="text-purple-100 text-lg">Answer a few questions about your skills and preferences</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6">2</div>
              <h3 className="text-2xl font-semibold mb-4">We Find & Shortlist</h3>
              <p className="text-purple-100 text-lg">Our AI matches you with the best opportunities</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6">3</div>
              <h3 className="text-2xl font-semibold mb-4">Review Contract Profiles</h3>
              <p className="text-purple-100 text-lg">Browse and select from curated job matches</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6">4</div>
              <h3 className="text-2xl font-semibold mb-4">Hire with Confidence</h3>
              <p className="text-purple-100 text-lg">Start working with verified, top-rated professionals</p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Contract Jobs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Latest Contract <span className="text-purple-600">Jobs</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Discover high-quality contract opportunities from top companies</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {contractJobs.map((job) => (
              <Card key={job.id} className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer rounded-3xl border-0 overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <Badge variant="secondary" className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full">
                      {job.type}
                    </Badge>
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{job.duration}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {job.title}
                  </h3>
                  <p className="text-gray-700 font-medium mb-4 text-lg">{job.company}</p>
                  <div className="flex items-center text-gray-600 mb-6">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span className="text-lg">{job.location}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {job.skills.map((skill, index) => (
                      <Badge key={index} variant="outline" className="text-sm px-3 py-1 rounded-full">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-gray-900">{job.salary}</span>
                    <Button size="sm" className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-2xl">
                      Apply Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-2xl text-lg">
              View All Jobs
            </Button>
          </div>
        </div>
      </section>

      {/* Why Use TrueFirms */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Use <span className="text-purple-600">TrueFirms</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Discover why thousands of professionals choose our platform</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6">
                AI
              </div>
              <h3 className="text-2xl font-semibold mb-4">AI Matching Engine</h3>
              <p className="text-gray-600 text-lg">Advanced algorithms match you with the perfect opportunities based on your skills and preferences</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-purple-500 rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-6">
                ⚡
              </div>
              <h3 className="text-2xl font-semibold mb-4">Quick Insights</h3>
              <p className="text-gray-600 text-lg">Get instant feedback and insights about your applications and market trends</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-6">
                ✓
              </div>
              <h3 className="text-2xl font-semibold mb-4">Verified Trust</h3>
              <p className="text-gray-600 text-lg">All companies and professionals are thoroughly vetted for quality and reliability</p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">See Why Customers Love TrueFirms</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">Read what our community has to say about their experience</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="bg-white text-gray-900 rounded-3xl border-0 overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 text-lg">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                    <div>
                      <div className="font-semibold text-lg">{testimonial.name}</div>
                      <div className="text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked <span className="text-purple-600">Questions</span>
            </h2>
          </div>
          <div className="space-y-8">
            <div className="bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">How does TrueFirms work?</h3>
              <p className="text-gray-600 text-lg">TrueFirms connects talented professionals with top companies through our AI-powered matching system. Simply create your profile, browse opportunities, and apply to jobs that match your skills.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Is TrueFirms free to use?</h3>
              <p className="text-gray-600 text-lg">Yes, creating a profile and applying to jobs is completely free for professionals. We only charge companies for our recruitment services.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">How do I get started?</h3>
              <p className="text-gray-600 text-lg">Simply click "Get Started" and create your professional profile. Our AI will then match you with relevant opportunities based on your skills and preferences.</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6 text-lg">Still have questions?</p>
            <Button variant="outline" className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-3 rounded-2xl text-lg">
              Contact Support
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let AI Match You with <span className="text-yellow-400">Perfect Talent</span>
          </h2>
          <p className="text-xl text-purple-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Experience the future of hiring with AI intelligent job matching that connects you with the best talent for your project needs
          </p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-xl px-12 py-4 rounded-2xl font-semibold shadow-lg">
            Get Started
          </Button>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16 max-w-3xl mx-auto">
            <div className="bg-white bg-opacity-10 rounded-2xl p-8">
              <div className="text-4xl font-bold mb-3">51K+</div>
              <div className="text-purple-200 text-lg">Professionals</div>
            </div>
            <div className="bg-white bg-opacity-10 rounded-2xl p-8">
              <div className="text-4xl font-bold mb-3">10K+</div>
              <div className="text-purple-200 text-lg">Companies</div>
            </div>
            <div className="bg-white bg-opacity-10 rounded-2xl p-8">
              <div className="text-4xl font-bold mb-3">95%</div>
              <div className="text-purple-200 text-lg">Success Rate</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
