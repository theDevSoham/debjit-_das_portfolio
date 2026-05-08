import Container from "@/components/layout/container";
import Reveal from "@/components/client/animations/reveal";
import SectionHeading from "@/components/ui/section-heading";

import { timeline } from "@/data/timeline";

export default function Timeline() {
  return (
    <section className="py-28 md:py-36">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Journey"
            title="A growing foundation in mathematics, data science, and machine learning research."
            description="Academic and technical experiences shaping a research-oriented approach to intelligent systems."
          />
        </Reveal>

        <div className="relative mt-24">
          {/* Vertical Line */}
          <div className="absolute left-2.75 top-0 h-full w-px bg-slate-200" />

          <div className="space-y-16">
            {timeline.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08}>
                <div className="relative pl-16">
                  {/* Dot */}
                  <div className="absolute left-0 top-2 h-6 w-6 rounded-full border-4 border-white bg-emerald-500 shadow-md" />

                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-600">
                    {item.year}
                  </p>

                  <h3 className="mt-4 text-3xl font-medium tracking-[-0.03em] text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-lg text-slate-500">
                    {item.organization}
                  </p>

                  <p className="mt-6 max-w-2xl leading-8 text-slate-600">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
