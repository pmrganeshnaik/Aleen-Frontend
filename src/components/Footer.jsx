import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white-smoke pt-12 pb-6 border-t border-gray-200">
      <div className="container mx-auto px-4">
        {/* Footer Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 group mb-4">
              <img 
                src="./logo.png" 
                alt="Aleen AI Logo" 
                className="w-10 h-10 rounded-full transition-transform duration-500 group-hover:rotate-12" 
              />
              <h2 className="text-xl font-bold bg-gradient-to-r from-digital-sky to-neon-coral bg-clip-text text-transparent">
                Aleen AI
              </h2>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Empowering businesses with intelligent AI solutions that transform 
              data into actionable insights and automate complex processes.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-500 hover:text-digital-sky transition-colors duration-300" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-digital-sky transition-colors duration-300" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-digital-sky transition-colors duration-300" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-digital-sky transition-colors duration-300" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              {/* <a href="#" className="text-gray-500 hover:text-digital-sky transition-colors duration-300" aria-label="GitHub">
                <GitHub size={20} />
              </a> */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-12 h-1 bg-neon-coral rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Blog', 'Contact', 'Help'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase()}`} 
                    className="text-gray-600 hover:text-digital-sky transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 relative inline-block">
              Legal
              <span className="absolute -bottom-1 left-0 w-12 h-1 bg-neon-coral rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR', 'Security'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/legal/${item.toLowerCase().replace(/\s+/g, '-')}`} 
                    className="text-gray-600 hover:text-digital-sky transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 relative inline-block">
              Contact Us
              <span className="absolute -bottom-1 left-0 w-12 h-1 bg-neon-coral rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-digital-sky flex-shrink-0 mt-1" />
                <span className="text-gray-600">123 AI Drive, Tech Valley, CA 94043, USA</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-digital-sky flex-shrink-0" />
                <span className="text-gray-600">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-digital-sky flex-shrink-0" />
                <a href="mailto:info@aleenai.com" className="text-gray-600 hover:text-digital-sky transition-colors duration-300">
                  info@aleenai.com
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <button className="flex items-center space-x-2 bg-digital-sky text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">
                <Mail size={16} />
                <span>Subscribe to Newsletter</span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-6 mt-6 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600 mb-4 md:mb-0">
              © {currentYear} Aleen AI. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <Link to="/sitemap" className="hover:text-digital-sky transition-colors duration-300">Sitemap</Link>
              <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
              <Link to="/accessibility" className="hover:text-digital-sky transition-colors duration-300">Accessibility</Link>
              <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
              <Link to="/careers" className="hover:text-digital-sky transition-colors duration-300">Careers</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;