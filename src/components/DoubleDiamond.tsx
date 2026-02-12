import Reveal from "./Reveal";
import { processPhases } from "../data/caseStudy";

export default function DoubleDiamond() {
  return (
    <section className="container-shell mt-20 md:mt-32">
      <Reveal>
        <p className="section-eyebrow">Design Process</p>
        <h2 className="section-lede">
          Double Diamond thinking to move from broad signals to focused
          decisions.
        </h2>
      </Reveal>

      <Reveal className="panel mt-8 overflow-hidden p-0">
        <div className="grid md:grid-cols-4">
          {processPhases.map((phase, idx) => (
            <article
              key={phase.phase}
              className="relative border-b border-fog/10 p-5 md:border-b-0 md:border-r last:border-0"
            >
              <h3 className="text-2xl">{phase.phase}</h3>
              <ul className="mt-4 space-y-2 text-sm text-fog/80">
                {phase.artifacts.map((artifact) => (
                  <li key={artifact} className="flex gap-2">
                    <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-signal" />
                    <span>{artifact}</span>
                  </li>
                ))}
              </ul>
              {idx < processPhases.length - 1 && (
                <span className="absolute right-3 top-3 text-rust/40 md:top-auto md:bottom-3 md:right-3">
                  →
                </span>
              )}
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
