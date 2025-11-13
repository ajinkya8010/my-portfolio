import { getBlogPost, getAllBlogSlugs } from "../../lib/blog";
import BlogNavbar from "../../components/BlogNavbar";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map(({ params }) => ({
    slug: params.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const post = await getBlogPost(params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | Ajinkya Walunj`,
    description: post.excerpt,
    keywords: post.tags,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-primary">
      <BlogNavbar />

      <main className="max-w-4xl mx-auto px-6 py-12 pt-32">
        {/* Back to blogs */}
        <Link
          href="/blogs"
          className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors mb-8 group"
        >
          <svg
            className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to all posts
        </Link>

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center justify-between text-secondary border-b border-gray-800/50 pb-6">
            <div className="flex items-center space-x-6">
              <span>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <article className="prose prose-lg prose-invert max-w-none">
          <div
            dangerouslySetInnerHTML={{ __html: post.content || "" }}
            className="blog-content-readable"
          />
        </article>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-gray-800/50">
          <div className="bg-tertiary rounded-2xl p-8 border border-gray-800/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Enjoyed this article?
            </h3>
            <p className="text-secondary mb-6">
              I write about software development, AI/ML, and tech in general.
              Follow me for more insights and tutorials.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/blogs"
                className="px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors"
              >
                Read More Posts
              </Link>
              <Link
                href="/#contact"
                className="px-6 py-3 border border-purple-500 text-purple-400 hover:bg-purple-500/10 rounded-lg transition-colors"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
