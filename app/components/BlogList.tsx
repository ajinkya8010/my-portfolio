"use client";

import { useState } from "react";
import { BlogPost } from "../lib/blog";
import BlogCard from "./BlogCard";
import { motion } from "framer-motion";

interface BlogListProps {
  posts: BlogPost[];
}

export default function BlogList({ posts }: BlogListProps) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Get all unique tags
  const allTags = Array.from(
    new Set(posts.flatMap((post) => post.tags))
  ).sort();

  // Filter posts by selected tag
  const filteredPosts = selectedTag
    ? posts.filter((post) => post.tags.includes(selectedTag))
    : posts;

  return (
    <div className="space-y-8">
      {/* Tag Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-wrap gap-3"
      >
        <button
          onClick={() => setSelectedTag(null)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            selectedTag === null
              ? "bg-purple-500 text-white shadow-lg"
              : "bg-tertiary text-secondary hover:bg-purple-500/20 hover:text-purple-300"
          }`}
        >
          All Posts ({posts.length})
        </button>
        {allTags.map((tag) => {
          const count = posts.filter((post) => post.tags.includes(tag)).length;
          return (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedTag === tag
                  ? "bg-purple-500 text-white shadow-lg"
                  : "bg-tertiary text-secondary hover:bg-purple-500/20 hover:text-purple-300"
              }`}
            >
              {tag} ({count})
            </button>
          );
        })}
      </motion.div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map((post, index) => (
          <BlogCard key={post.slug} post={post} index={index} />
        ))}
      </div>

      {/* No posts message */}
      {filteredPosts.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-white mb-2">
            No posts found
          </h3>
          <p className="text-secondary">
            Try selecting a different tag or check back later for new content.
          </p>
        </motion.div>
      )}
    </div>
  );
}
