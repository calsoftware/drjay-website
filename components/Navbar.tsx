'use client';

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Research", href: "/research" },
  { label: "Projects", href: "/projects" },
  { label: "Strategic Reports", href: "/strategic-reports" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-2xl sticky top-0 z-30 shadow-premium">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <div className="flex items-center gap-4">
          <Link href="/" className="group inline-flex flex-col leading-none transition hover:text-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950">
            <span className="text-xs uppercase tracking-[0.5em] text-cyan-300/90 font-semibold">Dr Olajide Jolugbo</span>
            <span className="text-base font-bold text-slate-100 sm:text-lg">Research · Strategy · Engineering</span>
          </Link>
          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setOpen(!open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 text-slate-100 transition hover:border-cyan-400/50 hover:text-cyan-200 lg:hidden focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            <span className="sr-only">Toggle mobile menu</span>
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d={open ? "M6 18L18 6M6 6l12 12" : "M4 7h16M4 12h16M4 17h16"} />
            </svg>
          </button>
        </div>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-300 lg:flex">
          {links.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`relative inline-flex items-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950 ${active ? "text-cyan-100 font-semibold border-b-2 border-cyan-400/60" : "text-slate-300 hover:text-cyan-200 hover:scale-105"}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>

        <div className={`lg:hidden ${open ? "block" : "hidden"} border-t border-slate-800/70 bg-slate-950/95 backdrop-blur-xl`}>
          <div className="space-y-2 px-6 py-4">
            {links.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={`block rounded-2xl px-4 py-3 text-base font-medium transition focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950 ${active ? "bg-cyan-500/20 text-cyan-100 font-semibold" : "text-slate-200 hover:text-cyan-200 hover:bg-slate-900/80"}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
    </header>
  );
}
