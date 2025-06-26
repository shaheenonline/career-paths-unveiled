
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Building, MapPin, DollarSign, Clock, Users, Briefcase } from 'lucide-react';

const PostJob = () => {
  const [formData, setFormData] = useState({
    jobTitle: '',
    company: '',
    location: '',
    jobType: '',
    experience: '',
    salary: '',
    description: '',
    requirements: '',
    benefits: '',
    applicationDeadline: '',
    isRemote: false,
    isUrgent: false,
    featured: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Job posting:', formData);
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Post a New Job</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find the perfect candidate for your team. Post your job and reach thousands of qualified professionals.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="border-2 border-gray-200">
            <CardHeader className="text-center">
              <CardTitle className="text-lg">Basic</CardTitle>
              <div className="text-2xl font-bold text-gray-900">$99</div>
              <p className="text-sm text-gray-600">30 days listing</p>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center text-sm">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Standard job listing
              </div>
              <div className="flex items-center text-sm">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Email applications
              </div>
              <div className="flex items-center text-sm">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Basic support
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-purple-500 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                Popular
              </span>
            </div>
            <CardHeader className="text-center">
              <CardTitle className="text-lg">Premium</CardTitle>
              <div className="text-2xl font-bold text-purple-600">$199</div>
              <p className="text-sm text-gray-600">60 days listing</p>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center text-sm">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Featured job listing
              </div>
              <div className="flex items-center text-sm">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Priority in search
              </div>
              <div className="flex items-center text-sm">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Advanced analytics
              </div>
              <div className="flex items-center text-sm">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Premium support
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-gray-200">
            <CardHeader className="text-center">
              <CardTitle className="text-lg">Enterprise</CardTitle>
              <div className="text-2xl font-bold text-gray-900">$399</div>
              <p className="text-sm text-gray-600">90 days listing</p>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center text-sm">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Top featured listing
              </div>
              <div className="flex items-center text-sm">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Company page highlight
              </div>
              <div className="flex items-center text-sm">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Dedicated support
              </div>
              <div className="flex items-center text-sm">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Resume database access
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Job Form */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl">Job Details</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Basic Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="jobTitle" className="text-sm font-medium">
                    Job Title *
                  </Label>
                  <div className="relative">
                    <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      id="jobTitle"
                      placeholder="e.g. Senior Software Engineer"
                      value={formData.jobTitle}
                      onChange={(e) => handleInputChange('jobTitle', e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="text-sm font-medium">
                    Company Name *
                  </Label>
                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      id="company"
                      placeholder="e.g. TechCorp Inc."
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="location" className="text-sm font-medium">
                    Location *
                  </Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      id="location"
                      placeholder="e.g. New York, NY"
                      value={formData.location}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="jobType" className="text-sm font-medium">
                    Job Type *
                  </Label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <select
                      id="jobType"
                      value={formData.jobType}
                      onChange={(e) => handleInputChange('jobType', e.target.value)}
                      className="pl-10 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      required
                    >
                      <option value="">Select job type</option>
                      <option value="full-time">Full Time</option>
                      <option value="part-time">Part Time</option>
                      <option value="contract">Contract</option>
                      <option value="freelance">Freelance</option>
                      <option value="internship">Internship</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="experience" className="text-sm font-medium">
                    Experience Level *
                  </Label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <select
                      id="experience"
                      value={formData.experience}
                      onChange={(e) => handleInputChange('experience', e.target.value)}
                      className="pl-10 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      required
                    >
                      <option value="">Select experience level</option>
                      <option value="entry">Entry Level (0-2 years)</option>
                      <option value="mid">Mid Level (2-5 years)</option>
                      <option value="senior">Senior Level (5-10 years)</option>
                      <option value="lead">Lead/Principal (10+ years)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="salary" className="text-sm font-medium">
                    Salary Range
                  </Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      id="salary"
                      placeholder="e.g. $80,000 - $120,000"
                      value={formData.salary}
                      onChange={(e) => handleInputChange('salary', e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>

              {/* Job Description */}
              <div className="space-y-2">
                <Label htmlFor="description" className="text-sm font-medium">
                  Job Description *
                </Label>
                <Textarea
                  id="description"
                  placeholder="Describe the role, responsibilities, and what makes this opportunity exciting..."
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  rows={6}
                  required
                />
              </div>

              {/* Requirements */}
              <div className="space-y-2">
                <Label htmlFor="requirements" className="text-sm font-medium">
                  Requirements *
                </Label>
                <Textarea
                  id="requirements"
                  placeholder="List the required skills, qualifications, and experience..."
                  value={formData.requirements}
                  onChange={(e) => handleInputChange('requirements', e.target.value)}
                  rows={4}
                  required
                />
              </div>

              {/* Benefits */}
              <div className="space-y-2">
                <Label htmlFor="benefits" className="text-sm font-medium">
                  Benefits & Perks
                </Label>
                <Textarea
                  id="benefits"
                  placeholder="Health insurance, 401k, flexible schedule, remote work options..."
                  value={formData.benefits}
                  onChange={(e) => handleInputChange('benefits', e.target.value)}
                  rows={3}
                />
              </div>

              {/* Application Deadline */}
              <div className="space-y-2">
                <Label htmlFor="applicationDeadline" className="text-sm font-medium">
                  Application Deadline
                </Label>
                <Input
                  id="applicationDeadline"
                  type="date"
                  value={formData.applicationDeadline}
                  onChange={(e) => handleInputChange('applicationDeadline', e.target.value)}
                />
              </div>

              {/* Checkboxes */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="isRemote"
                    checked={formData.isRemote}
                    onCheckedChange={(checked) => handleInputChange('isRemote', checked as boolean)}
                  />
                  <Label htmlFor="isRemote" className="text-sm">
                    This is a remote position
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="isUrgent"
                    checked={formData.isUrgent}
                    onCheckedChange={(checked) => handleInputChange('isUrgent', checked as boolean)}
                  />
                  <Label htmlFor="isUrgent" className="text-sm">
                    Urgent hiring (will be marked as urgent)
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="featured"
                    checked={formData.featured}
                    onCheckedChange={(checked) => handleInputChange('featured', checked as boolean)}
                  />
                  <Label htmlFor="featured" className="text-sm">
                    Make this a featured job (+$50)
                  </Label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end space-x-4 pt-6">
                <Button type="button" variant="outline" className="px-8">
                  Save Draft
                </Button>
                <Button type="submit" className="px-8 bg-purple-600 hover:bg-purple-700">
                  Post Job - $99
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PostJob;
