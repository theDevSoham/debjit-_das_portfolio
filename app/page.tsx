import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import FeaturedProjects from "@/components/sections/featured-projects";
import Skills from "@/components/sections/skills";
import Timeline from "@/components/sections/timeline";
import Certifications from "@/components/sections/certifications";
import BlogPreview from "@/components/sections/blog-preview";
import ContactCTA from "@/components/sections/contact-cta";
import Footer from "@/components/layout/footer";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <FeaturedProjects />
      <Skills />
      <Timeline />
      <Certifications />
      <BlogPreview />
      <ContactCTA />
      <Footer />
    </main>
  );
}
