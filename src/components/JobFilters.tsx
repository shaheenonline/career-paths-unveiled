
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const JobFilters = () => {
  const [hourlyRate, setHourlyRate] = React.useState([50]);
  
  const jobTypes = [
    { id: 'contract', label: 'Contract', count: 1247 },
    { id: 'freelance', label: 'Freelance', count: 892 },
    { id: 'part-time', label: 'Part-time', count: 456 },
    { id: 'project-based', label: 'Project-based', count: 334 }
  ];

  const experienceLevels = [
    { id: 'entry', label: 'Entry Level', count: 234 },
    { id: 'intermediate', label: 'Intermediate', count: 567 },
    { id: 'expert', label: 'Expert', count: 789 },
    { id: 'senior', label: 'Senior', count: 456 }
  ];

  const locations = [
    { id: 'remote', label: 'Remote', count: 1523 },
    { id: 'usa', label: 'United States', count: 789 },
    { id: 'europe', label: 'Europe', count: 456 },
    { id: 'asia', label: 'Asia', count: 234 }
  ];

  const skills = ['React', 'Node.js', 'Python', 'AWS', 'TypeScript', 'Docker'];

  return (
    <div className="space-y-6">
      {/* Active Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Active Filters</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="secondary" className="bg-purple-100 text-purple-700">
              Remote
            </Badge>
            <Badge variant="secondary" className="bg-purple-100 text-purple-700">
              React
            </Badge>
          </div>
          <Button variant="outline" size="sm" className="w-full">
            Clear All
          </Button>
        </CardContent>
      </Card>

      {/* Job Type */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Job Type</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {jobTypes.map((type) => (
            <div key={type.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id={type.id} />
                <Label htmlFor={type.id} className="cursor-pointer">
                  {type.label}
                </Label>
              </div>
              <span className="text-sm text-gray-500">({type.count})</span>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Hourly Rate */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Hourly Rate</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <Label className="text-sm text-gray-600">
              ${hourlyRate[0]}/hour and above
            </Label>
          </div>
          <Slider
            value={hourlyRate}
            onValueChange={setHourlyRate}
            max={200}
            min={10}
            step={5}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-2">
            <span>$10</span>
            <span>$200+</span>
          </div>
        </CardContent>
      </Card>

      {/* Experience Level */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Experience Level</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {experienceLevels.map((level) => (
            <div key={level.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id={level.id} />
                <Label htmlFor={level.id} className="cursor-pointer">
                  {level.label}
                </Label>
              </div>
              <span className="text-sm text-gray-500">({level.count})</span>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Location */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Location</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {locations.map((location) => (
            <div key={location.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id={location.id} />
                <Label htmlFor={location.id} className="cursor-pointer">
                  {location.label}
                </Label>
              </div>
              <span className="text-sm text-gray-500">({location.count})</span>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Skills */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Popular Skills</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge 
                key={skill} 
                variant="outline" 
                className="cursor-pointer hover:bg-purple-50 hover:border-purple-300"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default JobFilters;
