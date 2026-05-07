export default function Navbar() {
  return (
    <header className="border-b border-slate-800/70 bg-slate-950/60 backdrop-blur-xl sticky top-0 z-20">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">Dr Olajide Jolugbo</p>
          <h1 className="text-xl font-semibold tracking-tight text-slate-100 sm:text-2xl">
            Research · Strategy · Engineering
          </h1>
        </div>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-300 lg:flex">
          <a href="#expertise" className="transition hover:text-cyan-200">Expertise</a>
          <a href="#research" className="transition hover:text-cyan-200">Research</a>
          <a href="#services" className="transition hover:text-cyan-200">Services</a>
          <a href="#work" className="transition hover:text-cyan-200">Work</a>
          <a href="#insights" className="transition hover:text-cyan-200">Insights</a>
          <a href="#contact" className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-cyan-100 transition hover:border-cyan-300 hover:bg-cyan-500/15">
            Connect
          </a>
        </nav>
      </div>
    </header>
  );
}
