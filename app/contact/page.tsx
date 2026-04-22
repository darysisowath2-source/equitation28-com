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
        style={{ backgroundImage: `url(/images/photos/861746_retour-longe.jpg)`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/60" />
        <div className="relative z-10">
          <p className="text-amber-400 uppercase text-xs tracking-widest mb-3 font-semibold">Nous joindre</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">Venez nous voir</h1>
          <p className="text-white/80 max-w-xl mx-auto">Une question, une visite, une inscription ? On vous répond sous 24h.</p>
        </div>
      </section>

      {/* Coordonnées + formulaire + documents */}
      <section style={{ background: "var(--cream)" }} className="py-16 px-4 pb-0">
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
      {/* Documents */}
      <section style={{ background: "var(--sand)" }} className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="w-8 h-0.5 bg-amber-500 mb-3" />
          <h2 className="text-xl font-bold mb-2" style={{ color: "var(--primary)" }}>Documents & formulaires</h2>
          <p className="text-sm text-gray-500 mb-6">Tous les documents peuvent être demandés par email ou directement à l'accueil.</p>
          <div className="space-y-3">
            {[
              { titre: "Règlement intérieur", desc: "Les règles de vie et de sécurité en vigueur aux Écuries du Moulin." },
              { titre: "Fiche d'inscription annuelle", desc: "Formulaire à compléter pour l'inscription aux cours de la saison." },
              { titre: "Fiche médicale", desc: "Certificat médical requis pour la pratique de l'équitation." },
              { titre: "Fiche inscription stage", desc: "Formulaire pour s'inscrire aux stages des vacances scolaires." },
              { titre: "Charte du propriétaire", desc: "Droits et devoirs des propriétaires de chevaux pensionnaires." },
            ].map((doc) => (
              <div key={doc.titre} className="flex items-start gap-5 p-4 border border-gray-200 rounded-xl bg-white hover:border-amber-300 transition-all">
                <div className="w-1 h-10 bg-amber-400 rounded-full shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 text-sm mb-0.5">{doc.titre}</h3>
                  <p className="text-xs text-gray-500">{doc.desc}</p>
                </div>
                <a
                  href="mailto:contact@equitation28.com"
                  className="text-xs font-medium border px-3 py-1.5 rounded-full transition-colors whitespace-nowrap self-center hover:bg-amber-500 hover:text-white hover:border-amber-500"
                  style={{ color: "var(--primary)", borderColor: "var(--primary)" }}
                >
                  Demander
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
