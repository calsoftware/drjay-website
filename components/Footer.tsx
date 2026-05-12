import Link from "next/link";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Research", href: "/research" },
  { label: "Projects", href: "/projects" },
  { label: "Strategic Reports", href: "/strategic-reports" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

const connect = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/olajidejolugbo" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/50 bg-slate-950/90 px-6 py-12 sm:px-10 lg:px-12 lg:py-14 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

          {/* Identity */}
          <div className="animate-fade-in-up">
            <p className="text-sm uppercase tracking-[0.4em] text-cyan-300/90 font-medium">
              Dr Olajide Jolugbo
            </p>
            <p className="mt-4 text-sm text-slate-400 leading-6">
              Research informed systems strategist, transformation architect and organisational intelligence practitioner.
            </p>
          </div>

          {/* Navigate */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.05s' }}>
            <p className="text-xs uppercase tracking-[0.35em] text-slate-500 font-medium mb-5">Navigate</p>
            <div className="space-y-2.5">
              {navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center text-sm text-slate-400 hover:text-cyan-400 transition-colors duration-200"
                >
                  <span className="w-1.5 h-1.5 bg-cyan-400/40 rounded-full mr-3 flex-shrink-0" />
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <p className="text-xs uppercase tracking-[0.35em] text-slate-500 font-medium mb-5">Connect</p>
            <div className="space-y-2.5">
              {connect.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center text-sm text-slate-400 hover:text-cyan-400 transition-colors duration-200"
                >
                  <span className="w-1.5 h-1.5 bg-cyan-400/40 rounded-full mr-3 flex-shrink-0" />
                  {item.label}
                </a>
              ))}
            </div>
          </div>


        </div>

        <div className="mt-10 pt-8 border-t border-slate-800/50 text-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <p className="text-xs text-slate-600">
            &copy; 2026 Dr Olajide Jolugbo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
