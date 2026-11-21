import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import ProjectCard from "./components/ProjectCard";
import Contact from "./components/Contact";
import Reveal from "./components/Reveal";
import { projects } from "./data/projectsData";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Skills />

        <section id="projects" aria-labelledby="projects-heading" className="scroll-mt-20 px-6 py-24">
          <div className="mx-auto max-w-5xl">
            <Reveal>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-lavender-grey" />
                <span className="text-xs font-mono uppercase tracking-widest text-lavender-grey">Portfolio</span>
              </div>
              <h2 id="projects-heading" className="mt-2 text-2xl font-extrabold text-platinum md:text-3xl">
                Featured Projects
              </h2>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-lavender-grey">
                Full-stack web, mobile, and software development — interactive applications, RESTful APIs, relational &amp; NoSQL databases, and real-time cloud workflows.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-8">
              {projects.map((project, index) => (
                <Reveal key={project.id}>
                  <ProjectCard project={project} index={index} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <Contact />
      </main>
    </>
  );
}
