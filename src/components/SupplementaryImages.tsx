import SupplementaryImageCard from "./SupplementaryImageCard";

type SupplementaryImage = {
  title: string;
  caption: string;
  image?: string;
};

type SupplementaryImagesProps = {
  images: SupplementaryImage[];
  videoEmbedUrl?: string;
  videoTitle?: string;
  videoDescription?: string;
};

export default function SupplementaryImages({
  images,
  videoEmbedUrl,
  videoTitle,
  videoDescription,
}: SupplementaryImagesProps) {
  return (
    <div className="panel">
      <div className="mt-4 grid gap-3">
        {images.map((image) => (
          <SupplementaryImageCard
            key={image.title}
            title={image.title}
            caption={image.caption}
            image={image.image}
          />
        ))}
      </div>
      {videoEmbedUrl ? (
        <article className="mt-4 rounded-xl border border-fog/10 bg-ink/45 p-3 mb-4">
          <div className="aspect-video w-full overflow-hidden rounded-lg">
            <iframe
              src={videoEmbedUrl}
              title="Live Boards supplementary video"
              className="h-full w-full"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              allowFullScreen
              loading="lazy"
            />
          </div>
          {videoTitle ? (
            <p className="mt-3 text-sm font-semibold text-fog">{videoTitle}</p>
          ) : null}
          {videoDescription ? (
            <p className="mt-1 text-sm text-fog/75">{videoDescription}</p>
          ) : null}
        </article>
      ) : null}
    </div>
  );
}
