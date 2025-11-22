"use client";

import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "../lib/blog";
import { motion } from "framer-motion";
import { useState } from "react";

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export default function BlogCard({ post, index }: BlogCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <Link href={`/blogs/${post.slug}`}>
        <article className="bg-tertiary rounded-2xl p-6 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-800/20">
          {/* Thumbnail Image */}
          <div className="w-full aspect-[2/1] rounded-xl mb-4 overflow-hidden bg-gradient-to-br from-purple-500/20 to-blue-500/20">
            {post.image && !imageError ? (
              <Image
                src={post.image}
                alt={post.title}
                width={400}
                height={192}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                onError={() => setImageError(true)}
                priority={index < 3} // Prioritize first 3 images
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl opacity-50 mb-2">📝</div>
                  <div className="text-xs text-gray-500 opacity-75">
                    {post.tags[0] || "Article"}
                  </div>
                </div>
              </div>
            )}
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
