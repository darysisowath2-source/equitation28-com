import ScrollArrow from "../components/ScrollArrow";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Propriétaires — Écuries du Moulin",
  description: "Pension complète, boxes, pensions au pré et hébergements courts pour vos chevaux aux Écuries du Moulin, Ecluzelles (28).",
};

const formules = [
  {
    title: "Formule Basique",
    price: "À partir de 320 € / mois",
    items: ["Box individuel (4×4 m ou 3,5×3 m)", "Entretien quotidien du box", "Alimentation foin + floconné", "Accès carrières et manège", "Surveillance quotidienne"],
    img: "/images/photos/6443_ecuries-arrosees.jpg",
  },
  {
    title: "Formule Confort",
    price: "À partir de 420 € / mois",
    items: ["Tout inclus Formule Basique", "Sortie en paddock ou travail en longe", "1 cours collectif / semaine OU 1 monte / semaine", "Suivi personnalisé", "Idéal pour les propriétaires réguliers"],
    img: "/images/photos/820208_pre_vu_du_fond.jpg",
  },
  {
    title: "Formule Premium",
    price: "695 € / mois",
    items: ["Tout inclus Formule Confort", "Travail monté régulier en l'absence du propriétaire", "Suivi et compte-rendu personnalisé", "Participation possible aux compétitions CSO", "La solution tout-en-un"],
    img: "/images/photos/52688_lea-et-tibisou-2.jpg",
  },
  {
    title: "Services à la carte",
    price: "Sur devis",
    items: ["Litière copeaux : 60 €/mois", "Travail monté : 25 €/séance", "Travail en longe : 15 €/séance", "Sortie paddock : 10 €/séance", "Débourrage : 300 €"],
    img: "/images/photos/258635_tristan-longe.jpg",
  },
];

export default function Proprietaires() {
  return (
    <>
      <section
        className="relative min-h-screen px-4 text-center overflow-hidden flex items-center justify-center"
        style={{ backgroundImage: `url(/images/photos/861746_retour-longe.jpg)`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 to-black/40" />
        <div className="relative z-10">
          <p className="text-amber-400 uppercase text-xs tracking-widest mb-3 font-semibold">Pension</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">Propriétaires</h1>
          <p className="text-white/80 max-w-xl mx-auto">Confiez-nous votre cheval dans un cadre naturel, sécurisé et à taille humaine.</p>
        </div>
        <ScrollArrow />
      </section>

      <section style={{ background: "var(--cream)" }} className="py-16 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10 items-center">
          <div className="md:w-1/2 rounded-xl overflow-hidden shadow-md">
            <img src="/images/photos/554993_gwen_licol_nestor.jpg" alt="Sortie des pensionnaires" loading="lazy" className="w-full h-64 object-cover" />
          </div>
          <div className="md:w-1/2">
            <div className="w-8 h-0.5 bg-amber-500 mb-3" />
            <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--primary)" }}>Votre cheval chez nous</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Les Écuries du Moulin accueillent les chevaux et poneys de propriétaires dans un environnement calme et verdoyant. Nous proposons différentes formules de pension, adaptées à vos besoins et à ceux de votre cheval.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Nos soignants assurent les soins quotidiens, et vous avez accès aux installations du club pour travailler votre cheval à votre rythme.
            </p>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--sand)" }} className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="w-8 h-0.5 bg-amber-500 mb-3 mx-auto" />
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: "var(--primary)" }}>Nos formules</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {formules.map((f) => (
              <div key={f.title} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-amber-300 hover:shadow-md transition-all">
                <div className="h-40 overflow-hidden">
                  <img src={f.img} alt={f.title} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <div className="w-6 h-0.5 bg-amber-400 mb-3" />
                  <h3 className="font-semibold mb-1" style={{ color: "var(--primary)" }}>{f.title}</h3>
                  <p className="text-amber-600 font-semibold text-sm mb-3">{f.price}</p>
                  <ul className="text-sm text-gray-600 space-y-1.5">
                    {f.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--cream)" }} className="py-16 px-4 text-center">
        <h2 className="text-xl font-bold mb-3" style={{ color: "var(--primary)" }}>Intéressé par une de nos formules ?</h2>
        <p className="text-gray-600 mb-6">Contactez-nous pour visiter le club et discuter de vos besoins.</p>
        <a href="/contact" className="inline-block bg-amber-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-400 transition-colors shadow">
          Nous contacter
        </a>
      </section>
    </>
  );
}
