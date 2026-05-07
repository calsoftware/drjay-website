const researchTopics = [
  "AI as pedagogical partner",
  "Feedback infrastructure",
  "Cognitive load",
  "Assessment practice",
  "Epistemic integrity",
  "Software debugging",
  "Distributed pair debugging",
  "Social media for learning",
  "Technology enhanced learning",
];

export default function ResearchScholarship() {
  return (
    <section id="research" className="px-6 pb-16 sm:px-10 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">Research & scholarship</p>
          <h3 className="mt-4 text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">
            Inquiry-driven practice for more meaningful digital learning.
          </h3>
          <p className="mt-4 text-base leading-7 text-slate-400 sm:text-lg">
            Ongoing work explores how AI, assessment and pedagogy converge in resilient learning environments.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {researchTopics.map((topic) => (
            <article key={topic} className="rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6 shadow-lg shadow-cyan-500/5 transition hover:-translate-y-1 hover:border-cyan-400/50">
              <p className="text-base font-semibold text-slate-100">{topic}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
