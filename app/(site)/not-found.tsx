import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center py-32 px-6">
      <h1 className="text-6xl font-bold text-brand-alt">404</h1>
      <p className="mt-3 text-white/70">Page not found</p>
      <Link href="/" className="mt-8 inline-block bg-brand px-5 py-2 hover:bg-brand-alt">
        Back to Home
      </Link>
    </div>
  );
}
