const links = [
  { label: "LinkedIn", href: "https://www.linkedin.com", icon: "linkedin" },
  { label: "GitHub", href: "https://github.com", icon: "github" },
  { label: "X", href: "https://twitter.com", icon: "twitter" },
  { label: "Substack", href: "https://substack.com", icon: "substack" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/50 bg-slate-950/90 px-6 py-16 sm:px-10 lg:px-12 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div className="animate-fade-in-up">
            <p className="text-sm uppercase tracking-[0.4em] text-cyan-300/90 font-medium">Dr Olajide Jolugbo</p>
            <p className="mt-4 text-slate-400 leading-relaxed">
              Researcher, educator, AI strategist and digital transformation practitioner.
            </p>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h4 className="text-lg font-bold text-slate-100 mb-4">Connect</h4>
            <div className="space-y-3">
              {links.slice(0, 2).map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="flex items-center text-slate-400 hover:text-cyan-400 transition-colors">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h4 className="text-lg font-bold text-slate-100 mb-4">Follow</h4>
            <div className="space-y-3">
              {links.slice(2).map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="flex items-center text-slate-400 hover:text-cyan-400 transition-colors">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <h4 className="text-lg font-bold text-slate-100 mb-4">Quick Links</h4>
            <div className="space-y-3">
              <a href="#home" className="flex items-center text-slate-400 hover:text-cyan-400 transition-colors">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                Home
              </a>
              <a href="#about" className="flex items-center text-slate-400 hover:text-cyan-400 transition-colors">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                About
              </a>
              <a href="#projects" className="flex items-center text-slate-400 hover:text-cyan-400 transition-colors">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                Projects
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800/50 text-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <p className="text-slate-500 text-sm">
            © 2024 Dr Olajide Jolugbo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
