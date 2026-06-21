# MathsTutorHelp Branding Guide

## Brand Position

MathsTutorHelp should feel clear, trustworthy, calm and practical. The website is mainly for parents and students who want reliable maths support from a qualified teacher.

Core message:

> Structured maths tuition in Manchester and online for KS3, GCSE, IGCSE, Functional Skills and A-Level students.

Secondary offer:

> Beginner coding and problem-solving lessons are also available, but they should not overpower the maths tuition offer.

## Main Audience

- Parents looking for a reliable maths tutor in Manchester
- GCSE and IGCSE students who need exam-focused support
- KS3 students who need stronger foundations before GCSE
- A-Level students who need structured topic help
- Functional Skills learners who need practical maths confidence
- Families looking for online one-to-one tuition
- Students interested in beginner coding and logical problem solving

## Tone Of Voice

Use writing that is:

- Clear
- Professional
- Parent-friendly
- Calm
- Trustworthy
- Simple to understand

Avoid language that sounds too salesy or exaggerated. The site should feel like a qualified teacher offering structured support.

Use UK wording consistently:

- Maths
- Tuition
- Personalised
- GCSE
- IGCSE
- A-Level
- Functional Skills

Avoid:

- Math
- Generic phrases like “best tutor” without proof
- Overly playful wording
- “Online Courses” when the offer is really online maths tuition

## Colour Palette

| Purpose | Colour | Hex |
| --- | --- | --- |
| Primary brand | Navy | `#00387D` |
| Secondary brand | Teal | `#0F766E` |
| Main accent | Warm yellow | `#F7B200` |
| Accent hover | Deeper yellow | `#D99800` |
| Text heading | Ink | `#101828` |
| Body text | Slate | `#1D2939` |
| Muted text | Soft slate | `#475467` |
| Light section background | Soft blue | `#EFF6FF` |
| Page background | White | `#FFFFFF` |
| Footer background | Ink navy | `#0B1F3A` |
| Footer border | Soft navy | `#123B63` |

## Colour Usage

Primary navy should be used for:

- Main headings
- Footer background
- Strong trust/brand areas
- Important section titles

Teal should be used for:

- Icons
- Small labels
- Secondary highlights
- Supporting links

Warm yellow should be used sparingly for:

- Main CTA buttons
- Important badges
- Price highlights
- Conversion-focused emphasis

Avoid generic template palettes such as purple/indigo gradients or bright mixed colours that make the site feel less professional.

## Buttons

Use shared button utilities rather than one-off button styling.

Primary button:

- Use for the main action in a section
- Examples:
  - Book a Free Consultation
  - Register Interest
  - Open Hai-BL Form
  - Contact MathsTutorHelp

Secondary button:

- Use for supporting actions
- Examples:
  - View Tuition Options
  - View Group Classes
  - Back to Online Tuition

Header action:

- Current header action is `Login`
- URL: `https://hai-bl.com/auth/login`

Enquiry action:

- Hai-BL interest form URL: `https://hai-bl.com/onboarding/interest-form`
- This form should open as a normal link because Hai-BL blocks iframe embedding.

## Homepage Direction

The homepage should be broad and parent-focused, not only about GCSE group classes.

Current preferred structure:

1. Hero
2. Meet Your Tutor
3. GCSE Group Classes
4. Tuition Services
5. Highlighted Prices
6. Testimonials
7. Summer Coding Club banner
8. FAQs
9. Final CTA

Hero headline:

> Maths Tutor in Manchester for GCSE, IGCSE and A-Level

Supporting text:

> Small group GCSE classes in Levenshulme and online one-to-one maths tuition with a qualified, DBS-checked teacher.

Primary button:

> Register Your Interest

Secondary button:

> View Tuition Options

## Navigation

Keep the top navigation simple:

- Home
- Online Tuition
- Maths Tuition
- About
- Contact
- Login

Avoid adding too many service links to the top nav. Put extra links in the footer instead.

## Footer

Footer groups should remain clear:

- Tuition
- Classes
- Booking
- Resources
- Legal

The footer should keep “Powered by ZakTec Solutions” subtle.

Social links currently include:

- Facebook
- LinkedIn
- Instagram

Exam board badges may be shown subtly in the footer, but avoid using official logos unless permission and correct brand usage are confirmed.

## Page-Specific Direction

### About

The About page should feel personal and trustworthy.

Keep:

- Mr Sheraz near the top
- One real picture of Mr Sheraz
- Qualified teacher
- DBS checked
- 15+ years’ experience
- Clear teaching approach

Avoid turning About into another full services page.

### Contact

The Contact page should be short and enquiry-focused.

Use:

- Phone
- WhatsApp
- Link to Hai-BL enquiry form
- What to include in your message
- What happens next

Do not show a public email unless it is intentionally being used.

### Online Tuition

The Online Tuition page should be a clean overview page with short cards and links to detail pages.

Cards currently include:

- Challenge Maths Club (Year 6)
- KS3 Maths
- GCSE Foundation Maths
- GCSE Higher Maths
- IGCSE Maths
- Functional Skills Maths
- A-Level Maths
- Coding and Problem Solving
- Coding and Problem Solving Part 2

Coding can appear as cards, but the main tone should still prioritise maths tuition.

### Gallery

Gallery images should:

- Have useful alt text
- Display a visible number
- Open larger in the lightbox
- Avoid awkward cropping for portrait posters

## Typography

The site should feel readable and calm.

Recommended style:

- Strong headings
- Clear body text
- Simple section labels
- No negative letter spacing
- No oversized text inside compact cards
- Avoid heavy all-caps except for small labels

## Images

Use real MathsTutorHelp images where possible. Stock images are acceptable as temporary supporting visuals but should be replaced over time.

Priority images:

- Real tutor photo
- Real class/tutoring images
- Posters or resources in the gallery

Avoid using the same picture repeatedly on one page.

## Trust Signals

Use these consistently:

- Qualified teacher
- DBS checked
- 15+ years’ experience
- Manchester / Levenshulme based
- Online and in-person support
- GCSE, IGCSE, Functional Skills and A-Level

Testimonials should only be presented as real testimonials if they are genuine and permission has been given.

## Implementation Notes

Brand tokens live in:

- `src/components/CustomStyles.astro`
- `src/assets/styles/tailwind.css`

Use Tailwind colour names:

- `primary`
- `secondary`
- `accent`
- `accent-hover`
- `brand-navy`
- `brand-soft`
- `footer`
- `footer-border`

Use `getPermalink()` for internal links and `getAsset()` for public/static assets, because the site runs under the `/mathstutorhelp/` base path.

## Remaining Content Fixes

Before launch:

- Rewrite `src/pages/privacy.md`
- Rewrite `src/pages/terms.md`
- Replace more stock images with real MathsTutorHelp images
- Keep pricing consistent across homepage, Maths Tuition and Pricing pages
- Add structured local business/schema metadata if SEO work continues
