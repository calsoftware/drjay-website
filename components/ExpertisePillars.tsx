'use client';

import { useState } from 'react';

interface ExpertisePillarsProps {
  compact?: boolean;
}

const pillars = [
  {
    title: "Strategic Intelligence",
    summary: "Research backed analysis and foresight supporting executive decision making across complex organisational environments."
  },
  {
    title: "Organisational Transformation",
    summary: "Strategic frameworks and implementation architectures for systemic organisational change and capability development."
  },
  {
    title: "Systems Thinking & Innovation",
    summary: "Interconnected analysis of organisational systems with innovative approaches to complex problem solving and transformation."
  },
  {
    title: "Learning Systems Architecture",
    summary: "Design and implementation of scalable learning ecosystems that integrate pedagogy, technology and organisational goals."
  },
  {
    title: "AI Enabled Capability Development",
    summary: "Strategic integration of artificial intelligence to enhance organisational capabilities and workforce development."
  },
  {
    title: "Research & Inquiry",
    summary: "Scholarly investigation and evidence-based approaches to understanding complex organisational and learning systems."
  },
  {
    title: "Assessment & Feedback Systems",
    summary: "Evidence-based evaluation frameworks and feedback infrastructures supporting continuous improvement and capability development."
  },
  {
    title: "Workforce & Apprenticeship Ecosystems",
    summary: "Integrated systems for workforce development, professional learning and apprenticeship programmes across sectors."
  },
  {
    title: "Cyber Resilience & Digital Trust",
    summary: "Security architectures and trust frameworks ensuring resilient digital environments and organisational protection."
  },
  {
    title: "Data Science & Applied Analytics",
    summary: "Advanced analytical methods and data driven insights supporting strategic decision making and organisational intelligence."
  },
  {
    title: "Capability Ecosystems & Professional Learning",
    summary: "Integrated professional development systems supporting continuous learning and capability enhancement across organisations."
  },
  {
    title: "Research Informed Practice",
    summary: "Evidence-based approaches integrating scholarly research with practical implementation in organisational contexts."
  },
];

export default function ExpertisePillars({ compact = false }: ExpertisePillarsProps) {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleCard(index);
    }
  };

  return (
    <section
      id="about"
      className={`px-6 sm:px-10 lg:px-12 ${compact ? 'pt-4 pb-12 lg:pt-5 lg:pb-16' : 'mt-10 py-24 lg:py-32 lg:mt-16'}`}
    >
      <div className="mx-auto max-w-7xl">

        {!compact && (
          <div className="mb-16 max-w-3xl animate-fade-in-up">
            <p className="text-sm uppercase tracking-[0.4em] text-cyan-300/90 font-medium">Research Driven Practice</p>
            <h3 className="mt-6 text-4xl font-bold tracking-tight text-slate-100 sm:text-5xl lg:text-6xl">
              Systems thinking, transformation architecture and organisational intelligence.
            </h3>
            <p className="mt-6 text-lg leading-8 text-slate-400 sm:text-xl">
              Research informed systems practice integrating scholarly inquiry with strategic implementation. Supporting leadership teams, innovation groups and transformation programmes across education, workforce and organisational environments through analytical depth and implementation intelligence.
            </p>
          </div>
        )}

        <div className={`grid items-start ${
          compact
            ? 'gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
            : 'gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
        }`}>
          {pillars.map((pillar, index) => {
            const isExpanded = expandedCard === index;
            return (
              <button
                key={pillar.title}
                onClick={() => toggleCard(index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className={`
                  glass-hover rounded-xl text-center shadow-premium animate-fade-in-up
                  transition-all duration-300 ease-in-out w-full
                  focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950
                  hover:shadow-elevated hover:scale-[1.02]
                  active:scale-[0.98]
                  ${compact ? 'p-4' : 'p-8'}
                  ${isExpanded ? 'ring-2 ring-cyan-400 ring-offset-2 ring-offset-slate-950 shadow-elevated' : ''}
                `}
                style={{ animationDelay: `${index * 0.05}s` }}
                aria-expanded={isExpanded}
                aria-controls={`pillar-content-${index}`}
                aria-label={`${pillar.title}: ${isExpanded ? 'collapse' : 'expand'}`}
              >
                <div className={`font-semibold text-cyan-100 leading-snug ${compact ? 'text-xs mb-2' : 'text-lg mb-2'}`}>
                  {pillar.title}
                </div>
                <div className={`w-6 h-px bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto ${compact ? 'mb-2' : 'mb-4'}`} />

                <div
                  id={`pillar-content-${index}`}
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isExpanded ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className={`text-slate-300 leading-relaxed pt-2 border-t border-slate-700/50 ${compact ? 'text-xs' : 'text-sm'}`}>
                    {pillar.summary}
                  </p>
                </div>

                <div className={`${compact ? 'mt-2' : 'mt-4'} flex justify-center`}>
                  <svg
                    className={`w-4 h-4 text-cyan-400 transition-transform duration-300 ease-in-out ${isExpanded ? 'rotate-180' : 'rotate-0'}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
