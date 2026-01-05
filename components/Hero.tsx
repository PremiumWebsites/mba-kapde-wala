import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from 'framer-motion';
import { MapPin, Shirt } from 'lucide-react';

// Custom Minimal Vector Icons
const HoodieIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 2a3 3 0 0 0-3 3v1H5v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h-4V5a3 3 0 0 0-3-3z" />
    <path d="M12 2v4" />
    <path d="M9 10l3 3 3-3" />
  </svg>
);

const SweatshirtIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="4" y="5" width="16" height="16" rx="2" />
    <path d="M8 5c0-2 1.5-3 4-3s4 1 4 3" />
    <path d="M4 10h16" />
  </svg>
);

const MufflerIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className={className}>
     <path d="M15 2H9a3 3 0 0 0-3 3v2h12V5a3 3 0 0 0-3-3z" />
     <path d="M6 7h12v3H6z" />
     <path d="M8 10v10" />
     <path d="M16 10v12" />
     <path d="M6 20h4" />
     <path d="M14 22h4" />
  </svg>
);

const Hero: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  
  // Mouse tracking for parallax and spotlight
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the mouse movement
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width;
    const y = (clientY - top) / height;
    
    mouseX.set(x);
    mouseY.set(y);
  };

  // Parallax transforms for icons
  const moveX1 = useTransform(smoothMouseX, [0, 1], [40, -40]);
  const moveY1 = useTransform(smoothMouseY, [0, 1], [40, -40]);
  
  const moveX2 = useTransform(smoothMouseX, [0, 1], [-50, 50]);
  const moveY2 = useTransform(smoothMouseY, [0, 1], [-50, 50]);

  const moveX3 = useTransform(smoothMouseX, [0, 1], [30, -30]);
  const moveY3 = useTransform(smoothMouseY, [0, 1], [-30, 30]);

  const moveX4 = useTransform(smoothMouseX, [0, 1], [-40, 40]);
  const moveY4 = useTransform(smoothMouseY, [0, 1], [20, -20]);

  // Spotlight effect
  const background = useMotionTemplate`radial-gradient(600px circle at ${useTransform(smoothMouseX, x => x * 100)}% ${useTransform(smoothMouseY, y => y * 100)}%, rgba(139, 92, 246, 0.15), transparent 80%)`;

  return (
    <section 
      id="hero" 
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20 perspective-1000"
    >
      {/* Background Interactive Layer */}
      <div className="absolute inset-0 w-full h-full bg-brand-light dark:bg-brand-dark transition-colors duration-500 overflow-hidden">
        {/* Cursor Spotlight */}
        <motion.div 
          className="absolute inset-0 opacity-100 mix-blend-soft-light dark:mix-blend-screen pointer-events-none"
          style={{ background }}
        />

        {/* Static Ambient Blobs */}
        <div className="absolute top-0 -right-40 w-96 h-96 bg-brand-purple/20 dark:bg-brand-purple/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-0 -left-40 w-96 h-96 bg-brand-cyan/20 dark:bg-brand-cyan/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />

        {/* Floating Clothing Vectors (Parallax) */}
        {/* Top Left - Shirt */}
        <motion.div style={{ x: moveX1, y: moveY1 }} className="absolute top-[12%] left-[8%] md:left-[15%] text-brand-purple/10 dark:text-brand-purple/20 rotate-12 z-0">
            <Shirt size={100} strokeWidth={1} />
        </motion.div>
        
        {/* Top Right - Hoodie */}
        <motion.div style={{ x: moveX3, y: moveY3 }} className="absolute top-[18%] right-[8%] md:right-[18%] text-brand-amber/10 dark:text-brand-amber/20 rotate-[15deg] z-0">
            <HoodieIcon size={110} />
        </motion.div>

        {/* Bottom Left - Sweatshirt */}
        <motion.div style={{ x: moveX4, y: moveY4 }} className="absolute bottom-[20%] left-[5%] md:left-[10%] text-zinc-400/10 dark:text-zinc-600/20 -rotate-6 z-0">
            <SweatshirtIcon size={95} />
        </motion.div>
        
        {/* Bottom Right - Muffler */}
        <motion.div style={{ x: moveX2, y: moveY2 }} className="absolute bottom-[25%] right-[8%] md:right-[12%] text-brand-cyan/10 dark:text-brand-cyan/20 rotate-12 z-0">
            <MufflerIcon size={100} />
        </motion.div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 dark:opacity-40 mix-blend-overlay pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
        
        {/* Animated Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-200/50 dark:bg-zinc-800/50 backdrop-blur-sm border border-zinc-300 dark:border-zinc-700 mb-8 cursor-pointer shadow-sm hover:shadow-md transition-shadow"
        >
          <MapPin size={14} className="text-brand-cyan" />
          <span className="text-xs font-bold uppercase tracking-widest text-zinc-600 dark:text-zinc-300">
            Rajnandgaon's Finest
          </span>
        </motion.div>

        {/* Main Title - Interactive */}
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
           className="mb-4 flex flex-col items-center w-full"
        >
          {/* MBA Text */}
          <motion.h1 
            className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-zinc-900 dark:text-white leading-none cursor-default mb-0 md:mb-0"
            whileHover={{ scale: 1.02, skewX: -2, transition: { type: "spring", stiffness: 300 } }}
          >
            <span className="block bg-clip-text text-transparent bg-gradient-to-br from-zinc-800 to-zinc-500 dark:from-white dark:to-zinc-400 select-none">
              MBA
            </span>
          </motion.h1>
          
          {/* English 'kapde wala' Typography - Interactive */}
          <div className="mt-0 md:-mt-2 relative group">
             {/* Decorative small icons near text - Animated on Hover */}
             <motion.div 
                className="absolute -top-4 -right-4 md:-top-6 md:-right-10 text-brand-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
             >
                <Shirt className="w-5 h-5 md:w-10 md:h-10" />
             </motion.div>

             <motion.h1 
                className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-purple to-brand-cyan animate-text-shimmer leading-none pb-2 drop-shadow-2xl cursor-default select-none"
                whileHover={{ 
                    scale: 1.05, 
                    rotate: -2,
                    textShadow: "0px 10px 30px rgba(6, 182, 212, 0.5)"
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
             >
                kapde wala
             </motion.h1>
          </div>
        </motion.div>

        {/* Subtitle */}
        <motion.p 
          className="text-sm sm:text-base md:text-lg font-light text-zinc-800 dark:text-zinc-300 max-w-lg mb-10 px-4 mt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          Style that speaks before you do. <br className="hidden md:block" />
          <span className="font-semibold text-brand-purple">Premium Streetwear</span> & <span className="font-semibold text-brand-cyan">Ethnic Vibes</span>.
        </motion.p>

      </div>
    </section>
  );
};

export default Hero;