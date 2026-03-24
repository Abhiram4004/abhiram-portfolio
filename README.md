# 🚀 Developer Portfolio Template

A premium, futuristic developer portfolio built with **React + Tailwind CSS + Framer Motion**.

## ✨ Features

| Feature | Details |
|---|---|
| 🌌 Particle background | Interactive `@tsparticles/react` with repulse effect |
| ✨ Cursor glow | Custom dual-layer cursor with lerp lag animation |
| 📊 Scroll progress bar | Gradient progress indicator at top of page |
| 🃏 3D hover cards | `mousemove` perspective/rotateX+Y on projects & certificates |
| 📈 Animated skill bars | IntersectionObserver-triggered Framer Motion width fills |
| 🔍 Project modal | Spring-animated popup with full project details |
| 🛸 Floating tech icons | Looping translateY + rotate animations in hero |
| 🌈 Gradient borders | Animated `::before` pseudo-element CSS borders |
| 🔤 Typing animation | Role cycling via `react-type-animation` |
| 🧭 Active nav underline | Framer Motion `layoutId` shared element underline |
| 📱 Fully responsive | Mobile hamburger menu with animated open/close |
| 🎨 Glassmorphism | Backdrop-filter blur cards throughout |

---

## 🛠️ Setup & Run Locally

### Prerequisites
- **Node.js** v16+ ([download](https://nodejs.org))
- **npm** v8+

### Steps

```bash
# 1. Navigate into the project folder
cd portfolio

# 2. Install all dependencies (~2–3 minutes)
npm install

# 3. Start the development server
npm start
```

Open **http://localhost:3000** — hot-reload is enabled.

### Production Build

```bash
npm run build
```

Outputs to `/build` — ready to deploy to Vercel, Netlify, or GitHub Pages.

---

## 📁 Project Structure

```
portfolio/
├── public/
│   └── index.html              # Google Fonts loaded here
├── src/
│   ├── App.js                  # Root component, assembles all sections
│   ├── index.js                # React DOM entry point
│   ├── index.css               # All global styles, animations, CSS variables
│   │
│   ├── data/
│   │   └── portfolioData.js    # ← EDIT THIS to personalise your portfolio
│   │
│   ├── hooks/
│   │   └── usePortfolio.js     # useCursor, useScrollProgress, useActiveSection
│   │
│   └── components/
│       ├── Navbar/             # Sticky glassmorphism navbar
│       ├── Hero/               # Particles, typing, floating icons, CTA
│       ├── Skills/             # 3-column skill categories with progress bars
│       ├── Projects/           # 3D cards + modal popup preview
│       ├── Certificates/       # Grid with 3D hover + animated borders
│       ├── Achievements/       # Alternating left/right timeline
│       ├── Education/          # Vertical timeline with gradient spine
│       ├── Contact/            # Form + animated social cards
│       ├── Footer/             # Social links + back-to-top button
│       └── UI/
│           ├── CursorGlow.jsx  # Mouse tracking dual cursor
│           └── ScrollProgress.jsx
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## ✏️ Personalising Your Portfolio

**All content lives in one file: `src/data/portfolioData.js`**

Edit the following exports:

```js
personalInfo      // Name, bio, email, LinkedIn, GitHub, roles for typing effect
technicalSkills   // Skills with level (0–100) and emoji icon
nonTechnicalSkills
softSkills
projects          // Title, description bullets, tech stack, live/github URLs
certificates      // Title, issuer, date, description, URL
achievements      // Year, title, description, icon emoji
education         // Level, institution, degree, dateRange, description, GPA
```

### Replacing the Photo Placeholder

In `Hero.jsx`, replace the emoji div with:
```jsx
<img
  src="/your-photo.jpg"
  alt="Your Name"
  className="w-full h-full rounded-full object-cover"
/>
```
Put `your-photo.jpg` in the `/public` folder.

### Connecting the Contact Form

The form currently simulates a send. To wire it up, replace the `handleSubmit` function in `Contact.jsx` with your preferred service:

- **EmailJS**: https://emailjs.com (free tier, no backend needed)
- **Formspree**: https://formspree.io
- **Your own API endpoint**

---

## 🎨 Design Tokens

All colours and fonts are defined as CSS variables in `index.css`:

```css
--neon-cyan:   #00f5ff
--neon-purple: #bf00ff
--neon-green:  #00ff88
--neon-pink:   #ff0080
--dark-900:    #030509  /* page background */
```

Change these to instantly re-theme the entire portfolio.

### Fonts Used (loaded via Google Fonts)
- **Syne** — headings (display font)
- **DM Sans** — body text
- **JetBrains Mono** — code/labels

---

## 🚢 Deploying

### Vercel (recommended — free)
```bash
npm install -g vercel
vercel --prod
```

### Netlify
```bash
npm run build
# Drag the /build folder into netlify.com/drop
```

### GitHub Pages
```bash
npm install --save-dev gh-pages
# Add to package.json: "homepage": "https://yourusername.github.io/portfolio"
# Add scripts: "predeploy": "npm run build", "deploy": "gh-pages -d build"
npm run deploy
```

---

## 📦 Dependencies

```
react                     ^18.2.0
react-dom                 ^18.2.0
framer-motion             ^11.0.0    # All animations
react-type-animation      ^3.2.0     # Typing effect in hero
react-icons               ^5.0.0     # Tech/UI icons
react-intersection-observer ^9.5.3   # Scroll-triggered animations
react-scroll              ^1.9.0     # Smooth scroll utility
@tsparticles/react        ^3.0.0     # Particle background
@tsparticles/slim         ^3.0.0     # Slim particle engine
```

---

Built with ☕ and a lot of `border-radius`.
