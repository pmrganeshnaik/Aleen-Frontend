import React, { useState } from 'react';
import { HelpCircle, Search, ChevronDown, ChevronUp, ArrowRight, BookOpen } from 'lucide-react';

export default function Help() {
  const [searchQuery, setSearchQuery] = useState('');
  const [openCategory, setOpenCategory] = useState('getting-started');
  const [expandedFaqs, setExpandedFaqs] = useState({});
  
  // Toggle FAQ visibility
  const toggleFaq = (id) => {
    setExpandedFaqs(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };
  
  // FAQ data structure
  const faqCategories = {
    'getting-started': {
      title: 'Getting Started',
      icon: <BookOpen size={20} className="text-digital-sky" />,
      faqs: [
        {
          id: 'gs-1',
          question: 'How do I create an account?',
          answer: 'To create an account, click on the "Sign Up" button in the top right corner of the navigation bar. Fill in your details, verify your email address, and you\'re ready to go.'
          // Added backslash to escape the apostrophe in "you're"  ^
        },
        {
          id: 'gs-2',
          question: 'What can I do with Aleen AI?',
          answer: 'Aleen AI offers content creation, visual intelligence, business analytics, and personalized solutions. You can generate blog posts, analyze images, automate market research, and get personalized recommendations.'
        },
        {
          id: 'gs-3',
          question: 'Is there a free trial available?',
          answer: 'Yes, we offer a 14-day free trial with access to core features. No credit card is required to start your trial. You can upgrade to a paid plan at any time.'
        }
      ]
    },
    'features': {
      title: 'Features & Capabilities',
      icon: <BookOpen size={20} className="text-digital-sky" />,
      faqs: [
        {
          id: 'f-1',
          question: 'What AI models power Aleen AI?',
          answer: 'Aleen AI is powered by OpenAI GPT-4o and Azure AI models, providing state-of-the-art natural language processing and computer vision capabilities.'
        },
        {
          id: 'f-2',
          question: 'Can I use Aleen AI for image analysis?',
          answer: 'Yes, our visual intelligence feature allows you to upload images for analysis. You can use it for skin condition assessment, plant disease detection, and general image recognition.'
        },
        {
          id: 'f-3',
          question: 'How accurate is the content generation?',
          answer: 'Our content generation maintains high accuracy with over 95% factual consistency. However, we recommend human review for critical content before publishing.'
        }
      ]
    },
    'account': {
      title: 'Account Management',
      icon: <BookOpen size={20} className="text-digital-sky" />,
      faqs: [
        {
          id: 'a-1',
          question: 'How do I reset my password?',
          answer: 'To reset your password, click on "Log In" and then select "Forgot Password". Follow the instructions sent to your email address to create a new password.'
        },
        {
          id: 'a-2',
          question: 'Can I change my email address?',
          answer: 'Yes, you can change your email address in your account settings. Go to "Profile", select "Edit Information", and update your email. A verification will be sent to your new email address.'
        },
        {
          id: 'a-3',
          question: 'How do I cancel my subscription?',
          answer: 'To cancel your subscription, go to "Account Settings" > "Subscription", and click on "Cancel Subscription". You can continue to use your account until the end of your billing period.'
        }
      ]
    },
    'billing': {
      title: 'Billing & Pricing',
      icon: <BookOpen size={20} className="text-digital-sky" />,
      faqs: [
        {
          id: 'b-1',
          question: 'What payment methods do you accept?',
          answer: 'We accept major credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers for enterprise accounts.'
        },
        {
          id: 'b-2',
          question: 'Do you offer refunds?',
          answer: 'We offer a 7-day money-back guarantee for all new subscriptions. If you re not satisfied with our service, contact our support team within 7 days of your purchase for a full refund.'
        },
        {
          id: 'b-3',
          question: 'Are there any discounts for annual plans?',
          answer: 'Yes, annual plans come with a 20% discount compared to monthly billing. Enterprise plans may qualify for additional volume discounts.'
        }
      ]
    },
    'technical': {
      title: 'Technical Support',
      icon: <BookOpen size={20} className="text-digital-sky" />,
      faqs: [
        {
          id: 't-1',
          question: 'What browsers are supported?',
          answer: 'Aleen AI supports the latest versions of Chrome, Firefox, Safari, and Edge. For the best experience, we recommend keeping your browser updated.'
        },
        {
          id: 't-2',
          question: 'Is there an API available?',
          answer: 'Yes, we offer a comprehensive API for developers. Access is included in Business and Enterprise plans. Documentation is available in our Developer Portal.'
        },
        {
          id: 't-3',
          question: 'How do I report a bug?',
          answer: 'To report a bug, please go to "Help" > "Report an Issue" or email support@aleenai.com with details of the issue, including screenshots if possible.'
        }
      ]
    }
  };
  
  // Filter FAQs based on search query
  const filteredFaqs = !searchQuery ? [] : 
    Object.values(faqCategories).flatMap(category => 
      category.faqs.filter(faq => 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  
  return (
    <div className="min-h-screen bg-white-smoke">
      {/* Header Section */}
      <section className="pt-24 pb-16 px-4 md:px-8 bg-gradient-to-b from-white-smoke to-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 inline-block p-2 bg-digital-sky/10 rounded-full">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-digital-sky to-neon-coral flex items-center justify-center">
              <HelpCircle size={32} className="text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-digital-sky to-neon-coral bg-clip-text text-transparent mb-6">
            Help Center
          </h1>
          
          <p className="text-lg text-gray-700 mb-8">
            Find answers to frequently asked questions and learn how to get the most out of Aleen AI.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <div className="flex items-center border-2 border-gray-200 rounded-lg bg-white focus-within:border-digital-sky transition-all duration-300 shadow-sm">
              <div className="pl-4">
                <Search size={20} className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search for help topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-3 px-4 outline-none bg-transparent"
              />
            </div>
            
            {/* Search Results Dropdown */}
            {searchQuery && filteredFaqs.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-100 z-10 max-h-96 overflow-y-auto">
                {filteredFaqs.map((faq) => (
                  <div 
                    key={faq.id} 
                    className="p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer"
                    onClick={() => {
                      // Find category of this FAQ
                      const categoryKey = Object.keys(faqCategories).find(key => 
                        faqCategories[key].faqs.some(f => f.id === faq.id)
                      );
                      setOpenCategory(categoryKey);
                      setExpandedFaqs({...expandedFaqs, [faq.id]: true});
                      setSearchQuery('');
                      
                      // Scroll to the FAQ
                      setTimeout(() => {
                        document.getElementById(faq.id)?.scrollIntoView({
                          behavior: 'smooth',
                          block: 'center'
                        });
                      }, 100);
                    }}
                  >
                    <h4 className="font-medium text-gray-800">{faq.question}</h4>
                    <p className="text-sm text-gray-500 mt-1">{faq.answer.substring(0, 80)}...</p>
                  </div>
                ))}
              </div>
            )}
            
            {searchQuery && filteredFaqs.length === 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-100 z-10">
                <div className="p-4 text-center">
                  <p className="text-gray-500">No results found. Try different keywords or browse the categories below.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <div className="w-20 h-1 bg-neon-coral mx-auto rounded-full"></div>
          </div>
          
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(faqCategories).map(([key, category]) => (
              <button
                key={key}
                className={`px-4 py-2 rounded-full text-sm flex items-center gap-2 transition-all duration-300 ${
                  openCategory === key 
                    ? 'bg-digital-sky text-white shadow-md' 
                    : 'bg-white-smoke text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setOpenCategory(key)}
              >
                {category.icon}
                <span>{category.title}</span>
              </button>
            ))}
          </div>
          
          {/* FAQ Accordion */}
          <div className="space-y-6">
            {faqCategories[openCategory].faqs.map((faq) => (
              <div 
                key={faq.id}
                id={faq.id}
                className={`border border-gray-200 rounded-lg transition-all duration-300 ${
                  expandedFaqs[faq.id] ? 'bg-white shadow-md' : 'bg-white-smoke hover:bg-gray-50'
                }`}
              >
                <button
                  className="w-full flex justify-between items-center p-5 text-left focus:outline-none"
                  onClick={() => toggleFaq(faq.id)}
                >
                  <h3 className="text-lg font-medium text-gray-800">{faq.question}</h3>
                  {expandedFaqs[faq.id] ? 
                    <ChevronUp size={20} className="text-digital-sky flex-shrink-0" /> : 
                    <ChevronDown size={20} className="text-gray-500 flex-shrink-0" />
                  }
                </button>
                
                {expandedFaqs[faq.id] && (
                  <div className="px-5 pb-5 pt-0">
                    <div className="h-px bg-gray-200 mb-4"></div>
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Resources Section */}
      <section className="py-16 px-4 md:px-8 bg-white-smoke">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Resources</h2>
            <div className="w-20 h-1 bg-neon-coral mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Explore our guides, tutorials, and documentation to master Aleen AI.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "User Guides",
                description: "Step-by-step guides to help you navigate and use all features",
                icon: <BookOpen size={32} className="text-digital-sky" />,
                link: "#user-guides"
              },
              {
                title: "Video Tutorials",
                description: "Watch quick video demonstrations of key features and workflows",
                icon: <BookOpen size={32} className="text-digital-sky" />,
                link: "#tutorials"
              },
              {
                title: "API Documentation",
                description: "Technical documentation for developers integrating with our API",
                icon: <BookOpen size={32} className="text-digital-sky" />,
                link: "#api-docs"
              }
            ].map((resource, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                <div className="mb-4 p-3 bg-digital-sky/10 rounded-lg inline-block">
                  {resource.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{resource.title}</h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <a 
                  href={resource.link} 
                  className="inline-flex items-center text-digital-sky hover:text-neon-coral transition-colors duration-300"
                >
                  <span>Explore</span>
                  <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Support Section */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-digital-sky/10 to-neon-coral/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Still Need Help?</h2>
          <p className="text-lg text-gray-700 mb-8">
            Our support team is available 24/7 to assist you with any questions or issues you may have.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-3 bg-neon-coral text-white rounded-lg hover:bg-opacity-90 transition-all duration-300 shadow-md">
              Contact Support
            </button>
            <button className="px-8 py-3 bg-white border border-digital-sky text-digital-sky rounded-lg hover:bg-digital-sky hover:text-white transition-all duration-300">
              Submit a Ticket
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}