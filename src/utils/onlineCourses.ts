import { bookingLinks } from './siteDetails';

export const registerInterestUrl = bookingLinks.groupClassInterest;

export const onlinePackages = [
  {
    title: 'Bronze',
    detail: 'Course content and WhatsApp messaging support only',
    price: '£15/month',
    note: 'No live sessions',
  },
  {
    title: 'Silver',
    detail: '1 hour of live tutoring per month, plus course content and messaging support',
    price: '£30/month',
    note: '£30/hr',
  },
  {
    title: 'Gold',
    detail: '2 hours of live tutoring per month, plus course content and messaging support',
    price: '£60/month',
    note: '£30/hr',
  },
];

export const packageIncludes = [
  'Access to the selected course content and learner resources',
  'WhatsApp messaging support for questions between sessions',
  'Custom worksheet or practice task linked to the course',
  'Option to include live one-to-one tutoring on Silver and Gold',
  'Fully qualified and DBS-checked tutor support',
  'No contracts - cancel anytime',
];

export const overviewPackageIncludes = [...packageIncludes];

export const packageFaqs = [
  {
    title: 'Can I upgrade or downgrade my support level?',
    description:
      'Please ask when registering interest. Support level changes depend on availability and will be confirmed before your child starts.',
  },
  {
    title: 'Is Bronze suitable for every course?',
    description:
      'Bronze is best for students who can work independently with course content and messaging support. If your child needs live teaching, Silver or Gold may be a better fit.',
  },
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
    metaDescription:
      'Structured online maths support for Years 7, 8 and 9, covering negative numbers, algebra, ratio, angles and problem solving to build strong foundations before GCSE.',
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
      'Students moving between schools or settling into a new key stage',
      'Students who want to get ahead before starting GCSE topics',
    ],
    learn: [
      'Number: negative numbers, factors and multiples, powers and roots, standard form basics',
      'Algebra: simplifying expressions, solving simple equations, substitution, sequences',
      'Fractions, decimals and percentages: converting between forms, percentage increase/decrease, mixed numbers',
      'Ratio and proportion: sharing in a ratio, scale, best buys',
      'Geometry: angle rules, area and perimeter, introduction to Pythagoras',
      'Graphs and data: plotting and reading graphs, averages, basic probability',
      'Problem solving: multi-step word problems and unfamiliar questions',
    ],
    lessonSteps: [
      'Diagnostic check - a short assessment to find the KS3 topics needing the most attention',
      'Clear explanation - each topic broken into simple, step-by-step methods',
      'Guided practice - supported questions before independent practice',
      'Applied questions - practice that builds toward GCSE-style thinking',
      'Worksheet after the lesson - a short take-home task matched to the topic',
      'Feedback and next steps - a quick note on progress and what to focus on next',
    ],
    packageIncludes: [
      'Diagnostic test and personalised learning plan',
      'Access to the online platform and learner resources',
      'Custom worksheet after every session',
      'Fully qualified and DBS-checked tutor',
      'No contracts - cancel anytime',
      "Lessons adapted to the student's school and current topics where possible",
    ],
    faqs: [
      {
        title: 'Is this suitable for Year 7, Year 8 and Year 9?',
        description: "Yes. Lessons are matched to the student's year group, school curriculum and current ability.",
      },
      {
        title: 'Can this help before GCSE?',
        description:
          'Yes. KS3 support is designed to build the number, algebra and geometry foundations that GCSE Maths builds directly on.',
      },
      {
        title: 'Will lessons follow school topics?',
        description:
          'Yes, where possible. We can follow what the student is currently covering at school, or focus on gaps found in the diagnostic check - whichever is more useful.',
      },
      {
        title: 'What if my child is ahead of their year group?',
        description:
          'Lessons can move at the right pace - some students use KS3 tuition to get a head start on early GCSE topics.',
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
    metaDescription:
      'Online Functional Skills Maths support for students and adult learners working towards Level 1 or Level 2 assessments, including apprenticeship and college requirements.',
    description: 'Practical, exam-focused support for learners working towards Functional Skills Level 1 or Level 2.',
    intro:
      'Practical, exam-focused maths support for students and adult learners working towards Functional Skills Level 1 or Level 2.',
    bullets: [
      'Money and percentages',
      'Fractions and decimals',
      'Measures and ratio',
      'Charts and tables',
      'Real-life problem solving',
    ],
    buttonText: 'View Functional Skills',
    whoFor: [
      'Students who need a Functional Skills qualification instead of, or alongside, GCSE Maths',
      'Apprentices who need Level 1 or Level 2 Maths to complete their apprenticeship',
      'Adult learners returning to study, including for college courses or career changes',
      'Anyone who needs to pass a Functional Skills assessment with a clear deadline',
    ],
    learn: [
      'Number: whole numbers, decimals, negative numbers, rounding',
      'Money and percentages: budgeting, discounts, percentage increase/decrease, calculating change',
      'Fractions and decimals: converting between forms and everyday quantities',
      'Measures, shape and space: units, perimeter, area and reading scales',
      'Ratio and proportion: scaling recipes, mixing ratios and unit pricing',
      'Statistics: charts, tables, graphs, averages and interpreting data',
      'Exam practice: past paper questions and timed practice for the relevant awarding body, such as City & Guilds, Pearson or NCFE',
    ],
    lessonSteps: [
      'Diagnostic check - identifies the current level and specific gaps',
      'Clear explanation - practical examples relevant to work and daily life',
      'Guided practice - supported practice before independent exam-style questions',
      'Past paper practice - timed questions in the assessment format',
      'Worksheet after the lesson - short practice tasks to reinforce the session',
      'Feedback and next steps - clear guidance on readiness for the next assessment sitting',
    ],
    packageIncludes: [
      'Diagnostic test to confirm current level and target qualification',
      'Access to the online platform and learner resources',
      'Custom worksheet after every session',
      'Fully qualified and DBS-checked tutor',
      'No contracts - cancel anytime',
      'Flexible scheduling to suit work, apprenticeship or college commitments',
    ],
    faqs: [
      {
        title: "What's the difference between Level 1 and Level 2?",
        description:
          'Level 2 is roughly equivalent to a GCSE grade 4-5 standard and is often required for apprenticeships and further study. Level 1 is the step before this. We can confirm which level suits your situation in the first session.',
      },
      {
        title: 'Do you support adult learners?',
        description:
          'Yes. Many Functional Skills students are adults returning to study, not just school-age students.',
      },
      {
        title: 'Can lessons fit around work or an apprenticeship?',
        description: 'Yes. Online sessions can be scheduled around work shifts, evenings or weekends.',
      },
      {
        title: 'How quickly can I prepare for an assessment?',
        description:
          'This depends on your starting point and the assessment date - the diagnostic check in the first session helps set realistic expectations.',
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
    pageTitle: 'Coding and Problem Solving - Part 1 (Beginner Python)',
    metaDescription:
      'Teacher-led beginner Python coding lessons covering the basics in around 6-8 sessions, building logical thinking and problem-solving skills before progressing to Part 2.',
    description:
      'Teacher-led beginner coding lessons that help students develop logical thinking, problem-solving skills and confidence with programming.',
    intro:
      'Teacher-led beginner coding lessons that help students develop logical thinking, programming confidence and problem-solving skills.',
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
      'Complete beginners - no coding experience needed',
      'Students who enjoy logic, puzzles and problem solving',
      'Students preparing for Computer Science at school',
    ],
    learn: [
      'Getting started: setting up Python, writing and running a first program',
      'Variables and data types: numbers, text and storing information',
      'If statements: making decisions in code',
      'Loops: repeating actions with for and while loops',
      'Functions: writing reusable blocks of code',
      'Simple projects: building small programs such as quizzes and calculators',
      'Debugging skills: finding and fixing common errors',
      'Computational thinking: breaking problems into logical steps',
    ],
    lessonSteps: [
      "Diagnostic check - a quick conversation to confirm the student's starting point",
      'Clear explanation - each new coding concept explained step by step',
      'Guided practice - students write code with support before independent tasks',
      "Mini challenges - short coding problems that apply what's just been learned",
      'Worksheet or take-home task - a small coding exercise before the next session',
      "Feedback and next steps - a note on progress and what's coming up next",
    ],
    packageIncludes: [
      'A relaxed first session to confirm experience level and pace',
      'Access to the online platform and learner resources',
      'Custom worksheet or coding task after every session',
      'Fully qualified and DBS-checked tutor',
      'No contracts - cancel anytime',
      'A certificate-ready final project on completion of Part 1',
    ],
    faqs: [
      {
        title: 'Is this suitable for complete beginners?',
        description: 'Yes. No previous coding experience is required - most students start from scratch.',
      },
      {
        title: 'What software is used?',
        description: 'Students use Thonny, a free, beginner-friendly Python editor.',
      },
      {
        title: 'How long does Part 1 take?',
        description:
          'Most students complete Part 1 in around 6-8 sessions, depending on the package chosen and how quickly they progress.',
      },
      {
        title: 'Does coding help with maths?',
        description:
          'Yes. Coding builds logical thinking, sequencing and problem-solving skills that carry over directly into maths topics like algebra and patterns.',
      },
      {
        title: 'What happens after Part 1?',
        description:
          'Students can continue to Part 2 for more advanced Python projects, or move toward GCSE Computer Science support.',
      },
    ],
  },
  {
    slug: 'coding-problem-solving-part-2',
    title: 'Coding and Problem Solving Part 2',
    pageTitle: 'Coding and Problem Solving Part 2 Online Lessons',
    description:
      'Teacher-led next-step coding lessons for students who know the basics and are ready to build more confidence with Python projects.',
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
