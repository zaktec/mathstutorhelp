# MathsTutorHelp AI Project Brief

_Last revised: 26 June 2026_

Use this document as the first context file when asking an AI assistant to work on this project.

## Project Summary

MathsTutorHelp is a static Astro website for a Manchester-based maths tuition service run by Mr Sheraz. The site helps parents and students understand the available tuition routes, enquire through Hai-BL, and find relevant GCSE, IGCSE, KS3, Functional Skills, A-Level, online tuition, in-person tuition, GCSE group class, and beginner coding support.

The project began from AstroWind, but the active site has been customised for MathsTutorHelp. Do not assume generic AstroWind demo pages, copy, layouts, colours, or images are part of the live site.

## What The Brand Should Feel Like

The site should feel:

- Clear
- Calm
- Trustworthy
- Practical
- Parent-friendly
- Professional but not cold

Use UK English. Always write `maths`, not `math`.

Avoid:

- Overly salesy claims
- Generic template copy
- Unproven “best tutor” language
- Confusing online one-to-one tuition with online course packages
- Purple/indigo AstroWind-style gradients

## Main Audience

- Parents looking for reliable maths tuition in Manchester
- GCSE and IGCSE students needing exam support
- KS3 students building foundations
- A-Level students needing topic help
- Functional Skills and adult learners
- Families looking for online one-to-one tuition
- Students interested in beginner coding and logical problem solving

## Core Offer

Primary offer:

> Structured maths tuition in Manchester and online for KS3, GCSE, IGCSE, Functional Skills and A-Level students.

Secondary offer:

> Online maths and beginner coding courses are available, but the brand should remain maths tuition first.

## Tech Stack

- Astro 6
- Tailwind CSS v4
- TypeScript
- AstroWind layout/widget foundation
- `astro-icon`
- `@astrojs/sitemap`
- `astro-compress`
- `sharp` / `unpic`

Node requirement:

```bash
>=22.12.0
```

Main commands:

```bash
npm run dev
npm run build
npm run preview
npm run check
npm run fix
```

## Important Project Rules

- Run commands from `/home/sheraz/code/mathstutorhelp`.
- The site is configured for the custom domain root, `https://mathstutorhelp.com/`.
- Blog pages include topic filters, pagination, related articles, social sharing and an RSS feed at `/rss.xml`.
- Decap CMS is mounted at `/admin/` for legal and safeguarding content. Production login requires a GitHub OAuth provider; local editing can use the Decap proxy.
- Use `getPermalink()` for internal links.
- Use `getAsset()` for public assets.
- Avoid hardcoded internal URLs; prefer `getPermalink()` and `getAsset()` so links stay safe if the deployment base changes.
- Do not put files in `src/pages/` unless they should become public routes.
- Keep reference-only files in `extra/`.
- Keep active site code in `src/`, `public/`, `vendor/`, and root config files.
- `vendor/` is active and required by `astro.config.ts`.
- `dist/`, `.astro/`, and `node_modules/` are generated/dependency folders and should not be edited manually.

## Active Folder Map

| Path              | Purpose                                                |
| ----------------- | ------------------------------------------------------ |
| `src/pages/`      | Public routes and dynamic route templates              |
| `src/components/` | Reusable UI, common and widget components              |
| `src/layouts/`    | Shared page wrappers                                   |
| `src/utils/`      | Site details, course data, permalink and image helpers |
| `src/assets/`     | Astro-processed styles, favicons and image assets      |
| `public/`         | Static public assets copied to the build               |
| `documents/`      | Project documentation                                  |
| `extra/`          | Reference-only and archived files                      |
| `vendor/`         | Active AstroWind integration support                   |

## Extra Folder Rules

`extra/` is for files that may be useful later but are not needed by the live site.

Current important areas:

- `extra/agent-notes/` - archived AI-agent guidance files and skills
- `extra/deployment/` - archived deployment/template files
- `extra/editor/` - archived VS Code/template editor config
- `extra/archive/unused-astrowind/` - deduplicated AstroWind template material
- `extra/archive/unused-site-files/` - files moved out of the live site after an import/reference audit

Before restoring anything from `extra/`, check that it still matches the current brand, routes, and base path.

## Current Main Routes

| Route                                        | Source                                                     | Purpose                            |
| -------------------------------------------- | ---------------------------------------------------------- | ---------------------------------- |
| `/`                                          | `src/pages/index.astro`                                    | Homepage                           |
| `/about/`                                    | `src/pages/about.astro`                                    | About Mr Sheraz                    |
| `/contact/`                                  | `src/pages/contact.astro`                                  | Phone, WhatsApp and Hai-BL enquiry |
| `/maths-tuition/`                            | `src/pages/maths-tuition.astro`                            | Maths tuition overview             |
| `/online-tuition/`                           | `src/pages/online-tuition.astro`                           | Online maths and coding course hub |
| `/online-tuitions/`                          | `src/pages/online-tuitions.astro`                          | Redirect to `/online-tuition/`     |
| `/pricing/`                                  | `src/pages/pricing.astro`                                  | Pricing overview                   |
| `/gallery/`                                  | `src/pages/gallery.astro`                                  | Gallery                            |
| `/maths-level/`                              | `src/pages/maths-level.astro`                              | Supported levels                   |
| `/gcse-classes/`                             | `src/pages/gcse-classes.astro`                             | GCSE group classes                 |
| `/gcse-revision-class-higher-manchester/`    | `src/pages/gcse-revision-class-higher-manchester.astro`    | GCSE Higher group class            |
| `/gcse-foundation-maths-tutoring-club-2025/` | `src/pages/gcse-foundation-maths-tutoring-club-2025.astro` | GCSE Foundation group class        |
| `/maths-tutor-levenshulme/`                  | `src/pages/maths-tutor-levenshulme.astro`                  | Local SEO page                     |
| `/gcse-maths-tutor-manchester/`              | `src/pages/gcse-maths-tutor-manchester.astro`              | Local GCSE SEO page                |
| `/manchestersummercodingclub/`               | `src/pages/manchestersummercodingclub.astro`               | Summer coding course               |
| `/online-group-classes/`                     | `src/pages/online-group-classes.astro`                     | Online group class enquiry         |
| `/resources/`                                | `src/pages/resources.astro`                                | External resources                 |
| `/blog/`                                     | `src/pages/blog/index.astro`                               | Blog index                         |
| `/privacy/`                                  | `src/pages/privacy.md`                                     | Privacy policy                     |
| `/terms/`                                    | `src/pages/terms.md`                                       | Terms and conditions               |
| `/safeguarding/`                             | `src/pages/safeguarding.md`                                | Safeguarding information           |

Dynamic online course routes are generated by `src/pages/[onlineCourse].astro` from `src/utils/onlineCourses.ts`.

Generated routes:

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

Header and footer navigation live in `src/navigation.ts`.

Header:

- Home
- Maths Tuition
- Online Courses
- GCSE Classes
- About
- Contact
- Student Login action

Footer categories:

- Tuition
- Classes
- Local Areas
- Booking
- Resources
- Legal

Keep the header simple. Put supporting service links in the footer instead.

## Pricing And Enquiry Data

Shared contact details, booking URLs, CTA labels and main tuition prices live in:

```text
src/utils/siteDetails.ts
```

Current main prices:

- In-person one-to-one tuition: `£30/hr`
- Online one-to-one tuition: `£25/hr`
- GCSE group classes: `£20 per session`

Online course and package content lives in:

```text
src/utils/onlineCourses.ts
```

Current online course package prices:

- Bronze: `£15/month`
- Silver: `£30/month`
- Gold: `£60/month`

Enquiry links:

- Phone: `07860 248 525`
- WhatsApp: `https://wa.me/447860248525`
- Hai-BL enquiry form: `https://hai-bl.com/onboarding/interest-form`
- Student login: `https://hai-bl.com/auth/login`
- Consultation booking: `https://calendar.app.google/VJ6tgEKfsUZAncDe9`

Hai-BL blocks iframe embedding, so link to the form rather than embedding it.

## Components To Know

| Component                       | Use                                            |
| ------------------------------- | ---------------------------------------------- |
| `HomeHero.astro`                | Homepage hero with tutor card                  |
| `Hero.astro`                    | General image hero                             |
| `HeroText.astro`                | Text-only hero                                 |
| `Features.astro`                | Icon/card grids                                |
| `Features2.astro`               | Alternative feature layout                     |
| `Content.astro`                 | Text/image content sections                    |
| `FAQs.astro`                    | FAQ section and FAQ JSON-LD                    |
| `Gallery.astro`                 | Gallery and lightbox                           |
| `CallToAction.astro`            | CTA sections                                   |
| `Header.astro` / `Footer.astro` | Site shell                                     |
| `StructuredData.astro`          | LocalBusiness / EducationalOrganization schema |

Some older AstroWind components were moved to `extra/archive/unused-site-files/` after an unused-file audit. Do not reintroduce them unless there is a clear need.

## Design Direction

Main palette:

| Purpose      | Colour        | Hex       |
| ------------ | ------------- | --------- |
| Primary      | Navy          | `#00387D` |
| Secondary    | Teal          | `#0F766E` |
| Accent       | Warm yellow   | `#F7B200` |
| Accent hover | Deeper yellow | `#D99800` |
| Heading text | Ink           | `#101828` |
| Body text    | Slate         | `#1D2939` |
| Muted text   | Soft slate    | `#475467` |
| Footer       | Ink navy      | `#0B1F3A` |

Use yellow sparingly for important CTAs and emphasis.

## Content Rules

- Keep copy direct and easy for parents to understand.
- Keep page titles specific and local where helpful.
- Keep prices in shared data files where possible.
- Avoid repeating full price tables on service overview pages; link to `/pricing/`.
- Keep online one-to-one tuition and online course packages separate.
- Use real testimonials only when approved and authentic.
- Keep class dates and cohort wording checked before publishing.
- Keep legal and safeguarding pages reviewed when policies change.

## SEO Rules

- Use Manchester and Levenshulme terms naturally.
- Keep page metadata specific.
- Use FAQ sections where they genuinely answer user questions.
- Avoid duplicate pages with near-identical copy.
- Check external images and links before launch.
- Build and inspect generated routes when changing routing or navigation.

## Verification Before Finishing Work

For most changes, run:

```bash
npm run build
```

For larger code/content changes, run:

```bash
npm run check
npm run build
```

The build currently generates 37 pages.

## Suggested AI Workflow

When an AI assistant starts work:

1. Read this file.
2. Read `README.md`.
3. Read `documents/branding.md` for tone and design decisions.
4. Read `documents/website-technical-analysis.md` for deeper technical context.
5. Read `documents/live-website-content-audit.md` before reusing anything from the old/live WordPress site.
6. Inspect the specific files involved before editing.
7. Keep changes small, brand-consistent, and base-path safe.
8. Run `npm run build` before reporting completion.
