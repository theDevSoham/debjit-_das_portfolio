import Container from "@/components/layout/container";
import Reveal from "@/components/client/animations/reveal";

export default function ContactCTA() {
  return (
    <section id="contact" className="relative overflow-hidden py-32 md:py-40">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-3xl" />

      <Container className="relative z-10">
        <Reveal>
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-600">
              Let&apos;s Connect
            </p>

            <h2 className="mt-8 text-5xl font-medium leading-[1.1] tracking-[-0.04em] text-slate-900 md:text-7xl">
              Learning, building, and solving through data and AI.
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-600">
              Postgraduate student in Data Science with interests in analytics,
              business intelligence, machine learning, and real-world data
              applications.
            </p>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:debjitdas1409@gmail.com"
                className="rounded-full bg-slate-900 px-8 py-4 text-sm font-medium text-white transition-all duration-500 hover:-translate-y-1 hover:bg-slate-800"
              >
                Send an Email
              </a>

              <a
                href="https://drive.google.com/uc?export=download&id=1LY2X2-dIXRbzomICZQSrLkGAzJfIT4rq"
                target="_blank"
                className="rounded-full border border-slate-300 bg-white px-8 py-4 text-sm font-medium text-slate-700 transition-all duration-500 hover:-translate-y-1 hover:border-slate-400"
              >
                Download Resume
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
