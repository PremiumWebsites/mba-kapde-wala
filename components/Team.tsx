import React from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

const Team: React.FC = () => {
  return (
    <section id="team" className="py-24 bg-zinc-50 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-4"
          >
             <Users className="text-brand-purple w-6 h-6" />
             <span className="text-brand-purple font-bold uppercase tracking-widest text-sm">The Squad</span>
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-white max-w-2xl mb-4"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Meet the faces behind the <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple">Style.</span>
          </motion.h2>
          
          {/* Animated Underline */}
          <motion.div 
            className="h-1.5 bg-gradient-to-r from-brand-cyan to-brand-purple rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 140 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </div>

        <motion.div
          className="relative w-full max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl shadow-zinc-300 dark:shadow-black/50"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Border Gradient */}
          <div className="absolute inset-0 p-[2px] rounded-3xl bg-gradient-to-br from-brand-cyan via-brand-purple to-brand-amber opacity-50 z-0 pointer-events-none"></div>
          
          <div className="relative z-10 bg-zinc-200 dark:bg-zinc-800 rounded-[22px] overflow-hidden aspect-[16/9] group">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
            
            {/* 
              PLACEHOLDER IMAGE: 
              Replace the src below with your actual team photo.
              Example: src="team-photo.jpg" 
            */}
            <img 
              src="https://picsum.photos/1200/800?grayscale" 
              alt="MBA Kapde Wala Team" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-20">
               <p className="text-white font-hindi text-xl font-bold tracking-wide">MBA कपड़े वाला परिवार</p>
               <p className="text-zinc-300 text-sm">Rajnandgaon</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Team;