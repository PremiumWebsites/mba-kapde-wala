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
                  <p className="text-zinc-600 dark:text-zinc-400">+91 12345 67890</p>
                  <a href="tel:+911234567890" className="text-sm font-semibold text-brand-cyan hover:underline mt-1 block">Call Now</a>
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
                href="https://maps.google.com" 
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
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3728.875323862846!2d81.029!3d21.097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2a881123456789%3A0xabcdef1234567890!2sRajnandgaon%2C%20Chhattisgarh!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
               width="100%" 
               height="100%" 
               style={{ border: 0, filter: 'grayscale(1) contrast(1.2) opacity(0.8)' }} 
               allowFullScreen 
               loading="lazy" 
               title="Store Location"
               className="dark:mix-blend-luminosity mix-blend-multiply"
             ></iframe>
             {/* Map Styling Overlay for Theme Integration */}
             <div className="absolute inset-0 bg-brand-cyan/10 pointer-events-none mix-blend-overlay"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Location;