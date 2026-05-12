import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import Link from "next/link";
import { getInsightsSortedByDateDesc } from "../../../lib/insightsData";

export const metadata = {
  title: "Insights Archive",
  description:
    "Complete archive of published insights from Dr Olajide Jolugbo: research informed reflections on AI in business analysis, digital transformation, organisational intelligence and strategic transformation.",
  alternates: { canonical: "https://olajide.today/insights/archive" },
  openGraph: {
    title: "Insights Archive | Dr Olajide Jolugbo",
    description:
      "All published business analysis insights and research informed reflections on AI strategy, digital transformation and organisational intelligence.",
    url: "https://olajide.today/insights/archive",
    type: "website",
  },
};

export default function InsightArchivePage() {
  const insights = getInsightsSortedByDateDesc();

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      {/* Hero — two-column, consistent with Insights and other pages */}
      <section className="px-6 pt-10 pb-8 sm:px-10 lg:px-12 lg:pt-14 lg:pb-10 border-b border-slate-800/50">
        <div className="mx-auto max-w-7xl animate-fade-in-up">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-start">

            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-cyan-300/90 font-medium">Insight Archive</p>
              <h1 className="mt-4 text-2xl font-bold tracking-normal text-slate-100 sm:text-3xl lg:text-3xl leading-snug">
                All published reflections, organised by recency.
              </h1>
            </div>

            <div className="text-base leading-7 text-slate-400 sm:text-lg sm:leading-8 lg:pt-1">
              <p>
                A complete archive of strategic reflections, systems analysis and research informed commentary. Browse every published insight in reverse chronological order.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Archive grid */}
      <section className="px-6 pt-10 pb-16 sm:px-10 lg:px-12 lg:pt-12 lg:pb-20">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-4 md:grid-cols-2">
            {insights.map((insight) => (
              <article
                key={insight.id}
                className="rounded-2xl border border-slate-800/60 bg-slate-900/40 p-6 sm:p-8 flex flex-col justify-between transition-colors duration-200 hover:border-slate-700/70"
              >
                <div>
                  {/* Metadata */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="text-xs uppercase tracking-[0.28em] text-slate-600 font-medium">
                      {insight.date}
                    </span>
                    <span className="text-xs uppercase tracking-[0.28em] text-slate-600 font-medium">
                      {insight.readingTime}
                    </span>
                  </div>

                  {/* Category + optional icon */}
                  <div className="flex items-center gap-2">
                    {insight.iconPath && (
                      <span className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-cyan-500/10 border border-cyan-400/15 flex-shrink-0">
                        <svg className="w-3.5 h-3.5 text-cyan-400/75" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d={insight.iconPath} />
                        </svg>
                      </span>
                    )}
                    <span className="text-xs uppercase tracking-[0.25em] font-medium text-cyan-300/80 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-400/20">
                      {insight.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="mt-4 text-xl font-bold text-slate-100 leading-snug">
                    {insight.title}
                  </h2>

                  {/* Synopsis */}
                  <p className="mt-3 text-sm text-slate-400 leading-6 line-clamp-3">
                    {insight.synopsis}
                  </p>
                </div>

                {/* Footer: one theme + read link */}
                <div className="mt-5 pt-4 border-t border-slate-800/50 flex items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {insight.themes.slice(0, 1).map((theme) => (
                      <span
                        key={theme}
                        className="text-xs uppercase tracking-[0.2em] px-2.5 py-1 rounded-full border border-slate-800/70 bg-slate-950/60 text-slate-500"
                      >
                        {theme}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/insights/${insight.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors duration-200 shrink-0 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950 rounded"
                  >
                    Read reflection
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Back link */}
          <div className="mt-10 pt-8 border-t border-slate-800/50">
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950 rounded"
            >
              <svg className="h-4 w-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              Back to curated insights
            </Link>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
