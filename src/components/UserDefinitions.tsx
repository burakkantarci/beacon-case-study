import Reveal from "./Reveal";

const users = [
  {
    role: "Logistics Managers",
    description:
      "Coordinate shipment execution across carriers and forwarders. They need real-time ETA visibility and shared boards to keep operations on track without chasing updates manually.",
    accent: "bg-harbor",
  },
  {
    role: "Supply Chain Operators",
    description:
      "Monitor day-to-day tracking data and flag exceptions. They rely on live table views and automated alerts to replace spreadsheet-driven status checks.",
    accent: "bg-moss",
  },
  {
    role: "Sales & Procurement Managers",
    description:
      "Bridge commercial planning with operational execution. They use order cards and shared boards to maintain visibility into readiness and delivery commitments.",
    accent: "bg-rust",
  },
];

export default function UserDefinitions() {
  return (
    <section className="container-shell mt-20 md:mt-32">
      <Reveal>
        <p className="section-eyebrow">Users</p>
        <h2 className="section-lede">Who I designed for</h2>
      </Reveal>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {users.map((user, idx) => (
          <Reveal key={user.role} className="panel" delay={idx * 0.06}>
            <div className="flex items-center gap-3">
              <span className={`h-2.5 w-2.5 rounded-full ${user.accent}`} />
              <h3 className="text-xl md:text-2xl">{user.role}</h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-fog/80 md:text-base">
              {user.description}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
