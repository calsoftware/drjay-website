const projects = [
  {
    title: "AI-enabled learning pathways",
    summary: "Designing curriculum and feedback systems for scalable, evidence-based digital education.",
  },
  {
    title: "Cyber resilience pedagogy",
    summary: "Integrating security awareness into apprenticeship and higher education environments.",
  },
  {
    title: "Distributed debugging research",
    summary: "Exploring pair programming cultures and social media for collaborative learning.",
  },
];

export default function FeaturedWork() {
  return (
    <section id="work" className="px-6 pb-16 sm:px-10 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">Featured work</p>
          <h3 className="mt-4 text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">
            Recent projects that bridge research, education and digital engineering.
          </h3>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="rounded-3xl border border-slate-800/80 bg-slate-950/80 p-7 shadow-lg shadow-cyan-500/5 transition hover:-translate-y-1 hover:border-cyan-400/50">
              <p className="text-lg font-semibold text-slate-100">{project.title}</p>
              <p className="mt-4 text-sm leading-7 text-slate-300">{project.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
