import Container from "@/components/layout/container";
import Reveal from "@/components/client/animations/reveal";
import SectionHeading from "@/components/ui/section-heading";

import { skillGroups } from "@/data/skills";

export default function Skills() {
  return (
    <section className="py-28 md:py-36">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Technical Stack"
            title="Technologies I work with for data analytics, visualization, and AI projects."
            description="Focused on building practical projects using SQL, Python, Power BI, machine learning, and modern data science tools."
          />
        </Reveal>

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.08}>
              <div className="rounded-4xl border border-slate-200 bg-white/60 p-8 backdrop-blur">
                <h3 className="text-2xl font-medium tracking-[-0.03em] text-slate-900">
                  {group.title}
                </h3>

                <div className="mt-8 flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <div
                      key={skill}
                      className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700 transition-colors duration-300 hover:border-emerald-200 hover:bg-emerald-50"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
