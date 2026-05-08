import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({
  project,
}: {
  project: any;
}) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block"
    >
      <div className="overflow-hidden rounded-4xl border border-slate-200 bg-white/60 backdrop-blur">
        {/* Image */}
        <div className="relative aspect-16/10 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent" />

          {/* Category */}
          <div className="absolute left-6 top-6 rounded-full bg-white/80 px-4 py-2 text-xs font-medium text-slate-700 backdrop-blur">
            {project.category}
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="flex items-start justify-between gap-4">
            <h3 className="max-w-xl text-2xl font-medium leading-tight tracking-[-0.03em] text-slate-900 transition-colors duration-300 group-hover:text-emerald-600">
              {project.title}
            </h3>

            <span className="text-sm text-slate-500">
              {project.year}
            </span>
          </div>

          <p className="mt-5 leading-7 text-slate-600">
            {project.description}
          </p>

          {/* Metrics */}
          <div className="mt-8 flex flex-wrap gap-3">
            {project.metrics.map((metric: any) => (
              <div
                key={metric.label}
                className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700"
              >
                <span className="font-medium">
                  {metric.value}
                </span>{" "}
                {metric.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}