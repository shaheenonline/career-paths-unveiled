
import React, { useState } from 'react';
import { Search, MapPin, Clock, DollarSign, Star, Users, Briefcase, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import JobCard from '@/components/JobCard';
import JobFilters from '@/components/JobFilters';
import JobStats from '@/components/JobStats';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const featuredJobs = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      company: "Google",
      location: "Remote",
      type: "Contract",
      rate: "$80-120/hour",
      duration: "6 months",
      skills: ["React", "Node.js", "TypeScript", "AWS"],
      rating: 4.9,
      description: "We're looking for an experienced full stack developer to join our team and help build next-generation web applications.",
      logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=60&h=60&fit=crop&crop=center"
    },
    {
      id: 2,
      title: "Mobile App Developer",
      company: "Meta",
      location: "San Francisco, CA",
      type: "Contract",
      rate: "$70-100/hour",
      duration: "4 months",
      skills: ["React Native", "iOS", "Android", "JavaScript"],
      rating: 4.8,
      description: "Join our mobile team to develop cutting-edge applications for millions of users worldwide.",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=60&h=60&fit=crop&crop=center"
    },
    {
      id: 3,
      title: "UI/UX Designer",
      company: "Airbnb",
      location: "Remote",
      type: "Contract",
      rate: "$60-90/hour",
      duration: "3 months",
      skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
      rating: 4.7,
      description: "Create beautiful and intuitive user experiences for our global platform.",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=60&h=60&fit=crop&crop=center"
    },
    {
      id: 4,
      title: "DevOps Engineer",
      company: "Amazon",
      location: "Seattle, WA",
      type: "Contract",
      rate: "$90-130/hour",
      duration: "8 months",
      skills: ["AWS", "Docker", "Kubernetes", "Terraform"],
      rating: 4.9,
      description: "Help us scale our infrastructure and improve deployment processes for our global services.",
      logo: "https://images.unsplash.com/photo-1523474438810-b04a6f0b4c46?w=60&h=60&fit=crop&crop=center"
    },
    {
      id: 5,
      title: "Data Scientist",
      company: "Netflix",
      location: "Los Angeles, CA",
      type: "Contract",
      rate: "$85-115/hour",
      duration: "5 months",
      skills: ["Python", "Machine Learning", "SQL", "TensorFlow"],
      rating: 4.8,
      description: "Analyze user behavior and develop algorithms to improve content recommendations.",
      logo: "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=60&h=60&fit=crop&crop=center"
    },
    {
      id: 6,
      title: "Blockchain Developer",
      company: "Coinbase",
      location: "Remote",
      type: "Contract",
      rate: "$100-150/hour",
      duration: "6 months",
      skills: ["Solidity", "Ethereum", "Web3", "Smart Contracts"],
      rating: 4.6,
      description: "Build decentralized applications and smart contracts for the future of finance.",
      logo: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=60&h=60&fit=crop&crop=center"
    }
  ];

  const categories = [
    { name: "Mobile App Development", count: "2,847 jobs", icon: "📱", color: "bg-blue-100 text-blue-700" },
    { name: "Web Development", count: "4,392 jobs", icon: "💻", color: "bg-purple-100 text-purple-700" },
    { name: "UI/UX Design", count: "1,923 jobs", icon: "🎨", color: "bg-pink-100 text-pink-700" },
    { name: "Data & AI/Machine Learning", count: "3,156 jobs", icon: "🤖", color: "bg-green-100 text-green-700" }
  ];

  const companies = [
    { name: "Google", logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=80&h=80&fit=crop&crop=center" },
    { name: "Meta", logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=80&h=80&fit=crop&crop=center" },
    { name: "Amazon", logo: "https://images.unsplash.com/photo-1523474438810-b04a6f0b4c46?w=80&h=80&fit=crop&crop=center" },
    { name: "Microsoft", logo: "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?w=80&h=80&fit=crop&crop=center" },
    { name: "Apple", logo: "https://images.unsplash.com/photo-1621768216002-5ac171876625?w=80&h=80&fit=crop&crop=center" },
    { name: "Netflix", logo: "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=80&h=80&fit=crop&crop=center" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Explore <span className="text-yellow-300">Contract Jobs</span>
            </h1>
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
              Discover 51K+ contract jobs worldwide. Trust-verified clients to get 
              high-paid freelance/remote projects.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-4xl mx-auto bg-white rounded-2xl p-6 shadow-2xl">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input 
                    placeholder="Job title, skills, or keyword"
                    className="pl-10 h-12 text-lg border-gray-200 focus:border-purple-500"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="flex-1 relative">
                  <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input 
                    placeholder="Location or Remote"
                    className="pl-10 h-12 text-lg border-gray-200 focus:border-purple-500"
                  />
                </div>
                <Button className="h-12 px-8 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg font-semibold">
                  Search Jobs
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <JobStats />

      {/* Featured Companies */}
      <section className="py-16 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Listed Startups Association Client Trust
            </h2>
            <p className="text-gray-600">
              Trusted by leading companies worldwide for quality freelance work
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70 hover:opacity-100 transition-opacity">
            {companies.map((company, index) => (
              <div key={index} className="flex items-center space-x-3 hover:scale-110 transition-transform">
                <img 
                  src={company.logo} 
                  alt={company.name}
                  className="w-12 h-12 rounded-lg object-cover"
                />
                <span className="font-medium text-gray-700">{company.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Categories */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Top Categories</h2>
            <p className="text-gray-600">
              Explore the most popular job categories on our platform
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="font-semibold text-lg mb-2">{category.name}</h3>
                  <Badge className={`${category.color} text-sm`}>
                    {category.count}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white">
              View All Categories
            </Button>
          </div>
        </div>
      </section>

      {/* Filters and Jobs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-1/4">
              <JobFilters />
            </div>
            
            {/* Jobs List */}
            <div className="lg:w-3/4">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Latest Contract Jobs</h2>
                <p className="text-gray-600">Showing {featuredJobs.length} of 51,000+ jobs</p>
              </div>
              
              <div className="space-y-6">
                {featuredJobs.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>
              
              <div className="text-center mt-12">
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 text-lg">
                  View All Jobs
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Let AI Match You with <span className="text-yellow-300">Contract Talent</span>
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Experience the future of hiring with AI that connects you with the perfect freelance professionals for your project needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
              Try AI-powered Match
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 text-lg font-semibold">
              Learn More
            </Button>
          </div>
          
          {/* Mini Stats */}
          <div className="flex justify-center space-x-8 mt-12 text-white">
            <div className="text-center">
              <div className="text-3xl font-bold">51K+</div>
              <div className="text-blue-200">Active Contracts</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">10K+</div>
              <div className="text-blue-200">Hired Pros</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">95%</div>
              <div className="text-blue-200">Client Success</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
