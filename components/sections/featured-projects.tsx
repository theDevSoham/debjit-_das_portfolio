import Container from "@/components/layout/container";
import Reveal from "@/components/client/animations/reveal";
import SectionHeading from "@/components/ui/section-heading";
import ProjectCard from "@/components/cards/project-card";

import { projects } from "@/data/projects";

export default function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="py-28 md:py-36"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Projects"
            title="Research-driven projects focused on machine learning and intelligent systems."
            description="A selection of projects exploring computer vision, NLP, deep learning, and data-driven experimentation."
          />
        </Reveal>

        <div className="mt-20 grid gap-10">
          {projects.map((project, index) => (
            <Reveal
              key={project.slug}
              delay={index * 0.1}
            >
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}