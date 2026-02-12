import Reveal from "./Reveal";
import SupplementaryImageCard from "./SupplementaryImageCard";

const operatingFriction = [
  "Order, document, and shipment context was split across email threads, spreadsheets, and siloed tools.",
  "Procurement, sales, forwarders, and logistics teams often entered the process at different times with partial context.",
  "Teams repeatedly rebuilt shared understanding before making operational decisions.",
];

export default function ProblemSpace() {
  return (
    <section className="container-shell mt-20 md:mt-32">
      <Reveal>
        <p className="section-eyebrow">Problem</p>
        <h2 className="section-lede max-w-4xl">
          The real issue in the supply chain was teams working with disconnected
          information.
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

      {/* <div className="mt-5 grid gap-4 md:grid-cols-3">
        {painPoints.map((item, idx) => (
          <Reveal key={item.title} className="panel" delay={idx * 0.06}>
            <p className="font-display text-2xl text-rust">{item.title}</p>
            <p className="mt-2 text-sm text-fog/80 md:text-base">{item.text}</p>
          </Reveal>
        ))}
      </div> */}

      {/* <Reveal className="panel mt-5 bg-ink/60" delay={0.08}>
        <h3 className="text-2xl">Why this mattered for Beacon</h3>
        <p className="mt-3 text-sm text-fog/80 md:text-base">
          When context breaks, visibility alone does not help teams act. Beacon
          needed collaboration patterns that brought stakeholders into a shared
          operational narrative earlier, with less manual reconstruction and
          higher confidence in execution.
        </p>
      </Reveal> */}
    </section>
  );
}
