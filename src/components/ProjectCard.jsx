import { ExternalLink } from "lucide-react";
import { focusRing } from "../lib/ui";

export default function ProjectCard({ project, index = 0 }) {
  const frame = "aspect-video w-full overflow-hidden rounded-lg border border-lavender-grey/20 bg-black/50";
  const flipped = index % 2 === 1;

  return (
    <article className="grid gap-8 rounded-xl border border-lavender-grey/25 bg-space-indigo p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-lavender-grey/60 lg:grid-cols-2 lg:items-center">
      <div className={flipped ? "lg:order-2" : ""}>
        <div className={frame}>
          {project.videoUrl ? (
            project.videoType === "iframe" ? (
              <iframe
                src={project.videoUrl}
                title={`${project.title} demo video`}
                loading="lazy"
                allowFullScreen
                className="h-full w-full"
              />
            ) : (
              <video controls preload="metadata" className="h-full w-full object-cover">
                <source src={project.videoUrl} />
              </video>
            )
          ) : (
            <div className="flex h-full w-full items-center justify-center font-mono text-xs text-lavender-grey/70">
              Demo video coming soon
            </div>
          )}
        </div>
      </div>

      <div className={flipped ? "lg:order-1" : ""}>
        <h3 className="text-lg font-bold text-platinum">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-lavender-grey">{project.tagline}</p>

        <ul className="mt-4 space-y-2 text-sm leading-relaxed text-lavender-grey">
          {project.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-2">
              <span className="mt-1 text-platinum" aria-hidden="true">
                ▹
              </span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded border border-lavender-grey/30 bg-space-indigo px-2.5 py-1 font-mono text-xs text-platinum"
            >
              {tech}
            </span>
          ))}
        </div>

        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-6 inline-flex items-center gap-2 rounded-lg border border-lavender-grey/40 px-4 py-2 text-sm font-semibold text-platinum transition-all duration-300 hover:border-platinum hover:bg-platinum hover:text-space-indigo ${focusRing}`}
        >
          View on GitHub
          <ExternalLink className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}
