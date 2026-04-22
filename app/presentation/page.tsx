import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Présentation — Écuries du Moulin",
  description:
    "Découvrez l'équipe, les installations et l'histoire des Écuries du Moulin, centre équestre à Ecluzelles en Eure-et-Loir.",
};

const sections = [
  {
    title: "Au cœur d'Écluzelles",
    text: "Situées dans un cadre exceptionnel sur 13 hectares à 1 heure à l'Ouest de Paris, les Écuries du Moulin vous accueillent dans une ambiance à la fois professionnelle et familiale. Facilement accessibles par la N12 et la N154, elles offrent une infrastructure de qualité adaptée à tous les cavaliers, du loisir à la compétition.",
    img: "/images/photos/319428_coeur du village.jpg",
    alt: "Au cœur du village d'Ecluzelles",
  },
  {
    title: "La vie au pré",
    text: "Nos écuries possèdent 10 hectares de prairies, offrant un cadre idéal pour le bien-être de nos chevaux et poneys. Ces espaces de pâture permettent à nos équidés de profiter d'une vie en plein air, favorisant leur santé physique et mentale. Les prairies sont soigneusement entretenues, garantissant une herbe fraîche et nutritive.",
    img: "/images/photos/667374_436365_cheval-pre2.jpg",
    alt: "La vie au pré",
  },
  {
    title: "L'enseignement",
    text: "Avec plus de 26 ans d'expertise, notre équipe d'enseignants diplômés d'État accompagne les cavaliers de tous niveaux, du premier contact avec le cheval jusqu'à la compétition. Les cours sont adaptés à chaque âge et objectif, dans une ambiance bienveillante et familiale.",
    img: "/images/photos/563715_francesca et cesar.jpg",
    alt: "Enseignement équestre",
  },
  {
    title: "Les compétitions",
    text: "Le club participe régulièrement à des concours locaux et régionaux. Que ce soit en CSO, en dressage ou en Equifun, nos cavaliers sont accompagnés et préparés pour vivre leurs premières compétitions dans les meilleures conditions.",
    img: "/images/photos/790107_concours.jpg",
    alt: "Compétitions équestres",
  },
];

const team = [
  {
    name: "Francesca Bormioli",
    role: "Fondatrice & gérante",
    bio: "Francesca Bormioli a fondé les Écuries du Moulin il y a 26 ans après une carrière réussie en saut d'obstacles. Diplômée d'État en monitorat, elle enseigne l'équitation à un public varié, partageant son expérience et son amour du cheval avec enthousiasme et bienveillance.",
    img: "/images/photos/328787_francesca.jpg",
  },
  {
    name: "Pauline Fillion",
    role: "Enseignante",
    bio: "Monitrice d'équitation diplômée depuis 2015, Pauline est une cavalière passionnée et expérimentée. Elle accompagne les élèves des écuries avec enthousiasme et pédagogie, en adaptant son enseignement à chaque cavalier.",
    img: "/images/photos/917953_pauline.jpg",
  },
  {
    name: "Johann Papillon",
    role: "Enseignant",
    bio: "Expert en pony games, randonnée, voltige et attelage, Johann transmet avec enthousiasme son savoir-faire dans ces disciplines variées. Que ce soit pour une initiation ludique, une sortie en pleine nature ou une démonstration de voltige, il saura vous faire découvrir l'équitation sous toutes ses facettes.",
    img: "/images/photos/79782_johann.jpg",
  },
];

const installations = [
  { title: "Manège couvert", desc: "Grand manège couvert de 30 × 60 m avec sol Normandie Drainage, idéal pour l'entraînement en toutes saisons." },
  { title: "Carrière blanche", desc: "Vaste carrière de 3 600 m² (80 × 45 m), sol Toubin Clément, arrosage automatique, utilisée pour les compétitions." },
  { title: "Carrière jaune", desc: "Carrière polyvalente de 1 200 m² (30 × 40 m), sable de qualité avec arrosage automatique, idéale pour les cours." },
  { title: "Boxes", desc: "Une quarantaine de boxes spacieux (4 × 4 m ou 3,5 × 3 m), bien ventilés et entretenus quotidiennement." },
  { title: "Prairies", desc: "10 hectares de prairies clôturées pour la mise au pré des chevaux et poneys dans les meilleures conditions." },
  { title: "Parking", desc: "Grand parking avec accès facile pour les vans et remorques, y compris stationnement longue durée." },
];

export default function Presentation() {
  return (
    <>
      <section
        className="relative min-h-screen px-4 text-center overflow-hidden flex items-center justify-center"
        style={{
          backgroundImage: `url(/images/rubriques/71815_coucher-de-soleil.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 to-black/40" />
        <div className="relative z-10">
          <p className="text-amber-400 uppercase text-xs tracking-widest mb-3 font-semibold">Le club</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">Présentation</h1>
          <p className="text-white/80 max-w-xl mx-auto">
            Un centre équestre familial sur 13 hectares, à 1h à l'Ouest de Paris, ouvert à tous depuis plus de 26 ans.
          </p>
        </div>
      </section>

      <div className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 py-2 flex gap-6 overflow-x-auto">
          {[["L'équipe", "#equipe"], ["Nos installations", "#installations"], ["Notre histoire", "#histoire"]].map(([label, href]) => (
            <a key={href} href={href} className="text-sm font-medium whitespace-nowrap py-2 transition-colors hover:text-amber-600" style={{ color: "var(--primary)" }}>
              {label}
            </a>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-16 space-y-20">
        {sections.map((s, i) => (
          <div key={s.title} className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-10 items-center`}>
            <div className="md:w-1/2 rounded-xl overflow-hidden shadow-md">
              <img src={s.img} alt={s.alt} loading="lazy" className="w-full h-64 object-cover" />
            </div>
            <div className="md:w-1/2">
              <div className="w-8 h-0.5 bg-amber-500 mb-3" />
              <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--primary)" }}>{s.title}</h2>
              <p className="text-gray-600 leading-relaxed">{s.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* L'équipe */}
      <section id="equipe" style={{ background: "var(--sand)" }} className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="w-8 h-0.5 bg-amber-500 mb-3 mx-auto" />
          <h2 className="text-2xl font-bold mb-3 text-center" style={{ color: "var(--primary)" }}>L'équipe</h2>
          <p className="text-gray-500 text-sm text-center mb-10 max-w-xl mx-auto">
            Nos enseignants, tous cavaliers expérimentés, combinent expertise technique et passion pour transmettre leur savoir dans un cadre bienveillant et professionnel.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {team.map((m) => (
              <div key={m.name} className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-amber-300 hover:shadow-md transition-all">
                <div className="h-52 overflow-hidden">
                  <img src={m.img} alt={m.name} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <div className="p-5">
                  <div className="w-6 h-0.5 bg-amber-400 mb-2" />
                  <h3 className="font-bold text-sm mb-0.5" style={{ color: "var(--primary)" }}>{m.name}</h3>
                  <p className="text-xs text-amber-600 uppercase tracking-wide font-semibold mb-3">{m.role}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{m.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Installations */}
      <section id="installations" className="py-16 px-4" style={{ background: "var(--cream)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="w-8 h-0.5 bg-amber-500 mb-3 mx-auto" />
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: "var(--primary)" }}>Nos installations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {installations.map((item) => (
              <div key={item.title} className="p-6 border border-gray-200 rounded-xl hover:border-amber-300 bg-white transition-colors">
                <div className="w-6 h-0.5 bg-amber-400 mb-3" />
                <h3 className="font-semibold mb-2" style={{ color: "var(--primary)" }}>{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Histoire */}
      <section id="histoire" style={{ background: "var(--sand)" }} className="py-16 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row-reverse gap-10 items-center">
          <div className="md:w-1/2 rounded-xl overflow-hidden shadow-md">
            <img src="/images/photos/837442_sous la neige.jpg" alt="Histoire du club" loading="lazy" className="w-full h-64 object-cover" />
          </div>
          <div className="md:w-1/2">
            <div className="w-8 h-0.5 bg-amber-500 mb-3" />
            <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--primary)" }}>Un peu de notre histoire…</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Francesca Bormioli a fondé les Écuries du Moulin il y a 26 ans après une carrière réussie en saut d'obstacles. Installée à Écluzelles, elle a créé un centre équestre et des écuries de propriétaires alliant professionnalisme et esprit familial.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Depuis, le club a accueilli des centaines de cavaliers, de la première mise en selle au galop de compétition, en passant par les stages qui font la renommée du club chaque saison.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
