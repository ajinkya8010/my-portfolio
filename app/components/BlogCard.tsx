"use client";

import Link from "next/link";
import { BlogPost } from "../lib/blog";
import { motion } from "framer-motion";

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export default function BlogCard({ post, index }: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <Link href={`/blogs/${post.slug}`}>
        <article className="bg-tertiary rounded-2xl p-6 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-800/20">
          {/* Image placeholder */}
          <div className="w-full h-48 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl mb-4 flex items-center justify-center">
            <div className="text-4xl opacity-50">📝</div>
          </div>

          {/* Content */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm text-secondary">
              <span>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span>{post.readTime}</span>
            </div>

            <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors line-clamp-2">
              {post.title}
            </h3>

            <p className="text-secondary text-sm leading-relaxed line-clamp-3">
              {post.excerpt}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {post.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30"
                >
                  {tag}
                </span>
              ))}
              {post.tags.length > 3 && (
                <span className="px-3 py-1 text-xs bg-gray-500/20 text-gray-400 rounded-full">
                  +{post.tags.length - 3}
                </span>
              )}
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}
