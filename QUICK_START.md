# 🚀 QUICK START - Deine Portfolio Website

## ⚡ Sofort starten:

```bash
# 1. Ins Verzeichnis gehen
cd starter-template

# 2. Dependencies installieren (falls nicht bereits getan)
npm install

# 3. Development Server starten
npm run dev
```

**→ Website lädt unter:** http://localhost:3000

---

## 📝 Schnell Anpassungen machen:

### Deine Texte ändern:
1. `src/sections/Hero.tsx` - Überschrift und Beschreibung
2. `src/sections/About.tsx` - About-Text und Skills
3. `src/sections/Contact.tsx` - Kontakt-Informationen
4. `src/sections/Projects.tsx` - Projekt-Titel und -Beschreibungen
5. `src/sections/Testimonials.tsx` - Kundenfeedbacks

### Deine Farben ändern:
- Bearbeite `src/app/globals.css`
- Ändere `#a78bfa` (Purple) zu deiner Farbe
- Oder nutze andere Gradients

### CTA Buttons anpassen:
Alle Buttons haben diese Struktur:
```tsx
<button className="px-8 py-4 bg-white text-black rounded-lg">
  Text hier
</button>
```

---

## 🎨 Layout/Struktur:

Die Website hat folgende Sections (in dieser Reihenfolge):
1. **Header** - Navigation
2. **Hero** - Landing Section
3. **Projects** - Projektliste
4. **Tape** - Tech Stack
5. **Testimonials** - Kundenreviews
6. **About** - Über dich
7. **CTA** - Call-to-Action
8. **Contact** - Kontaktformular
9. **Footer** - Fußzeile

---

## 📱 Responsive Check:

Die Website ist bereits responsive für:
- ✓ Handy (375px)
- ✓ Tablet (768px)
- ✓ Desktop (1200px)

Im Browser: Drücke `F12` → "Responsive Design Mode" zum Testen

---

## 🎯 Häufige Änderungen:

### 1. Projektbilder hinzufügen
In `src/sections/Projects.tsx`, ändere die Emojis:
```tsx
image: '🛍️',  // Ändere zu deinem Emoji
```

Oder nutze echte Bilder:
```tsx
import projectImg from '@/assets/images/project.jpg'
// Dann im JSX: <img src={projectImg} />
```

### 2. Testimonials ändern
In `src/sections/Testimonials.tsx`:
- Neue Texte eintragen
- Neue Namen
- Neue Rollen

### 3. Skills hinzufügen
In `src/sections/About.tsx`:
```tsx
const skills = [
  'Web Development',   // Neue Skills hinzufügen
  'UI/UX Design',
  // ...
];
```

---

## 🚀 Deploy (Kostenlos):

### Option 1: Vercel (Empfohlen)
```bash
npm install -g vercel
vercel
# Folge den Anweisungen
```

### Option 2: Netlify
1. Gehe zu netlify.com
2. Verbinde dein GitHub Repository
3. Deploy!

### Option 3: GitHub Pages
Siehe Next.js Dokumentation für Static Export

---

## 🛠️ Nützliche Commands:

```bash
npm run dev    # Development Server (mit Hot Reload)
npm run build  # Production Build
npm run start  # Production Server starten
npm run lint   # Code Quality Check
```

---

## 📚 Weitere Ressourcen:

- **Next.js Docs:** https://nextjs.org/docs
- **Tailwind Docs:** https://tailwindcss.com/docs
- **Framer Motion:** https://www.framer.com/motion/
- **React Docs:** https://react.dev

---

## ❓ Häufig gestellte Fragen:

**F: Wie ändere ich den Seitentitel?**
A: In `src/app/layout.tsx`:
```tsx
const metadata: Metadata = {
  title: "Mein Portfolio",  // Ändere hier
  description: "Meine Beschreibung",
};
```

**F: Wie füge ich Links zu sozialen Medien hinzu?**
A: In `src/sections/Footer.tsx` die Links ändern.

**F: Wie mache ich das Kontaktformular funktionsfähig?**
A: Nutze emailjs.com oder ähnliche Services. In `src/sections/Contact.tsx` den handleSubmit anpassen.

**F: Wie kann ich Animationen schneller/langsamer machen?**
A: In Framer Motion Komponenten, ändere die `duration` in `transition`:
```tsx
transition={{ duration: 0.6 }}  // Schneller = kleinere Zahl
```

---

## 💎 Pro-Tipps:

1. **Kostenlose Bilder:** unsplash.com, pexels.com
2. **Kostenlose Icons:** iconicons.com, heroicons.com
3. **Fonts optimieren:** fonts.google.com
4. **Analytics:** Google Analytics integrieren
5. **Forms:** Nutze formspree.io für einfache Formulare

---

## ✅ Checkliste vor dem Deploy:

- [ ] Alle Texte überprüft
- [ ] Farben angepasst
- [ ] Bilder optimiert
- [ ] Links funktionieren
- [ ] Mobile responsive geprüft
- [ ] Kontaktformular eingerichtet
- [ ] Meta Tags aktualisiert
- [ ] Performance geprüft

---

**Viel Erfolg! 🎉**

Deine Website ist bereit für die Welt! 🚀✨
