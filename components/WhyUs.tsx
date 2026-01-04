import React from 'react';
import { motion } from 'framer-motion';
import { Smile, Tag, Star, Clock } from 'lucide-react';
import { FeatureProps } from '../types';

const features: FeatureProps[] = [
  {
    icon: <Tag className="w-8 h-8" />,
    title: "Honest Pricing",
    description: "Premium fashion doesn't have to break the bank. We offer city trends at local prices.",
    delay: 0
  },
  {
    icon: <Star className="w-8 h-8" />,
    title: "Quality First",
    description: "We hand-check every fabric. No cheap knock-offs, only durable, comfortable clothing.",
    delay: 0.1
  },
  {
    icon: <Smile className="w-8 h-8" />,
    title: "Friendly Vibes",
    description: "Shopping should be fun. Our team is here to help you style, not just sell.",
    delay: 0.2
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Open Late",
    description: "We are open until 10 PM every day to fit your busy MBA or work schedule.",
    delay: 0.3
  }
];

const WhyUs: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-brand-light dark:bg-brand-dark relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-5xl font-black text-zinc-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Why <span className="text-brand-cyan">MBA</span>?
          </motion.h2>
          <motion.div 
            className="h-1 w-20 bg-brand-purple mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-8 rounded-3xl bg-white dark:bg-zinc-900 shadow-xl shadow-zinc-200/50 dark:shadow-black/50 border border-transparent hover:border-brand-purple/30 transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: feature.delay, duration: 0.5 }}
              whileHover={{ y: -10 }}
            >
              <div className="w-14 h-14 rounded-2xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-900 dark:text-white group-hover:bg-brand-purple group-hover:text-white transition-colors duration-300 mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;