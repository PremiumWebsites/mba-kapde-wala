import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import { ThemeContextType } from '../types';

interface NavbarProps {
  themeContext: ThemeContextType;
}

const Navbar: React.FC<NavbarProps> = ({ themeContext }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Collections', href: '#categories' },
    { name: 'Why Us', href: '#features' },
    { name: 'Contact', href: '#location' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 py-3 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex flex-col items-start group">
          <span className="text-2xl font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-brand-cyan to-brand-purple group-hover:to-brand-cyan transition-all duration-500">
            MBA
          </span>
          <span className="text-xs font-bold font-hindi tracking-wide text-zinc-800 dark:text-zinc-200 -mt-1 group-hover:text-brand-cyan transition-colors">
            कपड़े वाला
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 hover:text-brand-purple dark:hover:text-brand-cyan transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-cyan transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          
          <div className="h-6 w-px bg-zinc-300 dark:bg-zinc-700 mx-2" />
          
          <ThemeToggle {...themeContext} />
          
          <a
            href="tel:+911234567890" 
            className="flex items-center gap-2 bg-zinc-900 dark:bg-white text-white dark:text-black px-4 py-2 rounded-full text-xs font-bold uppercase hover:scale-105 transition-transform"
          >
            <Phone size={14} />
            <span>Call Now</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-4">
          <ThemeToggle {...themeContext} />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-zinc-800 dark:text-zinc-100 p-1"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-bold text-zinc-800 dark:text-zinc-200 py-2 border-b border-zinc-100 dark:border-zinc-900 last:border-0"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex gap-3 mt-2">
                 <a
                  href="tel:+911234567890" 
                  className="flex-1 flex justify-center items-center gap-2 bg-brand-cyan text-white py-3 rounded-lg font-bold"
                >
                  <Phone size={18} /> Call
                </a>
                 <a
                  href="https://goo.gl/maps/xyz" 
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex justify-center items-center gap-2 bg-zinc-800 text-white py-3 rounded-lg font-bold"
                >
                  <MapPin size={18} /> Map
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;