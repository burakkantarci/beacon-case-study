import Reveal from "./Reveal";

const users = [
  {
    role: "Logistics Managers",
    description:
      "Coordinate shipment execution across carriers and forwarders.",
    painPoints: [
      "Chasing ETAs manually across email and chat",
      "Sharing outdated screenshots to align teams",
      "Rebuilding context for every stakeholder sync",
    ],
    accent: "bg-harbor",
  },
  {
    role: "Supply Chain Operators",
    description:
      "Monitor tracking data day-to-day and flag exceptions.",
    painPoints: [
      "Working from spreadsheets that go stale within hours",
      "Duplicating status updates across disconnected tools",
      "No single view to catch delays before they escalate",
    ],
    accent: "bg-moss",
  },
  {
    role: "Sales & Procurement Managers",
    description:
      "Bridge commercial planning with operational execution.",
    painPoints: [
      "Order context scattered across docs and email threads",
      "Limited visibility into shipment readiness",
      "Entering the process late with incomplete information",
    ],
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
            <ul className="mt-4 space-y-2 text-sm text-fog/70">
              {user.painPoints.map((point) => (
                <li key={point} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rust/70" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
