# Live Website Content Audit

_Last checked: 26 June 2026_

This document records useful content found on the live WordPress site and whether it should be reused in the Astro site.

Checked sources:

- `https://mathstutorhelp.com/`
- `https://mathstutorhelp.com/`
- `https://mathstutorhelp.com/wp-json/wp/v2/pages?per_page=100`
- `https://mathstutorhelp.com/wp-json/wp/v2/posts?per_page=100`
- `https://mathstutorhelp.com/sitemap_index.xml`

The `.co.uk` address redirects/canonicalises to the WordPress site at `mathstutorhelp.com`.

## Overall Finding

Most useful live-site content is already represented in the Astro project, usually in a cleaner and more brand-consistent form.

The live WordPress site still contains some useful facts and phrasing, but it also includes outdated pages, placeholder content, old pricing, inconsistent wording such as `math`, and testimonials that need grammar/permission checks before reuse.

Use the live site as a reference source, not as copy-and-paste content.

## Content Worth Reusing Or Keeping Aligned

### GCSE Higher Class

Source:

- `https://mathstutorhelp.com/gcse-revision-class-higher-manchester/`

Useful details:

- Year 10 and Year 11 Higher Tier class.
- Grades 6-9 focus.
- Levenshulme High School.
- Sundays 11:00am-12:00pm.
- Runs from 13 September 2026 to May 2027.
- Maximum 7 students.
- Paper-based, no-screen lessons.
- Diagnostic-led support.
- Pay-as-you-go plus advance block booking option.

Status in Astro:

- Already used in `src/pages/gcse-revision-class-higher-manchester.astro`.
- Astro version is cleaner and includes structured event data.

Recommendation:

- Keep Astro version as the source of truth.
- Check dates, price and location before publishing each cohort.

### GCSE Foundation Class

Source:

- `https://mathstutorhelp.com/gcse-foundation-maths-tutoring-club-2025/`

Useful details:

- Foundation Tier support for grades 3-5 / 4-5.
- Levenshulme High School.
- Sundays 10:00am-11:00am.
- Runs from 13 September 2026 to May 2027.
- Maximum 7 students.
- Paper-based lessons.
- Real exam paper practice.
- Pay-as-you-go and block booking wording.

Status in Astro:

- Already used in `src/pages/gcse-foundation-maths-tutoring-club-2025.astro`.
- Astro version is more structured and parent-friendly.

Recommendation:

- Keep Astro version.
- Make sure grade wording stays consistent across headings, metadata and CTAs.

### About / Welcome Messaging

Sources:

- `https://mathstutorhelp.com/about/`
- `https://mathstutorhelp.com/welcome-to-mathstutorhelp/`
- `https://mathstutorhelp.com/mathstutor/`

Useful details:

- Mr Sheraz is qualified and DBS checked.
- Teaching experience is 15+ years in newer live copy.
- Support covers KS3, GCSE, IGCSE, Functional Skills and A-Level.
- Strong themes: clear explanations, confidence, structured support, exam preparation and personalised plans.

Status in Astro:

- Already used in `src/pages/about.astro`.
- Astro version avoids some repetition and keeps the page more personal.

Recommendation:

- Keep Astro version.
- If more trust copy is needed, reuse the ideas, not the old WordPress wording.

### Maths Tuition Page

Source:

- `https://mathstutorhelp.com/maths-tuition/`

Useful details:

- Online, face-to-face and group class routes.
- KS3, GCSE, IGCSE, Functional Skills and A-Level coverage.
- Online learning platform/resource support.
- Diagnostic assessment and personalised learning plan.

Status in Astro:

- Already represented in `src/pages/maths-tuition.astro`.
- Astro pricing is intentionally simpler and points users to pricing routes.

Recommendation:

- Keep Astro page concise.
- Do not bring back the older WordPress table if it conflicts with current pricing in `src/utils/siteDetails.ts`.

### Online Courses / Online Tuition

Source:

- `https://mathstutorhelp.com/online-tuitions/`

Useful details:

- Learn from home.
- Flexible online support.
- Diagnostic test and personalised learning.
- Platform access and resources.

Issues:

- Live WordPress package prices differ from the current Astro model.
- WordPress uses older package wording that may confuse online one-to-one tuition with online course subscriptions.

Status in Astro:

- Current model lives in `src/utils/onlineCourses.ts`.
- Astro separates online one-to-one tuition from Bronze/Silver/Gold online course packages.

Recommendation:

- Do not copy WordPress pricing directly.
- Keep Astro package data as the source of truth unless the business model changes.

### Summer Coding Course

Source:

- `https://mathstutorhelp.com/manchestersummercodingclub/`

Useful details:

- Python course for ages 13-17.
- Beginner friendly.
- Six sessions.
- Levenshulme High School.
- Sundays 11:00am-12:00pm.
- Price: £100 for 6 sessions.
- Maths links: algebra, sequences, averages, percentages and logic.
- Final project and certificate.

Status in Astro:

- Already used in `src/pages/manchestersummercodingclub.astro`.

Recommendation:

- Keep Astro version.
- Check dates before each summer cohort.

### Work With MTH

Source:

- `https://mathstutorhelp.com/work-with-mth/`

Useful details:

- Maths Support Assistant wanted.
- Sundays in Levenshulme.
- Around 2 hours.
- Suitable for reliable A-Level Maths student or equivalent.
- No prior tutoring experience required.
- DBS required or can be arranged.

Status in Astro:

- Already used in `src/pages/work-with-mth.astro`.

Recommendation:

- Keep Astro version.
- Update only when the role is active/inactive or pay details change.

### Resource Links

Source:

- WordPress footer on `https://mathstutorhelp.com/`

Useful links:

- BBC Bitesize
- CorbettMaths
- Maths Genie
- MME Revise GCSE Maths

Status in Astro:

- Already represented in resources/footer areas.

Recommendation:

- Keep these links if they remain useful for students.
- Check external URLs periodically.

## Content To Treat Carefully

### Testimonials

Sources:

- `https://mathstutorhelp.com/ms-jo-luise/`
- `https://mathstutorhelp.com/mr-mark-ju/`
- `https://mathstutorhelp.com/mr-kim-john/`

Issues:

- Some wording uses `math` instead of `maths`.
- Some grammar needs correction.
- Names and permission should be confirmed before publishing.

Recommendation:

- Do not copy testimonials directly unless permission is confirmed.
- If used, rewrite only for spelling/grammar with approval and keep meaning unchanged.

### Blog Posts

Sources:

- `https://mathstutorhelp.com/5-expert-tips-for-maths-revision/`
- `https://mathstutorhelp.com/finding-a-maths-tutor-in-manchester/`
- `https://mathstutorhelp.com/hello-world/`
- `https://mathstutorhelp.com/guest-interview-will-occur-soon/`
- `https://mathstutorhelp.com/new-exam-schedules-for-diploma/`

Status in Astro:

- The same themes already exist in `src/utils/blogPosts.ts` with cleaner, current wording.

Recommendation:

- Keep Astro blog versions.
- Use live WordPress posts only as historical references.
- Do not reuse outdated 2017 GCSE curriculum wording without modern review.

## Content Not Worth Reusing

Avoid copying:

- `https://mathstutorhelp.com/sample-page/` - WordPress sample page.
- `https://mathstutorhelp.com/newsletter/` - shortcode only.
- `https://mathstutorhelp.com/courses/` - empty/legacy page.
- `https://mathstutorhelp.com/blog/` - empty WordPress blog shell.
- `https://mathstutorhelp.com/harvard-university-tops-the-shanghai-ranking-again/` - placeholder text.
- `https://mathstutorhelp.com/summer-course-starts-from-1st-june/` - placeholder text.
- Generic WordPress footer/about copy if it duplicates the cleaner Astro pages.

## Possible Future Content Ideas From Live Site

These are worth considering later, but not urgent:

- A short `Partner with MTH` page if MathsTutorHelp wants school or venue partnerships again.
- A cleaner `tailor-made maths courses` page if bespoke school/adult/professional courses become a real offer.
- A testimonials section only after collecting approved, corrected, real testimonials.
- A lightweight note on the site explaining the online learning platform if parents need more detail.

## Decision

Do not bulk-import live WordPress content.

The Astro site should remain the main source of truth. Use the live site only to verify factual details, historical blog topics, dates, class logistics and old service ideas that can be rewritten in the current MathsTutorHelp brand voice.
