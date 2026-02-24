// 'use client';

// import { motion } from 'framer-motion';

// const testimonials = [
//   {
//     id: 1,
//     text: 'Bünyamin hat unsere Website in ein leistungsstarkes Marketingtool verwandelt. Seine Liebe zum Detail und sein Verständnis für unsere Marke sind außergewöhnlich. Wir sind begeistert von den Ergebnissen!',
//     author: 'Alex Turner',
//     role: 'Marketing Manager @ TechStartups',
//     initials: 'AT',
//     color: 'from-violet-500 to-purple-600',
//   },
//   {
//     id: 2,
//     text: 'Die Zusammenarbeit mit Bünyamin war eine echte Freude. Sein Know-how in der Frontend-Entwicklung hat unsere Designs auf eine Art zum Leben erweckt, die wir uns nie vorgestellt hätten.',
//     author: 'Olivia Green',
//     role: 'Head of Design @ GreenLeaf',
//     initials: 'OG',
//     color: 'from-emerald-500 to-teal-600',
//   },
//   {
//     id: 3,
//     text: 'Bünyamin hat das Projekt pünktlich und im Budget geliefert. Die Qualität der Arbeit war herausragend und unsere Kunden waren sehr beeindruckt vom Endergebnis.',
//     author: 'Daniel White',
//     role: 'CEO @ InnovateCo',
//     initials: 'DW',
//     color: 'from-blue-500 to-indigo-600',
//   },
//   {
//     id: 4,
//     text: 'Die Liebe zum Detail und der kreative Ansatz heben diese Arbeit wirklich hervor. Ich empfehle Bünyamin für jedes Frontend-Projekt uneingeschränkt weiter.',
//     author: 'Emily Carter',
//     role: 'Product Manager @ GlobalTech',
//     initials: 'EC',
//     color: 'from-rose-500 to-pink-600',
//   },
// ];

// export const TestimonialsSection = () => {
//   return (
//     <section className="py-16 md:py-24">
//       <div className="container">

//         {/* Header */}
//         <motion.div
//           className="text-center mb-12"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//         >
//           <span className="text-xs font-semibold tracking-widest text-emerald-400 uppercase">Referenzen</span>
//           <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-3">Was Kunden über mich sagen</h2>
//           <p className="text-white/55 text-sm md:text-base max-w-md mx-auto">
//             Nicht nur mein Wort – hier sind die Erfahrungen meiner Kunden.
//           </p>
//         </motion.div>

//         {/* 2-column grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//           {testimonials.map((t, index) => (
//             <motion.div
//               key={t.id}
//               className="p-6 md:p-8 rounded-2xl border border-white/10 bg-white/[0.03] flex flex-col gap-5"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.4, delay: index * 0.1 }}
//               viewport={{ once: true }}
//             >
//               {/* Stars */}
//               <div className="flex gap-1">
//                 {[...Array(5)].map((_, i) => (
//                   <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="#facc15">
//                     <path d="M8 1l1.85 3.75 4.15.6-3 2.93.71 4.13L8 10.35l-3.71 1.95.71-4.13-3-2.93 4.15-.6L8 1z"/>
//                   </svg>
//                 ))}
//               </div>

//               {/* Quote */}
//               <p className="text-white/75 text-sm leading-relaxed flex-1">
//                 &ldquo;{t.text}&rdquo;
//               </p>

//               {/* Author */}
//               <div className="flex items-center gap-3">
//                 <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-xs font-bold flex-shrink-0`}>
//                   {t.initials}
//                 </div>
//                 <div>
//                   <p className="font-semibold text-sm">{t.author}</p>
//                   <p className="text-white/50 text-xs">{t.role}</p>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };
