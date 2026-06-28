import type { ImageMetadata } from 'astro';

import tutor from '~/assets/images/maths-tutor-sheraz-cheema.jpeg';
import tuition from '~/assets/images/maths-tuition-courses.jpg';
import onlineLesson from '~/assets/images/online-maths-lesson-laptop.jpg';
import onlinePackages from '~/assets/images/online-maths-tutoring-packages.jpg';
import higherMathsNotes from '~/assets/images/gcse-higher-maths-notes.jpg';
import supportAssistant from '~/assets/images/maths-support-assistant-classroom.jpg';

import classroom from '~/assets/images/gallery/levenshulme-classroom.jpeg';
import circleTheorems from '~/assets/images/gallery/classroom-circle-theorems.jpeg';
import schoolBuilding from '~/assets/images/gallery/levenshulme-high-school-building.jpeg';
import classesPoster from '~/assets/images/gallery/ks3-gcse-maths-classes-manchester.jpeg';
import revisionPoster from '~/assets/images/gallery/enrol-now-revision-classes.jpeg';
import revisionCourse from '~/assets/images/gallery/manchesterrevisionclass.jpeg';
import tutorCharacter from '~/assets/images/gallery/mth-tutor-character.jpeg';
import tutorPortrait from '~/assets/images/gallery/maths-tutor-sheraz-cheema-home.jpeg';
import tutorTeaching from '~/assets/images/gallery/maths-tutor-sheraz-cheema.jpeg';
import gcseFlyer from '~/assets/images/gallery/mth-gcse-classes-flyer-2026.jpeg';
import codingFlyer from '~/assets/images/gallery/mth-summer-coding-flyer-2026.jpeg';

import revisionTips from '~/assets/images/blog/5-expert-tips-for-maths-revision.jpg';
import findingTutor from '~/assets/images/blog/finding-a-maths-tutor-in-manchester.jpg';
import curriculumChanges from '~/assets/images/blog/new-gcse-maths-curriculum-changes.jpg';
import onlineTutoring from '~/assets/images/blog/the-benefits-of-online-maths-tutoring.jpg';
import improveGrade from '~/assets/images/blog/5-ways-to-improve-your-gcse-maths-grade.jpg';

export const siteImages = {
  tutor,
  tuition,
  onlineLesson,
  onlinePackages,
  higherMathsNotes,
  supportAssistant,
  gallery: {
    classroom,
    circleTheorems,
    schoolBuilding,
    classesPoster,
    revisionPoster,
    revisionCourse,
    tutorCharacter,
    tutorPortrait,
    tutorTeaching,
    gcseFlyer,
    codingFlyer,
  },
} as const;

const blogImages: Record<string, ImageMetadata> = {
  '/images/blog/5-expert-tips-for-maths-revision.jpg': revisionTips,
  '/images/blog/finding-a-maths-tutor-in-manchester.jpg': findingTutor,
  '/images/blog/new-gcse-maths-curriculum-changes.jpg': curriculumChanges,
  '/images/blog/the-benefits-of-online-maths-tutoring.jpg': onlineTutoring,
  '/images/blog/5-ways-to-improve-your-gcse-maths-grade.jpg': improveGrade,
};

export const getBlogImage = (path: string): ImageMetadata => blogImages[path];
