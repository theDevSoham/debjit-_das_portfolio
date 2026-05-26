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
            title="Focused on solving business problems through data and AI."
            description="With a foundation in mathematics and postgraduate degree in Data Science, I build analytics and machine learning solutions that turn complex datasets into actionable insights."
          />
        </Reveal>

        <div className="mt-20 grid gap-10 md:grid-cols-3">
          {[
            {
              title: "Analytics",
              description:
                "Transforming raw data into actionable business insights through structured analysis and visualization.",
            },
            {
              title: "Dashboarding",
              description:
                "Designing clean, interactive BI dashboards focused on KPIs, reporting, and decision-making.",
            },
            {
              title: "AI & ML",
              description:
                "Building practical machine learning solutions for prediction, automation, and intelligent systems.",
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
