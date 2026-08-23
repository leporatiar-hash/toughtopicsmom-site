"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "@/lib/nav-links";
import NavLink from "@/components/NavLink";

// TODO: point at a real booking flow (e.g. Calendly) once one exists
const DISCOVERY_CALL_URL = "/contact";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 8);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white/90 backdrop-blur transition-shadow ${
        isScrolled ? "border-transparent shadow-md" : "border-brand-light shadow-none"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo-mark.png"
            alt=""
            width={40}
            height={40}
            className="h-10 w-10"
            priority
          />
          <span className="text-xl font-bold text-brand-dark">
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
                    className="group relative text-sm font-medium text-gray-700 transition-colors hover:text-brand-dark"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 bg-accent transition-transform duration-200 group-hover:scale-x-100" />
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href={DISCOVERY_CALL_URL}
            className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:scale-105 hover:bg-accent-dark hover:shadow-md"
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
            className="block h-0.5 w-6 bg-brand-dark"
          />
          <motion.span
            animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block h-0.5 w-6 bg-brand-dark"
          />
          <motion.span
            animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="block h-0.5 w-6 bg-brand-dark"
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
            className="overflow-hidden border-t border-brand-light lg:hidden"
          >
            <ul className="flex flex-col px-4 py-2 sm:px-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <NavLink
                    link={link}
                    className="block py-2 text-sm font-medium text-gray-700 hover:text-brand-dark"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href={DISCOVERY_CALL_URL}
                  className="inline-block rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white"
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
