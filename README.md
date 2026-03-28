# OneDoc – Astro Website

## Quick start

```bash
npm install
npm run dev
```

## Setup (first time)

```bash
npm create astro@latest onedoc -- --template minimal --typescript strict --install --git
cd onedoc
npx astro add tailwind
# Then copy all files from this zip into src/
npm run dev
```

## Structure

```
src/
├── components/       # Header, Footer, Hero, Services, ContactForm
├── content/
│   ├── blog/         # Add .md files here for blog posts
│   └── portfolio/    # Add .md files here for case studies
├── i18n/             # pl.ts and en.ts translation strings
├── layouts/          # BaseLayout, BlogLayout
└── pages/
    ├── index.astro         # PL homepage
    ├── blog/               # PL blog
    ├── portfolio/          # PL portfolio
    ├── kontakt.astro       # PL contact
    └── en/                 # EN versions of all pages
```

## Adding a blog post

Create a new file in `src/content/blog/`:

```markdown
---
title: "Post title"
date: 2026-04-01
description: "Short description"
lang: pl          # or en
tags: ["tag1"]
draft: false
---

Your content here...
```

## Deployment (Netlify)

1. Push to GitHub
2. Connect repo to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Contact form works automatically via Netlify Forms
