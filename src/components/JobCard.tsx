
import React from 'react';
import { MapPin, Clock, DollarSign, Star, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  rate: string;
  duration: string;
  skills: string[];
  rating: number;
  description: string;
  logo: string;
}

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 bg-white">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-start space-x-4">
            <img 
              src={job.logo} 
              alt={job.company}
              className="w-16 h-16 rounded-lg object-cover bg-gray-100"
            />
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-1 hover:text-purple-600 cursor-pointer">
                {job.title}
              </h3>
              <p className="text-lg text-gray-700 font-medium mb-2">{job.company}</p>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <MapPin className="w-4 h-4" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{job.duration}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span>{job.rating}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-red-500">
              <Heart className="w-5 h-5" />
            </Button>
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
              {job.type}
            </Badge>
          </div>
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-2">{job.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {job.skills.map((skill, index) => (
            <Badge key={index} variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100">
              {skill}
            </Badge>
          ))}
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <DollarSign className="w-5 h-5 text-green-600" />
            <span className="text-xl font-bold text-gray-900">{job.rate}</span>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
              Save Job
            </Button>
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
              Apply Now
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default JobCard;
