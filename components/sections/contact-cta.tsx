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
              Building thoughtful systems through data, research, and machine
              learning.
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-600">
              Open to research opportunities, collaborations, and conversations
              around intelligent systems and applied machine learning.
            </p>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:debjitdas1409@gmail.com"
                className="rounded-full bg-slate-900 px-8 py-4 text-sm font-medium text-white transition-all duration-500 hover:-translate-y-1 hover:bg-slate-800"
              >
                Send an Email
              </a>

              <a
                href="/resume.pdf"
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
