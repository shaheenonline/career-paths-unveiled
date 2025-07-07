
import React from 'react';
import { Bell, User, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/">
                <h1 className="text-2xl font-bold" style={{color: '#9333EA'}}>TrueFirms</h1>
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 px-3 py-2 text-sm font-medium hover:text-gray-900 transition-colors" style={{'--hover-color': '#9333EA'} as React.CSSProperties} onMouseEnter={(e) => e.currentTarget.style.color = '#9333EA'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>
              Home
            </Link>
            <Link to="/jobs" className="text-gray-700 px-3 py-2 text-sm font-medium hover:text-gray-900 transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#9333EA'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>
              Find Jobs
            </Link>
            <Link to="/truehire-ai" className="text-gray-700 px-3 py-2 text-sm font-medium hover:text-gray-900 transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#9333EA'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>
              TrueHire AI
            </Link>
            <Link to="/enterprise" className="text-gray-700 px-3 py-2 text-sm font-medium hover:text-gray-900 transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#9333EA'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>
              Enterprise
            </Link>
            <Link to="/itgc-controls" className="text-gray-700 px-3 py-2 text-sm font-medium hover:text-gray-900 transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#9333EA'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>
              ITGC Controls
            </Link>
            <Link to="/gcc" className="text-gray-700 px-3 py-2 text-sm font-medium hover:text-gray-900 transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#9333EA'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>
              GCC
            </Link>
            <Link to="/about" className="text-gray-700 px-3 py-2 text-sm font-medium hover:text-gray-900 transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#9333EA'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>
              About
            </Link>
            <Link to="/contact" className="text-gray-700 px-3 py-2 text-sm font-medium hover:text-gray-900 transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#9333EA'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>
              Contact
            </Link>
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden md:flex">
              <Bell className="h-4 w-4" />
            </Button>
            <Link to="/login">
              <Button variant="outline" size="sm" className="hidden md:flex">
                Sign In
              </Button>
            </Link>
            <Link to="/post-job">
              <Button size="sm" className="text-white" style={{background: `linear-gradient(135deg, #9333EA 0%, #3B82F6 100%)`}}>
                Post Job
              </Button>
            </Link>
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
