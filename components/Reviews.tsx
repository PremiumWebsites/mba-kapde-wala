import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Reviews: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-zinc-950 border-y border-zinc-100 dark:border-zinc-900">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="flex justify-center gap-1 mb-6 text-brand-amber">
             {[...Array(5)].map((_, i) => (
                 <Star key={i} fill={i < 4 ? "currentColor" : i === 4 ? "none" : "currentColor"} className={i===4 && "fill-brand-amber/30"} size={32} />
             ))}
          </div>
          
          <Quote size={48} className="mx-auto text-zinc-200 dark:text-zinc-800 mb-6" />
          
          <h3 className="text-2xl md:text-4xl font-bold text-zinc-800 dark:text-zinc-200 mb-8 italic leading-snug">
            "Best collection in Rajnandgaon! Finally a store that understands modern fashion without overcharging. 10/10 vibe."
          </h3>
          
          <div className="flex flex-col items-center">
             <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-brand-cyan to-brand-purple p-1 mb-2">
                <img src="https://picsum.photos/100/100?random=50" alt="Customer" className="w-full h-full rounded-full object-cover border-2 border-white dark:border-black" />
             </div>
             <p className="font-bold text-lg text-zinc-900 dark:text-white">Rahul Verma</p>
             <p className="text-sm text-zinc-500">Local Guide • 4.3 ⭐ Google Rating</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;