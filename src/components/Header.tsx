"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "@/lib/nav-links";
import NavLink from "@/components/NavLink";

// TODO: point at a real booking flow (e.g. Calendly) once one exists
const DISCOVERY_CALL_URL = "/contact";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-navy">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo-mark.png"
            alt=""
            width={32}
            height={32}
            className="h-8 w-8"
            priority
          />
          <span className="font-script text-2xl text-white">
            Tough Topics Mom
          </span>
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          <nav>
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <NavLink
                    link={link}
                    className="group relative text-xs font-medium uppercase tracking-wide text-white/80 transition-colors hover:text-white"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 bg-navy-light transition-transform duration-200 group-hover:scale-x-100" />
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href={DISCOVERY_CALL_URL}
            className="rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wide text-navy transition-all duration-200 hover:scale-105 hover:shadow-md"
          >
            Free Discovery Call
          </a>
        </div>

        <button
          type="button"
          className="flex h-6 w-6 flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <motion.span
            animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="block h-0.5 w-6 bg-white"
          />
          <motion.span
            animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block h-0.5 w-6 bg-white"
          />
          <motion.span
            animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="block h-0.5 w-6 bg-white"
          />
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-white/10 lg:hidden"
          >
            <ul className="flex flex-col px-4 py-2 sm:px-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <NavLink
                    link={link}
                    className="block py-2 text-sm font-medium text-white/80 hover:text-white"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
              <li className="pt-2 pb-2">
                <a
                  href={DISCOVERY_CALL_URL}
                  className="inline-block rounded-full bg-white px-4 py-2 text-sm font-semibold text-navy"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Free Discovery Call
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
