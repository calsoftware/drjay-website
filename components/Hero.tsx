import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden px-6 pt-10 pb-10 sm:px-10 lg:px-12 lg:pt-12 lg:pb-14"
    >
      {/* Ambient background gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-96 bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.18),_transparent_38%),radial-gradient(circle_at_top_right,_rgba(59,130,246,0.12),_transparent_30%)] animate-float" />
        <div className="absolute inset-x-0 top-20 h-80 bg-[radial-gradient(circle_at_center,_rgba(6,182,212,0.09),_transparent_52%)] animate-glow" />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="animate-fade-in-up">
          <div className="glass rounded-3xl shadow-premium overflow-hidden">
            <div className="grid md:grid-cols-[1.2fr_0.8fr] items-stretch">

              {/* ── Left: text ── */}
              <div className="p-8 sm:p-10 lg:p-14">

                {/* Badge */}
                <span className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-1.5 text-xs uppercase tracking-[0.35em] text-cyan-200/90 font-medium">
                  Systems Transformation · Strategic Intelligence
                </span>

                {/* Heading */}
                <h1 className="mt-7 text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl xl:text-6xl leading-[1.15]">
                  Research, strategy and systems engineering for{" "}
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    intelligent organisational transformation.
                  </span>
                </h1>

                {/* Supporting statement */}
                <p className="mt-6 max-w-lg text-base leading-7 text-slate-300/90 sm:text-lg sm:leading-8">
                  Strategic advisory and systems leadership supporting
                  organisational transformation, capability development and
                  intelligent enterprise design across learning, workforce and
                  digital environments.
                </p>

                {/* Mobile-only portrait — between statement and metrics */}
                <div className="relative block md:hidden mt-7 rounded-2xl overflow-hidden" style={{ height: '290px' }}>
                  <Image
                    src="/portrait-mobile.webp"
                    alt="Dr Olajide Jolugbo — research practitioner, systems strategist and strategic advisor"
                    fill
                    className="object-cover"
                    style={{
                      objectPosition: '56% 5%',
                      filter: 'brightness(0.62) saturate(0.32) contrast(1.12)',
                      opacity: 0.90,
                    }}
                    priority
                  />
                  {/* Blue-cool tone wash */}
                  <div className="absolute inset-0 pointer-events-none" style={{ background: 'rgba(8, 20, 55, 0.22)' }} />
                  {/* Top fade */}
                  <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(15,23,42,0.65) 0%, rgba(15,23,42,0.18) 22%, transparent 48%)' }} />
                  {/* Bottom fade */}
                  <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(15,23,42,0.90) 0%, rgba(15,23,42,0.38) 22%, transparent 50%)' }} />
                  {/* Side fades */}
                  <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to right, rgba(15,23,42,0.28) 0%, transparent 22%, transparent 78%, rgba(15,23,42,0.28) 100%)' }} />
                  {/* Subtle ambient glow */}
                  <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 52% 30%, rgba(14,165,233,0.06) 0%, transparent 70%)' }} />
                </div>

                {/* Credential stats */}
                <div className="mt-7 md:mt-9 grid gap-3 sm:grid-cols-3">
                  <div className="glass-hover rounded-2xl p-4 text-center shadow-elevated">
                    <div className="text-2xl font-semibold text-cyan-400">34+</div>
                    <div className="mt-1.5 text-xs text-slate-400 leading-snug">Years in systems practice</div>
                  </div>
                  <div className="glass-hover rounded-2xl p-4 text-center shadow-elevated">
                    <div className="text-2xl font-semibold text-cyan-400">60+</div>
                    <div className="mt-1.5 text-xs text-slate-400 leading-snug">Transformation systems</div>
                  </div>
                  <div className="glass-hover rounded-2xl p-4 text-center shadow-elevated">
                    <div className="text-2xl font-semibold text-cyan-400">100+</div>
                    <div className="mt-1.5 text-xs text-slate-400 leading-snug">Capability ecosystems</div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a
                    href="/about"
                    className="inline-flex min-w-[188px] items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-2.5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:scale-105 hover:shadow-elevated shadow-lg"
                  >
                    Explore my work
                    <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex min-w-[188px] items-center justify-center rounded-full border border-slate-700 bg-slate-900/50 px-6 py-2.5 text-sm font-semibold text-slate-200 transition-all duration-300 hover:border-cyan-400/50 hover:text-cyan-100 hover:bg-slate-800/70 backdrop-blur-sm"
                  >
                    Start a conversation
                  </a>
                </div>
              </div>

              {/* ── Right: portrait — tablet and desktop ── */}
              <div className="relative hidden md:block" style={{ minHeight: '460px' }}>

                {/* Portrait */}
                <Image
                  src="/portrait-desktop.webp"
                  alt="Dr Olajide Jolugbo — research practitioner, systems strategist and strategic advisor"
                  fill
                  className="object-cover"
                  style={{
                    objectPosition: '56% 5%',
                    filter: 'brightness(0.58) saturate(0.32) contrast(1.12)',
                    opacity: 0.88,
                  }}
                  priority
                />

                {/* Blue-cool tone wash */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: 'rgba(8, 20, 55, 0.20)' }}
                />

                {/* Left edge — dissolves into text column */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      'linear-gradient(to right, #0f1726 0%, rgba(15,23,42,0.92) 16%, rgba(15,23,42,0.5) 32%, rgba(15,23,42,0.12) 50%, transparent 68%)',
                  }}
                />

                {/* Top edge */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      'linear-gradient(to bottom, #0f1726 0%, rgba(15,23,42,0.72) 10%, rgba(15,23,42,0.18) 24%, transparent 40%)',
                  }}
                />

                {/* Bottom edge */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      'linear-gradient(to top, #0f1726 0%, rgba(15,23,42,0.88) 18%, rgba(15,23,42,0.42) 36%, rgba(15,23,42,0.1) 52%, transparent 65%)',
                  }}
                />

                {/* Right edge */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      'linear-gradient(to left, #0f1726 0%, rgba(15,23,42,0.5) 8%, rgba(15,23,42,0.1) 20%, transparent 36%)',
                  }}
                />

                {/* Ambient scholarly glow */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(ellipse 52% 42% at 52% 26%, rgba(14,165,233,0.045) 0%, transparent 72%)',
                  }}
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
