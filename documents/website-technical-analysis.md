# MathsTutorHelp Website - Technical Analysis

## 1. Project Overview

This project is a static Astro website for MathsTutorHelp, a Manchester-based maths tuition service. It presents maths support for KS3, GCSE, IGCSE, Functional Skills and A-Level students, plus online tuition, in-person tuition, GCSE group classes and beginner coding support.

The site was originally based on AstroWind. The active source has now been customised for MathsTutorHelp and the old demo home, landing, service and blog pages have been removed from the live route tree.

## 2. Technology

| Technology | Purpose |
| --- | --- |
| Astro 6 | Static site framework, routing, page rendering and build output. |
| Tailwind CSS v4 | Main styling system and responsive utilities. |
| TypeScript | Used in config, navigation and shared course data. |
| AstroWind | Base layout/component foundation. |
| astro-icon | Tabler icon rendering. |
| @astrojs/sitemap | Sitemap generation. |
| astro-compress | HTML/CSS compression in production builds. |
| unpic / sharp | Image handling in the shared image component. |

Main commands:

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local dev server. |
| `npm run build` | Build the static site into `dist/`. |
| `npm run preview` | Preview the production build. |
| `npm run check` | Run Astro, ESLint and Prettier checks. |
| `npm run fix` | Apply automatic lint/format fixes. |

Node requirement: `>=22.12.0`.

## 3. Current Folder Structure

| Folder | Purpose |
| --- | --- |
| `src/pages/` | Public route files and dynamic route templates. |
| `src/components/` | Reusable UI, common and widget components. |
| `src/layouts/` | Shared page wrappers. |
| `src/utils/` | Permalink helpers, frontmatter helpers and shared course data. |
| `src/assets/` | Source images, favicons and global styles. |
| `public/` | Static files copied directly to build output. |
| `documents/` | Project documentation. |
| `archive/` | Reference-only notes/files that should not become public routes. |
| `vendor/` | AstroWind integration support. |
| `dist/` | Generated production output. |

The old `src/data/post`, `src/components/blog`, `src/pages/homes`, `src/pages/landing`, `src/pages/[...blog]` and `src/pages/services.astro` template areas have been removed from the active source.

## 4. Active Pages And Routes

Astro uses file-based routing. The site is served under the configured base path `/mathstutorhelp/`, so internal links should use `getPermalink()` and assets should use `getAsset()`.

| File | Route | Purpose |
| --- | --- | --- |
| `src/pages/index.astro` | `/` | Homepage with tutor intro, group classes, tuition services, prices, testimonials, FAQs and CTA. |
| `src/pages/about.astro` | `/about/` | About Mr Sheraz and MathsTutorHelp. |
| `src/pages/contact.astro` | `/contact/` | Phone, WhatsApp and Hai-BL enquiry form link. |
| `src/pages/maths-tuition.astro` | `/maths-tuition/` | Overview of online, in-person, group and A-Level tuition. |
| `src/pages/online-tuition.astro` | `/online-tuition/` | Online tuition overview with nine course cards. |
| `src/pages/online-tuitions.astro` | `/online-tuitions/` | Redirect page to `/online-tuition/`. |
| `src/pages/[onlineCourse].astro` | Multiple course routes | Shared detail template for online course pages. |
| `src/pages/online-group-classes.astro` | `/online-group-classes/` | Short enquiry page for possible online group classes. |
| `src/pages/gallery.astro` | `/gallery/` | Gallery page with clickable lightbox. |
| `src/pages/pricing.astro` | `/pricing/` | Pricing overview. |
| `src/pages/maths-level.astro` | `/maths-level/` | Supported maths levels. |
| `src/pages/gcse-revision-class-higher-manchester.astro` | `/gcse-revision-class-higher-manchester/` | GCSE Higher group class page. |
| `src/pages/gcse-foundation-maths-tutoring-club-2025.astro` | `/gcse-foundation-maths-tutoring-club-2025/` | GCSE Foundation group class page. |
| `src/pages/manchestersummercodingclub.astro` | `/manchestersummercodingclub/` | Summer coding course page. |
| `src/pages/privacy.md` | `/privacy/` | Privacy policy, still needs legal/content rewrite. |
| `src/pages/terms.md` | `/terms/` | Terms page, still needs legal/content rewrite. |
| `src/pages/safeguarding.md` | `/safeguarding/` | Safeguarding page. |
| `src/pages/404.astro` | `/404/` | Not found page. |

Generated online course routes:

- `/year-6-maths/` - displayed as Challenge Maths Club (Year 6)
- `/ks3-maths/`
- `/gcse-foundation-maths/`
- `/gcse-higher-maths/`
- `/igcse-maths/`
- `/functional-skills-maths/`
- `/a-level-maths/`
- `/coding-problem-solving/`
- `/coding-problem-solving-part-2/`

## 5. Navigation

Header navigation is defined in `src/navigation.ts`.

Current top navigation:

- Home
- Online Tuition
- Maths Tuition
- About
- Contact
- Login button

The Login button links to `https://hai-bl.com/auth/login`.

Footer navigation is also defined in `src/navigation.ts`, with grouped links for tuition, classes, booking, resources and legal pages. Social links currently include Facebook, LinkedIn and Instagram.

## 6. Main Components

| Component | Purpose |
| --- | --- |
| `HomeHero.astro` | Compact homepage hero with tutor card and trust signals. |
| `Hero.astro` | General hero with title, subtitle, CTAs and optional image. |
| `HeroText.astro` | Text-only hero used on contact-style pages. |
| `Features.astro` | Icon/card grid sections. |
| `Features2.astro` | Alternative feature layout. |
| `Content.astro` | Text/image content sections with item lists. |
| `FAQs.astro` | FAQ section. |
| `Testimonials.astro` | Homepage testimonials. |
| `CallToAction.astro` | Final CTA sections. |
| `Gallery.astro` | Responsive gallery with numbered images and lightbox. |
| `Button.astro` | Shared button rendering. |
| `Image.astro` | Shared image output/optimisation wrapper. |
| `Header.astro` / `Footer.astro` | Shared site shell components. |

The old blog components and widgets have been removed because no blog is currently live.

## 7. Key Content Areas

### Homepage

The homepage has been redesigned to feel professional and parent-focused:

1. Compact hero
2. Meet Your Tutor
3. GCSE Group Classes
4. Tuition Services
5. Highlighted Prices
6. Testimonials
7. Summer Coding Club banner
8. FAQs
9. Final CTA

Prices are shown as highlighted cards, with group classes marked as popular.

### Online Tuition

The online tuition page is a clean overview with nine cards:

- Challenge Maths Club (Year 6)
- KS3 Maths
- GCSE Foundation Maths
- GCSE Higher Maths
- IGCSE Maths
- Functional Skills Maths
- A-Level Maths
- Coding and Problem Solving
- Coding and Problem Solving Part 2

Course details are generated from `src/utils/onlineCourses.ts`, and full detail pages use `src/pages/[onlineCourse].astro`.

### Maths Tuition

The maths tuition page now follows a parent decision journey:

1. Hero
2. Choose the Right Maths Tuition
3. Support for the Stage Your Child Is At
4. What Lessons Focus On
5. Online Learning Platform Included
6. Simple Maths Tuition Prices
7. Why Parents Choose Maths Tutor Help
8. FAQs
9. Final CTA

### About

The About page is now shorter and more personal. It focuses on Mr Sheraz, uses one real tutor image, and avoids repeating a full services page.

### Contact

The Contact page now focuses on:

- Phone
- WhatsApp
- Contact form link
- What to include in the message
- What happens next

Hai-BL blocks iframe embedding, so the page links to `https://hai-bl.com/onboarding/interest-form` instead of embedding it.

### Gallery

The gallery uses `src/components/widgets/Gallery.astro`. Images are numbered and open in a lightbox with previous, next and close controls. The GCSE Maths Revision Course poster is stored at `public/images/manchesterrevisionclass.jpeg`.

## 8. Design System

Brand styling is managed in:

- `src/components/CustomStyles.astro`
- `src/assets/styles/tailwind.css`

Main brand tokens:

- `primary` - navy
- `secondary` - teal
- `accent` - warm yellow
- `accent-hover` - deeper yellow
- `brand-soft` - pale blue section background
- `footer` - dark footer background
- `footer-border` - footer border colour

The desired tone is calm, professional, parent-friendly and trustworthy. Use UK spelling and “maths”.

## 9. Assets

Important visible assets:

- `public/images/maths-tutor-sheraz-cheema.jpeg`
- `public/images/maths-tutor-sheraz-cheema-home.jpeg`
- `public/images/manchesterrevisionclass.jpeg`
- matching source copies in `src/assets/images/` for some images
- favicon files in `src/assets/favicons/`

The logo is currently text-based through `src/components/Logo.astro`.

Remote Unsplash and external images are still used on some pages. Replacing more stock images with real teaching/class images would improve trust.

## 10. SEO And Metadata

SEO is handled through page-level `metadata` objects, `src/components/common/Metadata.astro`, Astro SEO support, sitemap generation and `public/robots.txt`.

Current strengths:

- Main pages have specific titles and descriptions.
- Local terms such as Manchester and Levenshulme appear naturally.
- Important pages are linked from header/footer and CTA sections.
- Course pages are generated with unique page titles/descriptions.
- Sitemap builds successfully.

Remaining SEO/content risks:

- `privacy.md` and `terms.md` still contain template legal wording and should be rewritten.
- Some remote images are generic and should be replaced by real/branded images where possible.
- Local business/schema metadata could be added later.

## 11. Accessibility And Responsive Notes

Strengths:

- Header uses semantic navigation.
- Buttons and links are real elements.
- Images have alt text.
- Mobile grids stack responsively.
- Gallery lightbox supports click, close and keyboard navigation.

Things to keep checking:

- Heading order on new pages.
- Button text on narrow mobile screens.
- Colour contrast in dark mode.
- Focus states for interactive elements.

## 12. Maintainability Notes

Good maintainability improvements already completed:

- Removed unused AstroWind demo pages.
- Removed blog routes/content/components.
- Added `src/utils/onlineCourses.ts` for shared course/package data.
- Added `archive/unused-astrowind/` for future reference-only material.
- Simplified the page set to real MathsTutorHelp routes.

Future improvements:

1. Rewrite `privacy.md` and `terms.md` for MathsTutorHelp.
2. Centralise repeated prices into a shared data file.
3. Centralise class details into a shared data file.
4. Replace stock images with real local images.
5. Add structured local business/schema metadata.
6. Run `npm run check` before committing.

## 13. Final Summary

The site is now a focused MathsTutorHelp Astro website rather than a visible AstroWind demo. The main route tree is clean, the homepage and service pages are parent-focused, the online tuition section has structured course pages, the gallery supports larger image viewing, and the contact journey now sends visitors to the secure Hai-BL form link.

The biggest remaining launch task is legal/content cleanup for the privacy and terms pages.
