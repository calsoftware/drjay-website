const projects = [
  {
    title: "Systems Transformation Architecture",
    summary: "Strategic and technical implementation supporting organisational systems integration, capability ecosystems and transformation infrastructure.",
    tech: ["Systems Architecture", "Capability Innovation", "Transformation Strategy"],
    status: "Completed",
  },
  {
    title: "Organisational Resilience Frameworks",
    summary: "Framework design and implementation for resilient organisational systems across workforce and capability environments.",
    tech: ["Resilience Systems", "Organisational Intelligence", "Risk Management"],
    status: "Ongoing",
  },
  {
    title: "Digital Capability Ecosystems",
    summary: "Strategic systems design and capability development supporting leadership teams through digital transformation and organisational change.",
    tech: ["Digital Strategy", "Change Leadership", "Capability Ecosystems"],
    status: "Active",
  },
];

export default function FeaturedWork() {
  return (
    <section id="projects" className="px-6 py-24 sm:px-10 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-3xl animate-fade-in-up">
          <p className="text-sm uppercase tracking-[0.4em] text-cyan-300/90 font-medium">Applied transformation</p>
          <h3 className="mt-6 text-4xl font-bold tracking-tight text-slate-100 sm:text-5xl lg:text-6xl">
            Systems implementation, capability innovation and organisational transformation.
          </h3>
          <p className="mt-6 text-lg leading-8 text-slate-400 sm:text-xl">
            Working with leadership teams, innovation groups and transformation programmes to design, implement and evaluate systems architecture and capability ecosystems across sectors.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="glass-hover rounded-3xl p-6 sm:p-8 shadow-premium animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  project.status === 'Completed' ? 'bg-green-500/20 text-green-400' :
                  project.status === 'Ongoing' ? 'bg-yellow-500/20 text-yellow-400' :
                  'bg-blue-500/20 text-blue-400'
                }`}>
                  {project.status}
                </span>
              </div>
              <h4 className="text-lg font-semibold text-slate-100 mb-4">{project.title}</h4>
              <p className="text-slate-400 leading-relaxed mb-6">{project.summary}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-cyan-500/10 text-cyan-300 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex items-center text-cyan-400 text-sm font-medium">
                <span>View project</span>
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
