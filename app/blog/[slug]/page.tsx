"use client";

import { notFound } from "next/navigation";

import Container from "@/components/layout/container";
import Reveal from "@/components/client/animations/reveal";
import Footer from "@/components/layout/footer";

import { blogs } from "@/data/blogs";

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {
  const slug = (await params).slug;
  const blog = blogs.find((item) => item.slug === slug);

  return notFound()

  // if (!blog) {
  //   notFound();
  // }

  // return (
  //   <main className="pt-32">
  //     <section className="pb-24">
  //       <Container>
  //         <Reveal>
  //           <div className="mx-auto max-w-4xl">
  //             <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-600">
  //               {blog.date}
  //             </p>

  //             <h1 className="mt-8 text-5xl font-medium leading-[1.05] tracking-tighter text-slate-900 md:text-7xl">
  //               {blog.title}
  //             </h1>

  //             <p className="mt-10 text-xl leading-9 text-slate-600">
  //               {blog.excerpt}
  //             </p>
  //           </div>
  //         </Reveal>

  //         {/* Fake Article Body */}
  //         <Reveal delay={0.2}>
  //           <article className="prose prose-slate mt-24 max-w-4xl">
  //             <p>
  //               Modern machine learning systems continue to evolve through
  //               increasingly sophisticated architectures, optimization methods,
  //               and computational approaches.
  //             </p>

  //             <p>
  //               From transformer-based NLP systems to computer vision pipelines,
  //               research in artificial intelligence continues to shape the
  //               future of intelligent systems and scalable computational
  //               reasoning.
  //             </p>

  //             <h2>Mathematical Foundations</h2>

  //             <p>
  //               Linear algebra, probability theory, optimization, and statistics
  //               form the foundation of modern machine learning workflows and
  //               research-oriented experimentation.
  //             </p>

  //             <blockquote>
  //               Building intelligent systems requires balancing theory,
  //               experimentation, and practical implementation.
  //             </blockquote>

  //             <p>
  //               As research continues evolving rapidly, maintaining strong
  //               mathematical intuition remains essential for understanding and
  //               designing robust AI systems.
  //             </p>
  //           </article>
  //         </Reveal>
  //       </Container>
  //     </section>

  //     <Footer />
  //   </main>
  // );
}
