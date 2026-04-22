"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

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
  const pathname = usePathname();

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-200/60 sticky top-0 z-50">
      <div
        className="text-white text-xs text-center py-1.5 px-4"
        style={{ background: "var(--primary)" }}
      >
        Les Écuries du Moulin — 28500 Ecluzelles &nbsp;|&nbsp;
        <a href="tel:0671452728" className="underline hover:text-amber-300">06 71 45 27 28</a>
        &nbsp;·&nbsp;
        <a href="tel:0237620110" className="underline hover:text-amber-300">02 37 62 01 10</a>
        &nbsp;(8h–19h)
      </div>
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <img src="/images/logo.png" alt="Écuries du Moulin" className="h-8 w-auto" />
        </Link>

        <nav className="hidden md:flex flex-wrap gap-1" aria-label="Navigation principale">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={`px-3 py-1.5 text-sm font-medium rounded transition-colors ${
                  active
                    ? "bg-amber-50 text-amber-700 border border-amber-200"
                    : "text-gray-600 hover:bg-amber-50 hover:text-amber-800"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <button
          className="md:hidden p-2 rounded text-gray-700 hover:bg-gray-100"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
        >
          <span className="block w-5 h-0.5 bg-current mb-1" />
          <span className="block w-5 h-0.5 bg-current mb-1" />
          <span className="block w-5 h-0.5 bg-current" />
        </button>
      </div>

      {open && (
        <nav
          className="md:hidden border-t border-gray-100 px-4 py-2 flex flex-col gap-1"
          aria-label="Menu mobile"
        >
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={`py-2 px-2 text-sm font-medium rounded ${
                  active ? "text-amber-700 bg-amber-50" : "text-gray-700 hover:text-amber-800"
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
