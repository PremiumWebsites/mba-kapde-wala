import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Abstract Shapes */}
      <div className="absolute inset-0 w-full h-full bg-brand-light dark:bg-brand-dark transition-colors duration-500">
        <div className="absolute top-0 -right-40 w-96 h-96 bg-brand-purple/40 dark:bg-brand-purple/30 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen animate-pulse" />
        <div className="absolute bottom-0 -left-40 w-96 h-96 bg-brand-cyan/40 dark:bg-brand-cyan/30 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[500px] bg-brand-purple/10 dark:bg-brand-cyan/10 blur-[120px] rounded-full pointer-events-none" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 dark:opacity-40 mix-blend-overlay pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
        
        {/* Animated Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-200/50 dark:bg-zinc-800/50 backdrop-blur-sm border border-zinc-300 dark:border-zinc-700 mb-8"
        >
          <MapPin size={14} className="text-brand-cyan" />
          <span className="text-xs font-bold uppercase tracking-widest text-zinc-600 dark:text-zinc-300">
            Rajnandgaon's Finest
          </span>
        </motion.div>

        {/* Main Title - Hinglish */}
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
           className="mb-4 flex flex-col items-center"
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-zinc-900 dark:text-white leading-[0.9]">
            <span className="block bg-clip-text text-transparent bg-gradient-to-br from-zinc-800 to-zinc-500 dark:from-white dark:to-zinc-400">
              MBA
            </span>
          </h1>
          
          {/* Enhanced 'Kapde Wala' Text for Clarity */}
          <div className="relative mt-2 md:mt-4">
             <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-hindi text-brand-cyan tracking-wide drop-shadow-2xl filter" style={{ textShadow: '0px 0px 20px rgba(6, 182, 212, 0.3)' }}>
                कपड़े वाला
             </h1>
             {/* Gradient Overlay for style */}
             <h1 className="absolute inset-0 text-5xl md:text-7xl lg:text-8xl font-black font-hindi text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-white to-brand-cyan bg-[200%_auto] animate-text-shimmer opacity-70" aria-hidden="true">
                कपड़े वाला
             </h1>
          </div>

          {/* Subtitle location */}
          <p className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-cyan to-brand-purple mt-6 tracking-widest uppercase filter drop-shadow-sm">
            Rajnandgaon
          </p>
        </motion.div>

        {/* Subtitle */}
        <motion.p 
          className="text-lg md:text-2xl font-light text-zinc-800 dark:text-zinc-300 max-w-2xl mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          Style that speaks before you do. <br className="hidden md:block" />
          <span className="font-semibold text-brand-purple">Premium Streetwear</span> & <span className="font-semibold text-brand-cyan">Ethnic Vibes</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col md:flex-row gap-4 w-full md:w-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <a 
            href="#categories" 
            className="group relative px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-black font-bold rounded-lg overflow-hidden transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-3 shadow-lg shadow-brand-purple/20"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-brand-cyan to-brand-purple opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            <span>View Collection</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a 
            href="https://maps.app.goo.gl/6D51E3hhZgWo1EiB8" 
            target="_blank" 
            rel="noreferrer"
            className="px-8 py-4 bg-transparent border-2 border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white font-bold rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all hover:border-zinc-400 dark:hover:border-zinc-600 flex items-center justify-center"
          >
            Get Directions
          </a>
        </motion.div>

        {/* Floating Abstract Element */}
        <motion.div
          className="absolute -z-10 w-full top-1/2 left-0 h-px bg-gradient-to-r from-transparent via-brand-cyan to-transparent opacity-50"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 0.5 }}
          transition={{ duration: 1.5, delay: 1 }}
        />
      </div>
    </section>
  );
};

export default Hero;