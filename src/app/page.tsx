import Reveal from "@/components/Reveal";
import VideoPlayer from "@/components/VideoPlayer";

export default function HomePage() {
  return (
    <div>
      <section className="bg-gradient-to-b from-brand-light/40 to-white px-4 py-24 text-center sm:px-6">
        <Reveal className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold text-brand-dark sm:text-5xl">
            Empowered Adults. Protected Kids.
          </h1>
          <p className="mt-4 text-lg font-medium text-gray-700">
            Body safety and sexual abuse prevention are possible when safe
            adults are empowered to reduce risk, implement real
            strategies, and protect the children in their care.
          </p>
          <p className="mt-4 text-gray-600">
            Kimberly King helps parents, caregivers, early childhood
            educators, and program directors move from fear to
            preparedness — building the policies, training, and everyday
            practices that keep kids safer, at home and in the programs
            that serve them.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <Reveal>
          <h2 className="text-center text-3xl font-bold text-brand-dark sm:text-4xl">
            See I Said No! In Action
          </h2>
          <VideoPlayer
            src="/videos/i-said-no-trailer.mp4"
            poster="/videos/i-said-no-trailer-poster.jpg"
            className="mt-8"
          />
        </Reveal>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-20 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-3">
          <a
            href="/books"
            className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
          >
            <h3 className="text-lg font-bold text-brand-dark">Shop Books</h3>
            <p className="mt-2 text-sm text-gray-600">
              Get I Said No! and Body Safety for Young Children.
            </p>
          </a>
          <a
            href="/online-classes"
            className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
          >
            <h3 className="text-lg font-bold text-brand-dark">Take a Class</h3>
            <p className="mt-2 text-sm text-gray-600">
              Self-paced body safety classes for parents and kids.
            </p>
          </a>
          <a
            href="/speaking"
            className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
          >
            <h3 className="text-lg font-bold text-brand-dark">
              Book Kimberly to Speak
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Keynotes, workshops, and staff trainings.
            </p>
          </a>
        </div>
      </section>
    </div>
  );
}
