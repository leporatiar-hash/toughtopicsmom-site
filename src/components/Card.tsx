import Image from "next/image";

const ratioClasses = {
  "2/3": "aspect-[2/3]",
  "4/3": "aspect-[4/3]",
  "4/5": "aspect-[4/5]",
} as const;

export type CardProps = {
  image: string;
  imageAlt: string;
  imageRatio: keyof typeof ratioClasses;
  imageFit?: "cover" | "contain";
  imagePosition?: string;
  title: string;
  description?: string;
  badge?: string;
  price?: string;
  cta: { label: string; href: string };
};

export default function Card({
  image,
  imageAlt,
  imageRatio,
  imageFit = "cover",
  imagePosition = "center",
  title,
  description,
  badge,
  price,
  cta,
}: CardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div
        className={`relative w-full overflow-hidden rounded-lg bg-white ${ratioClasses[imageRatio]}`}
      >
        <Image
          src={image}
          alt={imageAlt}
          fill
          style={{ objectPosition: imagePosition }}
          className={imageFit === "contain" ? "object-contain" : "object-cover"}
        />
      </div>
      <div className="mt-4 flex flex-1 flex-col">
        {badge && (
          <span className="w-fit rounded-full bg-brand-light px-3 py-1 text-xs font-semibold text-brand-dark">
            {badge}
          </span>
        )}
        <h3 className="mt-3 text-lg font-bold text-brand-dark">{title}</h3>
        {description && (
          <p className="mt-2 flex-1 text-sm text-gray-600">{description}</p>
        )}
        {!description && <div className="flex-1" />}
        {price && (
          <p className="mt-3 text-sm font-semibold text-brand-dark">{price}</p>
        )}
        <a
          href={cta.href}
          {...(cta.href.startsWith("http")
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          className="mt-4 inline-block rounded-lg bg-accent px-5 py-2 text-center font-semibold text-white transition-all duration-200 hover:scale-105 hover:bg-accent-dark hover:shadow-md"
        >
          {cta.label}
        </a>
      </div>
    </article>
  );
}
