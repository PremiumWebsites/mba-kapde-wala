import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
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
      className="group relative h-[400px] overflow-hidden rounded-2xl cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="absolute inset-0 bg-zinc-800 animate-pulse" /> {/* Placeholder while loading */}
      <img
        src={image}
        alt={title}
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 transition-opacity duration-300" />
      
      <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-2xl font-bold text-white mb-1 font-sans">{title}</h3>
        <div className="flex items-center gap-2 text-brand-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0 delay-75">
          <span className="text-sm font-bold uppercase tracking-wider">Explore</span>
          <ArrowUpRight size={18} />
        </div>
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
            <h2 className="text-4xl md:text-6xl font-black text-zinc-900 dark:text-white mb-2">
              Curated <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-cyan">Collections</span>
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-md">
              Handpicked styles for the bold and the classy. Whatever your vibe, we have the fit.
            </p>
          </div>
          <button className="hidden md:flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors font-bold text-sm uppercase tracking-wider">
            View All Items <ArrowUpRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat, idx) => (
            <CategoryCard key={idx} {...cat} />
          ))}
        </div>
        
        <div className="mt-8 flex md:hidden justify-center">
             <button className="flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors font-bold text-sm uppercase tracking-wider">
            View All Items <ArrowUpRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Categories;