import Image from "next/image";
import type { OnlineClass } from "@/data/classes";

export default function OnlineClassCard({
  classItem,
}: {
  classItem: OnlineClass;
}) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-brand-light/40">
        <Image
          src={classItem.coverSrc}
          alt={classItem.coverAlt}
          fill
          className="object-cover"
        />
      </div>
      <div className="mt-4 flex flex-1 flex-col">
        <span className="w-fit rounded-full bg-brand-light px-3 py-1 text-xs font-semibold text-brand-dark">
          For {classItem.audience}
        </span>
        <h3 className="mt-3 text-lg font-bold text-brand-dark">
          {classItem.title}
        </h3>
        <p className="mt-2 flex-1 text-sm text-gray-600">
          {classItem.description}
        </p>
        {classItem.price && (
          <p className="mt-3 text-sm font-semibold text-brand-dark">
            {classItem.price}
          </p>
        )}
        <a
          href={classItem.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block rounded-lg bg-accent px-5 py-2 text-center font-semibold text-white transition-all duration-200 hover:scale-105 hover:bg-accent-dark hover:shadow-md"
        >
          Enroll on Stan
        </a>
      </div>
    </article>
  );
}
