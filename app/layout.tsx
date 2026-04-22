import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const playfair = Playfair_Display({ variable: "--font-playfair", subsets: ["latin"] });

const siteUrl = "https://www.equitation28.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Écuries du Moulin — Centre Équestre Eure-et-Loir (28)",
    template: "%s — Écuries du Moulin",
  },
  description:
    "Centre équestre à Ecluzelles (28), près de Dreux et Rambouillet. Cours pour enfants et adultes, stages vacances, CSO, Equifun et écuries de propriétaires.",
  keywords: [
    "centre équestre", "équitation", "Ecluzelles", "Eure-et-Loir", "28",
    "Dreux", "Rambouillet", "cours cheval", "poney club", "stages vacances",
    "CSO", "pension cheval", "écuries propriétaires",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Écuries du Moulin",
    title: "Écuries du Moulin — Centre Équestre Eure-et-Loir (28)",
    description:
      "Cours d'équitation, stages vacances, CSO, Equifun et écuries de propriétaires à Ecluzelles (28).",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  name: "Les Écuries du Moulin",
  description: "Centre équestre à Ecluzelles, Eure-et-Loir. Cours, stages, CSO, pension.",
  url: siteUrl,
  telephone: ["+33671452728", "+33237620110"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ecluzelles",
    postalCode: "28500",
    addressLocality: "Ecluzelles",
    addressRegion: "Eure-et-Loir",
    addressCountry: "FR",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    opens: "08:00",
    closes: "19:00",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 48.7,
    longitude: 1.45,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${geist.variable} ${playfair.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
