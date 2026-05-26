import { Project, ProjectMetric } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block h-full">
      <div
        className={`h-full overflow-hidden rounded-4xl border border-slate-200 bg-white/60 backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_80px_rgba(15,23,42,0.08)] ${
          featured ? "lg:grid lg:grid-cols-[1.1fr_0.9fr]" : ""
        }`}
      >
        {/* IMAGE */}
        <div
          className={`relative overflow-hidden ${
            featured ? "aspect-16/10 lg:aspect-auto lg:h-full" : "aspect-16/10"
          }`}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent" />

          {/* Category */}
          <div className="absolute left-6 top-6 rounded-full bg-white/80 px-4 py-2 text-xs font-medium text-slate-700 backdrop-blur">
            {project.category}
          </div>
        </div>

        {/* CONTENT */}
        <div className="flex h-full flex-col justify-start p-8 lg:p-10">
          <div>
            <div className="flex items-start justify-between gap-4">
              <h3
                className={`max-w-xl font-medium leading-tight tracking-[-0.03em] text-slate-900 transition-colors duration-300 group-hover:text-emerald-600 ${
                  featured ? "text-3xl lg:text-4xl" : "text-2xl"
                }`}
              >
                {project.title}
              </h3>

              <span className="shrink-0 text-sm text-slate-500">
                {project.year}
              </span>
            </div>

            <p
              className={`text-slate-600 ${
                featured ? "mt-6 text-lg leading-8" : "mt-5 leading-7"
              }`}
            >
              {project.hero}
            </p>
          </div>

          {/* Metrics */}
          <div className="mt-10 flex flex-wrap gap-3">
            {project.metrics.map((metric: ProjectMetric) => (
              <div
                key={metric.label}
                className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700"
              >
                <span className="font-medium">{metric.value}</span>{" "}
                {metric.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
