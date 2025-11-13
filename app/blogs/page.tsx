import { getAllBlogPosts } from "../lib/blog";
import BlogNavbar from "../components/BlogNavbar";
import BlogList from "../components/BlogList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Ajinkya Walunj",
  description:
    "Technical articles, tutorials, and insights on software development, AI/ML, and tech in general.",
  keywords: [
    "blog",
    "software development",
    "AI",
    "machine learning",
    "tutorials",
    "programming",
    "tech",
  ],
};

export default async function BlogsPage() {
  const posts = await getAllBlogPosts();

  return (
    <div className="min-h-screen bg-primary">
      <BlogNavbar />

      <main className="max-w-7xl mx-auto px-6 py-12 pt-32">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Insights
            </span>{" "}
            & Articles
          </h1>
          <p className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed">
            Sharing insights on Software Engineering, AI/ML, and tech in
            general. From building scalable applications to exploring
            cutting-edge technologies.
          </p>
        </div>

        {/* Blog List */}
        <BlogList posts={posts} />
      </main>
    </div>
  );
}
