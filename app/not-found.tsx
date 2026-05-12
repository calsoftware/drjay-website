import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Page Not Found",
  description: "The page you were looking for could not be found.",
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <Navbar />

      <div className="flex-1 flex items-center justify-center px-6 py-20 sm:px-10 lg:px-12">
        <div className="mx-auto max-w-2xl text-center animate-fade-in-up">

          <p className="text-sm uppercase tracking-[0.4em] text-cyan-300/90 font-medium mb-4">
            404
          </p>

          <h1 className="text-3xl font-bold tracking-normal text-slate-100 sm:text-4xl leading-snug mb-6">
            Page not found.
          </h1>

          <p className="text-base leading-7 text-slate-400 sm:text-lg sm:leading-8 max-w-lg mx-auto mb-10">
            The page you were looking for does not exist or may have been moved. Use the links below to navigate back to the site.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-cyan-400/30 bg-cyan-500/10 text-cyan-100 hover:bg-cyan-500/20 transition-all duration-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              <svg className="h-4 w-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              Return home
            </Link>
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950 rounded"
            >
              Browse insights
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}
