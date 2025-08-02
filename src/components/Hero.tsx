import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Custom Industrial Icons
  const ZapIcon = () => (
    <div className="relative w-6 h-6">
      <div className="absolute inset-0 bg-electric-400 clip-path-lightning"></div>
      <div className="absolute inset-1 bg-steel-900"></div>
    </div>
  );

  const TargetIcon = () => (
    <div className="relative w-8 h-8">
      <div className="absolute inset-0 border-2 border-electric-500 bg-steel-900"></div>
      <div className="absolute inset-1 border border-coral-500 bg-steel-800"></div>
      <div className="absolute inset-2 bg-electric-400"></div>
    </div>
  );

  const ArrowIcon = ({ className }: { className?: string }) => (
    <div className={`relative w-8 h-8 ${className}`}>
      <div className="absolute top-1/2 left-0 w-6 h-0.5 bg-current transform -translate-y-1/2"></div>
      <div className="absolute top-1/2 right-0 w-3 h-3 border-t-2 border-r-2 border-current transform -translate-y-1/2 rotate-45"></div>
    </div>
  );

  return (
    <section className="min-h-screen bg-gradient-to-br from-steel-900 via-steel-800 to-steel-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Industrial Laser Guides */}
        <div className="absolute top-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-coral-500 to-transparent opacity-40 animate-scan"></div>
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-electric-400 to-transparent opacity-30 animate-scan" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-3/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-coral-600 to-transparent opacity-35 animate-scan" style={{ animationDelay: '2s' }}></div>
        
        {/* Industrial Grid */}
        <div className="absolute inset-0 opacity-15">
          <div className="grid grid-cols-16 grid-rows-12 h-full w-full">
            {Array.from({ length: 96 }).map((_, i) => (
              <div key={i} className="border border-electric-500/30"></div>
            ))}
          </div>
        </div>

        {/* Industrial Targeting Elements */}
        <div className="absolute top-20 right-20 w-16 h-16 border-2 border-electric-400/40 animate-ping"></div>
        <div className="absolute top-40 left-16 w-12 h-12 border-2 border-coral-500/50 rotate-45 animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-20 h-20 border-4 border-electric-300/30 animate-bounce"></div>
        
        {/* Dynamic Mouse Follower */}
        <div 
          className="absolute w-3 h-3 bg-coral-500 opacity-80 pointer-events-none transition-all duration-100 ease-out"
          style={{
            left: mousePosition.x - 6,
            top: mousePosition.y - 6,
            boxShadow: '0 0 30px rgba(255, 127, 80, 0.8)'
          }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-8 pt-20">
        <div className="max-w-7xl mx-auto text-center">
          {/* Industrial Pain Point Indicator */}
          <div className="inline-flex items-center gap-3 bg-electric-500/20 border-2 border-electric-400/50 px-6 py-3 mb-12 animate-glitch">
            <div className="w-4 h-4 bg-electric-400"></div>
            <span className="text-electric-300 text-sm font-tech font-bold tracking-widest">PROBLEM IDENTIFIED</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-tech font-black text-white mb-8 leading-none tracking-tight">
            <span className="text-electric-400">OUTBOUND</span> That{' '}
            <span className="text-coral-400">SCALES</span>.
            <br />
            <span className="text-electric-400">MEETINGS</span> That{' '}
            <span className="relative">
              <span className="text-coral-400">CONVERT</span>
              <div className="absolute -bottom-1 left-0 right-0 h-1 bg-coral-500"></div>
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-slate-300 mb-16 max-w-5xl mx-auto leading-relaxed font-mono font-bold">
            Stop gambling on referrals, overpaying for SDRs, and getting burned by agencies. We build{' '}
            <span className="text-coral-400 font-black">scalable outbound systems</span> that have already generated{' '}
            <span className="text-electric-400 font-black">$2M+ in pipeline</span>—delivering qualified meetings, not excuses.
          </p>

          {/* CTA Button with Laser Effect */}
          <button
            className="group relative inline-flex items-center gap-4 bg-coral-500 hover:bg-coral-400 text-white font-tech font-black text-lg px-12 py-6 transition-all duration-200 transform hover:scale-105 border-2 border-coral-500 hover:border-electric-400 uppercase tracking-wider"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <TargetIcon />
            BOOK MORE MEETINGS
            <ArrowIcon 
              className={`transition-all duration-200 ${
                isHovered ? 'translate-x-3 text-electric-400' : ''
              }`} 
            />
            
            {/* Laser Effect */}
            {isHovered && (
              <div className="absolute -right-24 top-1/2 transform -translate-y-1/2">
                <div className="w-20 h-0.5 bg-gradient-to-r from-electric-400 to-transparent"></div>
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-electric-400 animate-ping"></div>
              </div>
            )}
          </button>

          {/* Trust Indicators */}
          <div className="mt-20 flex flex-col md:flex-row items-center justify-center gap-12 text-slate-400">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-electric-400 animate-pulse"></div>
              <span className="text-sm font-tech font-bold tracking-wider uppercase">$2M+ Pipeline Generated</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-coral-400 animate-pulse"></div>
              <span className="text-sm font-tech font-bold tracking-wider uppercase">Pain-Focused Targeting</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-electric-400 animate-pulse"></div>
              <span className="text-sm font-tech font-bold tracking-wider uppercase">Zero Ongoing Work</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Transition */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-slate-100 to-transparent"></div>
    </section>
  );
};

export default Hero;