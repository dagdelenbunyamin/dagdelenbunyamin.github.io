'use client';

import { motion } from 'framer-motion';

const sparkles = [
  { top: '22%', left: '8%',  size: 'text-2xl', delay: 0 },
  { top: '15%', right: '12%', size: 'text-4xl', delay: 0.4 },
  { top: '65%', left: '5%',  size: 'text-xl',  delay: 0.8 },
  { top: '70%', right: '8%', size: 'text-3xl', delay: 0.2 },
  { top: '40%', left: '18%', size: 'text-lg',  delay: 1.0 },
  { top: '30%', right: '20%',size: 'text-xl',  delay: 0.6 },
];

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">

      {/* Animated sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        {sparkles.map((s, i) => (
          <motion.div
            key={i}
            className={`absolute ${s.size} text-emerald-400 select-none`}
            style={{ top: s.top, left: s.left, right: s.right }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 0.8, 0.4], scale: [0, 1.2, 1] }}
            transition={{ duration: 1.2, delay: s.delay, repeat: Infinity, repeatDelay: 3 + i }}
          >
            ✦
          </motion.div>
        ))}
      </div>

      <div className="container relative z-10 flex flex-col items-center">
        <div className="text-center max-w-3xl mx-auto w-full">

          {/* Avatar with green ring */}
          <motion.div
            className="flex justify-center mb-5"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
          >
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-amber-300 to-amber-500 flex items-center justify-center text-5xl ring-4 ring-emerald-400 ring-offset-4 ring-offset-[#0d1117]">
                🧑‍💻
              </div>
              <div className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-[#0d1117]" />
            </div>
          </motion.div>

          {/* Available badge */}
          <motion.div
            className="flex justify-center mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-sm text-white/80">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              Offen für neue Projekte
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          >
            Hi, I&apos;m Bünyamin
            <br />
            Dagdelen
          </motion.h1>

          {/* Sub text */}
          <motion.p
            className="text-base md:text-lg text-white/55 mb-10 max-w-xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            19 Jahre alt, aus Bonn. Ich lerne, baue und entwickle — Websites, Apps und Tools, die ich mit Leidenschaft gestalte.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.a
              href="#projects"
              className="flex items-center gap-2 px-7 py-3 bg-white text-black rounded-xl font-semibold text-sm w-full sm:w-auto justify-center"
              whileHover={{ scale: 1.04, backgroundColor: '#e5e5e5' }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              Meine Projekte ansehen
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
              </svg>
            </motion.a>
            {/* <motion.a
              href="#contact"
              className="flex items-center gap-2 px-7 py-3 bg-white/10 border border-white/20 text-white rounded-xl font-semibold text-sm w-full sm:w-auto justify-center"
              whileHover={{ scale: 1.04, backgroundColor: 'rgba(255,255,255,0.18)' }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              <span>👋</span>
              Kontakt aufnehmen
            </motion.a> */}
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      {/* <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <span className="text-xs text-white/30 tracking-widest uppercase">Scroll</span>
        <motion.div
          className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1.5"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="w-1 h-2 bg-white/50 rounded-full"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div> */}

    </section>
  );
};
