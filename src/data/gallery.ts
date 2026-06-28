import type { ImageMetadata } from 'astro';
import { siteImages } from './images';

export interface GalleryItem {
  src: ImageMetadata;
  fullSrc: string;
  alt: string;
  title: string;
  aspectClass?: string;
  objectFitClass?: string;
}

const publicImage = (path: string) => `/images/${path}`;

export const galleryItems: GalleryItem[] = [
  {
    src: siteImages.gallery.gcseFlyer,
    fullSrc: publicImage('gallery/mth-gcse-classes-flyer-2026.jpeg'),
    alt: 'MathsTutorHelp GCSE Maths classes flyer for Higher and Foundation students in Manchester',
    title: 'GCSE Maths Classes 2026',
    aspectClass: 'aspect-[2/3]',
    objectFitClass: 'object-contain bg-gray-50',
  },
  {
    src: siteImages.gallery.codingFlyer,
    fullSrc: publicImage('gallery/mth-summer-coding-flyer-2026.jpeg'),
    alt: 'MathsTutorHelp Manchester Summer Coding Club flyer for students aged 13 to 17',
    title: 'Summer Coding Club 2026',
    aspectClass: 'aspect-[5/7]',
    objectFitClass: 'object-contain bg-gray-50',
  },
  {
    src: siteImages.gallery.classroom,
    fullSrc: publicImage('gallery/levenshulme-classroom.jpeg'),
    alt: 'Levenshulme classroom set up for small group maths tuition',
    title: 'Small Group Classroom',
  },
  {
    src: siteImages.gallery.circleTheorems,
    fullSrc: publicImage('gallery/classroom-circle-theorems.jpeg'),
    alt: 'Classroom screen showing circle theorem maths questions',
    title: 'GCSE Maths Teaching Space',
  },
  {
    src: siteImages.gallery.schoolBuilding,
    fullSrc: publicImage('gallery/levenshulme-high-school-building.jpeg'),
    alt: 'Levenshulme High School building',
    title: 'Levenshulme High School',
    aspectClass: 'aspect-[4/3]',
    objectFitClass: 'object-contain bg-gray-50',
  },
  {
    src: siteImages.gallery.classesPoster,
    fullSrc: publicImage('gallery/ks3-gcse-maths-classes-manchester.jpeg'),
    alt: 'KS3 and GCSE Maths Classes Manchester poster',
    title: 'KS3 and GCSE Maths Classes',
    aspectClass: 'aspect-[3/4]',
    objectFitClass: 'object-contain bg-gray-50',
  },
  {
    src: siteImages.gallery.revisionPoster,
    fullSrc: publicImage('gallery/enrol-now-revision-classes.jpeg'),
    alt: 'Enrol now poster for Maths Revision Classes in Manchester',
    title: 'Maths Revision Classes',
    aspectClass: 'aspect-[3/4]',
    objectFitClass: 'object-contain bg-gray-50',
  },
  {
    src: siteImages.gallery.revisionCourse,
    fullSrc: publicImage('manchesterrevisionclass.jpeg'),
    alt: 'MathsTutorHelp GCSE Maths Revision Course poster',
    title: 'GCSE Maths Revision Course',
    aspectClass: 'aspect-[3/4]',
    objectFitClass: 'object-contain bg-gray-50',
  },
  {
    src: siteImages.gallery.tutorCharacter,
    fullSrc: publicImage('gallery/mth-tutor-character.jpeg'),
    alt: 'MathsTutorHelp tutor character illustration',
    title: 'MathsTutorHelp Character',
  },
  {
    src: siteImages.gallery.tutorPortrait,
    fullSrc: publicImage('maths-tutor-sheraz-cheema-home.jpeg'),
    alt: 'Mr Sheraz from MathsTutorHelp',
    title: 'MathsTutorHelp',
  },
  {
    src: siteImages.gallery.tutorTeaching,
    fullSrc: publicImage('maths-tutor-sheraz-cheema.jpeg'),
    alt: 'Mr Sheraz teaching maths',
    title: 'Maths Teaching',
  },
];
