import { testimonials } from "@/lib/testimonials";

export default function TestimonialSection({ limit }: { limit?: number }) {
  if (testimonials.length === 0) {
    return (
      <p className="text-center text-sm text-gray-400">
        Testimonials coming soon.
      </p>
    );
  }

  const shown = limit ? testimonials.slice(0, limit) : testimonials;

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {shown.map((testimonial) => (
        <blockquote
          key={testimonial.quote}
          className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
        >
          <p className="text-gray-600">&ldquo;{testimonial.quote}&rdquo;</p>
          <footer className="mt-4 text-sm font-semibold text-brand-dark">
            {testimonial.author}
            {testimonial.role && (
              <span className="font-normal text-gray-500">
                {" "}
                — {testimonial.role}
              </span>
            )}
          </footer>
        </blockquote>
      ))}
    </div>
  );
}
