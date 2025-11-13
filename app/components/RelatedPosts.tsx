"use client";

import { BlogPost } from "../lib/blog";
import BlogCard from "./BlogCard";
import { motion } from "framer-motion";

interface RelatedPostsProps {
  currentPost: BlogPost;
  allPosts: BlogPost[];
}

export default function RelatedPosts({
  currentPost,
  allPosts,
}: RelatedPostsProps) {
  // Find related posts based on shared tags
  const relatedPosts = allPosts
    .filter((post) => post.slug !== currentPost.slug) // Exclude current post
    .map((post) => ({
      ...post,
      sharedTags: post.tags.filter((tag) => currentPost.tags.includes(tag))
        .length,
    }))
    .filter((post) => post.sharedTags > 0) // Only posts with shared tags
    .sort((a, b) => b.sharedTags - a.sharedTags) // Sort by most shared tags
    .slice(0, 3); // Take top 3

  // If we don't have enough related posts, fill with latest posts
  if (relatedPosts.length < 3) {
    const latestPosts = allPosts
      .filter((post) => post.slug !== currentPost.slug)
      .filter((post) => !relatedPosts.some((rp) => rp.slug === post.slug))
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 3 - relatedPosts.length)
      .map((post) => ({
        ...post,
        sharedTags: 0, // Latest posts have 0 shared tags
      }));

    relatedPosts.push(...latestPosts);
  }

  if (relatedPosts.length === 0) return null;

  return (
    <section className="mt-16 pt-8 border-t border-gray-800/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h3 className="text-2xl font-bold text-white mb-2">Related Articles</h3>
        <p className="text-secondary">
          You might also find these articles interesting
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedPosts.map((post, index) => (
          <BlogCard key={post.slug} post={post} index={index} />
        ))}
      </div>
    </section>
  );
}
