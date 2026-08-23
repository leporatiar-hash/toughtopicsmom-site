export type BuyLink = {
  label: string;
  url: string | null;
  primary?: boolean;
};

export type Book = {
  slug: string;
  title: string;
  description: string;
  coverImage: string | null;
  badge?: string;
  bulkOrderNote?: string;
  featured?: boolean;
  buyLinks: BuyLink[];
};

// TODO: real cover image and buy link URLs for "I Said No!" from Kimberly
export const books: Book[] = [
  {
    slug: "i-said-no",
    title: "I Said No! A Kid-to-Kid Guide to Keeping Private Parts Private",
    description:
      "A Mom's Choice Awards® Gold Recipient, I Said No! was Amazon's number-one-selling book on sexual abuse prevention for many years. Written from a child's point of view, it helps kids learn how to set healthy boundaries for their private parts, using an easy-to-use system to rehearse and remember appropriate responses. The newest edition, published by Marble Press, includes updated illustrations and essential online safety content for today's world.",
    coverImage: null,
    badge: "Mom's Choice Gold Award Winner",
    bulkOrderNote:
      "Bulk discounts available for educators, therapists, and advocates — reach out via Contact.",
    featured: true,
    buyLinks: [
      { label: "Buy on Bookshop.org", url: null, primary: true },
      { label: "Buy on Amazon", url: null },
    ],
  },
  {
    slug: "body-safety-for-young-children",
    title: "Body Safety for Young Children: Empowering Caring Adults",
    description:
      "The only book of its kind built to empower parents and teachers to protect children at home and at school — think \"What to Expect When You're Expecting\" for body safety education. An authentic, easy-to-read, and immediately implementable resource for anyone working to reduce the risk of child sexual abuse.",
    coverImage: "/images/books/book-body-safety-cover.jpg",
    buyLinks: [
      { label: "Buy a Signed Copy", url: null, primary: true },
      { label: "Buy at Retail", url: null },
    ],
  },
];
