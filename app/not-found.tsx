import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="max-w-2xl text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-600">
          404
        </p>

        <h1 className="mt-8 text-5xl font-medium tracking-tighter text-slate-900 md:text-7xl">
          Page not found.
        </h1>

        <p className="mt-8 text-lg leading-8 text-slate-600">
          The page you are looking for does not exist or may have been moved.
        </p>

        <Link
          href="/"
          className="mt-12 inline-flex rounded-full bg-slate-900 px-8 py-4 text-sm font-medium text-white transition-all duration-500 hover:-translate-y-1 hover:bg-slate-800"
        >
          Return Home
        </Link>
      </div>
    </main>
  );
}
