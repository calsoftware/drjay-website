"use client";

import Link from "next/link";
import { InsightArticle } from "../lib/insightsData";

interface InsightDetailProps {
  insight: InsightArticle;
}

export default function InsightDetail({ insight }: InsightDetailProps) {
  return (
    <article className="bg-slate-950 text-slate-100 min-h-screen">
      <div className="mx-auto max-w-3xl px-6 py-12 sm:px-10 lg:px-12 lg:py-16">
        {/* Back Navigation */}
        <Link
          href="/insights"
          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950 rounded px-2 py-1 mb-8"
        >
          <svg className="mr-2 h-4 w-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span>Back to insights</span>
        </Link>

        {/* Article Header */}
        <header className="mb-12 pb-8 border-b border-slate-800/50">
          <div className="mb-6">
            {/* Article icon badge */}
            {insight.iconPath && (
              <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-400/15">
                <svg
                  className="w-6 h-6 text-cyan-400/80"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d={insight.iconPath} />
                </svg>
              </div>
            )}

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="text-xs uppercase tracking-[0.3em] text-slate-500 font-semibold">{insight.date}</span>
              <span className="text-xs text-slate-600">•</span>
              <span className="text-xs uppercase tracking-[0.3em] text-slate-500 font-semibold">{insight.readingTime}</span>
              {insight.series && (
                <>
                  <span className="text-xs text-slate-600">•</span>
                  <span className="text-xs uppercase tracking-[0.3em] font-semibold text-cyan-300 bg-cyan-500/10 px-3 py-1 rounded-full">
                    Series {insight.series.number} of {insight.series.total}
                  </span>
                </>
              )}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-100 leading-tight mb-4">
              {insight.title}
            </h1>

            {insight.subtitle && (
              <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">{insight.subtitle}</p>
            )}
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-slate-400 mb-3">By {insight.author}</p>
              <div className="text-xs uppercase tracking-[0.3em] text-slate-500 font-semibold">
                {insight.format}
              </div>
            </div>
          </div>
        </header>

        {/* Themes */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-2">
            {insight.themes.map((theme) => (
              <span
                key={theme}
                className="text-xs uppercase tracking-[0.2em] px-3 py-1.5 rounded-full border border-slate-800/80 bg-slate-950/70 text-slate-400"
              >
                {theme}
              </span>
            ))}
          </div>
        </div>

        {/* Article Body */}
        <div className="prose prose-invert max-w-none mb-16">
          <div className="space-y-6 text-slate-300 leading-relaxed">
            {insight.body.map((section, index) => {
              const paragraphClass = index === 0
                ? "text-lg leading-8 text-slate-300 first-letter:text-2xl first-letter:font-bold first-letter:text-cyan-300"
                : section.emphasis
                  ? "text-slate-400 italic leading-8"
                  : "text-slate-300 leading-8";

              return (
                <div key={index}>
                  {section.heading && (
                    <h2 className={`flex items-center gap-3 text-2xl font-bold text-slate-100 mb-6 ${index === 0 ? "mt-8" : "mt-0"}`}>
                      {section.sectionIconPath && (
                        <span className="flex-shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-400/15">
                          <svg
                            className="w-4 h-4 text-cyan-400/70"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={1.5}
                            aria-hidden="true"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d={section.sectionIconPath} />
                          </svg>
                        </span>
                      )}
                      {section.heading}
                    </h2>
                  )}

                  {section.highlight ? (
                    <div className="border-l-4 border-cyan-400/30 pl-6 py-4 bg-slate-900/50 rounded-r-lg my-8">
                      <p className={paragraphClass}>{section.content}</p>
                    </div>
                  ) : (
                    <p className={paragraphClass}>{section.content}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Series Navigation */}
        {insight.series && insight.series.number < insight.series.total && (
          <div className="border-t border-slate-800/50 pt-8 mt-12">
            <div className="bg-slate-900/50 rounded-2xl p-6 sm:p-8 border border-slate-800/70">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80 font-semibold mb-4">
                Series Progress
              </p>
              <h3 className="text-xl font-bold text-slate-100 mb-4">
                Next in Series: Part {insight.series.number + 1} of {insight.series.total}
              </h3>
              <p className="text-sm text-slate-500">
                The next article in this {insight.series.total}-part series is being published progressively. Check back soon or browse the full insights archive.
              </p>
            </div>
          </div>
        )}

        {/* Back to Insights Link */}
        <div className="mt-16 text-center">
          <Link
            href="/insights"
            className="inline-flex items-center px-6 py-3 border border-cyan-400/30 bg-cyan-500/10 text-cyan-100 rounded-full hover:bg-cyan-500/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            <span>Back to all insights</span>
            <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}
