import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AgonySection from './components/AgonySection';
import EpiphanySection from './components/EpiphanySection';
import ProcessSection from './components/ProcessSection';
import ProofSection from './components/ProofSection';
import ComparisonSection from './components/ComparisonSection';
import FAQSection from './components/FAQSection';
import FinalOfferSection from './components/FinalOfferSection';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <AgonySection />
      <EpiphanySection />
      <ProcessSection />
      <ProofSection />
      <ComparisonSection />
      <FAQSection />
      <FinalOfferSection />
    </div>
  );
}

export default App;