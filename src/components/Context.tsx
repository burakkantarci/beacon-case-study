import Reveal from "./Reveal";
import SupplementaryImageCard from "./SupplementaryImageCard";

const beaconContext = [
  "Beacon is a London-based B2B SaaS platform for supply chain visibility and collaboration.",
  "Customers like Fever-Tree and TATA use Beacon to coordinate shipments across multiple stakeholders.",
  "The strategic opportunity was to move beyond static spreadsheets into AI-powered collaboration table views.",
  "Differentiation came from automated ETA intelligence and shareable live views that kept teams aligned on one source of truth.",
];

const ownershipScope = [
  "I led strategy-to-delivery design for the table-view shift: framing, flow architecture, and interaction direction.",
  "I used vibe-coded prototypes as a primary alignment artifact across leadership, product, sales, and engineering.",
  "I intentionally kept Figma output lean, focusing only on assets needed to ship with confidence.",
  "My north star was faster cross-functional alignment and faster time-to-meaningful collaborative action.",
];

export default function Context() {
  return (
    <section className="container-shell mt-16 space-y-8 md:mt-24">
      <Reveal>
        <SupplementaryImageCard
          title="Beacon Live Board"
          caption="Each card represents an order and the context around it."
          className="w-full"
          image="https://burakkantarci.com/images/beacon/orderboard-1-with-bg.png"
        />
      </Reveal>

      <Reveal>
        <p className="section-eyebrow">Context</p>
        <h2 className="section-lede">
          Beacon turned spreadsheet workflows into AI-powered collaborative table views
        </h2>
      </Reveal>

      <div className="grid gap-5 md:grid-cols-2">
        <Reveal className="panel">
          <h3 className="text-2xl">Beacon and product context</h3>
          <ul className="mt-4 space-y-2 text-sm text-fog/85 md:text-base">
            {beaconContext.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-rust" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="panel" delay={0.05}>
          <h3 className="text-2xl">My role and ownership</h3>
          <ul className="mt-4 space-y-2 text-sm text-fog/85 md:text-base">
            {ownershipScope.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-harbor" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
