
import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-purple-400 mb-4">TrueFirms</h3>
            <p className="text-gray-300 mb-4">
              Connecting talented professionals with amazing opportunities worldwide.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* For Job Seekers */}
          <div>
            <h4 className="text-lg font-semibold mb-4">For Job Seekers</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Browse Jobs</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Career Advice</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Resume Builder</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Salary Guide</a></li>
            </ul>
          </div>

          {/* For Employers */}
          <div>
            <h4 className="text-lg font-semibold mb-4">For Employers</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Post Jobs</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Find Candidates</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Recruitment Solutions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Pricing</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Help Center</a></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact Us</Link></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-white">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 TrueFirms. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
