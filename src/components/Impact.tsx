import Reveal from "./Reveal";

const reflections = [
  "Shifted from feature-level execution to product-direction thinking by shaping collaboration as Beacon's core value story.",
  "Built stronger persona-based design judgment by mapping how logistics, sales, and procurement collaborate across the same workflow.",
  "Learned to use AI prototyping to test interaction ideas faster and validate design decisions with shorter feedback loops.",
  "Raised delivery quality through clearer handoff artifacts, behavior specs, and tighter alignment with engineering and stakeholders.",
];

export default function Impact() {
  return (
    <section className="container-shell mb-20 mt-20 md:mb-32 md:mt-32">
      <Reveal className="relative overflow-hidden rounded-[2rem] bg-ink p-8 text-fog md:p-12">
        <div className="absolute -bottom-10 right-0 h-56 w-56 rounded-full bg-signal/20 blur-3xl" />
        <p className="section-eyebrow text-sand">Impact and Reflection</p>
        <h2 className="section-lede">
          This work shifted Beacon's product direction and sharpened how I make
          design decisions under constraints.
        </h2>
        <ul className="mt-6 space-y-3 text-fog/90">
          {reflections.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-signal" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-fog/70">
          NDA note: This case study intentionally abstracts customer-sensitive
          data while preserving process rigor and design rationale.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="https://burakkantarci.com/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-signal px-4 py-2 text-sm font-semibold text-ink transition hover:translate-y-[-1px]"
          >
            See full portfolio
          </a>
        </div>
      </Reveal>
    </section>
  );
}
