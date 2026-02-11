import Reveal from './Reveal'
import { executiveSummary } from '../data/caseStudy'

export default function ExecutiveSummary() {
  return (
    <section className="container-shell mt-10 md:mt-14">
      <Reveal className="panel">
        <p className="section-eyebrow">90-Second Summary</p>

        <div className="mt-6 grid gap-4 xl:grid-cols-3">
          <article className="rounded-2xl border border-fog/10 bg-ink/50 p-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-sand/90">PROBLEM</p>
            <p className="mt-2 text-sm text-fog/85">{executiveSummary.problem}</p>
          </article>
          <article className="rounded-2xl border border-fog/10 bg-ink/50 p-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-sand/90">SOLUTION</p>
            <p className="mt-2 text-sm text-fog/85">{executiveSummary.shipped}</p>
          </article>
          <article className="rounded-2xl border border-fog/10 bg-ink/50 p-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-sand/90">MY ROLE</p>
            <p className="mt-2 text-sm text-fog/85">{executiveSummary.role}</p>
          </article>
        </div>

        <div className="mt-5 rounded-2xl border border-moss/40 bg-moss/15 p-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-sand/90">
            NDA-safe impact signals
          </p>
          <ul className="mt-3 space-y-2 text-sm text-fog/85">
            {executiveSummary.impactSignals.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-signal" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  )
}
