import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documents utiles — Écuries du Moulin",
  description: "Téléchargez les règlements, formulaires et documents utiles des Écuries du Moulin.",
};

const docs = [
  { titre: "Règlement intérieur", desc: "Les règles de vie et de sécurité en vigueur aux Écuries du Moulin." },
  { titre: "Fiche d'inscription annuelle", desc: "Formulaire à compléter pour l'inscription aux cours de la saison." },
  { titre: "Fiche médicale", desc: "Certificat médical requis pour la pratique de l'équitation." },
  { titre: "Fiche inscription stage", desc: "Formulaire pour s'inscrire aux stages des vacances scolaires." },
  { titre: "Charte du propriétaire", desc: "Droits et devoirs des propriétaires de chevaux pensionnaires." },
];

export default function Documents() {
  return (
    <>
      <section
        className="relative min-h-screen px-4 text-center overflow-hidden flex items-center justify-center"
        style={{ backgroundImage: `url(/images/rubriques/71815_coucher-de-soleil.jpg)`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 to-black/40" />
        <div className="relative z-10">
          <p className="text-amber-400 uppercase text-xs tracking-widest mb-3 font-semibold">Ressources</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">Documents utiles</h1>
          <p className="text-white/80 max-w-xl mx-auto">Retrouvez ici tous les documents pratiques liés à votre inscription et à la vie du club.</p>
        </div>
      </section>

      <section style={{ background: "var(--cream)" }} className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {docs.map((doc) => (
              <div key={doc.titre} className="flex items-start gap-5 p-5 border border-gray-200 rounded-xl bg-white hover:border-amber-300 hover:bg-amber-50/30 transition-all">
                <div className="w-1 h-12 bg-amber-400 rounded-full shrink-0 mt-1" />
                <div className="flex-1">
                  <h2 className="font-semibold text-gray-800 mb-1">{doc.titre}</h2>
                  <p className="text-sm text-gray-600">{doc.desc}</p>
                </div>
                <a
                  href="/contact"
                  className="text-xs font-medium border px-3 py-1.5 rounded-full transition-colors whitespace-nowrap self-center hover:bg-amber-500 hover:text-white hover:border-amber-500"
                  style={{ color: "var(--primary)", borderColor: "var(--primary)" }}
                >
                  Demander
                </a>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-amber-50 border border-amber-200 rounded-xl p-6 text-center">
            <p className="text-gray-700 text-sm mb-4">Vous ne trouvez pas le document dont vous avez besoin ?</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/contact"
                className="text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-colors"
                style={{ background: "var(--primary)" }}
              >
                Nous contacter
              </a>
              <a
                href="https://cloud10.kavalog.fr/ECURIESDUMOULIN/"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-amber-500 text-amber-700 px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-amber-500 hover:text-white transition-colors"
              >
                Espace perso en ligne
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
