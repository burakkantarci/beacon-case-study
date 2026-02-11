import Reveal from "./Reveal";

const flow = [
  {
    step: "Sign Up",
    detail: "Creates a Beacon workspace and confirms company profile details.",
  },
  {
    step: "Import Tracking Spreadsheet",
    detail:
      "Uploads the supply chain tracking spreadsheet and validates records, creating a live operational view.",
  },
  {
    step: "Data Alignment",
    detail:
      "Uses Beacon guidance to align spreadsheet columns with required fields.",
  },
  {
    step: "AI ETA Enrichment",
    detail:
      "Beacon enriches imported data with automated ETA predictions and confidence-aware updates.",
  },
  {
    step: "Table View Setup",
    detail:
      "Creates and saves role-based table views so routine checks and decisions are one click for every team.",
  },
  {
    step: "Share Live View",
    detail:
      "Shares a live view with forwarders and internal collaborators so everyone works on the same current context.",
  },
];

export default function SuccessfulFlow() {
  return (
    <section className="container-shell mt-16 md:mt-24">
      <Reveal>
        <p className="section-eyebrow">A Successful User Journey</p>
        <h2 className="section-lede">
          A successful Beacon journey starts with spreadsheet import and ends in
          AI-assisted collaboration on a shared table view.
        </h2>
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
              <h3 className="mt-2 text-xl text-fog">{item.step}</h3>
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
