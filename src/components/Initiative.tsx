import Reveal from "./Reveal";
import UserFlow from "./UserFlow";
import SupplementaryImages from "./SupplementaryImages";
import type { Initiative as InitiativeType } from "../data/caseStudy";

type InitiativeProps = {
  initiative: InitiativeType;
  index: number;
};

export default function Initiative({ initiative, index }: InitiativeProps) {
  return (
    <section className="container-shell mt-16 md:mt-24">
      <Reveal>
        <p className="section-eyebrow">
          Initiative {String(index + 1).padStart(2, "0")}
        </p>
        <h3 className="mt-1.5 text-2xl md:text-4xl">{initiative.title}</h3>
      </Reveal>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <Reveal className="panel">
          <h4 className="text-2xl">Problem</h4>
          <p className="mt-3 text-sm text-fog/80 md:text-base">
            {initiative.context}
          </p>
        </Reveal>

        <Reveal className="panel" delay={0.05}>
          <h4 className="text-xl">Discovery</h4>
          <ul className="mt-3 space-y-2 text-sm text-fog/80">
            {initiative.discover.map((point) => (
              <li key={point} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-rust" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <div className="mt-5">
        <Reveal delay={0.06}>
          <UserFlow
            title={`${initiative.title}: ideal platform user flow`}
            tracks={initiative.defineFlow}
            numberedSteps={initiative.numberedFlow}
          />
        </Reveal>
      </div>

      <div className="mt-5 grid gap-5 md:grid-cols-2">
        <Reveal className="panel">
          <h4 className="text-xl">Notes about the process</h4>
          <ul className="mt-3 space-y-2 text-sm text-fog/80">
            {[...initiative.develop, ...initiative.deliver].map((point) => (
              <li key={point} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-harbor" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="panel" delay={0.05}>
          <h4 className="text-xl">Critical tradeoff</h4>
          <div className="mt-3 space-y-3 text-sm text-fog/85">
            <p>
              <span className="font-semibold text-fog">Decision: </span>
              {initiative.tradeoff.decision}
            </p>
            <p>
              <span className="font-semibold text-fog">Alternatives: </span>
              {initiative.tradeoff.alternatives}
            </p>
            <p>
              <span className="font-semibold text-fog">Why this choice: </span>
              {initiative.tradeoff.why}
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal className="mt-5" delay={0.1}>
        <SupplementaryImages
          images={initiative.supplementaryImages}
          videoEmbedUrl={
            initiative.title === "Live Boards"
              ? "https://player.vimeo.com/video/1139345732"
              : undefined
          }
          videoTitle={
            initiative.title === "Live Boards" ? "Live Boards walkthrough" : undefined
          }
          videoDescription={
            initiative.title === "Live Boards"
              ? "Product demo showing core collaboration flows and board interactions."
              : undefined
          }
        />
      </Reveal>

      {initiative.externalLink ? (
        <Reveal className="panel mt-5" delay={0.11}>
          <h4 className="text-xl">External link</h4>
          <p className="mt-2 text-sm text-fog/80">
            Interactive reference for this initiative.
          </p>
          <a
            href={initiative.externalLink.url}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex rounded-full bg-signal px-4 py-2 text-sm font-semibold text-ink transition hover:translate-y-[-1px]"
          >
            {initiative.externalLink.label}
          </a>
        </Reveal>
      ) : null}

      <Reveal className="panel mt-5 bg-ink/60" delay={0.12}>
        <h4 className="text-xl">Outcomes and learning</h4>
        <ul className="mt-3 space-y-2 text-sm text-fog/85 md:text-base">
          {initiative.outcomes.map((point) => (
            <li key={point} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-moss" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
