const pillars = [
  "AI Strategy & Governance",
  "Learning Science Research",
  "Cyber Security & Resilience",
  "Digital Transformation Systems",
  "Workforce Capability Development",
  "Strategic Leadership Advisory",
  "Professional Learning Ecosystems",
  "AI Enabled Capability Development",
  "Organisational Resilience",
  "Learning Systems Architecture",
  "Research-Informed Practice",
];

export default function ExpertisePillars() {
  return (
    <section id="about" className="px-6 py-24 sm:px-10 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-3xl animate-fade-in-up">
          <p className="text-sm uppercase tracking-[0.4em] text-cyan-300/90 font-medium">Research Authority</p>
          <h3 className="mt-6 text-4xl font-bold tracking-tight text-slate-100 sm:text-5xl lg:text-6xl">
            Deep practice in research, learning systems and organisational transformation.
          </h3>
          <p className="mt-6 text-lg leading-8 text-slate-400 sm:text-xl">
            Research foundations, strategic advisory, organisational partnerships and applied transformation. Supporting leadership teams, innovation groups and capability development across education, skills and workforce systems.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {pillars.map((pillar, index) => (
            <div
              key={pillar}
              className="glass-hover rounded-2xl p-8 text-center shadow-premium animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-lg font-bold text-cyan-100 mb-2">{pillar}</div>
              <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mx-auto"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
