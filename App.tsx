import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Categories from './components/Categories';
import WhyUs from './components/WhyUs';
import Reviews from './components/Reviews';
import Location from './components/Location';
import Footer from './components/Footer';
import { Theme } from './types';

function App() {
  const [theme, setTheme] = useState<Theme>('dark');
  const [mounted, setMounted] = useState(false);

  // Initialize theme from local storage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (systemPrefersDark) {
      setTheme('dark');
    }
    setMounted(true);
  }, []);

  // Update HTML class when theme changes
  useEffect(() => {
    if (!mounted) return;
    
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-brand-light dark:bg-brand-dark transition-colors duration-500 w-full overflow-hidden">
      <Navbar themeContext={{ theme, toggleTheme }} />
      <main>
        <Hero />
        <About />
        <Categories />
        <WhyUs />
        <Reviews />
        <Location />
      </main>
      <Footer />
    </div>
  );
}

export default App;