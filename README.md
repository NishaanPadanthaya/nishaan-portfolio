# Nishaan Jeevan Padanthaya — Portfolio

A responsive personal portfolio for AI/ML engineering, applied research, and software projects. Built as a static-first Next.js application for straightforward deployment to Vercel.

## Stack

- Next.js 16 App Router
- React 19 and TypeScript
- Responsive CSS design system with reduced-motion support
- Self-hosted variable fonts using the Next.js font optimizer
- Static SVG and CSS diagrams; no runtime API or WebGL dependency

## Features

- Portfolio covering about, experience, six projects, published research, skills, education, achievements, and contact
- Responsive navigation with active section state and mobile menu
- Interactive graph-inspired hero illustration with reduced-motion accommodations
- Project diagrams show each system's inputs, main processing stages, and outputs
- Publication titles link to the corresponding paper PDFs, opening in a new tab
- Project and publication content maintained as structured TypeScript data
- SEO, Open Graph and Twitter titles/descriptions, and a custom favicon

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
  papers/              Published research PDFs
```

## Updating content

Edit `src/data/portfolio.ts` to update profile details, projects, skill groups, publications, or achievements. AVEVA experience copy is kept general for public use; update it in `src/app/page.tsx` only with information approved for publication.

## Project links

CivicPulse links directly to its repository. Other project cards currently link to the public GitHub profile; update their `href` values in `src/data/portfolio.ts` when direct repository URLs are available.
