# MathsTutorHelp Website - Technical Analysis

_Last revised: 21 June 2026_

## Project Overview

This is a static Astro website for MathsTutorHelp, a Manchester-based maths tuition service. The site is parent-focused and covers:

- KS3, GCSE, IGCSE, Functional Skills and A-Level maths tuition
- Online one-to-one maths tuition
- In-person tuition in Manchester
- GCSE Foundation and Higher group classes in Levenshulme
- Online maths and coding courses
- Beginner Python coding support

The project began from AstroWind, but the active route tree, content, metadata, images, footer and legal pages have been customised for MathsTutorHelp.

## Technology

| Technology | Purpose |
| --- | --- |
| Astro 6 | Static site framework and file-based routing |
| Tailwind CSS v4 | Styling system |
| TypeScript | Shared data, config and helpers |
| AstroWind | Layout/widget foundation |
| astro-icon | Tabler icon rendering |
| @astrojs/sitemap | Sitemap generation |
| astro-compress | Production HTML/CSS compression |
| sharp / unpic | Image handling |

Main commands:

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start local development |
| `npm run build` | Build static site into `dist/` |
| `npm run preview` | Preview the production build |
| `npm run check` | Run Astro, ESLint and Prettier checks |
| `npm run fix` | Apply automatic lint/format fixes |

Node requirement: `>=22.12.0`.

## Current Folder Structure

| Folder | Purpose |
| --- | --- |
| `src/pages/` | Public routes and dynamic route templates |
| `src/components/` | UI, common and widget components |
| `src/layouts/` | Shared page wrappers |
| `src/utils/` | Permalink helpers, shared site details and course data |
| `public/` | Static files copied to build output |
| `documents/` | Project documentation |
| `extra/` | Reference-only extras not needed for the live Astro site |
| `vendor/` | Active AstroWind integration support |
| `dist/` | Generated production output |

`extra/` currently holds deployment/template extras, old archive notes and agent notes. Keep files there if they are useful for reference but not part of the live website.

## Active Routes

The site is served under `/mathstutorhelp/`, so internal links should use `getPermalink()` and public assets should use `getAsset()`.

| Route | Source | Purpose |
| --- | --- | --- |
| `/` | `src/pages/index.astro` | Trimmed homepage with tutor intro, GCSE classes, tuition options, prices, local SEO and CTA |
| `/about/` | `src/pages/about.astro` | About Mr Sheraz and teaching approach |
| `/contact/` | `src/pages/contact.astro` | Phone, WhatsApp and Hai-BL enquiry form link |
| `/maths-tuition/` | `src/pages/maths-tuition.astro` | Service overview without repeated prices |
| `/online-tuition/` | `src/pages/online-tuition.astro` | Online maths and coding course hub |
| `/online-tuitions/` | `src/pages/online-tuitions.astro` | Redirect to `/online-tuition/` |
| `/pricing/` | `src/pages/pricing.astro` | Pricing overview |
| `/gallery/` | `src/pages/gallery.astro` | Image gallery |
| `/maths-level/` | `src/pages/maths-level.astro` | Supported maths levels |
| `/gcse-classes/` | `src/pages/gcse-classes.astro` | GCSE group class overview |
| `/gcse-revision-class-higher-manchester/` | `src/pages/gcse-revision-class-higher-manchester.astro` | GCSE Higher group class |
| `/gcse-foundation-maths-tutoring-club-2025/` | `src/pages/gcse-foundation-maths-tutoring-club-2025.astro` | GCSE Foundation group class |
| `/maths-tutor-levenshulme/` | `src/pages/maths-tutor-levenshulme.astro` | Local SEO page |
| `/gcse-maths-tutor-manchester/` | `src/pages/gcse-maths-tutor-manchester.astro` | GCSE local SEO page |
| `/manchestersummercodingclub/` | `src/pages/manchestersummercodingclub.astro` | Summer Python coding course |
| `/online-group-classes/` | `src/pages/online-group-classes.astro` | Short online group class enquiry page |
| `/resources/` | `src/pages/resources.astro` | External maths resources |
| `/blog/` | `src/pages/blog/index.astro` | Blog index |
| `/privacy/` | `src/pages/privacy.md` | Privacy policy |
| `/terms/` | `src/pages/terms.md` | Terms and conditions |
| `/safeguarding/` | `src/pages/safeguarding.md` | Safeguarding information |

Generated online course routes:

- `/year-6-maths/`
- `/ks3-maths/`
- `/gcse-foundation-maths/`
- `/gcse-higher-maths/`
- `/igcse-maths/`
- `/functional-skills-maths/`
- `/a-level-maths/`
- `/coding-problem-solving/`
- `/coding-problem-solving-part-2/`

## Navigation

Header navigation is defined in `src/navigation.ts`:

- Home
- Maths Tuition
- Online Courses
- GCSE Classes
- About
- Contact
- Student Login action

Footer navigation is also in `src/navigation.ts`. It is balanced into six categories with four links each:

- Tuition
- Classes
- Local Areas
- Booking
- Resources
- Legal

The footer brand/description block has been removed so the footer focuses on navigation links.

## Shared Data

`src/utils/siteDetails.ts` stores contact details, booking URLs, CTA labels and main tuition prices.

Current main prices:

- In-person one-to-one: `£30/hr`
- Small group classes: `£20 per session`
- Online one-to-one: `£25/hr`

`src/utils/onlineCourses.ts` stores online course cards, course detail content and Bronze/Silver/Gold package data.

Current online course packages:

- Bronze: `£15/month`, content + WhatsApp messaging support only
- Silver: `£30/month`, 1 hour live tutoring per month + content + messaging support
- Gold: `£60/month`, 2 hours live tutoring per month + content + messaging support

Keep online one-to-one tuition and online course package wording separate.

## Main Components

| Component | Purpose |
| --- | --- |
| `HomeHero.astro` | Homepage hero with tutor card |
| `Hero.astro` | General image hero |
| `HeroText.astro` | Text-only hero |
| `Features.astro` | Icon/card grid sections |
| `Features2.astro` | Alternative feature layout |
| `Content.astro` | Text/image content sections |
| `FAQs.astro` | FAQ section with FAQ structured data |
| `Gallery.astro` | Responsive gallery with lightbox |
| `CallToAction.astro` | CTA sections |
| `Header.astro` / `Footer.astro` | Shared site shell components |
| `StructuredData.astro` | Local business / education schema |

## SEO And Metadata

Current strengths:

- Specific titles and descriptions on key pages
- Local terms such as Manchester and Levenshulme used naturally
- Dedicated local SEO pages for Levenshulme and GCSE Maths Tutor Manchester
- FAQ JSON-LD generated from FAQ sections
- LocalBusiness / EducationalOrganization structured data included in the layout
- Sitemap generated by `@astrojs/sitemap`
- Main hotlinked WordPress/Unsplash images have been replaced with local assets

Things to keep checking:

- Class dates and course schedules as each cohort changes
- Any future external image links before launch
- Google Business Profile and Search Console setup
- Real parent testimonials only when approved and authentic

## Content Rules

- Use UK spelling and “maths”.
- Keep copy calm, practical and parent-friendly.
- Avoid repeating prices on service overview pages; link to `/pricing/` where possible.
- Do not use “online tuition” and “online courses” interchangeably when pricing differs.
- Keep Bronze/Silver/Gold package wording in `src/utils/onlineCourses.ts`.
- Keep legal wording reviewed before launch if policies change.

## Build Status

Recent builds pass with:

```bash
npm run build
```

The generated site contains 37 pages.
