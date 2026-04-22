import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Activités & Cours — Écuries du Moulin",
  description:
    "Cours d'équitation pour enfants et adultes, stages vacances, CSO, Equifun, groupes et animations au centre équestre d'Ecluzelles.",
};

const activites = [
  {
    title: "Cours enfants & ados (3–17 ans)",
    desc: "Des cours adaptés à chaque âge, du poney club pour les plus petits jusqu'aux galops pour les ados. Ambiance familiale, poneys calmes et encadrement diplômé d'État.",
    img: "/images/photos/554993_gwen_licol_nestor.jpg",
  },
  {
    title: "Cours adultes (18 ans et plus)",
    desc: "Débutants ou confirmés, nous accueillons les adultes dans des cours collectifs ou particuliers, selon votre niveau et vos objectifs.",
    img: "/images/photos/687154_florestine .jpg",
  },
  {
    title: "Stages vacances",
    desc: "Stages d'équitation pendant toutes les vacances scolaires. Demi-journée ou journée complète, pour les enfants dès 3 ans. Les inscriptions se font en ligne.",
    img: "/images/photos/222198_ATILA.jpg",
  },
  {
    title: "CSO — Saut d'obstacles",
    desc: "Préparez-vous à la compétition avec nos entraînements spécifiques en saut d'obstacles. De l'initiation aux barres au parcours en hauteur.",
    img: "/images/photos/790107_concours.jpg",
  },
  {
    title: "Equifun & Dressage",
    desc: "Pour ceux qui cherchent une pratique ludique ou artistique : carrousels, Equifun en équipe, ou dressage pour développer la complicité avec le cheval.",
    img: "/images/photos/876866_carrousel_10_separation.jpg",
  },
  {
    title: "Groupes & Animations",
    desc: "Sorties d'entreprise, anniversaires, groupes scolaires… Nous organisons des animations équestres sur mesure pour tous les publics.",
    img: "/images/photos/150015_fete du club.jpg",
  },
];

const planning = [
  { jour: "Lundi", horaires: "16h–19h (ados/adultes)" },
  { jour: "Mardi", horaires: "16h–19h (enfants/ados)" },
  { jour: "Mercredi", horaires: "9h–18h (tous niveaux)" },
  { jour: "Jeudi", horaires: "16h–19h (adultes)" },
  { jour: "Vendredi", horaires: "16h–19h (enfants/ados)" },
  { jour: "Samedi", horaires: "9h–18h (tous niveaux)" },
  { jour: "Dimanche", horaires: "9h–13h (sur demande)" },
];

export default function Activites() {
  return (
    <>
      <section
        className="relative min-h-screen px-4 text-center overflow-hidden flex items-center justify-center"
        style={{
          backgroundImage: `url(/images/rubriques/533077_cours.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 to-black/40" />
        <div className="relative z-10">
          <p className="text-amber-400 uppercase text-xs tracking-widest mb-3 font-semibold">Le programme</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">Activités & Cours</h1>
          <p className="text-white/80 max-w-xl mx-auto">
            Des cours adaptés à tous les niveaux, de 3 ans à l'âge adulte, dans une ambiance familiale et bienveillante.
          </p>
        </div>
      </section>

      <section style={{ background: "var(--cream)" }} className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {activites.map((a) => (
              <div key={a.title} className="rounded-xl border border-gray-200 overflow-hidden hover:border-amber-300 hover:shadow-md transition-all bg-white">
                <div className="h-44 overflow-hidden">
                  <img src={a.img} alt={a.title} loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-5">
                  <div className="w-6 h-0.5 bg-amber-400 mb-3" />
                  <h2 className="font-semibold mb-2" style={{ color: "var(--primary)" }}>{a.title}</h2>
                  <p className="text-sm text-gray-600 leading-relaxed">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--sand)" }} className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="w-8 h-0.5 bg-amber-500 mb-3 mx-auto" />
          <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: "var(--primary)" }}>Planning indicatif</h2>
          <div className="overflow-hidden rounded-xl border border-amber-200">
            <table className="w-full text-sm">
              <thead className="text-white" style={{ background: "var(--primary)" }}>
                <tr>
                  <th className="text-left px-4 py-3">Jour</th>
                  <th className="text-left px-4 py-3">Horaires</th>
                </tr>
              </thead>
              <tbody>
                {planning.map((row, i) => (
                  <tr key={row.jour} style={{ background: i % 2 === 0 ? "white" : "var(--sand)" }}>
                    <td className="px-4 py-3 font-medium text-gray-800">{row.jour}</td>
                    <td className="px-4 py-3 text-gray-600">{row.horaires}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3 text-center">
            Planning susceptible d'évoluer. Contactez-nous pour confirmer les créneaux.
          </p>
        </div>
      </section>

      <section style={{ background: "var(--cream)" }} className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="w-8 h-0.5 bg-amber-500 mb-3 mx-auto" />
          <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: "var(--primary)" }}>Tarifs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: "Adhésion enfant (6–17 ans)", price: "90 €" },
              { label: "Forfait annuel (1 cours/sem.)", price: "833 €" },
              { label: "Carte 10 séances (adhérent)", price: "285 €" },
              { label: "Cours collectif 1h (adhérent)", price: "31 €" },
              { label: "Cours particulier 1h (adhérent)", price: "39 €" },
              { label: "Cours Babys 45 min (3–5 ans)", price: "20 €" },
              { label: "Carte 10 séances Babys", price: "185 €" },
              { label: "Animation groupe", price: "Sur devis" },
            ].map((t) => (
              <div key={t.label} className="flex justify-between items-center p-4 border border-gray-200 rounded-lg hover:border-amber-200 bg-white transition-colors">
                <span className="text-sm text-gray-700">{t.label}</span>
                <span className="text-sm font-semibold text-amber-700">{t.price}</span>
              </div>
            ))}
          </div>
          <p className="text-center mt-8">
            <a
              href="https://cloud10.kavalog.fr/ECURIESDUMOULIN/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-amber-500 text-white px-7 py-3 rounded-full font-semibold hover:bg-amber-400 transition-colors shadow"
            >
              S'inscrire en ligne
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
