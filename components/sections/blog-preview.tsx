import Link from "next/link";

import Container from "@/components/layout/container";
import Reveal from "@/components/client/animations/reveal";
import SectionHeading from "@/components/ui/section-heading";

import { blogs } from "@/data/blogs";

export default function BlogPreview() {
  return <></>
  // return (
  //   <section id="blog" className="py-28 md:py-36">
  //     <Container>
  //       <Reveal>
  //         <SectionHeading
  //           eyebrow="Writing"
  //           title="Thoughts on machine learning, research, and intelligent systems."
  //           description="A collection of technical notes and explorations across AI, deep learning, mathematics, and modern computational systems."
  //         />
  //       </Reveal>

  //       <div className="mt-20 space-y-8">
  //         {blogs.map((blog, index) => (
  //           <Reveal key={blog.slug} delay={index * 0.08}>
  //             <Link
  //               href={`/blog/${blog.slug}`}
  //               className="group block rounded-4xl border border-slate-200 bg-white/60 p-8 transition-all duration-500 hover:-translate-y-1 hover:border-emerald-200 hover:bg-white"
  //             >
  //               <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
  //                 <div className="max-w-3xl">
  //                   <h3 className="text-3xl font-medium tracking-[-0.03em] text-slate-900 transition-colors duration-300 group-hover:text-emerald-600">
  //                     {blog.title}
  //                   </h3>

  //                   <p className="mt-5 leading-8 text-slate-600">
  //                     {blog.excerpt}
  //                   </p>
  //                 </div>

  //                 <div className="text-sm uppercase tracking-[0.2em] text-slate-400">
  //                   {blog.date}
  //                 </div>
  //               </div>
  //             </Link>
  //           </Reveal>
  //         ))}
  //       </div>
  //     </Container>
  //   </section>
  // );
}
