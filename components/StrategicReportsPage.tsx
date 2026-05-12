"use client";

import { useState } from "react";

const classifications = [
  {
    title: "Digital Transformation & Organisational Change",
    overview:
      "A discreet archive of transformation initiatives, operating model evolution and capability system design across complex systems. Each snapshot isolates practical change architecture without exposing enterprise identity.",
    reports: [
      {
        title: "Transformation Readiness Pathway",
        sector: "Technology & Innovation",
        focus:
          "A distilled review of system readiness, capability gaps and operating model implications for strategic digital adoption.",
        synopsis:
          "A confidential executive snapshot of transformation readiness across a constrained technology landscape. The analysis surfaces systemic capability gaps, alignment risk and the operational design principles needed to anchor change. It focuses on how delivery systems, decision rights and resource architecture must cohere for durable transformation.",
        themes: ["Capability transformation", "Operating model", "Change governance", "Readiness architecture"],
        status: "Executive Brief",
        detail:
          "The snapshot highlights a conservative change trajectory, emphasising phased capability uplift, resilience in system dependencies and the need for governance clarity before scaling execution.",
        insights: [
          "Executive alignment tested against system capability maturity.",
          "Transformation sequencing designed to protect operational continuity.",
          "Critical dependencies mapped across business, technology and people systems.",
        ],
      },
      {
        title: "Operating Model Reset",
        sector: "Public Sector",
        focus:
          "An anonymised systems assessment of organisational structure, decision flow and capability enablement in a public-sector redesign programme.",
        synopsis:
          "This snapshot presents an executive-level view of operating model realignment and capability architecture. It emphasises strategic decision zones, accountability pathways and systems integration points that shape large-scale organisational change. The analysis remains deliberately high level, without operational detail.",
        themes: ["Organisational design", "Systems integration", "Capability enablement", "Change architecture"],
        status: "Strategic Snapshot",
        detail:
          "The review outlines the importance of a discrete operating model blueprint, with clear hand-offs between policy, delivery and support layers to manage transformation risk.",
        insights: [
          "Strategic control points identified in the new operating model.",
          "Capability clusters positioned for cross-functional performance.",
          "Transformation momentum balanced with governance discipline.",
        ],
      },
      {
        title: "Systems Integration Benchmark",
        sector: "Digital Transformation",
        focus:
          "A concise systems evaluation of integration readiness, interoperability constraints and infrastructure alignment in a distributed environment.",
        synopsis:
          "This executive summary examines integration touchpoints and capability readiness in a distributed digital ecosystem. It focuses on the architecture of data flows, workflow orchestration and the underlying governance required to sustain integrated transformation. Confidentiality is maintained through anonymised sector framing.",
        themes: ["Interoperability", "Infrastructure alignment", "Data governance", "Systems resilience"],
        status: "Internal Analysis",
        detail:
          "The benchmark surfaces structural gaps between business processes and technical interoperability, advising on a controlled integration roadmap with discrete evaluation milestones.",
        insights: [
          "Integration risk scoped across legacy and emerging systems.",
          "Governance protocols recommended for cross-domain interoperability.",
          "Capability readiness measured against delivery velocity.",
        ],
      },
    ],
  },
  {
    title: "AI Integration, Governance & Capability Readiness",
    overview:
      "A strategic archive of AI readiness, governance calibration and capability preparedness across systems and leadership domains. Focus remains on intelligence architecture, not implementation provenance.",
    reports: [
      {
        title: "AI Readiness Diagnostic",
        sector: "Workforce Development",
        focus:
          "An anonymised readiness framework for organisational capability, workforce preparedness and responsible AI deployment.",
        synopsis:
          "This snapshot explores how AI adoption is anchored in workforce capability and governance design. It focuses on readiness indicators, capability gaps and the strategic control environment needed to steward AI responsibly. The review avoids operational specifics and instead describes systemic preparedness.",
        themes: ["AI readiness", "Capability systems", "Responsible deployment", "Workforce preparedness"],
        status: "Transformation Review",
        detail:
          "The analysis identifies capability clusters that need strengthening before AI expansion, prioritising governance, training pathways and ethical decision frameworks.",
        insights: [
          "Capability readiness assessed through people, process and data lenses.",
          "Governance boundaries defined for emerging AI functions.",
          "Workforce enablement framed as a strategic lever, not a technical task.",
        ],
      },
      {
        title: "Governance Alignment Insight",
        sector: "Organisational Capability",
        focus:
          "A discreet systems review of governance design, oversight structures and AI-aligned capability operating models.",
        synopsis:
          "This executive summary captures the governance configurations required to enable AI adoption without compromising systemic stability. It highlights alignment between control frameworks, capability portfolios and transformation objectives. The focus is on strategic coherence rather than implementation detail.",
        themes: ["AI governance", "Control architecture", "Capability alignment", "Risk oversight"],
        status: "Executive Brief",
        detail:
          "The insight emphasises a layered governance approach, where policy, ethics and operational readiness are calibrated across business-critical domains.",
        insights: [
          "Governance layers mapped to capability maturity stages.",
          "Oversight defined for emerging and sustained AI activity.",
          "Strategic alignment maintained between AI adoption and organisational purpose.",
        ],
      },
      {
        title: "Capability Readiness Audit",
        sector: "Technology & Innovation",
        focus:
          "An anonymised capability audit for AI initiative readiness, capability gap management and systems-level risk calibration.",
        synopsis:
          "This snapshot chronicles readiness across capability domains, exposing the main capability shortfalls that could slow AI adoption. The review stays at a systems level, identifying how governance, workforce and technology ecosystems must align to advance responsibly.",
        themes: ["Capability audit", "AI adoption", "Risk calibration", "Readiness maturity"],
        status: "Strategic Snapshot",
        detail:
          "It articulates the need for a deliberate capability uplift programme with emphasis on governance discipline and enterprise-wide readiness markers.",
        insights: [
          "Capability gaps surfaced with minimal operational detail.",
          "Readiness markers positioned for executive oversight.",
          "Risk calibration tied to capability development priorities.",
        ],
      },
    ],
  },
  {
    title: "Learning, Workforce & Capability Ecosystems",
    overview:
      "A curated space for analysing workforce learning systems, capability networks and ecosystem design with a systems lens. The focus is on strategic architecture rather than education branding.",
    reports: [
      {
        title: "Workforce Learning Architecture",
        sector: "Workforce Development",
        focus:
          "A concise systems review of workforce learning pathways, capability alignment and adaptive learning infrastructure.",
        synopsis:
          "This snapshot examines how workforce learning systems are architected to build strategic capability. It highlights the interplay between learning pathways, organisational capability and ecosystem engagement. The review is intentionally abstract, emphasising system design over provider detail.",
        themes: ["Learning pathways", "Capability architecture", "Ecosystem design", "Adaptive learning"],
        status: "Internal Analysis",
        detail:
          "The architecture summary underscores the need for modular learning resources, capability clustering and sustained ecosystem collaboration.",
        insights: [
          "Learning infrastructure viewed as a capability asset.",
          "Ecosystem relationships framed around shared capability goals.",
          "Adaptive pathways positioned to support evolving workforce needs.",
        ],
      },
      {
        title: "Capability Ecosystem Strategy",
        sector: "Professional Learning",
        focus:
          "An executive snapshot of strategic capability ecosystems, collaborative pathways and workforce role development.",
        synopsis:
          "This summary presents an executive view of how capability ecosystems can be structured for strategic impact. It focuses on collaborative nodes, capability signal flows and workforce support mechanisms. Confidentiality is preserved through sector-based language.",
        themes: ["Ecosystem strategy", "Collaborative learning", "Capability signalling", "Role development"],
        status: "Strategic Snapshot",
        detail:
          "The report emphasises ecosystem coherence and the need for shared capability metrics across learning, workforce and delivery partners.",
        insights: [
          "Collaboration points mapped to capability outcomes.",
          "Strategic value located in shared learning pathways.",
          "Workforce roles aligned with capability ecosystem demands.",
        ],
      },
      {
        title: "Apprenticeship Systems Evaluation",
        sector: "Higher Education",
        focus:
          "A systems-oriented review of apprenticeship capability, ecosystem fit and workforce preparation pathways.",
        synopsis:
          "This snapshot assesses apprenticeship systems through the lens of capability transfer and systemic readiness. It highlights how ecosystem constraints and learning pathways influence workforce outcomes. The analysis remains sealed from any institutional identification.",
        themes: ["Apprenticeship systems", "Capability transfer", "Ecosystem fit", "Workforce preparation"],
        status: "Executive Brief",
        detail:
          "The evaluation notes the importance of supply chain alignment, role-based capability mapping and sustained ecosystem governance.",
        insights: [
          "Apprenticeship readiness framed as a system capability issue.",
          "Pathway continuity supported by ecosystem governance.",
          "Workforce outcomes linked to capability integration.",
        ],
      },
    ],
  },
  {
    title: "Assessment, Feedback & Learning Systems",
    overview:
      "A discreet suite of analytical snapshots on assessment architecture, feedback infrastructures and evaluative system design. The page keeps attention on transformation inference, not scorecards.",
    reports: [
      {
        title: "Assessment System Renewal",
        sector: "Public Sector",
        focus:
          "A strategic assessment of system design, feedback loops and operational evaluation in a learning ecosystem.",
        synopsis:
          "This snapshot captures the architecture of assessment systems and the strategic intent behind diagnostic structures. It identifies where evaluation mechanisms align or diverge from capability development goals. The review abstracts away from programme specifics and focuses on system-level coherence.",
        themes: ["Assessment architecture", "Feedback loops", "Evaluative design", "Capability alignment"],
        status: "Transformation Review",
        detail:
          "The summary highlights the need for calibrated feedback loops, actionable evaluation signals and governance that supports continuous learning.",
        insights: [
          "Assessment structures reviewed for strategic alignment.",
          "Feedback pathways defined to support capability improvement.",
          "Evaluation design linked to systemic learning outcomes.",
        ],
      },
      {
        title: "Feedback Infrastructure Scan",
        sector: "Healthcare",
        focus:
          "A concise systems review of feedback infrastructure, information flows and decision support across a capability network.",
        synopsis:
          "This snapshot examines feedback mechanisms as part of an adaptive learning system. It highlights how information flows enable strategic adjustment and where infrastructure gaps may blunt responsiveness. The analysis is intentionally anonymised and strategic.",
        themes: ["Feedback infrastructure", "Information flow", "Adaptive systems", "Decision support"],
        status: "Executive Brief",
        detail:
          "The scan prioritises clarity in feedback loops, low-latency information flows and the governance needed to sustain adaptive learning.",
        insights: [
          "Feedback systems viewed as a capability control point.",
          "Information flow mapped to decision readiness.",
          "Governance design ensures feedback remains strategic.",
        ],
      },
      {
        title: "Learning Analytics Maturity",
        sector: "Digital Transformation",
        focus:
          "A high-level maturity review of analytics capability, signal interpretation and system-level learning insight.",
        synopsis:
          "This snapshot evaluates how learning analytics contribute to strategic insight and capability decisions. It focuses on analytic maturity, data integrity and the organisational routines that make insight actionable. The report is stripped of specific data sources to preserve confidentiality.",
        themes: ["Analytics maturity", "Signal interpretation", "Insight routines", "Data integrity"],
        status: "Strategic Snapshot",
        detail:
          "The maturity review highlights an incremental pathway for analytics capability, with emphasis on actionable insight and decision-making confidence.",
        insights: [
          "Analytics capability tied to strategic decision routines.",
          "Data integrity framed as an enabler of trusted insight.",
          "Maturity steps defined around capability use cases.",
        ],
      },
    ],
  },
  {
    title: "Technology, Infrastructure & Sociotechnical Systems",
    overview:
      "A collection of anonymised systems insights that explore infrastructure risk, sociotechnical alignment and transformation in constrained environments.",
    reports: [
      {
        title: "Infrastructure Resilience Review",
        sector: "Healthcare",
        focus:
          "A strategic snapshot of infrastructure resilience, service continuity and systems redundancy under evolving operational demand.",
        synopsis:
          "This review examines infrastructural resilience as an executive concern. It identifies systemic vulnerabilities and recommends governance levers to maintain continuity through change. The insight remains deliberately high level and focused on architecture.",
        themes: ["Resilience", "Infrastructure risk", "Continuity planning", "Governance levers"],
        status: "Internal Analysis",
        detail:
          "The review emphasises resilient design principles and the need for strategic oversight of core infrastructure dependencies.",
        insights: [
          "Risk framed through infrastructure dependency networks.",
          "Continuity measures aligned with strategic capability priorities.",
          "Governance levers recommended to protect service stability.",
        ],
      },
      {
        title: "Sociotechnical Alignment Audit",
        sector: "Technology & Innovation",
        focus:
          "A concise audit of sociotechnical fit, communication systems and capability interaction patterns.",
        synopsis:
          "This snapshot distils the alignment of technical systems with organisational capability and human workflow. It examines how sociotechnical boundaries shape transformation outcomes and where adjustment is needed for coherent delivery. The analysis remains abstract and executive.",
        themes: ["Sociotechnical fit", "Communication systems", "Capability interaction", "Organisational alignment"],
        status: "Strategic Snapshot",
        detail:
          "The audit notes where technical capability and human systems are misaligned and suggests a discrete recalibration of communication and coordination patterns.",
        insights: [
          "Sociotechnical alignment evaluated across capability domains.",
          "Communication systems mapped to delivery effectiveness.",
          "Alignment gaps identified without sensitive detail.",
        ],
      },
      {
        title: "Systems Equity Assessment",
        sector: "Public Sector",
        focus:
          "A strategic assessment of infrastructure equity, access constraints and capability distribution in a complex service network.",
        synopsis:
          "This summary examines equity in systems access and the infrastructure implications of uneven capability distribution. It considers strategic governance, service design and resilience without naming organisations or sharing confidential data.",
        themes: ["Equity", "Access constraints", "Infrastructure design", "Capability distribution"],
        status: "Executive Brief",
        detail:
          "The assessment recommends an equity-aware systems approach, ensuring capability investments support the broadest sustainable access and resilience.",
        insights: [
          "Equity risk scoped at the systems level.",
          "Capability distribution evaluated against access outcomes.",
          "Infrastructure design positioned as a strategic enabler.",
        ],
      },
    ],
  },
  {
    title: "Strategic Intelligence, Research & Futures Analysis",
    overview:
      "A discreet platform for futures-led interpretation, systems intelligence and transformation foresight. The emphasis is on informed strategic observation rather than public exposition.",
    reports: [
      {
        title: "Futures Signal Summary",
        sector: "Organisational Capability",
        focus:
          "An executive summary of emerging signals, capability shifts and strategic implications for system change.",
        synopsis:
          "This snapshot analyses futures signals through a capability lens, identifying emerging systemic pressures and strategic response options. It remains focused on insight generation rather than public foresight publishing.",
        themes: ["Futures analysis", "Signal monitoring", "Capability shifts", "Strategic response"],
        status: "Strategic Snapshot",
        detail:
          "The summary highlights signal patterns that matter for near-term capability decisions and makes discreet recommendations for monitoring and response.",
        insights: [
          "Emerging pressures contextualised against system capacity.",
          "Capability shifts identified for strategic prioritisation.",
          "Response options framed as adaptive pathways.",
        ],
      },
      {
        title: "Transformation Intelligence Brief",
        sector: "Digital Transformation",
        focus:
          "A high-level intelligence brief on transformation themes, strategic options and system interpretation.",
        synopsis:
          "This brief provides a structured view of transformation intelligence, highlighting the strategic forces shaping capability decisions. It emphasises system-level interpretation and practical insight without operational attribution.",
        themes: ["Transformation intelligence", "System interpretation", "Strategic options", "Capability foresight"],
        status: "Executive Brief",
        detail:
          "The brief distils complex strategic dynamics into a concise insight set, enabling executive decision-making without exposing sensitive context.",
        insights: [
          "Strategic dynamics translated into actionable intelligence.",
          "Capability foresight framed in discreet, decision-ready terms.",
          "System interpretation designed for executive clarity.",
        ],
      },
      {
        title: "Emerging Capability Themes",
        sector: "Higher Education",
        focus:
          "A systems-informed overview of emerging capability patterns, portfolio implications and strategic readiness signals.",
        synopsis:
          "This snapshot surfaces emerging capability themes and the implications for strategic readiness. It explores how capability portfolios are shifting and what that means for organisational resilience, while avoiding any explicit operational detail.",
        themes: ["Capability themes", "Portfolio implications", "Readiness signals", "Resilience"],
        status: "Internal Analysis",
        detail:
          "The overview maps emerging themes to capability planning priorities, recommending attention where resilience and adaptability intersect.",
        insights: [
          "Themes extracted from emergent capability patterns.",
          "Portfolio implications framed for pragmatic action.",
          "Strategic readiness signals highlighted without sensitive detail.",
        ],
      },
    ],
  },
];

export default function StrategicReportsPage() {
  const [openSection, setOpenSection] = useState(-1);
  const [expandedSnapshots, setExpandedSnapshots] = useState<Record<number, number | null>>({});

  const toggleSection = (index: number) => {
    setOpenSection((current) => (current === index ? -1 : index));
  };

  const toggleSnapshot = (sectionIndex: number, snapshotIndex: number) => {
    setExpandedSnapshots((current) => ({
      ...current,
      [sectionIndex]: current[sectionIndex] === snapshotIndex ? null : snapshotIndex,
    }));
  };

  return (
    <section id="strategic-reports" className="bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-7xl px-6 pt-10 pb-8 sm:px-10 lg:px-12 lg:pt-14 lg:pb-10">
        <div className="animate-fade-in-up">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 lg:items-start">
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-cyan-300/90 font-medium">Strategic reports</p>
              <h1 className="mt-4 text-2xl font-bold tracking-normal text-slate-100 sm:text-3xl lg:text-3xl leading-snug">
                Applied transformation intelligence for systems, capability and organisational strategy.
              </h1>
            </div>
            <div className="text-base leading-7 text-slate-400 sm:text-lg sm:leading-8 space-y-4 lg:pt-1">
              <p>
                I work with boards, executive teams and senior leaders on transformation strategy, capability architecture and organisational systems design. These snapshots draw from that advisory practice — distilled to surface strategic intelligence rather than operational detail.
              </p>
              <p>
                My strategic work spans digital transformation, AI governance, workforce capability, assessment systems and sociotechnical infrastructure. Each classification presents executive-level analysis and systems insight from real engagements across sectors.
              </p>
              <p>
                All outputs are intentionally anonymised. Organisations, individuals and operational data are withheld to protect client and institutional confidentiality. What remains is the strategic thinking and analytical architecture that made each engagement distinctive.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-12 sm:px-10 lg:px-12 lg:pb-16">
        <div className="grid gap-4 lg:grid-cols-2">
          {classifications.map((classification, index) => {
            const isOpen = openSection === index;
            return (
              <div
                key={classification.title}
                className="rounded-[2rem] border border-slate-800/70 bg-slate-950/90 p-6 shadow-premium backdrop-blur"
              >
                <button
                  type="button"
                  className="w-full text-left"
                  onClick={() => toggleSection(index)}
                  aria-expanded={isOpen}
                  aria-controls={`classification-panel-${index}`}
                >
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/80 font-semibold">
                        Classification {index + 1}
                      </p>
                      <h2 className="mt-4 text-2xl font-semibold text-slate-100 leading-tight">
                        {classification.title}
                      </h2>
                    </div>
                    <span
                      className={`mt-1 inline-flex items-center rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                        isOpen ? "bg-cyan-500/15 text-cyan-200" : "bg-slate-800/70 text-slate-300"
                      }`}
                    >
                      {isOpen ? "Open" : "Summary"}
                    </span>
                  </div>
                  <p className="mt-5 text-sm leading-6 text-slate-400">{classification.overview}</p>
                </button>

                <div
                  id={`classification-panel-${index}`}
                  className={`mt-6 overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-[2200px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                  aria-hidden={!isOpen}
                >
                  <div className="space-y-5">
                    {classification.reports.map((report, reportIndex) => {
                      const isSnapshotOpen = expandedSnapshots[index] === reportIndex;
                      return (
                        <article
                          key={report.title}
                          className="rounded-[1.75rem] border border-slate-800/70 bg-slate-900/90 p-6 shadow-sm"
                        >
                          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                            <div className="space-y-3">
                              <span className="inline-flex rounded-full bg-slate-800/70 px-3 py-1 text-xs uppercase tracking-[0.25em] text-slate-400">
                                {report.sector}
                              </span>
                              <h3 className="text-xl font-semibold text-slate-100 leading-tight">
                                {report.title}
                              </h3>
                              <p className="text-sm text-cyan-300">{report.focus}</p>
                            </div>
                            <span className="whitespace-nowrap rounded-full bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-200">
                              {report.status}
                            </span>
                          </div>

                          <p className="mt-5 text-sm leading-7 text-slate-400">{report.synopsis}</p>

                          <div className="mt-5 flex flex-wrap gap-2">
                            {report.themes.map((theme) => (
                              <span
                                key={theme}
                                className="rounded-full border border-slate-800/80 bg-slate-950/70 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-400"
                              >
                                {theme}
                              </span>
                            ))}
                          </div>

                          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                            <button
                              type="button"
                              onClick={() => toggleSnapshot(index, reportIndex)}
                              className="inline-flex items-center justify-center rounded-full border border-cyan-400/30 bg-slate-900/90 px-5 py-2.5 text-sm font-semibold text-cyan-100 transition hover:border-cyan-300 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950"
                            >
                              {isSnapshotOpen ? "Hide insight" : "Read Snapshot"}
                            </button>
                            <span className="text-xs uppercase tracking-[0.25em] text-slate-500">
                              Anonymised executive summary
                            </span>
                          </div>

                          <div
                            className={`mt-5 overflow-hidden transition-all duration-300 ${
                              isSnapshotOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
                            }`}
                          >
                            <div className="rounded-[1.5rem] border border-slate-800/70 bg-slate-950/90 p-5 text-slate-400">
                              <p className="text-sm leading-7">{report.detail}</p>
                              <ul className="mt-4 space-y-3 text-sm">
                                {report.insights.map((insight) => (
                                  <li key={insight} className="flex items-start gap-3">
                                    <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400 flex-shrink-0" />
                                    {insight}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </article>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

