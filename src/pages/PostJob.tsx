
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Building, MapPin, DollarSign, Clock, Users, Briefcase, Mail, Phone, Globe } from 'lucide-react';

const PostJob = () => {
  const [formData, setFormData] = useState({
    // Company Information
    companyName: '',
    companyWebsite: '',
    companyEmail: '',
    companyPhone: '',
    companyDescription: '',
    
    // Job Details
    jobTitle: '',
    jobCategory: '',
    jobType: '',
    workplaceType: '',
    location: '',
    salaryType: '',
    salaryMin: '',
    salaryMax: '',
    currency: 'USD',
    
    // Job Description
    jobDescription: '',
    responsibilities: '',
    requirements: '',
    preferredQualifications: '',
    benefits: '',
    
    // Application Details
    applicationDeadline: '',
    applicationEmail: '',
    applicationUrl: '',
    applicationInstructions: '',
    
    // Additional Options
    isUrgent: false,
    isFeatured: false,
    showSalary: true,
    experienceLevel: ''
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post a Job</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Reach thousands of qualified candidates and find your next great hire. Post your job in minutes and start receiving applications today.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="border-2 border-gray-200 hover:border-purple-300 transition-colors">
            <CardHeader className="text-center">
              <CardTitle className="text-xl">Basic Job Post</CardTitle>
              <div className="text-3xl font-bold text-gray-900">$99</div>
              <p className="text-sm text-gray-600">30 days active</p>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center text-sm">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Standard job listing
              </div>
              <div className="flex items-center text-sm">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Email notifications
              </div>
              <div className="flex items-center text-sm">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Basic analytics
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-purple-500 relative transform scale-105">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </span>
            </div>
            <CardHeader className="text-center">
              <CardTitle className="text-xl">Featured Job Post</CardTitle>
              <div className="text-3xl font-bold text-purple-600">$199</div>
              <p className="text-sm text-gray-600">60 days active</p>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center text-sm">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Featured placement
              </div>
              <div className="flex items-center text-sm">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Priority in search results
              </div>
              <div className="flex items-center text-sm">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Advanced analytics
              </div>
              <div className="flex items-center text-sm">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Social media promotion
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-gray-200 hover:border-purple-300 transition-colors">
            <CardHeader className="text-center">
              <CardTitle className="text-xl">Premium Package</CardTitle>
              <div className="text-3xl font-bold text-gray-900">$399</div>
              <p className="text-sm text-gray-600">90 days active</p>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center text-sm">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Top featured placement
              </div>
              <div className="flex items-center text-sm">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Company page spotlight
              </div>
              <div className="flex items-center text-sm">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Resume database access
              </div>
              <div className="flex items-center text-sm">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Dedicated account manager
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Job Form */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Job Posting Details</CardTitle>
            <p className="text-gray-600">Fill out the information below to create your job posting</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Company Information Section */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Company Information</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="companyName" className="text-sm font-medium">
                      Company Name *
                    </Label>
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input
                        id="companyName"
                        placeholder="Enter your company name"
                        value={formData.companyName}
                        onChange={(e) => handleInputChange('companyName', e.target.value)}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="companyWebsite" className="text-sm font-medium">
                      Company Website
                    </Label>
                    <div className="relative">
                      <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input
                        id="companyWebsite"
                        placeholder="https://www.yourcompany.com"
                        value={formData.companyWebsite}
                        onChange={(e) => handleInputChange('companyWebsite', e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="companyEmail" className="text-sm font-medium">
                      Company Email *
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input
                        id="companyEmail"
                        type="email"
                        placeholder="hr@yourcompany.com"
                        value={formData.companyEmail}
                        onChange={(e) => handleInputChange('companyEmail', e.target.value)}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="companyPhone" className="text-sm font-medium">
                      Company Phone
                    </Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input
                        id="companyPhone"
                        placeholder="+1 (555) 123-4567"
                        value={formData.companyPhone}
                        onChange={(e) => handleInputChange('companyPhone', e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="companyDescription" className="text-sm font-medium">
                    Company Description
                  </Label>
                  <Textarea
                    id="companyDescription"
                    placeholder="Brief description of your company, culture, and values..."
                    value={formData.companyDescription}
                    onChange={(e) => handleInputChange('companyDescription', e.target.value)}
                    rows={3}
                  />
                </div>
              </div>

              {/* Job Details Section */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Job Details</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="jobTitle" className="text-sm font-medium">
                    Job Title *
                  </Label>
                  <div className="relative">
                    <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      id="jobTitle"
                      placeholder="e.g. Senior Software Engineer, Marketing Manager"
                      value={formData.jobTitle}
                      onChange={(e) => handleInputChange('jobTitle', e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="jobCategory" className="text-sm font-medium">
                      Job Category *
                    </Label>
                    <Select value={formData.jobCategory} onValueChange={(value) => handleInputChange('jobCategory', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="technology">Technology</SelectItem>
                        <SelectItem value="marketing">Marketing</SelectItem>
                        <SelectItem value="sales">Sales</SelectItem>
                        <SelectItem value="design">Design</SelectItem>
                        <SelectItem value="finance">Finance</SelectItem>
                        <SelectItem value="operations">Operations</SelectItem>
                        <SelectItem value="hr">Human Resources</SelectItem>
                        <SelectItem value="customer-service">Customer Service</SelectItem>
                        <SelectItem value="healthcare">Healthcare</SelectItem>
                        <SelectItem value="education">Education</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experienceLevel" className="text-sm font-medium">
                      Experience Level *
                    </Label>
                    <Select value={formData.experienceLevel} onValueChange={(value) => handleInputChange('experienceLevel', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="entry">Entry Level (0-2 years)</SelectItem>
                        <SelectItem value="mid">Mid Level (2-5 years)</SelectItem>
                        <SelectItem value="senior">Senior Level (5-10 years)</SelectItem>
                        <SelectItem value="lead">Lead/Principal (10+ years)</SelectItem>
                        <SelectItem value="executive">Executive</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Job Type *</Label>
                    <RadioGroup value={formData.jobType} onValueChange={(value) => handleInputChange('jobType', value)}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="full-time" id="full-time" />
                        <Label htmlFor="full-time">Full Time</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="part-time" id="part-time" />
                        <Label htmlFor="part-time">Part Time</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="contract" id="contract" />
                        <Label htmlFor="contract">Contract</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="freelance" id="freelance" />
                        <Label htmlFor="freelance">Freelance</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="internship" id="internship" />
                        <Label htmlFor="internship">Internship</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Workplace Type *</Label>
                    <RadioGroup value={formData.workplaceType} onValueChange={(value) => handleInputChange('workplaceType', value)}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="onsite" id="onsite" />
                        <Label htmlFor="onsite">On-site</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="remote" id="remote" />
                        <Label htmlFor="remote">Remote</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="hybrid" id="hybrid" />
                        <Label htmlFor="hybrid">Hybrid</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location" className="text-sm font-medium">
                    Job Location *
                  </Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      id="location"
                      placeholder="e.g. New York, NY or Remote"
                      value={formData.location}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                {/* Salary Information */}
                <div className="space-y-4">
                  <Label className="text-sm font-medium">Salary Information</Label>
                  <div className="space-y-4">
                    <RadioGroup value={formData.salaryType} onValueChange={(value) => handleInputChange('salaryType', value)}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="range" id="salary-range" />
                        <Label htmlFor="salary-range">Salary Range</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="exact" id="salary-exact" />
                        <Label htmlFor="salary-exact">Exact Salary</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="negotiable" id="salary-negotiable" />
                        <Label htmlFor="salary-negotiable">Negotiable</Label>
                      </div>
                    </RadioGroup>

                    {(formData.salaryType === 'range' || formData.salaryType === 'exact') && (
                      <div className="grid grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="currency" className="text-sm font-medium">Currency</Label>
                          <Select value={formData.currency} onValueChange={(value) => handleInputChange('currency', value)}>
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="USD">USD ($)</SelectItem>
                              <SelectItem value="EUR">EUR (€)</SelectItem>
                              <SelectItem value="GBP">GBP (£)</SelectItem>
                              <SelectItem value="CAD">CAD ($)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="salaryMin" className="text-sm font-medium">
                            {formData.salaryType === 'range' ? 'Minimum' : 'Amount'}
                          </Label>
                          <div className="relative">
                            <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                            <Input
                              id="salaryMin"
                              placeholder="50000"
                              value={formData.salaryMin}
                              onChange={(e) => handleInputChange('salaryMin', e.target.value)}
                              className="pl-10"
                            />
                          </div>
                        </div>
                        {formData.salaryType === 'range' && (
                          <div className="space-y-2">
                            <Label htmlFor="salaryMax" className="text-sm font-medium">Maximum</Label>
                            <div className="relative">
                              <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                              <Input
                                id="salaryMax"
                                placeholder="80000"
                                value={formData.salaryMax}
                                onChange={(e) => handleInputChange('salaryMax', e.target.value)}
                                className="pl-10"
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Job Description Section */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Job Description</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="jobDescription" className="text-sm font-medium">
                    Job Description *
                  </Label>
                  <Textarea
                    id="jobDescription"
                    placeholder="Provide a detailed description of the role, company culture, and what makes this opportunity exciting..."
                    value={formData.jobDescription}
                    onChange={(e) => handleInputChange('jobDescription', e.target.value)}
                    rows={6}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="responsibilities" className="text-sm font-medium">
                    Key Responsibilities *
                  </Label>
                  <Textarea
                    id="responsibilities"
                    placeholder="• Lead and manage a team of developers&#10;• Design and implement scalable solutions&#10;• Collaborate with cross-functional teams"
                    value={formData.responsibilities}
                    onChange={(e) => handleInputChange('responsibilities', e.target.value)}
                    rows={4}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="requirements" className="text-sm font-medium">
                    Required Qualifications *
                  </Label>
                  <Textarea
                    id="requirements"
                    placeholder="• Bachelor's degree in Computer Science or related field&#10;• 5+ years of experience in software development&#10;• Strong knowledge of React, Node.js, and databases"
                    value={formData.requirements}
                    onChange={(e) => handleInputChange('requirements', e.target.value)}
                    rows={4}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="preferredQualifications" className="text-sm font-medium">
                    Preferred Qualifications
                  </Label>
                  <Textarea
                    id="preferredQualifications"
                    placeholder="• Master's degree preferred&#10;• Experience with cloud platforms (AWS, Azure)&#10;• Previous leadership experience"
                    value={formData.preferredQualifications}
                    onChange={(e) => handleInputChange('preferredQualifications', e.target.value)}
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="benefits" className="text-sm font-medium">
                    Benefits & Perks
                  </Label>
                  <Textarea
                    id="benefits"
                    placeholder="• Health, dental, and vision insurance&#10;• 401(k) with company matching&#10;• Flexible work schedule&#10;• Professional development opportunities"
                    value={formData.benefits}
                    onChange={(e) => handleInputChange('benefits', e.target.value)}
                    rows={4}
                  />
                </div>
              </div>

              {/* Application Details Section */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Application Details</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
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

                  <div className="space-y-2">
                    <Label htmlFor="applicationEmail" className="text-sm font-medium">
                      Application Email *
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input
                        id="applicationEmail"
                        type="email"
                        placeholder="applications@company.com"
                        value={formData.applicationEmail}
                        onChange={(e) => handleInputChange('applicationEmail', e.target.value)}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="applicationUrl" className="text-sm font-medium">
                    Application URL (Optional)
                  </Label>
                  <Input
                    id="applicationUrl"
                    placeholder="https://company.com/careers/apply"
                    value={formData.applicationUrl}
                    onChange={(e) => handleInputChange('applicationUrl', e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="applicationInstructions" className="text-sm font-medium">
                    Application Instructions
                  </Label>
                  <Textarea
                    id="applicationInstructions"
                    placeholder="Please include your resume, cover letter, and portfolio. Mention 'JobHub' in your subject line."
                    value={formData.applicationInstructions}
                    onChange={(e) => handleInputChange('applicationInstructions', e.target.value)}
                    rows={3}
                  />
                </div>
              </div>

              {/* Additional Options */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Additional Options</h3>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="showSalary"
                      checked={formData.showSalary}
                      onCheckedChange={(checked) => handleInputChange('showSalary', checked as boolean)}
                    />
                    <Label htmlFor="showSalary" className="text-sm">
                      Show salary information in job listing
                    </Label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="isUrgent"
                      checked={formData.isUrgent}
                      onCheckedChange={(checked) => handleInputChange('isUrgent', checked as boolean)}
                    />
                    <Label htmlFor="isUrgent" className="text-sm">
                      Mark as urgent hiring (will display "Urgent" badge)
                    </Label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="isFeatured"
                      checked={formData.isFeatured}
                      onCheckedChange={(checked) => handleInputChange('isFeatured', checked as boolean)}
                    />
                    <Label htmlFor="isFeatured" className="text-sm">
                      Make this a featured job listing (+$50)
                    </Label>
                  </div>
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="flex flex-col sm:flex-row justify-end space-y-4 sm:space-y-0 sm:space-x-4 pt-6 border-t">
                <Button type="button" variant="outline" className="px-8 py-3">
                  Save as Draft
                </Button>
                <Button type="submit" className="px-8 py-3 bg-purple-600 hover:bg-purple-700">
                  Preview & Post Job - $99
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
