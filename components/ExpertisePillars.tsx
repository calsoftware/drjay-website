const pillars = [
  "AI Strategy",
  "Learning Science",
  "Cyber Security",
  "Software Engineering",
  "Data Science & Analytics",
  "Business Analysis",
  "Digital Curriculum Development",
  "E Learning Architecture & Development",
  "Assessment & IQA Practice",
  "Higher Education & Apprenticeship Practice",
  "Digital Transformation",
];

export default function ExpertisePillars() {
  return (
    <section id="expertise" className="px-6 pb-16 sm:px-10 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">Expertise pillars</p>
          <h3 className="mt-4 text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">
            Deep practice across research, learning and digital systems.
          </h3>
          <p className="mt-4 text-base leading-7 text-slate-400 sm:text-lg">
            Work that blends academic rigor with practical digital strategy and engineering for learning ecosystems, cyber resilience and intelligent transformation.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {pillars.map((pillar) => (
            <div key={pillar} className="rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6 text-slate-100 shadow-lg shadow-cyan-500/5 transition hover:-translate-y-1 hover:border-cyan-500/40">
              <p className="text-base font-semibold text-cyan-100">{pillar}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
