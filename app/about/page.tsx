import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ExpertisePillars from "../../components/ExpertisePillars";

export const metadata = {
  title: "About",
  description:
    "Dr Olajide Jolugbo, practitioner-scholar and systems strategist working at the intersection of research, AI strategy, digital transformation, business analysis and organisational capability ecosystem design.",
  alternates: { canonical: "https://olajide.today/about" },
  openGraph: {
    title: "About Dr Olajide Jolugbo: Systems Strategist and Transformation Practitioner",
    description:
      "Practitioner-scholar working at the intersection of research, AI strategy, digital transformation and organisational intelligence.",
    url: "https://olajide.today/about",
    type: "profile",
  },
};

export default function About() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <section className="px-6 pt-10 pb-10 sm:px-10 lg:px-12 lg:pt-14 lg:pb-12 border-b border-slate-800/50">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-start">

            {/* Left: identity + positioning */}
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-cyan-300/90 font-medium">
                Dr Olajide Jolugbo
              </p>
              <h1 className="mt-5 text-2xl font-bold tracking-tight text-slate-100 sm:text-3xl leading-snug">
                I work at the intersection of research, systems thinking and organisational transformation, designing intelligent capability ecosystems for leaders and institutions navigating technology driven change.
              </h1>
            </div>

            {/* Right: practice narrative */}
            <div className="space-y-5 text-base leading-7 text-slate-400 sm:text-[1.0625rem] sm:leading-8">
              <p>
                My practice spans strategic advisory, business analysis, eLearning architecture, AI enabled capability development, data science and technology enhanced learning. I work with boards, executive teams and senior leaders to design capability systems that are scalable, research informed and built for the structural demands of modern organisations, from learning infrastructure strategy and apprenticeship ecosystems to digital transformation and quality assurance of assessment processes.
              </p>
              <p>
                The disciplines that ground this work include systems thinking, organisational intelligence, AI mediated learning contexts, assessment and feedback systems, cyber resilience and digital trust. My scholarly work draws on the scholarship of teaching and learning, sociotechnical systems theory and distributed cognition, connecting rigorous inquiry with the design challenges that practitioners and institutions actually face.
              </p>
              <p>
                I approach transformation not as a project management problem but as a systems problem: one that demands analytical depth, research informed frameworks and the kind of strategic patience that builds durable capacity rather than temporary compliance. Across education, workforce and digital environments, that is the work I find most meaningful, and the work I do best.
              </p>
            </div>

          </div>
        </div>
      </section>

      <div className="px-6 pt-8 pb-0 sm:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.4em] text-slate-500 font-medium">
            Twelve core capability domains
          </p>
        </div>
      </div>

      <ExpertisePillars compact />
      <Footer />
    </main>
  );
}
