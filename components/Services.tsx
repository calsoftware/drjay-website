const services = [
  {
    title: "AI Strategy & Digital Transformation",
    description: "Practical pathways for organisations to design AI-enabled systems, curriculum, and digital learning operations.",
    icon: "🤖",
  },
  {
    title: "Cyber Security Education",
    description: "Security-aware digital practice, apprenticeship readiness and resilient technology learning frameworks.",
    icon: "🔒",
  },
  {
    title: "Learning Science & Assessment",
    description: "Evidence-informed curriculum, IQA practice, feedback ecosystems and cognitive load-aware design.",
    icon: "🧠",
  },
  {
    title: "Software Engineering Leadership",
    description: "Technical architecture, code quality assurance, and scalable development practices for education technology.",
    icon: "💻",
  },
  {
    title: "Data Science & Analytics",
    description: "Learning analytics, performance insights, and data-driven decision making for educational outcomes.",
    icon: "📊",
  },
  {
    title: "Digital Curriculum Development",
    description: "Modern learning content creation, interactive modules, and technology-enhanced pedagogy design.",
    icon: "📚",
  },
];

export default function Services() {
  return (
    <section id="services" className="px-6 py-24 sm:px-10 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-3xl animate-fade-in-up">
          <p className="text-sm uppercase tracking-[0.4em] text-cyan-300/90 font-medium">Professional services</p>
          <h3 className="mt-6 text-4xl font-bold tracking-tight text-slate-100 sm:text-5xl lg:text-6xl">
            Consulting, curriculum design and digital systems leadership.
          </h3>
          <p className="mt-6 text-lg leading-8 text-slate-400 sm:text-xl">
            Support for teams, institutions and organisations navigating AI, learning science and secure digital transformation.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="glass-hover rounded-3xl p-6 sm:p-8 shadow-premium animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl mb-4">{service.icon}</div>
              <h4 className="text-xl font-semibold text-slate-100 mb-4">{service.title}</h4>
              <p className="text-slate-400 leading-relaxed">{service.description}</p>
              <div className="mt-6 flex items-center text-cyan-400 text-sm font-medium">
                <span>Learn more</span>
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
