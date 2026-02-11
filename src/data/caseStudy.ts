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
    'Beacon needed a strategic shift from static spreadsheets to AI-powered collaborative table views with automated ETA intelligence and shareable execution context.',
  role: 'Senior Product Designer driving strategy-to-shipping alignment with leadership, product, sales, and engineering through rapid vibe-coded prototypes and focused UX direction.',
  shipped:
    'Live Boards, Table View, Order Cards, and New Onboarding: shipped to move teams from manual spreadsheet coordination to AI-assisted collaboration, faster ETA-driven decisions, and shareable operational views.',
  impactSignals: [
    'Cross-functional teams aligned faster on roadmap and tradeoffs through interactive prototype reviews.',
    'AI ETA and shared table-view workflows reduced manual update loops in day-to-day operations.',
    'Lean design artifacts with rapid prototyping reduced Figma overhead while preserving delivery speed.',
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
        title: 'As-is collaboration workflow',
        caption: 'Sanitized map of screenshot + email loops before Live Boards.',
        image: 'https://burakkantarci.com/images/beacon/order-boards-3.png',
      },
      {
        title: 'Concept evolution',
        caption: 'Wireframe-to-hi-fi progression with rejected options annotated.',
      },
      {
        title: 'Comment interaction details',
        caption: 'Final interaction states for in-context commenting and archived rows.',
      },
      {
        title: 'Handoff snapshot',
        caption: 'Developer-facing behavior specs for primary and edge states.',
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
      'Explored three board architectures and rejected one that overloaded metadata upfront.',
      'Mapped a to-be flow with fewer handoffs and clearer ownership.',
      'Prototyped in Figma to validate if commenting next to shipments reduced context switching.',
    ],
    deliver: [
      'Shipped a board title and share-first header to make intent immediately clear.',
      'Added comment states to preserve historical conversations for archived shipments.',
      'Delivered specs and Loom walkthroughs to reduce engineering ambiguity.',
    ],
    outcomes: [
      'Directional impact: customer feedback indicated fewer screenshot-driven update loops.',
      'Directional impact: support conversations shifted from "where is context?" to decision-level questions.',
      'Directional impact: collaboration narrative became stronger in Beacon sales positioning.',
    ],
  },
  {
    title: 'Table view',
    context:
      'Beacon needed a collaboration-first table view that felt familiar like a spreadsheet, but outperformed it with AI-powered ETA automation and shareable, always-current operational views.',
    numberedFlow: [
      'Import operational shipment data into Beacon to initialize a live table view.',
      'Map key columns so AI can enrich tracking states and estimate ETAs automatically.',
      'Save filtered table configurations as shareable views for role-specific workflows.',
      'Collaborate in a single view with comments and updates tied to the same records.',
      'Use shared, AI-refreshed views to reduce spreadsheet exports and status-chasing loops.',
    ],
    supplementaryImages: [
      {
        title: 'Spreadsheet-to-table transition',
        caption: 'Journey mapping how teams moved from manual spreadsheets to collaborative table workflows.',
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
      'Mapped where manual spreadsheet flows failed to keep ETA and owner context current.',
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
      'Vibe-coded interaction prototypes to test strategy and UX direction directly with cross-functional partners.',
      'Minimized heavy Figma production and focused on rapid, decision-ready artifacts.',
      'Iterated table layout, AI ETA confidence states, and sharing affordances in short feedback loops.',
    ],
    deliver: [
      'Delivered clear behavior specs for AI ETA updates, stale-data states, and saved-view permissions.',
      'Aligned leadership, PM, sales, and engineering with prototype walkthroughs and concise rationale docs.',
      'Shipped a table-view foundation that could scale into broader AI collaboration workflows.',
    ],
    outcomes: [
      'Directional impact: Beacon positioned a clear strategic difference from generic spreadsheets in both product story and demos.',
      'Directional impact: teams spent less time reconciling conflicting versions and more time acting on shared, current views.',
      'Directional impact: rapid prototyping shortened alignment cycles while keeping implementation momentum high.',
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
      'Create an order card at planning stage with essential commercial and operational fields.',
      'Link the order card to shipment planning milestones so execution readiness is explicit.',
      'Update status and dependencies in one place as cross-functional inputs evolve.',
      'Share the card with procurement, sales, and logistics for synchronized decisions.',
      'Transition into shipment execution using the same order context as source of truth.',
    ],
    supplementaryImages: [
      {
        title: 'Order-to-shipment linkage model',
        caption: 'Flow diagram connecting order readiness to shipment execution triggers.',
        image: 'https://burakkantarci.com/images/beacon/order-cards-1.png',
      },
      {
        title: 'Card model variants',
        caption: 'Exploration of dense vs progressive-disclosure card structures.',
        image: './order-card-1.png',

      },
      {
        title: 'Status language framework',
        caption: 'Shared terminology map for sales, procurement, and logistics users.',
        image: './order-card-2.png',
        

      },
      {
        title: 'Execution handoff blueprint',
        caption: 'Spec frames for blocked, changed, and relinked order states.',
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
      'Mapped where order context broke before shipment planning began, especially between commercial and operations teams.',
      'Reviewed planning calls where shipment decisions were blocked by missing order readiness signals.',
      'Identified the minimal order metadata needed to unblock reliable shipment execution.',
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
      'Tested card hierarchy to prioritize fields directly affecting shipment execution readiness.',
      'Explored interaction patterns that made order-to-shipment linking explicit and actionable.',
      'Validated whether the proposed model reduced decision latency during cross-functional reviews.',
    ],
    deliver: [
      'Shipped order cards as a unifying object connecting order readiness to shipment-level actions.',
      'Introduced consistent status language to reduce interpretation mismatch across teams.',
      'Created detailed handoff specs clarifying behavior for new, changed, blocked, and relinked orders.',
    ],
    outcomes: [
      'Anonymized range impact: order-to-shipment alignment steps were completed around 20-30% faster in pilot workflows.',
      'Anonymized range impact: repeated context handoff cycles before execution dropped by roughly 15-25%.',
      'Anonymized range impact: earlier cross-team alignment improved readiness confidence by an estimated 20%+ in planning reviews.',
    ],
  },
  {
    title: 'New Onboarding',
    context:
      'New users entered Beacon through a generic setup path that delayed first-value moments. The new onboarding experience personalized setup by role and accelerated time-to-first-meaningful-action in real supply chain workflows.',
    numberedFlow: [
      'Sign up and confirm workspace profile to initialize the onboarding context.',
      'Select role so Beacon tailors setup tasks to relevant responsibilities.',
      'Complete role-specific essentials such as invites, tracking setup, and core preferences.',
      'Import initial operational data (including tracking spreadsheet) to activate real workflows.',
      'Reach first meaningful action with teammates in a live supply chain collaboration flow.',
    ],
    supplementaryImages: [
      {
        title: 'Profile Profiling',
        caption: 'Sanitized drop-off view from signup to first meaningful workflow action.',
        image: 'https://burakkantarci.com/images/beacon/onb-profiling.png',
      },
      {
        title: 'Importing data',
        caption: 'Mini spreadsheet view to make them familiar with the platform.',
        image: 'https://burakkantarci.com/images/beacon/onb-add-data.png',
      },
      {
        title: 'Animated rewarding',
        caption: 'Rewarding animations to make the onboarding more engaging.',
        image: 'https://burakkantarci.com/images/beacon/rive-lottie-animations.gif',
      },
      {
        title: 'Progressive guidance patterns',
        caption: 'UI states for prompts, milestone progress, and revisit behavior.',
        image: './progress-bar.png',
      },
      {
        title: 'Product Guidance',
        caption: 'Product guidances to help them understand the platform and how to use it.',
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
      'Interviewed teams to isolate role-specific blockers that delayed first-value actions.',
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
      'Designed role-driven onboarding with explicit progress states and predictable branch behavior.',
      'Prioritized only the setup tasks that unlocked first meaningful supply-chain actions.',
      'Refined sequence logic and copy to reduce time spent on non-critical onboarding steps.',
    ],
    deliver: [
      'Shipped personalized onboarding paths connected to core collaboration workflows.',
      'Added contextual prompts for team invites, data setup, and first workflow completion.',
      'Documented state logic and edge rules for engineers to ensure predictable execution across paths.',
    ],
    outcomes: [
      'Time to first meaningful action improved by after onboarding redesign.',
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
