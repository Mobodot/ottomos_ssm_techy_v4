import React from 'react';
import { X, AlertTriangle, TrendingDown } from 'lucide-react';

const AgonySection = () => {
  // Custom Industrial Icons
  const XIcon = () => (
    <div className="relative w-12 h-12">
      <div className="absolute inset-0 bg-coral-500"></div>
      <div className="absolute top-1/2 left-2 right-2 h-1 bg-steel-900 transform -rotate-45"></div>
      <div className="absolute top-1/2 left-2 right-2 h-1 bg-steel-900 transform rotate-45"></div>
    </div>
  );

  const WarningIcon = () => (
    <div className="relative w-12 h-12">
      <div className="absolute inset-0 border-4 border-coral-500 bg-steel-900 clip-path-triangle"></div>
      <div className="absolute top-3 left-1/2 w-1 h-4 bg-coral-500 transform -translate-x-1/2"></div>
      <div className="absolute bottom-2 left-1/2 w-2 h-2 bg-coral-500 transform -translate-x-1/2"></div>
    </div>
  );

  const TrendIcon = () => (
    <div className="relative w-12 h-12">
      <div className="absolute inset-0 bg-steel-900 border-2 border-coral-500"></div>
      <div className="absolute top-8 left-2 w-2 h-2 bg-coral-500"></div>
      <div className="absolute top-6 left-4 w-2 h-4 bg-coral-500"></div>
      <div className="absolute top-4 left-6 w-2 h-6 bg-coral-500"></div>
      <div className="absolute top-2 left-8 w-2 h-8 bg-coral-500"></div>
    </div>
  );

  return (
    <section className="py-20 bg-gradient-to-b from-slate-100 to-slate-200 relative overflow-hidden">
      {/* Industrial Shattered Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-coral-400 rotate-12 opacity-30"></div>
        <div className="absolute top-20 right-20 w-24 h-24 border-4 border-coral-500 -rotate-45 opacity-40"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 border-4 border-coral-300 rotate-45 opacity-25"></div>
        
        {/* Industrial X Marks */}
        <div className="absolute top-1/3 left-1/3 opacity-10">
          <XIcon />
        </div>
        <div className="absolute top-1/2 right-1/3 opacity-15">
          <div className="w-8 h-8 bg-coral-400"></div>
        </div>
        <div className="absolute bottom-1/3 left-1/2 opacity-20">
          <div className="w-16 h-16 border-4 border-coral-600"></div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Industrial Pain Indicator */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 bg-coral-500/20 border-4 border-coral-400/50 px-6 py-3 animate-glitch">
            <WarningIcon />
            <span className="text-coral-600 text-sm font-tech font-black tracking-widest uppercase">THE PAINFUL TRUTH</span>
          </div>
        </div>

        <h2 className="text-3xl md:text-5xl font-tech font-black text-center text-steel-800 mb-16 tracking-tight uppercase">
          The Truth About Most{' '}
          <span className="relative">
            <span className="text-coral-600">LEAD GEN AGENCIES</span>
            <div className="absolute -bottom-2 left-0 right-0 h-2 bg-coral-500 opacity-60"></div>
          </span>
        </h2>

        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-steel-700 mb-12 text-center leading-relaxed font-mono font-bold uppercase tracking-wider">
            Most agencies still target by persona, job title, or industry—spraying messages and hoping something sticks. But today's buyers are overwhelmed. Their inboxes are flooded with cold emails that all sound the same.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Generic Outreach */}
            <div className="bg-white/90 backdrop-blur-sm p-8 border-4 border-coral-200/50 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-coral-500/20"></div>
              <TrendIcon />
              <h3 className="text-lg font-tech font-black text-steel-800 mb-3 uppercase tracking-wide">GENERIC OUTREACH</h3>
              <p className="text-steel-600 font-mono">
                Messaging is too broad and fails to resonate with prospect's unique pain points.
              </p>
            </div>

            {/* Missed Opportunities */}
            <div className="bg-white/90 backdrop-blur-sm p-8 border-4 border-coral-200/50 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-coral-500/20"></div>
              <WarningIcon />
              <h3 className="text-lg font-tech font-black text-steel-800 mb-3 uppercase tracking-wide">MISSED OPPORTUNITIES</h3>
              <p className="text-steel-600 font-mono">
                You might overlook potential clients who need your help but don't fit the usual criteria.
              </p>
            </div>

            {/* Wasted Resources */}
            <div className="bg-white/90 backdrop-blur-sm p-8 border-4 border-coral-200/50 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-coral-500/20"></div>
              <XIcon />
              <h3 className="text-lg font-tech font-black text-steel-800 mb-3 uppercase tracking-wide">WASTED RESOURCES</h3>
              <p className="text-steel-600 font-mono">
                Time and effort are spent on leads that aren't interested, leading to you losing money and time.
              </p>
            </div>
          </div>

          {/* Result Statement */}
          <div className="bg-gradient-to-r from-coral-500/20 to-coral-600/20 border-4 border-coral-400/50 p-8 text-center">
            <h3 className="text-xl font-tech font-black text-coral-700 mb-4 uppercase tracking-wider">THE DIFFERENCE:</h3>
            <p className="text-lg text-steel-700 font-tech font-bold uppercase tracking-wide">
              WE TARGET REAL BUSINESS PAIN, NOT VAGUE ROLES.
            </p>
          </div>
        </div>
      </div>

      {/* Transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-300 to-transparent"></div>
    </section>
  );
};

export default AgonySection;