export type NavLink = {
  label: string;
  href: string;
  external?: boolean;
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Speaking", href: "/speaking" },
  { label: "Books", href: "/books" },
  { label: "Online Classes", href: "/online-classes" },
  { label: "The Blind Spot", href: "https://kimberlykingauthor.substack.com", external: true },
  { label: "Contact", href: "/contact" },
];
