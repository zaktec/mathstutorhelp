# MathsTutorHelp Website

Astro website for MathsTutorHelp, a Manchester-based maths tuition service run by Mr Sheraz. The site supports parents and students looking for GCSE, IGCSE, KS3, Functional Skills, A-Level, online tuition, in-person tuition, GCSE group classes and beginner coding support.

The project started from AstroWind, but the live source has been customised for MathsTutorHelp. Reference-only template and deployment extras are kept in `extra/`.

## Project Guide

The single source of truth for the business, brand, website content and maintenance is:

- `documents/branding.md`

Use this guide for human handover and as context when giving the project to an AI assistant.

## Tech Stack

- Astro 6
- Tailwind CSS v4
- TypeScript
- AstroWind layout/widget foundation
- `astro-icon` with Tabler icons
- `@astrojs/sitemap`
- `astro-compress`

Node requirement: `>=22.12.0`

## Commands

Run from the project root:

```bash
npm install
npm run dev
npm run build
npm run preview
npm run check
npm run fix
```

## Before Pushing To GitHub

Run these before pushing changes:

```bash
npm run check
npm run build
```

To make Git run them automatically before each push, enable the project hook once:

```bash
npm run setup-hooks
```

After that, `git push` will run the same checks GitHub runs. If formatting fails, use:

```bash
npm run fix:prettier
npm run check
```

Only skip the hook when you are sure you need to:

```bash
git push --no-verify
```

Local development normally runs at:

```text
http://localhost:4321/
```

## Main Folders

- `src/pages/` - public route files and dynamic course pages
- `src/components/` - reusable UI, widget and common components
- `src/layouts/` - shared page layouts
- `src/utils/` - shared data, site details, permalink helpers and course data
- `public/` - static images, robots file and headers
- `documents/` - project documentation
- `extra/` - reference-only files that are not needed for the live Astro site
- `vendor/` - active AstroWind integration support, still required by `astro.config.ts`
- `dist/` - generated build output

## Important Routes

- `/` - homepage
- `/about/` - about Mr Sheraz and MathsTutorHelp
- `/contact/` - phone, WhatsApp and Hai-BL enquiry form link
- `/maths-tuition/` - overview of maths tuition options
- `/online-tuition/` - online maths and coding course hub
- `/pricing/` - pricing page
- `/gallery/` - image gallery
- `/maths-level/` - supported maths levels
- `/gcse-classes/` - GCSE group class overview
- `/gcse-revision-class-higher-manchester/` - GCSE Higher group class
- `/gcse-foundation-maths-tutoring-club-2025/` - GCSE Foundation group class
- `/maths-tutor-levenshulme/` - local SEO page
- `/gcse-maths-tutor-manchester/` - local GCSE SEO page
- `/manchestersummercodingclub/` - summer coding course
- `/online-group-classes/` - online group class enquiry page
- `/privacy/`, `/terms/`, `/safeguarding/` - legal and safeguarding pages

Online course detail routes are generated from `src/pages/[onlineCourse].astro` using `src/utils/onlineCourses.ts`:

- `/year-6-maths/`
- `/ks3-maths/`
- `/gcse-foundation-maths/`
- `/gcse-higher-maths/`
- `/igcse-maths/`
- `/functional-skills-maths/`
- `/a-level-maths/`
- `/coding-problem-solving/`
- `/coding-problem-solving-part-2/`

## Content And Pricing

Current main pricing is stored in `src/utils/siteDetails.ts`:

- In-person one-to-one tuition: `£30/hr`
- Online one-to-one tuition: `£25/hr`
- GCSE group classes: `£20 per session`

Online course package pricing is stored separately in `src/utils/onlineCourses.ts`:

- Bronze: `£15/month`
- Silver: `£30/month`
- Gold: `£60/month`

Keep online one-to-one tuition and online course packages separate in wording.

## Enquiry Paths

- Phone: `07860 248 525`
- WhatsApp: `https://wa.me/447860248525`
- Hai-BL enquiry form: `https://hai-bl.com/onboarding/interest-form`
- Student login: `https://hai-bl.com/auth/login`
- Consultation booking: `https://calendar.app.google/VJ6tgEKfsUZAncDe9`

Hai-BL blocks iframe embedding, so the contact page links to the form instead of embedding it.

## Deployment Notes

The site is configured for the custom domain root, `https://mathstutorhelp.com/`. Use `getPermalink()` for internal links and `getAsset()` for public assets so links keep working if the deployment base changes later.

Build output is generated into `dist/`:

```bash
npm run build
```

## Maintenance Notes

- Keep parent-facing copy calm, clear and trustworthy.
- Use UK spelling and “maths”.
- Avoid generic AstroWind/demo wording.
- Do not add files under `src/pages/` unless they should become public routes.
- Keep reference-only files in `extra/`.
- Keep footer categories balanced.
- Keep prices in `src/utils/siteDetails.ts` and online course package prices in `src/utils/onlineCourses.ts`.
