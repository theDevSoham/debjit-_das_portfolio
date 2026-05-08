export default function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow && (
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-emerald-600">
          {eyebrow}
        </p>
      )}

      <h2 className="text-4xl font-medium leading-tight tracking-[-0.03em] text-slate-900 md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-lg leading-8 text-slate-600">{description}</p>
      )}
    </div>
  );
}
