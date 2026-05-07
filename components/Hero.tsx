export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden px-6 py-20 sm:px-10 lg:px-12 lg:py-28">
      {/* Animated Background Layers */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.25),_transparent_40%),radial-gradient(circle_at_top_right,_rgba(59,130,246,0.18),_transparent_30%)] animate-float" />
        <div className="absolute inset-x-0 top-24 h-80 bg-[radial-gradient(circle_at_center,_rgba(6,182,212,0.15),_transparent_50%)] animate-glow" />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="animate-fade-in-up">
          <div className="glass rounded-3xl p-10 sm:p-14 lg:p-18 shadow-premium">
            <div className="max-w-3xl">
              <p className="mb-5 inline-flex rounded-full border border-cyan-400/30 bg-cyan-500/15 px-4 py-2 text-xs uppercase tracking-[0.45em] text-cyan-200 font-medium shadow-lg sm:text-sm">
                Research Institute · Strategic Transformation
              </p>
              <h2 className="mt-8 text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl lg:text-6xl xl:text-7xl leading-tight">
                Research, strategy and engineering for
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"> intelligent organisations.</span>
              </h2>
              <p className="mt-7 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                Applied research and strategic advisory in AI transformation, learning science, cyber resilience and digital systems. Supporting leadership teams and innovation groups to navigate complexity and build resilient futures across education, skills and workforce systems.
              </p>

              {/* Feature Cards */}
              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                <div className="glass-hover rounded-2xl p-5 text-center shadow-elevated">
                  <div className="text-2xl font-semibold text-cyan-400">15+</div>
                  <div className="text-sm text-slate-300 mt-2">Years in research</div>
                </div>
                <div className="glass-hover rounded-2xl p-5 text-center shadow-elevated">
                  <div className="text-2xl font-semibold text-cyan-400">50+</div>
                  <div className="text-sm text-slate-300 mt-2">Publications</div>
                </div>
                <div className="glass-hover rounded-2xl p-5 text-center shadow-elevated">
                  <div className="text-2xl font-semibold text-cyan-400">100+</div>
                  <div className="text-sm text-slate-300 mt-2">Projects delivered</div>
                </div>
              </div>

              <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a href="#projects" className="inline-flex min-w-[200px] items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 text-base font-semibold text-slate-950 transition-all duration-300 hover:scale-105 hover:shadow-elevated shadow-lg">
                  Explore featured work
                  <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a href="#contact" className="inline-flex min-w-[200px] items-center justify-center rounded-full border-2 border-slate-700 bg-slate-900/60 px-6 py-3 text-base font-semibold text-slate-100 transition-all duration-300 hover:border-cyan-400/60 hover:text-cyan-100 hover:bg-slate-800/80 backdrop-blur-sm">
                  Start a conversation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
