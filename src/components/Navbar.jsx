import { focusRing } from "../lib/ui";
import GithubIcon from "./GithubIcon";

export default function Navbar() {
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-lavender-grey/20 bg-space-indigo/85 backdrop-blur-md">
      <nav aria-label="Primary" className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <button
          type="button"
          onClick={toTop}
          className={`rounded text-sm font-extrabold tracking-widest text-platinum ${focusRing}`}
        >
          RJ Castillano
        </button>

        <div className="flex items-center gap-5">
          <button
            type="button"
            onClick={() => go("projects")}
            className={`rounded text-sm text-lavender-grey transition-colors duration-300 hover:text-platinum ${focusRing}`}
          >
            Projects
          </button>
          <button
            type="button"
            onClick={() => go("contact")}
            className={`rounded text-sm text-lavender-grey transition-colors duration-300 hover:text-platinum ${focusRing}`}
          >
            Contact
          </button>
          <a
            href="https://github.com/Rjjjj1412"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className={`rounded p-1 text-lavender-grey transition-colors duration-300 hover:text-platinum ${focusRing}`}
          >
            <GithubIcon className="h-5 w-5" />
          </a>
        </div>
      </nav>
    </header>
  );
}
