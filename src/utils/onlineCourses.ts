import { bookingLinks } from './siteDetails';

export const registerInterestUrl = bookingLinks.onlineCourseInterest;

// TODO(owner-confirmation): README.md and documents/branding.md still list £15/£30/£60.
// Keep the currently published website prices below until the owner confirms which set is authoritative.
export const onlinePackages = [
  {
    title: 'Bronze',
    subtitle: 'Course Access',
    detail: 'Best for independent learners who need structure and light support.',
    price: '£19/month',
    features: [
      'Access to one selected course or pathway level',
      'New lessons released weekly',
      'Worksheets and practice tasks',
      'Topic checklist',
      'Tutor reviews completed work and monitors progress',
      'Limited WhatsApp support for short course questions',
      'No live lesson included',
    ],
    cta: 'Enquire About Bronze',
  },
  {
    title: 'Silver',
    subtitle: 'Guided Support',
    detail: 'Best for students who need occasional tutor guidance and personalised help.',
    price: '£49/month',
    features: [
      'Everything in Bronze',
      '1 × 55-minute live online lesson per month',
      'Personalised practice after the lesson',
      'Tutor reviews completed work and provides progress guidance',
      'Suitable for students who need help staying on track',
    ],
    cta: 'Enquire About Silver',
  },
  {
    title: 'Gold',
    subtitle: 'Regular Support',
    detail: 'Best for students who need more regular support, deeper guidance or exam preparation.',
    price: '£89/month',
    features: [
      'Everything in Bronze',
      '2 × 55-minute live online lessons per month',
      'More personalised support',
      'Tutor reviews completed work and provides regular progress guidance',
      'Suitable for exam preparation and more challenging course work',
    ],
    cta: 'Enquire About Gold',
  },
];

export const packageIncludes = [
  'Access to one selected online course or pathway level',
  'New lessons released weekly with worksheets and practice tasks',
  'Tutor monitoring of completed work and progress',
  'Limited WhatsApp support for short course questions and guidance',
  'Live online lessons included with Silver and Gold',
  'Fully qualified and DBS-checked tutor support',
  'No long-term contract - cancel anytime',
];

export const overviewPackageIncludes = [...packageIncludes];

export const packageFaqs = [
  {
    title: 'Can I upgrade or downgrade my support level?',
    description:
      'Please ask when registering interest. Support level changes depend on availability and will be confirmed before tuition starts.',
  },
  {
    title: 'Is Bronze suitable for every course?',
    description:
      'Bronze is best for students who can work independently with course content and messaging support. If live teaching is needed, Silver or Gold may be a better fit.',
  },
];

export const onlineCourseCards = [
  {
    slug: 'year-6-maths',
    title: 'Year 6 / Transition Maths',
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
    slug: 'maths-challenge-problem-solving-club',
    title: 'Maths Challenge & Problem-Solving Club',
    pageTitle: 'Maths Challenge & Problem-Solving Club Online',
    metaDescription:
      'Online maths challenge and problem-solving club for students in Years 6-11, with Junior, Intermediate and GCSE Advanced levels matched to age, confidence and ability.',
    description:
      'Build confidence, reasoning and problem-solving skills through challenging maths tasks, puzzles and exam-style questions at Junior, Intermediate or GCSE Advanced level.',
    intro:
      'Our Maths Challenge & Problem-Solving Club helps students develop confidence, reasoning and problem-solving skills through challenging maths tasks, puzzles and exam-style questions. Three levels ensure each student can work at the right level for their age, confidence and ability.',
    note: 'Junior | Intermediate | GCSE Advanced',
    bullets: [
      'Junior: Years 6-7 | Upper KS2 / Early KS3',
      'Intermediate: Years 7-9 | KS3',
      'GCSE Advanced: Years 10-11 | KS4',
    ],
    buttonText: 'View Maths Challenge Club',
    whoFor: [
      'Junior Level — Years 6-7 students who enjoy puzzles, number challenges and mathematical thinking',
      'Intermediate Level — Years 7-9 students ready for deeper mathematical thinking and multi-step problems',
      'GCSE Advanced Level — Years 10-11 students aiming to improve Grade 7-9 problem-solving skills',
      'Students who want to build confidence with unfamiliar, competition-style and exam-style questions',
    ],
    learn: [
      'Junior — number puzzles, patterns and sequences',
      'Junior — fractions, bar models and ratio basics',
      'Junior — shape and angle reasoning, logic problems and working backwards',
      'Junior Maths Challenge-style questions',
      'Intermediate — number theory and advanced sequences',
      'Intermediate — algebraic thinking, ratio and proportion',
      'Intermediate — geometry reasoning, probability and combinations',
      'Intermediate — logic, deduction and UKMT-style challenge questions',
      'GCSE Advanced — Grade 7-9 problem-solving, algebra and equations',
      'GCSE Advanced — ratio, proportion, percentages, graphs and functions',
      'GCSE Advanced — geometry, circle theorems, trigonometry and Pythagoras',
      'GCSE Advanced — probability and Higher GCSE exam-style questions',
    ],
    faqs: [
      {
        title: 'Which level is right for my child?',
        description:
          'The level is matched to the student’s age, confidence and current ability: Junior for Years 6-7, Intermediate for Years 7-9 and GCSE Advanced for Years 10-11.',
      },
      {
        title: 'Does a student need competition maths experience?',
        description:
          'No. The club develops reasoning and problem-solving step by step, so students can build confidence with unfamiliar questions.',
      },
      {
        title: 'Does the GCSE Advanced level support exam preparation?',
        description:
          'Yes. It includes Grade 7-9 reasoning, exam technique and multi-step Higher GCSE exam-style questions.',
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
    title: 'Three-Level Python Course Pathway',
    pageTitle: 'Three-Level Python Course Pathway Online',
    metaDescription:
      'A progressive three-level Python coding programme for students aged around 13-17, from beginner basics to GCSE Computer Science and real-world programming skills.',
    description:
      'A progressive coding programme for students aged around 13-17, starting with Python basics and moving towards GCSE Computer Science and real-world programming skills.',
    intro:
      'This progressive three-level Python pathway is designed for students aged around 13-17. Learners can start from the basics and progress towards GCSE Computer Science and practical, real-world programming skills.',
    bullets: [
      'Level 1 — Python Starter Lab',
      'Level 2 — Python Problem Solvers',
      'Level 3 — Python Developer Challenge',
    ],
    note: 'Level 1 | Level 2 | Level 3',
    buttonText: 'View Python Course Pathway',
    whoFor: [
      'Students aged around 13-17 who want a progressive coding programme',
      'Level 1 — beginners and students who are completely new to coding',
      'Level 2 — students who already understand the Python basics',
      'Level 3 — confident students and those preparing for GCSE Computer Science',
    ],
    learn: [
      'Level 1: Python Starter Lab',
      'Learn basic Python and create simple programs',
      'Level 2: Python Problem Solvers',
      'Build logic, functions, lists and bigger programs',
      'Level 3: Python Developer Challenge',
      'Build structured apps using files, dictionaries and object-oriented programming basics',
    ],
    lessonSteps: [
      'Starting-level check — identify whether Level 1, Level 2 or Level 3 is the right entry point',
      'Clear explanation — learn each new Python concept step by step',
      'Guided coding — write and test programs with teacher support',
      'Problem-solving challenges — apply logic through practical coding tasks',
      'Project development — combine skills to create progressively larger programs and apps',
      'Feedback and progression — review skills and prepare for the next pathway level',
    ],
    packageIncludes: [
      'A starting-level check to select the most suitable pathway level',
      'Access to the online platform and learner resources',
      'Custom worksheet or coding task after every session',
      'Fully qualified and DBS-checked tutor',
      'No contracts - cancel anytime',
      'A progressive route from beginner Python to structured app development',
    ],
    faqs: [
      {
        title: 'Is this suitable for complete beginners?',
        description:
          'Yes. Python Starter Lab is Level 1 of the pathway and is designed for beginners and students who are new to coding.',
      },
      {
        title: 'Does every student need to start at Level 1?',
        description:
          'No. Students who already know the basics can start with Python Problem Solvers, while confident students may be ready for Python Developer Challenge.',
      },
      {
        title: 'What is covered at each level?',
        description:
          'Level 1 covers basic Python and simple programs. Level 2 develops logic, functions, lists and bigger programs. Level 3 introduces structured apps, files, dictionaries and object-oriented programming basics.',
      },
      {
        title: 'Does the pathway support GCSE Computer Science?',
        description:
          'Yes. The pathway builds programming and problem-solving skills that support GCSE Computer Science, particularly at Level 3.',
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
        title: 'Does the learner need to complete Part 1 first?',
        description: 'Part 1 is helpful, but not essential if the learner already understands simple Python basics.',
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
