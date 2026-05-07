const services = [
  {
    title: "AI Strategy & Digital Transformation",
    description: "Practical pathways for organisations to design AI-enabled systems, curriculum, and digital learning operations.",
  },
  {
    title: "Cyber Security Education",
    description: "Security-aware digital practice, apprenticeship readiness and resilient technology learning frameworks.",
  },
  {
    title: "Learning Science & Assessment",
    description: "Evidence-informed curriculum, IQA practice, feedback ecosystems and cognitive load-aware design.",
  },
];

export default function Services() {
  return (
    <section id="services" className="px-6 pb-16 sm:px-10 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">Professional services</p>
          <h3 className="mt-4 text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">
            Consulting, curriculum design and digital systems leadership.
          </h3>
          <p className="mt-4 text-base leading-7 text-slate-400 sm:text-lg">
            Support for teams, institutions and organisations navigating AI, learning science and secure digital transformation.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="rounded-3xl border border-slate-800/80 bg-slate-950/80 p-7 shadow-lg shadow-cyan-500/5 transition hover:-translate-y-1 hover:border-cyan-400/50">
              <p className="text-lg font-semibold text-cyan-100">{service.title}</p>
              <p className="mt-4 text-sm leading-7 text-slate-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
