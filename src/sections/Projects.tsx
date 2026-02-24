'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    company: 'SCHULPROJEKT · FRIEDRICH-LIST-BERUFSKOLLEG Bonn',
    // year: '2024',
    title: 'Fair Café FLB',
    results: [
      'Interaktive Website für den Schulbetrieb entwickelt',
      'Erfolgreich auf der Schulplattform veröffentlicht',
      'Zugänglich für die gesamte Schulgemeinschaft',
    ],
    link: 'https://faircafe.myflb.de',
    linkLabel: 'faircafe.myflb.de',
    bg: 'from-emerald-700 via-teal-700 to-cyan-900',
    mockupText: 'Fair Café\nFLB',
    mockupColor: 'text-white',
  },
  {
    id: 2,
    company: 'SCHULPROJEKT · FRIEDRICH-LIST-BERUFSKOLLEG Bonn',
    // year: '2025',
    title: 'FLB IPad System ',
    results: [
      'iPadOS & iOS App für Schüler-Geräteverwaltung',
      'Barcode-Erkennung via VisionKit (Echtzeit-Scan)',
      'MVVM-Architektur mit SwiftUI & lokalem JSON-Storage',
    ],
    // link: 'https://github.com/dagdelenbunyamin/Swift-IOS-FLB',
    linkLabel: 'Privat',
    bg: 'from-blue-900 via-indigo-900 to-violet-950',
    mockupText: 'iPad\nSystem',
    mockupColor: 'text-white',
  },
  {
    id: 3,
    company: 'SCHULPROJEKT · FRIEDRICH-LIST-BERUFSKOLLEG Bonn',
    // year: '2024',
    title: 'Barcode-Scanner FLB',
    results: [
      'Digitale Schülererfassung per Barcode-Scan',
      'SQLite-Datenbank für Schülerdaten & neue Einträge',
      'Live-Kamera mit Echtzeit-Barcoderkennung',
    ],
    link: 'https://github.com/dagdelenbunyamin/Barcode-Scanner-FLB',
    linkLabel: 'barcode-scanner-flb',
    bg: 'from-slate-800 via-zinc-800 to-neutral-900',
    mockupText: 'Barcode\nScanner',
    mockupColor: 'text-white',
  },
  {
    id: 4,
    company: 'KUNDENPROJEKT · KAVAKLI BAU GMBH',
    // year: '2025',
    title: 'Firmenwebsite Kavakli Bau GmbH',
    results: [
      'Professioneller Webauftritt für Stuckateurmeisterbetrieb',
      'Dienstleistungen & Projekte übersichtlich präsentiert',
      'Neue Version aktuell in Entwicklung',
    ],
    link: '#',
    linkLabel: 'In Entwicklung',
    bg: 'from-orange-900 via-amber-900 to-yellow-950',
    mockupText: 'Kavakli\nBau GmbH',
    mockupColor: 'text-white',
  },
  // {
  //   id: 5,
  //   company: 'KUNDENPROJEKT · VOLKER RADEMACHER',
  //   // year: '2025',
  //   title: 'Firmenwebsite Rademacher Heizung & Lüftung',
  //   results: [
  //     'Moderne Website als digitale Visitenkarte',
  //     'Leistungen, Projekte & Kontakt übersichtlich präsentiert',
  //     'Neue Version aktuell in Entwicklung',
  //   ],
  //   link: '#',
  //   linkLabel: 'In Entwicklung',
  //   bg: 'from-sky-900 via-blue-900 to-indigo-950',
  //   mockupText: 'Rademacher\nGmbH',
  //   mockupColor: 'text-white',
  // },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container">

        {/* Header */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-3">
            <span className="text-xs font-semibold tracking-widest text-emerald-400 uppercase">Meine Projekte</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-3">Ausgewählte Projekte</h2>
          <p className="text-center text-white/55 text-sm md:text-base max-w-md mx-auto">
            Von der Idee bis zum fertigen Produkt – hier sind meine bisherigen Arbeiten.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="space-y-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="border border-white/10 rounded-2xl overflow-hidden bg-white/[0.03]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Left: Content */}
                <div className="p-8 md:p-10 flex flex-col justify-between">
                  <div>
                    {/* Company + Year */}
                    <p className="text-xs font-semibold tracking-widest text-white/40 uppercase mb-4"> 
                      {project.company}  
                    </p>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-bold mb-6">{project.title}</h3>

                    {/* Results */}
                    <ul className="space-y-3 mb-8">
                      {project.results.map((r, i) => (
                        <li key={i} className="flex items-center gap-3 text-white/70 text-sm">
                          <svg className="text-emerald-400 flex-shrink-0" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/>
                            <path d="M5 8l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Button */}
                  <div>
                    <a
                      href={project.link}
                      target={project.link !== '#' ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/20 rounded-xl text-sm font-medium hover:border-white/50 hover:bg-white/5 transition-all duration-200"
                    >
                      {project.linkLabel}
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Right: Mockup Image */}
                <div className={`relative h-64 lg:h-auto overflow-hidden bg-gradient-to-br ${project.bg} flex items-center justify-center p-8`}>
                  {/* Fake browser chrome */}
                  <div className="absolute top-4 left-4 right-4 h-7 bg-black/20 rounded-t-lg flex items-center px-3 gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                  </div>
                  <p className={`text-3xl md:text-4xl font-bold text-center mt-6 ${project.mockupColor} leading-tight whitespace-pre-line`}>
                    {project.mockupText}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
