import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import OnlineClassCard from "@/components/OnlineClassCard";
import { getOnlineClassesPage } from "@/sanity/lib/queries";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Online Classes | Tough Topics Mom",
  description:
    "Body safety online classes for parents, including a free class and a sibling sexual abuse prevention course from author and educator Kimberly King.",
};

export default async function OnlineClassesPage() {
  const content = await getOnlineClassesPage();
  const classes = content?.classes ?? [];

  return (
    <div>
      <section className="bg-gradient-to-b from-brand-light/40 to-white px-4 py-24 text-center sm:px-6">
        <Reveal className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold text-brand-dark sm:text-5xl">
            {content?.heroHeadline}
          </h1>
          <p className="mt-4 text-lg font-medium text-gray-700">
            {content?.heroSubhead}
          </p>
          <p className="mt-4 text-gray-600">{content?.heroBody}</p>
        </Reveal>
      </section>

      {classes.length > 0 && (
        <section className="mx-auto max-w-5xl px-4 pb-4 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-3">
            {classes.map((classItem, index) => (
              <Reveal key={classItem.title} delay={index * 0.1}>
                <OnlineClassCard classItem={classItem} />
              </Reveal>
            ))}
          </div>
        </section>
      )}

      <div className="mx-auto max-w-3xl px-4 pb-16 sm:px-6">
        <Reveal>
          <div className="rounded-2xl bg-gradient-to-br from-brand to-brand-dark px-6 py-12 text-center text-white shadow-lg">
            <h2 className="text-2xl font-bold">{content?.stanStoreHeading}</h2>
            {content?.stanStoreBody && (
              <p className="mx-auto mt-3 max-w-xl text-white/90">
                {content.stanStoreBody}
              </p>
            )}
            {content?.stanStoreUrl && (
              <a
                href={content.stanStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block rounded-lg bg-accent px-6 py-3 font-semibold text-white transition-all duration-200 hover:scale-105 hover:bg-accent-dark hover:shadow-md"
              >
                {content?.stanStoreButtonLabel ?? "Browse Classes on Stan"}
              </a>
            )}
          </div>
        </Reveal>

        {content?.postSnippetBody && (
          <Reveal delay={0.1} className="mt-10">
            <a
              href={content.postUrl ?? "https://kimberlykingauthor.substack.com"}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-auto flex max-w-xl flex-col items-center gap-1 rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-accent">
                From the Blog
              </span>
              <span className="font-semibold text-brand-dark">
                {content.postSnippetHeading}
              </span>
              <span className="mt-1 text-sm text-gray-600">
                {content.postSnippetBody}
              </span>
              <span className="mt-2 text-sm text-gray-500 underline">
                {content.postLinkLabel ?? "Read the full post"}
              </span>
            </a>
          </Reveal>
        )}
      </div>
    </div>
  );
}
