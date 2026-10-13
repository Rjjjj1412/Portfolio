import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { focusRing } from "../lib/ui";

const profileModules = import.meta.glob("/src/assets/profile.jpg", {
  eager: true,
  import: "default",
});
const profileSrc = Object.values(profileModules)[0];

export default function Hero() {
  const [imgError, setImgError] = useState(false);
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  const showImage = Boolean(profileSrc) && !imgError;

  return (
    <section id="top" aria-labelledby="hero-heading" className="scroll-mt-20 px-6 pb-24 pt-32 md:pt-40">
      <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-[1fr_auto]">
        <div className="order-2 md:order-1">
          <span className="inline-flex items-center gap-2 rounded-full border border-lavender-grey/30 px-3 py-1 text-xs text-lavender-grey">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lavender-grey opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-lavender-grey" />
            </span>
            Available for Backend Developer Internships
          </span>

          <h1 id="hero-heading" className="mt-6 text-4xl font-extrabold tracking-tight text-platinum md:text-5xl">
            RJ Castillano
          </h1>
          <p className="mt-3 text-xl font-medium text-lavender-grey">Backend Developer &amp; Software Engineer</p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-lavender-grey">
            I build RESTful APIs and design relational and document database schemas for full-stack web and mobile
            systems. My work centers on secure server-side logic, clean data models, and maintainable backend
            architecture.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => go("projects")}
              className={`inline-flex items-center gap-2 rounded-lg bg-platinum px-5 py-2.5 text-sm font-semibold text-space-indigo transition-all duration-300 hover:-translate-y-0.5 ${focusRing}`}
            >
              View Projects
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => go("contact")}
              className={`rounded-lg border border-lavender-grey px-5 py-2.5 text-sm font-semibold text-platinum transition-all duration-300 hover:-translate-y-0.5 hover:border-platinum ${focusRing}`}
            >
              Contact Me
            </button>
          </div>
        </div>

        <div className="order-1 mx-auto md:order-2">
          <div className="group relative flex items-center justify-center">
            {/* Ambient background glow */}
            <div className="absolute inset-0 rounded-full bg-lavender-grey/20 blur-xl transition-all duration-500 group-hover:bg-lavender-grey/30" />

            {/* Circular container with layered ring borders */}
            <div className="relative h-56 w-56 overflow-hidden rounded-full border-2 border-lavender-grey/40 p-1.5 shadow-2xl ring-4 ring-space-indigo ring-offset-2 ring-offset-lavender-grey/20 transition-transform duration-300 group-hover:scale-105 md:h-64 md:w-64">
              <div className="h-full w-full overflow-hidden rounded-full">
                {showImage ? (
                  <img
                    src={profileSrc}
                    alt="Portrait of RJ Olate Castillano"
                    className="h-full w-full object-cover object-center"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div
                    className="flex h-full w-full items-center justify-center bg-space-indigo text-4xl font-extrabold tracking-widest text-lavender-grey"
                    aria-hidden="true"
                  >
                    RJC
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}