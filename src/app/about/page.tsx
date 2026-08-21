import Image from "next/image";
import Link from "next/link";
import ChecklistCard from "@/components/ChecklistCard";
import LogoStrip from "@/components/LogoStrip";
import { featuredPress, sitePressMentions } from "@/lib/press";
import { socialLinks } from "@/lib/socials";
import TestimonialSection from "@/components/TestimonialSection";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import { getAboutPage, getTestimonials } from "@/sanity/lib/queries";

export const revalidate = 60;

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Kimberly King",
  jobTitle: "Child Body Safety Educator, Author & Speaker",
  url: "https://toughtopicsmom.com/about",
  sameAs: [socialLinks.instagram, socialLinks.linkedin, socialLinks.substack],
};

export default async function AboutPage() {
  const [content, testimonials] = await Promise.all([
    getAboutPage(),
    getTestimonials(),
  ]);

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <section className="bg-gradient-to-b from-brand-light/40 to-white px-4 py-16 text-center sm:px-6">
        <Reveal>
          <Image
            src="/images/kimberly-headshot.png"
            alt="Kimberly King"
            width={160}
            height={160}
            className="mx-auto h-40 w-40 rounded-full object-cover shadow-md"
            priority
          />
          <h1 className="mt-6 text-4xl font-bold text-brand-dark sm:text-5xl">
            Kimberly King
          </h1>
          <p className="mt-1 text-lg font-medium text-gray-600">
            Tough Topics Mom
          </p>
          <p className="mt-4 text-lg italic text-brand-dark">
            {content?.heroTagline}
          </p>
        </Reveal>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <Reveal className="flex flex-col items-center gap-8 sm:flex-row sm:items-start">
          <Image
            src="/images/kimberly-headshot.png"
            alt="Kimberly King"
            width={176}
            height={224}
            className="mx-auto h-56 w-44 shrink-0 rounded-2xl object-cover shadow-sm sm:mx-0"
          />
          <div className="space-y-4 text-gray-600">
            <p>{content?.bioParagraph1}</p>
            <p>{content?.bioParagraph2}</p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          <Reveal>
            <ChecklistCard
              title={content?.searchingForHeading ?? ""}
              items={content?.searchingForItems ?? []}
            />
          </Reveal>
          <Reveal delay={0.1}>
            <ChecklistCard
              title={content?.offersHeading ?? ""}
              items={content?.offersItems ?? []}
            />
          </Reveal>
        </div>

        <Reveal className="mt-16 border-t border-gray-200 pt-12">
          <LogoStrip heading="As Seen On" mentions={sitePressMentions} />
        </Reveal>

        <Reveal className="mt-8">
          <a
            href={featuredPress.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto flex max-w-xl flex-col items-center gap-1 rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
          >
            <span className="text-xs font-semibold uppercase tracking-wide text-accent">
              Featured Interview — {featuredPress.publication}
            </span>
            <span className="font-semibold text-brand-dark">
              {featuredPress.title}
            </span>
            <span className="text-sm text-gray-500 underline">
              Watch the interview
            </span>
          </a>
        </Reveal>

        <Reveal className="mt-16">
          <h2 className="text-center text-3xl font-bold text-brand-dark sm:text-4xl">
            {content?.testimonialsHeading}
          </h2>
          <div className="mt-8">
            <TestimonialSection testimonials={testimonials} />
          </div>
        </Reveal>
      </div>

      <div className="px-4 pb-16 sm:px-6">
        <Reveal className="mx-auto max-w-4xl">
          <CtaBand
            heading={content?.ctaHeading ?? ""}
            buttonLabel={content?.ctaButtonLabel ?? ""}
            href="/contact"
          />
        </Reveal>
        <Reveal className="mx-auto mt-6 max-w-4xl text-center">
          <p className="text-sm text-gray-500">
            Interested in partnerships and collaboration?{" "}
            <Link href="/contact" className="font-medium text-brand-dark underline hover:text-accent">
              Get in touch
            </Link>
            .
          </p>
        </Reveal>
      </div>
    </div>
  );
}
