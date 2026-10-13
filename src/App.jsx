import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
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

        <section id="projects" aria-labelledby="projects-heading" className="scroll-mt-20 px-6 py-24">
          <div className="mx-auto max-w-5xl">
            <Reveal>
              <h2 id="projects-heading" className="text-2xl font-extrabold text-platinum md:text-3xl">
                Featured Projects
              </h2>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-lavender-grey">
                Backend and full-stack work — REST APIs, database design, and real-time data workflows.
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
