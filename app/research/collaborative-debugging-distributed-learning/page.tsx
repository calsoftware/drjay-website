import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Collaborative Debugging in Distributed Learning Environments",
  description: "An empirically grounded investigation into how novice programmers engage in collaborative debugging within distributed environments, drawing on Distributed Cognition and Information Foraging Theory.",
  alternates: { canonical: "https://olajide.today/research/collaborative-debugging-distributed-learning" },
  openGraph: {
    title: "Collaborative Debugging in Distributed Learning Environments | Dr Olajide Jolugbo",
    description: "From conceptual foundations to an empirically refined multilayer framework for understanding collaborative debugging across cognitive, social and technological dimensions.",
    url: "https://olajide.today/research/collaborative-debugging-distributed-learning",
    type: "article",
  },
};

const frameworkLayers = [
  {
    label: "Cognitive Layer",
    description: "How individual and shared cognitive effort is distributed across learners during collaborative debugging — including working memory allocation, hypothesis formation and diagnostic reasoning.",
    themes: ["Distributed Cognition", "Cognitive Load", "Diagnostic Reasoning", "Hypothesis Formation"],
  },
  {
    label: "Social Layer",
    description: "The interpersonal coordination mechanisms through which distributed pairs negotiate debugging strategies, share expertise, divide labour and maintain shared situational awareness.",
    themes: ["Collaborative Reasoning", "Social Coordination", "Shared Situational Awareness", "Expertise Negotiation"],
  },
  {
    label: "Technological Layer",
    description: "The role of tools, platforms and interfaces as cognitive artefacts mediating the debugging process — including screen sharing, version control, IDE affordances and communication channels.",
    themes: ["Technology Mediation", "Cognitive Artefacts", "Tool Interaction", "Platform Affordances"],
  },
];

const theoreticalFoundations = [
  {
    theory: "Distributed Cognition",
    theorist: "Hutchins, 1995",
    application: "Frames collaborative debugging as a system-level cognitive process distributed across learners, tools and the shared environment — not localised within individual minds.",
  },
  {
    theory: "Information Foraging Theory",
    theorist: "Pirolli & Card, 1999",
    application: "Explains how distributed pairs navigate error information landscapes — how they follow information scent, evaluate diagnostic leads and decide when to abandon or pursue particular repair paths.",
  },
];

const methodComponents = [
  {
    method: "Think-Aloud Sessions",
    description: "Concurrent and retrospective think-aloud protocols capturing the reasoning processes of novice programmers during distributed collaborative debugging tasks.",
  },
  {
    method: "Semi-Structured Interviews",
    description: "In-depth interviews with participants exploring their experiences, strategy preferences and reflections on collaborative debugging in distributed environments.",
  },
  {
    method: "Focus Groups",
    description: "Structured focus group discussions surfacing shared patterns, collective sensemaking and group-level insights about distributed debugging practice.",
  },
  {
    method: "Tool Interaction Analysis",
    description: "Systematic analysis of learner interactions with debugging tools, IDEs, communication platforms and shared coding environments during collaborative sessions.",
  },
];

const cscwImplications = [
  "Design of collaborative debugging environments responsive to distributed cognitive load dynamics",
  "Tool affordances that support shared situational awareness in distributed pair programming",
  "Communication channel design aligned to the cognitive demands of collaborative fault isolation",
  "Awareness mechanisms enabling distributed pairs to coordinate diagnostic reasoning asynchronously",
  "Platform architectures that externalise cognitive state for shared inspection across locations",
];

const educationImplications = [
  "Pedagogical scaffolds for collaborative debugging skill development in distributed apprenticeship contexts",
  "Assessment designs capturing collaborative reasoning quality, not only debugging outcome",
  "Curriculum models explicitly teaching distributed debugging strategies and coordination protocols",
  "Mentoring frameworks responsive to the cognitive and social dynamics of distributed pair debugging",
  "Learning environment designs that reduce the cognitive overhead of tool-mediated collaboration",
];

const futureDirections = [
  "Longitudinal investigation of debugging strategy development across apprenticeship programme duration",
  "Cross-tool comparison of debugging environment affordances and their effects on collaborative cognition",
  "Extension of the multilayer framework to asynchronous and hybrid distributed debugging contexts",
  "Intervention studies testing pedagogical scaffolds derived from the empirically refined framework",
];

export default function CollaborativeDebuggingPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      {/* Hero */}
      <section className="px-6 pt-10 pb-8 sm:px-10 lg:px-12 lg:pt-14 lg:pb-10 border-b border-slate-800/50">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-start">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <p className="text-sm uppercase tracking-[0.4em] text-cyan-300/90 font-medium">
                  Distributed Cognition &amp; CSCW Research
                </p>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-400 bg-teal-500/10 border border-teal-400/20 px-2.5 py-0.5 rounded-full">
                  Active Research Programme
                </span>
              </div>
              <h1 className="text-2xl font-bold tracking-normal text-slate-100 sm:text-3xl leading-snug">
                Collaborative Debugging in Distributed Learning Environments
              </h1>
              <p className="mt-3 text-slate-400 text-base font-medium leading-relaxed">
                From conceptual foundations to an empirically refined framework.
              </p>
              <p className="mt-5 text-xs text-cyan-300/80 font-medium italic">
                Jolugbo, O. (research manuscript under active development). Collaborative Debugging in Distributed Learning Environments: From Conceptual Foundations to an Empirically Refined Framework.
              </p>
            </div>
            <div className="text-base leading-7 text-slate-400 lg:pt-1">
              <p>
                An empirically grounded investigation into how novice programmers engage in collaborative debugging within distributed environments. Drawing on Distributed Cognition and Information Foraging Theory, the study develops and refines conceptual frameworks explaining how learners coordinate reasoning, share cognitive effort and interact through technology-mediated debugging environments.
              </p>
              <p className="mt-4">
                Using think-aloud sessions, interviews, focus groups and tool interaction analysis, this research contributes a multilayer framework for understanding collaborative debugging across cognitive, social and technological dimensions — positioning it as one of the primary empirical contributions of this research programme.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conceptual Foundations */}
      <section className="px-6 pt-10 pb-8 sm:px-10 lg:px-12 lg:pt-12 lg:pb-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.4em] text-cyan-300/90 font-medium mb-2">Conceptual Foundations</p>
          <h2 className="text-xl font-bold text-slate-100 leading-snug sm:text-2xl mb-8">
            Theoretical frameworks underpinning the research
          </h2>
          <div className="grid gap-6 lg:grid-cols-2">
            {theoreticalFoundations.map((foundation) => (
              <div key={foundation.theory} className="rounded-2xl border border-slate-800/60 bg-slate-900/40 p-6 lg:p-8">
                <div className="flex items-start justify-between gap-3 mb-4">
                  <h3 className="text-base font-bold text-slate-100 sm:text-lg">{foundation.theory}</h3>
                  <span className="text-xs text-slate-500 bg-slate-800/50 px-2 py-0.5 rounded flex-shrink-0">{foundation.theorist}</span>
                </div>
                <p className="text-sm text-slate-400 leading-7">{foundation.application}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="px-6 pt-8 pb-10 sm:px-10 lg:px-12 lg:pt-10 lg:pb-12 border-t border-slate-800/50">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-start">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-cyan-300/90 font-medium">Methodology Overview</p>
              <h2 className="mt-4 text-xl font-bold text-slate-100 leading-snug sm:text-2xl">
                Multi-method qualitative and empirical design
              </h2>
              <p className="mt-5 text-sm text-slate-400 leading-7">
                The study employs a multi-method qualitative design, combining concurrent and retrospective think-aloud techniques with semi-structured interviews, structured focus groups and systematic tool interaction analysis. This combination enables triangulation across individual reasoning processes, social coordination dynamics and technological mediation patterns.
              </p>
              <p className="mt-4 text-sm text-slate-400 leading-7">
                The iterative, empirically driven design process allows the framework to evolve across successive cycles of data collection and analysis — reflecting the study&apos;s commitment to empirical refinement rather than purely deductive theory application.
              </p>
            </div>
            <div className="space-y-3">
              {methodComponents.map((item) => (
                <div key={item.method} className="rounded-xl border border-slate-800/60 bg-slate-900/40 p-5">
                  <h3 className="text-sm font-bold text-slate-100 mb-1">{item.method}</h3>
                  <p className="text-xs text-slate-400 leading-5">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Multilayer Framework */}
      <section className="px-6 pt-8 pb-10 sm:px-10 lg:px-12 lg:pt-10 lg:pb-12 border-t border-slate-800/50">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-start">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-cyan-300/90 font-medium">Framework Evolution</p>
              <h2 className="mt-4 text-xl font-bold text-slate-100 leading-snug sm:text-2xl">
                The multilayer collaborative debugging framework
              </h2>
              <div className="mt-5 space-y-4 text-sm text-slate-400 leading-7">
                <p>
                  The central empirical contribution of this research is a multilayer framework for understanding collaborative debugging in distributed learning environments. The framework integrates three analytically distinct but practically interrelated layers — cognitive, social and technological — each capturing a different dimension of the collaborative debugging system.
                </p>
                <p>
                  Unlike single-layer accounts that reduce collaborative debugging to individual cognition or social coordination alone, this framework treats the phenomenon as an emergent property of the interaction between cognitive processes, social dynamics and technological mediation.
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-800/60 bg-slate-900/40 p-8 flex flex-col items-center justify-center min-h-[260px]">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-400/20 mb-4">
                  <svg className="w-6 h-6 text-teal-400/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                  </svg>
                </div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500 font-medium mb-2">Figure 2</p>
                <p className="text-sm text-slate-400">Multilayer Conceptual Framework</p>
                <p className="text-xs text-slate-600 mt-2">Diagram integration pending figure files</p>
              </div>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            {frameworkLayers.map((layer, i) => (
              <div key={layer.label} className="rounded-2xl border border-slate-800/60 bg-slate-900/40 p-6 lg:p-8">
                <div className="grid gap-6 lg:grid-cols-[40px,1fr] lg:gap-8 lg:items-start">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-400/20 flex-shrink-0">
                    <span className="text-sm font-bold text-teal-400/80">{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-100 sm:text-lg mb-2">{layer.label}</h3>
                    <p className="text-sm text-slate-400 leading-7 mb-4">{layer.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {layer.themes.map((theme) => (
                        <span key={theme} className="text-xs text-slate-500 bg-slate-800/50 border border-slate-700/40 px-2 py-0.5 rounded-full">
                          {theme}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CSCW + Education Implications */}
      <section className="px-6 pt-8 pb-10 sm:px-10 lg:px-12 lg:pt-10 lg:pb-12 border-t border-slate-800/50">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-cyan-300/90 font-medium">CSCW Design Implications</p>
              <h2 className="mt-4 text-xl font-bold text-slate-100 leading-snug sm:text-2xl">
                Implications for collaborative systems design
              </h2>
              <div className="mt-5 space-y-3">
                {cscwImplications.map((implication) => (
                  <div key={implication} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal-400/70 flex-shrink-0" />
                    <p className="text-sm text-slate-400 leading-6">{implication}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-cyan-300/90 font-medium">Computing Education Implications</p>
              <h2 className="mt-4 text-xl font-bold text-slate-100 leading-snug sm:text-2xl">
                Implications for distributed computing education
              </h2>
              <div className="mt-5 space-y-3">
                {educationImplications.map((implication) => (
                  <div key={implication} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-400/70 flex-shrink-0" />
                    <p className="text-sm text-slate-400 leading-6">{implication}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Research Directions */}
      <section className="px-6 pt-8 pb-10 sm:px-10 lg:px-12 lg:pt-10 lg:pb-12 border-t border-slate-800/50">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.4em] text-cyan-300/90 font-medium mb-2">Future Research Directions</p>
          <h2 className="text-xl font-bold text-slate-100 leading-snug sm:text-2xl mb-6">
            Extending the research programme
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {futureDirections.map((direction) => (
              <div key={direction} className="rounded-xl border border-slate-800/60 bg-slate-900/40 p-5 flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-500 flex-shrink-0" />
                <p className="text-sm text-slate-400 leading-6">{direction}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Status + Tags */}
      <section className="px-6 pt-4 pb-16 sm:px-10 lg:px-12 lg:pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-2xl border border-teal-400/15 bg-teal-500/5 p-6 lg:p-8">
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-400 bg-teal-500/10 border border-teal-400/20 px-2.5 py-0.5 rounded-full">
                Active Research Programme
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-7 mb-5">
              This is an ongoing empirical and conceptual research programme. Data collection, analysis and framework refinement are currently under active development. The manuscript is not publicly available at this stage. For research enquiries, please use the professional enquiries page.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {["Distributed Cognition", "CSCW", "Collaborative Debugging", "Distributed Learning", "Computing Education", "Software Engineering", "Technology Mediated Collaboration", "Information Foraging Theory", "Remote Collaboration", "Cognitive Systems"].map((tag) => (
                <span key={tag} className="text-xs text-slate-500 bg-slate-800/50 border border-slate-700/40 px-2 py-0.5 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-slate-800/50">
            <Link
              href="/research"
              className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950 rounded"
            >
              <svg className="h-4 w-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              Back to Research
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
