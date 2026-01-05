import React from 'react';
import { motion } from 'framer-motion';
import { CategoryCardProps } from '../types';

const categories: CategoryCardProps[] = [
  { title: "Men's Streetwear", image: "https://picsum.photos/600/800?random=1", delay: 0 },
  { title: "Women's Collection", image: "https://picsum.photos/600/800?random=2", delay: 0.1 },
  { title: "Festive & Ethnic", image: "https://picsum.photos/600/800?random=3", delay: 0.2 },
  { title: "Accessories & Vibes", image: "https://picsum.photos/600/800?random=4", delay: 0.3 },
];

const CategoryCard: React.FC<CategoryCardProps> = ({ title, image, delay }) => {
  return (
    <motion.div
      className="group relative h-[400px] overflow-hidden rounded-2xl cursor-pointer bg-zinc-200 dark:bg-zinc-800"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5 }}
    >
      <div className="absolute inset-0 bg-zinc-800/20 dark:bg-zinc-800/50" /> {/* Static placeholder */}
      <img
        src={image}
        alt={title}
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        loading="lazy"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />
      
      <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out">
        <h3 className="text-2xl font-bold text-white mb-1 font-sans tracking-tight">{title}</h3>
        <div className="h-1 w-0 bg-brand-cyan group-hover:w-12 transition-all duration-500 ease-out mt-2" />
      </div>
    </motion.div>
  );
};

const Categories: React.FC = () => {
  return (
    <section id="categories" className="py-24 bg-zinc-50 dark:bg-zinc-900 transition-colors duration-500">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl md:text-6xl font-black text-zinc-900 dark:text-white mb-2 relative inline-block">
              Curated <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-cyan">Collections</span>
              <motion.div 
                className="absolute -bottom-2 left-0 h-2 bg-brand-cyan/30 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-md mt-4">
              Handpicked styles for the bold and the classy. Whatever your vibe, we have the fit.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat, idx) => (
            <CategoryCard key={idx} {...cat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;