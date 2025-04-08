import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search } from 'lucide-react';

function NotFound() {  
  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white-smoke py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full text-center space-y-8">
        {/* 404 Graphic */}
        <div className="relative mx-auto w-64 h-64">
          <div className="absolute inset-0 bg-digital-sky/10 rounded-full animate-pulse" style={{ animationDuration: '3s' }}></div>
          <div className="absolute inset-4 bg-digital-sky/20 rounded-full animate-pulse" style={{ animationDuration: '4s', animationDelay: '0.5s' }}></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-9xl font-bold bg-gradient-to-br from-digital-sky to-neon-coral bg-clip-text text-transparent">
              404
            </h1>
          </div>
        </div>
        
        {/* Content */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-800">Page Not Found</h2>
          <p className="text-gray-600 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved. 
            Please check the URL or try navigating back to the homepage.
          </p>
        </div>
        
        {/* Search Bar */}
        <div className="mx-auto max-w-md">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={20} className="text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-digital-sky focus:border-digital-sky"
              placeholder="Search for content..."
            />
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={goBack}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 transition-all duration-300"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>
          
          <Link
            to="/"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-neon-coral text-white rounded-md shadow-md hover:bg-opacity-90 transition-all duration-300"
          >
            <Home size={18} />
            Back to Home
          </Link>
        </div>
        
        {/* Additional Links */}
        <div className="pt-8">
          <p className="text-gray-600">Looking for something specific?</p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-2">
            {['About', 'Contact', 'Help', 'Services'].map((item) => (
              <Link 
                key={item}
                to={`/${item.toLowerCase()}`}
                className="text-digital-sky hover:text-neon-coral transition-colors duration-300"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;