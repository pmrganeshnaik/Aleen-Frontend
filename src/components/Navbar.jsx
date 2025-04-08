import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // NavLink active style
  const activeLink = "text-neon-coral font-bold border-b-2 border-neon-coral transition-all duration-300";
  const normalLink = "hover:text-digital-sky hover:border-b-2 hover:border-digital-sky transition-all duration-300";

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white-smoke shadow-md py-2' : 'bg-white-smoke/90 py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center space-x-2 group">
            <img 
              src="./logo.png" 
              alt="Aleen AI Logo" 
              className="w-10 h-10 rounded-full transition-transform duration-500 group-hover:rotate-12" 
            />
            <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-digital-sky to-neon-coral bg-clip-text text-transparent">
              Aleen AI
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center space-x-8">
            <NavLink to="/" className={({ isActive }) => isActive ? activeLink : normalLink}>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? activeLink : normalLink}>
              About
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? activeLink : normalLink}>
              Contact
            </NavLink>
            <NavLink to="/help" className={({ isActive }) => isActive ? activeLink : normalLink}>
              Help
            </NavLink>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <NavLink 
              to="/login" 
              className="px-4 py-2 text-digital-sky border border-digital-sky rounded-md hover:bg-digital-sky hover:text-white-smoke transition-all duration-300"
            >
              Log In
            </NavLink>
            <NavLink 
              to="/signup" 
              className="px-4 py-2 bg-neon-coral text-white-smoke rounded-md hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300 shadow-md"
            >
              Sign Up
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
              {isOpen ? 
                <X size={24} className="text-neon-coral transition-all duration-300" /> : 
                <Menu size={24} className="text-digital-sky transition-all duration-300" />
              }
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100 pt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col space-y-4 pb-4">
            <NavLink 
              to="/" 
              className={({ isActive }) => `block py-2 px-4 rounded-md ${isActive ? 'bg-digital-sky/10 text-digital-sky font-medium' : 'hover:bg-digital-sky/5'}`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => `block py-2 px-4 rounded-md ${isActive ? 'bg-digital-sky/10 text-digital-sky font-medium' : 'hover:bg-digital-sky/5'}`}
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => `block py-2 px-4 rounded-md ${isActive ? 'bg-digital-sky/10 text-digital-sky font-medium' : 'hover:bg-digital-sky/5'}`}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </NavLink>
            <NavLink 
              to="/help" 
              className={({ isActive }) => `block py-2 px-4 rounded-md ${isActive ? 'bg-digital-sky/10 text-digital-sky font-medium' : 'hover:bg-digital-sky/5'}`}
              onClick={() => setIsOpen(false)}
            >
              Help
            </NavLink>
            
            <div className="flex flex-col space-y-2 pt-2 border-t border-gray-200">
              <NavLink 
                to="/login" 
                className="w-full py-2 text-center text-digital-sky border border-digital-sky rounded-md hover:bg-digital-sky/10 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Log In
              </NavLink>
              <NavLink 
                to="/signin" 
                className="w-full py-2 text-center bg-neon-coral text-white-smoke rounded-md hover:bg-opacity-90 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Sign Up
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;