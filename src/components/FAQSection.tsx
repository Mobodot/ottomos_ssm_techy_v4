import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "How fast can we go live?",
      answer: "Most systems are live within 7-14 days. We handle domain setup, email infrastructure, CRM integration, and sequence creation. You'll see your first replies within the first week."
    },
    {
      question: "Do you source leads too?",
      answer: "Yes, we handle complete lead sourcing using premium databases and AI-powered research. We identify your ideal prospects based on your criteria and continuously refresh your pipeline."
    },
    {
      question: "What industries do you support?",
      answer: "We specialize in B2B SaaS, professional services, agencies, recruiting, healthcare, and high-ticket consulting. Our AI adapts to industry-specific messaging and compliance requirements."
    },
    {
      question: "Is it one-time or ongoing?",
      answer: "Both options available. We offer complete system builds (one-time) or fully-managed ongoing campaigns. Most clients prefer our managed service for continuous optimization and lead flow."
    },
    {
      question: "What's your typical ROI?",
      answer: "Clients typically see 5-10x ROI within the first 90 days. Average cost per qualified meeting ranges from $50-150 depending on industry and deal size."
    },
    {
      question: "Do you guarantee results?",
      answer: "We guarantee technical setup and delivery. While we can't control prospect responses, our systems consistently achieve 8-15% reply rates and 2-5% positive response rates across industries."
    }
  ];

  // Industrial Icons
  const HelpIcon = () => (
    <div className="relative w-12 h-12">
      <div className="absolute inset-0 border-4 border-electric-500 bg-steel-900"></div>
      <div className="absolute inset-2 border-2 border-coral-500 bg-steel-800"></div>
      <div className="absolute top-3 left-1/2 w-1 h-3 bg-electric-400 transform -translate-x-1/2"></div>
      <div className="absolute bottom-2 left-1/2 w-2 h-2 bg-electric-400 transform -translate-x-1/2"></div>
    </div>
  );

  const ChevronDownIcon = () => (
    <div className="relative w-6 h-6">
      <div className="absolute top-2 left-1/2 w-3 h-3 border-r-2 border-b-2 border-current transform -translate-x-1/2 rotate-45"></div>
    </div>
  );

  const ChevronUpIcon = () => (
    <div className="relative w-6 h-6">
      <div className="absolute bottom-2 left-1/2 w-3 h-3 border-r-2 border-t-2 border-current transform -translate-x-1/2 -rotate-45"></div>
    </div>
  );

  return (
    <section id="faqs" className="py-20 bg-gradient-to-b from-white to-slate-100 relative overflow-hidden">
      {/* Industrial Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 border-4 border-electric-400"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 border-4 border-coral-400 rotate-45"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 border-4 border-electric-300 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-electric-500/20 border-4 border-electric-400/50 px-6 py-3 mb-8">
            <HelpIcon />
            <span className="text-electric-600 text-sm font-tech font-black tracking-widest uppercase">INTEL BRIEFING</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-tech font-black text-steel-800 mb-6 uppercase tracking-tight">
            <span className="text-electric-600">COMMONLY</span> ASKED{' '}
            <span className="text-coral-500">QUESTIONS</span>
          </h2>
          
          <p className="text-lg text-steel-600 font-mono font-bold uppercase tracking-wider">
            EVERYTHING YOU NEED TO KNOW ABOUT OUR AI OUTBOUND SYSTEMS
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white border-4 border-slate-200 shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <button
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-slate-50 transition-colors duration-200"
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              >
                <h3 className="text-lg font-tech font-black text-steel-800 uppercase tracking-wide pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0 text-electric-600">
                  {openFAQ === index ? <ChevronUpIcon /> : <ChevronDownIcon />}
                </div>
              </button>
              
              {openFAQ === index && (
                <div className="px-8 pb-6 border-t-2 border-slate-100">
                  <div className="pt-4">
                    <p className="text-base text-steel-600 leading-relaxed font-mono font-bold">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA Teaser */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-electric-500/20 to-coral-500/20 border-4 border-electric-400/50 p-8">
           <h3 className="text-xl font-tech font-black text-steel-800 mb-4 uppercase tracking-wider">
              STILL HAVE QUESTIONS?
            </h3>
           <p className="text-base text-steel-600 mb-6 font-mono font-bold uppercase tracking-wide">
              GET ANSWERS ON A 15-MINUTE STRATEGY CALL
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-coral-500 to-electric-400 mx-auto animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Transition to final section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-200 to-transparent"></div>
    </section>
  );
};

export default FAQSection;