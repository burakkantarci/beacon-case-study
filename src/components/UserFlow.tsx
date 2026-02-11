import type { FlowTrack } from "../data/caseStudy";

type UserFlowProps = {
  title: string;
  tracks: FlowTrack[];
  numberedSteps?: string[];
};

export default function UserFlow({
  title,
  tracks,
  numberedSteps,
}: UserFlowProps) {
  return (
    <div className="panel bg-coal text-fog">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-sand">
        User Flow
      </p>
      <h4 className="mt-2 text-2xl">{title}</h4>
      {numberedSteps ? (
        <ol className="mt-5 space-y-2">
          {numberedSteps.map((step, index) => (
            <li
              key={step}
              className="flex gap-3 rounded-xl border border-moss/50 bg-moss/25 p-3 text-sm text-fog"
            >
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-signal text-xs font-semibold text-ink">
                {index + 1}
              </span>
              <span className="pt-0.5">{step}</span>
            </li>
          ))}
        </ol>
      ) : (
        <div className="mt-5 grid gap-2 sm:grid-cols-2">
          {tracks.map((track, idx) => {
            const isPain = track.status === "pain";
            const tone = isPain
              ? "bg-rust/20 text-sand border-rust/35"
              : "bg-moss/30 text-fog border-moss/50";
            return (
              <div
                key={`${track.title}-${idx}`}
                className={`rounded-xl border p-3 ${tone}`}
              >
                <div className="flex items-center justify-between gap-2">
                  <p className="text-sm font-semibold">{track.title}</p>
                  <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-fog/80">
                    {track.owner}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
