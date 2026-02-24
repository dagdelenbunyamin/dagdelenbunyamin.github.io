// 'use client';

// import { motion } from 'framer-motion';

// const contactLinks = [
//   {
//     icon: '🐙',
//     label: 'GitHub',
//     value: 'github.com/dagdelenbunyamin',
//     href: 'https://github.com/dagdelenbunyamin',
//     external: true,
//   },
//   {
//     icon: '💼',
//     label: 'LinkedIn',
//     value: 'linkedin.com/in/bunyamin-dagdelen',
//     href: 'https://www.linkedin.com/in/bunyamin-dagdelen',
//     external: true,
//   },
//   {
//     icon: '🌐',
//     label: 'Website',
//     value: 'www.dagdelen.info',
//     href: 'https://www.dagdelen.info',
//     external: true,
//   },
// ];

// export const ContactSection = () => {
//   return (
//     <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
//       <div className="container">

//         {/* Header */}
//         <motion.div
//           className="text-center max-w-2xl mx-auto mb-16"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           <div className="flex justify-center mb-4">
//             <div className="tap-accent">✉️ Kontakt</div>
//           </div>
//           <h2 className="text-4xl md:text-6xl font-bold mb-6">
//             Lass uns zusammen<br /><span className="gradient-text">arbeiten</span>
//           </h2>
//           <p className="text-white/60 text-lg">
//             Du hast ein Projekt oder eine Idee? Schreib mir einfach eine E-Mail – ich freue mich von dir zu hören.
//           </p>
//         </motion.div>

//         {/* Email CTA */}
//         <motion.div
//           className="flex justify-center mb-16"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.1 }}
//           viewport={{ once: true }}
//         >
//           <motion.a
//             href="mailto:buenyamin.dagdelen@dagdelen.info"
//             className="flex items-center gap-2 sm:gap-3 px-5 sm:px-8 py-3.5 sm:py-4 bg-white text-black rounded-2xl font-bold text-sm sm:text-lg hover:bg-white/90 transition-colors shadow-xl shadow-white/10 max-w-full"
//             whileHover={{ scale: 1.04 }}
//             whileTap={{ scale: 0.97 }}
//             transition={{ type: 'spring', stiffness: 400, damping: 25 }}
//           >
//             <svg className="flex-shrink-0" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//               <rect x="2" y="4" width="20" height="16" rx="2"/>
//               <path d="m22 7-10 7L2 7"/>
//             </svg>
//             <span className="break-all">buenyamin.dagdelen@dagdelen.info</span>
//           </motion.a>
//         </motion.div>

//         {/* Other links */}
//         <motion.div
//           className="flex flex-wrap justify-center gap-5"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           viewport={{ once: true }}
//         >
//           {contactLinks.map((link, i) => (
//             <motion.a
//               key={i}
//               href={link.href}
//               target={link.external ? '_blank' : undefined}
//               rel="noopener noreferrer"
//               className="flex items-center gap-3 px-6 py-3.5 border border-white/15 bg-white/[0.03] rounded-xl hover:border-white/35 hover:bg-white/[0.07] transition-all duration-200 group"
//               whileHover={{ scale: 1.03 }}
//               whileTap={{ scale: 0.97 }}
//               transition={{ type: 'spring', stiffness: 400, damping: 25 }}
//             >
//               <span className="text-xl">{link.icon}</span>
//               <div>
//                 <p className="text-xs text-white/40 font-semibold uppercase tracking-wider">{link.label}</p>
//                 <p className="text-sm text-white/80 group-hover:text-white transition-colors">{link.value}</p>
//               </div>
//             </motion.a>
//           ))}
//         </motion.div>

//       </div>
//     </section>
//   );
// };
