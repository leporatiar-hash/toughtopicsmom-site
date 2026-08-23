# Tough Topics Mom — Website

Website for [toughtopicsmom.com](https://toughtopicsmom.com), rebuilt on Next.js and hosted on Vercel.

## Tech stack

- [Next.js 14](https://nextjs.org/docs) (App Router) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) for styling
- Deployed on [Vercel](https://vercel.com/), connected to this GitHub repo — every push to `main` deploys automatically

## Project structure

- `src/app/` — one folder per page/route (e.g. `src/app/about/page.tsx` is the About page)
- `src/components/` — shared pieces used across pages, like `Header.tsx` and `Footer.tsx`
- `src/lib/nav-links.ts` — the list of pages shown in the site navigation; add a page here and it shows up in both the header and footer automatically

## Running locally

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000). Changes to files under `src/` show up instantly.

## Adding a new page

1. Create a new folder under `src/app/` (e.g. `src/app/faq/`) with a `page.tsx` file inside it.
2. Add the page to `src/lib/nav-links.ts` if it should appear in the site navigation.

<!-- trigger Vercel deploy -->

