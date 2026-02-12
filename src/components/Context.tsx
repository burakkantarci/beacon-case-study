import Reveal from "./Reveal";
import SupplementaryImageCard from "./SupplementaryImageCard";

const beaconContext = [
  "Beacon is a London-based B2B SaaS platform for supply chain visibility and collaboration.",
  "Customers like Fever-Tree and TATA use Beacon to coordinate shipments across multiple stakeholders.",
  "The product sits at the intersection of real-time tracking data and operational collaboration.",
];

const ownershipScope = [
  "I led discovery-to-delivery for collaboration workflows.",
  "I translated cross-functional research into product and design decisions.",
  "I partnered with Leadership, PMs, engineering, sales and customer success to deliver the product.",
  "I led the team to adopt AI in day-to-day product work.",
];

export default function Context() {
  return (
    <section className="container-shell mt-20 space-y-8 md:mt-32">
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
          Beacon builds the collaboration layer around supply chain visibility
        </h2>
      </Reveal>

      <div className="grid gap-5 md:grid-cols-2">
        <Reveal className="panel">
          <h3 className="text-2xl">About Beacon</h3>
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
