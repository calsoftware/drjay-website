import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Link from "next/link";

export const metadata = {
  title: "A Temporal Theory of Microlearning",
  description: "Temporal Microlearning Theory (TMT) — a conceptual framework proposing that timing, sequencing and rhythmic distribution of microlearning episodes are the primary determinants of knowledge retention, transfer and professional capability development.",
  alternates: { canonical: "https://olajide.today/research/temporal-microlearning-theory" },
  openGraph: {
    title: "A Temporal Theory of Microlearning | Dr Olajide Jolugbo",
    description: "An advanced manuscript developing a conceptual framework for understanding how temporal architecture — timing, sequencing and rhythm — shapes microlearning effectiveness.",
    url: "https://olajide.today/research/temporal-microlearning-theory",
    type: "article",
  },
};

const constructs = [
  {
    label: "Temporal Learning Episodes",
    definition: "Precisely bounded microlearning interactions calibrated to cognitive load and working memory constraints.",
    detail: "TMT proposes that learning episodes must be bounded not only by content scope but by temporal precision — aligned to the learner's attentional window, cognitive load threshold and available working memory capacity at the moment of engagement.",
  },
  {
    label: "Cognitive Recovery Intervals",
    definition: "Structured inter-episode spaces enabling consolidation, integration and schema formation.",
    detail: "The intervals between learning episodes are not passive gaps but functionally active spaces where knowledge consolidates, connections form and schemas are constructed. TMT argues these intervals must be deliberately designed, not left as accidental pauses.",
  },
  {
    label: "Interruption Resilience",
    definition: "The learner's capacity to sustain coherent learning progress under environmental, attentional and technological disruption.",
    detail: "Modern workplace learners operate in interrupt-driven environments. TMT introduces interruption resilience as a design target — learning architectures should be structured to preserve coherence across the disruptions inherent to distributed, mobile and asynchronous contexts.",
  },
  {
    label: "Temporal Sequencing Logic",
    definition: "Principled ordering and spacing of episodes to maximise retention, transfer and long-term capability development.",
    detail: "Drawing on distributed practice and spacing effect research, TMT extends these principles into a designable logic — one that governs not just the spacing between episodes but the thematic, cognitive and narrative coherence of sequences across time.",
  },
  {
    label: "Learning Rhythm Alignment",
    definition: "Synchronisation of learning cadence with individual cognitive rhythms and organisational temporal norms.",
    detail: "Learning effectiveness is shaped by the alignment between learning delivery rhythms and learner cognitive rhythms. TMT proposes that learning systems must surface and respond to these rhythms rather than imposing uniform temporal structures on heterogeneous learner populations.",
  },
];

const theoreticalFoundations = [
  { label: "Cognitive Load Theory", note: "Extends CLT's attention to working memory constraints into temporal design" },
  { label: "Spaced Repetition Research", note: "Operationalises spacing effects as designable architectural logic" },
  { label: "Distributed Practice Literature", note: "Extends distributed practice principles into microlearning system design" },
  { label: "Attention and Interruption Research", note: "Integrates interruption science into a positive design construct" },
];

const implications = [
  {
    area: "Learning Design Practice",
    points: [
      "Temporal architecture as a first-order design decision",
      "Explicit interval design rather than accidental spacing",
      "Episode duration calibrated to cognitive load thresholds",
    ],
  },
  {
    area: "Workplace Learning Systems",
    points: [
      "Rhythm-aligned learning delivery for distributed workforces",
      "Interruption-resilient microlearning structures",
      "Temporal sequencing adapted to organisational learning norms",
    ],
  },
  {
    area: "Educational Technology",
    points: [
      "Platform design responsive to temporal learning patterns",
      "Analytics for temporal engagement monitoring",
      "Adaptive spacing algorithms informed by TMT constructs",
    ],
  },
];

export default function TemporalMicrolearningTheoryPage() {
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
                  Theoretical &amp; Conceptual Research
                </p>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-400 bg-violet-500/10 border border-violet-400/20 px-2.5 py-0.5 rounded-full">
                  Advanced Manuscript
                </span>
              </div>
              <h1 className="text-2xl font-bold tracking-normal text-slate-100 sm:text-3xl leading-snug">
                A Temporal Theory of Microlearning
              </h1>
              <p className="mt-3 text-slate-400 text-base sm:text-lg font-medium leading-relaxed">
                Time, Rhythm and the Architecture of Distributed Knowledge Acquisition
              </p>
              <p className="mt-5 text-xs text-cyan-300/80 font-medium italic">
                Jolugbo, O. (advanced manuscript in development). A Temporal Theory of Microlearning: Time, Rhythm and the Architecture of Distributed Knowledge Acquisition.
              </p>
            </div>
            <div className="text-base leading-7 text-slate-400 sm:leading-8 lg:pt-1">
              <p>
                Temporal Microlearning Theory (TMT) proposes that the timing, sequencing and rhythmic distribution of microlearning episodes — not merely their content or format — are the primary determinants of knowledge retention, transfer and professional capability development.
              </p>
              <p className="mt-4">
                By introducing temporal architecture as a first-order design construct, TMT bridges the gap between cognitive science insights about time and memory and the practical demands of workplace learning system design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Theoretical Argument */}
      <section className="px-6 pt-10 pb-8 sm:px-10 lg:px-12 lg:pt-12 lg:pb-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-start">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-cyan-300/90 font-medium">Theoretical Argument</p>
              <h2 className="mt-4 text-xl font-bold text-slate-100 leading-snug sm:text-2xl">
                Learning as a temporally distributed process
              </h2>
              <div className="mt-5 space-y-4 text-sm text-slate-400 leading-7 sm:text-base sm:leading-8">
                <p>
                  The dominant discourse in microlearning research has focused on content granularity, format optimisation and delivery platform capability. TMT argues that this focus has systematically underweighted the temporal dimension — the question of <em className="text-slate-300">when</em> and <em className="text-slate-300">how</em> learning episodes are distributed across time.
                </p>
                <p>
                  Synthesising established frameworks in cognitive load theory, distributed practice, spaced repetition and attention research, TMT proposes a unified theoretical architecture in which temporal structure is the primary design variable in effective microlearning system design.
                </p>
                <p>
                  The theory introduces five interrelated constructs that together constitute the temporal architecture of a microlearning system. These constructs are not independent features but dimensions of an integrated temporal design logic — one that governs how learning episodes are bounded, sequenced, spaced and aligned to learner and organisational rhythms.
                </p>
              </div>
            </div>
            <div>
              <div className="rounded-2xl border border-slate-800/60 bg-slate-900/40 p-8 flex flex-col items-center justify-center min-h-[280px]">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-400/20 mb-4">
                    <svg className="w-6 h-6 text-violet-400/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
                    </svg>
                  </div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500 font-medium mb-2">Figure 1</p>
                  <p className="text-sm text-slate-400">Temporal Architecture of Microlearning Systems</p>
                  <p className="text-xs text-slate-600 mt-2">Diagram pending manuscript completion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Five Constructs */}
      <section className="px-6 pt-8 pb-10 sm:px-10 lg:px-12 lg:pt-10 lg:pb-12 border-t border-slate-800/50">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.4em] text-cyan-300/90 font-medium mb-2">Five Foundational Constructs</p>
          <h2 className="text-xl font-bold text-slate-100 leading-snug sm:text-2xl mb-8">
            The temporal architecture of microlearning
          </h2>
          <div className="space-y-4">
            {constructs.map((construct, i) => (
              <div key={construct.label} className="rounded-2xl border border-slate-800/60 bg-slate-900/40 p-6 lg:p-8">
                <div className="grid gap-6 lg:grid-cols-[40px,1fr] lg:gap-8 lg:items-start">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-400/20 flex-shrink-0">
                    <span className="text-sm font-bold text-violet-400/80">{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-100 sm:text-lg">{construct.label}</h3>
                    <p className="mt-1 text-sm text-cyan-300/70 font-medium italic">{construct.definition}</p>
                    <p className="mt-3 text-sm text-slate-400 leading-7">{construct.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Theoretical Positioning */}
      <section className="px-6 pt-8 pb-10 sm:px-10 lg:px-12 lg:pt-10 lg:pb-12 border-t border-slate-800/50">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-cyan-300/90 font-medium">Theoretical Positioning</p>
              <h2 className="mt-4 text-xl font-bold text-slate-100 leading-snug sm:text-2xl">
                Building on established cognitive and learning science
              </h2>
              <div className="mt-5 space-y-4 text-sm text-slate-400 leading-7">
                <p>
                  TMT does not replace existing microlearning or cognitive theory. It synthesises and extends them — positioning temporal architecture as the missing connective layer between cognitive load theory, spaced practice research and learning design practice.
                </p>
                <p>
                  By introducing temporal architecture as a first-order design construct, TMT aims to provide practitioners and researchers with a framework that connects established cognitive science to actionable learning system design decisions.
                </p>
              </div>
              <div className="mt-6 space-y-3">
                {theoreticalFoundations.map((theory) => (
                  <div key={theory.label} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-400/70 flex-shrink-0" />
                    <div>
                      <span className="text-sm text-slate-300 font-medium">{theory.label}</span>
                      <span className="text-xs text-slate-500"> — {theory.note}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <div className="rounded-2xl border border-slate-800/60 bg-slate-900/40 p-8 flex flex-col items-center justify-center min-h-[220px]">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-400/20 mb-4">
                    <svg className="w-6 h-6 text-cyan-400/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                    </svg>
                  </div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500 font-medium mb-2">Figure 2</p>
                  <p className="text-sm text-slate-400">Mechanism of Temporal Learning</p>
                  <p className="text-xs text-slate-600 mt-2">Diagram pending manuscript completion</p>
                </div>
              </div>
              <div className="rounded-2xl border border-slate-800/60 bg-slate-900/40 p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500 font-medium mb-3">Research Themes</p>
                <div className="flex flex-wrap gap-1.5">
                  {["Microlearning", "Temporal Architecture", "Cognitive Load Theory", "Working Memory", "Learning Design", "Workplace Learning", "Technology Enhanced Learning", "Knowledge Retention", "Spaced Practice", "Distributed Learning"].map((theme) => (
                    <span key={theme} className="text-xs text-slate-500 bg-slate-800/50 border border-slate-700/40 px-2 py-0.5 rounded-full">
                      {theme}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Implications */}
      <section className="px-6 pt-8 pb-10 sm:px-10 lg:px-12 lg:pt-10 lg:pb-12 border-t border-slate-800/50">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.4em] text-cyan-300/90 font-medium mb-2">Research Implications</p>
          <h2 className="text-xl font-bold text-slate-100 leading-snug sm:text-2xl mb-8">
            Implications for learning system design and educational technology
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {implications.map((implication) => (
              <div key={implication.area} className="rounded-2xl border border-slate-800/60 bg-slate-900/40 p-6">
                <h3 className="text-sm font-bold text-slate-100 mb-4">{implication.area}</h3>
                <ul className="space-y-2">
                  {implication.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-400/70 flex-shrink-0" />
                      <span className="text-xs text-slate-400 leading-5">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manuscript Status */}
      <section className="px-6 pt-4 pb-16 sm:px-10 lg:px-12 lg:pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-2xl border border-violet-400/15 bg-violet-500/5 p-6 lg:p-8">
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-400 bg-violet-500/10 border border-violet-400/20 px-2.5 py-0.5 rounded-full">
                Advanced Manuscript in Development
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-7">
              This theoretical framework is currently in active development as an advanced manuscript. The conceptual architecture, core constructs and theoretical positioning are substantially developed. Empirical validation work and journal submission are anticipated following completion of the full manuscript.
            </p>
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
