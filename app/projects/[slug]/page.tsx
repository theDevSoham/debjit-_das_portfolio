import { notFound } from "next/navigation";
import Image from "next/image";

import Container from "@/components/layout/container";
import Reveal from "@/components/client/animations/reveal";
import Footer from "@/components/layout/footer";

import { projects } from "@/data/projects";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {
  const slug = (await params).slug
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="pt-32">
      {/* HERO */}
      <section className="relative overflow-hidden pb-24">
        {/* Glow */}
        <div className="absolute right-0 top-0 h-100 w-100 rounded-full bg-emerald-500/10 blur-3xl" />

        <Container className="relative z-10">
          <Reveal>
            <div className="max-w-5xl">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-600">
                {project.category}
              </p>

              <h1 className="mt-8 text-5xl font-medium leading-[1.05] tracking-tighter text-slate-900 md:text-7xl">
                {project.title}
              </h1>

              <p className="mt-10 max-w-3xl text-xl leading-9 text-slate-600">
                {project.hero}
              </p>
            </div>
          </Reveal>

          {/* Hero Image */}
          <Reveal delay={0.2}>
            <div className="relative mt-20 overflow-hidden rounded-4xl border border-slate-200">
              <div className="relative aspect-16/8">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* OVERVIEW + METRICS */}
      <section className="py-24">
        <Container>
          <div className="grid gap-20 lg:grid-cols-[1fr_320px]">
            {/* LEFT */}
            <Reveal>
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-600">
                  Project Overview
                </p>

                <h2 className="mt-6 text-4xl font-medium tracking-[-0.03em] text-slate-900">
                  Building structured machine learning systems through
                  experimentation and research.
                </h2>

                <p className="mt-10 text-lg leading-9 text-slate-600">
                  {project.overview}
                </p>
              </div>
            </Reveal>

            {/* RIGHT */}
            <Reveal delay={0.1}>
              <div className="space-y-4">
                {project.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-3xl border border-slate-200 bg-white/60 p-6 backdrop-blur"
                  >
                    <p className="text-sm text-slate-500">{metric.label}</p>

                    <p className="mt-3 text-2xl font-medium text-slate-900">
                      {metric.value}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* METHODOLOGY */}
      <section className="py-24">
        <Container>
          <Reveal>
            <div className="max-w-4xl">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-600">
                Methodology
              </p>

              <h2 className="mt-6 text-4xl font-medium tracking-[-0.03em] text-slate-900">
                Research and implementation workflow.
              </h2>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-6">
            {project.methodology.map((step, index) => (
              <Reveal key={step} delay={index * 0.06}>
                <div className="flex items-start gap-6 rounded-4xl border border-slate-200 bg-white/60 p-8 backdrop-blur">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-sm font-medium text-emerald-700">
                    {index + 1}
                  </div>

                  <p className="pt-2 text-lg leading-8 text-slate-700">
                    {step}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* LARGE VISUAL */}
      <section className="py-24">
        <Container>
          <Reveal>
            <div className="relative overflow-hidden rounded-4xl border border-slate-200">
              <div className="relative aspect-16/7">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-black/20" />
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* RESULTS */}
      <section className="py-24">
        <Container>
          <Reveal>
            <div className="max-w-4xl">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-600">
                Results & Outcomes
              </p>

              <h2 className="mt-6 text-4xl font-medium tracking-[-0.03em] text-slate-900">
                Key outcomes and technical learnings.
              </h2>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {project.results.map((result, index) => (
              <Reveal key={result} delay={index * 0.08}>
                <div className="rounded-4xl border border-slate-200 bg-white/60 p-8 backdrop-blur">
                  <p className="leading-8 text-slate-700">{result}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}
