import React, { useState } from 'react';
import { Search, Crosshair as Crosshairs, Zap, ChevronDown, ChevronUp } from 'lucide-react';

const ProcessSection = () => {
  const [expandedEmail, setExpandedEmail] = useState(false);

  const emailSample = `Hi Sarah,

I noticed CloudVision just raised Series B funding, but your customer onboarding is still taking 45+ days according to your recent case study.

That's exactly what kept our client TechFlow's CEO awake at night before we helped them slash onboarding time by 73% using automated workflow triggers.

Worth a 15-minute conversation about how we could do the same for CloudVision?

Best,
Alex`;

  // Industrial Icons
  const SearchIcon = () => (
    <div className="relative w-16 h-16">
      <div className="absolute inset-0 border-4 border-coral-500 bg-steel-900"></div>
      <div className="absolute inset-2 border-2 border-electric-400 bg-steel-800"></div>
      <div className="absolute top-4 right-2 w-6 h-2 bg-coral-500 transform rotate-45"></div>
    </div>
  );

  const CrosshairsIcon = () => (
    <div className="relative w-16 h-16">
      <div className="absolute inset-0 border-4 border-electric-500 bg-steel-900"></div>
      <div className="absolute inset-4 border-2 border-coral-500 bg-steel-800"></div>
      <div className="absolute inset-6 bg-electric-400"></div>
      <div className="absolute top-0 left-1/2 w-1 h-4 bg-coral-500 transform -translate-x-1/2"></div>
      <div className="absolute bottom-0 left-1/2 w-1 h-4 bg-coral-500 transform -translate-x-1/2"></div>
      <div className="absolute left-0 top-1/2 w-4 h-1 bg-coral-500 transform -translate-y-1/2"></div>
      <div className="absolute right-0 top-1/2 w-4 h-1 bg-coral-500 transform -translate-y-1/2"></div>
    </div>
  );

  const ZapIcon = () => (
    <div className="relative w-16 h-16">
      <div className="absolute inset-0 bg-coral-500"></div>
      <div className="absolute top-2 left-6 w-4 h-12 bg-steel-900 transform skew-x-12"></div>
      <div className="absolute top-6 left-2 w-12 h-4 bg-steel-900 transform -skew-y-12"></div>
    </div>
  );

  const ChevronDownIcon = () => (
    <div className="relative w-4 h-4">
      <div className="absolute top-1 left-1/2 w-2 h-2 border-r-2 border-b-2 border-current transform -translate-x-1/2 rotate-45"></div>
    </div>
  );

  const ChevronUpIcon = () => (
    <div className="relative w-4 h-4">
      <div className="absolute bottom-1 left-1/2 w-2 h-2 border-r-2 border-t-2 border-current transform -translate-x-1/2 -rotate-45"></div>
    </div>
  );

  return (
    <section id="process" className="py-20 bg-white relative overflow-hidden">
      {/* Industrial Precision Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border-4 border-electric-400"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border-4 border-coral-400 rotate-45"></div>
        <div className="absolute bottom-32 left-1/3 w-40 h-40 border-4 border-electric-300"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-electric-500/20 border-4 border-electric-400/50 px-6 py-3 mb-8">
            <ZapIcon />
            <span className="text-electric-600 text-sm font-tech font-black tracking-widest uppercase">SURGICAL PRECISION</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-tech font-black text-steel-800 mb-8 uppercase tracking-tight">
            How Our <span className="text-electric-600">OTTOMOS</span>{' '}
            <span className="text-coral-500">FLOW</span> Works
          </h2>
        </div>

        {/* Process Steps */}
        <div className="space-y-16">
          {/* Step 1: Pain-Focused Lead Generation */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-coral-500 to-coral-400 flex items-center justify-center text-white font-tech font-black text-xl">
                  1
                </div>
                <h3 className="text-2xl font-tech font-black text-steel-800 uppercase tracking-wide">
                  <span className="text-coral-500">PAIN-FOCUSED</span> LEAD GENERATION
                </h3>
              </div>
              
              <p className="text-lg text-steel-600 mb-6 leading-relaxed font-mono font-bold">
                While Others Target By Job Title, We Target By Actual Business Problems. We Identify Companies Actively Struggling With Issues You Solve, Then Reach Out With Precise Solutions.
              </p>
              
              <div className="bg-slate-50 border-l-8 border-coral-400 p-6">
                <p className="text-steel-700 italic font-mono">
                  "We don't spray at job titles. We snipe companies in active pain."
                </p>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="bg-gradient-to-br from-slate-100 to-slate-200 p-8 border-4 border-slate-300 relative overflow-hidden">
                <SearchIcon />
                <div className="space-y-3 mt-4">
                  <div className="h-4 bg-slate-300 w-3/4"></div>
                  <div className="h-4 bg-slate-300 w-1/2"></div>
                  <div className="h-4 bg-coral-200 w-5/6"></div>
                  <div className="h-4 bg-slate-300 w-2/3"></div>
                </div>
                <div className="absolute top-4 right-4 w-8 h-8 bg-electric-400/30 animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Connecting Laser */}
          <div className="flex justify-center">
            <div className="w-1 h-16 bg-gradient-to-b from-coral-400 to-electric-400 opacity-70"></div>
          </div>

          {/* Step 2: AI-Powered Research */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-electric-500 to-electric-400 flex items-center justify-center text-white font-tech font-black text-xl">
                  2
                </div>
                <h3 className="text-2xl font-tech font-black text-steel-800 uppercase tracking-wide">
                  <span className="text-electric-500">PAIN-POINT TARGETED</span> RESEARCH
                </h3>
              </div>
              
              <p className="text-lg text-steel-600 mb-6 leading-relaxed font-mono font-bold">
                AI-Powered Prospect Research And Pain Identification. Hyper-Personalized Outreach Sequences. Multi-Channel Engagement Strategy.
              </p>
              
              <div className="bg-slate-50 border-l-8 border-electric-400 p-6">
                <p className="text-steel-700 italic font-mono">
                  "Our AI systems consistently outperform traditional SDRs—delivering more reach, better targeting, and higher conversions."
                </p>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="bg-gradient-to-br from-slate-100 to-slate-200 p-8 border-4 border-slate-300 relative overflow-hidden">
                <CrosshairsIcon />
                <div className="grid grid-cols-3 gap-2 mt-4">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div 
                      key={i} 
                      className={`h-8 ${
                        i === 4 ? 'bg-electric-400' : 'bg-slate-300'
                      }`}
                    ></div>
                  ))}
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 border-4 border-electric-500 animate-ping"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Connecting Laser */}
          <div className="flex justify-center">
            <div className="w-1 h-16 bg-gradient-to-b from-electric-400 to-coral-400 opacity-70"></div>
          </div>

          {/* Step 3: Targeted Outreach */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-coral-500 to-coral-400 flex items-center justify-center text-white font-tech font-black text-xl">
                  3
                </div>
                <h3 className="text-2xl font-tech font-black text-steel-800 uppercase tracking-wide">
                  <span className="text-coral-500">TARGETED</span> OUTREACH
                </h3>
              </div>
              
              <p className="text-lg text-steel-600 mb-6 leading-relaxed font-mono font-bold">
                Targeted Outreach That Converts Into Revenue. Complete Sales Process Automation. Performance Guarantees With Every Campaign.
              </p>
              
              <button
                onClick={() => setExpandedEmail(!expandedEmail)}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-coral-500 to-coral-400 hover:from-coral-400 hover:to-coral-300 text-white font-tech font-black px-8 py-4 transition-all duration-300 transform hover:scale-105 uppercase tracking-wider"
              >
                {expandedEmail ? 'HIDE' : 'SEE'} REAL EMAIL SAMPLE
                {expandedEmail ? <ChevronUpIcon /> : <ChevronDownIcon />}
              </button>
            </div>
            
            <div className="lg:w-1/2">
              <div className="bg-gradient-to-br from-slate-100 to-slate-200 p-8 border-4 border-slate-300 relative overflow-hidden">
                <ZapIcon />
                {expandedEmail ? (
                  <div className="bg-white p-6 border-4 border-slate-300 font-mono text-sm text-steel-700 whitespace-pre-line mt-4">
                    {emailSample}
                  </div>
                ) : (
                  <div className="space-y-3 mt-4">
                    <div className="h-4 bg-coral-200 w-full"></div>
                    <div className="h-4 bg-slate-300 w-4/5"></div>
                    <div className="h-4 bg-slate-300 w-3/4"></div>
                    <div className="h-4 bg-coral-200 w-5/6"></div>
                    <div className="h-4 bg-slate-300 w-2/3"></div>
                  </div>
                )}
                <div className="absolute top-4 right-4 w-8 h-8 bg-coral-400/30 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;