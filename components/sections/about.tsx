import Container from "@/components/layout/container";
import Reveal from "@/components/client/animations/reveal";
import SectionHeading from "@/components/ui/section-heading";

export default function About() {
  return (
    <section id="about" className="py-28 md:py-36">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="Blending mathematical thinking with practical machine learning."
            description="With a foundation in mathematics and postgraduate studies in data science, my work focuses on building intelligent systems through structured analysis, deep learning, and research-driven experimentation."
          />
        </Reveal>

        <div className="mt-20 grid gap-10 md:grid-cols-3">
          {[
            {
              title: "Machine Learning",
              description:
                "Building predictive and intelligent systems using modern ML and deep learning frameworks.",
            },
            {
              title: "Natural Language Processing",
              description:
                "Exploring transformer architectures, language understanding, and scalable NLP workflows.",
            },
            {
              title: "Computer Vision",
              description:
                "Applying deep learning for image classification, OCR systems, and visual intelligence.",
            },
          ].map((item, index) => (
            <Reveal key={item.title} delay={index * 0.1}>
              <div className="h-full flex flex-col rounded-3xl border border-slate-200 bg-white/60 p-8 backdrop-blur">
                <h3 className="text-2xl font-medium text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
