// One-off content migration for the site updates described in the "Tough
// Topics Mom site updates" task. Run this once against the real Sanity
// dataset to populate the 3 books, the 3 online class cards, the "Parents
// Night" speaking topic, and the booking price labels.
//
// Usage:
//   NEXT_PUBLIC_SANITY_PROJECT_ID=... \
//   NEXT_PUBLIC_SANITY_DATASET=... \
//   SANITY_API_TOKEN=... \
//   node scripts/seed-content.mjs
//
// SANITY_API_TOKEN needs write access — create one at
// https://www.sanity.io/manage under your project's API settings.
// This script is idempotent (safe to re-run): books use createOrReplace by a
// fixed _id, and the speaking page patch only adds "Parents Night" if it
// isn't already there.

import { createClient } from "next-sanity";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..");

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const token = process.env.SANITY_API_TOKEN;

if (!projectId || !dataset || !token) {
  console.error(
    "Missing NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET, or SANITY_API_TOKEN in the environment.",
  );
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2026-07-27",
  token,
  useCdn: false,
});

async function uploadImage(relativePath) {
  const filePath = path.join(repoRoot, relativePath);
  const buffer = fs.readFileSync(filePath);
  const asset = await client.assets.upload("image", buffer, {
    filename: path.basename(filePath),
  });
  return { _type: "image", asset: { _type: "reference", _ref: asset._id } };
}

async function upsertBooks() {
  const bodySafetyCover = await uploadImage(
    "public/images/books/book-body-safety-cover.jpg",
  );

  const books = [
    {
      _id: "book-i-said-no",
      _type: "book",
      title: "I Said No! A Kid to Kid Guide to Keeping Private Parts Private",
      slug: { current: "i-said-no" },
      description:
        "A kid-to-kid guide that helps children understand body safety and keeping private parts private.",
      featured: true,
      buyLinks: [
        { _key: "amazon", label: "Buy on Amazon", url: "https://amzn.to/3SPZ2e9", primary: true },
        { _key: "bookshop", label: "Buy on Bookshop.org" },
        { _key: "signed", label: "Buy a Signed Copy" },
        { _key: "retail", label: "Buy at Retail" },
      ],
    },
    {
      _id: "book-i-said-no-to-hugs",
      _type: "book",
      title: "I Said No to Hugs! A Kid to Kid Guide to Consent",
      slug: { current: "i-said-no-to-hugs" },
      description:
        "A kid-to-kid guide that teaches children about consent and their right to say no to unwanted touch, including hugs.",
      buyLinks: [
        { _key: "amazon", label: "Buy on Amazon", url: "https://amzn.to/4imRIAZ", primary: true },
        { _key: "bookshop", label: "Buy on Bookshop.org" },
        { _key: "signed", label: "Buy a Signed Copy" },
        { _key: "retail", label: "Buy at Retail" },
      ],
    },
    {
      _id: "book-body-safety-for-young-children",
      _type: "book",
      title: "Body Safety for Young Children: Empowering Caring Adults",
      slug: { current: "body-safety-for-young-children" },
      description:
        "A guide for the caring adults in a young child's life, empowering parents, teachers, and caregivers to talk about body safety.",
      coverImage: bodySafetyCover,
      buyLinks: [
        { _key: "amazon", label: "Buy on Amazon", url: "https://amzn.to/4zmxi18", primary: true },
        { _key: "bookshop", label: "Buy on Bookshop.org" },
        { _key: "signed", label: "Buy a Signed Copy" },
        { _key: "retail", label: "Buy at Retail" },
      ],
    },
  ];

  for (const book of books) {
    await client.createOrReplace(book);
    console.log(`Upserted ${book._id}`);
  }
}

async function updateOnlineClassesPage() {
  const doc = await client.fetch(`*[_id == "onlineClassesPage"][0]{_id}`);
  if (!doc) {
    console.log(
      'No onlineClassesPage document found — create it in Studio first (Content > Online Classes Page), then re-run this script.',
    );
    return;
  }

  const classes = [
    {
      _key: "free-class",
      title: "Free Body Safety Parenting Class",
      description:
        "Start here — a free class to help you begin body safety conversations with confidence.",
      buttonLabel: "Take the free class",
      buttonUrl:
        "https://stan.store/Toughtopicsmom/p/take-my-free-body-safety-parenting-class-today",
    },
    {
      _key: "body-boss-bootcamp",
      title: "Body Boss Bootcamp",
      description: "Body safety for kids — a practical bootcamp for parents ready to go deeper.",
      buttonLabel: "Enroll on Stan",
      buttonUrl: "https://stan.store/Toughtopicsmom/p/body-boss-bootcamp-body-safety-for-kids",
    },
    {
      _key: "raising-safe-siblings",
      title: "Raising Safe Siblings",
      description: "Sibling sexual abuse prevention — protect every child in the family.",
      buttonLabel: "Enroll on Stan",
      buttonUrl: "https://stan.store/Toughtopicsmom/p/raising-safe-siblings",
    },
  ];

  await client.patch("onlineClassesPage").set({ classes }).commit();
  console.log("Updated onlineClassesPage classes");
}

async function updateSpeakingPage() {
  const doc = await client.fetch(
    `*[_id == "speakingPage"][0]{_id, topics, bookingOptions}`,
  );
  if (!doc) {
    console.log(
      "No speakingPage document found — create it in Studio first (Content > Speaking Page), then re-run this script.",
    );
    return;
  }

  const topics = doc.topics ?? [];
  const hasParentsNight = topics.some((t) => t.title === "Parents Night");
  const newTopics = hasParentsNight
    ? topics
    : [
        ...topics,
        {
          _key: "parents-night",
          title: "Parents Night",
          description:
            "Create safety circles by empowering the parents in your community.",
        },
      ];

  const bookingOptions = doc.bookingOptions ?? [];
  const newBookingOptions = bookingOptions.map((option) => ({
    ...option,
    priceLabel: "Inquire for pricing",
  }));

  await client
    .patch("speakingPage")
    .set({ topics: newTopics, bookingOptions: newBookingOptions })
    .commit();
  console.log("Updated speakingPage topics/pricing");
}

async function main() {
  await upsertBooks();
  await updateOnlineClassesPage();
  await updateSpeakingPage();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
