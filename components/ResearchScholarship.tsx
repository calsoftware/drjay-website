'use client';

import { useState } from 'react';

interface FeaturedResearch {
  title: string;
  citation: string;
  synopsis: string;
  contribution?: string;
  publication: string;
  link: string;
  status?: 'published' | 'accepted' | 'submitted' | 'in-development' | 'active-research';
  themes?: string[];
  section?: string;
}

const researchAreas = [
  {
    title: "AI, Cognition and Human Learning Systems",
    summary: "I investigate how artificial intelligence intersects with human cognition, learning and capability development in sociotechnical environments, drawing on advisory and implementation work across education and enterprise.",
    expandedContent: {
      themes: ["AI mediated learning environments", "Cognitive augmentation", "Human-AI collaboration", "Intelligent tutoring systems"],
      currentProjects: ["AI supported judgement formation", "Cognitive load in AI learning contexts", "Adaptive learning algorithms"],
      futureDirections: ["AI ethics in learning systems", "Cognitive neuroscience approaches to AI learning"],
      featuredResearch: [
        {
          title: "Designing Generative AI Supported Simulation for Teaching Development: A Design-Based Research Study in the Further Education and Skills Sector",
          citation: "Jolugbo, O. (manuscript in development). Designing Generative AI Supported Simulation for Teaching Development: A Design-Based Research Study in the Further Education and Skills Sector.",
          synopsis: "A design-based research study examining how GenAI supported simulation and structured debrief shape teaching decision making, reflective reasoning, and learning transfer in professional teacher education.",
          contribution: "Develops empirically grounded design principles for integrating generative AI into simulation based professional learning.",
          publication: "Empirical Design-Based Research Study",
          link: "#",
          status: "in-development" as const,
          themes: ["Generative AI", "Simulation Based Learning", "Design-Based Research", "Reflective Practice", "Learning Transfer", "Teacher Education", "Learning Technology"],
          section: "Manuscripts in Development",
        },
        {
          title: "Human-AI Collaboration in Problem Solving Contexts",
          citation: "Jolugbo, O. (manuscript in development). Human-AI Collaboration in Problem Solving Contexts.",
          synopsis: "Examines how human and AI systems interact within complex problem solving environments, with particular attention to cognitive augmentation, human agency, collaborative reasoning, and sociotechnical decision making.",
          contribution: "Explores emerging models of human-AI collaborative cognition and their implications for organisational intelligence and professional decision systems.",
          publication: "Manuscript in development",
          link: "#",
          status: "in-development" as const,
          themes: ["Human-AI Collaboration", "Organisational Intelligence", "Cognitive Augmentation", "Sociotechnical Systems", "Decision Systems", "AI and Human Agency"],
        }
      ]
    }
  },
  {
    title: "Pedagogy, Teaching Innovation and Learning Practice",
    summary: "My work spans adaptive teaching methods, inquiry-based learning design and pedagogical innovation, informed by direct engagement with educators, institutions and workforce learning programmes.",
    expandedContent: {
      themes: ["Context responsive pedagogy", "Reflective teaching practices", "Inquiry-based learning design", "Teaching innovation ecosystems"],
      currentProjects: ["Adaptive instruction frameworks", "Teacher professional development", "Pedagogical innovation in constrained environments"],
      futureDirections: ["Global pedagogy frameworks", "Technology enhanced teaching innovation"],
      featuredResearch: [
        {
          title: "Innovation as Situated Practice in Higher Education Teaching and Learning",
          citation: "Jolugbo, O. & Reeves-Taylor, A. (accepted, subject to final review). Innovation as Situated Practice in Higher Education Teaching and Learning. Patterns of Practice: An International Journal of Scholarship of Teaching and Learning.",
          synopsis: "Conceptualises pedagogical innovation in higher education as an inherently situated and contextualised practice, drawing on the lived experiences of educators to examine how teaching and learning innovation emerges within specific institutional, disciplinary and relational contexts rather than as a transferable or decontextualised prescription.",
          contribution: "Advances a situated account of pedagogical innovation that repositions context, professional judgement and practitioner knowledge as generative rather than limiting conditions for educational change.",
          publication: "Accepted for publication in Patterns of Practice: An International Journal of Scholarship of Teaching and Learning",
          link: "#",
          status: "accepted" as const,
          themes: ["Scholarship of Teaching and Learning", "Pedagogical Innovation", "Higher Education", "Situated Practice", "Teaching and Learning Systems", "Educational Innovation"],
          section: "Accepted for Publication",
        },
        {
          title: "Context Responsive Pedagogy in Resource Constrained Environments",
          citation: "Jolugbo, O. (in preparation). Context Responsive Pedagogy in Resource Constrained Environments.",
          synopsis: "Developing pedagogical frameworks that adapt to local contexts and resource limitations, examining how teachers can innovate within constrained environments to maintain educational quality and build context responsive teaching strategies that enhance learning outcomes across diverse institutional settings.",
          publication: "Manuscript in development",
          link: "#",
          status: "in-development" as const,
          themes: ["Context Responsive Pedagogy", "Pedagogical Innovation", "Resource Constrained Education", "Teacher Development", "Adaptive Teaching"],
          section: "Conceptual Research Directions",
        },
        {
          title: "Reflective Practice Frameworks for Teacher Professional Development",
          citation: "Jolugbo, O. (in preparation). Reflective Practice Frameworks for Teacher Professional Development.",
          synopsis: "Exploring structured approaches to teacher reflection and professional growth, developing frameworks that integrate reflective practice into professional learning and examining the conditions under which systematic reflection enhances teaching effectiveness and professional capability development.",
          publication: "Manuscript in development",
          link: "#",
          status: "in-development" as const,
          themes: ["Reflective Practice", "Teacher Professional Development", "Professional Learning", "Teaching Innovation", "Pedagogical Frameworks"],
        }
      ]
    }
  },
  {
    title: "Learning Sciences and Educational Architectures",
    summary: "I design and evaluate learning system architectures for organisations navigating digital transformation, working across eLearning infrastructure, educational ecosystems and scalable capability frameworks.",
    expandedContent: {
      themes: ["Learning system architecture", "Educational ecosystem design", "Microlearning frameworks", "Blended learning environments"],
      currentProjects: ["Scalable learning architectures", "Educational technology ecosystems", "Learning analytics frameworks"],
      futureDirections: ["AI driven learning architectures", "Global learning system design"],
      featuredResearch: [
        {
          title: "Lessons learned from the deployment of 'Assessrite' digital tool in meeting curriculum goals: An evaluative case study of dyslexia assessment teacher training",
          citation: "Jolugbo, O. & Taylor, A. (2016). Lessons learned from the deployment of 'Assessrite' digital tool in meeting curriculum goals: An evaluative case study of dyslexia assessment teacher training. Journal of Teaching and Education, 05(02), 349–364.",
          synopsis: "An evaluative case study examining the deployment of the Assessrite digital tool in supporting dyslexia assessment teacher training and curriculum aligned learning outcomes.",
          contribution: "Explores how digital assessment technologies can support inclusive curriculum delivery, teacher capability development and structured learning evaluation.",
          publication: "Journal of Teaching and Education, 05(02), 2016, pp. 349–364",
          link: "https://www.iises.net/journal-of-teaching-and-education-publication",
          status: "published" as const,
          themes: ["Educational Technology", "Inclusive Learning", "Dyslexia Support", "Digital Assessment", "Teacher Training", "Curriculum Design"],
          section: "Published Work",
        },
        {
          title: "Co-Designing Clinical Learning Systems for Nursing Education: A Design-Based Research Study on Mediating Artefacts, Dialogic Learning, and Nursing Process Education",
          citation: "Jolugbo, O. (research manuscript under continued development). Co-Designing Clinical Learning Systems for Nursing Education: A Design-Based Research Study on Mediating Artefacts, Dialogic Learning, and Nursing Process Education.",
          synopsis: "A design-based research study investigating the co-design of mediating artefacts intended to support nursing students' clinical learning during nursing care planning practice. Drawing on co-design methodologies and dialogic learning principles, the research examines how nursing students, clinical preceptors and faculty members collaboratively designed technology enhanced learning environments to improve clinical reasoning, mentoring and reflective practice.",
          contribution: "Contributes to educational design research by examining the role of mediating artefacts, visual representations and collaborative learning architectures in scaffolding clinical learning systems.",
          publication: "Research Manuscript Under Continued Development",
          link: "#",
          status: "in-development" as const,
          themes: ["Design-Based Research", "Co-Design Methodology", "Mediating Artefacts", "Dialogic Learning", "Technology Enhanced Learning", "Clinical Learning Systems", "Nursing Education", "Educational Innovation"],
          section: "Manuscripts in Development",
        },
        {
          title: "A Temporal Theory of Microlearning: Time, Rhythm and the Architecture of Distributed Knowledge Acquisition",
          citation: "Jolugbo, O. (advanced manuscript in development). A Temporal Theory of Microlearning: Time, Rhythm and the Architecture of Distributed Knowledge Acquisition.",
          synopsis: "A conceptual manuscript developing Temporal Microlearning Theory (TMT), proposing that the temporal architecture of microlearning episodes, not merely their content or format, is the primary determinant of knowledge retention, transfer and professional capability development across distributed learning contexts.",
          publication: "Advanced Manuscript in Development",
          link: "#",
          status: "in-development" as const,
          themes: ["Microlearning", "Temporal Architecture", "Learning Design", "Cognitive Load", "Workplace Learning", "Technology Enhanced Learning"],
        }
      ]
    }
  },
  {
    title: "Distributed Cognition and Collaborative Problem Solving",
    summary: "I study how thinking and problem solving are distributed across people, tools and environments, with particular focus on collaborative dynamics in technology-rich and enterprise settings.",
    expandedContent: {
      themes: ["Distributed cognitive processes", "Collaborative debugging", "Team cognition", "Technologically mediated collaboration"],
      currentProjects: ["Collaborative problem solving frameworks", "Cognitive load in distributed systems", "Team reasoning processes"],
      futureDirections: ["AI augmented collaboration", "Cross cultural collaborative cognition"],
      featuredResearch: [
        {
          title: "From Syntax to Strategy: Mapping the Debugging Errors and Repair Patterns of Distributed Novice Apprentices in Collaborative Python Environments",
          citation: "Jolugbo, O. (manuscript under development). From Syntax to Strategy: Mapping the Debugging Errors and Repair Patterns of Distributed Novice Apprentices in Collaborative Python Environments.",
          synopsis: "An empirical investigation into the debugging behaviours of geographically distributed novice programming apprentices working collaboratively in Python environments. The study examines syntax, logical and runtime errors encountered during distributed pair debugging sessions and maps these to repair strategies including tinkering, IDE assisted inspection, divide-and-conquer approaches and print statement debugging. Drawing on screen recordings, think-aloud protocols and post-session interviews, the research contributes a taxonomy of debugging errors and collaborative repair practices within apprenticeship based software engineering education.",
          contribution: "Develops an empirically grounded taxonomy of debugging errors and collaborative repair strategies for distributed novice apprentices, with implications for the design of apprenticeship based computing education programmes.",
          publication: "Manuscript Under Development",
          link: "#",
          status: "in-development" as const,
          themes: ["Software Engineering Education", "Collaborative Debugging", "Distributed Learning", "Apprenticeship Research", "Python Programming", "Computing Education", "Distributed Cognition", "Remote Collaboration"],
          section: "Manuscripts in Development",
        },
        {
          title: "Distributed Cognition in Collaborative Software Development Contexts",
          citation: "Jolugbo, O. (in preparation). Distributed Cognition in Collaborative Software Development Contexts.",
          synopsis: "Examining how cognition is distributed across team members, tools and environments during collaborative software development, analysing cognitive processes in distributed teams and developing frameworks for technology supported collaborative learning environments.",
          publication: "Manuscript in development",
          link: "#",
          status: "in-development" as const,
          themes: ["Distributed Cognition", "Collaborative Software Development", "Cognitive Systems", "Team Learning", "Technology Mediated Collaboration"],
          section: "Conceptual Research Directions",
        },
        {
          title: "Cognitive Load Dynamics in Distributed Problem Solving Teams",
          citation: "Jolugbo, O. (in preparation). Cognitive Load Dynamics in Distributed Problem Solving Teams.",
          synopsis: "Investigating cognitive load dynamics in geographically distributed collaborative teams and how technology mediates cognitive processes in distributed problem solving contexts.",
          publication: "Manuscript in development",
          link: "#",
          status: "in-development" as const,
          themes: ["Cognitive Load", "Distributed Teams", "Problem Solving", "Technology Mediation", "Collaborative Cognition"],
        }
      ]
    }
  },
  {
    title: "Software Engineering Practice",
    summary: "I research collaborative software engineering, debugging systems and technology mediated programming practice, examining how distributed teams coordinate reasoning, share cognitive effort and solve complex problems across distributed development environments.",
    expandedContent: {
      themes: ["Collaborative debugging", "Distributed software development", "Pair programming and remote collaboration", "CSCW in software engineering", "Debugging cognition and repair strategies"],
      currentProjects: ["Collaborative debugging frameworks for distributed teams", "Technology mediated pair debugging environments", "Debugging error taxonomy development"],
      futureDirections: ["AI assisted debugging systems", "Intelligent debugging scaffolds in software engineering education", "Remote collaboration frameworks for distributed software practice"],
      featuredResearch: [
        {
          title: "Collaborative Debugging in Distributed Learning Environments: From Conceptual Foundations to an Empirically Refined Framework",
          citation: "Jolugbo, O. (submitted). Collaborative Debugging in Distributed Learning Environments: From Conceptual Foundations to an Empirically Refined Framework. Submitted to Computer Science Education.",
          synopsis: "Investigates how novice programmers engage in collaborative debugging within distributed environments, drawing on distributed cognition and information foraging theory to develop an empirically refined framework for understanding technology mediated debugging, collaborative reasoning, and distributed software problem solving.",
          publication: "Submitted to Computer Science Education",
          link: "#",
          status: "submitted" as const,
          themes: ["Collaborative Debugging", "Distributed Cognition", "CSCW", "Software Engineering", "Pair Programming", "Debugging Strategies", "Technology Mediated Learning", "Distributed Learning"],
          section: "Submitted Work",
        }
      ]
    }
  },
  {
    title: "Technology, Infrastructure and Sociotechnical Futures",
    summary: "My work examines technology adoption, infrastructure development and governance across diverse sociotechnical contexts, including advisory engagements with organisations managing digital infrastructure change.",
    expandedContent: {
      themes: ["Technology infrastructure", "Sociotechnical systems", "Digital inequality", "Technology governance"],
      currentProjects: ["Infrastructure in constrained environments", "Technology adoption frameworks", "Digital transformation governance"],
      futureDirections: ["Sustainable technology infrastructure", "Global sociotechnical systems"],
      featuredResearch: [
        {
          title: "Communication as Infrastructural Labour: Digital Continuity under Conditions of Institutional Fragility",
          citation: "Reeves-Taylor, A. & Jolugbo, O. (under review). Communication as Infrastructural Labour: Digital Continuity under Conditions of Institutional Fragility. Submitted to The African Journal of Information and Communication (AJIC).",
          synopsis: "A sociotechnical analysis of how digital continuity is sustained within Liberian higher education through communicative and infrastructural labour under conditions of institutional fragility.",
          contribution: "Introduces the Communicative Infrastructural Absorption Model (CIAM), explaining how educational systems remain operational through distributed communicative labour under infrastructural instability.",
          publication: "Submitted to The African Journal of Information and Communication (AJIC)",
          link: "https://epress.lib.uts.edu.au/journals/index.php/AJIC/index",
          status: "submitted" as const,
          themes: ["Sociotechnical Systems", "ICT4D", "Infrastructure Studies", "Digital Continuity", "Institutional Fragility", "Liberia", "Higher Education"],
          section: "Submitted Work",
        },
        {
          title: "Technology Infrastructure in Resource Constrained Educational Contexts",
          citation: "Jolugbo, O. (in preparation). Technology Infrastructure in Resource Constrained Educational Contexts.",
          synopsis: "Examining technology infrastructure challenges in resource constrained educational environments, analysing sociotechnical factors affecting technology adoption, sustainability and governance across diverse institutional settings.",
          publication: "Manuscript in development",
          link: "#",
          status: "in-development" as const,
          themes: ["Technology Infrastructure", "Sociotechnical Systems", "Digital Governance", "Resource Constrained Contexts", "Technology Adoption"],
          section: "Conceptual Research Directions",
        },
        {
          title: "Governance Frameworks for Educational Technology Ecosystems",
          citation: "Jolugbo, O. (in preparation). Governance Frameworks for Educational Technology Ecosystems.",
          synopsis: "Developing governance models for complex educational technology ecosystems, exploring how organisations can effectively govern technology adoption and integration while balancing innovation with institutional stability.",
          publication: "Manuscript in development",
          link: "#",
          status: "in-development" as const,
          themes: ["Technology Governance", "Educational Technology", "Ecosystem Design", "Institutional Stability", "Digital Transformation"],
        }
      ]
    }
  },
  {
    title: "Workforce Learning and Professional Capability Ecosystems",
    summary: "I research and advise on workforce capability development, professional learning systems and apprenticeship ecosystems, supporting organisations to build sustainable learning infrastructure across vocational and enterprise environments.",
    expandedContent: {
      themes: ["Apprenticeship systems", "Workforce capability development", "Professional learning ecosystems", "Vocational education"],
      currentProjects: ["Apprenticeship learning frameworks", "Workforce capability ecosystems", "Professional development systems"],
      futureDirections: ["AI enhanced workforce learning", "Global capability development systems"],
      featuredResearch: [
        {
          title: "Designing GenAI Assisted Incident Response Simulations for Cyber Security Apprenticeship Training",
          citation: "Jolugbo, O. (advanced manuscript in development). Designing GenAI Assisted Incident Response Simulations for Cyber Security Apprenticeship Training.",
          synopsis: "Design-based research investigating how constrained generative artificial intelligence can support professional judgement, incident response reasoning, reflective learning and simulation based cyber security education. Explores how carefully governed GenAI systems can enhance cyber security apprenticeship training through structured decision making, rubric aligned feedback, simulation variation and reflective debriefing.",
          contribution: "Develops design principles for constrained, rubric governed GenAI simulation as a structured pedagogical scaffold for professional judgement development in cyber security apprenticeship contexts.",
          publication: "Advanced Manuscript in Development",
          link: "#",
          status: "in-development" as const,
          themes: ["Generative AI", "Cyber Security Education", "Design-Based Research", "Simulation Learning", "Professional Judgement", "Organisational Learning", "Systems Design"],
          section: "Manuscripts in Development",
        },
        {
          title: "Apprenticeship Learning Frameworks in Digital Economies",
          citation: "Jolugbo, O. (in preparation). Apprenticeship Learning Frameworks in Digital Economies.",
          synopsis: "Developing apprenticeship frameworks adapted to digital economy requirements, examining how traditional apprenticeship models can be enhanced through digital technologies to build scalable workforce capability.",
          publication: "Manuscript in development",
          link: "#",
          status: "in-development" as const,
          themes: ["Apprenticeship Systems", "Digital Economy", "Workforce Development", "Professional Learning", "Capability Architecture"],
          section: "Conceptual Research Directions",
        },
        {
          title: "Professional Capability Ecosystems in Organisational Contexts",
          citation: "Jolugbo, O. (in preparation). Professional Capability Ecosystems in Organisational Contexts.",
          synopsis: "Investigating integrated systems for professional capability development within organisations, exploring how learning ecosystems can align individual growth with organisational strategy and sustained capability architecture.",
          publication: "Manuscript in development",
          link: "#",
          status: "in-development" as const,
          themes: ["Capability Ecosystems", "Organisational Learning", "Professional Development", "Strategic Alignment", "Workforce Architecture"],
        }
      ]
    }
  },
  {
    title: "Digital Transformation and Organisational Intelligence",
    summary: "I advise leadership teams on digital transformation strategy and organisational intelligence, drawing on implementation experience across enterprise, education and public sector environments.",
    expandedContent: {
      themes: ["Digital transformation strategy", "Organisational intelligence", "AI governance", "Strategic capability systems"],
      currentProjects: ["Digital transformation frameworks", "Organisational intelligence systems", "AI governance models"],
      futureDirections: ["Intelligent organisation design", "Digital capability ecosystems"],
      featuredResearch: [
        {
          title: "AI in Human Resource Management: Reframing Organisational Decision-Making through a Socio-Technical Systems Lens",
          citation: "Jolugbo, O. & Reeves-Taylor, A. (under review). AI in Human Resource Management: Reframing Organisational Decision-Making through a Socio-Technical Systems Lens. Submitted to Information and Organization.",
          synopsis: "A conceptual framework reframing Human-AI integration in HRM as a sociotechnical organisational decision system shaped through judgement, authority and accountability configurations.",
          contribution: "Introduces organisational decision architecture as a central explanatory lens for understanding how AI systems become organisationally consequential.",
          publication: "Submitted to Information and Organization",
          link: "https://www.sciencedirect.com/journal/information-and-organization",
          status: "submitted" as const,
          themes: ["Artificial Intelligence", "Organisational Decision Systems", "AI Governance", "Sociotechnical Systems", "HRM", "Algorithmic Management", "Information Systems"],
          section: "Submitted Work",
        },
        {
          title: "Organisational Intelligence Systems for Strategic Decision-Making",
          citation: "Jolugbo, O. (in preparation). Organisational Intelligence Systems for Strategic Decision-Making.",
          synopsis: "Developing frameworks for organisational intelligence systems that support strategic decision making, examining how organisations can build intelligence capabilities for complex decision contexts.",
          publication: "Manuscript in development",
          link: "#",
          status: "in-development" as const,
          themes: ["Organisational Intelligence", "Strategic Decision-Making", "Information Systems", "Decision Architecture", "Capability Systems"],
          section: "Conceptual Research Directions",
        },
        {
          title: "AI Governance in Digital Transformation Contexts",
          citation: "Jolugbo, O. (in preparation). AI Governance in Digital Transformation Contexts.",
          synopsis: "Exploring governance frameworks for artificial intelligence in organisational transformation, developing models for responsible AI adoption that balance innovation with institutional accountability.",
          publication: "Manuscript in development",
          link: "#",
          status: "in-development" as const,
          themes: ["AI Governance", "Digital Transformation", "Responsible AI", "Institutional Accountability", "Technology Policy"],
        }
      ]
    }
  },
  {
    title: "Inclusive, Global South and Context Responsive Education",
    summary: "My research focuses on educational equity, Global South learning systems and context responsive pedagogy, examining how institutions can build inclusive and culturally grounded learning environments.",
    expandedContent: {
      themes: ["Educational equity", "Global South learning systems", "Context responsive pedagogy", "Inclusive learning environments"],
      currentProjects: ["Rural education frameworks", "Contextual pedagogy development", "Inclusive learning systems"],
      futureDirections: ["Global educational equity", "Context aware learning technologies"],
      featuredResearch: [
        {
          title: "Social Media Learning Under Constraint: A Conceptual Framework for Higher Education",
          citation: "Jolugbo, O. & Reeves-Taylor, A. (2026). Social Media Learning Under Constraint: A Conceptual Framework for Higher Education. The Journal of Social Media for Learning, 6(1).",
          synopsis: "A conceptual framework examining how students and educators appropriate social media platforms as learning infrastructure in contexts where institutional provision and digital infrastructure remain constrained.",
          publication: "The Journal of Social Media for Learning, 6(1), 2026",
          link: "https://openjournals.ljmu.ac.uk/JSML/article/view/3460/1837",
          status: "published" as const,
          themes: ["Social Media Learning", "Higher Education", "Learning Infrastructure", "Constraint Responsive Education", "Liberia"],
          section: "Published Work",
        },
        {
          title: "Constraint-Responsive Innovation in Higher Education: Rethinking Pedagogical Innovation through the Lived Realities of Liberian Higher Education",
          citation: "Reeves-Taylor, A. & Jolugbo, O. (manuscript under development). Constraint-Responsive Innovation in Higher Education: Rethinking Pedagogical Innovation through the Lived Realities of Liberian Higher Education.",
          synopsis: "A conceptual and qualitative investigation into how lecturers in Liberian higher education institutions sustain teaching and learning under conditions of infrastructural and institutional constraint. Drawing on semi-structured interviews across multiple institutions and disciplines, the study develops the concept of Constraint-Responsive Innovation to explain how pedagogical adaptation emerges through professional judgement, contextual improvisation and sustained educational continuity. The research repositions structurally constrained educational systems as sites of conceptual and theoretical insight, contributing to Scholarship of Teaching and Learning in the Global South.",
          publication: "Manuscript under development",
          link: "#",
          status: "in-development" as const,
          themes: ["Scholarship of Teaching and Learning", "Global South Higher Education", "Educational Innovation", "Constraint-Responsive Innovation", "Learning Systems", "Educational Infrastructure"],
          section: "Manuscripts in Development",
        }
      ]
    }
  },
  {
    title: "Assessment, Feedback and Epistemic Integrity",
    summary: "I investigate assessment system design, feedback infrastructure and epistemic integrity, with applied work spanning quality assurance, AI mediated assessment contexts and organisational evaluation frameworks.",
    expandedContent: {
      themes: ["Assessment system design", "Feedback infrastructure", "Epistemic integrity", "Evaluative judgement"],
      currentProjects: ["AI mediated assessment", "Feedback system architectures", "Authenticity and originality frameworks"],
      futureDirections: ["Intelligent assessment systems", "Epistemic trust frameworks"],
      featuredResearch: [
        {
          title: "Feedback Infrastructure Design for Learning Ecosystems",
          citation: "Jolugbo, O. (in preparation). Feedback Infrastructure Design for Learning Ecosystems.",
          synopsis: "Developing frameworks for feedback infrastructures that support learning across educational ecosystems, examining how feedback systems can be architected to enhance learning outcomes, promote continuous improvement and sustain epistemic integrity within complex educational environments.",
          publication: "Manuscript in development",
          link: "#",
          status: "in-development" as const,
          themes: ["Feedback Systems", "Assessment Design", "Learning Ecosystems", "Epistemic Integrity", "Educational Evaluation"],
          section: "Conceptual Research Directions",
        },
        {
          title: "Epistemic Integrity in AI Mediated Assessment Systems",
          citation: "Jolugbo, O. (in preparation). Epistemic Integrity in AI Mediated Assessment Systems.",
          synopsis: "Exploring how artificial intelligence can preserve epistemic integrity in assessment contexts, developing frameworks for AI assessment systems that support authentic learning, academic rigour and evaluative integrity across technology mediated educational environments.",
          publication: "Manuscript in development",
          link: "#",
          status: "in-development" as const,
          themes: ["Epistemic Integrity", "AI Mediated Assessment", "Academic Integrity", "Educational Technology", "Assessment Systems"],
        }
      ]
    }
  }
];

export default function ResearchScholarship() {
  const [expandedArea, setExpandedArea] = useState<number | null>(null);

  const toggleArea = (index: number) => {
    setExpandedArea(expandedArea === index ? null : index);
  };

  const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleArea(index);
    }
  };

  return (
    <section id="research" className="px-6 pt-8 pb-12 sm:px-10 lg:px-12 lg:pt-10 lg:pb-16">
      <div className="mx-auto max-w-7xl">
        {/* Research Hero Section */}
        <div className="mb-8 animate-fade-in-up">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 lg:items-start">

            {/* Left: label + heading */}
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-cyan-300/90 font-medium">Research &amp; Scholarly Inquiry</p>
              <h2 className="mt-5 text-2xl font-bold tracking-normal text-slate-100 sm:text-3xl lg:text-3xl leading-snug">
                My research explores the intersection of learning, artificial intelligence, organisational systems and sociotechnical transformation.
              </h2>
            </div>

            {/* Right: supporting paragraphs */}
            <div className="text-base leading-7 text-slate-400 sm:text-lg sm:leading-8 space-y-4 lg:pt-1">
              <p>
                Drawing from research, implementation and advisory practice, I investigate how people, technologies and institutions interact within complex educational, workforce and enterprise environments.
              </p>
              <p>
                My work spans artificial intelligence in education, distributed cognition, capability ecosystems, digital transformation, organisational intelligence, assessment systems, learning infrastructures and collaborative problem solving. I am particularly interested in how systems scale, how capability develops across institutions, and how technology reshapes learning, decision making and organisational practice.
              </p>
              <p>
                Each area below reflects active scholarly inquiry alongside consultancy, strategic analysis and advisory engagement. Specific outputs and organisational work are intentionally anonymised to protect client and institutional confidentiality.
              </p>
            </div>

          </div>
        </div>

        {/* Research Areas Grid */}
        <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
          {researchAreas.map((area, index) => {
            const isExpanded = expandedArea === index;
            return (
              <div
                key={area.title}
                className="glass-hover rounded-2xl p-5 shadow-premium animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-base font-bold text-slate-100 mb-2 leading-snug">{area.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-3">{area.summary}</p>

                <button
                  onClick={() => toggleArea(index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className="
                    inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm font-medium
                    transition-colors duration-200
                    focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950
                    rounded-md px-2 py-1
                  "
                  aria-expanded={isExpanded}
                  aria-controls={`research-content-${index}`}
                  aria-label={`${area.title}: ${isExpanded ? 'click to collapse details' : 'click to expand details'}`}
                >
                  <span>{isExpanded ? 'Read less' : 'Read more'}</span>
                  <svg
                    className={`ml-2 h-4 w-4 transition-transform duration-200 ${isExpanded ? 'rotate-90' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                <div
                  id={`research-content-${index}`}
                  className={`
                    grid transition-[grid-template-rows] duration-500 ease-in-out mt-6
                    ${isExpanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}
                  `}
                >
                  <div className="overflow-hidden min-h-0">
                  <div className={`border-t border-slate-700/50 pt-6 space-y-6 transition-opacity duration-500 ease-in-out ${isExpanded ? 'opacity-100' : 'opacity-0'}`}>
                    <div>
                      <h4 className="text-sm font-semibold text-cyan-300 uppercase tracking-wide mb-3">Key Themes</h4>
                      <ul className="text-sm text-slate-400 space-y-1">
                        {area.expandedContent.themes.map((theme, themeIndex) => (
                          <li key={themeIndex} className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3 flex-shrink-0"></span>
                            {theme}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-cyan-300 uppercase tracking-wide mb-3">Current Projects</h4>
                      <ul className="text-sm text-slate-400 space-y-1">
                        {area.expandedContent.currentProjects.map((project, projectIndex) => (
                          <li key={projectIndex} className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3 flex-shrink-0"></span>
                            {project}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-cyan-300 uppercase tracking-wide mb-3">Future Directions</h4>
                      <ul className="text-sm text-slate-400 space-y-1">
                        {area.expandedContent.futureDirections.map((direction, directionIndex) => (
                          <li key={directionIndex} className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3 flex-shrink-0"></span>
                            {direction}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-cyan-300 uppercase tracking-wide mb-4">Featured Research</h4>
                      <div className="space-y-6">
                        {(area.expandedContent.featuredResearch as FeaturedResearch[]).map((research, researchIndex) => {
                          const isExternal = research.link.startsWith('http');
                          return (
                            <div key={researchIndex}>
                              {research.section && (
                                <p className="text-xs uppercase tracking-[0.3em] text-slate-500 font-medium mb-3 pb-2 border-b border-slate-800/50">
                                  {research.section}
                                </p>
                              )}
                              <div className="border-l-2 border-cyan-400/30 pl-4">
                                <div className="flex items-start justify-between gap-3 mb-2">
                                  <h5 className="text-base font-semibold text-slate-100 leading-tight">{research.title}</h5>
                                  {research.status === 'published' && (
                                    <span className="flex-shrink-0 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400 bg-emerald-500/10 border border-emerald-400/20 px-2.5 py-0.5 rounded-full">
                                      Published
                                    </span>
                                  )}
                                  {research.status === 'accepted' && (
                                    <span className="flex-shrink-0 text-xs font-semibold uppercase tracking-[0.2em] text-violet-400 bg-violet-500/10 border border-violet-400/20 px-2.5 py-0.5 rounded-full">
                                      Accepted
                                    </span>
                                  )}
                                  {research.status === 'submitted' && (
                                    <span className="flex-shrink-0 text-xs font-semibold uppercase tracking-[0.2em] text-amber-400 bg-amber-500/10 border border-amber-400/20 px-2.5 py-0.5 rounded-full">
                                      Submitted for Review
                                    </span>
                                  )}
                                  {research.status === 'in-development' && (
                                    <span className="flex-shrink-0 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 bg-slate-700/30 border border-slate-600/30 px-2.5 py-0.5 rounded-full">
                                      Manuscript in Development
                                    </span>
                                  )}
                                  {research.status === 'active-research' && (
                                    <span className="flex-shrink-0 text-xs font-semibold uppercase tracking-[0.2em] text-teal-400 bg-teal-500/10 border border-teal-400/20 px-2.5 py-0.5 rounded-full">
                                      Active Research Programme
                                    </span>
                                  )}
                                </div>
                                <p className="text-xs text-cyan-300/80 font-medium mb-2 italic">{research.citation}</p>
                                <p className="text-sm text-slate-400 leading-relaxed mb-3">{research.synopsis}</p>
                                {research.contribution && (
                                  <p className="text-xs text-slate-500 leading-relaxed mb-3 pl-3 border-l border-slate-700/40 italic">
                                    {research.contribution}
                                  </p>
                                )}
                                {research.themes && research.themes.length > 0 && (
                                  <div className="flex flex-wrap gap-1.5 mb-3">
                                    {research.themes.map((theme) => (
                                      <span
                                        key={theme}
                                        className="text-xs text-slate-500 bg-slate-800/50 border border-slate-700/40 px-2 py-0.5 rounded-full"
                                      >
                                        {theme}
                                      </span>
                                    ))}
                                  </div>
                                )}
                                <div className="flex items-center justify-between gap-3">
                                  <span className="text-xs text-slate-500 bg-slate-800/50 px-2 py-1 rounded leading-snug">{research.publication}</span>
                                  {isExternal && (
                                    <a
                                      href={research.link}
                                      target="_blank"
                                      rel="noreferrer"
                                      className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950 rounded px-2 py-1 flex-shrink-0"
                                      aria-label={`Read ${research.title}, opens in new tab`}
                                    >
                                      View Publication
                                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                      </svg>
                                    </a>
                                  )}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
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
