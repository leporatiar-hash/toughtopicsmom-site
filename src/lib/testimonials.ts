export type Testimonial = {
  quote: string;
  author: string;
  role?: string;
};

// Sourced from toughtopicsmom.com (the live site being replaced by this rebuild).
// Book-specific quotes lead the list since the Books page only shows a short
// excerpt (see TestimonialSection's `limit` prop).
export const testimonials: Testimonial[] = [
  {
    quote: "I Said No! helps empower kids to use their voice and set boundaries.",
    author: "Erin Merryn",
    role: "MSW, Author and Founder of Erin's Law",
  },
  {
    quote:
      "I Said No! is at the top of my list for child sexual abuse prevention resources.",
    author: "Dr. Betsy Kanarowski",
    role: "PhD, LCSW, Chief Clinical Officer at Saprea",
  },
  {
    quote: "I Said No! is one of those books...both clear and empowering.",
    author: "Shawna Wollbrink",
    role: "RN, Mayo Clinic Center for Safe and Healthy Children",
  },
  {
    quote: "I Said No! provides easy-to-understand guidelines for children.",
    author: "Lindsay Hawthorne",
    role: "Enough Abuse",
  },
  {
    quote:
      "This book is a conversation starter, a confidence builder, and a potential lifesaver.",
    author: "Nicki Reisberg",
    role: "Scrolling to Death",
  },
  {
    quote:
      "The updated illustrations and information really helped my oldest comprehend.",
    author: "Lauren Brown",
    role: "Independent Bookseller, Poppy Books and Gifts",
  },
  {
    quote: "I Said No! is one of those books...a must-have on every child's bookshelf.",
    author: "Erica Saccoccio",
    role: "Founder, Family Tree School Age Enrichment Program",
  },
  {
    quote:
      "An adorable way to help empower kids in their choices and reinforce their right to bodily autonomy.",
    author: "Sarah Casper",
    role: "Educator and Founder of Comprehensive Consent",
  },
  {
    quote:
      "A must take class that helps parents introduce body safety skills every family needs.",
    author: "Diane Tarantini",
    role: "Author of The Brave Knight",
  },
  {
    quote:
      "My toddlers got so much out of Body Safety Boss! I love that we can keep going back to it as they grow.",
    author: "Nicole Cheever",
    role: "The Potty Mama",
  },
  {
    quote:
      "The perfect compliment to the body safety lessons you're starting to teach your kids.",
    author: "Rosalia Rivera",
    role: "Founder of Consent Parenting",
  },
  {
    quote:
      "Body Safety Boss Bootcamp is an incredibly comprehensive body safety education resource.",
    author: "Lizzie Charboneau",
    role: "Author of Your Whole Body Book",
  },
  {
    quote:
      "An incredibly informative resource that thoughtfully covers essential body safety concepts.",
    author: "Victoria Barendsen",
    role: "Registered Psychologist, The Safe Kids Project",
  },
];
