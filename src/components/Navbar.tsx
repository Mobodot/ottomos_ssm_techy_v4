import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Process', href: '#process' },
    { name: 'Results', href: '#results' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Contact', href: '#contact' }
  ];

  // Custom Target Icon - Industrial 2D-3D Style
  const TargetIcon = () => (
    <div className="relative w-10 h-10">
      <div className="absolute inset-0 border-2 border-electric-500 bg-steel-900"></div>
      <div className="absolute inset-1 border border-coral-500 bg-steel-800"></div>
      <div className="absolute inset-3 bg-electric-400"></div>
      <div className="absolute top-0 left-1/2 w-px h-2 bg-coral-500 transform -translate-x-1/2"></div>
      <div className="absolute bottom-0 left-1/2 w-px h-2 bg-coral-500 transform -translate-x-1/2"></div>
      <div className="absolute left-0 top-1/2 w-2 h-px bg-coral-500 transform -translate-y-1/2"></div>
      <div className="absolute right-0 top-1/2 w-2 h-px bg-coral-500 transform -translate-y-1/2"></div>
    </div>
  );

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
      isScrolled 
        ? 'bg-steel-900/98 backdrop-blur-sm border-b-2 border-electric-500/30' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <TargetIcon />
            <span className="text-2xl font-tech font-black text-white tracking-wider">OTTOMOS</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-slate-300 hover:text-electric-400 transition-all duration-200 font-tech font-bold text-sm tracking-widest uppercase border-b-2 border-transparent hover:border-electric-400 pb-1"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-coral-500 hover:bg-coral-400 text-white font-tech font-bold px-8 py-3 transition-all duration-200 transform hover:scale-105 border-2 border-coral-500 hover:border-electric-400 uppercase tracking-wider">
              BOOK MORE MEETINGS
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-steel-900/98 backdrop-blur-sm border-t-2 border-electric-500/30">
            <div className="px-4 pt-4 pb-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-slate-300 hover:text-electric-400 transition-colors duration-200 font-tech font-bold uppercase tracking-widest border-l-2 border-transparent hover:border-electric-400"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button className="w-full mt-6 bg-coral-500 text-white font-tech font-bold px-8 py-4 uppercase tracking-wider border-2 border-coral-500">
                BOOK MORE MEETINGS
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;