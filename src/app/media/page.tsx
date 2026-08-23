import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import { pressMentionsList } from "@/lib/press";

export const metadata: Metadata = {
  title: "Media & Press | Tough Topics Mom",
  description:
    "Media kit for Kimberly King, Tough Topics Mom — downloadable headshots, press bio, and press mentions for child body safety and abuse prevention education.",
};

const headshots = [
  {
    src: "/images/kimberly-headshot.png",
    alt: "Kimberly King, Tough Topics Mom, smiling headshot",
  },
  {
    src: "/images/kimberly-headshot-alt.jpg",
    alt: "Kimberly King, Tough Topics Mom, smiling headshot in a white button-down shirt against a plain background",
  },
];

// TODO: Kimberly to provide the final media bio copy — this is placeholder text.
const mediaBio =
  "Kimberly King is the author of the I Said No! and Body Safety for Young Children book series and the founder of Tough Topics Mom, where she helps parents, caregivers, and educators talk with kids about body safety and consent. She has been featured on ABC, NBC, and FOX, and speaks nationally to schools, parent groups, and organizations about preventing child sexual abuse.";

export default function MediaPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <Reveal>
        <h1 className="text-center text-4xl font-bold text-brand-dark sm:text-5xl">
          Media & Press
        </h1>
        <p className="mt-4 text-center text-gray-600">
          Headshots, bio, and press mentions for Kimberly King, Tough Topics Mom.
        </p>
      </Reveal>

      <Reveal className="mt-16" delay={0.1}>
        <h2 className="text-2xl font-bold text-brand-dark">Headshots</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {headshots.map((headshot) => (
            <div
              key={headshot.src}
              className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg">
                <Image
                  src={headshot.src}
                  alt={headshot.alt}
                  fill
                  style={{ objectPosition: "top" }}
                  className="object-cover"
                />
              </div>
              <a
                href={headshot.src}
                download
                className="mt-4 block rounded-lg bg-accent px-5 py-2 text-center font-semibold text-white transition-all duration-200 hover:scale-105 hover:bg-accent-dark hover:shadow-md"
              >
                Download
              </a>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal className="mt-16" delay={0.1}>
        <h2 className="text-2xl font-bold text-brand-dark">Bio</h2>
        <p className="mt-4 text-gray-600">{mediaBio}</p>
      </Reveal>

      <Reveal className="mt-16" delay={0.1}>
        <h2 className="text-2xl font-bold text-brand-dark">Press Mentions</h2>
        <ul className="mt-6 space-y-4">
          {pressMentionsList.map((mention) => (
            <li
              key={mention.url}
              className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <a href={mention.url} target="_blank" rel="noopener noreferrer">
                <span className="text-xs font-semibold uppercase tracking-wide text-accent">
                  {mention.publication}
                </span>
                <p className="mt-1 font-semibold text-brand-dark underline">
                  {mention.title}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal className="mt-16" delay={0.1}>
        <h2 className="text-2xl font-bold text-brand-dark">Video</h2>
        <p className="mt-2 text-sm text-gray-500">
          Kimberly King on the Bark Technologies Podcast — COCSA (1M+ views)
        </p>
        <YouTubeEmbed
          videoId="hqB6RrR5HaI"
          title="Kimberly King on the Bark Technologies Podcast — COCSA (1M+ views)"
          className="mt-6"
        />
      </Reveal>
    </div>
  );
}
