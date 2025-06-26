
import React, { useState } from 'react';
import { Search, MapPin, Briefcase, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import JobCard from '@/components/JobCard';
import JobFilters from '@/components/JobFilters';
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';

const Jobs = () => {
  const [showFilters, setShowFilters] = useState(false);

  // Sample job data
  const jobs = [
    {
      id: 1,
      title: "Senior React Developer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      type: "Full-time",
      rate: "$120-150/hr",
      duration: "6 months",
      skills: ["React", "TypeScript", "Node.js", "AWS"],
      rating: 4.8,
      description: "We're looking for a skilled React developer to join our dynamic team and work on cutting-edge web applications.",
      logo: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=100&h=100&fit=crop&crop=center"
    },
    {
      id: 2,
      title: "UX/UI Designer",
      company: "Design Studio",
      location: "Remote",
      type: "Contract",
      rate: "$80-100/hr",
      duration: "3 months",
      skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
      rating: 4.9,
      description: "Create intuitive and beautiful user experiences for our clients' digital products.",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop&crop=center"
    },
    {
      id: 3,
      title: "Full Stack Engineer",
      company: "StartupXYZ",
      location: "New York, NY",
      type: "Full-time",
      rate: "$100-130/hr",
      duration: "12 months",
      skills: ["Python", "Django", "React", "PostgreSQL"],
      rating: 4.7,
      description: "Join our fast-growing startup and help build scalable web applications from the ground up.",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=center"
    },
    {
      id: 4,
      title: "DevOps Engineer",
      company: "CloudTech Solutions",
      location: "Austin, TX",
      type: "Contract",
      rate: "$110-140/hr",
      duration: "8 months",
      skills: ["AWS", "Docker", "Kubernetes", "Terraform"],
      rating: 4.6,
      description: "Help us build and maintain robust cloud infrastructure for enterprise clients.",
      logo: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=100&h=100&fit=crop&crop=center"
    },
    {
      id: 5,
      title: "Mobile App Developer",
      company: "MobileFirst",
      location: "Los Angeles, CA",
      type: "Freelance",
      rate: "$90-120/hr",
      duration: "4 months",
      skills: ["React Native", "Swift", "Kotlin", "Firebase"],
      rating: 4.8,
      description: "Develop cross-platform mobile applications for iOS and Android platforms.",
      logo: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=100&h=100&fit=crop&crop=center"
    },
    {
      id: 6,
      title: "Data Scientist",
      company: "DataInsights Corp",
      location: "Boston, MA",
      type: "Full-time",
      rate: "$130-160/hr",
      duration: "10 months",
      skills: ["Python", "Machine Learning", "SQL", "Tableau"],
      rating: 4.9,
      description: "Analyze complex datasets and build predictive models to drive business decisions.",
      logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100&h=100&fit=crop&crop=center"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Find Your Dream Job
            </h1>
            <p className="text-xl text-purple-100 mb-8">
              Discover opportunities that match your skills and passion
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-4 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="md:col-span-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <Input
                      type="text"
                      placeholder="Job title, keywords, or company"
                      className="pl-10 h-12 text-gray-900"
                    />
                  </div>
                </div>
                <div>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <Input
                      type="text"
                      placeholder="Location"
                      className="pl-10 h-12 text-gray-900"
                    />
                  </div>
                </div>
                <Button className="h-12 bg-purple-600 hover:bg-purple-700">
                  Search Jobs
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 text-center">
            <div>
              <div className="text-3xl font-bold">10,000+</div>
              <div className="text-purple-200">Active Jobs</div>
            </div>
            <div>
              <div className="text-3xl font-bold">5,000+</div>
              <div className="text-purple-200">Companies</div>
            </div>
            <div>
              <div className="text-3xl font-bold">50,000+</div>
              <div className="text-purple-200">Job Seekers</div>
            </div>
            <div>
              <div className="text-3xl font-bold">95%</div>
              <div className="text-purple-200">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Jobs Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Bar */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 space-y-4 md:space-y-0">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Available Jobs</h2>
              <p className="text-gray-600">Showing 1,247 jobs based on your preferences</p>
            </div>
            <div className="flex items-center space-x-4">
              <Select defaultValue="newest">
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="salary">Highest Salary</SelectItem>
                  <SelectItem value="relevance">Most Relevant</SelectItem>
                </SelectContent>
              </Select>
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="md:hidden"
              >
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className={`lg:w-80 ${showFilters ? 'block' : 'hidden lg:block'}`}>
              <JobFilters />
            </div>

            {/* Job Listings */}
            <div className="flex-1">
              <div className="space-y-6">
                {jobs.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-12 flex justify-center">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" isActive>1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">12</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext href="#" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Jobs;
