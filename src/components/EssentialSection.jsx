import React from 'react';
import { motion } from 'framer-motion';
import { Brain, ChartBar, Lock, Zap, Users, Code } from 'lucide-react';

function EssentialSection() {
  const features = [
    {
      icon: <Brain size={24} />,
      title: "Advanced AI Models",
      description: "Our state-of-the-art neural networks provide intelligent solutions across various domains."
    },
    {
      icon: <ChartBar size={24} />,
      title: "Data Analytics",
      description: "Transform raw data into actionable insights with our powerful analytics tools."
    },
    {
      icon: <Lock size={24} />,
      title: "Secure & Private",
      description: "Enterprise-grade security with end-to-end encryption and privacy-focused design."
    },
    {
      icon: <Zap size={24} />,
      title: "Lightning Fast",
      description: "Optimized processing delivers results in milliseconds, not minutes."
    },
    {
      icon: <Users size={24} />,
      title: "User-Friendly",
      description: "Intuitive interfaces designed for professionals and novices alike."
    },
    {
      icon: <Code size={24} />,
      title: "Extensible API",
      description: "Easily integrate our AI capabilities into your existing workflows and applications."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Essential <span className="text-digital-sky">Features</span>
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-neon-coral mx-auto mb-6 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          ></motion.div>
          <motion.p 
            className="max-w-2xl mx-auto text-gray-600 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Discover why leading companies choose Aleen AI for their artificial intelligence needs.
            Our platform combines cutting-edge technology with user-friendly design.
          </motion.p>
        </div>

        {/* Features Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-white-smoke p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-digital-sky/30 group"
            >
              <div className="w-14 h-14 bg-digital-sky/10 rounded-lg flex items-center justify-center mb-6 text-digital-sky group-hover:bg-digital-sky group-hover:text-white transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <a 
            href="#" 
            className="bg-gradient-to-r from-digital-sky to-neon-coral text-white py-4 px-10 rounded-full font-medium inline-flex items-center shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Explore All Features
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default EssentialSection;