import { getPermalink } from './utils/permalinks';
import { bookingLinks, ctaLabels } from './utils/siteDetails';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'Tuition Options',
      href: getPermalink('/maths-tuition'),
    },
    {
      text: 'Online Courses',
      href: getPermalink('/online-tuition'),
    },
    {
      text: 'Group Classes',
      href: getPermalink('/gcse-classes'),
    },
    {
      text: 'About Mr Sheraz',
      href: getPermalink('/about'),
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],
  actions: [{ text: 'Student Login', href: bookingLinks.studentLogin }],
};

export const footerData = {
  links: [
    {
      title: 'Tuition',
      links: [
        { text: 'Maths Tuition', href: getPermalink('/maths-tuition') },
        { text: 'Online Courses', href: getPermalink('/online-tuition') },
        { text: 'Tuition Prices', href: getPermalink('/pricing') },
      ],
    },
    {
      title: 'Classes',
      links: [
        { text: 'Group Classes', href: getPermalink('/gcse-classes') },
        { text: 'GCSE Higher Class', href: getPermalink('/gcse-revision-class-higher-manchester') },
        { text: 'GCSE Foundation Class', href: getPermalink('/gcse-foundation-maths-tutoring-club-2025') },
        { text: 'Summer Coding Course', href: getPermalink('/manchestersummercodingclub') },
      ],
    },
    {
      title: 'Booking',
      links: [
        { text: ctaLabels.freeConsultation, href: bookingLinks.freeConsultation },
        { text: ctaLabels.groupClassInterest, href: bookingLinks.groupClassInterest },
      ],
    },
    {
      title: 'Resources',
      links: [
        { text: 'Maths Resources', href: getPermalink('/resources') },
        { text: 'Blog', href: getPermalink('/blog') },
        { text: 'Gallery', href: getPermalink('/gallery') },
        { text: 'Work with MathsTutorHelp', href: getPermalink('/work-with-mth') },
      ],
    },
    {
      title: 'Legal',
      links: [
        { text: 'About', href: getPermalink('/about') },
        { text: 'Safeguarding', href: getPermalink('/safeguarding') },
        { text: 'Privacy Policy', href: getPermalink('/privacy') },
        { text: 'Terms', href: getPermalink('/terms') },
      ],
    },
  ],
  socialLinks: [
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/mathstutorhelp' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/mathstutorhelp/' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/mathstutorhelp/' },
  ],
  footNote: `
    Copyright &copy; 2026 <a class="text-accent underline" href="${getPermalink('/')}">MathsTutorHelp</a>. All rights reserved.<br />Powered by ZakTec Solutions.
  `,
  theme: 'dark',
};
