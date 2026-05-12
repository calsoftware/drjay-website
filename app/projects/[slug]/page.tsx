import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { projectDomains, getDomainBySlug, type CaseStudy } from "../../../data/projects";

export function generateStaticParams() {
  return projectDomains.map((domain) => ({ slug: domain.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const domain = getDomainBySlug(slug);
  if (!domain) return {};
  return {
    title: `${domain.title} | Applied Transformation Practice`,
    description: domain.summary,
  };
}

function CaseStudyCard({ study, index }: { study: CaseStudy; index: number }) {
  return (
    <article
      className="rounded-2xl border border-slate-800/50 bg-slate-900/30 p-6 lg:p-8 animate-fade-in-up"
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
        <h3 className="text-base font-semibold text-slate-100 leading-snug max-w-md">
          {study.title}
        </h3>
        <span className="flex-shrink-0 inline-block rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300/80 leading-5">
          {study.sector}
        </span>
      </div>

      {/* Structured fields */}
      <div className="space-y-4">
        <Field label="Challenge" value={study.challenge} />
        <Field label="Role and contribution" value={study.role} />

        {/* Methods as tags */}
        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-slate-500 font-medium">Methods and tools</span>
          <div className="mt-2 flex flex-wrap gap-2">
            {study.methods.map((method) => (
              <span
                key={method}
                className="rounded-full bg-slate-800/60 border border-slate-700/50 px-3 py-1 text-xs text-slate-300"
              >
                {method}
              </span>
            ))}
          </div>
        </div>

        <Field label="Delivery approach" value={study.delivery} />

        <div className="pt-4 border-t border-slate-800/40">
          <Field label="Outcome" value={study.outcome} highlight />
        </div>

        <div className="rounded-xl bg-slate-800/30 border border-slate-700/30 px-5 py-4">
          <span className="text-xs uppercase tracking-[0.25em] text-cyan-400/60 font-medium">Strategic significance</span>
          <p className="mt-1.5 text-sm text-slate-300 leading-6 italic">{study.significance}</p>
        </div>
      </div>
    </article>
  );
}

function Field({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div>
      <span className="text-xs uppercase tracking-[0.25em] text-slate-500 font-medium">{label}</span>
      <p className={`mt-1 text-sm leading-6 ${highlight ? "text-slate-200" : "text-slate-400"}`}>
        {value}
      </p>
    </div>
  );
}

export default async function DomainPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const domain = getDomainBySlug(slug);
  if (!domain) notFound();

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      {/* Domain header */}
      <section className="px-6 pt-10 pb-10 sm:px-10 lg:px-12 lg:pt-14 lg:pb-12 border-b border-slate-800/50">
        <div className="mx-auto max-w-7xl">

          {/* Back link */}
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] font-medium text-slate-500 hover:text-cyan-400/70 transition-colors duration-200 mb-8"
          >
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            All projects
          </Link>

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-start">
            <div>
              {/* Icon + label */}
              <div className="flex items-center gap-3 mb-5">
                <div className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-400/15 flex-shrink-0">
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
                <p className="text-sm uppercase tracking-[0.4em] text-cyan-300/90 font-medium">
                  Selected work
                </p>
              </div>

              <h1 className="text-2xl font-bold tracking-normal text-slate-100 sm:text-3xl leading-snug">
                {domain.title}
              </h1>
            </div>

            <div className="text-base leading-7 text-slate-400 sm:text-lg sm:leading-8 lg:pt-1">
              <p>{domain.summary}</p>
              <p className="mt-4 text-xs text-slate-500 leading-5 border-l-2 border-slate-700 pl-4">
                Project summaries are anonymised to preserve organisational confidentiality while
                showing the nature, method and strategic value of the work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="px-6 py-12 sm:px-10 lg:px-12 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-2">
            {domain.caseStudies.map((study, index) => (
              <CaseStudyCard key={study.title} study={study} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer nav */}
      <div className="px-6 pb-12 sm:px-10 lg:px-12 border-t border-slate-800/50">
        <div className="mx-auto max-w-7xl pt-8 flex items-center justify-between flex-wrap gap-4">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] font-medium text-slate-500 hover:text-cyan-400/70 transition-colors duration-200"
          >
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            All project domains
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] font-medium text-cyan-400/60 hover:text-cyan-300/80 transition-colors duration-200"
          >
            Start a conversation
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
