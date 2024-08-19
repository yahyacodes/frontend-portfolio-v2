import Hero from "@/components/hero";
import About from "@/components/about";
import Blogs from "@/components/blogs";
import Contact from "@/components/contact";
import Socials from "@/components/socials";
import Logos from "@/components/ui/logos";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-background px-4 py-12 text-zinc-800">
      <div className="mx-auto max-w-5xl">
        <Hero />
        <Logos />
        <About />
        <Projects />
        {/* <Socials />
        <Blogs />
        <Contact /> */}
      </div>
    </main>
  );
}
