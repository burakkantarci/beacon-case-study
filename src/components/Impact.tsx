import Reveal from './Reveal'

const reflections = [
  'Vibe-coded prototypes accelerated strategic alignment more effectively than static decks alone.',
  'Keeping spreadsheet familiarity while adding AI ETA automation reduced adoption friction.',
  'Lean Figma output plus clear engineering handoff improved speed without sacrificing quality.',
]

export default function Impact() {
  return (
    <section className="container-shell mb-16 mt-16 md:mb-24 md:mt-24">
      <Reveal className="relative overflow-hidden rounded-[2rem] bg-ink p-8 text-fog md:p-12">
        <div className="absolute -bottom-10 right-0 h-56 w-56 rounded-full bg-signal/20 blur-3xl" />
        <p className="section-eyebrow text-sand">Impact and Reflection</p>
        <h2 className="section-lede">
          The core contribution was enabling Beacon's strategic shift to AI-powered table collaboration with faster cross-functional alignment.
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
          NDA note: This case study intentionally abstracts customer-sensitive data while preserving process
          rigor and design rationale.
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
          <a
            href="https://burakkantarci.com/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-fog/30 px-4 py-2 text-sm text-fog/90 transition hover:border-fog/60"
          >
            Discuss this case study
          </a>
        </div>
      </Reveal>
    </section>
  )
}
