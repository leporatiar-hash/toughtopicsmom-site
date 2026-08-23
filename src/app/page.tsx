import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import { books } from "@/lib/books";
import { sitePressMentions } from "@/lib/press";

const credentials = [
  "Author of I Said No! — Mom's Choice Gold Award",
  "Darkness to Light (D2L.org) Certified Facilitator",
  "Sexual Assault Crisis Counselor, The Rowan Center",
  "Featured on ABC, NBC & FOX",
];

export default function HomePage() {
  return (
    <div className="bg-cream">
      {/* Hero */}
      <section className="grid md:grid-cols-[420px_1fr]">
        <div className="relative h-[340px] md:h-auto">
          <Image
            src="/images/kimberly-headshot.png"
            alt="Kimberly King, Tough Topics Mom"
            fill
            priority
            quality={90}
            sizes="(min-width: 768px) 420px, 100vw"
            style={{ objectPosition: "40% 15%" }}
            className="object-cover"
          />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-24 bg-gradient-to-r from-transparent to-cream md:block" />
        </div>

        <Reveal className="flex flex-col justify-center px-6 py-12 sm:px-10 md:py-20">
          <span className="font-script text-xl text-navy">
            ✦ Meet Kimberly King
          </span>
          <h1 className="mt-2 font-serif text-5xl font-black leading-[1.05] text-charcoal sm:text-6xl">
            Kimberly
            <span className="block italic text-navy-light">King</span>
          </h1>
          <p className="mt-4 border-l-[3px] border-navy-mid pl-3 text-sm uppercase tracking-widest text-slate">
            Author &middot; Speaker &middot; Child Body Safety Educator
          </p>
          <div className="mt-6 h-[3px] w-16 bg-navy" />
          <p className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-slate">
            Body safety and sexual abuse prevention are possible when safe
            adults are empowered to reduce risk, implement real strategies,
            and protect the children in their care.
          </p>
          <p className="mt-4 max-w-xl text-[1.05rem] leading-relaxed text-slate">
            Kimberly King helps parents, caregivers, early childhood
            educators, and program directors move from fear to preparedness
            &mdash; building the policies, training, and everyday practices
            that keep kids safer, at home and in the programs that serve
            them.
          </p>
          <div className="mt-8 inline-block w-fit rounded bg-charcoal px-6 py-3 font-serif italic text-cream">
            &ldquo;Empowered Adults. Protected Kids.&rdquo;
          </div>
        </Reveal>
      </section>

      {/* Credential strip */}
      <div className="bg-navy px-6 py-5 sm:px-10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-8 gap-y-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-white/60">
            Credentials
          </span>
          {credentials.map((item) => (
            <span key={item} className="text-sm text-white">
              <span className="text-white/60">✦ </span>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Featured books */}
      <section className="bg-navy-pale px-6 py-16 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-navy-mid">
              Published Works
            </p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-charcoal sm:text-4xl">
              Bestselling &amp; Award-Winning Books
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {books.map((book, index) => {
              const primaryLink =
                book.buyLinks.find((link) => link.primary && link.url) ??
                book.buyLinks.find((link) => link.url);
              return (
                <Reveal key={book.slug} delay={index * 0.1}>
                  <article className="group flex h-full flex-col rounded-sm bg-white shadow-sm transition-all duration-200 hover:-translate-y-1.5 hover:shadow-lg">
                    <div className="relative h-72 w-full overflow-hidden p-3">
                      {book.coverImage ? (
                        <Image
                          src={book.coverImage}
                          alt={book.title}
                          fill
                          className="object-contain p-3 transition-transform duration-200 group-hover:scale-[1.04]"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center text-center text-sm text-slate">
                          Cover coming soon
                        </div>
                      )}
                      {book.badge && (
                        <span className="absolute right-3 top-3 rounded-full bg-navy-light px-3 py-1 text-xs font-semibold text-white shadow">
                          {book.badge}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-1 flex-col px-5 pb-5">
                      <h3 className="font-serif text-lg text-charcoal">
                        {book.title}
                      </h3>
                      <p className="mt-2 flex-1 text-sm text-slate">
                        {book.description.length > 140
                          ? `${book.description.slice(0, 140).trim()}…`
                          : book.description}
                      </p>
                      {book.ageRange && (
                        <span className="mt-3 w-fit rounded-full border border-navy-mid px-3 py-1 text-xs font-semibold uppercase tracking-wide text-navy-mid">
                          {book.ageRange}
                        </span>
                      )}
                      {primaryLink?.url && (
                        <a
                          href={primaryLink.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 inline-block w-fit rounded-full bg-navy px-5 py-2 text-sm font-semibold text-white transition-all duration-200 hover:scale-105 hover:bg-charcoal"
                        >
                          {primaryLink.label}
                        </a>
                      )}
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>

          <Reveal className="mt-10 text-center" delay={0.2}>
            <Link
              href="/books"
              className="text-sm font-semibold text-navy underline underline-offset-4 hover:text-navy-mid"
            >
              See all books &amp; classes
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Media logos */}
      <section className="bg-white px-6 py-16 sm:px-10">
        <div className="mx-auto max-w-6xl text-center">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-navy-mid">
              In the Media
            </p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-charcoal sm:text-4xl">
              Featured &amp; Recommended By
            </h2>
          </Reveal>
          <Reveal
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
            delay={0.1}
          >
            {sitePressMentions.map((mention) => (
              <Link
                key={mention.name}
                href="/media"
                className="rounded-full border-[1.5px] border-mist bg-cream px-5 py-2 text-sm text-charcoal transition-colors duration-200 hover:bg-navy hover:text-white"
              >
                {mention.name}
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Featured interview */}
      <section className="bg-charcoal px-6 py-16 sm:px-10">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-navy-light">
              Watch
            </p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-white sm:text-4xl">
              Featured Interview
            </h2>
            <p className="mt-4 text-white/70">
              Kimberly&rsquo;s Bark Technologies Podcast episode on COCSA
              (child-on-child sexual abuse) has reached over{" "}
              <span className="font-semibold text-white">1 million views</span>.
            </p>
            <YouTubeEmbed
              videoId="hqB6RrR5HaI"
              title="Kimberly King on the Bark Technologies Podcast — COCSA (1M+ views)"
              className="mt-8"
            />
          </Reveal>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-navy px-6 py-12 sm:px-10">
        <Reveal className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
          <div>
            <h2 className="font-serif text-2xl font-bold text-white sm:text-3xl">
              Book Kimberly &middot; Bulk Orders &middot; Press Inquiries
            </h2>
            <p className="mt-2 text-white/70">
              Connect to bring Kimberly&rsquo;s empowering message to your
              audience.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-navy transition-all duration-200 hover:scale-105 hover:shadow-md"
            >
              Contact Kimberly
            </Link>
            <Link
              href="/speaking"
              className="rounded-full border-2 border-white/40 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:border-white"
            >
              Book a Speaking Event
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
