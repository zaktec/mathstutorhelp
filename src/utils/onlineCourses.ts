import { bookingLinks } from './siteDetails';

export const registerInterestUrl = bookingLinks.groupClassInterest;

export const onlinePackages = [
  {
    title: 'Bronze',
    detail: '1 online session per month',
    price: '£25/month',
  },
  {
    title: 'Silver',
    detail: '2 online sessions per month',
    price: '£45/month',
    note: 'Equivalent to £22.50 per session',
  },
  {
    title: 'Gold',
    detail: '4 online sessions per month',
    price: '£80/month',
    note: 'Best value - equivalent to £20 per session',
  },
];

export const packageIncludes = [
  'Diagnostic test and personalised learning plan',
  'Access to the online platform and learner resources',
  'Custom online worksheet after every session',
  'Fully qualified and DBS-checked tutor',
  'No contracts - cancel anytime',
  "Support matched to the student's level",
];

export const overviewPackageIncludes = [
  'Diagnostic test and personalised learning plan',
  'Access to the online platform and learner resources',
  'Custom online worksheet after every session',
  'Fully qualified and DBS-checked tutor',
  'No contracts - cancel anytime',
  'Support for KS3, GCSE, IGCSE, Functional Skills and A-Level',
];

export const onlineCourseCards = [
  {
    slug: 'year-6-maths',
    title: 'Challenge Maths Club (Year 6)',
    pageTitle: 'Challenge Maths Club (Year 6) Online Tuition',
    description:
      'Support for Year 6 students preparing for secondary school, with a focus on confidence, number skills and problem solving.',
    intro:
      'Online Challenge Maths Club support for Year 6 students preparing for secondary school. Lessons focus on confidence, number skills, problem solving and clear written methods.',
    bullets: [
      'Fractions, decimals and percentages',
      'Times tables and mental maths',
      'Word problems',
      'Shape and measure',
    ],
    buttonText: 'View Challenge Maths Club',
    whoFor: [
      'Year 6 students preparing for secondary school',
      'Students who need more confidence with maths',
      'Students who find word problems difficult',
      'Parents who want regular support before Year 7',
    ],
    learn: [
      'Fractions, decimals and percentages',
      'Times tables and mental maths',
      'Four operations',
      'Word problems',
      'Shape and measure',
      'Ratio basics',
      'Clear written methods',
    ],
    faqs: [
      {
        title: 'Is this suitable before Year 7?',
        description:
          'Yes. This course helps Year 6 students strengthen key maths skills before starting secondary school.',
      },
      {
        title: 'Do students need to be confident already?',
        description: 'No. Lessons are calm, step-by-step and suitable for students who need confidence.',
      },
      {
        title: 'Will homework be given?',
        description: 'A custom worksheet can be provided after each session to support practice.',
      },
    ],
  },
  {
    slug: 'ks3-maths',
    title: 'KS3 Maths',
    pageTitle: 'KS3 Maths Online Tuition',
    description:
      'Structured support for students in Years 7, 8 and 9 who need to build strong foundations before GCSE.',
    intro:
      'Structured online maths support for students in Years 7, 8 and 9 who need to build strong foundations before GCSE.',
    bullets: [
      'Number skills',
      'Algebra basics',
      'Fractions, decimals and percentages',
      'Geometry and angles',
      'Graphs and data',
    ],
    buttonText: 'View KS3 Maths',
    whoFor: [
      'Year 7, Year 8 and Year 9 students',
      'Students who find maths confusing or stressful',
      'Students who need help with school topics',
      'Students preparing early for GCSE',
    ],
    learn: [
      'Number skills',
      'Algebra basics',
      'Fractions, decimals and percentages',
      'Ratio and proportion',
      'Geometry and angles',
      'Graphs and data',
      'Problem solving',
    ],
    faqs: [
      {
        title: 'Is this suitable for Year 7, Year 8 and Year 9?',
        description: "Yes. The lessons can be matched to the student's year group and ability.",
      },
      {
        title: 'Can this help before GCSE?',
        description: 'Yes. KS3 support helps build the foundation needed for GCSE Maths.',
      },
      {
        title: 'Will lessons follow school topics?',
        description: 'Lessons can follow school topics or focus on gaps found through a diagnostic check.',
      },
    ],
  },
  {
    slug: 'gcse-foundation-maths',
    title: 'GCSE Foundation Maths',
    pageTitle: 'GCSE Foundation Maths Online Tuition',
    description:
      'Online support for students aiming to secure grades 4-5, with clear methods, confidence building and regular exam-style practice.',
    intro:
      'Online GCSE Foundation maths support for students aiming to secure grades 4-5 through clear methods, regular practice and exam-style questions.',
    bullets: [
      'Number and algebra',
      'Ratio and proportion',
      'Geometry and statistics',
      'Exam technique',
      'Edexcel, AQA and OCR support',
    ],
    buttonText: 'View GCSE Foundation',
    whoFor: [
      'GCSE students aiming for grade 4 or 5',
      'Students who need confidence with key topics',
      'Students preparing for mocks or final exams',
      'Students who need help with exam technique',
    ],
    learn: [
      'Number',
      'Algebra',
      'Ratio and proportion',
      'Geometry',
      'Statistics',
      'Probability',
      'Calculator and non-calculator methods',
      'Edexcel, AQA and OCR exam practice',
    ],
    faqs: [
      {
        title: 'Is this for students aiming for a pass?',
        description: 'Yes. This course is suitable for students aiming for grades 4-5.',
      },
      {
        title: 'Do you cover exam-style questions?',
        description: 'Yes. Lessons include GCSE-style practice and working-out methods.',
      },
      {
        title: 'Which exam boards are supported?',
        description: 'Support is available for Edexcel, AQA and OCR GCSE Maths.',
      },
    ],
  },
  {
    slug: 'gcse-higher-maths',
    title: 'GCSE Higher Maths',
    pageTitle: 'GCSE Higher Maths Online Tuition',
    description:
      'Focused online support for students aiming for grades 6-9, including higher-level topics and problem-solving practice.',
    intro:
      'Focused online GCSE Higher maths support for students aiming for grades 6-9, including higher-level topics and problem-solving practice.',
    bullets: [
      'Quadratics and algebra',
      'Trigonometry',
      'Circle theorems',
      'Vectors and functions',
      'Edexcel, AQA and OCR support',
    ],
    buttonText: 'View GCSE Higher',
    whoFor: [
      'GCSE Higher students aiming for grades 6-9',
      'Students who need help with harder topics',
      'Students preparing for mocks or final GCSE exams',
      'Students who want to improve exam technique',
    ],
    learn: [
      'Quadratics',
      'Algebraic manipulation',
      'Simultaneous equations',
      'Trigonometry',
      'Circle theorems',
      'Vectors',
      'Functions',
      'Advanced problem solving',
      'Edexcel, AQA and OCR exam practice',
    ],
    faqs: [
      {
        title: 'Is this suitable for grade 6-9 students?',
        description: 'Yes. This course focuses on Higher GCSE content and harder exam questions.',
      },
      {
        title: 'Can you help with problem solving?',
        description: 'Yes. Lessons include guided problem-solving practice and exam technique.',
      },
      {
        title: 'Which exam boards are supported?',
        description: 'Support is available for Edexcel, AQA and OCR GCSE Maths.',
      },
    ],
  },
  {
    slug: 'igcse-maths',
    title: 'IGCSE Maths',
    pageTitle: 'IGCSE Maths Online Tuition',
    description:
      'Structured online support for IGCSE students, with topic revision, worked examples and exam-style question practice.',
    intro:
      'Structured online IGCSE maths support with clear explanations, topic revision and exam-style question practice.',
    bullets: [
      'Algebra and graphs',
      'Geometry and trigonometry',
      'Statistics and probability',
      'Exam technique',
      'Pearson Edexcel and Cambridge support',
    ],
    buttonText: 'View IGCSE Maths',
    whoFor: [
      'IGCSE students studying at school or independently',
      'Students preparing for Pearson Edexcel or Cambridge IGCSE',
      'Students who need support with exam-style questions',
      'Students who want clearer topic explanations',
    ],
    learn: [
      'Algebra',
      'Graphs',
      'Geometry',
      'Trigonometry',
      'Statistics',
      'Probability',
      'Exam technique',
      'Pearson Edexcel and Cambridge-style practice',
    ],
    faqs: [
      {
        title: 'Do you support IGCSE students?',
        description: 'Yes. Support is available for IGCSE Maths students.',
      },
      {
        title: 'Which IGCSE exam boards are supported?',
        description: 'Support is available for Pearson Edexcel and Cambridge where suitable.',
      },
      {
        title: 'Can lessons focus on exam papers?',
        description: 'Yes. Lessons can include topic revision and exam-style question practice.',
      },
    ],
  },
  {
    slug: 'functional-skills-maths',
    title: 'Functional Skills Maths',
    pageTitle: 'Functional Skills Maths Online Tuition',
    description:
      'Practical maths support for learners who need confidence with everyday maths and Functional Skills assessments.',
    intro:
      'Practical online maths support for learners who need confidence with everyday maths and Functional Skills assessments.',
    bullets: [
      'Money and percentages',
      'Fractions and decimals',
      'Measures and ratio',
      'Charts and tables',
      'Real-life problem solving',
    ],
    buttonText: 'View Functional Skills',
    whoFor: [
      'Functional Skills Level 1 or Level 2 learners',
      'Adult learners returning to maths',
      'Students preparing for college, work or apprenticeships',
      'Learners who need practical real-life maths support',
    ],
    learn: [
      'Money',
      'Percentages',
      'Fractions and decimals',
      'Measures',
      'Ratio',
      'Charts and tables',
      'Real-life problem solving',
      'Assessment-style questions',
    ],
    faqs: [
      {
        title: 'Is this suitable for adult learners?',
        description: 'Yes. Functional Skills support is suitable for adult learners and college students.',
      },
      {
        title: 'Can lessons focus on real-life maths?',
        description: 'Yes. Lessons can include money, measures, percentages, charts and practical problem solving.',
      },
      {
        title: 'Do you support Level 1 and Level 2?',
        description: 'Yes. Support can be matched to Level 1 or Level 2.',
      },
    ],
  },
  {
    slug: 'a-level-maths',
    title: 'A-Level Maths',
    pageTitle: 'A-Level Maths Online Tuition',
    description:
      'Focused support for A-Level students who need help with pure maths, statistics, mechanics and exam technique.',
    intro:
      'Focused online A-Level maths support for students who need help with pure maths, statistics, mechanics and exam technique.',
    bullets: ['Pure maths', 'Differentiation and integration', 'Statistics', 'Mechanics', 'Exam-style practice'],
    buttonText: 'View A-Level Maths',
    whoFor: [
      'Year 12 and Year 13 students',
      'Students finding A-Level maths challenging',
      'Students preparing for assessments, mocks or final exams',
      'Students who need help with problem solving',
    ],
    learn: [
      'Pure maths',
      'Differentiation',
      'Integration',
      'Trigonometry',
      'Coordinate geometry',
      'Statistics',
      'Mechanics',
      'Exam-style practice',
    ],
    faqs: [
      {
        title: 'Do you support Year 12 and Year 13?',
        description: 'Yes. A-Level Maths support is available for both Year 12 and Year 13 students.',
      },
      {
        title: 'Can lessons cover pure maths, statistics and mechanics?',
        description: 'Yes. Lessons can focus on pure maths, statistics, mechanics or a mixture of areas.',
      },
      {
        title: 'Can you help with exam technique?',
        description: 'Yes. Lessons include worked examples, exam-style questions and problem-solving practice.',
      },
    ],
  },
  {
    slug: 'coding-problem-solving',
    title: 'Coding and Problem Solving',
    pageTitle: 'Coding and Problem Solving Online Lessons',
    description:
      'Beginner-friendly coding lessons that help students develop logical thinking, problem-solving skills and confidence with programming.',
    intro:
      'Beginner-friendly coding lessons that help students develop logical thinking, programming confidence and problem-solving skills.',
    bullets: [
      'Python basics',
      'If statements and loops',
      'Functions',
      'Simple projects',
      'Debugging and computational thinking',
    ],
    note: 'Separate from maths tuition, but useful for students who enjoy logic, puzzles and problem solving.',
    buttonText: 'View Coding and Problem Solving',
    whoFor: [
      'Students aged 10+',
      'Beginners who want to learn coding',
      'Students who enjoy logic, puzzles and problem solving',
      'Students preparing for Computer Science at school',
    ],
    learn: [
      'Python basics',
      'Variables and data types',
      'If statements',
      'Loops',
      'Functions',
      'Simple projects',
      'Debugging skills',
      'Computational thinking',
    ],
    faqs: [
      {
        title: 'Is this suitable for beginners?',
        description: 'Yes. The lessons are beginner-friendly and do not require previous coding experience.',
      },
      {
        title: 'What language is used?',
        description: 'Python can be used because it is beginner-friendly and useful for school-level Computer Science.',
      },
      {
        title: 'Does coding help with maths?',
        description: 'Coding can support logical thinking, sequencing, problem solving and confidence with technology.',
      },
    ],
  },
  {
    slug: 'coding-problem-solving-part-2',
    title: 'Coding and Problem Solving Part 2',
    pageTitle: 'Coding and Problem Solving Part 2 Online Lessons',
    description:
      'Next-step coding lessons for students who know the basics and are ready to build more confidence with Python projects.',
    intro:
      'Part 2 coding lessons help students move beyond the basics with more structured Python practice, simple projects and stronger problem-solving habits.',
    bullets: [
      'Lists and strings',
      'Nested if statements',
      'Loops with data',
      'Functions and mini projects',
      'Debugging practice',
    ],
    note: 'This is suitable for students who have completed beginner coding or already understand simple Python basics.',
    buttonText: 'View Coding Part 2',
    whoFor: [
      'Students who have completed beginner coding',
      'Students who understand variables, if statements and loops',
      'Students ready for more independent problem solving',
      'Students preparing for school Computer Science topics',
    ],
    learn: [
      'Lists and strings',
      'Nested if statements',
      'For loops and while loops',
      'Functions with parameters',
      'Reading and improving code',
      'Debugging common errors',
      'Mini projects',
      'Computational thinking',
    ],
    faqs: [
      {
        title: 'Does my child need to complete Part 1 first?',
        description: 'Part 1 is helpful, but not essential if your child already understands simple Python basics.',
      },
      {
        title: 'Is this still beginner-friendly?',
        description: 'Yes. It is still taught step by step, but it moves into more independent coding tasks.',
      },
      {
        title: 'Will students build projects?',
        description:
          'Yes. Lessons can include small Python projects that practise logic, debugging and problem solving.',
      },
    ],
  },
];

export const lessonSteps = [
  'Diagnostic check',
  'Clear explanation',
  'Guided practice',
  'Exam-style or skill-based questions',
  'Worksheet after the lesson',
  'Feedback and next steps',
];
