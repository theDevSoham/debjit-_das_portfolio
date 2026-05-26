import Container from "@/components/layout/container";
import Reveal from "@/components/client/animations/reveal";
import ProjectCard from "@/components/cards/project-card";
import Footer from "@/components/layout/footer";

import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="pt-32">
      <section className="pb-24">
        <Container>
          <Reveal>
            <div className="max-w-4xl">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-600">
                Selected Work
              </p>

              <h1 className="mt-8 text-5xl font-medium leading-[1.05] tracking-tighter text-slate-900 md:text-7xl">
                Building data-driven solutions across analytics, dashboards, and AI systems.
              </h1>
            </div>
          </Reveal>

          <div className="mt-20 grid gap-10">
            {projects.map((project, index) => (
              <Reveal key={project.slug} delay={index * 0.08}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
