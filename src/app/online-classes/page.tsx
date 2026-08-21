import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import OnlineClassCard from "@/components/OnlineClassCard";
import { classes } from "@/data/classes";

export const metadata: Metadata = {
  title: "Online Classes | Tough Topics Mom",
  description:
    "Self-paced body safety classes for parents and kids from Kimberly King, Tough Topics Mom. Free parenting class, Body Boss Bootcamp for kids, and Raising Safe Siblings.",
};

export default function OnlineClassesPage() {
  const publishedClasses = classes.filter((classItem) => classItem.published);

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <Reveal>
        <h1 className="text-center text-4xl font-bold text-brand-dark sm:text-5xl">
          Online Classes
        </h1>
        <p className="mt-4 text-center text-gray-600">
          Self-paced body safety education for parents, kids, and families.
          Start with the free class.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {publishedClasses.map((classItem, index) => (
          <Reveal key={classItem.slug} delay={index * 0.1}>
            <OnlineClassCard classItem={classItem} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
