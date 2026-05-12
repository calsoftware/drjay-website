import Link from "next/link";

interface InsightItem {
  heading: string;
  detail: string;
  date: string;
  readTime: string;
}

const insights: InsightItem[] = [
  // Placeholder articles removed - only real articles will be displayed
];

export default function WeeklyInsights() {
  return (
    <section id="insights" className="px-6 py-24 sm:px-10 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-3xl animate-fade-in-up">
          <p className="text-sm uppercase tracking-[0.4em] text-cyan-300/90 font-medium">Strategic commentary</p>
          <h3 className="mt-6 text-4xl font-bold tracking-tight text-slate-100 sm:text-5xl lg:text-6xl">
            Systems analysis, transformation thinking and applied foresight.
          </h3>
          <p className="mt-6 text-lg leading-8 text-slate-400 sm:text-xl">
            Regular analysis and commentary on emerging systems trends, research findings and strategic implications for leadership teams and innovation groups in capability ecosystems.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {insights.length > 0 ? (
            insights.map((item, index) => (
              <article
                key={item.heading}
                className="glass-hover rounded-2xl p-8 shadow-premium animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                  <span>{item.date}</span>
                  <span>{item.readTime}</span>
                </div>
                <h4 className="text-xl font-bold text-slate-100 mb-4">{item.heading}</h4>
                <p className="text-slate-400 leading-relaxed mb-6">{item.detail}</p>
                <div className="flex items-center text-cyan-400 text-sm font-medium">
                  <span>Read full article</span>
                  <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </article>
            ))
          ) : (
            <div className="col-span-full text-center py-16">
              <div className="max-w-md mx-auto">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-slate-800/50 flex items-center justify-center">
                  <svg className="w-8 h-8 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-300 mb-3">Coming Soon</h3>
                <p className="text-slate-500 leading-relaxed">
                  More insights will be added as new essays are published.
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <Link href="/insights" className="inline-flex items-center px-6 py-3 border border-cyan-400/30 bg-cyan-500/10 text-cyan-100 rounded-full hover:bg-cyan-500/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950">
            <span>Explore the full insight archive</span>
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
