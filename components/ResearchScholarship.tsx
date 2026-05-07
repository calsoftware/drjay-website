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
    <section id="research" className="px-6 py-24 sm:px-10 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-3xl animate-fade-in-up">
          <p className="text-sm uppercase tracking-[0.4em] text-cyan-300/90 font-medium">Research & Inquiry</p>
          <h3 className="mt-6 text-4xl font-bold tracking-tight text-slate-100 sm:text-5xl lg:text-6xl">
            Scholarly inquiry into AI, learning and organisational transformation.
          </h3>
          <p className="mt-6 text-lg leading-8 text-slate-400 sm:text-xl">
            Research that bridges pedagogy, technology and organisational practice. Exploring how learning science, AI systems and digital transformation converge in resilient learning and capability ecosystems.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {researchTopics.map((topic, index) => (
            <article
              key={topic}
              className="glass-hover rounded-2xl p-8 shadow-premium animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h4 className="text-xl font-bold text-slate-100 mb-3">{topic}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Exploring innovative approaches to enhance learning outcomes through technology and pedagogy.
              </p>
              <div className="mt-4 flex items-center text-cyan-400 text-sm font-medium">
                <span>Read more</span>
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
