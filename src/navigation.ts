import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'GCSE Group Classes',
      href: `${getPermalink('/')}#group-classes`,
    },
    {
      text: 'Tuition',
      href: getPermalink('/maths-tuition'),
    },
    {
      text: 'Prices',
      href: getPermalink('/pricing'),
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
  actions: [{ text: 'Register Your Interest', href: 'https://hai-bl.com/onboarding/interest-form' }],
};

export const footerData = {
  description:
    'Personalised maths tuition for KS3, GCSE, IGCSE, Functional Skills and A-Level, available online or in person in Manchester.<br /><br />Qualified Teacher | DBS Checked | 15+ Years’ Experience<br />Location: Levenshulme, Manchester<br />Online tuition available across the UK<br />WhatsApp: <a class="text-accent underline" href="https://wa.me/447860248525">07860 248525</a>',
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
        { text: 'GCSE Group Classes', href: `${getPermalink('/')}#group-classes` },
        { text: 'GCSE Higher Group Classes', href: getPermalink('/gcse-revision-class-higher-manchester') },
        { text: 'GCSE Foundation Group Classes', href: getPermalink('/gcse-foundation-maths-tutoring-club-2025') },
        { text: 'Summer Coding Course', href: getPermalink('/manchestersummercodingclub') },
        { text: 'Student Portal Login', href: 'https://hai-bl.com/onboarding/interest-form' },
      ],
    },
    {
      title: 'Fees & Booking',
      links: [
        { text: 'Online Tutoring – £25/hr', href: getPermalink('/online-tuitions') },
        { text: 'In-Person Tutoring – £30/hr', href: getPermalink('/maths-tuition') },
        { text: 'Group Session – £20', href: getPermalink('/gcse-revision-class-higher-manchester') },
        { text: 'Register Your Interest', href: 'https://hai-bl.com/onboarding/interest-form' },
        { text: 'Book a Free Consultation', href: 'https://calendar.app.google/VJ6tgEKfsUZAncDe9' },
        { text: 'Contact', href: getPermalink('/contact') },
      ],
    },
    {
      title: 'Free Revision Resources',
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
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/mathstutorhelp/' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/mathstutorhelp/' },
  ],
  footNote: `
    Copyright &copy; 2026 <a class="text-accent underline" href="/">MathsTutorHelp</a>. All rights reserved.<br />Powered by ZakTec Solutions.
  `,
  theme: 'dark',
};
