export default function ContactCta() {
  return (
    <section id="contact" className="px-6 pb-16 sm:px-10 lg:px-12">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-slate-800/80 bg-slate-950/85 p-10 shadow-[0_35px_90px_-60px_rgba(14,165,233,0.65)] sm:p-12">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">Contact</p>
            <h3 className="mt-4 text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">
              Build research-led AI, cyber security and learning systems together.
            </h3>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-400 sm:text-lg">
              Reach out for collaboration, speaking, consulting or bespoke digital transformation work.
            </p>
          </div>

          <div className="flex flex-col gap-4 rounded-3xl border border-cyan-500/20 bg-slate-900/90 p-8 text-slate-100">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/90">Next step</p>
            <p className="text-lg font-semibold text-slate-100">Email: hello@drjolugbo.com</p>
            <a href="mailto:hello@drjolugbo.com" className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">
              Send a message
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
