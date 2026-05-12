const reports = [
  {
    title: "Systems Transformation Readiness",
    description: "Assessment frameworks for organisational systems integration, capability maturity models, and strategic implementation pathways.",
    category: "Systems Strategy",
    status: "Available",
  },
  {
    title: "Organisational Resilience Architecture",
    description: "Analysis of resilience posture across organisations, threat landscape assessment, and adaptive systems design.",
    category: "Resilience Systems",
    status: "Available",
  },
  {
    title: "Capability Ecosystem Design",
    description: "Evidence-based analysis of workforce capability systems, organisational alignment, and scalable ecosystem design.",
    category: "Capability Science",
    status: "Available",
  },
  {
    title: "Digital Transformation Strategy",
    description: "Organisational capability assessment, digital maturity evaluation, and strategic roadmaps for systemic change.",
    category: "Digital Strategy",
    status: "Available",
  },
  {
    title: "Strategic Intelligence Reports",
    description: "Research-backed analysis on emerging systems, competitive landscape evaluation, and strategic foresight.",
    category: "Strategic Intelligence",
    status: "Custom",
  },
  {
    title: "Transformation Partnership Models",
    description: "Frameworks for collaborative systems work, capability development programmes, and transformative organisational partnerships.",
    category: "Partnership Strategy",
    status: "Custom",
  },
];

export default function StrategicReports() {
  return (
    <section id="strategic-reports" className="px-6 py-24 sm:px-10 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-3xl animate-fade-in-up">
          <p className="text-sm uppercase tracking-[0.4em] text-cyan-300/90 font-medium">Strategic reports</p>
          <h3 className="mt-6 text-4xl font-bold tracking-tight text-slate-100 sm:text-5xl lg:text-6xl">
            Applied organisational intelligence for AI, learning and digital transformation.
          </h3>
          <p className="mt-6 text-lg leading-8 text-slate-400 sm:text-xl">
            Custom research, analysis and strategic frameworks designed to support leadership decision-making and capability development across education, skills and workforce systems.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reports.map((report, index) => (
            <article
              key={report.title}
              className="glass-hover rounded-3xl p-6 sm:p-8 shadow-premium animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/10 text-cyan-300">
                  {report.category}
                </span>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  report.status === 'Available' ? 'bg-green-500/20 text-green-400' : 'bg-slate-700/50 text-slate-300'
                }`}>
                  {report.status}
                </span>
              </div>
              <h4 className="text-lg font-semibold text-slate-100 mb-4">{report.title}</h4>
              <p className="text-slate-400 leading-relaxed mb-6">{report.description}</p>
              <div className="flex items-center text-cyan-400 text-sm font-medium">
                <span>Request briefing</span>
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="/strategic-reports"
            className="inline-flex items-center rounded-full border border-cyan-400/30 bg-slate-900/80 px-6 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan-300 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            Explore the full strategic archive
          </a>
        </div>
      </div>
    </section>
  );
}
