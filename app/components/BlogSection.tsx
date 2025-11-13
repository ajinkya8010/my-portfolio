"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { featuredBlogPosts } from "../constants";

const BlogSection = () => {
  return (
    <section id="blogs" className="paddingX py-20 bg-primary">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="sectionSubText">What I write about</p>
          <h2 className="sectionHeadText">Latest Blog Posts</h2>
          <p className="mt-4 text-secondary text-[17px] max-w-3xl mx-auto leading-[30px]">
            I share insights on Software Engineering, AI/ML, and building
            scalable applications. From technical deep-dives to practical
            tutorials.
          </p>
        </motion.div>

        {/* Featured Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredBlogPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Link href={`/blogs/${post.slug}`}>
                <article className="bg-tertiary rounded-2xl p-6 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-800/20">
                  {/* Category Badge */}
                  <div className="mb-4">
                    <span className="px-3 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30">
                      {post.category}
                    </span>
                  </div>

                  {/* Thumbnail Image */}
                  <div className="w-full h-40 rounded-xl mb-4 overflow-hidden bg-gradient-to-br from-purple-500/20 to-blue-500/20">
                    {post.image ? (
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                          e.currentTarget.nextElementSibling?.classList.remove(
                            "hidden"
                          );
                        }}
                      />
                    ) : null}
                    <div
                      className={`w-full h-full flex items-center justify-center ${
                        post.image ? "hidden" : ""
                      }`}
                    >
                      <div className="text-center">
                        <div className="text-3xl opacity-50 mb-2">📝</div>
                        <div className="text-xs text-gray-500 opacity-75">
                          {post.category}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-secondary text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center text-purple-400 text-sm font-medium group-hover:text-purple-300 transition-colors">
                      Read more
                      <svg
                        className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/blogs"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-600 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            View All Posts
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
