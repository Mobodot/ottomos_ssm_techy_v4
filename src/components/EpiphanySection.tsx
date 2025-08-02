import React from 'react';
import { Lightbulb, Target, Zap, Eye } from 'lucide-react';

const EpiphanySection = () => {
  // Industrial Icons
  const LightIcon = () => (
    <div className="relative w-12 h-12">
      <div className="absolute inset-2 bg-electric-400 border-2 border-steel-900"></div>
      <div className="absolute top-0 left-1/2 w-1 h-4 bg-electric-400 transform -translate-x-1/2"></div>
      <div className="absolute bottom-0 left-1/2 w-1 h-4 bg-electric-400 transform -translate-x-1/2"></div>
      <div className="absolute left-0 top-1/2 w-4 h-1 bg-electric-400 transform -translate-y-1/2"></div>
      <div className="absolute right-0 top-1/2 w-4 h-1 bg-electric-400 transform -translate-y-1/2"></div>
    </div>
  );

  const TargetIcon = () => (
    <div className="relative w-12 h-12">
      <div className="absolute inset-0 border-4 border-electric-500 bg-steel-900"></div>
      <div className="absolute inset-2 border-2 border-coral-500 bg-steel-800"></div>
      <div className="absolute inset-4 bg-electric-400"></div>
      <div className="absolute top-0 left-1/2 w-1 h-3 bg-coral-500 transform -translate-x-1/2"></div>
      <div className="absolute bottom-0 left-1/2 w-1 h-3 bg-coral-500 transform -translate-x-1/2"></div>
      <div className="absolute left-0 top-1/2 w-3 h-1 bg-coral-500 transform -translate-y-1/2"></div>
      <div className="absolute right-0 top-1/2 w-3 h-1 bg-coral-500 transform -translate-y-1/2"></div>
    </div>
  );

  const ZapIcon = () => (
    <div className="relative w-12 h-12">
      <div className="absolute inset-0 bg-coral-500 clip-path-lightning"></div>
      <div className="absolute inset-2 bg-steel-900"></div>
    </div>
  );

  const EyeIcon = () => (
    <div className="relative w-12 h-12">
      <div className="absolute inset-0 bg-steel-900 border-4 border-electric-500"></div>
      <div className="absolute inset-2 bg-electric-400 border-2 border-steel-900"></div>
      <div className="absolute inset-4 bg-steel-900"></div>
    </div>
  );

  return (
    <section className="py-20 bg-gradient-to-b from-slate-300 to-slate-100 relative overflow-hidden">
      {/* Industrial Laser Piercing Effect */}
      <div className="absolute inset-0">
        {/* Steel Glass Shards */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-steel-800/30 transform rotate-12 opacity-40"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-steel-800/35 transform -rotate-45 opacity-35"></div>
        
        {/* Coral Laser Beams */}
        <div className="absolute top-1/3 left-0 w-full h-1 bg-gradient-to-r from-transparent via-coral-500 to-electric-400 opacity-70 animate-scan"></div>
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-coral-400 via-coral-500 to-electric-500 opacity-60 animate-scan" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-2/3 left-0 w-full h-1 bg-gradient-to-r from-transparent via-coral-600 to-electric-300 opacity-50 animate-scan" style={{ animationDelay: '1s' }}></div>
        
        {/* Electric Light Reveals */}
        <div className="absolute top-1/4 right-1/4 w-24 h-24 bg-electric-400/30 blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/3 w-32 h-32 bg-electric-500/25 blur-2xl animate-pulse" style={{ animationDelay: '0.7s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Breakthrough Indicator */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 bg-electric-500/20 border-4 border-electric-400/50 px-6 py-3 animate-glitch">
            <LightIcon />
            <span className="text-electric-600 text-sm font-tech font-black tracking-widest uppercase">BREAKTHROUGH MOMENT</span>
          </div>
        </div>

        <h2 className="text-3xl md:text-5xl font-tech font-black text-center text-steel-800 mb-8 uppercase tracking-tight">
          How <span className="text-electric-600">WE</span> Do It
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* AI-Personalized Messaging */}
          <div className="bg-white/90 backdrop-blur-sm p-8 border-4 border-electric-200/50 shadow-xl relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-electric-500/30 to-transparent"></div>
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-coral-400 animate-ping"></div>
            
            <TargetIcon />
            <h3 className="text-lg font-tech font-black text-steel-800 mb-4 uppercase tracking-wide">
              AI-PERSONALIZED <span className="text-coral-500">MESSAGING</span>
            </h3>
            <p className="text-steel-600 leading-relaxed font-mono">
              We speak directly to the business problems your prospects face, making them more relevant and timely.
            </p>
            
            {/* Laser connector */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gradient-to-b from-coral-400 to-transparent opacity-70"></div>
          </div>

          {/* Better Conversion Rates */}
          <div className="bg-white/90 backdrop-blur-sm p-8 border-4 border-electric-200/50 shadow-xl relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-coral-500/30 to-transparent"></div>
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-electric-400 animate-ping" style={{ animationDelay: '0.3s' }}></div>
            
            <ZapIcon />
            <h3 className="text-lg font-tech font-black text-steel-800 mb-4 uppercase tracking-wide">
              BETTER <span className="text-electric-600">CONVERSION</span> RATES
            </h3>
            <p className="text-steel-600 leading-relaxed font-mono">
              Prospects are more likely to respond when they see you providing solutions to their problems.
            </p>
            
            {/* Laser connector */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gradient-to-b from-electric-400 to-transparent opacity-70"></div>
          </div>

          {/* Built-for-you Systems */}
          <div className="bg-white/90 backdrop-blur-sm p-8 border-4 border-coral-200/50 shadow-xl relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-electric-500/30 to-transparent"></div>
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-coral-400 animate-ping" style={{ animationDelay: '0.6s' }}></div>
            
            <EyeIcon />
            <h3 className="text-lg font-tech font-black text-steel-800 mb-4 uppercase tracking-wide">
              BUILT-FOR-YOU <span className="text-coral-500">SYSTEMS</span>
            </h3>
            <p className="text-steel-600 leading-relaxed font-mono">
              We do the entire setup. From lead research to sequence creation, CRM integration to deliverability optimization.
            </p>
          </div>
        </div>

        {/* Bottom CTA Teaser */}
        <div className="mt-16 text-center">
          <p className="text-base text-steel-600 mb-4 font-tech font-bold uppercase tracking-wider">
            FULLY-MANAGED, NO IN-HOUSE TEAM REQUIRED
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-coral-500 to-electric-400 mx-auto animate-pulse"></div>
        </div>
      </div>

      {/* Transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default EpiphanySection;