export type CaseStudy = {
  title: string;
  sector: string;
  challenge: string;
  role: string;
  methods: string[];
  delivery: string;
  outcome: string;
  significance: string;
};

export type ProjectDomain = {
  slug: string;
  title: string;
  iconPath: string;
  summary: string;
  caseStudies: CaseStudy[];
};

export const projectDomains: ProjectDomain[] = [
  {
    slug: "ai-strategy-digital-transformation",
    title: "AI Strategy & Digital Transformation",
    iconPath:
      "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z",
    summary:
      "Applied work supporting organisations to adopt AI, modernise digital operations and align transformation initiatives with strategic capability.",
    caseStudies: [
      {
        title: "Digital Banking Infrastructure Modernisation",
        sector: "Financial services organisation",
        challenge:
          "A financial services organisation needed to transition from fragmented legacy banking infrastructure to a modern, integrated digital platform. Operational silos were limiting product delivery speed and data visibility across business lines.",
        role:
          "Led requirements analysis, stakeholder engagement and transformation planning across technology, operations and compliance functions. Supported architecture design, vendor assessment and delivery governance.",
        methods: ["Agile Delivery", "Stakeholder Mapping", "Process Modelling", "Requirements Analysis", "Change Management", "Gap Analysis"],
        delivery:
          "Phased implementation across 18 months. Cross-functional workstreams covered infrastructure migration, process redesign and staff capability development in parallel.",
        outcome:
          "Modernised platform reduced transaction processing time by 40% and improved data integration across business units, establishing a scalable architecture for future digital products.",
        significance:
          "Demonstrated the strategic value of combining technical transformation leadership with structured stakeholder engagement to achieve sustainable digital change.",
      },
      {
        title: "E-Commerce Platform Strategic Upgrade",
        sector: "Retail organisation",
        challenge:
          "A retail organisation operating across multiple channels needed to unify its customer experience through a more capable e-commerce platform. Fragmented systems limited inventory visibility and reduced conversion performance.",
        role:
          "Supported requirements gathering, user journey analysis and the coordination of technical and commercial stakeholders across the upgrade lifecycle.",
        methods: ["Business Analysis", "User Journey Mapping", "Process Redesign", "Requirements Documentation", "UAT Coordination"],
        delivery:
          "Iterative delivery approach with structured testing phases. Coordinated user acceptance testing with business stakeholders and supported rollout planning.",
        outcome:
          "Unified platform improved customer experience, reduced cart abandonment and enabled real-time inventory visibility across all channels.",
        significance:
          "Illustrated the importance of aligning e-commerce capability with operational process redesign rather than treating digital upgrade as a purely technical exercise.",
      },
      {
        title: "Agile Transformation for Technology Operations",
        sector: "Technology organisation",
        challenge:
          "An IT department operating with traditional project delivery methods was experiencing delivery delays, communication gaps and limited adaptability to changing business priorities.",
        role:
          "Supported the transition to Agile delivery practices through coaching, process design and framework implementation. Facilitated team workshops and retrospectives throughout.",
        methods: ["Scrum", "Kanban", "JIRA", "Sprint Planning", "Backlog Management", "Retrospective Facilitation", "Delivery Metrics"],
        delivery:
          "12-week transformation programme. Established cross-functional squads, defined delivery cadences and introduced continuous improvement practices embedded in daily operations.",
        outcome:
          "Delivery velocity improved, stakeholder satisfaction increased and the team developed sustainable Agile capability embedded in daily operations.",
        significance:
          "Demonstrated that Agile adoption requires cultural and process change, not just tooling — a principle that underpins effective technology transformation practice.",
      },
      {
        title: "Public Sector Digital Revenue System",
        sector: "Public sector agency",
        challenge:
          "A government agency responsible for revenue collection was relying on manual and paper-based processes, creating delays, errors and reduced compliance rates across its operations.",
        role:
          "Led requirements analysis and system design support for the transition to a digital revenue collection platform. Engaged policy, legal and operational stakeholders throughout.",
        methods: ["Requirements Elicitation", "Stakeholder Workshops", "Process Documentation", "Compliance Mapping", "UAT", "Change Communication"],
        delivery:
          "Phased rollout with parallel running of legacy and digital systems during transition. Extensive user training and change communication supported organisational adoption.",
        outcome:
          "Digital platform achieved 95% process digitisation within 12 months, significantly improving collection efficiency and audit traceability.",
        significance:
          "Reinforced the importance of contextual stakeholder engagement in public sector transformation where compliance, equity and transparency requirements are non-negotiable.",
      },
      {
        title: "Logistics Operations Tracking Platform",
        sector: "Logistics organisation",
        challenge:
          "A national logistics provider lacked real-time operational visibility across its fleet and distribution network, leading to inefficient routing and customer experience gaps.",
        role:
          "Supported system requirements definition, process analysis and stakeholder coordination for the implementation of a real-time logistics tracking platform.",
        methods: ["Process Mapping", "Requirements Documentation", "Integration Design", "Stakeholder Workshops", "System Testing"],
        delivery:
          "Delivered through structured sprints. Integration with existing fleet management systems required phased data migration and rigorous testing before go-live.",
        outcome:
          "Operational visibility improved across the distribution network, and customer communication capability was significantly enhanced through real-time tracking.",
        significance:
          "Illustrated how digital operations platforms generate strategic value through data integration, not just process automation.",
      },
      {
        title: "CRM Transformation and Customer Intelligence",
        sector: "Professional services organisation",
        challenge:
          "A professional services organisation was managing customer relationships through disconnected tools and spreadsheets, limiting pipeline visibility and stakeholder intelligence.",
        role:
          "Supported CRM selection, requirements specification and implementation planning. Designed data migration strategy and led change management communication.",
        methods: ["Requirements Analysis", "CRM Evaluation", "Data Migration Planning", "Process Redesign", "User Training", "Adoption Monitoring"],
        delivery:
          "Phased CRM rollout beginning with sales and client management functions. Structured onboarding programme supported team adoption across the organisation.",
        outcome:
          "Centralised customer data improved pipeline management, reduced administrative overhead and enabled data-driven relationship management across the organisation.",
        significance:
          "Demonstrated that CRM success is as much about data governance and process redesign as it is about platform capability.",
      },
      {
        title: "Inventory Intelligence and Control System",
        sector: "Manufacturing organisation",
        challenge:
          "A manufacturing organisation was managing stock through manual processes and disconnected spreadsheet systems, creating excess inventory costs and supply chain delays.",
        role:
          "Led business analysis and requirements definition for an automated inventory management system. Supported data model design and integration with production planning systems.",
        methods: ["Business Analysis", "Process Modelling", "Requirements Specification", "Data Mapping", "System Testing", "UAT"],
        delivery:
          "Implemented alongside existing operations with a structured transition plan. Data cleansing and historical migration were completed and validated prior to go-live.",
        outcome:
          "Automated inventory system reduced excess stock by 30%, improved procurement planning and enabled real-time stock visibility across production and logistics.",
        significance:
          "Demonstrated how operational intelligence systems, when aligned with process redesign, deliver measurable financial and operational improvement.",
      },
    ],
  },
  {
    slug: "software-engineering-practice",
    title: "Software Engineering Practice",
    iconPath: "M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5",
    summary:
      "Software and systems projects involving requirements analysis, stakeholder engagement, process modelling, testing and implementation support.",
    caseStudies: [
      {
        title: "Fleet Operations Management System",
        sector: "Transport and logistics organisation",
        challenge:
          "A transport organisation lacked a centralised system for managing fleet allocation, maintenance scheduling and driver compliance, creating operational inefficiency and compliance risk.",
        role:
          "Led requirements analysis, stakeholder workshops and system design for a fleet management platform. Supported testing, documentation and delivery governance throughout.",
        methods: ["Requirements Elicitation", "Use Case Modelling", "Stakeholder Interviews", "System Design", "Test Case Development", "UAT"],
        delivery:
          "Phased delivery across development and testing cycles. Engaged operational, maintenance and compliance stakeholders at each stage to validate design decisions.",
        outcome:
          "Centralised fleet system improved allocation efficiency, reduced maintenance downtime and established a compliance tracking capability across the organisation.",
        significance:
          "Illustrated the value of practitioner-led requirements analysis in reducing ambiguity and accelerating delivery in operationally complex environments.",
      },
      {
        title: "Clinical Patient Management Platform",
        sector: "Healthcare provider",
        challenge:
          "A healthcare organisation was managing patient records and clinical workflows through fragmented systems, creating risks to data integrity, care coordination and regulatory compliance.",
        role:
          "Supported requirements elicitation, clinical workflow analysis and system design for a patient management platform. Engaged clinical and administrative stakeholders throughout.",
        methods: ["Requirements Analysis", "Clinical Process Mapping", "Data Flow Modelling", "Compliance Review", "Stakeholder Workshops", "System Testing"],
        delivery:
          "Delivered iteratively with structured clinical validation at each phase. Regulatory and data protection requirements informed every design and configuration decision.",
        outcome:
          "Unified patient record system improved care coordination, reduced administrative duplication and supported regulatory compliance across the organisation.",
        significance:
          "Demonstrated how clinical systems require practitioner understanding of regulatory context, not just technical specification expertise.",
      },
      {
        title: "Human Resources Management System",
        sector: "Multinational organisation",
        challenge:
          "A multinational organisation was managing HR processes — including recruitment, performance, payroll and compliance — through disconnected platforms and manual workflows.",
        role:
          "Led requirements gathering, process analysis and system selection support across HR, finance and legal stakeholder groups.",
        methods: ["Business Analysis", "Process Mapping", "Requirements Specification", "Vendor Evaluation", "Data Migration Planning", "UAT"],
        delivery:
          "Structured implementation programme with phased rollout across business units. HR capability development accompanied system deployment throughout.",
        outcome:
          "Integrated HR platform improved process efficiency, reduced duplication and established a single source of truth for workforce data across the organisation.",
        significance:
          "Reinforced how HR transformation requires cross-functional alignment and careful change management to achieve sustainable adoption.",
      },
      {
        title: "Retail Point of Sale and Transaction System",
        sector: "Retail organisation",
        challenge:
          "A retail chain needed to replace an ageing point of sale system limiting transaction speed, inventory integration and customer experience at the point of purchase.",
        role:
          "Supported requirements definition, system design review and structured testing for a modern POS implementation across the retail network.",
        methods: ["Requirements Analysis", "Process Design", "System Testing", "Integration Testing", "UAT Coordination", "Training Design"],
        delivery:
          "Phased rollout across store locations. Structured pilot testing preceded full deployment to identify and resolve integration issues before scaling.",
        outcome:
          "New POS system improved transaction speed, reduced errors and enabled real-time inventory updates across the entire retail network.",
        significance:
          "Illustrated how retail technology transformation requires both technical precision and operational change management to succeed.",
      },
      {
        title: "Asset Auctioning Platform",
        sector: "Financial services organisation",
        challenge:
          "A financial services organisation required a secure, scalable platform to support structured asset auctions, including bid management, compliance documentation and participant verification.",
        role:
          "Led requirements analysis and use case development for the auction platform. Coordinated technical, legal and compliance stakeholders throughout.",
        methods: ["Requirements Elicitation", "Use Case Modelling", "Compliance Mapping", "Security Review", "Stakeholder Workshops", "System Testing"],
        delivery:
          "Developed and tested over structured iterations. Legal and compliance requirements shaped the security architecture and user access model at each stage.",
        outcome:
          "Secure auction platform supported structured bid processes, improved compliance documentation and reduced operational risk.",
        significance:
          "Demonstrated how regulated financial systems require requirements analysis that explicitly maps compliance obligations to technical design decisions.",
      },
      {
        title: "Insurance Claims Management System",
        sector: "Insurance organisation",
        challenge:
          "An insurance organisation was managing claims through paper-based and manual digital workflows, creating processing delays, inconsistencies and limited audit visibility.",
        role:
          "Supported requirements definition, process redesign and system implementation for a claims management platform.",
        methods: ["Process Analysis", "Requirements Specification", "Workflow Redesign", "System Testing", "UAT", "Training Coordination"],
        delivery:
          "Phased implementation with structured data migration. Stakeholder workshops identified process optimisation opportunities prior to system design.",
        outcome:
          "Digital claims platform reduced average processing time and improved audit traceability across all claim types handled by the organisation.",
        significance:
          "Illustrated how systems transformation delivers strategic value when process redesign and implementation are treated as integrated, not sequential, activities.",
      },
      {
        title: "Student Information and Academic Management System",
        sector: "Higher education provider",
        challenge:
          "A higher education institution managing enrolment, academic records and regulatory reporting through disparate systems needed a unified student information system.",
        role:
          "Supported requirements analysis, data architecture review and stakeholder engagement across academic, administrative and IT functions.",
        methods: ["Requirements Elicitation", "Data Modelling", "Stakeholder Workshops", "Compliance Mapping", "System Testing", "UAT"],
        delivery:
          "Delivered across academic terms to minimise disruption. Data migration from legacy systems was validated against institutional records before go-live.",
        outcome:
          "Unified student system improved data integrity, enabled regulatory reporting and reduced administrative duplication across academic and support teams.",
        significance:
          "Demonstrated how higher education information systems require careful alignment across academic governance, data compliance and student experience priorities.",
      },
    ],
  },
  {
    slug: "data-science-analytics",
    title: "Data Science & Analytics",
    iconPath:
      "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z",
    summary:
      "Analytics projects involving dashboards, data preparation, modelling, reporting and decision support across operational and organisational contexts.",
    caseStudies: [
      {
        title: "Clinical Analytics and Operational Intelligence Dashboard",
        sector: "Healthcare provider",
        challenge:
          "A healthcare provider lacked consolidated visibility of clinical performance, patient outcomes and operational KPIs. Decision-making relied on fragmented reports from multiple disconnected systems.",
        role:
          "Led data analysis, dashboard design and implementation. Engaged clinical and operational stakeholders to define relevant metrics and reporting requirements.",
        methods: ["SQL", "Python", "Power BI", "Data Modelling", "KPI Design", "Stakeholder Engagement"],
        delivery:
          "Iterative dashboard development with structured stakeholder review cycles. Data quality assessment and cleansing preceded visualisation design.",
        outcome:
          "Consolidated analytics dashboard provided senior leadership with real-time operational and clinical performance visibility, informing resource allocation and quality improvement decisions.",
        significance:
          "Illustrated how healthcare analytics delivers strategic value only when metrics are designed alongside clinical stakeholders rather than imposed from technical teams.",
      },
      {
        title: "Retail Stock and Demand Analysis",
        sector: "Retail organisation",
        challenge:
          "A retail organisation was experiencing stock imbalances across its distribution network, leading to excess inventory and out-of-stock incidents that affected customer satisfaction and margin.",
        role:
          "Conducted demand analysis, built inventory forecasting models and designed reporting outputs for commercial and operations teams.",
        methods: ["Python", "R", "SQL", "Demand Forecasting", "Regression Modelling", "Power BI", "Tableau"],
        delivery:
          "Developed over a structured analytical engagement. Forecasting models were validated against historical data before deployment into operational reporting.",
        outcome:
          "Demand-aligned inventory forecasting reduced excess stock and improved product availability across categories, directly impacting commercial performance.",
        significance:
          "Demonstrated how applied data science can address commercial problems when analytical work is grounded in operational context.",
      },
      {
        title: "Manufacturing Process Optimisation Analysis",
        sector: "Manufacturing organisation",
        challenge:
          "A manufacturing organisation needed to identify inefficiencies in its production process and reduce waste, scrap rates and machine downtime through data-driven analysis.",
        role:
          "Conducted operational data analysis, identified root causes of production variance and developed analytical models to support process optimisation.",
        methods: ["Python", "Alteryx", "Statistical Process Control", "Root Cause Analysis", "SQL", "Operational Data Analysis"],
        delivery:
          "Data collection and preparation phase preceded modelling. Findings were presented to production management through structured reporting with clear intervention recommendations.",
        outcome:
          "Analysis identified key process bottlenecks and recommended targeted interventions that measurably reduced scrap rates and improved production throughput.",
        significance:
          "Reinforced how manufacturing analytics requires understanding of operational process logic, not just statistical technique, to produce actionable insight.",
      },
      {
        title: "Customer Retention and Churn Prediction",
        sector: "Telecommunications organisation",
        challenge:
          "A telecommunications organisation was experiencing elevated customer churn without reliable early indicators to support proactive retention intervention.",
        role:
          "Designed and built a customer churn prediction model, defined relevant features and delivered actionable outputs to commercial stakeholders.",
        methods: ["Python", "Machine Learning", "Feature Engineering", "SQL", "Model Evaluation", "Tableau"],
        delivery:
          "Iterative model development with validation against historical churn data. Findings presented through an accessible dashboard designed for commercial decision-makers.",
        outcome:
          "Churn prediction model enabled targeted retention interventions, reducing churn in high-risk customer segments within the first quarter of deployment.",
        significance:
          "Demonstrated how predictive analytics delivers commercial value when model outputs are designed for operational decision-makers, not just analytical audiences.",
      },
      {
        title: "Financial Reporting and Automation System",
        sector: "Financial services organisation",
        challenge:
          "A financial services organisation was producing regulatory and management reports through manual, time-intensive processes that introduced error risk and delayed decision-making.",
        role:
          "Designed automated reporting pipelines, standardised data models and implemented Power BI reporting environments for finance and compliance stakeholders.",
        methods: ["SQL", "Power BI", "Python", "Alteryx", "Data Modelling", "Process Automation", "Report Design"],
        delivery:
          "Phased automation of existing reports. Manual process mapping preceded automation design to ensure accuracy and full auditability.",
        outcome:
          "Automated reporting reduced production time by 60% and significantly improved data accuracy and consistency across financial reporting outputs.",
        significance:
          "Illustrated how financial reporting automation creates strategic value through reduced operational risk and faster access to decision-relevant information.",
      },
      {
        title: "Sales and Customer Engagement Analytics",
        sector: "Technology organisation",
        challenge:
          "A technology organisation needed greater visibility of sales pipeline performance, customer engagement patterns and revenue forecast accuracy to support commercial strategy.",
        role:
          "Designed analytical frameworks, built interactive sales dashboards and supported commercial teams in interpreting and acting on data insights.",
        methods: ["Power BI", "SQL", "CRM Data Analysis", "KPI Design", "Data Storytelling", "Stakeholder Engagement"],
        delivery:
          "Dashboard development conducted in close collaboration with commercial leadership. Iterative design ensured outputs were operationally relevant at every stage.",
        outcome:
          "Integrated sales analytics improved pipeline visibility and supported more accurate revenue forecasting across commercial teams.",
        significance:
          "Reinforced how commercial analytics succeeds when analytical design is shaped by the decision context of the end user, not the preferences of the analyst.",
      },
    ],
  },
  {
    slug: "elearning-architecture-development",
    title: "eLearning Architecture & Development",
    iconPath:
      "M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3",
    summary:
      "Design and development of digital learning environments, learning platforms, interactive resources and technology enhanced learning systems.",
    caseStudies: [
      {
        title: "Digital Learning Platform Design and Implementation",
        sector: "Education provider",
        challenge:
          "An education provider needed to transition from face-to-face delivery to a scalable digital learning environment, supporting learners across dispersed locations without compromising quality or engagement.",
        role:
          "Led the design and implementation of a digital learning platform, including architecture design, content structuring and technology selection.",
        methods: ["LMS Architecture", "Instructional Design", "Content Architecture", "Accessibility Review", "Technology Selection", "Learner Journey Mapping"],
        delivery:
          "Phased implementation beginning with platform configuration and content migration, followed by staff capability development and structured learner onboarding.",
        outcome:
          "Digital platform successfully supported remote learning delivery, improved learner access and reduced reliance on physical delivery infrastructure.",
        significance:
          "Demonstrated how eLearning architecture requires pedagogical design to precede technology selection — not the reverse.",
      },
      {
        title: "Technology Enhanced Learning Environment",
        sector: "Apprenticeship provider",
        challenge:
          "An apprenticeship provider needed to integrate technology more purposefully into its learning model to support off-the-job learning, evidence collection and learner progression tracking.",
        role:
          "Designed the technology enhanced learning architecture, selected tools aligned with apprenticeship standards and developed implementation guidance for delivery teams.",
        methods: ["TEL Framework Design", "Digital Tool Selection", "Bloom's Taxonomy Alignment", "Learning Journey Mapping", "Assessor Guidance", "Compliance Review"],
        delivery:
          "Structured implementation programme aligned to apprenticeship delivery cycles. Assessor and coach training supported technology adoption across delivery teams.",
        outcome:
          "Technology enhanced learning environment improved learner engagement, streamlined evidence collection and supported more consistent assessment practice.",
        significance:
          "Illustrated how apprenticeship TEL design must balance regulatory compliance, learner experience and assessor workload as interconnected priorities.",
      },
      {
        title: "Interactive Digital Learning Resource Development",
        sector: "Higher education provider",
        challenge:
          "A higher education provider needed a suite of interactive learning resources to support self-directed study, replacing static reading lists and lecture recordings with more engaging digital content.",
        role:
          "Designed and developed interactive learning resources including scenario-based activities, formative assessments and multimedia learning sequences.",
        methods: ["Articulate Storyline", "H5P", "Instructional Design", "Scenario Design", "Formative Assessment Design", "Accessibility Review"],
        delivery:
          "Iterative development with structured academic peer review at each stage. Accessibility and mobile responsiveness were built into the design from the outset.",
        outcome:
          "Suite of interactive resources improved self-directed learning engagement and better supported learners with diverse learning needs compared to static alternatives.",
        significance:
          "Demonstrated how resource development must be grounded in learning design theory to avoid digital content that looks sophisticated but adds minimal pedagogical value.",
      },
      {
        title: "AI-Informed Learning Simulation Design",
        sector: "Professional learning provider",
        challenge:
          "A professional learning provider sought to use AI-mediated scenarios and simulations to support workplace judgement development in complex, contextually variable professional environments.",
        role:
          "Led the conceptual design of AI-informed learning simulations, including scenario architecture, feedback design and assessment integration.",
        methods: ["AI Tool Integration", "Scenario-Based Learning Design", "Reflective Practice Frameworks", "Formative Feedback Design", "Pilot Design", "Learner Experience Review"],
        delivery:
          "Pilot design phase with structured stakeholder review. Ethical considerations around AI in professional learning were embedded throughout the design process.",
        outcome:
          "Simulation design framework established a principled approach to AI-mediated professional learning that prioritised cognitive challenge and contextual authenticity.",
        significance:
          "Demonstrated the importance of applying learning theory and professional ethics to AI-mediated learning design — preventing technology from substituting for pedagogical depth.",
      },
    ],
  },
  {
    slug: "digital-curriculum-design-development",
    title: "Digital Curriculum Design & Development",
    iconPath:
      "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10",
    summary:
      "Curriculum projects involving structured content design, learning outcomes, assessment alignment and professional or apprenticeship learning pathways.",
    caseStudies: [
      {
        title: "Apprenticeship Standard Curriculum Framework",
        sector: "Apprenticeship provider",
        challenge:
          "An apprenticeship provider needed to design a comprehensive curriculum framework aligned to occupational standards, ensuring knowledge, skills and behaviours were systematically developed across the programme.",
        role:
          "Led curriculum framework design, learning outcome mapping and content architecture across the full apprenticeship programme.",
        methods: ["Apprenticeship Standard Analysis", "KSB Mapping", "Curriculum Sequencing", "Assessment Design", "Learning Outcome Specification", "EPA Alignment"],
        delivery:
          "Structured curriculum design process with stakeholder review at each stage. Employer panel input shaped the contextualisation of learning outcomes.",
        outcome:
          "Comprehensive curriculum framework established clear learning progressions, improved teaching coherence and strengthened alignment with EPA requirements.",
        significance:
          "Demonstrated how principled curriculum design significantly improves apprenticeship outcomes when it begins with standards analysis rather than content assembly.",
      },
      {
        title: "Professional Digital Learning Programme Design",
        sector: "Workforce development organisation",
        challenge:
          "A workforce development organisation needed to design a structured digital learning programme for professional and technical roles, replacing informal and inconsistent on-the-job learning practices.",
        role:
          "Designed a modular digital learning programme covering knowledge content, practical skill development and reflective assessment elements.",
        methods: ["Modular Curriculum Design", "Digital Content Architecture", "Competency Mapping", "Blended Learning Design", "Assessment Specification"],
        delivery:
          "Programme designed in close collaboration with subject matter experts. Pilot delivery preceded full programme launch to validate learning design assumptions.",
        outcome:
          "Structured programme improved consistency of professional development, reduced time-to-competence and provided a scalable learning infrastructure for the organisation.",
        significance:
          "Illustrated how formalising informal workplace learning through structured curriculum design improves both individual development and organisational capability.",
      },
      {
        title: "Digital Learning Module Development",
        sector: "Professional learning organisation",
        challenge:
          "A professional learning organisation needed a series of digital learning modules to support continuing professional development across a diverse practitioner audience.",
        role:
          "Designed and developed self-contained digital learning modules aligned to professional competency frameworks, including embedded formative assessment and reflective activities.",
        methods: ["Learning Design", "Digital Content Development", "Formative Assessment Design", "Professional Competency Mapping", "Instructional Sequencing"],
        delivery:
          "Iterative development with practitioner review and pilot testing at each stage. Accessibility requirements were incorporated throughout the development process.",
        outcome:
          "Digital module suite supported flexible CPD delivery, improved practitioner engagement and aligned professional learning to recognised competency standards.",
        significance:
          "Demonstrated how CPD module design should be anchored in competency evidence, not topic delivery, to create lasting professional development impact.",
      },
      {
        title: "Assessment-Aligned Curriculum Design",
        sector: "Education provider",
        challenge:
          "An education provider identified misalignment between its taught curriculum and the assessment requirements learners faced, contributing to underperformance and learner anxiety.",
        role:
          "Conducted curriculum and assessment mapping analysis and redesigned learning sequences to ensure coherent alignment between teaching, activities and assessment demands.",
        methods: ["Curriculum Mapping", "Constructive Alignment", "Assessment Design", "Learning Outcome Sequencing", "Formative Activity Design", "Staff Development Guidance"],
        delivery:
          "Programme review phase preceded redesign. Staff development sessions supported implementation of the redesigned curriculum across delivery teams.",
        outcome:
          "Realigned curriculum improved learner confidence and assessment performance by ensuring teaching explicitly prepared learners for the cognitive demands of assessment.",
        significance:
          "Reinforced how constructive alignment is not a compliance exercise but a pedagogical necessity for equitable and effective learning.",
      },
    ],
  },
  {
    slug: "digital-curriculum-delivery",
    title: "Digital Curriculum Delivery",
    iconPath:
      "M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5",
    summary:
      "Delivery of digital, blended and technology supported learning programmes for professional, vocational and workforce development contexts.",
    caseStudies: [
      {
        title: "Online Blended Learning Programme Delivery",
        sector: "Education provider",
        challenge:
          "An education provider transitioning to blended delivery needed to maintain academic quality and learner engagement while serving a geographically dispersed cohort with varying levels of digital confidence.",
        role:
          "Designed and delivered a blended learning programme, adapting content and facilitation strategies to support digital engagement across diverse learner profiles.",
        methods: ["Blended Learning Facilitation", "Digital Platform Delivery", "Formative Feedback", "Learner Engagement Strategies", "Accessibility Adaptations"],
        delivery:
          "Weekly structured online sessions supported by asynchronous resources. Ongoing formative assessment informed real-time curriculum adaptation throughout delivery.",
        outcome:
          "Programme achieved high completion rates and positive learner satisfaction, demonstrating that blended delivery preserves learning quality when pedagogy drives design.",
        significance:
          "Illustrated how effective online facilitation requires active adaptation to learner needs, not simply digitising face-to-face content.",
      },
      {
        title: "Professional Workforce Development Delivery",
        sector: "Workforce development organisation",
        challenge:
          "A workforce development organisation needed to deliver structured learning for professionals in technical and leadership roles, requiring facilitation expertise adapted to experienced adult learners.",
        role:
          "Delivered professional development sessions using applied learning approaches, case-based discussion and structured reflective practice.",
        methods: ["Professional Learning Facilitation", "Socratic Questioning", "Case-Based Learning", "Reflective Practice", "Formative Assessment", "Coaching-Informed Delivery"],
        delivery:
          "Series of modular delivery sessions. Learner experience was continuously monitored and facilitation approaches were adapted in response to group dynamics and feedback.",
        outcome:
          "High learner engagement and positive outcome progression. Participants reported increased confidence and practical application of learning in their professional contexts.",
        significance:
          "Demonstrated how professional development delivery requires pedagogical agility and a practitioner-scholar stance, not simply subject expertise.",
      },
      {
        title: "Technology-Supported Apprenticeship Learning",
        sector: "Apprenticeship provider",
        challenge:
          "An apprenticeship provider needed to deliver structured off-the-job learning using digital platforms while maintaining the contextual relevance and practical grounding apprenticeship frameworks require.",
        role:
          "Delivered digitally mediated apprenticeship learning sessions, integrating scenario-based activities, employer context and formative review to maintain learning quality.",
        methods: ["Digital Facilitation", "Scenario-Based Learning", "Evidence Portfolio Coaching", "Off-the-Job Learning Design", "Apprenticeship Standards Contextualisation"],
        delivery:
          "Regular digital learning sessions aligned to apprenticeship delivery cycles. Employer liaison maintained contextual grounding throughout the programme.",
        outcome:
          "Apprentices demonstrated strong evidence of knowledge and skills development, with completion and EPA progression rates above sector benchmarks.",
        significance:
          "Reinforced that apprenticeship digital delivery requires deep familiarity with occupational standards and employer expectations, not just digital facilitation skills.",
      },
      {
        title: "Capability Development Workshops for Digital Teams",
        sector: "Technology organisation",
        challenge:
          "A technology organisation needed to upskill its operational teams in data literacy, analytical thinking and digital tool proficiency to support a broader transformation agenda.",
        role:
          "Designed and delivered a series of capability development workshops, translating complex technical content into accessible, practically grounded learning experiences.",
        methods: ["Workshop Facilitation", "Instructional Design", "Data Literacy Curriculum", "Applied Learning Activities", "Formative Reflection"],
        delivery:
          "Multi-session workshop series delivered across the organisation. Applied activities contextualised learning within team-specific operational challenges.",
        outcome:
          "Participants demonstrated measurable improvements in data literacy and digital tool confidence, with several teams embedding new practices into regular operations.",
        significance:
          "Illustrated how workforce capability development succeeds when technical learning is situated in real operational challenges rather than abstract skill development.",
      },
    ],
  },
  {
    slug: "internal-quality-assurance",
    title: "Internal Quality Assurance",
    iconPath:
      "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
    summary:
      "Quality assurance work involving assessment review, standardisation, feedback quality, compliance checks and evidence based improvement.",
    caseStudies: [
      {
        title: "IQA System Design and Implementation",
        sector: "Training organisation",
        challenge:
          "A training organisation lacked a structured internal quality assurance system, creating inconsistency in assessment practice, feedback quality and compliance with awarding organisation requirements.",
        role:
          "Designed and implemented a formal IQA system including sampling strategies, observation frameworks and assessor feedback processes.",
        methods: ["IQA Framework Design", "Sampling Strategy", "Observation Scheduling", "Standardisation Activities", "Feedback Design", "Compliance Documentation"],
        delivery:
          "System implemented through structured stakeholder engagement with assessors and programme managers. IQA calendar established aligned to programme delivery cycles.",
        outcome:
          "Formal IQA system improved assessment consistency, raised feedback quality and established clear compliance evidence for regulatory review.",
        significance:
          "Demonstrated how IQA is most effective when designed as an integrated quality system rather than a compliance response.",
      },
      {
        title: "Assessment Standardisation Programme",
        sector: "Education provider",
        challenge:
          "An education provider identified inconsistent assessment decisions across its delivery team, risking learner equity and compliance with awarding organisation requirements.",
        role:
          "Designed and led a standardisation programme including benchmark review, assessor calibration sessions and guidance documentation.",
        methods: ["Assessment Standardisation", "Benchmarking", "Assessor Calibration", "Feedback Review", "Quality Documentation", "Professional Dialogue Facilitation"],
        delivery:
          "Series of structured standardisation sessions. Benchmark portfolios established as reference points for ongoing assessor alignment across the programme.",
        outcome:
          "Assessment consistency improved significantly. Assessors reported increased confidence and clearer understanding of grade boundary expectations.",
        significance:
          "Reinforced how standardisation is a professional development activity as much as a compliance requirement.",
      },
      {
        title: "Portfolio Evidence Quality Review",
        sector: "Apprenticeship provider",
        challenge:
          "An apprenticeship provider was experiencing inconsistency in the quality and sufficiency of learner evidence portfolios, affecting EPA gateway readiness and EPA outcomes.",
        role:
          "Conducted a structured review of learner portfolios, provided targeted assessor feedback and designed guidance to improve evidence quality across the cohort.",
        methods: ["Portfolio Review", "Evidence Sufficiency Mapping", "KSB Analysis", "Assessor Feedback", "EPA Readiness Criteria", "Guidance Documentation"],
        delivery:
          "Cohort-level portfolio review preceding EPA gateway decisions. Individual feedback provided to assessors and learners with clear improvement direction.",
        outcome:
          "Improved evidence quality across portfolios and measurably higher EPA gateway pass rates in subsequent cohorts.",
        significance:
          "Illustrated how rigorous portfolio review, when paired with clear assessor guidance, directly improves EPA outcomes without increasing learner burden.",
      },
      {
        title: "Regulatory Compliance Monitoring Framework",
        sector: "Vocational training centre",
        challenge:
          "A vocational training centre facing a regulatory review needed to rapidly assess its compliance position across assessment, quality assurance and documentation standards.",
        role:
          "Conducted a comprehensive compliance audit, identified gaps and designed a structured improvement plan aligned to regulatory requirements.",
        methods: ["Compliance Audit", "Gap Analysis", "Risk Assessment", "Improvement Planning", "Documentation Review", "Regulatory Framework Mapping"],
        delivery:
          "Rapid audit completed within a structured timeframe. Improvement plan prioritised actions by risk and regulatory urgency to ensure timely remediation.",
        outcome:
          "Centre successfully addressed compliance gaps ahead of regulatory review. Improved documentation practices were embedded in ongoing operations.",
        significance:
          "Demonstrated how proactive compliance management is both a regulatory necessity and a strategic opportunity to strengthen operational quality.",
      },
      {
        title: "Assessor Feedback Quality Improvement",
        sector: "Training organisation",
        challenge:
          "A training organisation identified that assessor feedback was not consistently meeting quality standards — too brief, generic or insufficiently developmental to support learner improvement.",
        role:
          "Designed and delivered a feedback quality improvement programme, including training, benchmarking and ongoing monitoring.",
        methods: ["Feedback Quality Analysis", "Professional Standards Benchmarking", "Assessor Training", "Peer Review", "Feedback Framework Design", "Monitoring System"],
        delivery:
          "Development programme delivered across the assessor team with follow-up monitoring embedded into the IQA cycle.",
        outcome:
          "Measurable improvement in feedback quality across all programme areas, with assessors demonstrating stronger understanding of developmental feedback principles.",
        significance:
          "Reinforced how assessor feedback quality is a learner equity issue as well as a regulatory requirement.",
      },
    ],
  },
  {
    slug: "external-assessment",
    title: "External Assessment",
    iconPath:
      "M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75",
    summary:
      "Independent assessment and standards based evaluation work supporting qualification integrity, professional competence and assessment reliability.",
    caseStudies: [
      {
        title: "Independent Professional Qualifications Assessment",
        sector: "Professional qualifications body",
        challenge:
          "A professional qualifications body required independent assessors with verified subject expertise to conduct fair, consistent and standards-aligned assessments of practitioner portfolios.",
        role:
          "Conducted independent professional assessments, evaluating portfolio evidence against occupational standards and providing structured decisions with clear rationale.",
        methods: ["Standards-Based Assessment", "Portfolio Evaluation", "Professional Dialogue", "Assessment Decision Rationale", "Quality Documentation"],
        delivery:
          "Assessment conducted across structured windows. Decisions documented with full rationale aligned to awarding body requirements and quality assurance processes.",
        outcome:
          "Assessment decisions consistently met awarding body quality standards. Candidate feedback supported professional development alongside qualification outcomes.",
        significance:
          "Demonstrated how independent assessment requires rigorous standards literacy, professional integrity and the ability to distinguish capability from portfolio presentation.",
      },
      {
        title: "Apprenticeship End-Point Assessment",
        sector: "Apprenticeship provider",
        challenge:
          "An apprenticeship end-point assessment required independent evaluation across knowledge, skills and behaviour components, including professional discussion and portfolio review, with candidates from diverse occupational contexts.",
        role:
          "Conducted end-point assessment across EPA components, applying occupational standards consistently and providing evidence-based assessment decisions.",
        methods: ["EPA Delivery", "Professional Discussion Facilitation", "KSB Evaluation", "Standards-Based Grading", "Assessment Documentation"],
        delivery:
          "Delivered within awarding organisation requirements. Standardisation and moderation processes maintained assessment integrity across all candidates.",
        outcome:
          "Candidates received fair, evidence-based assessment decisions with clear developmental feedback. Consistency maintained across the assessment cohort.",
        significance:
          "Reinforced how EPA quality depends on assessor expertise in both occupational standards and professional assessment methodology.",
      },
      {
        title: "Vocational Standards Verification",
        sector: "Vocational awarding organisation",
        challenge:
          "A vocational awarding organisation required external verification of assessment practice across a network of approved centres, ensuring consistent application of qualification standards.",
        role:
          "Conducted external quality assurance visits, reviewed centre assessment practices and provided structured improvement feedback to centre IQA teams.",
        methods: ["External Verification", "Centre Assessment Review", "Sampling Strategy", "Standards Alignment Review", "Feedback Reporting", "Improvement Planning"],
        delivery:
          "Structured EQA visits conducted across delivery centres. Reports submitted to the awarding body with clear findings and recommended actions.",
        outcome:
          "Centres received targeted improvement guidance. Awarding body confidence in centre assessment practice was maintained and strengthened across the network.",
        significance:
          "Illustrated how external quality assurance is most valuable when it is developmental as well as evaluative.",
      },
      {
        title: "Professional Competence Evaluation",
        sector: "Education provider",
        challenge:
          "An education provider required independent competence evaluation of practitioners applying for professional recognition, requiring rigorous, evidence-informed assessment against professional standards.",
        role:
          "Conducted structured competence evaluation, reviewing evidence submissions and facilitating professional dialogue to assess practitioner capability against defined standards.",
        methods: ["Competence-Based Assessment", "Evidence Evaluation", "Professional Standards Mapping", "Structured Professional Dialogue", "Assessment Documentation"],
        delivery:
          "Evaluation conducted across structured review periods. Feedback provided to candidates with clear developmental direction for those not yet meeting full competence standards.",
        outcome:
          "Professional recognition decisions were robust, fair and consistently aligned to professional standards. Practitioners received useful developmental insight regardless of outcome.",
        significance:
          "Demonstrated how professional competence evaluation must balance rigour with developmental intent to serve both qualification integrity and professional growth.",
      },
    ],
  },
  {
    slug: "training-centre-setup",
    title: "Training Centre Setup",
    iconPath:
      "M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z",
    summary:
      "Projects involving the setup of training infrastructure, learning operations, assessment processes and digital delivery capability.",
    caseStudies: [
      {
        title: "Regional Training Centre Infrastructure Design",
        sector: "Regional training provider",
        challenge:
          "A regional training provider establishing a new training centre needed to design its operational infrastructure, quality systems, assessment environment and digital delivery capability from the ground up.",
        role:
          "Led training centre setup planning, including quality framework design, physical and digital environment specification and regulatory compliance preparation.",
        methods: ["Training Centre Planning", "Quality Framework Design", "Regulatory Mapping", "Digital Infrastructure Specification", "Policy Development", "Staffing Model Design"],
        delivery:
          "Phased setup plan developed across operational, quality and digital workstreams. Pre-registration preparation coordinated across regulatory and operational milestones.",
        outcome:
          "Training centre successfully established with clear quality systems, compliant assessment environments and functional digital delivery infrastructure.",
        significance:
          "Demonstrated how training centre setup is most effective when quality systems and regulatory compliance are built in from inception, not added later.",
      },
      {
        title: "Apprenticeship Delivery Infrastructure Setup",
        sector: "Apprenticeship provider",
        challenge:
          "An organisation seeking to become an apprenticeship provider needed to establish the full operational infrastructure required to deliver apprenticeship programmes compliantly and effectively.",
        role:
          "Designed the apprenticeship delivery infrastructure, including quality assurance systems, employer engagement processes, off-the-job learning frameworks and compliance documentation.",
        methods: ["Apprenticeship Delivery Planning", "ESFA Compliance", "Quality System Design", "Employer Engagement Frameworks", "OTJ Learning Design", "Staff Capability Planning"],
        delivery:
          "Structured setup programme aligned to ESFA registration requirements. Parallel workstreams covered quality, operations, employer partnerships and staff development.",
        outcome:
          "Provider established a compliant and operationally capable apprenticeship delivery infrastructure, achieving successful registration and initial programme delivery.",
        significance:
          "Reinforced how apprenticeship provider setup requires deep regulatory literacy combined with operational design expertise to be sustainable from day one.",
      },
      {
        title: "Digital Capability Centre Planning",
        sector: "Public sector training organisation",
        challenge:
          "A public sector organisation needed to establish a digital capability centre to support workforce upskilling across technical, analytical and digital domains.",
        role:
          "Led the strategic planning and design of the digital capability centre, including learning programme frameworks, technology infrastructure and staffing model.",
        methods: ["Capability Centre Design", "Needs Analysis", "Technology Infrastructure Planning", "Learning Programme Architecture", "Stakeholder Engagement", "Governance Design"],
        delivery:
          "Design phase followed by phased implementation. Pilot delivery validated the centre's learning model before full operational launch.",
        outcome:
          "Digital capability centre established a sustainable workforce upskilling infrastructure, supporting cross-departmental development across technical and analytical domains.",
        significance:
          "Illustrated how capability centre design must be grounded in workforce needs analysis rather than technology availability to create lasting organisational value.",
      },
      {
        title: "Assessment Quality and Compliance Infrastructure",
        sector: "Education provider",
        challenge:
          "An education provider expanding its qualification portfolio needed to establish robust assessment quality and compliance infrastructure to meet awarding organisation requirements.",
        role:
          "Designed assessment policies, quality assurance processes, IQA systems and compliance documentation aligned to awarding organisation standards.",
        methods: ["Assessment Policy Design", "IQA System Design", "Quality Framework Mapping", "Compliance Documentation", "Regulatory Alignment", "Staff Guidance Development"],
        delivery:
          "Assessment infrastructure designed in advance of programme delivery. Staff training and system implementation preceded first cohort enrolment.",
        outcome:
          "Assessment quality and compliance infrastructure successfully met awarding organisation requirements at first approval review.",
        significance:
          "Demonstrated how assessment infrastructure design is most effective when quality is built into process architecture from the outset, not retrofitted during delivery.",
      },
    ],
  },
];

export function getDomainBySlug(slug: string): ProjectDomain | undefined {
  return projectDomains.find((d) => d.slug === slug);
}
