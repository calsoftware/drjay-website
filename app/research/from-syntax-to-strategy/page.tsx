import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Link from "next/link";

export const metadata = {
  title: "From Syntax to Strategy",
  description: "An empirical investigation into the debugging behaviours of geographically distributed novice programming apprentices working collaboratively in Python environments.",
  alternates: { canonical: "https://olajide.today/research/from-syntax-to-strategy" },
  openGraph: {
    title: "From Syntax to Strategy | Dr Olajide Jolugbo",
    description: "Mapping the debugging errors and repair patterns of distributed novice apprentices in collaborative Python environments.",
    url: "https://olajide.today/research/from-syntax-to-strategy",
    type: "article",
  },
};

const errorTypes = [
  {
    type: "Syntax Errors",
    description: "Structural violations detected at parse time — missing colons, incorrect indentation, unmatched brackets and malformed expressions.",
    frequency: "High",
  },
  {
    type: "Logical Errors",
    description: "Programmes execute without exception but produce incorrect output — flawed algorithmic reasoning or incorrect conditional logic not surfaced by the interpreter.",
    frequency: "Moderate",
  },
  {
    type: "Runtime Errors",
    description: "Exceptions raised during execution — NameError, TypeError, IndexError patterns encountered under collaborative debugging conditions in distributed pair contexts.",
    frequency: "High",
  },
];

const repairStrategies = [
  {
    strategy: "Tinkering",
    description: "Iterative, exploratory modification of code without a systematic diagnostic plan — characteristic of novice debugging behaviour under time pressure and in the absence of structured repair frameworks.",
  },
  {
    strategy: "Print Statement Debugging",
    description: "Insertion of print statements to trace variable state and execution flow — widely used by distributed pairs in the absence of shared, synchronised debugging environments.",
  },
  {
    strategy: "IDE-Assisted Inspection",
    description: "Use of integrated development environment tools — error highlighting, variable inspection and stack trace reading — mediated through screen sharing and remote collaboration platforms.",
  },
  {
    strategy: "Divide and Conquer",
    description: "Systematic partitioning of code to isolate the fault location — observed in more experienced novices and emerging as a taught strategy within structured apprenticeship settings.",
  },
];

const methodComponents = [
  {
    method: "Screen Recording Analysis",
    description: "Systematic analysis of screen recordings capturing distributed pair debugging sessions — enabling reconstruction of error encounter and repair sequence timelines.",
    icon: "M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3",
  },
  {
    method: "Think-Aloud Protocols",
    description: "Concurrent and retrospective think-aloud data capturing apprentices' reasoning processes during debugging — surfacing diagnostic reasoning, hypothesis formation and strategy selection.",
    icon: "M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z",
  },
  {
    method: "Post-Session Interviews",
    description: "Structured post-session interviews eliciting participant reflections on debugging challenges, strategy choices and collaborative coordination dynamics within distributed pairs.",
    icon: "M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V20.25a.75.75 0 001.035.69l4.5-2.25z",
  },
];

const implications = [
  "Debugging skill development as an explicit curriculum target in apprenticeship computing programmes",
  "Structured introduction of systematic repair strategies beyond exploratory tinkering",
  "Tool environment design responsive to distributed pair debugging constraints",
  "Assessment frameworks capturing debugging process quality, not only debugging outcome",
  "Collaborative debugging scaffolds for geographically distributed apprentice pairs",
  "Mentor guidance models calibrated to novice debugging strategy development trajectories",
];

export default function FromSyntaxToStrategyPage() {
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
                  Empirical Computing Education Research
                </p>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 bg-slate-700/30 border border-slate-600/30 px-2.5 py-0.5 rounded-full">
                  Manuscript Under Development
                </span>
              </div>
              <h1 className="text-2xl font-bold tracking-normal text-slate-100 sm:text-3xl leading-snug">
                From Syntax to Strategy
              </h1>
              <p className="mt-3 text-slate-400 text-base font-medium leading-relaxed">
                Mapping the debugging errors and repair patterns of distributed novice apprentices in collaborative Python environments.
              </p>
              <p className="mt-5 text-xs text-cyan-300/80 font-medium italic">
                Jolugbo, O. (manuscript under development). From Syntax to Strategy: Mapping the Debugging Errors and Repair Patterns of Distributed Novice Apprentices in Collaborative Python Environments.
              </p>
            </div>
            <div className="text-base leading-7 text-slate-400 lg:pt-1">
              <p>
                An empirical investigation into how geographically distributed novice programming apprentices navigate collaborative debugging challenges in Python environments — mapping the error types encountered and the repair strategies deployed.
              </p>
              <p className="mt-4">
                Drawing on screen recordings, think-aloud protocols and post-session interviews, this study develops a taxonomy of debugging errors and collaborative repair practices grounded in the realities of apprenticeship-based software engineering education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Context + Methodology */}
      <section className="px-6 pt-10 pb-8 sm:px-10 lg:px-12 lg:pt-12 lg:pb-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-cyan-300/90 font-medium">Research Context</p>
              <h2 className="mt-4 text-xl font-bold text-slate-100 leading-snug sm:text-2xl">
                Distributed apprenticeship and collaborative debugging
              </h2>
              <div className="mt-5 space-y-4 text-sm text-slate-400 leading-7">
                <p>
                  Apprenticeship-based software engineering education has expanded rapidly in the United Kingdom, positioning workplace learning as a central mechanism for professional computing capability development. Within these programmes, novice programmers navigate the full complexity of production environments while simultaneously developing foundational programming skills.
                </p>
                <p>
                  Debugging — the process of identifying, locating and correcting errors in code — represents one of the most cognitively demanding aspects of this learning experience. For distributed apprentices working collaboratively across geographical boundaries, debugging introduces compounded challenges: tool mediation, communication latency, shared attention management and the absence of co-present pair programming affordances.
                </p>
                <p>
                  This research investigates how novice apprentices navigate these compound debugging challenges and what repair strategy repertoires they develop in response.
                </p>
              </div>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-cyan-300/90 font-medium">Methodology Overview</p>
              <h2 className="mt-4 text-xl font-bold text-slate-100 leading-snug sm:text-2xl">
                Multi-method empirical design
              </h2>
              <div className="mt-5 space-y-3">
                {methodComponents.map((item) => (
                  <div key={item.method} className="rounded-xl border border-slate-800/60 bg-slate-900/40 p-5">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center">
                        <svg className="w-4 h-4 text-cyan-400/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-slate-100 mb-1">{item.method}</h3>
                        <p className="text-xs text-slate-400 leading-5">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Empirical Contribution: Taxonomy */}
      <section className="px-6 pt-8 pb-10 sm:px-10 lg:px-12 lg:pt-10 lg:pb-12 border-t border-slate-800/50">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.4em] text-cyan-300/90 font-medium mb-2">Empirical Contribution</p>
          <h2 className="text-xl font-bold text-slate-100 leading-snug sm:text-2xl mb-8">
            A taxonomy of debugging errors and collaborative repair strategies
          </h2>
          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500 font-medium mb-4 pb-2 border-b border-slate-800/50">
                Error Classification
              </p>
              <div className="space-y-4">
                {errorTypes.map((error) => (
                  <div key={error.type} className="rounded-xl border border-slate-800/60 bg-slate-900/40 p-5">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="text-sm font-bold text-slate-100">{error.type}</h3>
                      <span className={`text-xs font-medium uppercase tracking-[0.15em] px-2 py-0.5 rounded-full flex-shrink-0 ${
                        error.frequency === "High"
                          ? "text-amber-400 bg-amber-500/10 border border-amber-400/20"
                          : "text-slate-400 bg-slate-700/30 border border-slate-600/30"
                      }`}>
                        {error.frequency} freq.
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 leading-5">{error.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500 font-medium mb-4 pb-2 border-b border-slate-800/50">
                Repair Strategy Repertoire
              </p>
              <div className="space-y-4">
                {repairStrategies.map((repair) => (
                  <div key={repair.strategy} className="rounded-xl border border-slate-800/60 bg-slate-900/40 p-5">
                    <h3 className="text-sm font-bold text-slate-100 mb-2">{repair.strategy}</h3>
                    <p className="text-xs text-slate-400 leading-5">{repair.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Apprenticeship Context + Implications */}
      <section className="px-6 pt-8 pb-10 sm:px-10 lg:px-12 lg:pt-10 lg:pb-12 border-t border-slate-800/50">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-cyan-300/90 font-medium">Apprenticeship Learning Context</p>
              <h2 className="mt-4 text-xl font-bold text-slate-100 leading-snug sm:text-2xl">
                Software engineering education through work-based learning
              </h2>
              <div className="mt-5 space-y-4 text-sm text-slate-400 leading-7">
                <p>
                  The apprenticeship context introduces distinctive learning dynamics not replicated in campus-based programming education. Apprentices encounter authentic production codebases, real stakeholder pressures and the cognitive weight of simultaneous professional and educational responsibility.
                </p>
                <p>
                  Debugging in this environment is not a decontextualised academic exercise but a professionally consequential activity — observed, evaluated and connected to real organisational outcomes.
                </p>
                <p>
                  This study attends to these distinctive contextual pressures and analyses how they shape the debugging behaviours, strategy preferences and collaborative dynamics of distributed novice apprentices.
                </p>
              </div>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-cyan-300/90 font-medium">Implications for Computing Education</p>
              <h2 className="mt-4 text-xl font-bold text-slate-100 leading-snug sm:text-2xl">
                Design principles for apprenticeship programming education
              </h2>
              <div className="mt-5 space-y-3">
                {implications.map((implication) => (
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

      {/* Status + Tags */}
      <section className="px-6 pt-4 pb-16 sm:px-10 lg:px-12 lg:pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-2xl border border-slate-800/60 bg-slate-900/40 p-6 lg:p-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 bg-slate-700/30 border border-slate-600/30 px-2.5 py-0.5 rounded-full">
                Manuscript Under Development
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-7 mb-5">
              This empirical study is currently under active development. Fieldwork, data collection and analysis are ongoing. The manuscript is not publicly available at this stage. For research enquiries, please use the professional enquiries page.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {["Software Engineering Education", "Collaborative Debugging", "Distributed Learning", "Apprenticeship Research", "Python Programming", "Computing Education", "Distributed Cognition", "Remote Collaboration"].map((tag) => (
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
