import rss from '@astrojs/rss';

import { blogPosts } from '~/utils/blogPosts';
import { getPermalink } from '~/utils/permalinks';

export const GET = () =>
  rss({
    title: 'MathsTutorHelp Blog',
    description: 'Maths revision, exam preparation and tuition advice for students and parents.',
    site: 'https://mathstutorhelp.com',
    items: blogPosts.map((post) => ({
      title: post.title,
      description: post.excerpt,
      pubDate: new Date(post.date),
      link: getPermalink(`/blog/${post.slug}`),
      categories: post.tags,
    })),
  });
