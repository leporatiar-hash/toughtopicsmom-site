export type BookingOption = {
  title: string;
  priceLabel?: string;
};

// TODO: real pricing from Kimberly — omitted for now so no price line shows
export const bookingOptions: BookingOption[] = [
  { title: "Keynote" },
  { title: "Workshop & Staff Training" },
  { title: "Panelist" },
];
