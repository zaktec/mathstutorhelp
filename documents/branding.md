# Maths Tutor Help Branding Guide

## Brand Position

Maths Tutor Help should feel clear, trustworthy and practical. The site is mainly for parents and students who want reliable maths support, so the design should look professional rather than playful or overly template-like.

Core message:

> Personalised maths tuition for KS3, GCSE, IGCSE, Functional Skills and A-Level, available online and in person.

## Main Audience

- Parents looking for a reliable maths tutor in Manchester
- GCSE and IGCSE students who need exam-focused support
- A-Level students who need structured topic help
- Learners who need confidence, revision planning and clearer explanations

## Recommended Colour Palette

Use a simple, consistent palette.

| Purpose                  | Colour         | Hex       |
| ------------------------ | -------------- | --------- |
| Primary brand            | Navy           | `#00387D` |
| Secondary brand          | Teal           | `#0F766E` |
| Main accent              | Warm yellow    | `#F7B200` |
| Accent hover             | Deeper yellow  | `#D99800` |
| Text heading             | Ink            | `#101828` |
| Body text                | Slate          | `#1D2939` |
| Muted text               | Soft slate     | `#475467` |
| Light section background | Soft blue      | `#EFF6FF` |
| Page background          | White          | `#FFFFFF` |
| Footer background        | Ink navy       | `#0B1F3A` |
| Footer border            | Soft navy      | `#123B63` |

## Colour Usage

Primary navy should be used for:

- Header/nav accents
- Footer background
- Main headings
- Important section titles

Teal should be used for:

- Links
- Secondary buttons
- Icons
- Small highlights

Warm yellow should be used sparingly for:

- Main call-to-action buttons
- Important badges
- Price highlights
- Small emphasis areas

Avoid using many bright colours at once. The current template includes child-friendly colours such as red, yellow, green and blue. These can make the site feel generic. For a tutoring business, navy, blue, yellow and white will look more trustworthy.

## Button Style

Use one main button style across the whole site.

Primary button:

- Background: `#F7B200`
- Text: `#00387D`
- Hover background: `#D99800`
- Hover text: `#00387D`
- Text examples:
  - Book a Free Consultation
  - Register Interest
  - Contact Mr Sheraz

Secondary button:

- Background: transparent or white
- Border: `#00387D`
- Text: `#00387D`
- Hover background: `#00387D`
- Hover text: `#FFFFFF`

Use the shared `.btn-primary` and `.btn-secondary` utilities rather than adding one-off button colours on individual pages.

## Typography Direction

The site should feel readable and calm.

Recommended style:

- Headings: bold, clear and not too decorative
- Body text: simple, medium-sized and easy to scan
- Avoid all-caps headings except for small labels
- Avoid very playful fonts

Tone should be:

- Friendly
- Confident
- Clear
- Parent-focused
- Results-focused without sounding exaggerated

## Homepage Content Priorities

The homepage should answer these questions quickly:

1. Who is this for?
2. What levels do you teach?
3. Is it online, in person, or both?
4. How much does it cost?
5. How do I book?

Recommended homepage order:

1. Hero section focused on GCSE group tuition
2. Meet Your Tutor
3. Progress/support outcomes
4. GCSE group classes
5. Tuition levels
6. How lessons work
7. Prices
8. Summer Coding Club
9. Parent-style feedback or real testimonials
10. FAQs
11. Register interest call-to-action

## Hero Section Recommendation

Headline:

> GCSE Group Maths Classes in Levenshulme, Manchester

Supporting text:

> Small focused group tuition for GCSE Foundation and Higher students, with exam-style practice, clear explanations and support from an experienced, DBS-checked teacher.

Primary button:

> Register Your Interest

Secondary button:

> View Tuition Options

## Section Naming

Replace generic template labels with specific tutoring labels.

Use:

- Maths Tuition Services
- GCSE Maths Support
- A-Level Maths Tuition
- GCSE Group Classes
- Online Maths Tuition
- Parent-Style Feedback
- Free Maths Resources
- Contact Maths Tutor Help

## Implementation Notes

The palette is defined in:

- `src/components/CustomStyles.astro` for global CSS variables
- `src/assets/styles/tailwind.css` for Tailwind theme names and button utilities

Use these Tailwind colour names where possible:

- `primary` for main navy
- `secondary` for teal
- `accent` for warm yellow
- `accent-hover` for yellow hover states
- `brand-navy` for fixed navy text on yellow buttons
- `brand-soft` for pale blue section backgrounds
- `footer` for the dark footer background
- `footer-border` for footer borders

Avoid reintroducing generic template colour utilities such as `bg-blue-50`, `text-purple-*`, `bg-indigo-*` or one-off arbitrary hex classes unless there is a clear reason.

Avoid:

- Services
- Online Courses
- MTH Link
- Tailor-made Math courses

## Language Rules

Use UK wording consistently.

Use:

- Maths
- Tuition
- Personalised
- GCSE
- IGCSE
- A-Level
- Functional Skills

Avoid:

- Math
- Courses, unless it really is a structured course
- Generic claims like "best tutor" without proof

## Content Fixes Needed On Live Site

Fix these visible wording issues:

- `Twiter` -> `Twitter`
- `Instragram` -> `Instagram`
- `clear explaination` -> `clear explanation`
- `The tutor (Mr Cheema) are amazing` -> `Mr Cheema is amazing`
- `Tailor-made Math courses` -> `Tailor-made Maths tuition`
- `math homework` -> `maths homework`

## Domain Recommendation

Choose one main domain.

If the UK market is the focus, use:

> `https://www.mathstutorhelp.co.uk`

Then redirect `.com` to `.co.uk`.

If `.com` is already stronger for SEO, keep:

> `https://mathstutorhelp.com`

Then redirect `.co.uk` to `.com`.

Do not split traffic between both domains. The canonical URL, header text, footer links and SEO settings should all use the same main domain.

## Footer Recommendation

Use a dark navy footer:

- Background: `#0B1F3A`
- Border: `#123B63`
- Headings: white
- Body text: white or very light grey
- Links: `#F7B200`

Footer columns:

- Tuition
- Classes & Portal
- Fees & Booking
- Free Revision Resources

## Trust Signals To Add

Add these near the top of the homepage:

- Qualified teacher
- DBS checked
- 15+ years' experience
- Online and in-person lessons
- Manchester-based
- GCSE, IGCSE and A-Level support

Keep these signals close to the hero and Meet Your Tutor sections. Use later homepage sections for outcomes such as confidence, routine, exam technique and parent feedback rather than repeating the same credentials.

## Overall Design Goal

The site should feel like a serious, approachable UK tutoring business. Keep the template structure if needed, but reduce the number of colours, make call-to-action buttons consistent, use clearer section titles, and keep the message focused on maths tuition, confidence and exam progress.
