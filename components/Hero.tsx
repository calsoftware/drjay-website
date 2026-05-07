export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden px-6 py-20 sm:px-10 lg:px-12">
      <div className="absolute inset-x-0 top-0 -z-10 h-64 bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.22),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(59,130,246,0.14),_transparent_25%)]" />
      <div className="mx-auto max-w-6xl">
        <div className="rounded-3xl border border-slate-800/80 bg-slate-950/80 p-10 shadow-[0_30px_120px_-65px_rgba(56,189,248,0.55)] backdrop-blur-xl sm:p-14">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-xs uppercase tracking-[0.35em] text-cyan-200/90">
              Dark academic futurist practice
            </p>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl">
              Advancing AI, learning science, cyber security and digital transformation through research, strategy and engineering.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              A researcher, educator, AI strategist, digital scientist, engineer and learning scientist shaping higher education, apprenticeship practice and modern digital learning systems.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a href="#work" className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">
                Explore featured work
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-400/50 hover:text-cyan-100">
                Start a conversation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
