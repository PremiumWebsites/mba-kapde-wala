import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { ThemeContextType } from '../types';

interface ThemeToggleProps {
  theme: ThemeContextType['theme'];
  toggleTheme: ThemeContextType['toggleTheme'];
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100 transition-colors duration-300 hover:ring-2 ring-brand-cyan/50 focus:outline-none"
      aria-label="Toggle Theme"
    >
      <div className="relative w-6 h-6 overflow-hidden">
        <motion.div
          initial={false}
          animate={{
            y: theme === 'dark' ? -30 : 0,
            opacity: theme === 'dark' ? 0 : 1,
            rotate: theme === 'dark' ? 90 : 0
          }}
          transition={{ duration: 0.4, ease: "backInOut" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Sun className="w-5 h-5 text-amber-500" />
        </motion.div>
        
        <motion.div
          initial={false}
          animate={{
            y: theme === 'dark' ? 0 : 30,
            opacity: theme === 'dark' ? 1 : 0,
            rotate: theme === 'dark' ? 0 : -90
          }}
          transition={{ duration: 0.4, ease: "backInOut" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Moon className="w-5 h-5 text-brand-purple" />
        </motion.div>
      </div>
    </button>
  );
};

export default ThemeToggle;