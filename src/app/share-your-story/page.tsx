import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ShareYourStoryForm from "@/components/ShareYourStoryForm";

export const metadata: Metadata = {
  title: "Share Your Story | Tough Topics Mom",
  description:
    "Share your online safety story to be considered for Kimberly King's next book with Gryphon House on keeping kids safe online.",
};

export default function ShareYourStoryPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
      <Reveal>
        <h1 className="text-center text-4xl font-bold text-brand-dark sm:text-5xl">
          Share your online safety story
        </h1>
        <p className="mt-4 text-center text-gray-600">
          I&apos;m writing a new book with Gryphon House on keeping kids safe
          online, and I want it built on real stories from real parents, not
          just research. A scary message, a TikTok or Roblox challenge gone
          wrong, a sexting scare, content a child stumbled onto. No story is
          too small.
        </p>
        <div className="mt-10 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
          <ShareYourStoryForm />
        </div>

        <p className="mt-8 text-sm text-gray-500">
          Your story stays confidential. You choose exactly how it&apos;s
          credited, and nothing goes in the book without your say-so.
        </p>
      </Reveal>
    </div>
  );
}
