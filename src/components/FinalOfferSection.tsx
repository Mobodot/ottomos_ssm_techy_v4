import React, { useState } from 'react';
import { ArrowRight, Shield, Clock, RefreshCw, Target } from 'lucide-react';

const FinalOfferSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Industrial Icons
  const ShieldIcon = () => (
    <div className="relative w-4 h-4">
      <div className="absolute inset-0 bg-coral-500 border border-steel-900 clip-path-shield"></div>
      <div className="absolute inset-1 bg-steel-900"></div>
      <div className="absolute top-1 left-1/2 w-0.5 h-2 bg-coral-500 transform -translate-x-1/2"></div>
    </div>
  );

  const ClockIcon = () => (
    <div className="relative w-12 h-12">
      <div className="absolute inset-0 border-4 border-electric-600 bg-steel-900"></div>
      <div className="absolute inset-2 border-2 border-electric-400 bg-steel-800"></div>
      <div className="absolute top-1/2 left-1/2 w-1 h-3 bg-electric-400 transform -translate-x-1/2 -translate-y-full origin-bottom"></div>
      <div className="absolute top-1/2 left-1/2 w-1 h-2 bg-electric-400 transform -translate-x-1/2 -translate-y-full origin-bottom rotate-90"></div>
    </div>
  );

  const ShieldLargeIcon = () => (
    <div className="relative w-12 h-12">
      <div className="absolute inset-0 bg-coral-500 border-4 border-steel-900 clip-path-shield"></div>
      <div className="absolute inset-2 bg-steel-900"></div>
      <div className="absolute top-2 left-1/2 w-1 h-6 bg-coral-500 transform -translate-x-1/2"></div>
      <div className="absolute top-4 left-1/2 w-4 h-1 bg-coral-500 transform -translate-x-1/2"></div>
    </div>
  );

  const RefreshIcon = () => (
    <div className="relative w-12 h-12">
      <div className="absolute inset-0 border-4 border-electric-600 bg-steel-900"></div>
      <div className="absolute top-2 left-2 w-8 h-8 border-2 border-electric-400 border-t-transparent transform rotate-45"></div>
      <div className="absolute top-1 right-1 w-2 h-2 bg-electric-400 transform rotate-45"></div>
    </div>
  );

  const TargetIcon = () => (
    <div className="relative w-8 h-8">
      <div className="absolute inset-0 border-4 border-electric-500 bg-steel-900"></div>
      <div className="absolute inset-1 border-2 border-coral-500 bg-steel-800"></div>
      <div className="absolute inset-2 bg-electric-400"></div>
      <div className="absolute top-0 left-1/2 w-1 h-2 bg-coral-500 transform -translate-x-1/2"></div>
      <div className="absolute bottom-0 left-1/2 w-1 h-2 bg-coral-500 transform -translate-x-1/2"></div>
      <div className="absolute left-0 top-1/2 w-2 h-1 bg-coral-500 transform -translate-y-1/2"></div>
      <div className="absolute right-0 top-1/2 w-2 h-1 bg-coral-500 transform -translate-y-1/2"></div>
    </div>
  );

  const ArrowIcon = ({ className }: { className?: string }) => (
    <div className={`relative w-8 h-8 ${className}`}>
      <div className="absolute top-1/2 left-0 w-6 h-1 bg-current transform -translate-y-1/2"></div>
      <div className="absolute top-1/2 right-0 w-3 h-3 border-t-2 border-r-2 border-current transform -translate-y-1/2 rotate-45"></div>
    </div>
  );

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-steel-900 relative overflow-hidden">
      {/* Industrial Transition Elements */}
      <div className="absolute inset-0">
        {/* Coral Laser Guides */}
        <div className="absolute top-1/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-coral-500 to-transparent opacity-40 animate-scan"></div>
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-coral-400 to-transparent opacity-30 animate-scan" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-3/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-coral-600 to-transparent opacity-35 animate-scan" style={{ animationDelay: '2s' }}></div>
        
        {/* Targeting Elements */}
        <div className="absolute top-20 right-20 w-16 h-16 border-4 border-electric-400/40 animate-ping"></div>
        <div className="absolute bottom-32 left-32 w-12 h-12 border-4 border-coral-300/30 animate-bounce"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Risk Reversal Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-coral-500/20 border-4 border-coral-400/50 px-6 py-3 mb-8">
            <ShieldIcon />
            <span className="text-coral-600 text-sm font-tech font-black tracking-widest uppercase">RISK REVERSAL</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-tech font-black text-steel-800 mb-6 leading-tight uppercase tracking-tight">
            You're One Conversation Away From{' '}
            <span className="text-electric-600">AUTOMATING</span>
            <br />
            Your <span className="text-coral-500">OUTBOUND</span> Forever
          </h2>
          
          <p className="text-lg md:text-xl text-steel-600 mb-12 max-w-4xl mx-auto leading-relaxed font-mono font-bold">
            Stop wasting time on manual outreach. Let AI handle your prospecting while you focus on closing deals.<br />
            <span className="text-steel-800 font-tech font-black uppercase tracking-wider">SETUP IN 7-14 DAYS • NO LONG-TERM CONTRACTS</span>
          </p>
        </div>

        {/* Main CTA */}
        <div className="text-center mb-16">
          <button
            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-coral-500 to-coral-400 hover:from-coral-400 hover:to-coral-300 text-white font-tech font-black text-lg px-12 py-6 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-coral-500/25 uppercase tracking-wider"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <TargetIcon />
            BOOK MORE MEETINGS
            <ArrowIcon 
              className={`transition-all duration-300 ${
                isHovered ? 'translate-x-2 text-yellow-200' : ''
              }`} 
            />
            
            {/* Laser Effect */}
            {isHovered && (
              <div className="absolute -right-24 top-1/2 transform -translate-y-1/2">
                <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-transparent animate-pulse"></div>
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-yellow-400 animate-ping"></div>
              </div>
            )}
          </button>
        </div>

        {/* Guarantee Badges */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/90 backdrop-blur-sm p-6 border-4 border-electric-200/50 shadow-lg text-center group hover:shadow-xl transition-all duration-300">
            <ClockIcon />
            <h3 className="text-lg font-tech font-black text-steel-800 mb-2 uppercase tracking-wide">SETUP IN 7-14 DAYS</h3>
            <p className="text-steel-600 font-mono">Most systems are live within 7-14 days</p>
          </div>
          
          <div className="bg-white/90 backdrop-blur-sm p-6 border-4 border-coral-200/50 shadow-lg text-center group hover:shadow-xl transition-all duration-300">
            <ShieldLargeIcon />
            <h3 className="text-lg font-tech font-black text-steel-800 mb-2 uppercase tracking-wide">FULL MONEY-BACK GUARANTEE</h3>
            <p className="text-steel-600 font-mono">We guarantee technical setup and delivery</p>
          </div>
          
          <div className="bg-white/90 backdrop-blur-sm p-6 border-4 border-electric-200/50 shadow-lg text-center group hover:shadow-xl transition-all duration-300">
            <RefreshIcon />
            <h3 className="text-lg font-tech font-black text-steel-800 mb-2 uppercase tracking-wide">NO LONG-TERM CONTRACTS</h3>
            <p className="text-steel-600 font-mono">Both one-time builds and ongoing campaigns available</p>
          </div>
        </div>

        {/* Final Value Proposition */}
        <div className="bg-gradient-to-r from-steel-800 to-steel-900 p-8 md:p-12 text-white text-center relative overflow-hidden border-4 border-steel-700">
          <div className="absolute inset-0 opacity-15">
            <div className="absolute top-4 right-4 w-16 h-16 border-4 border-electric-400 animate-pulse"></div>
            <div className="absolute bottom-4 left-4 w-12 h-12 border-4 border-coral-400 rotate-45 animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-xl md:text-2xl font-tech font-black mb-6 uppercase tracking-wider">
              STOP WASTING TIME ON MANUAL OUTREACH
            </h3>
            <p className="text-base text-slate-300 mb-8 max-w-3xl mx-auto font-mono font-bold">
              15-minute strategy call • No commitment required
              <br />
              Let AI handle your prospecting while you focus on closing deals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-electric-400 animate-pulse"></div>
                <span className="font-tech font-bold uppercase tracking-wider">5-10X TYPICAL ROI</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-coral-400 animate-pulse"></div>
                <span className="font-tech font-bold uppercase tracking-wider">8-15% REPLY RATES</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-electric-400 animate-pulse"></div>
                <span className="font-tech font-bold uppercase tracking-wider">RESULTS GUARANTEED</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalOfferSection;