import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import LogoStrip from "@/components/LogoStrip";
import Reveal from "@/components/Reveal";
import { speakingPressMentions, spokenAtMentions } from "@/lib/press";
import { getSpeakingPage } from "@/sanity/lib/queries";

export const revalidate = 60;

export default async function SpeakingPage() {
  const content = await getSpeakingPage();
  const topics = content?.topics ?? [];
  const bookingOptions = content?.bookingOptions ?? [];

  return (
    <div>
      <section className="bg-gradient-to-b from-brand-light/40 to-white px-4 py-16 sm:px-6">
        <div className="mx-auto flex max-w-5xl flex-col gap-10 lg:flex-row lg:items-center">
          <Reveal className="flex-1">
            <h1 className="text-4xl font-bold text-brand-dark sm:text-5xl">
              {content?.heroHeadline}
            </h1>
            <p className="mt-4 text-lg font-medium text-gray-700">
              {content?.heroSubhead}
            </p>
            <p className="mt-4 text-gray-600">{content?.heroBody}</p>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-1 gap-4">
            <div className="h-64 flex-1 overflow-hidden rounded-2xl shadow-sm">
              <Image
                src="/images/kimberly-classroom.jpg"
                alt="Kimberly King teaching a body safety lesson to elementary school students in their classroom"
                width={416}
                height={512}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="h-64 flex-1 overflow-hidden rounded-2xl shadow-sm">
              <Image
                src="/images/kimberly-speaking-event.jpg"
                alt="Kimberly King with fellow speakers at a professional networking event overlooking the New York City skyline"
                width={416}
                height={512}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <Reveal>
          <h2 className="text-center text-3xl font-bold text-brand-dark sm:text-4xl">
            {content?.topicsHeading}
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic, index) => (
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
          {content?.topicsClosingLine}
        </p>
      </section>

      <section className="bg-gradient-to-b from-brand-light/40 to-white px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <h2 className="text-center text-3xl font-bold text-brand-dark sm:text-4xl">
              {content?.bookingHeading}
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {bookingOptions.map((option, index) => (
              <Reveal key={option.title} delay={index * 0.1}>
                <div className="flex h-full flex-col items-center rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
                  <div className="h-32 w-32 overflow-hidden rounded-full">
                    <Image
                      src="/images/kimberly-red-top.jpg"
                      alt="Kimberly King smiling at a professional speaking event"
                      width={128}
                      height={128}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="mt-4 font-bold text-brand-dark">
                    {option.title}
                  </h3>
                  <p className="mt-1 text-gray-600">{option.priceLabel}</p>
                  <a
                    href="#contact"
                    className="mt-4 rounded-lg bg-accent px-5 py-2 font-semibold text-white transition-all duration-200 hover:scale-105 hover:bg-accent-dark hover:shadow-md"
                  >
                    Inquire
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <Reveal>
          <h2 className="text-center text-3xl font-bold text-brand-dark sm:text-4xl">
            {content?.videoHeading}
          </h2>
          {/* TODO: embed speaking reel once Kimberly provides a video link */}
          <div className="mt-10 flex aspect-video items-center justify-center rounded-2xl bg-gray-100 text-gray-400 shadow-sm">
            Video coming soon
          </div>
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
            {content?.contactHeading}
          </h2>
          <p className="mt-4 text-center text-gray-600">
            {content?.contactBody}
          </p>
          <div className="mt-10 rounded-2xl bg-white p-6 shadow-md sm:p-8">
            <ContactForm showEventType />
          </div>
        </Reveal>
      </section>

      <div className="bg-gradient-to-br from-brand to-brand-dark px-4 py-10 text-center sm:px-6">
        <p className="text-lg font-semibold italic text-white">
          {content?.closingTagline}
        </p>
      </div>
    </div>
  );
}
