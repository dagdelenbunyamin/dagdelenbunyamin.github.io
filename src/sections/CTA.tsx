'use client';

import { motion } from 'framer-motion';

export const CTASection = () => {
  return (
    <section className="py-10 md:py-14">
      <div className="container">
        <motion.div
          className="relative rounded-3xl overflow-hidden p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8"
          style={{
            background: 'linear-gradient(135deg, #0d9488 0%, #0891b2 40%, #0e7490 70%, #155e75 100%)',
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Sparkle decorations */}
          <div className="absolute top-6 left-10 text-white/30 text-2xl select-none">✦</div>
          <div className="absolute bottom-6 right-1/3 text-white/20 text-xl select-none">✦</div>
          <div className="absolute top-1/2 right-20 text-white/25 text-3xl select-none">✦</div>

          {/* Text */}
          <div className="relative z-10 max-w-xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-3">
              Schau dir meine Projekte an
            </h2>
            <p className="text-white/75 text-sm md:text-base">
              Das hier ist mein persönliches Portfolio. Ich zeige, was ich bisher gebaut und gelernt habe – und was noch kommen wird.
            </p>
          </div>

          {/* Button */}
          <div className="relative z-10 flex-shrink-0">
            <a
              href="mailto:buenyamin.dagdelen@dagdelen.info"
              className="flex items-center gap-2 px-7 py-3.5 bg-black/30 hover:bg-black/50 text-white border border-white/20 rounded-xl font-semibold transition-all duration-200 text-sm whitespace-nowrap"
            >
              Kontakt
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
