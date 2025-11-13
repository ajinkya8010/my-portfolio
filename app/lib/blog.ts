import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const blogsDirectory = path.join(process.cwd(), 'content/blogs');

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  image: string;
  readTime: string;
  content?: string;
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const fileNames = fs.readdirSync(blogsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(blogsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      slug,
      title: matterResult.data.title,
      date: matterResult.data.date,
      excerpt: matterResult.data.excerpt,
      tags: matterResult.data.tags,
      image: matterResult.data.image,
      readTime: matterResult.data.readTime,
    };
  });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(blogsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    // Remove the first H1 from markdown content to avoid duplication
    const contentWithoutFirstH1 = matterResult.content.replace(/^#\s+.*$/m, '');

    const processedContent = await remark()
      .use(html)
      .process(contentWithoutFirstH1);
    const contentHtml = processedContent.toString();

    return {
      slug,
      title: matterResult.data.title,
      date: matterResult.data.date,
      excerpt: matterResult.data.excerpt,
      tags: matterResult.data.tags,
      image: matterResult.data.image,
      readTime: matterResult.data.readTime,
      content: contentHtml,
    };
  } catch (error) {
    return null;
  }
}

export function getAllBlogSlugs() {
  const fileNames = fs.readdirSync(blogsDirectory);
  return fileNames.map((fileName) => ({
    params: {
      slug: fileName.replace(/\.md$/, ''),
    },
  }));
}