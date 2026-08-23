import Image from "next/image";
import Card from "@/components/Card";
import ContactForm from "@/components/ContactForm";
import LogoStrip from "@/components/LogoStrip";
import Reveal from "@/components/Reveal";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import { speakingPressMentions, spokenAtMentions } from "@/lib/press";
import { bookingOptions } from "@/lib/speaking-booking-options";
import { speakingTopics } from "@/lib/speaking-topics";

// Booking options come as {title, priceLabel} only — the photos are fixed
// per card position (Keynote, Workshop & Staff Training, Panelist).
const bookingOptionVisuals: {
  src: string;
  alt: string;
  ratio: "4/5" | "4/3";
  fit?: "cover" | "contain";
  position: string;
}[] = [
  {
    // Near-square promo graphic with baked-in text — contain instead of
    // cover so the text overlay isn't cropped at the edges.
    src: "/images/kimberly-keynote-graphic.jpg",
    alt: "Kimberly King presenting a keynote on stage",
    ratio: "4/5",
    fit: "contain",
    position: "center",
  },
  {
    src: "/images/kimberly-workshop.jpg",
    alt: "Three teachers holding Kimberly King's body safety books at a staff training workshop",
    ratio: "4/5",
    position: "top",
  },
  {
    src: "/images/kimberly-panelist.jpg",
    alt: "Kimberly King on a panel with five other authors and educators holding children's safety books",
    ratio: "4/3",
    position: "top",
  },
];

export default function SpeakingPage() {
  return (
    <div>
      <section className="bg-gradient-to-b from-brand-light/40 to-white px-4 py-16 sm:px-6">
        <div className="mx-auto flex max-w-5xl flex-col gap-10 lg:flex-row lg:items-center">
          <Reveal className="flex-1">
            <h1 className="text-4xl font-bold text-brand-dark sm:text-5xl">
              Empowered Adults. Protected Kids.
            </h1>
            <p className="mt-4 text-lg font-medium text-gray-700">
              Body safety and sexual abuse prevention are possible when
              safe adults are empowered to reduce risk, implement real
              strategies, and protect the children in their care.
            </p>
            <p className="mt-4 text-gray-600">
              Kimberly King helps parents, caregivers, early childhood
              educators, and program directors move from fear to
              preparedness — building the policies, training, and
              everyday practices that keep kids safer, at home and in
              the programs that serve them.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mx-auto w-full max-w-sm flex-1">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-sm">
              <Image
                src="/images/kimberly-red-shirt-stage.jpg"
                alt="Kimberly King on stage speaking to an audience"
                fill
                style={{ objectPosition: "top" }}
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <Reveal>
          <h2 className="text-center text-3xl font-bold text-brand-dark sm:text-4xl">
            Speaking Topics That Drive Impact
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {speakingTopics.map((topic, index) => (
            <Reveal key={topic.title} delay={(index % 3) * 0.1}>
              <div className="h-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
                <h3 className="font-bold text-brand-dark">{topic.title}</h3>
                <p className="mt-2 text-sm text-gray-600">
                  {topic.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-center text-gray-600">
          Each session is customized to your audience — parents,
          educators, clinicians, or mixed groups — so attendees leave
          with clear, actionable steps.
        </p>
      </section>

      <section className="bg-gradient-to-b from-brand-light/40 to-white px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <h2 className="text-center text-3xl font-bold text-brand-dark sm:text-4xl">
              Book Kimberly For Your Event
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {bookingOptions.map((option, index) => {
              const visual = bookingOptionVisuals[index] ?? bookingOptionVisuals[0];
              return (
                <Reveal key={option.title} delay={index * 0.1}>
                  <Card
                    image={visual.src}
                    imageAlt={visual.alt}
                    imageRatio={visual.ratio}
                    imageFit={visual.fit}
                    imagePosition={visual.position}
                    title={option.title}
                    price={option.priceLabel}
                    cta={{ label: "Inquire", href: "#contact" }}
                  />
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <Reveal>
          <h2 className="text-center text-3xl font-bold text-brand-dark sm:text-4xl">
            Watch Kimberly In Action
          </h2>
          <p className="mt-2 text-center text-sm text-gray-500">
            The Bark Technologies Podcast — COCSA (1M+ views)
          </p>
          <YouTubeEmbed
            videoId="hqB6RrR5HaI"
            title="Kimberly King on the Bark Technologies Podcast — COCSA (1M+ views)"
            className="mx-auto mt-10 max-w-3xl"
          />
        </Reveal>
      </section>

      <section className="px-4 py-16 sm:px-6">
        <Reveal className="mx-auto max-w-5xl space-y-12">
          <LogoStrip heading="As Seen On" mentions={speakingPressMentions} />
          <LogoStrip heading="Kimberly Has Spoken At" mentions={spokenAtMentions} />
        </Reveal>
      </section>

      <section id="contact" className="bg-gradient-to-b from-brand-light/40 to-white px-4 py-16 sm:px-6">
        <Reveal className="mx-auto max-w-2xl">
          <h2 className="text-center text-3xl font-bold text-brand-dark sm:text-4xl">
            Let&rsquo;s Bring This Conversation to Your Organization
          </h2>
          <p className="mt-4 text-center text-gray-600">
            Fill out the form below and Kimberly will follow up to
            discuss your event, audience, and how she can help.
          </p>
          <div className="mt-10 rounded-2xl bg-white p-6 shadow-md sm:p-8">
            <ContactForm showEventType />
          </div>
        </Reveal>
      </section>

      <div className="bg-gradient-to-br from-brand to-brand-dark px-4 py-10 text-center sm:px-6">
        <p className="text-lg font-semibold italic text-white">
          Empowered Adults. Protected Kids.
        </p>
      </div>
    </div>
  );
}
