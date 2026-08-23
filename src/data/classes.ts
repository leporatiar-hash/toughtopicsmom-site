export type OnlineClass = {
  slug: string;
  title: string;
  audience: "Parents" | "Kids" | "Families";
  description: string;
  price: string;
  url: string;
  coverSrc: string;
  coverAlt: string;
  published: boolean;
};

export const classes: OnlineClass[] = [
  {
    slug: "body-safety-parenting-class",
    title: "Take My FREE Body Safety Parenting Class Today!",
    audience: "Parents",
    description:
      "A free, self-paced class that walks parents through how to introduce body safety at home, what to say, and when to start.",
    price: "Free",
    url: "https://stan.store/Toughtopicsmom/p/take-my-free-body-safety-parenting-class-today",
    coverSrc: "/images/classes/parenting-class.png",
    coverAlt: "Free Body Safety Parenting Class cover",
    published: true,
  },
  {
    slug: "body-boss-bootcamp",
    title: "Body Boss Bootcamp",
    audience: "Kids",
    description:
      "Fun, age-appropriate lessons that help kids learn body safety rules, set boundaries, and trust their own voice.",
    price: "$17.00",
    url: "https://stan.store/Toughtopicsmom/p/body-boss-bootcamp-body-safety-for-kids",
    coverSrc: "/images/classes/body-boss-bootcamp.jpg",
    coverAlt: "Body Boss Bootcamp body safety course for kids cover",
    published: true,
  },
  {
    slug: "raising-safe-siblings",
    title: "Raising Safe Siblings",
    audience: "Families",
    description:
      "How to recognize, prevent, and respond to sibling sexual abuse, and build a home where every child is safe.",
    price: "$37.00",
    url: "https://stan.store/Toughtopicsmom/p/raising-safe-siblings-",
    coverSrc: "/images/classes/raising-safe-siblings.jpg",
    coverAlt: "Raising Safe Siblings class cover",
    published: true,
  },
];
