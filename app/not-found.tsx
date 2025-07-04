import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white text-center px-4">
      <div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Coming Soon 🚧</h1>
        <p className="text-gray-600 text-lg mb-6">This page is under construction.</p>

        <Link href="/">
          <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition">
            Back to Homepage
          </button>
        </Link>
      </div>
    </div>
  );
}
