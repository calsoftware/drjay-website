"use client";

/**
 * Email protection note for future enhancement:
 * This component uses client-side JavaScript to assemble the mailto: href so the
 * raw email address never appears in server-rendered HTML.
 *
 * If the site moves to a deployment model with backend support (Cloudflare Pages +
 * Workers, Vercel Serverless Functions, Netlify Functions, Formspree, Basin, or
 * another form handling service), stronger protections can be layered on:
 *   - Cloudflare Turnstile or Google reCAPTCHA for bot challenges
 *   - Server-side rate limiting per IP / session
 *   - Honeypot form fields to catch automated submissions
 *   - Server-side spam filtering (e.g. Akismet, custom rules)
 * These require a server runtime and cannot be implemented in a static export.
 */

import { useEffect, useRef } from "react";

const engagementAreas = [
  "Strategic advisory",
  "Organisational transformation",
  "Systems architecture",
  "Research collaboration",
  "Capability ecosystem design",
  "Learning infrastructure strategy",
  "Executive consultation",
];

export default function ContactCta() {
  const emailRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (emailRef.current) {
      const u = "hello";
      const d = "olajide.today";
      emailRef.current.href = `mailto:${u}@${d}`;
    }
  }, []);

  return (
    <section id="contact" className="px-6 pt-10 pb-16 sm:px-10 lg:px-12 lg:pt-12 lg:pb-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8 animate-fade-in-up">

          {/* Left — Strategic Engagement Areas */}
          <div className="rounded-2xl border border-slate-800/50 bg-slate-900/30 p-8 lg:p-10">
            <p className="text-xs uppercase tracking-[0.4em] text-cyan-300/90 font-medium">
              Strategic Engagement Areas
            </p>
            <div className="mt-3 h-px bg-gradient-to-r from-cyan-400/25 via-slate-700/40 to-transparent" />

            <ul className="mt-6">
              {engagementAreas.map((area) => (
                <li
                  key={area}
                  className="flex items-center gap-3 py-3.5 border-b border-slate-800/40 last:border-0 last:pb-0"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400/70 flex-shrink-0" />
                  <span className="text-sm text-slate-400 sm:text-base">{area}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — Contact & Availability */}
          <div className="rounded-2xl border border-slate-800/50 bg-slate-900/30 p-8 lg:p-10">
            <p className="text-xs uppercase tracking-[0.4em] text-cyan-300/90 font-medium">
              Contact &amp; Availability
            </p>
            <div className="mt-3 h-px bg-gradient-to-r from-cyan-400/25 via-slate-700/40 to-transparent" />

            <div className="mt-6 space-y-8">

              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-slate-500 font-medium">
                  Research and Professional Enquiries
                </p>
                <a
                  ref={emailRef}
                  href="#contact"
                  aria-label="Contact Dr Olajide via email — opens your email client"
                  className="mt-2 block text-slate-300 hover:text-cyan-300 transition-colors duration-200 text-sm sm:text-base"
                >
                  Contact Dr Olajide via email
                </a>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-slate-500 font-medium">Location</p>
                <p className="mt-2 text-slate-300 text-sm sm:text-base">London, United Kingdom</p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-slate-500 font-medium">Availability</p>
                <p className="mt-2 text-slate-400 text-sm sm:text-base leading-7">
                  Currently open to strategic advisory engagements, research collaboration and organisational transformation initiatives. Initial enquiries welcome.
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-slate-500 font-medium">Professional Platforms</p>
                <a
                  href="https://www.linkedin.com/in/olajidejolugbo"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex items-center gap-2 text-slate-400 hover:text-cyan-300 transition-colors duration-200 text-sm sm:text-base"
                >
                  LinkedIn
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
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
