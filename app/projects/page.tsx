import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Services from "../../components/Services";

export const metadata = {
  title: "Applied Transformation Projects",
  description:
    "Selected applied work across AI strategy, digital transformation, business analysis, data analytics, learning architecture, curriculum development, assessment quality assurance and training infrastructure.",
  alternates: { canonical: "https://olajide.today/projects" },
  openGraph: {
    title: "Applied Transformation Projects | Dr Olajide Jolugbo",
    description:
      "A curated portfolio of applied transformation practice across AI strategy, digital transformation, data analytics, learning architecture and organisational capability.",
    url: "https://olajide.today/projects",
    type: "website",
  },
};

const approachSteps = [
  {
    number: "01",
    title: "Strategic Discovery",
    description:
      "Understanding organisational context, operational friction, stakeholder priorities and transformation requirements before any design or delivery begins.",
  },
  {
    number: "02",
    title: "Systems Design and Alignment",
    description:
      "Designing scalable architectures, workflows, learning systems and operational frameworks aligned with strategic goals and the realities of the operating environment.",
  },
  {
    number: "03",
    title: "Implementation and Capability Development",
    description:
      "Supporting delivery, adoption, optimisation and sustainable capability integration across organisational environments — not just go-live.",
  },
  {
    number: "04",
    title: "Evaluation and Continuous Improvement",
    description:
      "Monitoring outcomes, refining systems and supporting long-term transformation maturity so that change becomes embedded, not episodic.",
  },
];

export default function Projects() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      {/* Page header */}
      <section className="px-6 pt-10 pb-8 sm:px-10 lg:px-12 lg:pt-14 lg:pb-10 border-b border-slate-800/50">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-start">

            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-cyan-300/90 font-medium">
                Applied Transformation Practice
              </p>
              <h1 className="mt-4 text-2xl font-bold tracking-normal text-slate-100 sm:text-3xl leading-snug">
                A curated portfolio of applied transformation practice.
              </h1>
            </div>

            <div className="text-base leading-7 text-slate-400 sm:text-lg sm:leading-8 lg:pt-1">
              <p>
                Selected applied work across digital transformation, software systems, data analytics,
                learning architecture, curriculum development, assessment quality assurance and training
                infrastructure. These projects reflect my work across strategy, implementation,
                stakeholder engagement and capability development.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Confidentiality note */}
      <div className="px-6 pt-6 sm:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs text-slate-500 leading-5 border-l-2 border-slate-700 pl-4">
            Project summaries are anonymised to preserve organisational confidentiality while showing
            the nature, method and strategic value of the work.
          </p>
        </div>
      </div>

      {/* Domain cards */}
      <Services />

      {/* Approach to transformation practice */}
      <section className="px-6 pb-16 sm:px-10 lg:px-12 lg:pb-24 border-t border-slate-800/50">
        <div className="mx-auto max-w-7xl pt-14 lg:pt-16">

          <div className="mb-12">
            <p className="text-sm uppercase tracking-[0.4em] text-cyan-300/90 font-medium">
              How I work
            </p>
            <h2 className="mt-4 text-xl font-bold text-slate-100 sm:text-2xl leading-snug">
              Approach to Transformation Practice
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
              Across all domains, my approach follows a consistent logic — grounded in context,
              designed for systems, delivered for people and evaluated for impact.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {approachSteps.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-slate-800/50 bg-slate-900/20 p-6"
              >
                <span className="text-xs font-semibold tracking-[0.3em] text-cyan-400/50 uppercase">
                  {step.number}
                </span>
                <h3 className="mt-3 text-sm font-semibold text-slate-100 leading-snug">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-slate-400 leading-6">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
