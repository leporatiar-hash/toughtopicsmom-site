import Image from "next/image";
import type { OnlineClassCard as OnlineClassCardData } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

export default function OnlineClassCard({
  classItem,
}: {
  classItem: OnlineClassCardData;
}) {
  const coverImageUrl = classItem.coverImage
    ? urlFor(classItem.coverImage).width(416).height(312).url()
    : null;

  return (
    <article className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex h-40 items-center justify-center overflow-hidden rounded-lg bg-brand-light/40 text-sm text-brand-dark">
        {coverImageUrl ? (
          <Image
            src={coverImageUrl}
            alt={classItem.title}
            width={416}
            height={312}
            className="h-full w-full object-cover"
          />
        ) : (
          "Cover coming soon"
        )}
      </div>
      <h3 className="mt-4 text-lg font-bold text-brand-dark">
        {classItem.title}
      </h3>
      {classItem.description && (
        <p className="mt-2 flex-1 text-sm text-gray-600">
          {classItem.description}
        </p>
      )}
      {classItem.buttonUrl && (
        <a
          href={classItem.buttonUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block rounded-lg bg-accent px-5 py-2 text-center font-semibold text-white transition-all duration-200 hover:scale-105 hover:bg-accent-dark hover:shadow-md"
        >
          {classItem.buttonLabel ?? "View Class"}
        </a>
      )}
    </article>
  );
}
