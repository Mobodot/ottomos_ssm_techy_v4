import React, { useState, useEffect } from 'react';
import { TrendingUp, ArrowRight, Award } from 'lucide-react';

const ProofSection = () => {
  const [openRate, setOpenRate] = useState(0);
  const [replyRate, setReplyRate] = useState(0);
  const [pipeline, setPipeline] = useState(0);

  useEffect(() => {
    const animateStats = () => {
      const duration = 2000;
      const steps = 60;
      const openTarget = 34;
      const replyTarget = 2.5;
      const pipelineTarget = 100;

      let step = 0;
      const interval = setInterval(() => {
        step++;
        const progress = step / steps;
        const easeOut = 1 - Math.pow(1 - progress, 3);

        setOpenRate(Math.round(openTarget * easeOut));
        setReplyRate(Number((replyTarget * easeOut).toFixed(1)));
        setPipeline(Number((pipelineTarget * easeOut).toFixed(1)));

        if (step >= steps) {
          clearInterval(interval);
        }
      }, duration / steps);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateStats();
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('stats-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  // Industrial Icons
  const AwardIcon = () => (
    <div className="relative w-4 h-4">
      <div className="absolute inset-0 bg-electric-500 border border-steel-900"></div>
      <div className="absolute inset-1 bg-steel-900"></div>
      <div className="absolute top-0 left-1/2 w-1 h-2 bg-electric-500 transform -translate-x-1/2"></div>
    </div>
  );

  const TrendIcon = () => (
    <div className="relative w-8 h-8">
      <div className="absolute inset-0 bg-steel-900 border-2 border-electric-500"></div>
      <div className="absolute bottom-1 left-1 w-1 h-1 bg-electric-400"></div>
      <div className="absolute bottom-1 left-3 w-1 h-2 bg-electric-400"></div>
      <div className="absolute bottom-1 left-5 w-1 h-4 bg-electric-400"></div>
    </div>
  );

  const ArrowIcon = () => (
    <div className="relative w-4 h-4">
      <div className="absolute top-1/2 left-0 w-3 h-0.5 bg-current transform -translate-y-1/2"></div>
      <div className="absolute top-1/2 right-0 w-2 h-2 border-t-2 border-r-2 border-current transform -translate-y-1/2 rotate-45"></div>
    </div>
  );

  return (
    <section id="results" className="py-20 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Industrial Background Elements */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-20 left-20 w-32 h-32 border-4 border-electric-400 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border-4 border-coral-400 rotate-45 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-electric-500/20 border-4 border-electric-400/50 px-6 py-3 mb-8">
            <AwardIcon />
            <span className="text-electric-600 text-sm font-tech font-black tracking-widest uppercase">RESULTS THAT MATTER</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-tech font-black text-steel-800 mb-8 uppercase tracking-tight">
            <span className="text-coral-500">REAL</span> Results From{' '}
            <span className="text-electric-600">REAL</span> Clients
          </h2>
        </div>

        {/* Live Stats Bar */}
        <div id="stats-section" className="bg-gradient-to-r from-electric-500 to-coral-500 p-8 mb-16 text-white border-4 border-steel-900">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="relative">
              <div className="text-3xl md:text-5xl font-tech font-black mb-2 text-yellow-300">
                33+
              </div>
              <div className="text-base font-tech font-bold mb-1 uppercase tracking-wider">QUALIFIED LEADS</div>
              <div className="text-sm opacity-80 font-mono">GENERATED IN 2025</div>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 animate-ping"></div>
            </div>
            
            <div className="relative">
              <div className="text-3xl md:text-5xl font-tech font-black mb-2 text-yellow-300">
                $3M+
              </div>
              <div className="text-base font-tech font-bold mb-1 uppercase tracking-wider">PIPELINE VALUE</div>
              <div className="text-sm opacity-80 font-mono">TOTAL GENERATED</div>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 animate-ping" style={{ animationDelay: '0.5s' }}></div>
            </div>
            
            <div className="relative">
              <div className="text-3xl md:text-5xl font-tech font-black mb-2 text-yellow-300">
                74+
              </div>
              <div className="text-base font-tech font-bold mb-1 uppercase tracking-wider">MEETINGS BOOKED</div>
              <div className="text-sm opacity-80 font-mono">HIGH-QUALITY PROSPECTS</div>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 animate-ping" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="bg-white p-8 md:p-12 border-4 border-slate-200 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-electric-500/20 to-transparent"></div>
          
          <h3 className="text-2xl font-tech font-black text-steel-800 mb-8 text-center uppercase tracking-wide">
            CLIENT SUCCESS STORIES
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* TechFlow */}
            <div className="bg-slate-50 p-6 border-4 border-electric-200">
              <h4 className="text-lg font-tech font-black text-electric-600 mb-3 uppercase">TECHFLOW</h4>
              <p className="text-steel-600 font-mono mb-4">Expanded Into 5 New Markets, Multiple Clients</p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-xl font-tech font-black text-coral-500">$85K</div>
                  <div className="text-sm font-tech font-bold uppercase">Pipeline/Month</div>
                </div>
                <div>
                  <div className="text-xl font-tech font-black text-electric-600">4</div>
                  <div className="text-sm font-tech font-bold uppercase">High-Ticket Clients</div>
                </div>
              </div>
            </div>
            
            {/* DataSync */}
            <div className="bg-slate-50 p-6 border-4 border-coral-200">
              <h4 className="text-lg font-tech font-black text-coral-600 mb-3 uppercase">DATASYNC</h4>
              <p className="text-steel-600 font-mono mb-4">Added $70K New Revenue In 90 Days</p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-xl font-tech font-black text-coral-500">$70K</div>
                  <div className="text-sm font-tech font-bold uppercase">New Revenue</div>
                </div>
                <div>
                  <div className="text-xl font-tech font-black text-electric-600">13</div>
                  <div className="text-sm font-tech font-bold uppercase">Meetings/Month</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Proof Elements */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/90 backdrop-blur-sm p-6 border-4 border-slate-200">
            <div className="text-2xl font-tech font-black text-electric-600 mb-2">7-14</div>
            <div className="text-steel-600 font-tech font-bold uppercase tracking-wide">DAYS TO GO LIVE</div>
          </div>
          <div className="bg-white/90 backdrop-blur-sm p-6 border-4 border-slate-200">
            <div className="text-2xl font-tech font-black text-coral-500 mb-2">5-10X</div>
            <div className="text-steel-600 font-tech font-bold uppercase tracking-wide">TYPICAL ROI</div>
          </div>
          <div className="bg-white/90 backdrop-blur-sm p-6 border-4 border-slate-200">
            <div className="text-2xl font-tech font-black text-electric-600 mb-2">8-15%</div>
            <div className="text-steel-600 font-tech font-bold uppercase tracking-wide">REPLY RATES</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProofSection;