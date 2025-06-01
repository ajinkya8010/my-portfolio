import Link from 'next/link';

export default function BlogNavbar() {
  return (
    <nav className="w-full bg-background shadow-sm px-6 py-4 flex items-center justify-between">
      {/* Left: Logo/Name */}
      <div className="text-xl font-bold tracking-tight">
        <Link href="/">
          <span className="hover:opacity-80 transition">Ajinkya</span>
        </Link>
      </div>

      {/* Center: Back to Portfolio */}
      <div className="text-sm sm:text-base">
        <Link href="/">
          <span className="hover:underline text-muted-foreground">Back to Portfolio</span>
        </Link>
      </div>

      {/* Right: Empty to keep layout consistent */}
      <div className="w-12 sm:w-16" />
    </nav>
  );
}
