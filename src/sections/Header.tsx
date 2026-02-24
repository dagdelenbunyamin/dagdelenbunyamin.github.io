'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  // { label: 'Contact', href: '#contact' },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 w-full z-50 bg-transparent"
    >
      <div className="container flex items-center justify-center h-16 md:h-20 relative">

        {/* Centered pill nav — the pill itself has the background */}
        <nav className="flex items-center gap-0.5 bg-[#0d1117]/70 backdrop-blur-md border border-white/10 rounded-full px-2 py-1.5">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setActiveLink(link.label)}
              className={`relative px-3 sm:px-4 py-1.5 text-xs sm:text-sm rounded-full transition-colors duration-200 ${
                activeLink === link.label
                  ? 'text-white'
                  : 'text-white/55 hover:text-white'
              }`}
            >
              {activeLink === link.label && (
                <motion.span
                  className="absolute inset-0 rounded-full bg-white/15"
                  layoutId="active-nav"
                  transition={{ type: 'spring', stiffness: 380, damping: 40, mass: 0.8 }}
                />
              )}
              <span className="relative z-10">{link.label}</span>
            </a>
          ))}
        </nav>

        {/* Contact button — absolute right */}
        {/* <motion.a
          href="#contact"
          onClick={() => setActiveLink('Contact')}
          className="absolute right-4 md:right-6 lg:right-0 px-4 sm:px-5 py-2 bg-white text-black rounded-full font-semibold text-xs sm:text-sm"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        >
          Contact me
        </motion.a> */}

      </div>
    </header>
  );
};
