import Link from "next/link";
import BookCard from "@/components/BookCard";
import LogoStrip from "@/components/LogoStrip";
import TestimonialSection from "@/components/TestimonialSection";
import { books } from "@/lib/books";
import { sitePressMentions } from "@/lib/press";
import Reveal from "@/components/Reveal";

export default function BooksPage() {
  const [featuredBook, ...otherBooks] = books;

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <Reveal>
        <h1 className="text-center text-4xl font-bold text-brand-dark sm:text-5xl">
          Books
        </h1>
      </Reveal>

      <Reveal className="mt-12">
        <BookCard book={featuredBook} />
      </Reveal>

      <Reveal className="mt-16">
        <TestimonialSection limit={3} />
      </Reveal>

      <div className="mt-16 flex flex-col gap-8">
        {otherBooks.map((book, index) => (
          <Reveal key={book.slug} delay={index * 0.1}>
            <BookCard book={book} />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-16 rounded-2xl bg-gradient-to-br from-brand to-brand-dark px-6 py-12 text-center text-white shadow-lg">
        <h2 className="text-2xl font-bold">Want to share your story?</h2>
        <p className="mx-auto mt-4 max-w-xl text-brand-light">
          I&apos;m writing my next book with Gryphon House on keeping kids
          safe online, and I want it built on real stories from real
          parents. Fill out the form and share your story to be considered.
        </p>
        <Link
          href="/share-your-story"
          className="mt-6 inline-block rounded-lg bg-accent px-6 py-3 font-semibold text-white transition-all duration-200 hover:scale-105 hover:bg-accent-dark hover:shadow-md"
        >
          Share Your Story &rarr;
        </Link>
      </Reveal>

      <Reveal className="mt-16 border-t border-gray-200 pt-12">
        <LogoStrip heading="As Seen On" mentions={sitePressMentions} />
      </Reveal>
    </div>
  );
}
