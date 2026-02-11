type SupplementaryImageCardProps = {
  title?: string;
  caption?: string;
  image?: string;
  className?: string;
};

export default function SupplementaryImageCard({
  title,
  caption,
  image,
  className = "",
}: SupplementaryImageCardProps) {
  return (
    <article
      className={`rounded-xl border border-fog/10 bg-ink/45 p-3 mb-4 ${className}`}
    >
      {image ? (
        <img
          src={image}
          alt={caption ?? title ?? "Supplementary image"}
          className="w-full rounded-lg object-cover"
          loading="lazy"
        />
      ) : (
        <div className="flex h-44 w-full items-center justify-center rounded-lg border border-dashed border-fog/20 bg-ink/40">
          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-sand/70">
            Image placeholder
          </span>
        </div>
      )}
      {title ? (
        <p className="mt-3 text-sm font-semibold text-fog">{title}</p>
      ) : null}
      {caption ? <p className="mt-1 text-sm text-fog/75">{caption}</p> : null}
    </article>
  );
}
