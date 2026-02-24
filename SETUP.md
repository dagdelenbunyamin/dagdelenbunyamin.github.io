# Modern Portfolio Website

Eine vollständig animierte und responsiv designte Portfolio-Website, erstellt mit **Next.js**, **React**, **TailwindCSS** und **Framer Motion**.

## 🚀 Features

### ✨ Sections
- **Header** - Sticky Navigation mit Scroll-Effekt
- **Hero** - Beeindruckende Landing Section mit Interactive Cursor Animation
- **Projects** - Responsive Projekt-Grid mit Hover-Effekten
- **Tech Stack** - Animated Infinite Scrolling Tape
- **Testimonials** - Carousel mit Kundenbewertungen
- **About** - Persönlicher Hintergrund und Skills
- **CTA** - Call-to-Action Section mit Stats
- **Contact** - Vollständiges Kontaktformular
- **Footer** - Newsletter Signup und Links

### 🎨 Design Features
- **Dark Theme** mit Gradient Accents (Purple & Pink)
- **Framer Motion Animationen** für alle Sections
- **Smooth Scrolling** und Page Transitions
- **Responsive Design** (Mobile, Tablet, Desktop)
- **Glassmorphism** Effects
- **Interactive Elements** mit Hover-States
- **Performance Optimized**

### 🛠️ Tech Stack
- **Next.js 14** - React Framework
- **React 18** - UI Library
- **TypeScript** - Type Safety
- **TailwindCSS 3** - Styling
- **Framer Motion** - Animations
- **SVGR** - SVG Components

## 📦 Installation

### 1. Dependencies installieren
```bash
npm install
```

### 2. Development Server starten
```bash
npm run dev
```

Die Website öffnet sich unter `http://localhost:3000`

### 3. Production Build
```bash
npm run build
npm run start
```

## 📋 Customization

### Farben ändern
Bearbeite die Gradient-Farben in:
- `src/app/globals.css` - CSS Variables
- `tailwind.config.ts` - Theme Configuration

### Inhalte aktualisieren
Alle Sections befinden sich in `src/sections/`:
- `Hero.tsx` - Landing Hero Section
- `Projects.tsx` - Projektliste
- `About.tsx` - About Me Section
- `Contact.tsx` - Kontaktformular
- Etc.

### Texte anpassen
Alle Texte sind direkt in den Components hardcoded und können einfach bearbeitet werden.

### Images hinzufügen
Placeholder Images können durch echte Bilder ersetzt werden:
1. Bilder in `src/assets/images/` speichern
2. Imports in den entsprechenden Sections aktualisieren

## 🎯 Sections Übersicht

| Section | Datei | Features |
|---------|-------|----------|
| Header | `sections/Header.tsx` | Sticky Nav, Scroll-Effect |
| Hero | `sections/Hero.tsx` | Mouse Tracking, Animations |
| Projects | `sections/Projects.tsx` | 3-Column Grid, Hover Effects |
| Tape | `sections/Tape.tsx` | Infinite Scrolling |
| Testimonials | `sections/Testimonials.tsx` | Carousel Navigation |
| About | `sections/About.tsx` | Skills Grid, Layout |
| CTA | `sections/CTA.tsx` | Call-to-Action, Stats |
| Contact | `sections/Contact.tsx` | Form, Social Links |
| Footer | `sections/Footer.tsx` | Newsletter, Links |

## 🎬 Animationen

Alle Animationen werden durch **Framer Motion** realisiert:

```tsx
// Beispiel: Fade In on Scroll
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  Content
</motion.div>
```

## 📱 Responsive Design

Das Design ist vollständig responsive mit Breakpoints:
- **sm**: 375px (Mobile)
- **md**: 768px (Tablet)
- **lg**: 1200px (Desktop)

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### GitHub Pages / Netlify
Siehe Next.js Dokumentation für Static Export

## 📄 Lizenz

Kostenlos verwendbar für persönliche und kommerzielle Projekte.

## 🤝 Support

Für Fragen oder Issues bitte die Datei überprüfen oder Anpassungen vornehmen.

---

**Made with ❤️ using Next.js, React & TailwindCSS**
