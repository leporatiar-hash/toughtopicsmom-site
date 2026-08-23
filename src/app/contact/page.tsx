import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
      <Reveal>
        <h1 className="text-center text-4xl font-bold text-brand-dark sm:text-5xl">
          Contact
        </h1>
        <p className="mt-4 text-center text-gray-600">
          Have a question or want to work together? Send a message below
          and Kimberly will get back to you personally.
        </p>
        <div className="mt-10 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
          <ContactForm />
        </div>
      </Reveal>
    </div>
  );
}
