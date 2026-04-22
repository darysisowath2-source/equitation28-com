import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact — Écuries du Moulin",
  description: "Contactez les Écuries du Moulin par téléphone ou via notre formulaire. Centre équestre à Ecluzelles, Eure-et-Loir (28).",
};

export default function Contact() {
  return (
    <>
      <section
        className="relative min-h-screen px-4 text-center overflow-hidden flex items-center justify-center"
        style={{ backgroundImage: `url(/images/rubriques/71815_coucher-de-soleil.jpg)`, backgroundSize: "cover", backgroundPosition: "center 40%" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/60" />
        <div className="relative z-10">
          <p className="text-amber-400 uppercase text-xs tracking-widest mb-3 font-semibold">Nous joindre</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">Venez nous voir</h1>
          <p className="text-white/80 max-w-xl mx-auto">Une question, une visite, une inscription ? On vous répond sous 24h.</p>
        </div>
      </section>

      {/* Coordonnées + formulaire */}
      <section style={{ background: "var(--cream)" }} className="py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Colonne gauche — infos + carte */}
          <div>
            <div className="w-8 h-0.5 bg-amber-500 mb-3" />
            <h2 className="text-xl font-bold mb-6" style={{ color: "var(--primary)" }}>Nos coordonnées</h2>
            <ul className="space-y-6 text-gray-700">
              {[
                { label: "Adresse", value: "Les Écuries du Moulin\n28500 Ecluzelles\nEure-et-Loir (28)" },
                { label: "Téléphone", value: "06 71 45 27 28 (SMS acceptés)\n02 37 62 01 10 (8h00–19h00)" },
                { label: "Horaires", value: "Tous les jours de 8h00 à 19h00" },
                { label: "Inscriptions", value: "Espace perso en ligne disponible" },
              ].map(({ label, value }) => (
                <li key={label} className="flex gap-4">
                  <div className="w-1 bg-amber-300 rounded-full shrink-0" />
                  <div>
                    <p className="font-semibold text-sm text-amber-700 uppercase tracking-wide mb-0.5">{label}</p>
                    <p className="text-sm text-gray-600 whitespace-pre-line">{value}</p>
                  </div>
                </li>
              ))}
            </ul>

            {/* Photo équipe entre les infos et la carte */}
            <div className="mt-8 rounded-xl overflow-hidden shadow-sm">
              <img
                src="/images/photos/554993_gwen_licol_nestor.jpg"
                alt="L'équipe vous accueille"
                className="w-full h-44 object-cover"
              />
            </div>

            <div className="mt-4 rounded-xl overflow-hidden border border-gray-200 shadow-sm">
              <iframe
                title="Localisation Écuries du Moulin"
                src="https://maps.google.com/maps?q=Les+Ecuries+du+Moulin+Ecluzelles+28500&output=embed"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Colonne droite — formulaire */}
          <div>
            <div className="w-8 h-0.5 bg-amber-500 mb-3" />
            <h2 className="text-xl font-bold mb-2" style={{ color: "var(--primary)" }}>Envoyer un message</h2>
            <p className="text-sm text-gray-500 mb-6">On vous répond sous 24h, SMS acceptés.</p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
