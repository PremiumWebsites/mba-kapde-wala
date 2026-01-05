import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';

const Location: React.FC = () => {
  return (
    <section id="location" className="py-24 bg-zinc-50 dark:bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 rounded-3xl overflow-hidden bg-white dark:bg-zinc-950 shadow-2xl shadow-zinc-200/50 dark:shadow-black/50">
          
          {/* Contact Info */}
          <motion.div 
            className="p-8 md:p-12 flex flex-col justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-brand-purple font-bold uppercase tracking-widest text-sm mb-2">Visit Us</span>
            <h2 className="text-4xl font-black text-zinc-900 dark:text-white mb-8">Let's Get You Styled</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-brand-light dark:bg-zinc-800 text-brand-cyan">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 dark:text-white mb-1">Store Location</h4>
                  <p className="text-zinc-600 dark:text-zinc-400">Gurudwara Road, Manav Mandir Rd,<br />Rajnandgaon, Chhattisgarh 491441</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-brand-light dark:bg-zinc-800 text-brand-purple">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 dark:text-white mb-1">Contact</h4>
                  <p className="text-zinc-600 dark:text-zinc-400">+91 98267 60297</p>
                  <a href="tel:+919826760297" className="text-sm font-semibold text-brand-cyan hover:underline mt-1 block">Call Now</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-brand-light dark:bg-zinc-800 text-brand-amber">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 dark:text-white mb-1">Opening Hours</h4>
                  <p className="text-zinc-600 dark:text-zinc-400">Monday - Sunday</p>
                  <p className="text-zinc-900 dark:text-zinc-100 font-medium">10:00 AM - 10:00 PM</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <a 
                href="https://maps.app.goo.gl/6D51E3hhZgWo1EiB8" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-4 bg-zinc-900 dark:bg-white text-white dark:text-black font-bold rounded-xl hover:scale-[1.02] transition-transform shadow-lg"
              >
                <Navigation size={18} />
                Navigate on Maps
              </a>
            </div>
          </motion.div>

          {/* Map Embed */}
          <motion.div 
            className="h-[400px] lg:h-auto bg-zinc-200 dark:bg-zinc-800 relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
             {/* Removed grayscale filter to make the map colourful */}
             <iframe 
               src="https://maps.google.com/maps?q=MBA+Kapde+Wala,+Gurudwara+Road,+Manav+Mandir+Rd,+Rajnandgaon,+Chhattisgarh+491441&t=&z=15&ie=UTF8&iwloc=&output=embed"
               width="100%" 
               height="100%" 
               style={{ border: 0 }} 
               allowFullScreen 
               loading="lazy" 
               title="Store Location"
               className=""
             ></iframe>
             {/* Reduced overlay opacity so colors pop more */}
             <div className="absolute inset-0 bg-brand-cyan/5 pointer-events-none mix-blend-overlay"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Location;