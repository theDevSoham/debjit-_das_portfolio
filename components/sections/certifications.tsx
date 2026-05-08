import Container from "@/components/layout/container";
import Reveal from "@/components/client/animations/reveal";
import SectionHeading from "@/components/ui/section-heading";

import { certifications } from "@/data/certifications";

export default function Certifications() {
  return (
    <section className="py-28 md:py-36">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Certifications"
            title="Continuous learning through modern AI and data science domains."
            description="Focused learning across generative AI, visualization systems, and practical machine learning workflows."
          />
        </Reveal>

        <div className="mt-16 flex flex-wrap gap-4">
          {certifications.map((item, index) => (
            <Reveal key={item} delay={index * 0.06}>
              <div className="rounded-full border border-slate-200 bg-white/70 px-6 py-4 text-sm font-medium text-slate-700 backdrop-blur">
                {item}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
