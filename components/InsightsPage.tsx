"use client";

import Link from "next/link";
import { getRecentInsights } from "../lib/insightsData";

export default function InsightsPage() {
  const insights = getRecentInsights(4);
  const featuredInsight = insights[0];
  const secondaryInsights = insights.slice(1, 4);

  return (
    <section id="insights" className="bg-slate-950 text-slate-100">

      {/* ── Hero ── */}
      <div className="px-6 pt-10 pb-8 sm:px-10 lg:px-12 lg:pt-14 lg:pb-10 border-b border-slate-800/50">
        <div className="mx-auto max-w-7xl animate-fade-in-up">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-start">

            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-cyan-300/90 font-medium">
                Research Informed Insights
              </p>
              <h1 className="mt-4 text-2xl font-bold tracking-normal text-slate-100 sm:text-3xl lg:text-3xl leading-snug">
                Research informed insights on systems, transformation and professional practice.
              </h1>
            </div>

            <div className="lg:pt-1">
              <p className="text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
                A curated collection of weekly reflections, strategic analysis and professional insights drawn from advisory practice, systems thinking, organisational transformation and research informed experience.
              </p>
              <p className="mt-5 text-sm leading-6 text-slate-500 pl-4 border-l border-slate-700/50">
                Weekly reflections from Dr Olajide Jolugbo on systems thinking, strategic transformation, artificial intelligence and organisational capability.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* ── Articles ── */}
      <div className="px-6 pt-10 pb-16 sm:px-10 lg:px-12 lg:pt-12 lg:pb-20">
        <div className="mx-auto max-w-7xl">

          {/* Featured article */}
          {featuredInsight && (
            <div className="mb-8">
              <article className="rounded-2xl border border-slate-800/60 bg-slate-900/40 p-8 sm:p-10 transition-colors duration-200 hover:border-slate-700/70">

                {/* Metadata row */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-xs uppercase tracking-[0.28em] text-slate-600 font-medium">
                      {featuredInsight.date}
                    </span>
                    <span className="text-slate-800">·</span>
                    <span className="text-xs uppercase tracking-[0.28em] text-slate-600 font-medium">
                      {featuredInsight.readingTime}
                    </span>
                  </div>
                  <span className="text-xs uppercase tracking-[0.28em] font-medium text-cyan-300/80 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-400/20">
                    {featuredInsight.category}
                  </span>
                </div>

                {/* Title + subtitle + synopsis */}
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 leading-snug">
                  {featuredInsight.title}
                </h2>
                {featuredInsight.subtitle && (
                  <p className="mt-3 text-base text-slate-400 leading-7">
                    {featuredInsight.subtitle}
                  </p>
                )}
                <p className="mt-4 text-base text-slate-400 leading-7 max-w-3xl">
                  {featuredInsight.synopsis}
                </p>

                {/* Footer row: one theme tag + read link */}
                <div className="mt-6 pt-5 border-t border-slate-800/50 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {featuredInsight.themes.slice(0, 1).map((theme) => (
                      <span
                        key={theme}
                        className="text-xs uppercase tracking-[0.2em] px-3 py-1 rounded-full border border-slate-800/70 bg-slate-950/60 text-slate-500"
                      >
                        {theme}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/insights/${featuredInsight.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950 rounded"
                  >
                    Read reflection
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>

              </article>
            </div>
          )}

          {/* Secondary grid */}
          {secondaryInsights.length > 0 && (
            <div className="grid gap-4 lg:grid-cols-3 mb-10">
              {secondaryInsights.map((insight) => (
                <article
                  key={insight.id}
                  className="rounded-2xl border border-slate-800/60 bg-slate-900/40 p-6 sm:p-7 flex flex-col justify-between transition-colors duration-200 hover:border-slate-700/70"
                >
                  <div>
                    {/* Metadata */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="text-xs uppercase tracking-[0.25em] text-slate-600 font-medium">
                        {insight.date}
                      </span>
                      <span className="text-xs uppercase tracking-[0.25em] text-slate-600 font-medium">
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
                      <span className="text-xs uppercase tracking-[0.25em] font-medium text-cyan-300/75 bg-cyan-500/10 px-2.5 py-1 rounded-full border border-cyan-400/20">
                        {insight.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="mt-4 text-lg font-bold text-slate-100 leading-snug">
                      {insight.title}
                    </h3>

                    {/* Synopsis — 3 lines max */}
                    <p className="mt-3 text-sm text-slate-400 leading-6 line-clamp-3">
                      {insight.synopsis}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-800/50">
                    <Link
                      href={`/insights/${insight.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950 rounded"
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
          )}

          {/* Archive link */}
          <div className="pt-8 border-t border-slate-800/50">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-slate-500 font-medium">Insight Archive</p>
                <p className="mt-2 text-sm text-slate-500 leading-6 max-w-lg">
                  Browse the complete collection of strategic reflections, systems analysis and professional insights.
                </p>
              </div>
              <Link
                href="/insights/archive"
                className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors duration-200 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950 rounded"
              >
                View all insights
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
