import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-black text-zinc-600 dark:text-zinc-400 py-12 border-t border-zinc-100 dark:border-zinc-900 transition-colors duration-500">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex flex-col items-center md:items-start">
          <span className="text-2xl font-extrabold tracking-tighter text-zinc-900 dark:text-white">
            MBA <span className="text-brand-cyan">kapde wala</span>
          </span>
          <p className="text-sm mt-1">© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        <div className="flex gap-6">
           <a href="#" className="hover:text-brand-purple transition-colors"><Instagram /></a>
           <a href="#" className="hover:text-brand-cyan transition-colors"><Facebook /></a>
           <a href="#" className="hover:text-brand-amber transition-colors"><Twitter /></a>
        </div>

        <div className="text-sm text-center md:text-right">
          <p>Made for Rajnandgaon</p>
          <p className="text-xs opacity-50 mt-1">Designed with Style</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;