const reports = [
  {
    title: "AI Transformation Readiness",
    description: "Assessment frameworks for organisational AI integration, capability maturity models, and strategic implementation pathways.",
    category: "AI Strategy",
    status: "Available",
  },
  {
    title: "Cyber Resilience in Education",
    description: "Analysis of security posture across learning institutions, threat landscape assessment, and resilience architecture design.",
    category: "Cyber Security",
    status: "Available",
  },
  {
    title: "Learning Systems Architecture",
    description: "Evidence-based analysis of educational technology ecosystems, pedagogical alignment, and scalable system design.",
    category: "Learning Science",
    status: "Available",
  },
  {
    title: "Digital Transformation Strategy",
    description: "Organisational capability assessment, digital maturity evaluation, and strategic roadmaps for institutional change.",
    category: "Digital Strategy",
    status: "Available",
  },
  {
    title: "Executive Intelligence Reports",
    description: "Research-backed analysis on emerging technologies, competitive landscape evaluation, and strategic foresight.",
    category: "Strategic Intelligence",
    status: "Custom",
  },
  {
    title: "Institutional Partnership Models",
    description: "Frameworks for collaborative research, capability development programmes, and transformative institutional partnerships.",
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
      </div>
    </section>
  );
}
