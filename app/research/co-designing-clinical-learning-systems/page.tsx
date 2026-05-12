import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Co-Designing Clinical Learning Systems for Nursing Education",
  description: "A design-based research study on mediating artefacts, dialogic learning, and nursing process education — investigating the co-design of technology-enhanced clinical learning environments.",
  alternates: { canonical: "https://olajide.today/research/co-designing-clinical-learning-systems" },
  openGraph: {
    title: "Co-Designing Clinical Learning Systems for Nursing Education | Dr Olajide Jolugbo",
    description: "A design-based research study examining how mediating artefacts, co-design processes and dialogic learning principles can scaffold clinical reasoning in nursing education.",
    url: "https://olajide.today/research/co-designing-clinical-learning-systems",
    type: "article",
  },
};

const theoreticalFrameworks = [
  {
    name: "Activity Theory",
    reference: "Engeström, 1987",
    description: "Provides a lens for understanding how mediating artefacts and tools mediate human activity within learning systems. Engeström's expansive learning framework positions artefacts as boundary objects through which learners internalise and externalise clinical knowledge.",
    themes: ["Mediating Artefacts", "Expansive Learning", "Tool-Mediated Activity", "Object-Oriented Action"],
  },
  {
    name: "Dialogic Learning Theory",
    reference: "Bakhtin; Wegerif, 2007",
    description: "Draws on Bakhtin's dialogic principles as operationalised in educational contexts. Dialogic learning theory examines how understanding emerges through interaction between learners, artefacts and educators — not through transmission alone.",
    themes: ["Dialogic Interaction", "Shared Meaning-Making", "Responsive Pedagogy", "Multi-Voice Learning"],
  },
  {
    name: "Co-Design and Participatory Design",
    reference: "Sanders & Stappers, 2008",
    description: "Positions end users as active co-designers rather than passive stakeholders. Co-design methodology reconceptualises the design process as a collaborative, participatory practice in which those who will use the artefacts shape their form and function.",
    themes: ["Participatory Design", "User-Centred Systems", "Collaborative Sensemaking", "Iterative Refinement"],
  },
];

const workshops = [
  {
    number: "01",
    title: "Mapping the Clinical Learning Experience",
    description: "Participants created visual maps of their clinical learning journeys, identifying key challenges, moments of confusion, breakthrough experiences and the conditions under which meaningful clinical learning occurred.",
    participants: "Nursing students, preceptors, faculty",
    methods: "Visual sensemaking, experience mapping, narrative elicitation",
  },
  {
    number: "02",
    title: "Identifying Design Opportunities",
    description: "Drawing on the experience maps from Workshop 1, participants identified specific moments and contexts in clinical learning where mediating artefacts could scaffold understanding, support mentoring conversations and strengthen reflective practice.",
    participants: "Nursing students, preceptors, faculty",
    methods: "Structured dialogue, opportunity mapping, priority ranking",
  },
  {
    number: "03",
    title: "Prototyping Mediating Artefacts",
    description: "Collaborative design of initial artefact prototypes using low-fidelity techniques including sketch-based representations, card sorts and scenario walkthroughs. Each prototype was evaluated against the dialogic learning principles identified in the theoretical framework.",
    participants: "Cross-stakeholder design teams",
    methods: "Participatory prototyping, sketching, scenario testing",
  },
  {
    number: "04",
    title: "Refinement and Clinical Deployment",
    description: "Iterative refinement of artefacts based on feedback from initial clinical deployment and structured participant reflections. Refinements were guided by the design-based research iteration cycle — moving between design, implementation, analysis and redesign.",
    participants: "Nursing students, preceptors",
    methods: "Field testing, reflective interviews, iterative redesign",
  },
];

const artefacts = [
  {
    title: "Clinical Reasoning Dialogue Maps",
    description: "Visual representations of nursing care planning decision processes designed to support dialogic interaction between students and preceptors — externalising the reasoning structures embedded in clinical judgement.",
    function: "Scaffold clinical reasoning through shared visual representations",
  },
  {
    title: "Structured Reflective Learning Journals",
    description: "Reflective learning journals incorporating structured scaffolding prompts aligned to clinical reasoning stages — enabling students to internalise and articulate their developing clinical knowledge.",
    function: "Support metacognitive reflection on clinical practice",
  },
  {
    title: "Collaborative Care Planning Templates",
    description: "Co-designed templates for nursing care planning that externalise and share clinical reasoning processes — designed to make implicit clinical knowledge visible and discussable during mentoring interactions.",
    function: "Mediate mentoring conversations through shared artefacts",
  },
  {
    title: "Technology-Enhanced Learning Environment Specifications",
    description: "Design specifications for digital learning environments that incorporate the dialogic principles identified through the co-design process — providing a blueprint for technology-enhanced implementation.",
    function: "Enable digital transformation of co-designed learning systems",
  },
];

const findings = [
  "Co-design processes produced artefacts that were more contextually embedded and practically useful than those designed by faculty or researchers alone",
  "Dialogic learning frameworks proved generative — participants developed shared language for discussing clinical learning challenges and opportunities",
  "Mediating artefacts produced through co-design scaffolded clinical reasoning more effectively than existing tools in early deployment testing",
  "Clinical preceptors reported that co-designed artefacts supported more structured and productive mentoring conversations with students",
  "Students experienced greater agency and ownership over their clinical learning when artefacts reflected their own mapped experiences",
  "Faculty identified curriculum alignment opportunities through the co-design process that were not visible through conventional curriculum review",
];

const limitations = [
  "The study was conducted within a single nursing education programme, which limits the generalisability of findings to other programmes and clinical contexts",
  "The participatory co-design methodology, while generating rich contextually embedded knowledge, introduces challenges of researcher positioning and potential bias",
  "The artefacts produced represent one iteration of a design-based research cycle and require further testing, refinement and evaluation across diverse clinical contexts",
  "Longer-term evaluation of artefact effectiveness across the full duration of nursing training programmes was beyond the current study scope",
];

const futureDirections = [
  "Extension of the co-design process to diverse clinical contexts, nursing specialisms and health professions programmes",
  "Longitudinal evaluation of artefact effectiveness and durability across full training programme duration",
  "Digital transformation of co-designed artefacts for technology-enhanced clinical learning environments",
  "Cross-programme comparative studies examining transferability of the co-design methodology to other health and social care education settings",
  "Development of a generalisable design framework for participatory clinical learning system design across health professions education",
  "Integration of dialogic learning analytics to evaluate the quality of clinical mentoring conversations mediated by the artefacts",
];

export default function CoDesigningClinicalLearningPage() {
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
                  Educational Design Research
                </p>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 bg-slate-700/30 border border-slate-600/30 px-2.5 py-0.5 rounded-full">
                  Manuscript Under Continued Development
                </span>
              </div>
              <h1 className="text-2xl font-bold tracking-normal text-slate-100 sm:text-3xl leading-snug">
                Co-Designing Clinical Learning Systems for Nursing Education
              </h1>
              <p className="mt-3 text-slate-400 text-base font-medium leading-relaxed">
                A design-based research study on mediating artefacts, dialogic learning, and nursing process education.
              </p>
              <p className="mt-5 text-xs text-cyan-300/80 font-medium italic">
                Jolugbo, O. (research manuscript under continued development). Co-Designing Clinical Learning Systems for Nursing Education: A Design-Based Research Study on Mediating Artefacts, Dialogic Learning, and Nursing Process Education.
              </p>
            </div>
            <div className="text-base leading-7 text-slate-400 lg:pt-1">
              <p>
                A design-based research study investigating the co-design of mediating artefacts intended to support nursing students&apos; clinical learning during nursing care planning practice. Drawing on co-design methodologies and dialogic learning principles, the research examines how nursing students, clinical preceptors and faculty members collaboratively designed technology-enhanced learning environments.
              </p>
              <p className="mt-4">
                The study is positioned as a contribution to educational design research, co-design scholarship and technology-enhanced learning — not as nursing education content alone. Its intellectual contribution lies in the role of mediating artefacts, participatory design and dialogic learning architectures in scaffolding complex professional learning systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Abstract */}
      <section className="px-6 pt-10 pb-8 sm:px-10 lg:px-12 lg:pt-12 lg:pb-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-start">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-cyan-300/90 font-medium">Abstract</p>
              <h2 className="mt-4 text-xl font-bold text-slate-100 leading-snug sm:text-2xl">
                Participatory design of clinical learning infrastructure
              </h2>
              <div className="mt-5 space-y-4 text-sm text-slate-400 leading-7 sm:text-base sm:leading-8">
                <p>
                  This design-based research (DBR) study investigates the co-design of mediating artefacts to support nursing students&apos; clinical learning during nursing care planning practice. Framed within a participatory design paradigm, the research repositions clinical learning system design as a collaborative, stakeholder-driven process rather than an expert-led curriculum intervention.
                </p>
                <p>
                  Drawing on Activity Theory, Dialogic Learning Theory and co-design methodology, the study examines how nursing students, clinical preceptors and faculty members collaboratively designed and refined technology-enhanced learning environments and artefacts across a series of structured design workshops. The research explores how the co-design process itself — not only its outputs — generates new understanding of clinical learning challenges and opportunities.
                </p>
              </div>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-cyan-300/90 font-medium">Research Context</p>
              <h2 className="mt-4 text-xl font-bold text-slate-100 leading-snug sm:text-2xl">
                Clinical learning as a collaborative design problem
              </h2>
              <div className="mt-5 space-y-4 text-sm text-slate-400 leading-7">
                <p>
                  Nursing education requires students to develop sophisticated clinical reasoning and decision-making capabilities across theory, procedure and interpersonal practice. Clinical learning — particularly during nursing care planning — is a complex, situated process that demands integration of multiple knowledge forms under the conditions of real patient care.
                </p>
                <p>
                  Traditional approaches have often positioned students as recipients of expert clinical knowledge transmitted through observation and demonstration. This study reframes clinical learning design as a participatory problem — one requiring the active involvement of students, preceptors and faculty in creating learning environments that genuinely reflect the complexity of nursing practice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Theoretical Framework */}
      <section className="px-6 pt-8 pb-10 sm:px-10 lg:px-12 lg:pt-10 lg:pb-12 border-t border-slate-800/50">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.4em] text-cyan-300/90 font-medium mb-2">Theoretical Framework</p>
          <h2 className="text-xl font-bold text-slate-100 leading-snug sm:text-2xl mb-8">
            Three intersecting theoretical traditions
          </h2>

          {/* Framework diagram placeholder */}
          <div className="mb-8 rounded-2xl border border-slate-800/60 bg-slate-900/40 p-8 flex flex-col items-center justify-center min-h-[200px]">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-400/20 mb-4">
                <svg className="w-6 h-6 text-cyan-400/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                </svg>
              </div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500 font-medium mb-2">Framework Diagram</p>
              <p className="text-sm text-slate-400">Integrated Theoretical Framework</p>
              <p className="text-xs text-slate-600 mt-2">Diagram integration pending figure files</p>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {theoreticalFrameworks.map((framework) => (
              <div key={framework.name} className="rounded-2xl border border-slate-800/60 bg-slate-900/40 p-6">
                <div className="flex items-start justify-between gap-3 mb-4">
                  <h3 className="text-base font-bold text-slate-100">{framework.name}</h3>
                  <span className="text-xs text-slate-500 bg-slate-800/50 px-2 py-0.5 rounded flex-shrink-0">{framework.reference}</span>
                </div>
                <p className="text-sm text-slate-400 leading-6 mb-4">{framework.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {framework.themes.map((theme) => (
                    <span key={theme} className="text-xs text-slate-500 bg-slate-800/50 border border-slate-700/40 px-2 py-0.5 rounded-full">
                      {theme}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DBR Methodology */}
      <section className="px-6 pt-8 pb-10 sm:px-10 lg:px-12 lg:pt-10 lg:pb-12 border-t border-slate-800/50">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-start">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-cyan-300/90 font-medium">Design-Based Research Methodology</p>
              <h2 className="mt-4 text-xl font-bold text-slate-100 leading-snug sm:text-2xl">
                Iterative, interventionist research design
              </h2>
              <div className="mt-5 space-y-4 text-sm text-slate-400 leading-7">
                <p>
                  Design-Based Research (DBR) provides the methodological architecture for this study. DBR is an interventionist approach that combines rigorous empirical research with pragmatic design — generating both theoretical knowledge and practical artefacts through iterative cycles of design, implementation, analysis and refinement.
                </p>
                <p>
                  Unlike conventional educational research methodologies that study existing practices, DBR actively introduces and studies designed interventions within their real educational contexts. This makes it particularly well-suited to investigating how mediating artefacts can be designed to reshape complex professional learning environments.
                </p>
                <p>
                  The study implements DBR through a four-workshop co-design cycle involving multiple stakeholder groups — moving iteratively between collaborative design sessions and structured analysis of both process and artefact quality.
                </p>
              </div>
              <div className="mt-6 rounded-xl border border-slate-800/60 bg-slate-900/40 p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500 font-medium mb-3">DBR Iteration Cycle</p>
                <div className="flex items-center gap-2 flex-wrap">
                  {["Design", "Implementation", "Analysis", "Refinement"].map((phase, i, arr) => (
                    <div key={phase} className="flex items-center gap-2">
                      <span className="text-xs font-medium text-cyan-300/80 bg-cyan-500/10 border border-cyan-400/20 px-3 py-1 rounded-full">
                        {phase}
                      </span>
                      {i < arr.length - 1 && (
                        <svg className="h-3 w-3 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-cyan-300/90 font-medium">Co-Design Process</p>
              <h2 className="mt-4 text-xl font-bold text-slate-100 leading-snug sm:text-2xl">
                Stakeholder-driven participatory design
              </h2>
              <div className="mt-5 space-y-4 text-sm text-slate-400 leading-7">
                <p>
                  The co-design process engaged three distinct stakeholder groups, each contributing different knowledge forms to the design process.
                </p>
              </div>
              <div className="mt-5 space-y-3">
                {[
                  { group: "Nursing Students", contribution: "Experiential knowledge of navigating clinical learning — what it feels like, where confusion arises and what conditions enable breakthroughs" },
                  { group: "Clinical Preceptors", contribution: "Practitioner knowledge of effective clinical support — what distinguishes productive from unproductive mentoring interactions in practice" },
                  { group: "Faculty Members", contribution: "Curriculum and pedagogical knowledge — understanding how artefacts can align with programme outcomes and learning progression frameworks" },
                ].map((stakeholder) => (
                  <div key={stakeholder.group} className="rounded-xl border border-slate-800/60 bg-slate-900/40 p-5">
                    <h3 className="text-sm font-bold text-slate-100 mb-1">{stakeholder.group}</h3>
                    <p className="text-xs text-slate-400 leading-5">{stakeholder.contribution}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Structure */}
      <section className="px-6 pt-8 pb-10 sm:px-10 lg:px-12 lg:pt-10 lg:pb-12 border-t border-slate-800/50">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.4em] text-cyan-300/90 font-medium mb-2">Workshop Structure</p>
          <h2 className="text-xl font-bold text-slate-100 leading-snug sm:text-2xl mb-8">
            Four-workshop co-design cycle
          </h2>

          {/* Workshop process diagram placeholder */}
          <div className="mb-8 rounded-2xl border border-slate-800/60 bg-slate-900/40 p-8 flex flex-col items-center justify-center min-h-[180px]">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-400/20 mb-4">
                <svg className="w-6 h-6 text-cyan-400/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500 font-medium mb-2">Workshop Process</p>
              <p className="text-sm text-slate-400">Co-Design Workshop Architecture</p>
              <p className="text-xs text-slate-600 mt-2">Diagram integration pending figure files</p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {workshops.map((workshop) => (
              <div key={workshop.number} className="rounded-2xl border border-slate-800/60 bg-slate-900/40 p-6">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-400/20 flex-shrink-0">
                    <span className="text-xs font-bold text-cyan-400/80">{workshop.number}</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-100 sm:text-base">{workshop.title}</h3>
                    <p className="mt-2 text-xs text-slate-400 leading-5">{workshop.description}</p>
                    <div className="mt-3 space-y-1">
                      <p className="text-xs text-slate-500"><span className="text-slate-400 font-medium">Participants:</span> {workshop.participants}</p>
                      <p className="text-xs text-slate-500"><span className="text-slate-400 font-medium">Methods:</span> {workshop.methods}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mediating Artefacts */}
      <section className="px-6 pt-8 pb-10 sm:px-10 lg:px-12 lg:pt-10 lg:pb-12 border-t border-slate-800/50">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.4em] text-cyan-300/90 font-medium mb-2">Mediating Artefacts</p>
          <h2 className="text-xl font-bold text-slate-100 leading-snug sm:text-2xl mb-8">
            Co-designed artefacts for clinical learning
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {artefacts.map((artefact, i) => (
              <div key={artefact.title} className="rounded-2xl border border-slate-800/60 bg-slate-900/40 p-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-400/20 flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-cyan-400/70">{i + 1}</span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-100 sm:text-base">{artefact.title}</h3>
                </div>
                <p className="text-sm text-slate-400 leading-6 mb-3">{artefact.description}</p>
                <p className="text-xs text-slate-500 italic pl-3 border-l border-slate-700/40">{artefact.function}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Findings and Implications */}
      <section className="px-6 pt-8 pb-10 sm:px-10 lg:px-12 lg:pt-10 lg:pb-12 border-t border-slate-800/50">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-cyan-300/90 font-medium">Findings and Implications</p>
              <h2 className="mt-4 text-xl font-bold text-slate-100 leading-snug sm:text-2xl">
                What co-design produced
              </h2>
              <div className="mt-5 space-y-3">
                {findings.map((finding) => (
                  <div key={finding} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-400/70 flex-shrink-0" />
                    <p className="text-sm text-slate-400 leading-6">{finding}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-cyan-300/90 font-medium">Limitations</p>
              <h2 className="mt-4 text-xl font-bold text-slate-100 leading-snug sm:text-2xl">
                Scope and design constraints
              </h2>
              <div className="mt-5 space-y-3">
                {limitations.map((limitation) => (
                  <div key={limitation} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-500/60 flex-shrink-0" />
                    <p className="text-sm text-slate-400 leading-6">{limitation}</p>
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
          <div className="rounded-2xl border border-slate-800/60 bg-slate-900/40 p-6 lg:p-8">
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 bg-slate-700/30 border border-slate-600/30 px-2.5 py-0.5 rounded-full">
                Research Manuscript Under Continued Development
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-7 mb-5">
              This is an ongoing design-based research study on clinical learning systems. The manuscript is under continued development and is not publicly available at this stage. The page will be updated to include publication details, manuscript access and supplementary materials as the work progresses. For research enquiries, please use the professional enquiries page.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {["Design-Based Research", "Co-Design Methodology", "Mediating Artefacts", "Dialogic Learning", "Technology Enhanced Learning", "Clinical Learning Systems", "Nursing Education", "Educational Innovation", "Participatory Design", "Activity Theory"].map((tag) => (
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
