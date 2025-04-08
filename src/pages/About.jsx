import React from 'react';
import { ArrowRight, BookOpen, Brain, Image, BarChart2, FilePlus, Heart, Leaf } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-white-smoke">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 inline-block p-2 bg-digital-sky/10 rounded-full">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-digital-sky to-neon-coral flex items-center justify-center">
              <Brain size={32} className="text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-digital-sky to-neon-coral bg-clip-text text-transparent mb-6">
            AI-Powered Intelligence at Your Fingertips
          </h1>
          
          <p className="text-lg text-gray-700 mb-8">
            Our platform is a <span className="font-semibold">multi-functional AI hub</span> that empowers users to harness cutting-edge artificial intelligence for everyday tasks and professional solutions.
          </p>
          
          <div className="flex justify-center">
            <button className="px-6 py-3 bg-neon-coral text-white rounded-lg hover:bg-opacity-90 transition-all duration-300 shadow-md flex items-center space-x-2 group">
              <span>Get Started</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>
      
      {/* Core Features */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Core Features</h2>
            <div className="w-20 h-1 bg-neon-coral mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FilePlus size={32} className="text-digital-sky" />,
                title: "Smart Content Creation",
                description: "Generate blog posts, social media content, and marketing copy tailored to your brand voice"
              },
              {
                icon: <Image size={32} className="text-digital-sky" />,
                title: "Visual Intelligence",
                description: "Create images from text prompts and analyze photos for skincare/plant health insights"
              },
              {
                icon: <BarChart2 size={32} className="text-digital-sky" />,
                title: "Business Analytics",
                description: "Automate market research, competitor analysis, and startup strategy development"
              },
              {
                icon: <Heart size={32} className="text-digital-sky" />,
                title: "Personalized Solutions",
                description: "Get custom diet plans, workout routines, and book summaries"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white-smoke p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                <div className="mb-4 p-3 bg-digital-sky/10 rounded-lg inline-block">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
            
            <div className="md:col-span-2 lg:col-span-4 mt-4">
              <div className="bg-gradient-to-r from-digital-sky/10 to-neon-coral/10 p-6 rounded-xl">
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div className="mb-4 md:mb-0 flex items-center">
                    <div className="p-3 bg-white rounded-lg mr-4">
                      <Leaf size={32} className="text-digital-sky" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">Image Diagnostics</h3>
                      <p className="text-gray-600">Upload photos for instant dermatological assessments or plant disease detection</p>
                    </div>
                  </div>
                  <button className="px-5 py-2 bg-white text-digital-sky border border-digital-sky rounded-lg hover:bg-digital-sky hover:text-white transition-all duration-300">
                    Try Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Who It's For */}
      <section className="py-16 px-4 md:px-8 bg-white-smoke">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Who It's For</h2>
            <div className="w-20 h-1 bg-neon-coral mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { title: "Developers", description: "Integrating AI services" },
              { title: "Content Creators", description: "& marketers" },
              { title: "Entrepreneurs", description: "& startups" },
              { title: "Fitness Enthusiasts", description: "& gardeners" },
              { title: "Researchers", description: "& students" }
            ].map((user, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-md hover:transform hover:scale-105 transition-all duration-300">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{user.title}</h3>
                <p className="text-gray-600 text-sm">{user.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Technology Highlights */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-white to-white-smoke">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Technology Highlights</h2>
            <div className="w-20 h-1 bg-neon-coral mx-auto rounded-full"></div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-md p-8">
            <ul className="space-y-4">
              {[
                "Powered by OpenAI GPT-4o and Azure AI models",
                "Secure user authentication system",
                "Enterprise-grade PostgreSQL database",
                "Robust API infrastructure with Express.js"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="mr-3 mt-1 text-digital-sky">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-8 p-4 bg-gray-50 rounded-lg border-l-4 border-digital-sky">
              <p className="text-gray-700 italic">
                "Democratizing advanced AI capabilities through an intuitive, developer-friendly platform."
              </p>
            </div>
            
            <div className="mt-8 text-center">
              <button className="px-8 py-3 bg-neon-coral text-white rounded-lg hover:bg-opacity-90 transition-all duration-300 shadow-md flex items-center space-x-2 mx-auto">
                <span>Get Started</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Bottom CTA */}
      <section className="py-16 px-4 md:px-8 bg-digital-sky/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <BookOpen size={48} className="mx-auto text-digital-sky" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to experience the future of AI?</h2>
          <p className="text-lg text-gray-700 mb-8">
            Join thousands of users who are already transforming their work with Aleen AI.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-3 bg-neon-coral text-white rounded-lg hover:bg-opacity-90 transition-all duration-300 shadow-md">
              Sign Up Free
            </button>
            <button className="px-8 py-3 bg-white border border-digital-sky text-digital-sky rounded-lg hover:bg-digital-sky hover:text-white transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}