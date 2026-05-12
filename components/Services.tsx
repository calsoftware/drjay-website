import Link from "next/link";
import { projectDomains } from "../data/projects";

export default function Services() {
  return (
    <section id="projects" className="px-6 pt-10 pb-16 sm:px-10 lg:px-12 lg:pt-12 lg:pb-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projectDomains.map((domain, index) => (
            <div
              key={domain.slug}
              className="rounded-2xl border border-slate-800/50 bg-slate-900/30 p-6 lg:p-7 flex flex-col animate-fade-in-up transition-colors duration-200 hover:border-slate-700/60"
              style={{ animationDelay: `${index * 0.04}s` }}
            >
              {/* Icon */}
              <div className="mb-5 inline-flex items-center justify-center w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-400/15 flex-shrink-0">
                <svg
                  className="w-5 h-5 text-cyan-400/80"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d={domain.iconPath} />
                </svg>
              </div>

              {/* Title */}
              <h3 className="text-base font-semibold text-slate-100 leading-snug mb-3">
                {domain.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-slate-400 leading-6 flex-1">
                {domain.summary}
              </p>

              {/* CTA */}
              <div className="mt-5 pt-4 border-t border-slate-800/40">
                <Link
                  href={`/projects/${domain.slug}`}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] font-medium text-cyan-400/60 hover:text-cyan-300/80 transition-colors duration-200"
                >
                  View selected work
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
