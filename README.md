# Nishaan Padanthaya — Portfolio

A responsive personal portfolio for AI/ML engineering, applied research, and software projects. Built as a static-first Next.js application for straightforward deployment to Vercel.

## Stack

- Next.js 16 App Router
- React 19 and TypeScript
- CSS with responsive layouts, custom motion, and reduced-motion support
- Static SVG graphics and a CSS/SVG network illustration; no runtime API or WebGL dependency

## Features

- Editorial portfolio covering about, experience, projects, research, skills, education, recognition, and contact
- Responsive navigation with active section state and mobile menu
- Interactive graph-inspired hero illustration with reduced-motion accommodations
- Project and publication content maintained as structured TypeScript data
- Résumé download served as a static public asset
- SEO, Open Graph, Twitter card, favicon, and share image metadata

## Run locally

Requires Node.js compatible with the version required by Next.js 16.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Deploy to Vercel

Import this repository into Vercel and use the detected Next.js settings. No environment variables are required. Every route and asset is served by the standard Next.js deployment.

## Project structure

```text
src/
  app/
    globals.css       Design system and responsive styles
    layout.tsx        Site metadata and root layout
    page.tsx          Portfolio sections and interactions
  data/
    portfolio.ts      Projects, skills, publications, and achievements
public/
  favicon.svg
  og-cover.svg
  Nishaan_Padanthaya_Resume.pdf
```

## Updating content

Edit `src/data/portfolio.ts` to update profile details, projects, skill groups, publications, or achievements. AVEVA experience copy is kept general for public use; update it in `src/app/page.tsx` only with information approved for publication. Replace the public résumé PDF when a new version is ready.

## Project links

The selected projects are summarized from the supplied résumé. GitHub project repository URLs were not available in that source, so project links lead to the public GitHub profile; update them with direct repository links in `src/data/portfolio.ts` when confirmed.
