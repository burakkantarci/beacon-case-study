import Reveal from "./Reveal";

const flow = [
  {
    step: "Sign Up",
    detail:
      "A workspace that brings all stakeholders together to collaborate in real-time.",
  },
  {
    step: "Import Tracking Spreadsheet",
    detail:
      "Instead of static spreadsheets, Beacon imports the tracking spreadsheet and creates a live operational view.",
  },
  {
    step: "Data Alignment",
    detail:
      "Beacon automatically aligns the tracking spreadsheet with the required fields. Helping users to adopt quickly.",
  },
  {
    step: "ETA Fetching",
    detail:
      "Beacon automatically fetches the ETA based on the tracking spreadsheet. No more manual updates.",
  },
  {
    step: "Live Board Setup",
    detail:
      "User creates and saves custom views so routine checks are one click for the team.",
  },
  {
    step: "Share Live Board",
    detail:
      "Shares the live board with forwarders and internal collaborators, allowing them to collaborate in real-time.",
  },
];

export default function SuccessfulFlow() {
  return (
    <section className="container-shell mt-20 md:mt-32">
      <Reveal>
        <p className="section-eyebrow">How Beacon solves the problem</p>
        <h2 className="section-lede">A successful Beacon user journey</h2>
      </Reveal>

      <Reveal className="panel mt-8 overflow-hidden p-6 md:p-8">
        <div className="hidden gap-4 md:grid md:grid-cols-2 xl:grid-cols-3">
          {flow.map((item, idx) => (
            <article
              key={item.step}
              className="relative rounded-2xl border border-fog/10 bg-ink/55 p-5"
            >
              <span className="absolute -right-6 -top-6 h-16 w-16 rounded-full bg-signal/10 blur-2xl" />
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-signal/80">
                Step {idx + 1}
              </p>
              <h3 className="mt-2 text-2xl text-fog leading-relaxed">
                {item.step}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-fog/75">
                {item.detail}
              </p>
            </article>
          ))}
        </div>

        <div className="space-y-2 md:hidden">
          {flow.map((item, idx) => (
            <div key={item.step}>
              <article className="rounded-2xl border border-fog/10 bg-ink/55 p-4">
                <h3 className="mt-1 text-xl text-fog">{item.step}</h3>
                <p className="mt-2 text-sm text-fog/75">{item.detail}</p>
              </article>
              {idx < flow.length - 1 && (
                <div
                  className="py-1 text-center text-xl text-signal/80"
                  aria-hidden="true"
                >
                  ↓
                </div>
              )}
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
