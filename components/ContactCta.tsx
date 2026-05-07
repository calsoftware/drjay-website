export default function ContactCta() {
  return (
    <section id="contact" className="px-6 py-24 sm:px-10 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="glass rounded-3xl p-12 sm:p-16 lg:p-20 shadow-premium animate-fade-in-up">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-cyan-300/90 font-medium">Collaboration</p>
              <h3 className="mt-6 text-4xl font-bold tracking-tight text-slate-100 sm:text-5xl lg:text-6xl">
                Let&apos;s build resilient learning and capability systems together.
              </h3>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400 sm:text-xl">
                Partnering with leadership teams, innovation groups and capability development organisations to design and implement AI-enabled transformation in education, skills and workforce systems.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="mailto:hello@drjolugbo.com" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 text-base font-semibold text-slate-950 transition-all duration-300 hover:scale-105 hover:shadow-elevated shadow-lg">
                  Send a message
                  <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
                <a href="#about" className="inline-flex items-center justify-center rounded-full border-2 border-slate-700 bg-slate-900/60 px-8 py-4 text-base font-semibold text-slate-100 transition-all duration-300 hover:border-cyan-400/60 hover:text-cyan-100 hover:bg-slate-800/80 backdrop-blur-sm">
                  Learn more
                </a>
              </div>
            </div>

            <div className="glass-hover rounded-2xl p-8 shadow-premium">
              <p className="text-sm uppercase tracking-[0.4em] text-cyan-200/90 font-medium mb-6">Get in touch</p>
              <div className="space-y-6">
                <div>
                  <p className="text-lg font-bold text-slate-100 mb-2">Email</p>
                  <p className="text-slate-400">hello@drjolugbo.com</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-slate-100 mb-2">Location</p>
                  <p className="text-slate-400">London, UK</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-slate-100 mb-2">Availability</p>
                  <p className="text-slate-400">Available for consulting and speaking</p>
                </div>
              </div>
              <div className="mt-8 flex gap-4">
                <a href="#" className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors">
                  <svg className="h-5 w-5 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors">
                  <svg className="h-5 w-5 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors">
                  <svg className="h-5 w-5 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 6.627 5.374 12 12 12s12-5.373 12-12c0-6.627-5.374-12-12-12zm4.11 16.065l-1.056-4.518c-.147-.626-.938-.629-.938-.629s-.789.003-.936.629l-1.055 4.518c-.046.2-.207.288-.4.2l-1.279-.618c-.193-.093-.287-.2-.24-.4l.796-3.354c.047-.2.207-.288.4-.2l.855.414c.193.093.346-.02.4-.2l.796-3.354c.047-.2.113-.288.3-.2l1.279.618c.193.093.287.2.24.4l-.796 3.354c-.047.2-.207.288-.4.2l-.855-.414c-.193-.093-.346.02-.4.2l-.796 3.354c-.047.2-.113.288-.3.2l-1.279-.618c-.193-.093-.287-.2-.24-.4l.796-3.354c.047-.2.207-.288.4-.2l.855.414c.193.093.346-.02.4-.2z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
