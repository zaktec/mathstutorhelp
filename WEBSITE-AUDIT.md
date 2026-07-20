# MathsTutorHelp Website Audit

Audit date: 20 July 2026  
Baseline: `main` before the `website-audit-improvements-2026-07` implementation branch  
Framework: Astro 7 static site with Tailwind CSS, AstroWind-derived layouts and GitHub Pages deployment

## Architecture reviewed

- Routes: `src/pages/`, including dynamic online-course routes from `src/pages/[onlineCourse].astro`
- Layouts and metadata: `src/layouts/`, `src/components/common/Metadata.astro`, `StructuredData.astro` and `Breadcrumbs.astro`
- Shared header/footer: `src/components/widgets/Header.astro`, `Footer.astro` and `src/navigation.ts`
- Shared content widgets: `src/components/widgets/`
- Business links and live-tuition prices: `src/utils/siteDetails.ts`
- Online memberships and course content: `src/utils/onlineCourses.ts`
- Images and alt text: `src/data/images.ts`, `src/data/gallery.ts` and `src/assets/images/`
- Deployment: `.github/workflows/deploy.yml` publishes the static `dist/` output to GitHub Pages

## Confirmed problems

| Priority | File                                                                                                                | Page URL                                                    | Confirmed problem                                                                                                                                                                                            | Recommended fix                                                                                                                                 |
| -------- | ------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| Critical | `README.md`, `documents/branding.md`, `src/utils/onlineCourses.ts`                                                  | `/online-tuition/`                                          | Online membership prices conflict. Documentation says Bronze £15, Silver £30 and Gold £60 per month; the rendered site says £19, £49 and £89. There is no authoritative source proving which set is current. | Owner must confirm the current prices before any price edit. Keep the rendered values unchanged meanwhile.                                      |
| High     | `src/navigation.ts`, `src/pages/maths-tuition.astro`, `src/pages/online-tuition.astro`                              | Site-wide navigation, `/maths-tuition/`, `/online-tuition/` | “Online Tuition” and “Online Courses” were used in ways that could blur live one-to-one teaching and platform memberships. The live online card linked to the membership page.                               | Label live teaching “Live Online Tuition,” label platform products “Online Course Memberships,” and provide separate destinations/explanations. |
| High     | `src/components/common/Breadcrumbs.astro`                                                                           | `/blog/page/2/`, `/blog/tag/*/`                             | Generated breadcrumbs linked to nonexistent `/blog/page/` and `/blog/tag/` routes. The production crawl found seven broken internal links.                                                                   | Render non-route grouping labels as text and exclude them from linked breadcrumb structured data.                                               |
| High     | `src/navigation.ts`                                                                                                 | All pages                                                   | Navigation lacked the requested Tuition and Group Classes submenus, omitted a top-level Coding route, and used different parent-facing terminology.                                                          | Use shared dropdown data for Tuition and Group Classes while retaining one source for desktop and mobile menus.                                 |
| High     | `src/pages/index.astro`                                                                                             | `/`                                                         | The homepage combined live online tuition and online course memberships in one service card and lacked “Meet Mr Sheraz,” package-qualified learner benefits and a getting-started section.                   | Separate the services and add concise, carefully qualified sections without changing the visual identity.                                       |
| High     | `src/pages/gcse-foundation-maths-tutoring-club-2025.astro`, `src/pages/gcse-revision-class-higher-manchester.astro` | GCSE class detail routes                                    | Target ranges were described as grades 3–5 for Foundation and 6–9 for Higher rather than the full tier ranges, even though the especially-suitable target wording was broadly correct.                       | State Foundation 1–5 and Higher 4–9, then separately explain the usual target students (4–5 and 6–9).                                           |
| Medium   | `src/utils/siteDetails.ts` and class pages                                                                          | `/`, `/gcse-classes/`, GCSE detail pages, coding page       | Verified dates, times, venue, maximum sizes, block rate and coding details were repeated across pages.                                                                                                       | Centralize the shared schedule and price values using existing project conventions.                                                             |
| Medium   | `src/pages/gcse-classes.astro`, `src/pages/pricing.astro`                                                           | `/gcse-classes/`, `/pricing/`                               | Copy said block booking “may” be available despite the approved brand guide and class pages giving an exact £16-per-session advance rate.                                                                    | Display the exact documented rate consistently.                                                                                                 |
| Medium   | `src/pages/index.astro`                                                                                             | `/`                                                         | Testimonials are anonymous but the page did not explain why. The repository contains no source records that verify the quotations.                                                                           | Keep attribution anonymous, add a privacy note, and request owner verification before future publication changes.                               |
| Medium   | `src/navigation.ts`, `Footer.astro`                                                                                 | Site-wide footer                                            | Footer had five link groups with secondary links that increased visual weight and omitted Student Login from its priority links.                                                                             | Reduce and regroup links around tuition, classes, online/coding, about/contact and legal; include Student Login.                                |
| Medium   | `src/pages/online-tuitions.astro`                                                                                   | `/online-tuitions/`                                         | Legacy plural route returns a client-side/meta-refresh page with HTTP 200, not a permanent redirect.                                                                                                         | Configure an HTTP 301 at the CDN/domain layer to `/online-tuition/`; GitHub Pages cannot express this redirect itself.                          |
| Low      | `src/config.yaml`                                                                                                   | `/blog/tag/*/`                                              | AstroWind category generation is enabled in configuration but the current hand-authored blog routing only exposes tag pages.                                                                                 | Keep disabled from the sitemap; simplify blog configuration during a future content-system pass if no category archive is planned.              |

## Prices and dates inventory

| Item                        | Current rendered/project value                                                                  | Main source locations                                        | Status                                                     |
| --------------------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------ | ---------------------------------------------------------- |
| In-person one-to-one        | £30/hr                                                                                          | `src/utils/siteDetails.ts`, README, brand guide              | Consistent                                                 |
| Live online one-to-one      | £25/hr                                                                                          | `src/utils/siteDetails.ts`, README, brand guide              | Consistent                                                 |
| A-Level                     | Standard one-to-one rates: £25/hr online or £30/hr in person                                    | `src/pages/maths-tuition.astro`                              | Consistent with shared rates                               |
| GCSE group pay as you go    | £20 per session                                                                                 | `src/utils/siteDetails.ts`, class pages, README, brand guide | Consistent                                                 |
| GCSE advance block          | £16 per session                                                                                 | GCSE detail pages and brand guide                            | Consistent, previously not centralized                     |
| Online memberships          | Site: £19/£49/£89 per month; docs: £15/£30/£60                                                  | `src/utils/onlineCourses.ts`, README, brand guide            | **Owner confirmation required**                            |
| Full online course purchase | £99 one-off                                                                                     | `src/pages/online-tuition.astro`                             | Only one project value found; owner confirmation advisable |
| Coding course               | £100 for six sessions                                                                           | `src/pages/manchestersummercodingclub.astro`, event schema   | Consistent                                                 |
| GCSE classes                | Sundays from 13 September 2026 to May 2027; Foundation 10:00–11:00 am; Higher 11:00 am–12:00 pm | Homepage, group page, detail pages, event schema             | Consistent                                                 |
| Coding course               | Sundays, 2 August–6 September 2026, 11:00 am–12:00 pm                                           | Coding page and event schema                                 | Consistent                                                 |

## Legacy URL checks

Checked against the live domain on 20 July 2026:

| Old URL                    | Live status           | Recommended destination                                    | Required action                                   |
| -------------------------- | --------------------- | ---------------------------------------------------------- | ------------------------------------------------- |
| `/online-tuitions/`        | 200 meta-refresh page | `/online-tuition/`                                         | CDN/domain-level 301                              |
| `/wp-login.php`            | 404                   | None                                                       | Keep 404; do not recreate WordPress functionality |
| `/sample-page/`            | 404                   | None unless historical backlinks are found                 | Keep 404                                          |
| `/feed/`                   | 404                   | `/rss.xml` only if historical traffic/backlinks justify it | Optional CDN-level 301                            |
| `/category/uncategorized/` | 404                   | Relevant blog listing only if historical backlinks exist   | Keep 404 unless analytics show demand             |

No active source content contained “Twiter,” “Instragram,” “explaination,” WordPress login links or “Sample Page.”

## Accessibility and mobile findings

- Confirmed positive: shared controls generally use 44px minimum heights, visible focus rings and descriptive image alt text.
- Confirmed positive: the mobile menu exposes the same shared navigation data as desktop and traps focus while open.
- Confirmed issue: non-route breadcrumb groups were announced as links/current pages incorrectly; addressed in implementation.
- Browser screenshot automation was attempted at 320px, 390px and 768px. Firefox’s software compositor failed to produce screenshot files in this environment, so responsive verification is limited to rendered HTML/CSS inspection, breakpoint review and local HTTP route checks. This remains a manual visual QA risk.
- Pricing and membership cards use responsive grids and do not contain fixed-width tables; no source-level horizontal overflow was found.

## SEO findings

- Important pages have unique metadata objects, one visible H1, canonical generation and default Open Graph imagery.
- LocalBusiness/EducationalOrganization, Person, Course/EducationEvent, FAQ and Breadcrumb structured data are present where appropriate.
- The broken breadcrumb URLs also affected BreadcrumbList data and therefore required correction.
- Existing route names such as `/gcse-foundation-maths-tutoring-club-2025/` are dated/awkward but should not be renamed without a working permanent-redirect facility.
- Default social imagery is shared across many pages. Unique images are an optional improvement where approved assets exist.

## Optional recommendations

- Verify each testimonial against the original feedback record and record an internal approval/source note.
- Confirm the £99 one-off course price and any fee for adding extra course access.
- Add automated browser accessibility testing (for example axe with Playwright) once the project adopts a browser-test dependency.
- Add a scheduled external-link checker in CI; external services may block automated probes and should not fail builds without retries.
- Review whether blog pagination is necessary with the current small post count.
- Move approved membership pricing into the same commercial-data module as live tuition after owner confirmation.
- Configure permanent redirects at the custom-domain CDN or move redirect-sensitive routes to a host that supports redirect rules.
