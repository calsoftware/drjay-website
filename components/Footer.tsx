const links = [
  { label: "LinkedIn", href: "https://www.linkedin.com" },
  { label: "GitHub", href: "https://github.com" },
  { label: "X", href: "https://twitter.com" },
  { label: "Substack", href: "https://substack.com" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/75 px-6 py-10 sm:px-10 lg:px-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">Dr Olajide Jolugbo</p>
          <p className="mt-3 text-sm text-slate-400">
            Researcher, educator, AI strategist and digital transformation practitioner.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-slate-300">
          {links.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="transition hover:text-cyan-200">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
