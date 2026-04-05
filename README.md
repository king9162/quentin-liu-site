# Quentin Liu — Personal Brand Site

A premium personal website built with React, Tailwind CSS, and Framer Motion.
Dark luxury aesthetic: deep ink backgrounds, warm champagne gold accents,
editorial Cormorant Garamond display type, and cinematic scroll animations.

---

## Tech Stack

| Layer        | Technology                          |
|--------------|-------------------------------------|
| Framework    | React 18                            |
| Styling      | Tailwind CSS (custom config)        |
| Animation    | Framer Motion 11                    |
| Fonts        | Cormorant Garamond + DM Sans + DM Mono (Google Fonts) |
| Deployment   | Vercel (recommended)                |

---

## Project Structure

```
quentin-liu-site/
├── public/
│   └── index.html            ← HTML shell + Google Fonts import
├── src/
│   ├── components/
│   │   ├── Cursor.jsx         ← Custom gold cursor (dot + ring)
│   │   ├── Navbar.jsx         ← Sticky transparent→solid navbar
│   │   ├── Hero.jsx           ← Full-screen cinematic hero
│   │   ├── About.jsx          ← Executive intro + stats grid
│   │   ├── Experience.jsx     ← Interactive accordion timeline
│   │   ├── Work.jsx           ← Case study project cards
│   │   ├── Skills.jsx         ← Capability pillars + proficiency bars
│   │   ├── Education.jsx      ← Minimal education cards
│   │   ├── Contact.jsx        ← Premium contact section
│   │   └── Footer.jsx         ← Minimal footer
│   ├── hooks/
│   │   ├── useScrollReveal.js ← Intersection observer hook
│   │   └── useNavScroll.js    ← Navbar scroll state hook
│   ├── App.jsx                ← Root component
│   ├── index.js               ← Entry point
│   └── index.css              ← Tailwind base + global styles
├── tailwind.config.js         ← Custom colors, fonts, spacing
├── postcss.config.js
├── vercel.json                ← Vercel deployment config
└── package.json
```

---

## Local Development

### 1. Install dependencies

```bash
cd quentin-liu-site
npm install
```

### 2. Start dev server

```bash
npm start
```

Opens at `http://localhost:3000`

---

## Deploy to GitHub + Vercel

### Step 1 — Create GitHub repository

1. Go to [github.com/new](https://github.com/new)
2. Name it `quentin-liu-site` (or any name you prefer)
3. Set visibility to **Public** or **Private**
4. Do NOT initialize with README (you already have one)
5. Click **Create repository**

### Step 2 — Push your code

```bash
cd quentin-liu-site
git init
git add .
git commit -m "Initial commit — Quentin Liu personal site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/quentin-liu-site.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

### Step 3 — Deploy to Vercel

**Option A — Vercel Dashboard (easiest)**

1. Go to [vercel.com](https://vercel.com) and sign in (use GitHub)
2. Click **Add New → Project**
3. Select your `quentin-liu-site` repository
4. Vercel auto-detects Create React App settings
5. Click **Deploy**
6. Your site is live in ~60 seconds at `https://quentin-liu-site.vercel.app`

**Option B — Vercel CLI**

```bash
npm install -g vercel
vercel login
vercel --prod
```

### Step 4 — Add a custom domain (optional)

1. In Vercel dashboard → your project → **Settings → Domains**
2. Add your domain (e.g. `quentinliu.com`)
3. Follow DNS setup instructions for your domain registrar

---

## Customization Guide

### Change personal info

All personal content lives directly in the component files. No separate data file — this keeps things simple.

| What to change         | File                        |
|------------------------|-----------------------------|
| Name, headline, CTAs   | `src/components/Hero.jsx`   |
| Bio text, stats        | `src/components/About.jsx`  |
| Jobs, descriptions     | `src/components/Experience.jsx` |
| Project cards          | `src/components/Work.jsx`   |
| Skills list            | `src/components/Skills.jsx` |
| Schools                | `src/components/Education.jsx` |
| Email, LinkedIn, phone | `src/components/Contact.jsx` |
| Initials in navbar     | `src/components/Navbar.jsx` |

### Change colors

All colors are defined in `tailwind.config.js`:

```js
colors: {
  ink: { ... },      // Background / text scale (dark grays)
  gold: {
    DEFAULT: "#b89d6a",   // Main gold accent
    light: "#d4bc8e",     // Hover gold
    dark: "#8a7248",      // Muted gold
    muted: "#6b5a3e",     // Border gold
  },
  cream: "#f7f3ec",       // Headline text color
}
```

To switch to a blue accent (for example):
- Replace all gold hex values with your chosen hue
- Update `text-gold-gradient` in `index.css`

### Change fonts

Fonts are loaded in `public/index.html`. To swap:
1. Replace the Google Fonts URL with your chosen fonts
2. Update `fontFamily` in `tailwind.config.js`:
```js
fontFamily: {
  display: ["'Your Display Font'", "Georgia", "serif"],
  body: ["'Your Body Font'", "Helvetica Neue", "sans-serif"],
}
```

### Add a profile photo

In `About.jsx`, inside the right column div, add:
```jsx
<div className="aspect-square overflow-hidden mb-10">
  <img
    src="/your-photo.jpg"
    alt="Quentin Liu"
    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
  />
</div>
```

Place your photo in the `public/` folder.

### Add/remove sections

In `App.jsx`, simply add or remove the imported section components. The navbar links are in `Navbar.jsx` in the `navLinks` array — update those to match.

---

## Performance Notes

- All fonts are preconnected in `public/index.html` for faster loading
- Framer Motion animations use `once: true` so they only trigger once
- Scroll events use `{ passive: true }` for smooth performance
- The custom cursor is hidden on mobile automatically via CSS media queries (add `@media (pointer: coarse) { * { cursor: auto; } }` to `index.css` if needed)

---

## License

Personal use. All content © Quentin Liu.
