import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Spline from '@splinetool/react-spline';


function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading of 3D element
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen bg-white-smoke pt-20 overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-white-smoke to-white-smoke/50 pointer-events-none"></div>
      <div className="absolute w-full h-full">
        <div className="absolute top-20 left-10 w-40 h-40 bg-digital-sky rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-neon-coral rounded-full opacity-10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 h-full items-center py-12">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="z-10"
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Transforming Future with <span className="text-digital-sky">AI</span> <span className="bg-gradient-to-r from-digital-sky to-neon-coral bg-clip-text text-transparent">Solutions</span>
            </motion.h1>
            
            <motion.p 
              className="mt-6 text-lg text-gray-600 max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Unlock the potential of artificial intelligence with Aleen AI. Our cutting-edge solutions 
              leverage machine learning and neural networks to solve complex problems and drive innovation.
            </motion.p>
            
            <motion.div 
              className="mt-8 flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <button className="bg-neon-coral hover:bg-opacity-90 text-white py-3 px-8 rounded-md font-medium flex items-center gap-2 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                Get Started
                <ArrowRight size={18} />
              </button>
              
              <button className="bg-transparent border-2 border-digital-sky text-digital-sky py-3 px-8 rounded-md font-medium hover:bg-digital-sky hover:text-white transition-all duration-300">
                Learn More
              </button>
            </motion.div>
            
            <motion.div 
              className="mt-12 flex items-center gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center overflow-hidden">
                    <img src={`/api/placeholder/40/40`} alt="User" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div>
                <p className="text-gray-800 font-medium">Trusted by 5000+</p>
                <div className="flex items-center mt-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-1 text-sm text-gray-600">4.9/5</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* 3D Animation Content */}
          <motion.div 
            className="relative flex justify-center items-center h-full min-h-[400px] lg:min-h-[600px]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {!isLoaded && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 border-4 border-digital-sky border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
            
            {/* Replace this div with actual Spline component in production */}
            <div className={`w-full h-full ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
              {/* In a real implementation, you would use Spline component: */}
              {/* <Spline scene="https://my-spline-scene-url.spline" /> */}
              
              {/* This is a placeholder for the Spline 3D animation */}
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="absolute w-80 h-80 bg-digital-sky rounded-full animate-pulse opacity-10"></div>
                <div className="absolute w-64 h-64 border-4 border-neon-coral rounded-full animate-spin opacity-30" style={{ animationDuration: '10s' }}></div>
                <div className="absolute w-48 h-48 border-4 border-digital-sky rounded-full animate-spin opacity-30" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
                <div className="relative bg-white/50 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/20 transform rotate-3 hover:rotate-0 transition-all duration-700">
                  <div className="w-64 h-64 bg-gradient-to-br from-digital-sky to-neon-coral rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-500 flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">3D SPLINE</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Wave separator */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-24">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V56.44Z" className="fill-white"></path>
        </svg>
      </div>
    </section>
  );
}

export default HeroSection;