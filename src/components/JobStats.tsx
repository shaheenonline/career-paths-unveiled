
import React from 'react';
import { TrendingUp, Users, Briefcase, Star } from 'lucide-react';

const JobStats = () => {
  const stats = [
    {
      icon: <Briefcase className="w-8 h-8 text-blue-600" />,
      number: "51K+",
      label: "Active Contracts",
      color: "bg-blue-100"
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      number: "10K+",
      label: "Hired Pros",
      color: "bg-green-100"
    },
    {
      icon: <Star className="w-8 h-8 text-yellow-600" />,
      number: "95%",
      label: "Client Success",
      color: "bg-yellow-100"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-600" />,
      number: "$2.5M+",
      label: "Total Earnings",
      color: "bg-purple-100"
    }
  ];

  return (
    <section className="py-16 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
              <div className={`${stat.color} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow`}>
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobStats;
