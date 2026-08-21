import Image from "next/image";
import type { SanityBook } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

export default function BookCard({ book }: { book: SanityBook }) {
  // Only show buy buttons that have a real URL — buyLinks without one (e.g.
  // Bookshop.org, Signed Copy, Retail before those links exist) stay hidden.
  const buyLinks = (book.buyLinks ?? []).filter((link) => !!link.url);
  const primaryLink = buyLinks.find((link) => link.primary) ?? buyLinks[0];
  const secondaryLinks = buyLinks.filter((link) => link !== primaryLink);
  const coverImageUrl = book.coverImage
    ? urlFor(book.coverImage).width(416).height(576).url()
    : null;

  const bookJsonLd = {
    "@context": "https://schema.org",
    "@type": "Book",
    name: book.title,
    author: { "@type": "Person", name: "Kimberly King" },
    description: book.description,
    ...(primaryLink?.url ? { url: primaryLink.url } : {}),
  };

  return (
    <article
      className={`flex flex-col gap-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg sm:flex-row ${
        book.featured ? "sm:p-10" : ""
      }`}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bookJsonLd) }}
      />
      <div className="relative mx-auto shrink-0 sm:mx-0">
        <div
          className={`flex items-center justify-center rounded-lg bg-brand-light/40 text-sm text-brand-dark ${
            book.featured ? "h-72 w-52" : "h-56 w-40"
          }`}
        >
          {coverImageUrl ? (
            <Image
              src={coverImageUrl}
              alt={book.title}
              width={208}
              height={288}
              className="h-full w-full rounded object-cover"
            />
          ) : (
            "Cover coming soon"
          )}
        </div>
        {book.badge && (
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white shadow">
            {book.badge}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col">
        <h2
          className={`font-bold text-brand-dark ${
            book.featured ? "text-2xl sm:text-3xl" : "text-xl"
          }`}
        >
          {book.title}
        </h2>
        <p className="mt-3 flex-1 text-gray-600">{book.description}</p>

        {book.bulkOrderNote && (
          <p className="mt-3 text-sm text-gray-500">{book.bulkOrderNote}</p>
        )}

        <div className="mt-6 flex flex-wrap items-center gap-4">
          {primaryLink && (
            <a
              href={primaryLink.url ?? "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-accent px-6 py-3 font-semibold text-white transition-all duration-200 hover:scale-105 hover:bg-accent-dark hover:shadow-md"
            >
              {primaryLink.label}
            </a>
          )}
          {secondaryLinks.map((link) => (
            <a
              key={link.label}
              href={link.url ?? "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-brand-dark underline hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
