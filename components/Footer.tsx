import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-black text-zinc-600 dark:text-zinc-400 py-12 border-t border-zinc-100 dark:border-zinc-900 transition-colors duration-500">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex flex-col items-center md:items-start">
          <span className="text-2xl font-extrabold tracking-tighter text-zinc-900 dark:text-white leading-tight">
            MBA <span className="text-brand-cyan">kapde wala</span>
          </span>
          <span className="text-[0.6rem] font-bold text-zinc-500 uppercase tracking-widest mt-1">Rajnandgaon Branch</span>
          <p className="text-sm mt-4">© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        <div className="flex gap-6">
           <a href="https://www.instagram.com/mbakapdewala_rajnandgaon/" target="_blank" rel="noreferrer" className="hover:text-brand-purple transition-colors"><Instagram /></a>
           <a href="#" className="hover:text-brand-cyan transition-colors"><Facebook /></a>
           <a href="#" className="hover:text-brand-amber transition-colors"><Twitter /></a>
        </div>

        <div className="flex flex-col items-center md:items-end">
          <motion.div 
            className="flex items-center gap-4 px-6 py-3 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md hover:shadow-brand-cyan/20 hover:border-brand-cyan/50 transition-all duration-300 group cursor-pointer"
            whileHover={{ scale: 1.05, y: -2 }}
          >
            <div className="flex flex-col items-start">
                <span className="text-[10px] uppercase tracking-wider font-bold text-zinc-400">Developed by</span>
                <a 
                  href="https://helptool.github.io/Aryaman-Gupta/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-lg font-black text-zinc-900 dark:text-white group-hover:text-brand-cyan transition-colors leading-none"
                >
                  Aryaman V. Gupta
                </a>
            </div>
            
            <div className="w-px h-8 bg-zinc-200 dark:bg-zinc-700 mx-1"></div>
            
            <a 
              href="https://www.instagram.com/avgec/" 
              target="_blank" 
              rel="noreferrer"
              className="text-zinc-500 hover:text-[#E1306C] transition-colors p-1"
              aria-label="Developer Instagram"
            >
              <motion.div
                whileHover={{ rotate: 15, scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Instagram size={24} strokeWidth={2.5} />
              </motion.div>
            </a>
          </motion.div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;