import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };
  
  return (
    <div className="min-h-screen bg-white-smoke">
      {/* Header Section */}
      <section className="pt-24 pb-16 px-4 md:px-8 bg-gradient-to-b from-white-smoke to-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 inline-block p-2 bg-digital-sky/10 rounded-full">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-digital-sky to-neon-coral flex items-center justify-center">
              <Mail size={32} className="text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-digital-sky to-neon-coral bg-clip-text text-transparent mb-6">
            Get in Touch
          </h1>
          
          <p className="text-lg text-gray-700 mb-8">
            Have questions about our AI solutions? Looking for support or want to partner with us? 
            We'd love to hear from you.
          </p>
        </div>
      </section>
      
      {/* Contact Information & Form Section */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="bg-white-smoke p-6 rounded-xl shadow-sm h-full">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-digital-sky/10 rounded-lg">
                      <MapPin size={24} className="text-digital-sky" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">Our Location</h3>
                      <p className="text-gray-600 mt-1">123 AI Drive, Tech Valley, CA 94043, USA</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-digital-sky/10 rounded-lg">
                      <Phone size={24} className="text-digital-sky" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">Phone Number</h3>
                      <p className="text-gray-600 mt-1">+1 (555) 123-4567</p>
                      <p className="text-gray-600">Mon-Fri, 9AM-6PM EST</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-digital-sky/10 rounded-lg">
                      <Mail size={24} className="text-digital-sky" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">Email Address</h3>
                      <p className="text-gray-600 mt-1">info@aleenai.com</p>
                      <p className="text-gray-600">support@aleenai.com</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10 pt-6 border-t border-gray-200">
                  <h3 className="font-medium text-gray-800 mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                      <a 
                        key={social}
                        href={`#${social}`} 
                        className="w-10 h-10 rounded-full bg-white shadow-sm hover:shadow-md flex items-center justify-center transition-all duration-300 hover:scale-110"
                      >
                        <img src={`/api/placeholder/24/24`} alt={social} className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-gray-100 p-8 rounded-xl shadow-sm">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send Us a Message</h2>
                
                {submitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                    <CheckCircle size={48} className="mx-auto text-green-500 mb-4" />
                    <h3 className="text-xl font-medium text-gray-800 mb-2">Thank You!</h3>
                    <p className="text-gray-600">
                      Your message has been sent successfully. We'll get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-digital-sky focus:border-digital-sky transition-all duration-300"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-digital-sky focus:border-digital-sky transition-all duration-300"
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-digital-sky focus:border-digital-sky transition-all duration-300"
                        placeholder="How can we help you?"
                        required
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        rows="5"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-digital-sky focus:border-digital-sky transition-all duration-300"
                        placeholder="Write your message here..."
                        required
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className="px-6 py-3 bg-neon-coral text-white rounded-lg hover:bg-opacity-90 transition-all duration-300 shadow-md flex items-center space-x-2 group"
                    >
                      <span>Send Message</span>
                      <Send size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 px-4 md:px-8 bg-white-smoke">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Find Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Visit our office to meet the team and see how we're building the future of AI.
            </p>
          </div>
          
          <div className="bg-white p-2 rounded-xl shadow-md">
            {/* This would be a real map in production */}
            <div className="h-96 w-full bg-gray-200 rounded-lg overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-gray-500 font-medium">Interactive Map Would Be Here</p>
              </div>
              {/* Map placeholder design */}
              <div className="absolute top-0 left-0 w-full h-full opacity-30">
                <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-neon-coral rounded-full animate-ping"></div>
                <div className="absolute top-1/3 left-1/4 w-6 h-6 bg-neon-coral rounded-full opacity-30"></div>
                <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-digital-sky rounded-full opacity-10"></div>
                <div className="grid grid-cols-12 h-full">
                  {Array(12).fill().map((_, i) => (
                    <div key={i} className="border-r border-gray-300 h-full"></div>
                  ))}
                </div>
                <div className="grid grid-rows-12 h-full">
                  {Array(12).fill().map((_, i) => (
                    <div key={i} className="border-b border-gray-300 w-full"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-4 md:px-8 bg-digital-sky/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to transform your business with AI?</h2>
          <p className="text-lg text-gray-700 mb-8">
            Schedule a demo to see how our AI solutions can help you overcome challenges and drive growth.
          </p>
          <button className="px-8 py-3 bg-neon-coral text-white rounded-lg hover:bg-opacity-90 transition-all duration-300 shadow-md">
            Schedule a Demo
          </button>
        </div>
      </section>
    </div>
  );
}