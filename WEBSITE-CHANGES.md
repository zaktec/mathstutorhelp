# MathsTutorHelp Website Changes

Implementation branch: `website-audit-improvements-2026-07`  
Completed: 20 July 2026

## Main improvements

- Simplified the shared navigation so Tuition and Group Classes link directly to their overview pages, with separate Online Courses and Coding destinations.
- Added Student Login and higher-value links to a lighter, regrouped footer structure.
- Clearly separated Live Online Tuition (scheduled one-to-one teaching) from Online Course Memberships (platform courses with monitoring).
- Corrected the live-online service card so it no longer sends parents to the membership product page.
- Added a reusable `MembershipComparison.astro` component for Bronze, Silver and Gold.
- Expanded and reordered the homepage around trust, support choices, upcoming classes, qualified package benefits, pricing and feedback. Proposed “Meet Your Tutor” and “How to Get Started” sections were removed at the owner’s request.
- Consolidated repeated homepage credentials into the trust section and changed service-card CTAs to direct information links.
- Compacted the homepage trust presentation, balanced the five service cards, simplified learner benefits and corrected testimonial heading hierarchy.
- Added explicit privacy wording to anonymous testimonials. No testimonial text or attribution was invented.
- Centralized verified GCSE and coding dates, times, venue, capacity and the advance group rate in `src/utils/siteDetails.ts`.
- Updated GCSE tier wording to Foundation grades 1–5 (especially grades 4–5) and Higher grades 4–9 (especially grades 6–9).
- Replaced vague block-booking wording with the documented £16-per-session advance rate.
- Standardized common CTA labels including “Register Interest,” “Book a Free Consultation,” “Compare Plans,” “View Course” and “Student Login.”
- Fixed broken intermediate blog breadcrumb links and removed nonexistent parent URLs from BreadcrumbList structured data.

## Files changed

- `src/navigation.ts` — shared header and footer navigation
- `src/utils/siteDetails.ts` — shared live prices and course schedules
- `src/utils/onlineCourses.ts` — owner-confirmation TODO for disputed membership prices
- `src/components/common/Breadcrumbs.astro` — valid links and structured data
- `src/components/widgets/HomeHero.astro` — clearer secondary CTA
- `src/components/widgets/MembershipComparison.astro` — reusable membership plans
- `src/pages/index.astro` — homepage structure, service distinctions and learner information
- `src/pages/maths-tuition.astro` — correctly labelled live online tuition
- `src/pages/online-tuition.astro` — live-versus-membership comparison and reusable plans
- `src/pages/gcse-classes.astro` — centralized schedule and exact block pricing
- `src/pages/gcse-foundation-maths-tutoring-club-2025.astro` — tier range and shared commercial data
- `src/pages/gcse-revision-class-higher-manchester.astro` — tier range and shared commercial data
- `src/pages/manchestersummercodingclub.astro` — shared verified coding schedule
- `WEBSITE-AUDIT.md` — baseline audit, conflicts, legacy URLs and recommendations
- `WEBSITE-CHANGES.md` — this implementation record

## Redirects

No server redirects were added. The project deploys to GitHub Pages, which does not support project-defined HTTP 301 rules.

The existing `/online-tuitions/` compatibility page remains because removing it would turn a working route into a 404. It should be replaced by a CDN/domain-level 301 to `/online-tuition/` when that configuration is available.

## Content decisions

- Retained the published £19/£49/£89 membership prices because the repository does not establish whether those or the documented £15/£30/£60 prices are current.
- Retained the £99 one-off full-course option but flagged it for confirmation.
- Retained anonymous testimonial wording and added a names-withheld privacy explanation; source verification remains an owner task.
- Did not rename old but indexed routes because permanent redirects cannot be guaranteed on the current host.
- Did not invent progress-review frequency, cancellation terms for live bookings, qualifications, prices, dates or outcomes.

## Items requiring owner confirmation

1. Bronze, Silver and Gold monthly prices: £19/£49/£89 on the site versus £15/£30/£60 in README and the brand guide.
2. Whether £99 remains the approved one-off full-course price.
3. The amount described as a “small additional monthly fee” for extra course access, or whether that sentence should be removed until priced.
4. Original records/approval for the three homepage testimonials.
5. Whether `/feed/` has historic traffic that justifies redirecting it to `/rss.xml`.

## Verification performed

- `npm run check` — passed:
  - Astro diagnostics: 90 files, 0 errors, 0 warnings, 0 hints
  - ESLint: passed
  - Prettier: passed
- `npm run build` — passed; 46 HTML routes generated without build warnings.
- Static internal-link crawl — 0 broken internal links after the breadcrumb fix.
- H1/metadata crawl — all content pages have one H1, a title and a meta description. The two deliberate exceptions are the Decap CMS admin shell and the legacy meta-refresh compatibility page.
- Key external destinations — Google consultation booking, HAi-BL login, group enquiry and online-course enquiry all returned HTTP 200.
- Live legacy checks — `/online-tuitions/` returns 200; WordPress login, Sample Page, `/feed/` and the uncategorized archive return 404.
- Local Astro server — served successfully at `127.0.0.1:4322` after local port approval.

There is no separate `lint` or `test` script in `package.json`; linting is part of `npm run check`. Dependencies were already installed and matched the lockfile, so no dependency mutation was needed.

## Remaining risks

- Automated Firefox screenshots failed because the environment’s software compositor could not create a framebuffer. Responsive CSS and rendered markup were inspected, but final visual QA at 320px, 375px, 390px and 768px should still be completed in a normal browser.
- External links can change after this review.
- GitHub Pages cannot send true permanent redirects for legacy paths without an upstream CDN/domain rule.
- Commercial ambiguity remains until the owner confirms membership and full-course prices.
