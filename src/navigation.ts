import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'Online Tuition',
      href: getPermalink('/online-tuitions'),
    },
    {
      text: 'Tuition',
      href: getPermalink('/maths-tuition'),
    },
    {
      text: 'About',
      href: getPermalink('/about'),
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],
  actions: [{ text: 'Register Interest', href: 'https://hai-bl.com/onboarding/interest-form' }],
};

export const footerData = {
  description:
    'Manchester-based maths tuition for GCSE, IGCSE, Functional Skills and A-Level students.<br /><br />Qualified Teacher | DBS Checked | 15+ Years’ Experience<br />WhatsApp: <a class="text-accent underline" href="https://wa.me/447860248525">07860 248525</a>',
  links: [
    {
      title: 'Tuition',
      links: [
        { text: 'Maths Tuition', href: getPermalink('/maths-tuition') },
        { text: 'Online Tuition', href: getPermalink('/online-tuitions') },
        { text: 'Maths Levels', href: getPermalink('/maths-level') },
        { text: 'Prices', href: getPermalink('/pricing') },
      ],
    },
    {
      title: 'Classes',
      links: [
        { text: 'GCSE Group Classes', href: `${getPermalink('/')}#group-classes` },
        { text: 'GCSE Higher Class', href: getPermalink('/gcse-revision-class-higher-manchester') },
        { text: 'GCSE Foundation Class', href: getPermalink('/gcse-foundation-maths-tutoring-club-2025') },
        { text: 'Summer Coding Course', href: getPermalink('/manchestersummercodingclub') },
      ],
    },
    {
      title: 'Booking',
      links: [
        { text: 'Book a Free Consultation', href: 'https://calendar.app.google/VJ6tgEKfsUZAncDe9' },
        { text: 'Register Your Interest', href: 'https://hai-bl.com/onboarding/interest-form' },
        { text: 'Contact', href: getPermalink('/contact') },
      ],
    },
    {
      title: 'Resources',
      links: [
        { text: 'Maths Levels', href: getPermalink('/maths-level') },
        { text: 'Safeguarding', href: getPermalink('/safeguarding') },
      ],
    },
    {
      title: 'Legal',
      links: [
        { text: 'Privacy Policy', href: getPermalink('/privacy') },
        { text: 'Terms', href: getPermalink('/terms') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Home', href: getPermalink('/') },
    { text: 'About', href: getPermalink('/about') },
    { text: 'Contact', href: getPermalink('/contact') },
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
    { text: 'Safeguarding', href: getPermalink('/safeguarding') },
  ],
  socialLinks: [
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/mathstutorhelp' },
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'http://twitter.com' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/mathstutorhelp/' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/mathstutorhelp/' },
  ],
  footNote: `
    Copyright &copy; 2026 <a class="text-accent underline" href="${getPermalink('/')}">MathsTutorHelp</a>. All rights reserved.<br />Powered by ZakTec Solutions.
  `,
  theme: 'dark',
};
