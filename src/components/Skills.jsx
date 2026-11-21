import Reveal from "./Reveal";
import { Server, Database, Code2, Wrench, Layout } from "lucide-react";

const skillCategories = [
  {
    title: "Software & Web Development",
    icon: Server,
    description: "Full-stack web engineering, API design, and MVC architecture",
    skills: [
      "Node.js",
      "Express.js",
      "Laravel",
      "RESTful API Development",
      "MVC Architecture",
      "Laravel Eloquent ORM",
      "Server-Side Data Validation",
    ],
  },
  {
    title: "Databases & Cloud",
    icon: Database,
    description: "Relational modeling, document stores, and real-time cloud data",
    skills: [
      "MongoDB",
      "MongoDB Atlas",
      "Firebase Firestore",
      "MySQL",
      "SQLite",
      "Mongoose ODM",
    ],
  },
  {
    title: "Programming Languages",
    icon: Code2,
    description: "Languages used across web, mobile, and software projects",
    skills: ["JavaScript (ES6+)", "PHP", "Dart"],
  },
  {
    title: "Development & Testing Tools",
    icon: Wrench,
    description: "Version control, API verification, and collaborative development",
    skills: ["Git", "GitHub", "Postman", "API Testing"],
  },
  {
    title: "Frontend & Mobile Development",
    icon: Layout,
    description: "Responsive user interfaces and cross-platform mobile apps",
    skills: ["React (Vite)", "Flutter", "Tailwind CSS", "Blade", "Alpine.js"],
  },
];

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="scroll-mt-20 px-6 py-20 border-t border-lavender-grey/15">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-lavender-grey" />
            <span className="text-xs font-mono uppercase tracking-widest text-lavender-grey">Technical Stack</span>
          </div>
          <h2 id="skills-heading" className="mt-2 text-2xl font-extrabold text-platinum md:text-3xl">
            Core Competencies &amp; Skills
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-lavender-grey">
            Skilled in web and mobile software development, RESTful APIs, database modeling, version control, and problem-solving.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            const isFeatured = idx === 0;
            return (
              <Reveal key={category.title}>
                <div
                  className={`h-full rounded-xl border p-6 transition-all duration-300 hover:-translate-y-1 ${
                    isFeatured
                      ? "border-platinum/40 bg-space-indigo/90 shadow-lg shadow-black/20 md:col-span-2 lg:col-span-1"
                      : "border-lavender-grey/25 bg-space-indigo/60 hover:border-lavender-grey/60"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-lavender-grey/30 bg-space-indigo text-platinum">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="text-base font-bold text-platinum">{category.title}</h3>
                  </div>
                  <p className="mt-2 text-xs text-lavender-grey">{category.description}</p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`rounded px-2.5 py-1 text-xs font-mono ${
                          isFeatured
                            ? "border border-platinum/30 bg-space-indigo text-platinum font-medium"
                            : "border border-lavender-grey/20 bg-space-indigo/80 text-lavender-grey"
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

