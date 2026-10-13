import { Mail } from "lucide-react";
import { focusRing } from "../lib/ui";
import GithubIcon from "./GithubIcon";

const cards = [
  {
    id: "email",
    label: "Email",
    value: "rj.castellano@ciit.edu.ph",
    href: "mailto:rj.castellano@ciit.edu.ph",
    external: false,
    Icon: Mail,
  },
  {
    id: "github",
    label: "GitHub",
    value: "github.com/Rjjjj1412",
    href: "https://github.com/Rjjjj1412",
    external: true,
    Icon: GithubIcon,
  },
];

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-20 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 id="contact-heading" className="text-2xl font-extrabold text-platinum md:text-3xl">
          Get In Touch
        </h2>
        <p className="mt-3 max-w-xl text-base leading-relaxed text-lavender-grey">
          I'm open to backend and software engineering internship roles. If you'd like to talk about an opportunity,
          my inbox is always open.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {cards.map(({ id, label, value, href, external, Icon }) => (
            <a
              key={id}
              href={href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className={`flex items-center gap-4 rounded-xl border border-lavender-grey/25 bg-space-indigo p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-lavender-grey/60 ${focusRing}`}
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-lavender-grey/30 text-lavender-grey">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block text-xs uppercase tracking-widest text-lavender-grey">{label}</span>
                <span className="mt-1 block truncate text-sm text-platinum">{value}</span>
              </span>
            </a>
          ))}
        </div>

        <footer className="mt-16 border-t border-lavender-grey/20 pt-6 text-xs text-lavender-grey">
          © {new Date().getFullYear()} RJ Castillano. All rights reserved.
        </footer>
      </div>
    </section>
  );
}
