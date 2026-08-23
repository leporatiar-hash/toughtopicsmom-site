export type PressMention = {
  name: string;
  // Path under /public, e.g. "/logos/harvard-gse.svg". Leave unset to show
  // a text chip with the name instead — swap in once a real logo file exists.
  logoSrc?: string;
};

export type FeaturedPress = {
  publication: string;
  title: string;
  url: string;
};

// Sourced from toughtopicsmom.com — WJLA is the ABC affiliate for Washington, DC.
export const featuredPress: FeaturedPress = {
  publication: "ABC7 / WJLA — The Mother Side",
  title: "The Importance of Discussing Body Safety and Privacy with Children",
  url: "https://wjla.com/features/the-mother-side/the-importance-of-discussing-body-safety-and-privacy-with-children",
};

export const sitePressMentions: PressMention[] = [
  { name: "ABC", logoSrc: "/logos/abc.svg" },
  { name: "NBC", logoSrc: "/logos/nbc.svg" },
  { name: "FOX", logoSrc: "/logos/fox.svg" },
  { name: "Forbes", logoSrc: "/logos/forbes.svg" },
  { name: "Harvard Graduate School of Education", logoSrc: "/logos/harvard-gse.svg" },
  { name: "Mayo Clinic", logoSrc: "/logos/mayo-clinic.svg" },
];

export const speakingPressMentions: PressMention[] = [
  { name: "ABC", logoSrc: "/logos/abc.svg" },
  { name: "NBC", logoSrc: "/logos/nbc.svg" },
  { name: "FOX", logoSrc: "/logos/fox.svg" },
  { name: "Forbes", logoSrc: "/logos/forbes.svg" },
  { name: "Popsugar", logoSrc: "/logos/popsugar.png" },
  { name: "Harvard Graduate School of Education", logoSrc: "/logos/harvard-gse.svg" },
  { name: "Mayo Clinic", logoSrc: "/logos/mayo-clinic.svg" },
  // TODO: no reliable official logo file found for these — see chat notes
  { name: "Parents Magazine" },
  { name: "Child Mind Institute" },
];

export const spokenAtMentions: PressMention[] = [
  // TODO: no reliable official logo file found — see chat notes
  { name: "NAEYC" },
  { name: "Johns Hopkins", logoSrc: "/logos/johns-hopkins.png" },
  // TODO: no reliable official logo file found — see chat notes
  { name: "NCOSE" },
  // TODO: available from UIC's official branding toolkit (medicine.uic.edu) but
  // requires going through their marketing office directly — see chat notes
  { name: "University of Illinois College of Medicine Rockford" },
];
