"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const links = [
  { label: "Accueil", href: "/" },
  { label: "Présentation", href: "/presentation" },
  { label: "Activités & Cours", href: "/activites" },
  { label: "Propriétaires", href: "/proprietaires" },
  { label: "Vie du club", href: "/vie-du-club" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between gap-4">

        {/* Logo : emblème + nom */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <img
            src="/images/logo_emblem.png"
            alt="Écuries du Moulin"
            className="h-10 w-auto"
          />
          <span
            className={`font-bold text-base hidden lg:block transition-colors duration-300 ${
              scrolled ? "text-[#3d2b1f]" : "text-white drop-shadow"
            }`}
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Écuries du Moulin
          </span>
        </Link>

        {/* Liens desktop */}
        <nav className="hidden md:flex items-center gap-0.5" aria-label="Navigation principale">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors whitespace-nowrap ${
                  active
                    ? scrolled
                      ? "bg-amber-50 text-amber-700 border border-amber-200"
                      : "text-amber-400 border border-amber-400/50"
                    : scrolled
                    ? "text-gray-600 hover:bg-amber-50 hover:text-amber-800"
                    : "text-white/90 hover:text-white drop-shadow"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        {/* Hamburger mobile */}
        <button
          className={`md:hidden p-2 rounded transition-colors ${
            scrolled ? "text-gray-700 hover:bg-gray-100" : "text-white"
          }`}
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
        >
          <span className="block w-5 h-0.5 bg-current mb-1" />
          <span className="block w-5 h-0.5 bg-current mb-1" />
          <span className="block w-5 h-0.5 bg-current" />
        </button>
      </div>

      {/* Menu mobile */}
      {open && (
        <nav
          className="md:hidden border-t border-white/20 px-4 py-3 flex flex-col gap-1 bg-black/70 backdrop-blur-md"
          aria-label="Menu mobile"
        >
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={`py-2.5 px-3 text-sm font-medium rounded ${
                  active ? "text-amber-400" : "text-white/90 hover:text-white"
                }`}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
