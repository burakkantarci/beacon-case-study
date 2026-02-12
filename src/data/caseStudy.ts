export type FlowTrack = {
  title: string
  owner: string
  status?: 'pain' | 'improved'
}

export type Initiative = {
  title: string
  context: string
  numberedFlow?: string[]
  supplementaryImages: {
    title: string
    caption: string
    image?: string
  }[]
  discover: string[]
  artifactSlots: {
    discover: string
    define: string
    develop: string
    deliver: string
  }
  tradeoff: {
    decision: string
    alternatives: string
    why: string
  }
  defineFlow: FlowTrack[]
  develop: string[]
  deliver: string[]
  outcomes: string[]
  externalLink?: {
    label: string
    url: string
  }
}

export const executiveSummary = {
  problem:
    'Supply chain teams were making operational decisions using outdated screenshots, buried email threads, and spreadsheets that drifted out of sync within hours with no shared source of truth between roles.',
  role: 'Senior Product Designer leading AI-enabled discovery, flow design, rapid prototyping, interaction direction, and developer handoff.',
  shipped:
    'Designed and shipped four connected initiatives — each solving a specific breakpoint in the collaboration loop: Live Boards replaced screenshot-and-email coordination; Table View used AI to keep ETA data current; Order Cards connected planning decisions to shipment execution; role-based Onboarding cut the path to first meaningful action.',
  impactSignals: [
    'Helped steer a strategic shift from fragmented visibility tooling toward a collaboration-first product direction.',
    'Brought AI-coded prototyping into the design workflow to validate ideas faster and cut down on high-fidelity dead ends.',
    'Improved engineering handoffs by shipping behavior specs that covered edge states explicitly.',
  ],
} as const

export const initiatives: Initiative[] = [
  {
    title: 'Live Boards',
    context:
      'Logistics managers were exporting screenshots and forwarding long email threads just to align on a shipment group.',
    numberedFlow: [
      'Import the latest tracking spreadsheet so Beacon has current shipment records.',
      'Apply and save a meaningful filter set to create a focused operational view.',
      'Generate a shareable Live Board link so stakeholders can collaborate on the same real-time data.',
    ],
    supplementaryImages: [
      {
        title: 'Live Board example',
        caption: 'A clear information hierarchy starting with the contextual information and going down to the details. Main collaboration actions like Share, Comment are designed to be one click for the team.',
        image: 'https://burakkantarci.com/images/beacon/order-boards-3.png',
      },
      {
        title: 'Widgets for the Live Board',
        caption: 'In addition to the main cards, collaboration widgets are designed to be familiar and easy to use.',
        image: './live-board.png',

      },
      {
        title: 'Comment interaction details',
        caption: 'Commenting for a specific shipment designed to be easier than the traditional screenshot + email loops. This designed also enabled users to have discussion around the shipment in the context of the board.',
        image: './live-board-commentexpanded.png',

      },
      {
        title: 'Handoff snapshot',
        caption: 'Developer-facing behavior specs for primary and edge states.',
        image: './live-board-handover.png',

      },
    ],
    artifactSlots: {
      discover: 'Sanitized call-notes snapshot showing repeated "who has latest view?" pain.',
      define: 'As-is journey map with highlighted handoff failures between manager and forwarder.',
      develop: 'Three concept branches with the rejected option annotated.',
      deliver: 'Handoff frame with comment-state specs and edge-state behavior.',
    },
    tradeoff: {
      decision: 'Prioritized in-context commenting beside shipment rows over richer global discussion threads.',
      alternatives: 'Standalone threaded panel and separate chat-like surface.',
      why: 'Keeping conversation attached to shipment context reduced navigation and ambiguity for ops users.',
    },
    discover: [
      'Reviewed sales calls to map language buyers used when asking for shared visibility.',
      'Analyzed support tickets showing confusion around "which view is the latest".',
      'Captured examples of spreadsheet + email workflows from customer onboarding.',
    ],
    defineFlow: [
      { title: 'Apply shipment filters', owner: 'Logistics Manager', status: 'pain' },
      { title: 'Take screenshot + email context', owner: 'Logistics Manager', status: 'pain' },
      { title: 'Open app separately and reconcile', owner: 'Forwarder', status: 'pain' },
      { title: 'Ask follow-up via email', owner: 'Both', status: 'pain' },
      { title: 'Save as Live Board + share URL', owner: 'Logistics Manager', status: 'improved' },
      { title: 'Open shared board with live comments', owner: 'Forwarder', status: 'improved' },
    ],
    develop: [
      'Explored three board layouts: metadata-heavy cards, minimal status rows, and context-first cards with progressive disclosure. Rejected the metadata-heavy approach after prototype testing showed users were overwhelmed before reaching the actions they came for.',
      'Mapped a to-be flow with fewer handoffs and clearer ownership.',
      'Prototyped in Figma to validate if commenting next to shipments reduced context switching.',
    ],
    deliver: [
      'Shipped a board title and share-first header to make intent immediately clear.',
      'Added comment states to preserve historical conversations for archived shipments.',
      'Delivered specs and Loom walkthroughs to reduce engineering ambiguity.',
    ],
    outcomes: [
      'Complete strategic shift in the company\'s product direction.',
      'A first step towards to build a collaborative platform for the supply chain. As a designer, it was a great opportunity to understand how collaboration works in the supply chain.',
      'his initiative sharpened my multi-persona design instinct: a logistics manager checking ETAs, a procurement lead verifying order readiness, and a freight forwarder confirming booking details all needed the same board but different entry points into it.',
    ],
  },
  {
    title: 'Table view',
    context:
      'Logistics teams were working from static spreadsheets that became outdated quickly, forcing manual ETA checks and repeated status-chasing across stakeholders.',
    numberedFlow: [
      'Import shipment data into Beacon to initialize a live table view.',
      'Map key columns so AI can enrich tracking states and estimate ETAs automatically.',
      'Save filtered table configurations as shareable views for role-specific workflows.',
      'Collaborate in a single view with comments and updates tied to the same records.',
      'Use shared, AI-refreshed views to reduce spreadsheet exports and status-chasing loops.',
    ],
    supplementaryImages: [
      {
        title: 'A live prototype',
        caption: 'I built this working prototype using AI-generated code — no Figma files until we validated the product direction. The live prototype let leadership, PM, and engineering interact with real data states (stale ETAs, missing carriers) rather than interpret static mockups.',
        image: './beacont-anim.gif',
      },

    ],
    artifactSlots: {
      discover: 'Workflow audit showing where spreadsheet users lost trust in stale ETAs and duplicated updates.',
      define: 'Strategic narrative map connecting AI ETA automation with cross-team collaboration goals.',
      develop: 'Vibe-coded prototype branches testing table interactions, filters, and shared-view behaviors.',
      deliver: 'Delivery-ready specs for AI ETA states, saved views, and collaboration edge cases.',
    },
    tradeoff: {
      decision: 'Prioritized a familiar spreadsheet-like table interaction model with embedded AI ETA outputs and lightweight collaboration actions.',
      alternatives: 'A heavier workflow builder and a net-new interface metaphor unfamiliar to spreadsheet-native users.',
      why: 'The familiar model reduced adoption risk while still introducing differentiated value through automation and shareable views.',
    },
    discover: [
      'Mapped where manual spreadsheet flows broke down, which was stale ETAs and unclear ownership. This became the primary constraints shaping the column structure and AI-refresh logic.',
      'Collected leadership, sales, and product inputs to define what strategic differentiation must be visible in demos and daily use.',
      'Benchmarked table-centric collaboration products to identify which patterns to adopt vs avoid.',
    ],
    defineFlow: [
      { title: 'Export spreadsheet and manually update ETA assumptions', owner: 'Operations', status: 'pain' },
      { title: 'Share static versions by email and chat', owner: 'Cross-functional team', status: 'pain' },
      { title: 'Rebuild context in each stakeholder sync', owner: 'Leadership + Product + Sales', status: 'pain' },
      { title: 'Import once into Beacon table view', owner: 'Operations', status: 'improved' },
      { title: 'Auto-enrich ETA with AI signals', owner: 'Beacon platform', status: 'improved' },
      { title: 'Share a single live view for decisions', owner: 'All stakeholders', status: 'improved' },
    ],
    develop: [
      'AI-coded quick prototypes replaced heavy Figma exploration.',
      'Tested ETA states and shared-view behavior in rapid feedback loops.',
    ],
    deliver: [
      'Shipped concise specs for AI ETA updates and stale-data handling.',
      'Used short prototype walkthroughs to align leadership, PM, sales, and engineering.',
    ],
    outcomes: [
      'Beacon positioned a clear strategic difference from generic spreadsheets in both product story and demos.',
      'AI prototyping compressed my exploration phase from days to hours. More importantly, it changed what I could validate — edge states and data freshness that are hard to feel in a Figma file.',
    ],
    externalLink: {
      label: 'Open interactive table view',
      url: 'https://shipment-table.vercel.app/',
    },
  },
  {
    title: 'Order Cards',
    context:
      'Order information often entered Beacon too late, creating weak linkage between commercial planning and shipment execution. Order Cards established a single source of truth that connected order readiness directly to downstream shipment tracking and decision-making.',
    numberedFlow: [
      'Create an order at the planning stage with essential commercial and operational fields.',
      'Link the order card to shipments so execution readiness is explicit.',
      'Share the Live Board with procurement, sales, and logistics for synchronized decisions.',
      'Transition into shipment execution using the same order context as source of truth.',
    ],
    supplementaryImages: [
      {
        title: 'Order card anatomy',
        caption: 'Designed to be a single source of truth for the order lifecycle. Supplementary information is available when needed.',
        image: 'https://burakkantarci.com/images/beacon/order-cards-1.png',
      },
      {
        title: 'Adding inline data',
        caption: 'Essential fields are editable to make the collaboration more efficient.',
        image: './order-card-1.png',

      },
      {
        title: 'Handoff snapshot',
        caption: 'Created a handoff snapshot to help the team to understand the order context and the card interactions.',
        image: './order-card-2.png',
        

      },
      {
        title: 'Shipment connection',
        caption: 'To keep the card as a single source of truth, the shipment connection is designed to be a single click.',
        image: './order-card-3.png',

      },
    ],
    artifactSlots: {
      discover: 'Audit of order handoff gaps between procurement and logistics in current-state workflows.',
      define: 'Cross-team journey map showing where procurement and sales were excluded from early visibility.',
      develop: 'Card model explorations comparing dense vs progressive disclosure layouts.',
      deliver: 'Final order-card spec with ownership, status, and dependency states for engineering.',
    },
    tradeoff: {
      decision:
        'Used a concise card model with progressive detail, optimized for linking order state to shipment execution milestones.',
      alternatives: 'Spreadsheet-like dense table embedded directly in the main operations view.',
      why:
        'Execution teams needed immediate clarity on order readiness before shipment actions; deeper detail remained available without slowing operational decisions.',
    },
    discover: [
      'Mapped how an order lifecycle is and how it is connected to the shipment lifecycle.',
      'Conducte user interviews to understand the pain points of the users and the current workflows.',
    ],
    defineFlow: [
      { title: 'Sales captures order context in external docs', owner: 'Sales', status: 'pain' },
      { title: 'Procurement confirms details in separate thread', owner: 'Procurement', status: 'pain' },
      { title: 'Logistics re-collects order information later', owner: 'Logistics', status: 'pain' },
      { title: 'Order Cards created in Beacon at deal/plan stage', owner: 'Sales + Procurement', status: 'improved' },
      { title: 'Logistics starts with shared order truth', owner: 'Logistics', status: 'improved' },
      { title: 'Cross-team decisions tracked in one operational context', owner: 'All stakeholders', status: 'improved' },
    ],
    develop: [
      'Tested card layouts to keep fields easy to scan.',
      'Tried linking patterns so teams could connect orders to shipments quickly.',
    ],
    deliver: [
      'Standardized status labels so teams interpreted updates the same way.',
    ],
    outcomes: [
      'The direct product-metric impact was modest. The bigger payoff was strategic: Order Cards gave the sales team a concrete collaboration story for procurement-focused buyers, opening a new upsell path.',
      'Designing the order-to-shipment link forced me to advocate for new interaction patterns — inline editing and single-click connections — that the team hadn\'t shipped before.',
      'This initiative was where I most improved my handoff practice: annotated snapshots with explicit edge-state specs replaced the verbal walkthroughs we\'d been relying on.',
    ],
  },
  {
    title: 'New Onboarding',
    context:
      'New users entered Beacon through a generic setup path that delayed first-value moments. The new onboarding experience personalized setup by role and accelerated time-to-first-meaningful-action in real supply chain workflows.',
    numberedFlow: [
      'Sign up and confirm profile to initialize the onboarding context.',
      'Select role so Beacon tailors setup tasks to relevant responsibilities.',
      'Complete role-specific essentials.',
      'Import initial operational data (including tracking spreadsheet) to activate live boards.',
      'Reach first meaningful action in a live supply chain collaboration.',
    ],
    supplementaryImages: [
      {
        title: 'Profile Profiling',
        caption: 'Role selection: we chose to ask role because it determined which setup tasks mattered — a procurement lead and a logistics coordinator have different first-value actions.',
        image: 'https://burakkantarci.com/images/beacon/onb-profiling.png',
      },
      {
        title: 'Importing data',
        caption: 'A miniature spreadsheet within onboarding — we tested this against a drag-and-drop uploader and found that users who saw their data in a table format committed to the next step at a higher rate.',
        image: 'https://burakkantarci.com/images/beacon/onb-add-data.png',
      },
      {
        title: 'Animated rewarding',
        caption: 'Milestone animations weren\'t decorative — they marked state transitions (sign-up complete → personalization complete → tracking live) to give users a clear sense of progress.',
        image: 'https://burakkantarci.com/images/beacon/rive-lottie-animations.gif',
      },
      {
        title: 'Progressive guidance patterns',
        caption: 'UI states for prompts, milestone progress.',
        image: './progress-bar.png',
      },
      {
        title: 'Product Guidance',
        caption: 'Contextual guidance surfaces at the moment of need, not in a static help center. Each prompt maps to the next action the user\'s role requires.',
        image: './guidance.png',
      },
    ],
    artifactSlots: {
      discover: 'Funnel notes highlighting friction between account creation and first successful operational action.',
      define: 'Role-specific onboarding map with milestone steps for logistics, procurement, and sales users.',
      develop: 'Prototype branches for adaptive onboarding paths and setup prompts.',
      deliver: 'Final onboarding sequence specs with role logic, progress states, and fallback guidance.',
    },
    tradeoff: {
      decision: 'Implemented role-tailored onboarding paths with guided choices rather than one universal wizard.',
      alternatives: 'Single standardized onboarding journey for all users.',
      why:
        'Different roles reached value through different actions; personalization removed low-value steps and increased execution speed to the first meaningful outcome.',
    },
    discover: [
      'Analyzed drop-off points between signup and first meaningful workflow completion with execution-time focus.',
      'Interviewed sales and customer success to understand how they onboarded new customers.',
      'Captured where users completed setup steps but still could not execute core operational tasks.',
    ],
    defineFlow: [
      { title: 'User signs up and sees generic setup path', owner: 'All new users', status: 'pain' },
      { title: 'User completes irrelevant steps before value', owner: 'All new users', status: 'pain' },
      { title: 'User delays teammate invites and data setup', owner: 'All new users', status: 'pain' },
      { title: 'Role detected and onboarding path tailored', owner: 'Beacon onboarding', status: 'improved' },
      { title: 'User completes role-relevant setup quickly', owner: 'New user', status: 'improved' },
      { title: 'User reaches first meaningful supply chain workflow', owner: 'New user + team', status: 'improved' },
    ],
    develop: [
      'Designed role-driven onboarding with explicit progress states.',
      'Prioritized only the setup tasks that unlocked first meaningful actions.',
      'Refined sequence logic and copy to reduce time spent on non-critical steps.',
    ],
    deliver: [
      'Shipped personalized onboarding paths connected to core Live Boards.',
    ],
    outcomes: [
      'Time to first meaningful action decreased after the redesign, measured as the gap between account creation and the first live-board interaction.',
      'Early setup completion (including invites and core configuration) improved',
      'Team adopted A/B testing to measure the impact of the onboarding redesign.',
    ],
  },
]

export const processPhases = [
  {
    phase: 'Discover',
    mode: 'Diverge',
    artifacts: [
      'Sales & CS inputs',
      'Hotjar session notes',
      'Email/spreadsheet audit',
      'Leadership inputs',
      'PM brainstormings',
      'Competitor analysis',
      'Market analysis',
    ],
  },
  {
    phase: 'Define',
    mode: 'Converge',
    artifacts: [
      'Miro synthesis boards',
      'As-is user journeys',
      'Prioritized opportunity map',
      'Pulse checking with engineers and key stakeholders',
      'AI-generated prototypes',
    ],
  },
  {
    phase: 'Develop',
    mode: 'Diverge',
    artifacts: [
      'Wireframe explorations',
      'Concept Figma files', 
      'To-be user flows',
      'Engineering feedback',
      'User testing (if applicable)',
      'Design system contributions',
    ],
  },
  {
    phase: 'Deliver',
    mode: 'Converge',
    artifacts: ['Hi-fi specs', 'Handover Looms', 'Post-launch iteration notes'],
  },
] as const
