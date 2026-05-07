const insights = [
  {
    heading: "AI and learning design",
    detail: "Strategic thinking for using AI as a trusted pedagogical partner rather than a tool.",
  },
  {
    heading: "Ethics in assessment",
    detail: "Maintaining epistemic integrity in digital assessment and feedback loops.",
  },
  {
    heading: "Resilient learning ecosystems",
    detail: "Designing secure, scalable environments for apprenticeship and higher education.",
  },
];

export default function WeeklyInsights() {
  return (
    <section id="insights" className="px-6 pb-16 sm:px-10 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-3xl border border-slate-800/80 bg-slate-950/80 p-10 shadow-lg shadow-cyan-500/5 sm:p-12">
          <div className="mb-8 max-w-2xl">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">Weekly insights</p>
            <h3 className="mt-4 text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">
              Ideas for AI, pedagogy and digital transformation.
            </h3>
            <p className="mt-4 text-base leading-7 text-slate-400 sm:text-lg">
              Short reflections on research-driven practice, learning technologies, and future-ready educational systems.
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {insights.map((item) => (
              <div key={item.heading} className="rounded-3xl border border-slate-800/80 bg-slate-900/80 p-6 transition hover:border-cyan-400/50">
                <p className="text-lg font-semibold text-slate-100">{item.heading}</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
