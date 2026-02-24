'use client';

import { motion } from 'framer-motion';

const toolboxItems = [
  { label: 'JavaScript', bg: 'bg-yellow-400', text: 'text-black', abbr: 'JS' },
  { label: 'TypeScript', bg: 'bg-blue-600', text: 'text-white', abbr: 'TS' },
  { label: 'HTML', bg: 'bg-orange-500', text: 'text-white', abbr: 'HTML' },
  { label: 'CSS', bg: 'bg-blue-400', text: 'text-white', abbr: 'CSS' },
  { label: 'React', bg: 'bg-cyan-400', text: 'text-black', abbr: 'Re' },
  { label: 'Angular', bg: 'bg-red-600', text: 'text-white', abbr: 'Ng' },
  { label: 'Python', bg: 'bg-green-500', text: 'text-white', abbr: 'Py' },
  { label: 'Swift', bg: 'bg-orange-400', text: 'text-white', abbr: 'Sw' },
  { label: 'C# / .NET', bg: 'bg-purple-600', text: 'text-white', abbr: 'C#' },
  { label: 'Linux', bg: 'bg-slate-600', text: 'text-white', abbr: 'Lx' },
  { label: 'Git', bg: 'bg-rose-500', text: 'text-white', abbr: 'Git' },
  { label: 'MacOS', bg: 'bg-pink-500', text: 'text-white', abbr: 'Mac' },
];

const hobbies = [
  { label: 'Lesen 📚' },
  { label: 'Programmieren 💻' },
  { label: 'Schreiben ✍️' },
  { label: 'Musik 🎵' },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container">

        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="text-xs font-semibold tracking-widest text-emerald-400 uppercase">Über mich</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-3">Ein Blick in meine Welt</h2>
          <p className="text-white/55 text-sm md:text-base max-w-md mx-auto">
            Erfahre mehr darüber, wer ich bin, was ich tue und was mich antreibt.
          </p>
        </motion.div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* My Reads */}
          <motion.div
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 flex flex-col gap-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2">
              <span className="text-emerald-400 font-bold text-lg">+</span>
              <h3 className="font-bold text-lg">Meine Lektüre</h3>
            </div>
            <p className="text-white/50 text-sm">Bücher, die mein Denken und meine Perspektive prägen.</p>

            {/* Book cover - Atomic Habits */}
            <div className="flex justify-center py-2">
              <div
                className="w-28 h-36 rounded-lg overflow-hidden shadow-2xl flex flex-col items-center justify-center p-3 text-center"
                style={{ background: 'linear-gradient(145deg, #ff6b35 0%, #f7c59f 100%)' }}
              >
                <p className="text-black font-black text-xs leading-tight uppercase tracking-wide">Theaterstück</p>
                {/* <p className="text-black font-black text-xs leading-tight uppercase tracking-wide mt-0.5">Remarkable</p> */}
                <p className="text-black font-black text-xl leading-tight mt-1">Der gute Mensch von Sezuan</p>
                {/* <p className="text-black font-black text-3xl leading-none">Der gute Mensch von Sezuan</p> */}
                <p className="text-black/70 text-xs mt-1">Bertolt Brecht</p>
              </div>
            </div>
          </motion.div>

          {/* My Toolbox */}
          <motion.div
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 flex flex-col gap-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2">
              <span className="text-emerald-400 font-bold text-lg">+</span>
              <h3 className="font-bold text-lg">Mein Werkzeugkasten</h3>
            </div>
            <p className="text-white/50 text-sm">Die Technologien und Tools, die ich für meine Projekte einsetze.</p>

            {/* Icon grid */}
            <div className="grid grid-cols-4 gap-3">
              {toolboxItems.map((tool, i) => (
                <div key={i} className="flex flex-col items-center gap-1.5">
                  <div className={`w-10 h-10 rounded-lg ${tool.bg} ${tool.text} flex items-center justify-center font-bold text-xs shadow-sm`}>
                    {tool.abbr}
                  </div>
                  <span className="text-white/50 text-xs text-center truncate w-full">{tool.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Beyond the Code - full width */}
          <motion.div
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 flex flex-col gap-5 md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2">
              <span className="text-emerald-400 font-bold text-lg">+</span>
              <h3 className="font-bold text-lg">Jenseits des Codes</h3>
            </div>
            <p className="text-white/50 text-sm">Meine Interessen und Hobbys abseits des Bildschirms.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              {/* Hobby tags */}
              <div className="flex flex-wrap gap-2">
                {hobbies.map((h, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-full border border-white/15 bg-white/5 text-sm hover:border-emerald-400/40 hover:bg-emerald-400/5 transition-all duration-200 cursor-default"
                  >
                    {h.label}
                  </span>
                ))}
              </div>

              {/* Bonn Map via OpenStreetMap embed */}
              <div className="relative h-44 rounded-xl overflow-hidden border border-white/10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d90441.16812304054!2d7.034206895355568!3d50.70365208132547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bee19f7ccbda49%3A0x86dbf8c6685c9617!2sBonn!5e1!3m2!1sde!2sde!4v1771940386341!5m2!1sde!2sde"
                  referrerPolicy="no-referrer-when-downgrade"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(0.9) hue-rotate(180deg) saturate(0.6) brightness(0.85)' }}
                  loading="lazy"
                  title="Bonn, Deutschland"
                />
                <div className="absolute bottom-2 right-2 bg-black/60 text-white/70 text-[10px] px-2 py-0.5 rounded-full backdrop-blur-sm">
                  📍 Bonn, Deutschland
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
