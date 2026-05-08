export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f8fafc]">
      <div className="flex items-center gap-3">
        <div className="h-3 w-3 animate-pulse rounded-full bg-emerald-500" />

        <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
          Loading
        </p>
      </div>
    </div>
  );
}
