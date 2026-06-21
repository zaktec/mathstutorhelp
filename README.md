# MathsTutorHelp Website

Astro website for MathsTutorHelp, a Manchester-based maths tuition service run by Mr Sheraz. The site is built for parents and students looking for GCSE, IGCSE, KS3, Functional Skills, A-Level, online tuition, in-person tuition, GCSE group classes and beginner coding support.

The project started from AstroWind, but the live source has been cleaned and customised for MathsTutorHelp.

## Tech Stack

- Astro 6
- Tailwind CSS v4
- TypeScript
- AstroWind layout/widget foundation
- `astro-icon` with Tabler icons
- `@astrojs/sitemap`
- `astro-compress`

Node requirement: `>=22.12.0`

## Common Commands

Run commands from the project root:

```bash
npm install
npm run dev
npm run build
npm run preview
npm run check
npm run fix
```

Local development normally runs at:

```text
http://localhost:4321/mathstutorhelp/
```

## Main Pages

Important routes:

- `/` - homepage
- `/about/` - about Mr Sheraz and MathsTutorHelp
- `/contact/` - call, WhatsApp and Hai-BL enquiry form link
- `/maths-tuition/` - overview of maths tuition options
- `/online-tuition/` - online tuition overview
- `/online-tuitions/` - redirect to `/online-tuition/`
- `/pricing/` - pricing page
- `/gallery/` - image gallery with click-to-view lightbox
- `/maths-level/` - supported maths levels
- `/gcse-revision-class-higher-manchester/` - GCSE Higher group class
- `/gcse-foundation-maths-tutoring-club-2025/` - GCSE Foundation group class
- `/manchestersummercodingclub/` - summer coding course
- `/online-group-classes/` - short online group classes enquiry page

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

## Key Files

- `src/pages/` - route files
- `src/pages/index.astro` - homepage
- `src/pages/[onlineCourse].astro` - shared online course detail template
- `src/utils/onlineCourses.ts` - online course data and package data
- `src/navigation.ts` - header/footer links, social links and footer text
- `src/components/widgets/HomeHero.astro` - homepage hero
- `src/components/widgets/Gallery.astro` - gallery grid and lightbox
- `src/components/CustomStyles.astro` - brand CSS variables
- `src/assets/styles/tailwind.css` - Tailwind theme tokens and button utilities
- `documents/` - project documentation
- `archive/unused-astrowind/` - notes for archived template/demo files

## Content And CTAs

Current primary enquiry paths:

- Phone: `07860 248 525`
- WhatsApp: `https://wa.me/447860248525`
- Hai-BL enquiry form: `https://hai-bl.com/onboarding/interest-form`
- Login button: `https://hai-bl.com/auth/login`
- Consultation booking: `https://calendar.app.google/VJ6tgEKfsUZAncDe9`

Hai-BL blocks iframe embedding, so the contact page links to the form instead of embedding it.

## Deployment Notes

The site is configured for a base path under `/mathstutorhelp/`. Use `getPermalink()` or `getAsset()` for internal links and public assets so links work on GitHub Pages and local development.

Build output is generated into `dist/`.

```bash
npm run build
```

## Maintenance Notes

- Keep parent-facing copy calm, clear and trustworthy.
- Use UK spelling and “maths”.
- Avoid generic AstroWind/demo wording.
- Do not add new live pages under `src/pages/` unless they should become public routes.
- Put reference-only or unused files outside `src/pages/`, for example under `archive/`.
- Keep prices and online course cards consistent with `src/utils/onlineCourses.ts` where relevant.
- Rewrite `src/pages/privacy.md` and `src/pages/terms.md` before launch because they still contain template legal wording.
