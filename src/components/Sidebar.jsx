import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, MessageSquare, FileText, BookOpen, Salad, User, Leaf, Briefcase, PenTool } from 'lucide-react';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  // Handle window resize for responsiveness
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 1024) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    handleResize(); // Initialize on component mount
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Toggle sidebar
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  
  // NavLink active style
  const activeLink = "flex items-center space-x-3 px-4 py-3 bg-digital-sky/10 text-digital-sky font-medium rounded-md transition-all duration-300";
  const normalLink = "flex items-center space-x-3 px-4 py-3 text-gray-600 hover:bg-digital-sky/5 hover:text-digital-sky rounded-md transition-all duration-300";
  
  // Menu items with icons
  const menuItems = [
    { path: "/chat/case-study", name: "Case Study", icon: <FileText size={20} /> },
    { path: "/chat/content-generator", name: "Content Generator", icon: <MessageSquare size={20} /> },
    { path: "/chat/book-summary", name: "Book Summary", icon: <BookOpen size={20} /> },
    { path: "/chat/deit-workout", name: "Diet & Workout", icon: <Salad size={20} /> },
    { path: "/chat/face-analysis", name: "Face Analysis", icon: <User size={20} /> },
    { path: "/chat/leaf-analysis", name: "Leaf Analysis", icon: <Leaf size={20} /> },
    { path: "/chat/start-up", name: "Start-up", icon: <Briefcase size={20} /> },
    { path: "/chat/writer-ai", name: "Writer AI", icon: <PenTool size={20} /> },
  ];

  return (
    <div className="flex h-screen w-full">
      {/* Sidebar - Full height */}
      <div 
        className={`h-screen fixed top-0 left-0 bg-white-smoke shadow-lg z-40 transition-all duration-300 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 overflow-y-auto flex flex-col`}
        style={{ width: "280px" }}
      >
        {/* Logo Section */}
        <div className="flex items-center space-x-3 px-6 py-6 border-b border-gray-200">
          <div className="w-10 h-10 rounded-full overflow-hidden group transition-transform duration-500 group-hover:rotate-12">
            <img src="/api/placeholder/40/40" alt="Aleen AI Logo" className="w-full h-full object-cover" />
          </div>
          <h2 className="text-xl font-bold bg-gradient-to-r from-digital-sky to-neon-coral bg-clip-text text-transparent">
            Aleen AI
          </h2>
          
          {/* Close button - Mobile Only */}
          <button 
            onClick={toggleSidebar}
            className="ml-auto lg:hidden p-1 rounded-full hover:bg-gray-200 text-gray-500 hover:text-neon-coral transition-all duration-300"
            aria-label="Close Sidebar"
          >
            <X size={20} />
          </button>
        </div>
        
        
        {/* Navigation Links */}
        <div className="flex-1 overflow-y-auto py-4 px-4">
          <div className="space-y-1">
            {menuItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => isActive ? activeLink : normalLink}
                onClick={() => windowWidth < 1024 && setIsOpen(false)}
              >
                <span className="text-digital-sky">{item.icon}</span>
                <span>{item.name}</span>
              </NavLink>
            ))}
          </div>
        </div>
        
        {/* Bottom Section with light border */}
        <div className="p-4 border-t border-gray-100">
          <button className="w-full py-2 px-4 bg-neon-coral text-white rounded-md hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center space-x-2">
            <MessageSquare size={18} />
            <span>New Chat</span>
          </button>
        </div>
      </div>
      
      {/* Mobile Toggle Button - Fixed Position */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button 
          onClick={toggleSidebar} 
          className="p-2 rounded-full bg-white shadow-md text-digital-sky hover:text-neon-coral transition-all duration-300"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Dark Overlay when sidebar is open on mobile */}
      {isOpen && windowWidth < 1024 && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={toggleSidebar}
        />
      )}
      
      {/* Content Area - Takes remaining width */}
      <div className={`flex-1 ${isOpen ? 'lg:ml-72' : ''} transition-all duration-300`} style={{ marginLeft: windowWidth > 1024 ? "280px" : "0" }}>
        {/* This is where your page content will go */}
      </div>
    </div>
  );
}

export default Sidebar;