export interface BlogSection {
  heading: string;
  paragraphs: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  image: string;
  imageAlt: string;
  excerpt: string;
  category: string;
  tags: string[];
  content: BlogSection[];
}

export const BLOG_POSTS_PER_PAGE = 3;

export const blogPosts: BlogPost[] = [
  {
    slug: '5-expert-tips-for-maths-revision',
    title: '5 Expert Tips for Maths Revision',
    date: '2024-06-06',
    image: '/images/blog/5-expert-tips-for-maths-revision.jpg',
    imageAlt: 'Maths revision advice banner for GCSE students',
    excerpt: 'Simple, practical revision advice for students preparing for GCSE Maths exams, mocks or topic tests.',
    category: 'MathsTutorHelp Blog',
    tags: ['GCSE Maths', 'Revision'],
    content: [
      {
        heading: 'Start with the topics that lose the most marks',
        paragraphs: [
          'Good maths revision is not just about doing more questions. It is about finding the topics that are costing marks and practising them in a focused way.',
          'Students should look through recent tests, homework and mock papers to spot patterns. If algebra, ratio, fractions or graphs keep causing problems, those topics should move to the top of the revision list.',
        ],
      },
      {
        heading: 'Use short, regular practice',
        paragraphs: [
          'Long revision sessions can feel productive, but shorter sessions are often easier to keep consistent. Twenty to thirty minutes of focused practice can be more useful than several hours of distracted work.',
          'A simple weekly routine helps students build confidence without leaving everything until the final weeks before an exam.',
        ],
      },
      {
        heading: 'Practise exam-style questions',
        paragraphs: [
          'Once a method has been learned, students should practise questions that look like real exam questions. This helps them understand wording, marks, working-out and common traps.',
          'For GCSE Maths, students should practise both calculator and non-calculator questions so they know which methods to use under exam conditions.',
        ],
      },
      {
        heading: 'Write down working clearly',
        paragraphs: [
          'Many marks in maths come from method, not just the final answer. Students should get used to writing each step clearly, especially for multi-step questions.',
          'Clear working also makes it easier to find mistakes and correct them.',
        ],
      },
      {
        heading: 'Review mistakes calmly',
        paragraphs: [
          'Mistakes are useful when students review them properly. Instead of just marking an answer wrong, students should ask what went wrong: method, arithmetic, question wording or exam timing.',
          'That reflection turns revision into progress.',
        ],
      },
    ],
  },
  {
    slug: 'finding-a-maths-tutor-in-manchester',
    title: 'Finding a Maths Tutor in Manchester',
    date: '2024-06-06',
    image: '/images/blog/finding-a-maths-tutor-in-manchester.jpg',
    imageAlt: 'Finding a maths tutor in Manchester banner',
    excerpt: 'What parents should look for when choosing maths tuition in Manchester, online or in person.',
    category: 'MathsTutorHelp Blog',
    tags: ['Maths Tuition', 'Manchester'],
    content: [
      {
        heading: 'Choose the right type of support',
        paragraphs: [
          'Some students need one-to-one tuition, while others do well in a small group. The best choice depends on confidence, current level, timetable and exam goals.',
          'One-to-one tuition is useful for targeted gaps. Small group classes can work well for routine, exam practice and affordable weekly support.',
        ],
      },
      {
        heading: 'Look for clear teaching experience',
        paragraphs: [
          'A good tutor should be able to explain methods in simple steps and adapt when a student does not understand something the first time.',
          'For exam years, it also helps if the tutor understands GCSE-style questions, mark schemes and common mistakes.',
        ],
      },
      {
        heading: 'Ask about DBS and professionalism',
        paragraphs: [
          'Parents should feel confident that tuition is professional and responsible. A DBS-checked tutor and clear communication help build that trust.',
          'It is also sensible to ask how progress is reviewed and how parents can raise questions.',
        ],
      },
      {
        heading: 'Consider location and routine',
        paragraphs: [
          'For Manchester families, travel time matters. Local tuition in areas such as Levenshulme, Longsight, Burnage, Didsbury and Stockport can be convenient.',
          'Online tuition is also a strong option for students who prefer learning from home or need more flexible scheduling.',
        ],
      },
    ],
  },
  {
    slug: 'new-gcse-maths-curriculum-changes',
    title: 'New GCSE Maths Curriculum Changes',
    date: '2024-06-05',
    image: '/images/blog/new-gcse-maths-curriculum-changes.jpg',
    imageAlt: 'GCSE Maths curriculum changes banner',
    excerpt:
      'A parent-friendly overview of why GCSE Maths now places so much emphasis on problem solving and exam technique.',
    category: 'MathsTutorHelp Blog',
    tags: ['GCSE Maths', 'Exams'],
    content: [
      {
        heading: 'GCSE Maths is more problem-solving focused',
        paragraphs: [
          'Modern GCSE Maths places strong emphasis on applying methods, not only remembering them. Students are often asked to choose the right approach from a less familiar question.',
          'This is why regular exam-style practice is so important.',
        ],
      },
      {
        heading: 'Students need strong foundations',
        paragraphs: [
          'Core topics such as fractions, ratio, percentages, algebra and geometry appear across many different questions.',
          'If these foundations are weak, harder exam questions can feel much more confusing.',
        ],
      },
      {
        heading: 'Working-out matters',
        paragraphs: [
          'Students should practise showing clear method steps. Even when the final answer is wrong, method marks can still make a difference.',
          'This is especially important for Foundation students aiming for grades 4-5 and Higher students aiming for grades 6-9.',
        ],
      },
      {
        heading: 'Exam board support helps',
        paragraphs: [
          'Edexcel, AQA and OCR all assess the same broad GCSE Maths skills, but question style can vary. Students benefit from practice that matches their exam board where possible.',
        ],
      },
    ],
  },
  {
    slug: 'the-benefits-of-online-maths-tutoring',
    title: 'The Benefits of Online Maths Tutoring',
    date: '2019-08-12',
    image: '/images/blog/the-benefits-of-online-maths-tutoring.jpg',
    imageAlt: 'Online maths tutoring benefits banner',
    excerpt: 'Why online maths tuition can work well for students who need flexible, structured and focused support.',
    category: 'MathsTutorHelp Blog',
    tags: ['Online Tuition', 'Maths Tuition'],
    content: [
      {
        heading: 'Online tuition can be flexible',
        paragraphs: [
          'Online maths tuition allows students to learn from home without travel. This can make it easier to fit regular lessons around school, homework and family commitments.',
          'For many students, the comfort of learning at home also helps reduce stress.',
        ],
      },
      {
        heading: 'Lessons can still be interactive',
        paragraphs: [
          'Good online tuition is not just a video call. Students can use shared screens, digital whiteboards, worksheets and exam-style questions.',
          'The tutor can explain methods step by step and check understanding throughout the lesson.',
        ],
      },
      {
        heading: 'Resources are easy to share',
        paragraphs: [
          'Worksheets, past paper questions and follow-up tasks can be shared quickly after a lesson. This helps students keep practising between sessions.',
        ],
      },
      {
        heading: 'It suits many levels',
        paragraphs: [
          'Online tuition can support KS3, GCSE, IGCSE, Functional Skills and A-Level students. The key is matching the lesson to the student’s level and confidence.',
        ],
      },
    ],
  },
  {
    slug: '5-ways-to-improve-your-gcse-maths-grade',
    title: '5 Ways to Improve Your GCSE Maths Grade',
    date: '2019-08-12',
    image: '/images/blog/5-ways-to-improve-your-gcse-maths-grade.jpg',
    imageAlt: 'Five ways to improve your GCSE Maths grade banner',
    excerpt: 'Five practical ways GCSE students can improve confidence, accuracy and exam performance in maths.',
    category: 'MathsTutorHelp Blog',
    tags: ['GCSE Maths', 'Revision'],
    content: [
      {
        heading: '1. Learn the high-value topics',
        paragraphs: [
          'Some topics appear again and again in GCSE Maths. Number, algebra, ratio, percentages, graphs and geometry are worth revisiting regularly.',
          'Students should aim to secure these areas before moving to harder problem-solving questions.',
        ],
      },
      {
        heading: '2. Practise little and often',
        paragraphs: [
          'Consistent practice builds fluency. A small amount of maths several times a week is usually better than last-minute cramming.',
        ],
      },
      {
        heading: '3. Use past paper questions',
        paragraphs: [
          'Past paper questions help students understand how topics are tested. They also show students how much working-out is expected.',
        ],
      },
      {
        heading: '4. Correct mistakes properly',
        paragraphs: [
          'Improvement comes from understanding errors. Students should rewrite corrected solutions and note the method they should use next time.',
        ],
      },
      {
        heading: '5. Get support early',
        paragraphs: [
          'Waiting until the final weeks before GCSE exams can make revision feel overwhelming. Early support gives students time to build confidence and improve steadily.',
        ],
      },
    ],
  },
];

export const getBlogPost = (slug: string) => blogPosts.find((post) => post.slug === slug);

export const getBlogTags = () => [...new Set(blogPosts.flatMap((post) => post.tags))].sort();

export const getRelatedPosts = (post: BlogPost, limit = 3) =>
  blogPosts
    .filter((candidate) => candidate.slug !== post.slug)
    .map((candidate) => ({
      post: candidate,
      sharedTags: candidate.tags.filter((tag) => post.tags.includes(tag)).length,
    }))
    .sort((a, b) => b.sharedTags - a.sharedTags || Date.parse(b.post.date) - Date.parse(a.post.date))
    .slice(0, limit)
    .map(({ post: relatedPost }) => relatedPost);
