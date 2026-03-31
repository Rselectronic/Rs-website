import type { Metadata } from 'next';
import { BlogHero } from '@/components/blocks/blog/blog-hero';
import { BlogGrid } from '@/components/blocks/blog/blog-grid';

export const metadata: Metadata = {
  title: 'Blog | RS PCB Assembly — Industry Insights & Updates',
  description:
    'Expert perspectives on PCB assembly, manufacturing standards, and electronics industry trends from RS PCB Assembly in Montreal.',
};

export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <BlogGrid />
    </>
  );
}
