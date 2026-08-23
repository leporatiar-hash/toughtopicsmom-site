import Image from "next/image";
import Link from "next/link";
import ChecklistCard from "@/components/ChecklistCard";
import LogoStrip from "@/components/LogoStrip";
import { featuredPress, sitePressMentions } from "@/lib/press";
import { socialLinks } from "@/lib/socials";
import TestimonialSection from "@/components/TestimonialSection";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import VideoPlayer from "@/components/VideoPlayer";

const searchingFor = [
  "A child sexual abuse prevention expert to guide your team",
  "A powerful keynote speaker for your next conference",
  "A certified body safety educator for children and parents",
  "Signed copies or bulk orders of prevention books",
  "Private consultations and staff trainings",
];

const kimberlyOffers = [
  "Professional, trauma-informed support",
  "Approachable guidance grounded in real experience",
  "Evidence-based best practices",
  "Customized training programs",
  "Ongoing consultation and support",
];

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Kimberly King",
  jobTitle: "Child Body Safety Educator, Author & Speaker",
  url: "https://toughtopicsmom.com/about",
  sameAs: [socialLinks.instagram, socialLinks.linkedin, socialLinks.substack],
};

export default function AboutPage() {
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
            Empowered Adults. Protected Kids.
          </p>
        </Reveal>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <Reveal className="flex flex-col items-center gap-8 sm:flex-row sm:items-start">
          <div className="relative aspect-[4/5] w-44 shrink-0 overflow-hidden rounded-2xl shadow-sm sm:w-56">
            <Image
              src="/images/kimberly-beach-photo.jpg"
              alt="Kimberly King holding her book Body Safety for Young Children on the beach"
              fill
              style={{ objectPosition: "top" }}
              className="mx-auto object-cover sm:mx-0"
            />
          </div>
          <div className="space-y-4 text-gray-600">
            <p>
              Kimberly King, known as the Tough Topics Mom, is a leading
              voice in child sexual abuse prevention, helping families,
              schools, and organizations take action before abuse
              happens. She is the author of the best-selling, most
              highly recommended prevention book for children,{" "}
              <em>
                I Said No! A Kid-to-Kid Guide to Keeping Private Parts
                Private
              </em>
              , co-written with her son Zack.
            </p>
            <p>
              Kimberly is a mom, a survivor, a Sexual Abuse Prevention
              Facilitator with Darkness to Light (D2L.org), and a Sexual
              Assault Crisis Counselor with The Rowan Center. As a
              best-selling author, educator, and trusted prevention
              consultant, she partners with parents, schools, mental
              health professionals, and youth-serving organizations to
              build safer communities — one conversation at a time.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          <Reveal>
            <ChecklistCard title="If you're searching for:" items={searchingFor} />
          </Reveal>
          <Reveal delay={0.1}>
            <ChecklistCard title="Kimberly offers:" items={kimberlyOffers} />
          </Reveal>
        </div>

        <Reveal className="mt-16 border-t border-gray-200 pt-12">
          <LogoStrip heading="As Seen On" mentions={sitePressMentions} />
        </Reveal>

        <Reveal className="mt-8">
          <div className="mx-auto flex max-w-xl flex-col items-center gap-1 rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm">
            <span className="text-xs font-semibold uppercase tracking-wide text-accent">
              Featured Interview — {featuredPress.publication}
            </span>
            <span className="font-semibold text-brand-dark">
              {featuredPress.title}
            </span>
            <VideoPlayer
              src="/videos/kimberly-abc7-feature.mp4"
              poster="/videos/kimberly-abc7-feature-poster.jpg"
              className="mt-4 w-full max-w-xs"
            />
            <a
              href={featuredPress.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-sm text-gray-500 underline"
            >
              Read the original article
            </a>
          </div>
        </Reveal>

        <Reveal className="mt-16">
          <h2 className="text-center text-3xl font-bold text-brand-dark sm:text-4xl">
            What People Are Saying
          </h2>
          <div className="mt-8">
            <TestimonialSection />
          </div>
        </Reveal>
      </div>

      <div className="px-4 pb-16 sm:px-6">
        <Reveal className="mx-auto max-w-4xl">
          <CtaBand
            heading="Work with Kimberly"
            buttonLabel="Get in Touch"
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
