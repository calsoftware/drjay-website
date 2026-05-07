'use client';

import { useEffect, useState } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Research", href: "#research" },
  { label: "Strategic Reports", href: "#strategic-reports" },
  { label: "Insights", href: "#insights" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact", isButton: true },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const sectionIds = ["home", "about", "research", "strategic-reports", "insights", "projects", "contact"];

    const onScroll = () => {
      const offset = window.innerHeight * 0.35;
      const current = sectionIds.reduce((closest, id) => {
        const section = document.getElementById(id);
        if (!section) return closest;
        const distance = Math.abs(section.getBoundingClientRect().top - offset);
        return distance < closest.distance ? { id, distance } : closest;
      }, { id: "home", distance: Infinity });
      setActive(`#${current.id}`);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-2xl sticky top-0 z-30 shadow-premium">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <div className="flex items-center gap-4">
          <a href="#home" className="group inline-flex flex-col leading-none transition hover:text-cyan-200">
            <span className="text-xs uppercase tracking-[0.5em] text-cyan-300/90 font-semibold">Dr Olajide Jolugbo</span>
            <span className="text-base font-bold text-slate-100 sm:text-lg">Research · Strategy · Engineering</span>
          </a>
          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setOpen(!open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 text-slate-100 transition hover:border-cyan-400/50 hover:text-cyan-200 lg:hidden"
          >
            <span className="sr-only">Toggle mobile menu</span>
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d={open ? "M6 18L18 6M6 6l12 12" : "M4 7h16M4 12h16M4 17h16"} />
            </svg>
          </button>
        </div>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-300 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative transition-all duration-300 ${link.isButton ? "rounded-full border border-cyan-400/40 bg-cyan-500/10 px-5 py-2.5 text-cyan-100 font-semibold hover:border-cyan-300 hover:bg-cyan-500/20 hover:shadow-elevated" : "hover:text-cyan-200 hover:scale-105"} ${active === link.href ? "text-cyan-100" : "text-slate-300"}`}
            >
              {link.label}
              {!link.isButton && (
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 hover:w-full" />
              )}
            </a>
          ))}
        </nav>
      </div>

      <div className={`lg:hidden ${open ? "block" : "hidden"} border-t border-slate-800/70 bg-slate-950/95 backdrop-blur-xl`}> 
        <div className="space-y-2 px-6 py-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`block rounded-2xl px-4 py-3 text-base font-medium transition ${link.isButton ? "bg-cyan-500/10 text-cyan-100 hover:bg-cyan-500/20" : "text-slate-200 hover:text-cyan-200 hover:bg-slate-900/80"}`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
