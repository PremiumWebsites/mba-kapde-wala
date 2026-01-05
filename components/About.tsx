import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, TrendingUp, ShieldCheck } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-zinc-950 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <motion.span 
                className="h-px bg-brand-purple"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
              <span className="text-brand-purple font-bold uppercase tracking-widest text-sm">Who We Are</span>
            </div>
            
            <div className="mb-8 inline-block">
              <h2 className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-white leading-tight">
                More than a store.<br />
                <span className="text-zinc-500 dark:text-zinc-400">We are a lifestyle.</span>
              </h2>
              {/* Animated Underline */}
              <motion.div 
                className="h-1.5 bg-gradient-to-r from-brand-purple to-brand-cyan rounded-full mt-2"
                initial={{ width: 0 }}
                whileInView={{ width: '60%' }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "circOut" }}
              />
            </div>
            
            <div className="space-y-6 text-lg text-zinc-600 dark:text-zinc-300">
              <p>
                Welcome to <strong className="text-brand-cyan">MBA कपड़े वाला</strong> (Rajnandgaon). Located in the heart of Rajnandgaon, we bring the vibe of metropolitan fashion to your local streets.
              </p>
              
              <div className="p-5 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border-l-4 border-brand-purple shadow-sm">
                 <p className="text-base text-zinc-800 dark:text-zinc-200 font-medium">
                    This store operates as an <span className="text-brand-purple">Authorized Franchisee</span> of <strong>MBA Kapdewala Store</strong>.
                 </p>
                 <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2">
                    Clothing brand • 150+ stores across India • Head Office in Ahmedabad, India.
                 </p>
              </div>

              <p>
                "MBA" stands for our commitment to <span className="italic font-serif text-brand-purple">Modern, Bold, and Authentic</span> fashion. Whether you need a sharp outfit for a meeting or a funky fit for a party, we have curated collections that speak your language.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
              {[
                { icon: <TrendingUp />, label: "Latest Trends" },
                { icon: <ShieldCheck />, label: "Premium Fabric" },
                { icon: <ShoppingBag />, label: "Affordable Luxury" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex flex-col items-center p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 hover:border-brand-cyan/30 transition-colors"
                  whileHover={{ y: -5 }}
                >
                  <div className="text-brand-cyan mb-2">{item.icon}</div>
                  <span className="font-bold text-sm text-zinc-800 dark:text-zinc-200">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image/Visual Content */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-brand-purple/20">
              <img 
                src="https://picsum.photos/800/1000?random=10" 
                alt="Store interior fashion" 
                className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
                <p className="text-white text-xl font-hindi font-bold">"स्टाइल वही जो दुनिया देखे"</p>
                <p className="text-zinc-400 text-sm mt-1">Founders of MBA Kapde Wala</p>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-cyan/20 rounded-full blur-3xl -z-0"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-purple/20 rounded-full blur-3xl -z-0"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;