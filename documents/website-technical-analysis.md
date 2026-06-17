# MathsTutorHelp Astro Website - Technical Analysis

## 1. Project Overview

This project is an Astro website for MathsTutorHelp, a maths tutoring service offering GCSE, IGCSE, Functional Skills, A-Level, online tuition, in-person tuition and small group classes in Manchester.

The website is built as a static Astro site. It is organised around page files, shared layouts, reusable components, global styles, configuration files and image/assets folders. The project is based on the AstroWind starter/theme, but several pages have been customised for MathsTutorHelp.

Astro is a good fit for this type of small business website because most pages are content-led, fast-loading and do not need heavy client-side JavaScript.

## 2. Technology Used

| Technology        | How It Is Used                                                                                                                  |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| Astro 6           | Main site framework. Astro handles routing, page rendering, layouts, components and static site generation.                     |
| Astro components  | Most page sections and reusable UI blocks are written as `.astro` components.                                                   |
| HTML              | Astro files output semantic HTML for headings, sections, links, lists, buttons and page content.                                |
| TypeScript        | Used in config-style files such as `astro.config.ts`, `src/navigation.ts`, `src/content.config.ts` and utility files.           |
| Tailwind CSS v4   | Main styling approach. Utility classes are used directly inside Astro components and pages.                                     |
| AstroWind         | The project is based on the AstroWind template, which provides layouts, navigation, widgets, blog support and design utilities. |
| astro-icon        | Provides icon support using Iconify icon sets such as `tabler`.                                                                 |
| @astrojs/sitemap  | Generates sitemap output for SEO.                                                                                               |
| @astrojs/rss      | Installed from the starter template, but the visible RSS route/icon has been removed.                                            |
| @astrojs/mdx      | Allows MDX content if needed.                                                                                                   |
| astro-compress    | Compresses/minifies generated static output.                                                                                    |
| unpic / sharp     | Used for image handling and optimisation paths.                                                                                 |
| ESLint / Prettier | Used for code quality and formatting checks.                                                                                    |

The main scripts in `package.json` are:

| Script            | Purpose                                         |
| ----------------- | ----------------------------------------------- |
| `npm run dev`     | Starts the local Astro development server.      |
| `npm run build`   | Builds the static production site into `dist/`. |
| `npm run preview` | Previews the built site locally.                |
| `npm run check`   | Runs Astro, ESLint and Prettier checks.         |
| `npm run fix`     | Runs automatic ESLint and Prettier fixes.       |

The project requires Node `>=22.12.0`.

## 3. Folder Structure

| Folder               | What It Contains                                                        | Why It Is Used                                                                          |
| -------------------- | ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `src/`               | Main source code for the website.                                       | Keeps pages, components, layouts, assets, data and utilities together.                  |
| `src/pages/`         | Astro and Markdown page files.                                          | Astro uses this folder for file-based routing.                                          |
| `src/components/`    | Reusable UI, widget, blog and common components.                        | Avoids repeating design and behaviour across pages.                                     |
| `src/layouts/`       | Shared page wrappers such as `Layout.astro` and `PageLayout.astro`.     | Provides common document structure, header, footer, metadata and slots.                 |
| `src/assets/`        | Favicons, images and global styles.                                     | Stores source assets used by the site.                                                  |
| `src/assets/styles/` | `tailwind.css`.                                                         | Defines Tailwind import, theme utilities and shared UI styles.                          |
| `src/data/`          | Blog/post content data.                                                 | Supports AstroWind blog/content features.                                               |
| `src/utils/`         | Utility functions for metadata, permalinks, frontmatter and blog logic. | Keeps shared logic out of components and pages.                                         |
| `public/`            | Static files copied directly to the final site.                         | Used for `robots.txt`, Decap CMS files and headers.                                     |
| `documents/`         | Project documentation.                                                  | Stores the technical analysis, branding guide and future project documents.             |
| `vendor/`            | AstroWind integration code.                                             | Supports the AstroWind configuration and virtual config imports.                        |
| `.github/workflows/` | GitHub Actions workflow files.                                          | Builds, checks and deploys the site.                                                    |
| `dist/`              | Generated production build output.                                      | Created by `npm run build`; should be treated as generated output.                      |

The structure is logical. Project documentation should be kept in `documents/` to avoid splitting guidance across multiple folders.

## 4. Page Organisation

Astro uses file-based routing. A file such as `src/pages/about.astro` becomes `/about/`. The homepage is `src/pages/index.astro`, which becomes `/`. With the current GitHub Pages base path, local and production URLs are served under `/mathstutorhelp/`.

The MathsTutorHelp-specific pages are clear and focused. There are also several leftover AstroWind template/demo pages, especially under `src/pages/homes/`, `src/pages/landing/`, and `src/pages/services.astro`. These should be removed or rewritten before the site is considered fully clean.

| File                                                       | Website Page                                 | Purpose                                                                                             |
| ---------------------------------------------------------- | -------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `src/pages/index.astro`                                    | `/`                                          | Homepage for MathsTutorHelp, including hero, tuition services, group classes, prices, FAQs and CTA. |
| `src/pages/about.astro`                                    | `/about/`                                    | About Maths Tutor Help and the tutor/service approach.                                              |
| `src/pages/contact.astro`                                  | `/contact/`                                  | Contact page, currently still partly AstroWind/demo content and should be customised.               |
| `src/pages/pricing.astro`                                  | `/pricing/`                                  | Maths tuition prices for online, in-person and group sessions.                                      |
| `src/pages/maths-tuition.astro`                            | `/maths-tuition/`                            | One-to-one maths tuition service page.                                                              |
| `src/pages/online-tuitions.astro`                          | `/online-tuitions/`                          | Online maths tuition service page.                                                                  |
| `src/pages/maths-level.astro`                              | `/maths-level/`                              | Page explaining supported maths levels.                                                             |
| `src/pages/gcse-revision-class-higher-manchester.astro`    | `/gcse-revision-class-higher-manchester/`    | GCSE Higher group class page for grades 6-9.                                                        |
| `src/pages/gcse-foundation-maths-tutoring-club-2025.astro` | `/gcse-foundation-maths-tutoring-club-2025/` | GCSE Foundation group class page for grades 4-5.                                                    |
| `src/pages/manchestersummercodingclub.astro`               | `/manchestersummercodingclub/`               | Summer Python coding course page.                                                                   |
| `src/pages/privacy.md`                                     | `/privacy/`                                  | Privacy policy page, inherited from the template and should be checked for brand accuracy.          |
| `src/pages/terms.md`                                       | `/terms/`                                    | Terms page, inherited from the template and should be checked for brand accuracy.                   |
| `src/pages/safeguarding.md`                                | `/safeguarding/`                             | Safeguarding information page.                                                                      |
| `src/pages/404.astro`                                      | `/404/`                                      | Custom not found page.                                                                              |
| `src/pages/[...blog]/...`                                  | Blog routes                                  | AstroWind blog listing, category, tag and pagination routes.                                        |
| `src/pages/homes/*.astro`                                  | `/homes/.../`                                | Demo AstroWind homepages; likely not needed for MathsTutorHelp.                                     |
| `src/pages/landing/*.astro`                                | `/landing/.../`                              | Demo AstroWind landing pages; likely not needed.                                                    |
| `src/pages/services.astro`                                 | `/services/`                                 | Demo/template services page; should be removed or rewritten.                                        |

The page structure is understandable, but maintainability would improve if unused demo pages were removed.

## 5. Layout Structure

The main layout files are in `src/layouts/`.

| Layout                 | Purpose                                                                                                                                                      |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `Layout.astro`         | Lowest-level document shell. It imports global CSS, metadata, favicons, analytics, colour mode scripts and Astro view transitions.                           |
| `PageLayout.astro`     | Main website layout. It wraps pages with the shared header, `<main>` content area and footer.                                                                |
| `MarkdownLayout.astro` | Used for Markdown-based content pages such as terms, privacy or blog-style content.                                                                          |
| `LandingLayout.astro`  | Alternative layout inherited from AstroWind for landing pages. It still contains template-specific actions and should be reviewed if landing pages are kept. |

`PageLayout.astro` is the most important layout for the MathsTutorHelp site. It imports `Header.astro`, `Footer.astro`, `headerData` and `footerData` from `src/navigation.ts`. This avoids repeating header and footer markup on every page.

The layout system is strong because it gives every page a consistent page shell while still allowing individual pages to control their own page sections and metadata.

## 6. Component Structure

The components are grouped into:

| Area                      | Purpose                                                                                                  |
| ------------------------- | -------------------------------------------------------------------------------------------------------- |
| `src/components/widgets/` | Larger page sections such as hero, features, content blocks, FAQs, testimonials, CTA, header and footer. |
| `src/components/ui/`      | Smaller UI primitives such as buttons, forms, headlines and timelines.                                   |
| `src/components/common/`  | Site-level utilities such as metadata, analytics, image handling, theme toggle and mobile menu toggle.   |
| `src/components/blog/`    | Blog listing, blog post and blog navigation components.                                                  |
| Root components           | `Logo.astro`, `Favicons.astro` and `CustomStyles.astro`.                                                 |

Important components:

| Component                             | Purpose                                                                | Where It Is Used                                  |
| ------------------------------------- | ---------------------------------------------------------------------- | ------------------------------------------------- |
| `Logo.astro`                          | Displays the MathsTutorHelp text logo using the site name.             | Header and footer/home link area.                 |
| `Header.astro`                        | Builds the desktop and mobile navigation menu.                         | `PageLayout.astro`.                               |
| `Footer.astro`                        | Builds the multi-column footer with links, social icons and copyright. | `PageLayout.astro`.                               |
| `Hero.astro`                          | Large page hero with title, subtitle, image and CTA buttons.           | Homepage, service pages, pricing and class pages. |
| `HeroText.astro`                      | Text-only hero variant.                                                | Contact and some template pages.                  |
| `Features.astro`                      | Grid of feature/service cards with icons.                              | Homepage, about, pricing and service pages.       |
| `Features2.astro` / `Features3.astro` | Alternative feature layouts from AstroWind.                            | Contact and demo/template pages.                  |
| `Content.astro`                       | Image/text content section with optional item list and CTA.            | Homepage, about and group class pages.            |
| `FAQs.astro`                          | FAQ accordion/grid style content.                                      | Homepage, tuition pages and group class pages.    |
| `Testimonials.astro`                  | Review/testimonial section.                                            | Homepage and demo pages.                          |
| `CallToAction.astro`                  | Final conversion section with buttons.                                 | Homepage and service pages.                       |
| `Contact.astro`                       | Contact form/widget area.                                              | Contact page.                                     |
| `Button.astro`                        | Shared button rendering for CTAs.                                      | Header, hero sections and CTA sections.           |
| `Image.astro`                         | Shared image rendering/optimisation logic.                             | Widgets that display images.                      |
| `Metadata.astro`                      | Outputs title, description and Open Graph metadata.                    | `Layout.astro`.                                   |
| `ToggleMenu.astro`                    | Mobile menu button behaviour.                                          | Header.                                           |
| `ToggleTheme.astro`                   | Light/dark theme toggle.                                               | Header.                                           |

The reusable component structure is one of the strongest parts of the project. It keeps the homepage and service pages concise, although some page-level content arrays are long and could eventually be moved to data files.

## 7. Navigation Structure

The navigation is controlled by `src/navigation.ts`.

Current main menu items:

- Home
- GCSE Group Classes
- Tuition
- Prices
- About
- Contact
- Register Your Interest button

The footer navigation is also controlled in the same file. This is useful because header and footer link changes can be made in one place.

The navigation is intentionally short and focused on the current main conversion goal: GCSE group class registration. Supporting links such as online tuition, the student portal, summer coding and revision resources are kept in the footer.

Recommended navigation improvements:

- Keep the top navigation short. If more service pages are added, put supporting links in the footer unless they are a primary conversion goal.
- Keep external portal/register links clearly labelled so parents understand when they are leaving the main website.
- Make sure every internal link uses the AstroWind permalink helper or a base-aware link approach, because the site is deployed under `/mathstutorhelp/` on GitHub Pages.

## 8. Styling and Design System

The main styling file is `src/assets/styles/tailwind.css`.

The project uses Tailwind CSS v4 with:

- `@import 'tailwindcss'`
- `@plugin "@tailwindcss/typography"`
- custom utilities such as `.btn`, `.btn-primary`, `.btn-secondary`, `.btn-tertiary`
- CSS variables for colours, fonts and page backgrounds
- dark mode variants
- header dropdown and mobile menu styles

`src/components/CustomStyles.astro` defines the main design tokens:

- Inter variable font
- primary navy
- secondary teal
- warm yellow accent
- text colours
- page background colours
- dark mode colours

`src/assets/styles/tailwind.css` exposes reusable brand colour names:

- `primary` for the main navy
- `secondary` for teal
- `accent` for warm yellow CTA emphasis
- `accent-hover` for yellow hover states
- `brand-navy` for fixed navy text on yellow buttons
- `brand-soft` for pale blue section backgrounds
- `footer` and `footer-border` for the dark footer treatment

The current visual direction is clean, modern and suitable for an education/tutoring website. The palette is now more brand-specific and avoids the old AstroWind blue/purple defaults.

The remaining template colour utilities have been replaced with brand tokens where practical. New sections should use the shared colour names rather than arbitrary hex values or generic template colours.

Areas to improve:

- Some pages use remote Unsplash images. These are convenient, but local, branded images would make the site more trustworthy.
- Several inherited template pages still use generic AstroWind text and styling patterns.
- Button and link colours should continue to be checked for contrast in both light and dark mode when new sections are added.

## 9. Assets and Images

Assets are stored in two main places:

| Location               | Purpose                                                                               |
| ---------------------- | ------------------------------------------------------------------------------------- |
| `src/assets/images/`   | Source images imported by components or available to the build.                       |
| `src/assets/favicons/` | Favicon files for browser tabs and mobile icons.                                      |
| `public/`              | Static files copied directly to the output, such as `robots.txt` and Decap CMS files. |

Current visible assets include:

- `src/assets/images/default.png`
- `src/assets/images/hero-image.png`
- `src/assets/images/app-store.png`
- `src/assets/images/google-play.png`
- favicon files in `src/assets/favicons/`
- `public/robots.txt`
- `public/decapcms/`

The logo is currently text-based in `src/components/Logo.astro`, using the configured site name rather than a separate image logo.

The asset organisation is simple, but it still reflects the AstroWind starter. `app-store.png` and `google-play.png` are probably not needed for this tutoring website unless an app is planned.

Performance notes:

- `hero-image.png` is around 540 KB and `default.png` is around 396 KB, so image compression should be reviewed.
- Remote Unsplash images should have sensible width and quality parameters, which the current pages mostly include.
- More descriptive local image names would help future maintenance.

## 10. Homepage Structure

The homepage is `src/pages/index.astro`. It imports and composes reusable AstroWind widgets:

1. `Hero`
2. `Features`
3. `Content`
4. `Testimonials`
5. `FAQs`
6. `CallToAction`

Homepage sections:

| Section          | Purpose                                                                                                                           |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| Hero             | Leads with GCSE group tuition in Levenshulme and a Register Your Interest CTA.                                                    |
| Meet Your Tutor  | Introduces Mr Sheraz, professional trust signals, Google Calendar booking and LinkedIn profile link.                              |
| Progress support | Explains outcomes such as finding gaps, building confidence, exam technique, routine and parent feedback.                         |
| Group classes    | Promotes GCSE Higher/Foundation group classes, £20 sessions, Levenshulme location and limited places.                             |
| Tuition options  | Explains GCSE, IGCSE, A-Level, Functional Skills, online tuition and group classes.                                               |
| How lessons work | Explains the process: find gaps, build understanding, practise exam questions and review progress.                                |
| Prices           | Summarises tuition options and links towards enquiry actions.                                                                     |
| Summer Coding    | Advertises the Summer Coding Club by MathsTutorHelp without distracting from the main maths offer.                                |
| Parent feedback  | Uses parent-style feedback examples until real reviews can be added with permission.                                              |
| FAQs             | Answers common parent questions about online/in-person lessons, levels and booking.                                               |
| CTA              | Encourages visitors to register interest in GCSE group classes.                                                                   |

The homepage is clear for parents and students because it quickly communicates what is offered, where it is offered and how to take the next step.

The main technical improvement is to reduce repeated inline content by moving repeated service/class data into arrays or separate data files.

## 11. Content Organisation

Most MathsTutorHelp content is currently written directly inside `.astro` page files as component props and arrays. This is simple and works well for a small site.

There is also content in:

- `src/config.yaml` for site-wide settings and default metadata
- `src/navigation.ts` for header and footer content
- `src/data/post/` for blog/demo content
- Markdown pages such as `privacy.md`, `terms.md` and `safeguarding.md`

The brand content is now much more focused on MathsTutorHelp than the original template. However, some pages still include template content, especially `contact.astro`, `services.astro`, demo homepages, demo landing pages and some policy wording.

Recommended content organisation improvements:

- Move repeated class details into shared data files, for example `src/data/classes.ts`.
- Move pricing into `src/data/pricing.ts` so the homepage, pricing page and footer stay consistent.
- Remove or rewrite AstroWind demo blog/content if the site does not need a blog.
- Replace parent-style feedback examples with real parent reviews when available and permission has been given.

## 12. SEO Structure

SEO is handled through:

- per-page `metadata` objects
- `src/components/common/Metadata.astro`
- `astro-seo`
- `@astrojs/sitemap`
- `public/robots.txt`
- `src/config.yaml` default site metadata

Good SEO points:

- Main MathsTutorHelp pages have page titles and descriptions.
- Page headings use clear tutoring keywords such as GCSE maths, IGCSE, A-Level, Manchester and online tuition.
- The group class pages target specific searches such as GCSE Higher Maths Classes Manchester.
- Images generally include alt text.
- Footer and page CTAs create internal links between important pages.
- Sitemap support is present.
- RSS output has been removed, so `/rss.xml` is no longer generated.

SEO issues to improve:

- Some template/demo pages are still indexable and may dilute the site if deployed.
- `privacy.md` still references AstroWind in its body and should be rewritten for MathsTutorHelp.
- Contact page metadata and content should be customised.
- Hardcoded internal links like `/contact` should be checked against the GitHub Pages base path.
- Each important service page should have one strong H1 and a clear heading hierarchy.
- Add local business details consistently: Manchester, Levenshulme, phone, email and service area.

## 13. Responsive Design

The project is mobile-friendly by design because AstroWind and Tailwind use responsive utility classes throughout the components.

Responsive strengths:

- Header switches to a mobile menu using `ToggleMenu.astro`.
- Grid sections use responsive columns and stack on smaller screens.
- Buttons and CTAs use responsive padding.
- The footer uses responsive grid columns.
- Hero and content sections use responsive layout patterns.

Areas to check manually:

- Whether long navigation labels fit on smaller screens.
- Whether footer columns remain readable on narrow phones.
- Whether remote images crop well on mobile.
- Whether CTA buttons stack with enough spacing.

Overall, the responsive foundation is good, but final browser testing should be done on common phone widths.

## 14. Accessibility

Accessibility strengths:

- The header uses `aria-label="Main navigation"`.
- Social links use `aria-label` values.
- Images include alt text on the main custom pages.
- Buttons and links are rendered as real clickable elements.
- The mobile menu uses a dedicated toggle component.
- The layout uses standard HTML structure with a `<main>` element.

Accessibility improvements:

- Check heading order on every page to confirm there is one main H1 and logical H2/H3 structure.
- Ensure colour contrast is strong for navy, teal, yellow CTA and footer link states.
- If dropdown navigation is reintroduced later, make sure dropdown menus are fully keyboard accessible.
- Replace vague link text where needed with more specific labels.
- Ensure the contact form has proper labels, validation messages and correct MathsTutorHelp contact details.
- Review dark mode contrast because the template includes both light and dark themes.

## 15. Code Quality and Maintainability

The project is reasonably maintainable because it uses a clean Astro structure:

- pages are in `src/pages/`
- shared wrappers are in `src/layouts/`
- reusable sections are in `src/components/widgets/`
- smaller UI primitives are in `src/components/ui/`
- navigation is centralised in `src/navigation.ts`
- global config is in `src/config.yaml`

The main maintainability concern is the mixture of customised MathsTutorHelp pages and leftover AstroWind demo pages. Another developer may not immediately know which files are active business pages and which are template examples.

Repeated content is also starting to appear in several places, especially prices, contact CTAs and class links. This is normal during early site building, but it should be centralised as the website grows.

Practical improvements:

- Delete unused demo pages or move them outside `src/pages/`.
- Create shared data files for pricing, tuition services and group classes.
- Keep documentation in `documents/`.
- Update contact, privacy and terms content.
- Run `npm run check` before committing to catch formatting issues.
- Use consistent internal link helpers for GitHub Pages deployment.

## 16. Strengths of the Current Website Structure

- Clear Astro page/layout/component organisation.
- Strong reusable component system inherited from AstroWind.
- Centralised header and footer navigation.
- Good use of page metadata for important pages.
- Static build approach is fast and suitable for a small business website.
- Tailwind CSS makes responsive layout quick and consistent.
- Homepage structure is clear for parents and students.
- Group class pages have focused content and clear CTAs.
- Footer is now customised for MathsTutorHelp rather than generic template content.
- GitHub Pages configuration and deployment workflow are present.

## 17. Recommended Improvements

1. Remove unused AstroWind demo pages from `src/pages/homes/`, `src/pages/landing/` and `src/pages/services.astro` if they are not needed.
2. Rewrite `src/pages/contact.astro` with real MathsTutorHelp contact details and form content.
3. Rewrite `privacy.md` and `terms.md` so they no longer mention AstroWind or generic template wording.
4. Move repeated pricing into a shared data file.
5. Move repeated group class details into a shared data file.
6. Check all internal links for GitHub Pages base path compatibility.
7. Optimise local images and remove unused app-store/google-play assets if not needed.
8. Replace parent-style feedback examples with real parent reviews when available.
9. Review colour contrast for buttons, footer links and dark mode.
10. Keep documentation in `documents/` and avoid reintroducing a second `document/` folder.
11. Run `npm run fix` and `npm run check` before pushing changes.
12. Consider adding structured local business/schema metadata for tutoring services.

## 18. Final Summary

The MathsTutorHelp website is organised as a modern Astro static site. Pages live in `src/pages/`, shared layout structure lives in `src/layouts/`, reusable sections live in `src/components/`, and global settings are controlled through `src/config.yaml` and `src/navigation.ts`.

The site has a strong technical foundation because AstroWind provides reusable widgets, consistent styling, metadata handling, sitemap support and responsive layouts. The MathsTutorHelp homepage, tuition pages, pricing page and group class pages are now clearly tailored to the tutoring business.

The next technical priority is cleanup. The project still contains original AstroWind demo pages and some generic content. Removing unused template files, customising the contact/legal pages, centralising repeated pricing/class data and checking GitHub Pages links will make the website easier to maintain and more professional for launch.
