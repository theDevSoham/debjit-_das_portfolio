import Link from "next/link";

import Container from "@/components/layout/container";
import Reveal from "@/components/client/animations/reveal";
import Footer from "@/components/layout/footer";

import { blogs } from "@/data/blogs";

export default function BlogPage() {
  return (
    <main className="pt-32">
      <section className="pb-24">
        <Container>
          <Reveal>
            <div className="max-w-4xl">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-600">
                Writing
              </p>

              <h1 className="mt-8 text-5xl font-medium leading-[1.05] tracking-tighter text-slate-900 md:text-7xl">
                Notes, thoughts, and explorations across AI and machine
                learning.
              </h1>
            </div>
          </Reveal>

          <div className="mt-20 space-y-8">
            {blogs.map((blog, index) => (
              <Reveal key={blog.slug} delay={index * 0.08}>
                <Link
                  href={`/blog/${blog.slug}`}
                  className="group block rounded-4xl border border-slate-200 bg-white/60 p-8 transition-all duration-500 hover:-translate-y-1 hover:border-emerald-200 hover:bg-white"
                >
                  <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                    <div className="max-w-3xl">
                      <h2 className="text-3xl font-medium tracking-[-0.03em] text-slate-900 transition-colors duration-300 group-hover:text-emerald-600">
                        {blog.title}
                      </h2>

                      <p className="mt-5 leading-8 text-slate-600">
                        {blog.excerpt}
                      </p>
                    </div>

                    <div className="text-sm uppercase tracking-[0.2em] text-slate-400">
                      {blog.date}
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
