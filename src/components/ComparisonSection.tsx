import React from 'react';
import { Check, X, AlertTriangle } from 'lucide-react';

const ComparisonSection = () => {
  const comparisonData = [
    {
      feature: 'TARGETING',
      us: 'PAIN-BASED TARGETING',
      agencies: 'JOB TITLES & PERSONAS',
      sdrs: 'BASIC DEMOGRAPHICS',
      diy: 'RANDOM GUESSING'
    },
    {
      feature: 'TIME TO RESULTS',
      us: '21-30 DAYS',
      agencies: '2-4 WEEKS',
      sdrs: '3 MONTHS',
      diy: '3-6 MONTHS'
    },
    {
      feature: 'PRICING',
      us: 'BASED ON RESULTS',
      agencies: '$5K+ MEDIA BUYING',
      sdrs: '+$8,000/MONTH',
      diy: '$3K TOOLS + TIME'
    },
    {
      feature: 'FAILURE RATE',
      us: 'UNLIKELY',
      agencies: 'HIGH',
      sdrs: 'MEDIUM',
      diy: 'VERY HIGH'
    },
    {
      feature: 'GUARANTEE',
      us: 'RESULTS GUARANTEED',
      agencies: 'NONE',
      sdrs: 'NONE',
      diy: 'NONE'
    }
  ];

  // Industrial Icons
  const WarningIcon = () => (
    <div className="relative w-4 h-4">
      <div className="absolute inset-0 border-2 border-coral-500 bg-steel-900 clip-path-triangle"></div>
      <div className="absolute top-1 left-1/2 w-0.5 h-2 bg-coral-500 transform -translate-x-1/2"></div>
      <div className="absolute bottom-1 left-1/2 w-1 h-1 bg-coral-500 transform -translate-x-1/2"></div>
    </div>
  );

  const CheckIcon = () => (
    <div className="relative w-6 h-6">
      <div className="absolute inset-0 bg-electric-600 border-2 border-steel-900"></div>
      <div className="absolute top-1 left-1 w-1 h-2 bg-steel-900 transform rotate-45"></div>
      <div className="absolute top-2 left-2 w-1 h-3 bg-steel-900 transform rotate-45"></div>
    </div>
  );

  const XIcon = () => (
    <div className="relative w-6 h-6">
      <div className="absolute inset-0 bg-coral-500 border-2 border-steel-900"></div>
      <div className="absolute top-1 left-1 right-1 bottom-1 bg-steel-900"></div>
      <div className="absolute top-2 left-2 right-2 h-0.5 bg-coral-500 transform rotate-45"></div>
      <div className="absolute top-2 left-2 right-2 h-0.5 bg-coral-500 transform -rotate-45"></div>
    </div>
  );

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Industrial Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-40 h-40 border-4 border-coral-400 rotate-12"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 border-4 border-electric-400"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-coral-500/20 border-4 border-coral-400/50 px-6 py-3 mb-8">
            <WarningIcon />
            <span className="text-coral-600 text-sm font-tech font-black tracking-widest uppercase">THE ULTIMATUM</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-tech font-black text-steel-800 mb-8 uppercase tracking-tight">
            Stop <span className="text-coral-500">GAMBLING</span>.{' '}
            Start <span className="text-electric-600">GROWING</span>.
          </h2>
        </div>

        {/* Comparison Table */}
        <div className="bg-white border-4 border-slate-200 shadow-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-50 border-b-4 border-slate-200">
                  <th className="text-left p-6 font-tech font-black text-steel-800 text-base uppercase tracking-wider">FEATURE</th>
                  <th className="text-center p-6 font-tech font-black text-electric-600 text-base bg-electric-50 border-x-4 border-electric-200 uppercase tracking-wider">
                    OTTOMOS
                  </th>
                  <th className="text-center p-6 font-tech font-black text-steel-600 text-base uppercase tracking-wider">MARKETING AGENCY</th>
                  <th className="text-center p-6 font-tech font-black text-steel-600 text-base uppercase tracking-wider">HIRE SDRS</th>
                  <th className="text-center p-6 font-tech font-black text-steel-600 text-base uppercase tracking-wider">DIY</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className="border-b-2 border-slate-100 hover:bg-slate-50/50 transition-colors duration-200">
                    <td className="p-6 font-tech font-black text-steel-800 uppercase tracking-wide">{row.feature}</td>
                    <td className="p-6 text-center bg-electric-50 border-x-4 border-electric-200 font-tech font-black text-electric-700 uppercase tracking-wide">
                      {row.us}
                    </td>
                    <td className="p-6 text-center text-steel-600 font-tech font-bold uppercase tracking-wide">{row.agencies}</td>
                    <td className="p-6 text-center text-steel-600 font-tech font-bold uppercase tracking-wide">{row.sdrs}</td>
                    <td className="p-6 text-center text-steel-600 font-tech font-bold uppercase tracking-wide">{row.diy}</td>
                  </tr>
                ))}
                
                {/* Guarantee Row with Icons */}
                <tr className="border-b-2 border-slate-100 bg-slate-50">
                  <td className="p-6 font-tech font-black text-steel-800 uppercase tracking-wide">RESULTS GUARANTEE</td>
                  <td className="p-6 text-center bg-electric-50 border-x-4 border-electric-200">
                    <div className="flex items-center justify-center">
                      <CheckIcon />
                    </div>
                  </td>
                  <td className="p-6 text-center">
                    <div className="flex items-center justify-center">
                      <XIcon />
                    </div>
                  </td>
                  <td className="p-6 text-center">
                    <div className="flex items-center justify-center">
                      <XIcon />
                    </div>
                  </td>
                  <td className="p-6 text-center">
                    <div className="flex items-center justify-center">
                      <XIcon />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-electric-500/20 to-coral-500/20 border-4 border-electric-400/50 p-8">
            <h3 className="text-xl font-tech font-black text-steel-800 mb-4 uppercase tracking-wider">
              THE CHOICE IS CLEAR
            </h3>
            <p className="text-base text-steel-600 mb-6 font-mono font-bold">
              While others gamble with your budget, we guarantee results or you don't pay.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2 text-electric-600">
                <CheckIcon />
                <span className="font-tech font-black uppercase tracking-wide">90-DAY PIPELINE GUARANTEE</span>
              </div>
              <div className="flex items-center gap-2 text-coral-500">
                <CheckIcon />
                <span className="font-tech font-black uppercase tracking-wide">NO LONG-TERM CONTRACTS</span>
              </div>
              <div className="flex items-center gap-2 text-electric-600">
                <CheckIcon />
                <span className="font-tech font-black uppercase tracking-wide">7-DAY SETUP</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;