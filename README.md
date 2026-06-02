# Arlo — Waitlist Landing Page

A glassmorphic "coming soon" / waitlist page for Arlo, built with **Next.js (App Router)**, **Tailwind CSS v4**, and **Framer Motion**.

## Features

- Continuous page-wide gradient (peach + sage glows fading down into white)
- Frosted-glass surfaces throughout
- Scroll-reveal + hover-lift animations, gently floating preview cards
- Working multi-step survey (4 steps, animated transitions)
- Waitlist email capture via a `/api/waitlist` route backed by **Resend**

## Getting started

```bash
npm install
cp .env.local.example .env.local   # fill in your Resend keys (optional for dev)
npm run dev
```

Open http://localhost:3000.

> The original static mockup is preserved at `reference/index.html`.

## Waitlist backend (Resend)

1. Create an account at [resend.com](https://resend.com) and an API key.
2. Create an **Audience** and copy its ID.
3. Put both in `.env.local`:
   ```
   RESEND_API_KEY=re_...
   RESEND_AUDIENCE_ID=...
   ```

If `RESEND_API_KEY` is **not** set, the API route returns a stubbed success so
the UI works end-to-end during development — no signups are stored.

## Project structure

```
app/
  layout.jsx            # fonts, metadata
  page.jsx              # composes the sections
  globals.css           # gradient + .glass utilities (Tailwind v4)
  api/waitlist/route.js # POST handler → Resend
components/
  Hero.jsx              # headline + email form
  FeatureSection.jsx    # glass card, phone, floating cards, feature pills
  PhoneMockup.jsx       # the in-app screenshot mockup
  SurveySection.jsx     # animated 4-step survey
  FooterValues.jsx      # three value props
reference/index.html    # original static design
```

## Deploy

Deploy to [Vercel](https://vercel.com) (zero-config for Next.js). Add the same
environment variables in the project settings.
