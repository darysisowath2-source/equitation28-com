import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Présentation — Écuries du Moulin",
  description:
    "Découvrez l'équipe, les installations et l'histoire des Écuries du Moulin, centre équestre à Ecluzelles en Eure-et-Loir.",
};

const sections = [
  {
    title: "Au cœur du village",
    text: "Les Écuries du Moulin sont situées à Ecluzelles, un village paisible d'Eure-et-Loir, à quelques kilomètres de Dreux et de Rambouillet. Le centre bénéficie d'un cadre naturel exceptionnel, entouré de prairies et de forêts idéales pour les balades à cheval.",
    img: "/images/photos/319428_coeur du village.jpg",
    alt: "Au cœur du village d'Ecluzelles",
  },
  {
    title: "La vie au pré",
    text: "Nos chevaux évoluent dans de vastes prairies clôturées, dans le respect de leur bien-être. Nous accordons une grande importance à la vie en liberté, aux soins quotidiens et à l'équilibre physique et mental de chaque animal.",
    img: "/images/photos/667374_436365_cheval-pre2.jpg",
    alt: "La vie au pré",
  },
  {
    title: "L'enseignement",
    text: "Notre équipe d'enseignants diplômés d'État accompagne les cavaliers de tous niveaux, du premier contact avec le cheval jusqu'à la compétition. Les cours sont adaptés à chaque âge et objectif, dans une ambiance bienveillante et familiale.",
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

const installations = [
  { title: "Carrière", desc: "Carrière en sable arrosé pour les cours et l'entraînement, disponible toute l'année." },
  { title: "Boxes", desc: "Boxes spacieux et bien aérés, paillés quotidiennement pour le confort des pensionnaires." },
  { title: "Prairies", desc: "Plusieurs hectares de prairies clôturées pour la mise au pré des chevaux." },
  { title: "Salle de soins", desc: "Espace dédié aux soins, avec douche et matériel de sellerie." },
  { title: "Sellerie", desc: "Sellerie équipée et sécurisée pour le rangement du matériel des cavaliers." },
  { title: "Parking", desc: "Grand parking avec accès facile pour les vans et remorques." },
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
            Un centre équestre familial au cœur de l'Eure-et-Loir, ouvert à tous depuis plus de 10 ans.
          </p>
        </div>
      </section>

      <div className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 py-2 flex gap-6 overflow-x-auto">
          {[["L'équipe", "#equipe"], ["Nos installations", "#installations"], ["Notre histoire", "#histoire"]].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-sm font-medium whitespace-nowrap py-2 transition-colors hover:text-amber-600"
              style={{ color: "var(--primary)" }}
            >
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

      <section id="equipe" style={{ background: "var(--sand)" }} className="py-16 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10 items-center">
          <div className="md:w-1/2 rounded-xl overflow-hidden shadow-md">
            <img src="/images/photos/754964_DSC04508.jpg" alt="L'équipe des Écuries du Moulin" loading="lazy" className="w-full h-64 object-cover" />
          </div>
          <div className="md:w-1/2">
            <div className="w-8 h-0.5 bg-amber-500 mb-3" />
            <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--primary)" }}>L'équipe</h2>
            <p className="text-gray-600 leading-relaxed">
              Notre équipe est composée d'enseignants diplômés d'État, passionnés par l'équitation et
              dévoués au bien-être des cavaliers et des chevaux. Chaque membre partage la même vision :
              transmettre le goût du cheval dans le respect et la bonne humeur.
            </p>
          </div>
        </div>
      </section>

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

      <section id="histoire" style={{ background: "var(--sand)" }} className="py-16 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row-reverse gap-10 items-center">
          <div className="md:w-1/2 rounded-xl overflow-hidden shadow-md">
            <img src="/images/photos/837442_sous la neige.jpg" alt="Histoire du club" loading="lazy" className="w-full h-64 object-cover" />
          </div>
          <div className="md:w-1/2">
            <div className="w-8 h-0.5 bg-amber-500 mb-3" />
            <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--primary)" }}>Un peu de notre histoire…</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Les Écuries du Moulin ont ouvert leurs portes à Ecluzelles il y a plus de dix ans, portées
              par la passion de l'équitation et le souhait d'offrir un lieu d'apprentissage chaleureux
              aux cavaliers de la région.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Depuis, le club a accueilli des centaines de cavaliers, de la première mise en selle au
              galop de compétition, en passant par les stages qui font la renommée du club chaque saison.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
