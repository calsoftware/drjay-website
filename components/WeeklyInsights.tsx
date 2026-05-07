const insights = [
  {
    heading: "AI in institutional contexts",
    detail: "Strategic thinking on authentic AI adoption, avoiding hype, and building capability in educational and research institutions.",
    date: "Dec 15, 2024",
    readTime: "4 min read",
  },
  {
    heading: "Learning systems architecture",
    detail: "Research on designing resilient, secure learning ecosystems that serve pedagogical goals and institutional transformation.",
    date: "Dec 8, 2024",
    readTime: "5 min read",
  },
  {
    heading: "Digital transformation leadership",
    detail: "Critical analysis on institutional leadership challenges, change management and building organisational capability for digital futures.",
    date: "Dec 1, 2024",
    readTime: "5 min read",
  },
];

export default function WeeklyInsights() {
  return (
    <section id="insights" className="px-6 py-24 sm:px-10 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-3xl animate-fade-in-up">
          <p className="text-sm uppercase tracking-[0.4em] text-cyan-300/90 font-medium">Strategic thinking</p>
          <h3 className="mt-6 text-4xl font-bold tracking-tight text-slate-100 sm:text-5xl lg:text-6xl">
            Weekly insights on AI, learning and organisational transformation.
          </h3>
          <p className="mt-6 text-lg leading-8 text-slate-400 sm:text-xl">
            Regular analysis and commentary on emerging trends, research findings and strategic implications for leadership teams and innovation groups in learning and capability ecosystems.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {insights.map((item, index) => (
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
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <a href="#" className="inline-flex items-center px-6 py-3 border border-cyan-400/30 bg-cyan-500/10 text-cyan-100 rounded-full hover:bg-cyan-500/20 transition-all duration-300">
            <span>View all insights</span>
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
