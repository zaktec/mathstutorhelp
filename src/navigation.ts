import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'Tuition',
      href: getPermalink('/maths-tuition'),
    },
    {
      text: 'Group Classes',
      links: [
        {
          text: 'GCSE Higher Maths',
          href: getPermalink('/gcse-revision-class-higher-manchester'),
        },
        {
          text: 'GCSE Foundation Maths',
          href: getPermalink('/gcse-foundation-maths-tutoring-club-2025'),
        },
        {
          text: 'Summer Coding Course',
          href: getPermalink('/manchestersummercodingclub'),
        },
      ],
    },
    {
      text: 'Student Portal',
      href: 'https://hai-bl.com/onboarding/interest-form',
    },
    {
      text: 'Prices',
      href: getPermalink('/#prices'),
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
  actions: [{ text: 'Book Free Consultation', href: getPermalink('/contact') }],
};

export const footerData = {
  description:
    'Personalised maths tuition for KS3, GCSE, IGCSE, Functional Skills and A-Level, available online or in person in Manchester.',
  links: [
    {
      title: 'Tuition',
      links: [
        { text: 'GCSE Maths Tuition', href: getPermalink('/maths-tuition') },
        { text: 'IGCSE Maths Tuition', href: getPermalink('/maths-level') },
        { text: 'A-Level Maths Tuition', href: getPermalink('/maths-level') },
        { text: 'Functional Skills Maths', href: getPermalink('/maths-level') },
        { text: 'Online Tuition', href: getPermalink('/online-tuitions') },
        { text: 'In-Person Tuition', href: getPermalink('/maths-tuition') },
      ],
    },
    {
      title: 'Classes & Portal',
      links: [
        { text: 'GCSE Higher Group Classes', href: getPermalink('/gcse-revision-class-higher-manchester') },
        { text: 'GCSE Foundation Group Classes', href: getPermalink('/gcse-foundation-maths-tutoring-club-2025') },
        { text: 'Summer Coding Course', href: getPermalink('/manchestersummercodingclub') },
        { text: 'Student Portal', href: 'https://hai-bl.com/onboarding/interest-form' },
        { text: 'Portal Login', href: 'https://hai-bl.com/onboarding/interest-form' },
      ],
    },
    {
      title: 'Prices & Contact',
      links: [
        { text: 'Online Tutoring – £25/hr', href: getPermalink('/online-tuitions') },
        { text: 'In-Person Tutoring – £30/hr', href: getPermalink('/maths-tuition') },
        { text: 'Group Session – £20', href: getPermalink('/gcse-revision-class-higher-manchester') },
        { text: 'Book a Free Consultation', href: getPermalink('/contact') },
        { text: 'Contact', href: getPermalink('/contact') },
      ],
    },
    {
      title: 'Useful Links',
      links: [
        { text: 'BBC Bitesize Maths', href: 'https://www.bbc.co.uk/bitesize/subjects/z38pycw' },
        { text: 'Corbettmaths', href: 'https://corbettmaths.com/' },
        { text: 'Maths Genie', href: 'https://www.mathsgenie.co.uk/' },
        { text: 'MME GCSE Maths Revision', href: 'https://mmerevise.co.uk/gcse-maths-revision/' },
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
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/mathstutorhelp' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/mathstutorhelp/' },
  ],
  footNote: `
    Copyright &copy; 2026 <a class="text-[#F7B200] underline" href="/">MathsTutorHelp</a>. All rights reserved.<br />Powered by ZakTec Solutions.
  `,
  theme: 'dark',
};
