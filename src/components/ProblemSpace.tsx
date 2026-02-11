import Reveal from "./Reveal";
import SupplementaryImageCard from "./SupplementaryImageCard";

const operatingFriction = [
  "Shipment context lived in static spreadsheets and message threads that drifted out of sync quickly.",
  "ETA expectations were often recalculated manually, creating uncertainty in downstream decisions.",
  "Teams repeatedly rebuilt context because shared views were not live, consistent, or collaboration-ready.",
];

const painPoints = [
  {
    title: "Fragmented truth",
    text: "Different stakeholders worked from different spreadsheet versions, causing rework and conflicting decisions.",
  },
  {
    title: "Slow collaboration loops",
    text: "Clarifications depended on screenshot-and-email loops rather than a shared, live workspace.",
  },
  {
    title: "Low confidence handoffs",
    text: "Without automated ETA and shared context, handoffs relied on assumptions instead of trusted data.",
  },
];

export default function ProblemSpace() {
  return (
    <section className="container-shell mt-16 md:mt-24">
      <Reveal>
        <p className="section-eyebrow">Problem Space</p>
        <h2 className="section-lede max-w-4xl">
          The core gap was not data collection. It was turning spreadsheet-heavy
          operations into AI-assisted, shared decision workflows.
        </h2>
      </Reveal>

      <Reveal>
        <div className="grid gap-4 md:grid-cols-2 mt-4">
          <SupplementaryImageCard
            className="w-full"
            image="./spreadsheets.png"
          />
          <SupplementaryImageCard
            className="w-full"
            image="./emailchains.png"
          />
        </div>
      </Reveal>

      <Reveal className="panel">
        <h3 className="text-2xl">Where collaboration broke down</h3>
        <ul className="mt-4 space-y-2 text-sm text-fog/85 md:text-base">
          {operatingFriction.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-rust" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Reveal>

      <div className="mt-5 grid gap-4 md:grid-cols-3">
        {painPoints.map((item, idx) => (
          <Reveal key={item.title} className="panel" delay={idx * 0.06}>
            <p className="font-display text-2xl text-rust">{item.title}</p>
            <p className="mt-2 text-sm text-fog/80 md:text-base">{item.text}</p>
          </Reveal>
        ))}
      </div>

      <Reveal className="panel mt-5 bg-ink/60" delay={0.08}>
        <h3 className="text-2xl">Why this mattered for Beacon</h3>
        <p className="mt-3 text-sm text-fog/80 md:text-base">
          Beacon needed a strategic product shift that could preserve spreadsheet
          familiarity while introducing stronger value: automated ETA reasoning
          and shareable views that support real collaboration, not static
          reporting.
        </p>
      </Reveal>
    </section>
  );
}
