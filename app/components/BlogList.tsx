"use client";

import { useState, useRef, useEffect } from "react";
import { BlogPost } from "../lib/blog";
import BlogCard from "./BlogCard";
import { motion } from "framer-motion";

interface BlogListProps {
  posts: BlogPost[];
}

export default function BlogList({ posts }: BlogListProps) {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Get all unique tags with counts
  const allTags = Array.from(new Set(posts.flatMap((post) => post.tags)))
    .sort()
    .map((tag) => ({
      name: tag,
      count: posts.filter((post) => post.tags.includes(tag)).length,
    }));

  // Filter tags based on search term
  const filteredTags = allTags.filter((tag) =>
    tag.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Filter posts by selected tags (AND logic - post must have ALL selected tags)
  const filteredPosts =
    selectedTags.length > 0
      ? posts.filter((post) =>
          selectedTags.every((tag) => post.tags.includes(tag))
        )
      : posts;

  // Handle tag selection
  const toggleTag = (tagName: string) => {
    setSelectedTags((prev) =>
      prev.includes(tagName)
        ? prev.filter((tag) => tag !== tagName)
        : [...prev, tagName]
    );
  };

  // Clear all filters
  const clearAllFilters = () => {
    setSelectedTags([]);
    setSearchTerm("");
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="space-y-8">
      {/* Tag Filter Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-wrap items-center gap-4"
      >
        {/* Tag Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-2 px-4 py-2 bg-tertiary text-secondary hover:bg-purple-500/20 hover:text-purple-300 rounded-full text-sm font-medium transition-all border border-gray-700"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
              />
            </svg>
            Filter by Tags
            <svg
              className={`w-4 h-4 transition-transform ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {/* Dropdown Content */}
          {isDropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute top-full left-0 mt-2 w-80 bg-tertiary border border-gray-700 rounded-xl shadow-xl z-50"
            >
              {/* Search Bar */}
              <div className="p-4 border-b border-gray-700">
                <div className="relative">
                  <svg
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search tags..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                  />
                </div>
              </div>

              {/* Tags List */}
              <div className="max-h-64 overflow-y-auto">
                {filteredTags.length > 0 ? (
                  <div className="p-2">
                    {filteredTags.map((tag) => (
                      <label
                        key={tag.name}
                        className="flex items-center justify-between p-2 hover:bg-gray-700/50 rounded-lg cursor-pointer transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            checked={selectedTags.includes(tag.name)}
                            onChange={() => toggleTag(tag.name)}
                            className="w-4 h-4 text-purple-500 bg-gray-700 border-gray-600 rounded focus:ring-purple-500 focus:ring-2"
                          />
                          <span className="text-white text-sm">{tag.name}</span>
                        </div>
                        <span className="text-xs text-gray-400 bg-gray-700 px-2 py-1 rounded-full">
                          {tag.count}
                        </span>
                      </label>
                    ))}
                  </div>
                ) : (
                  <div className="p-4 text-center text-gray-400">
                    No tags found matching "{searchTerm}"
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </div>

        {/* Selected Tags Display */}
        {selectedTags.length > 0 && (
          <>
            <div className="flex flex-wrap gap-2">
              {selectedTags.map((tag) => (
                <span
                  key={tag}
                  className="flex items-center gap-1 px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
                >
                  {tag}
                  <button
                    onClick={() => toggleTag(tag)}
                    className="ml-1 hover:text-purple-200 transition-colors"
                  >
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </span>
              ))}
            </div>

            {/* Clear All Button */}
            <button
              onClick={clearAllFilters}
              className="px-4 py-2 text-sm text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-full transition-colors border border-red-500/30"
            >
              Clear All
            </button>
          </>
        )}

        {/* Results Count */}
        <div className="text-sm text-secondary">
          {filteredPosts.length} of {posts.length} posts
          {selectedTags.length > 0 && (
            <span className="ml-1">
              ({selectedTags.length} tag{selectedTags.length !== 1 ? "s" : ""}{" "}
              selected)
            </span>
          )}
        </div>
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
            {selectedTags.length > 0
              ? "Try removing some filters or selecting different tags."
              : "Check back later for new content."}
          </p>
        </motion.div>
      )}
    </div>
  );
}
