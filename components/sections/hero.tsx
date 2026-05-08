import Image from "next/image";
import Container from "@/components/layout/container";
import Reveal from "@/components/client/animations/reveal";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 md:min-h-screen md:pt-40">
      {/* Ambient Emerald Glow */}
      <div className="absolute right-[-10%] top-[10%] h-100 w-100 rounded-full bg-emerald-500/10 blur-3xl" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(15,23,42,0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(15,23,42,0.08) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <Container className="relative z-10">
        <div className="grid items-center gap-20 lg:grid-cols-[1.2fr_0.8fr]">
          {/* LEFT CONTENT */}
          <div className="max-w-3xl">
            {/* Tag */}
            <Reveal>
              <div className="mb-6 inline-flex items-center rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm text-slate-600 backdrop-blur">
                Research-Oriented Data Scientist
              </div>
            </Reveal>

            {/* Heading */}
            <Reveal delay={0.1}>
              <h1 className="max-w-4xl text-5xl font-medium leading-[1.05] tracking-[-0.04em] text-slate-900 md:text-7xl">
                Exploring intelligence through{" "}
                <span className="text-emerald-600">
                  mathematics, data, and machine learning.
                </span>
              </h1>
            </Reveal>

            {/* Description */}
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
                Postgraduate Data Science student with a strong foundation in
                mathematics, machine learning, NLP, and deep learning — building
                thoughtful systems that transform data into meaningful insights.
              </p>
            </Reveal>

            {/* CTA */}
            <Reveal delay={0.3}>
              <div className="mt-12 flex flex-wrap items-center gap-4">
                <a
                  href="#projects"
                  className="rounded-full bg-slate-900 px-7 py-4 text-sm font-medium text-white transition-all duration-500 hover:-translate-y-1 hover:bg-slate-800"
                >
                  View Projects
                </a>

                <a
                  href="/resume.pdf"
                  target="_blank"
                  className="rounded-full border border-slate-300 bg-white px-7 py-4 text-sm font-medium text-slate-700 transition-all duration-500 hover:-translate-y-1 hover:border-slate-400"
                >
                  Download Resume
                </a>
              </div>
            </Reveal>

            {/* Bottom Stats */}
            <Reveal delay={0.3}>
              <div className="mt-20 grid grid-cols-2 gap-10 border-t border-slate-200 pt-10 md:grid-cols-4">
                {[
                  {
                    label: "Projects",
                    value: "8+",
                  },
                  {
                    label: "ML Domains",
                    value: "NLP/CV",
                  },
                  {
                    label: "Focus",
                    value: "Research",
                  },
                  {
                    label: "Location",
                    value: "India",
                  },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="text-2xl font-medium text-slate-900">
                      {item.value}
                    </p>

                    <p className="mt-2 text-sm text-slate-500">{item.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* RIGHT IMAGE */}
          <Reveal delay={0.25}>
            <div className="relative mx-auto w-full max-w-md">
              {/* Glow */}
              <div className="absolute inset-0 rounded-4xl bg-emerald-500/10 blur-2xl" />

              {/* Card */}
              <div className="relative overflow-hidden rounded-4xl border border-slate-200 bg-white/70 shadow-[0_20px_80px_rgba(15,23,42,0.08)] backdrop-blur">
                <div className="aspect-4/5 relative">
                  <Image
                    src="/profile/john.jpg"
                    alt="Picture"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-8 -left-8 rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-xl backdrop-blur">
                <p className="text-sm text-slate-500">Current Focus</p>

                <p className="mt-2 font-medium text-slate-900">
                  NLP • Deep Learning • Research
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
