import FadeIn from "./components/FadeIn";
import ScrollArrow from "./components/ScrollArrow";

const cards = [
  {
    title: "Cours & Activités",
    desc: "Cours collectifs, particuliers, stages vacances, CSO et Equifun pour tous niveaux, de 3 ans à l'âge adulte.",
    href: "/activites",
    img: "/images/rubriques/533077_cours.jpg",
  },
  {
    title: "Présentation",
    desc: "Découvrez les Écuries du Moulin, notre équipe passionnée et nos installations au cœur du village d'Ecluzelles.",
    href: "/presentation",
    img: "/images/photos/319428_coeur du village.jpg",
  },
  {
    title: "Propriétaires",
    desc: "Pension complète, boxes, pré et hébergements courts pour vos chevaux dans un cadre naturel et sécurisé.",
    href: "/proprietaires",
    img: "/images/photos/667374_436365_cheval-pre2.jpg",
  },
  {
    title: "Vie du club",
    desc: "Actualités, événements, concours et photos de la vie quotidienne de notre club équestre.",
    href: "/vie-du-club",
    img: "/images/photos/150015_fete du club.jpg",
  },
  {
    title: "Contact",
    desc: "Une question ? Contactez-nous par téléphone, SMS ou via notre formulaire en ligne.",
    href: "/contact",
    img: "/images/photos/563715_francesca et cesar.jpg",
  },
];

const stats = [
  { value: "+26 ans", label: "que nous accueillons les cavaliers de la région" },
  { value: "Dès 3 ans", label: "les enfants montent avec nous" },
  { value: "7j / 7", label: "le club est ouvert, toute l'année" },
  { value: "Diplômés d'État", label: "tous nos enseignants sont certifiés" },
];

const pourquoi = [
  {
    num: "01",
    title: "Un cadre qui ressemble à nulle part ailleurs",
    desc: "Au milieu des prairies et des forêts d'Ecluzelles, loin de l'agitation, les chevaux vivent au pré et les cavaliers respirent. Pas de béton, pas de hall d'attente — juste la nature.",
  },
  {
    num: "02",
    title: "Des enseignants qui vous connaissent par prénom",
    desc: "Nos moniteurs diplômés d'État suivent les mêmes cavaliers d'une saison à l'autre. Ici, personne n'est un numéro sur une liste. Chaque enfant progresse à son rythme, dans la bonne humeur.",
  },
  {
    num: "03",
    title: "Une ambiance de club, pas d'école",
    desc: "Les parents discutent entre eux, les enfants se retrouvent d'une semaine à l'autre, et les fêtes du club sont de vrais moments partagés. On ne vient pas juste pour monter — on revient pour les gens.",
  },
];

const GOOGLE_URL = "https://www.google.com/maps/place/Les+Ecuries+du+Moulin/@48.7081657,1.4249091,17z/data=!4m8!3m7!1s0x47e401d53719c49f:0x87793f964d30e53a!8m2!3d48.7081657!4d1.4249091!9m1!1b1!16s%2Fg%2F1v3gr5_s?entry=ttu&g_ep=EgoyMDI2MDQxNS4wIKXMDSoASAFQAw%3D%3D";

const temoignages = [
  {
    texte: "Super centre équestre, le cadre est magnifique, les moniteurs professionnels et bienveillants ! Sans aucun doute une expérience magique pour ma fille de 13 ans qui a fait un stage cet été. Les chevaux sont bien dressés et heureux — tous les ingrédients pour apprécier les stages ou autre activité, c'est sans hésitation ! Bravo à l'équipe et clin d'œil à notre mascotte l'âne Baron ❤️",
    nom: "Didi A.",
    detail: "avis Google · 15 août 2024",
    note: 5,
  },
  {
    texte: "Ma fille de 7 ans vient de passer 3 semaines de stage d'équitation. Elle était ravie et veut revenir tous les jours… Merci pour elle !!! Je recommande ++",
    nom: "Marine O.",
    detail: "avis Google · 18 août 2024",
    note: 5,
  },
  {
    texte: "Équipe au top, très beau lieu, super poney, on adore !",
    nom: "Stéphanie U.",
    detail: "avis Google · 27 juin 2023",
    note: 5,
  },
];

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className={`w-4 h-4 fill-current ${i < count ? "text-amber-400" : "text-gray-200"}`} viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

export default function Home() {
  return (
    <>
      {/* ── HERO PLEIN ÉCRAN ── même technique que les autres pages */}
      <section
        className="relative min-h-screen px-4 overflow-hidden flex items-end justify-start"
        style={{ backgroundImage: `url(/images/rubriques/533077_cours.jpg)`, backgroundSize: "cover", backgroundPosition: "center 30%" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-black/10" />
        <div className="relative z-10 max-w-2xl pb-20 md:pb-28 px-8">
          <p className="text-white/60 uppercase text-xs tracking-widest mb-4 font-semibold">
            Centre équestre — Eure-et-Loir (28)
          </p>
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-5 leading-tight drop-shadow-lg">
            Les Écuries<br />du Moulin
          </h1>
          <p className="text-white/85 text-lg mb-8 max-w-lg leading-relaxed drop-shadow">
            13 hectares à Ecluzelles, à 1h de Paris. Cours, stages et pension depuis 26 ans.
          </p>

          {/* Google Reviews badge */}
          <a
            href={GOOGLE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 mb-8 px-4 py-2.5 bg-black/30 backdrop-blur-sm rounded-xl border border-white/15 hover:bg-black/50 transition-colors"
          >
            <GoogleIcon />
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-white">4,8</span>
                <Stars />
              </div>
              <p className="text-xs text-white/70">36 avis Google vérifiés</p>
            </div>
          </a>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://cloud10.kavalog.fr/ECURIESDUMOULIN/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-500 text-white font-semibold px-7 py-3.5 rounded-full hover:bg-amber-400 transition-colors shadow-lg text-center"
            >
              Je veux m'inscrire
            </a>
            <a
              href="/contact"
              className="bg-white/15 backdrop-blur-sm border border-white/40 text-white font-semibold px-7 py-3.5 rounded-full hover:bg-white/25 transition-colors text-center"
            >
              On a une question
            </a>
          </div>
        </div>
        <ScrollArrow />
      </section>

      {/* ── BANDEAU INFOS ── */}
      <section style={{ background: "var(--primary)" }} className="text-white">
        <div
          className="max-w-5xl mx-auto px-4 py-4 flex flex-wrap justify-center text-sm"
          style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}
        >
          {[
            ["Adresse", "28500 Ecluzelles (28)"],
            ["Téléphone", "06 71 45 27 28"],
            ["Ouvert", "7j/7 de 8h à 19h"],
            ["Âge", "Dès 3 ans"],
          ].map(([label, value], i, arr) => (
            <div
              key={label}
              className={`px-6 py-1 text-center ${i < arr.length - 1 ? "border-r" : ""}`}
              style={{ borderColor: "var(--primary-light)" }}
            >
              <span className="block text-amber-400 text-xs uppercase tracking-wide font-semibold">{label}</span>
              <span className="text-white/90">{value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── CHIFFRES CLÉS ── */}
      <section style={{ background: "var(--sand)" }} className="py-14 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <FadeIn key={s.value} delay={i * 80}>
              <p className="text-3xl sm:text-4xl font-bold mb-1" style={{ color: "var(--primary)" }}>
                {s.value}
              </p>
              <p className="text-sm text-gray-600 leading-snug" style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}>{s.label}</p>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── CARDS ── */}
      <section style={{ background: "var(--cream)" }} className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-2 text-center" style={{ color: "var(--primary)" }}>
              Ce qu'on fait ici
            </h2>
            <p className="text-gray-500 text-center mb-10 text-sm" style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}>
              Des cours, des stages, de la pension — pour les cavaliers comme pour les chevaux.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card, i) => (
              <FadeIn key={card.href} delay={i * 70}>
                <a
                  href={card.href}
                  className="group block rounded-xl border border-gray-200 overflow-hidden hover:border-amber-400 hover:shadow-lg transition-all bg-white h-full"
                >
                  <div className="h-44 overflow-hidden">
                    <img
                      src={card.img}
                      alt={card.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5">
                    <h3
                      className="text-base font-semibold mb-1.5 group-hover:text-amber-600 transition-colors"
                      style={{ color: "var(--primary)", fontFamily: "var(--font-geist-sans), sans-serif" }}
                    >
                      {card.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}>{card.desc}</p>
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── POURQUOI NOUS ── */}
      <section style={{ background: "var(--sand)" }} className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-2 text-center" style={{ color: "var(--primary)" }}>
              Pourquoi les familles choisissent les Écuries du Moulin
            </h2>
            <p className="text-gray-500 text-center mb-12 text-sm" style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}>
              Ce n'est pas que la discipline — c'est aussi l'endroit et les gens.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {pourquoi.map((p, i) => (
              <FadeIn key={p.num} delay={i * 100}>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-amber-100 h-full">
                  <p className="text-5xl font-bold mb-4 opacity-10" style={{ color: "var(--primary)", fontFamily: "var(--font-playfair), serif" }}>{p.num}</p>
                  <h3 className="text-base font-semibold mb-3" style={{ color: "var(--primary)", fontFamily: "var(--font-geist-sans), sans-serif" }}>
                    {p.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}>{p.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── TÉMOIGNAGES GOOGLE AVIS ── */}
      <section style={{ background: "var(--cream)" }} className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Badge agrégé Google — cliquable */}
          <FadeIn>
            <div className="flex flex-col items-center mb-10">
              <a
                href={GOOGLE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-white border border-gray-100 shadow-sm rounded-2xl px-6 py-4 mb-6 hover:shadow-md transition-shadow"
              >
                <GoogleIcon />
                <div style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-gray-800">4,8</span>
                    <Stars />
                    <span className="text-sm text-gray-500 ml-1">/ 5</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-0.5">36 avis vérifiés · Les Écuries du Moulin</p>
                </div>
                <span className="text-xs text-blue-500 underline ml-2 whitespace-nowrap" style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}>Voir sur Google</span>
              </a>
              <h2 className="text-3xl font-bold text-center" style={{ color: "var(--primary)" }}>
                Ce que disent les familles
              </h2>
              <p className="text-gray-500 text-center mt-2 text-sm" style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}>
                Des avis réels, vérifiés par Google.
              </p>
            </div>
          </FadeIn>

          {/* Cards témoignages — cliquables vers Google */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {temoignages.map((t, i) => (
              <FadeIn key={t.nom} delay={i * 110}>
                <a
                  href={GOOGLE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col gap-4 h-full hover:shadow-md hover:border-amber-200 transition-all duration-300 block"
                >
                  <Stars count={t.note} />
                  <p
                    className="text-gray-700 leading-relaxed text-sm italic flex-1"
                    style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}
                  >
                    « {t.texte} »
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <div>
                      <p className="text-sm font-semibold" style={{ color: "var(--primary)", fontFamily: "var(--font-geist-sans), sans-serif" }}>{t.nom}</p>
                      <p className="text-xs text-gray-500" style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}>{t.detail}</p>
                    </div>
                    <GoogleIcon />
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>

          {/* Lien "Lire tous les avis" */}
          <FadeIn>
            <div className="text-center mt-8">
              <a
                href={GOOGLE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-gray-200 bg-white rounded-full px-6 py-3 text-sm font-medium text-gray-700 hover:shadow-md hover:border-amber-300 transition-all"
                style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}
              >
                <GoogleIcon />
                Lire les 36 avis sur Google
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── CTA STAGES ── */}
      <section
        className="relative py-20 px-4 text-center overflow-hidden"
        style={{
          backgroundImage: `url(/images/photos/222198_ATILA.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0" style={{ background: "var(--primary)", opacity: 0.82 }} />
        <div className="relative z-10">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Les stages des vacances sont en ligne
            </h2>
            <p className="text-amber-200 mb-7 max-w-md mx-auto" style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}>
              Les places partent vite — et vos enfants vous en parleront encore à la rentrée.
            </p>
            <a
              href="https://cloud10.kavalog.fr/ECURIESDUMOULIN/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-amber-500 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-amber-400 transition-colors shadow-lg"
              style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}
            >
              Voir les dates disponibles
            </a>
          </FadeIn>
        </div>
      </section>

      {/* ── GALERIE ── */}
      <section style={{ background: "var(--sand)" }} className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-2 text-center" style={{ color: "var(--primary)" }}>
              La vie au club, en images
            </h2>
            <p className="text-gray-500 text-center mb-10 text-sm" style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}>
              Parce qu'un club, ça se ressent avant de s'expliquer.
            </p>
          </FadeIn>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { src: "/images/photos/150015_fete du club.jpg", alt: "Fête du club" },
              { src: "/images/photos/876866_carrousel_10_separation.jpg", alt: "Carrousel" },
              { src: "/images/photos/754964_DSC04508.jpg", alt: "Ambiance au club" },
              { src: "/images/photos/790107_concours.jpg", alt: "Concours" },
              { src: "/images/photos/837442_sous la neige.jpg", alt: "Sous la neige" },
              { src: "/images/photos/554993_gwen_licol_nestor.jpg", alt: "Avec les chevaux" },
              { src: "/images/photos/861746_retour-longe.jpg", alt: "Entraînement" },
              { src: "/images/rubriques/71815_coucher-de-soleil.jpg", alt: "Coucher de soleil" },
            ].map((img, i) => (
              <FadeIn key={img.src} delay={i * 50}>
                <div className="aspect-square overflow-hidden rounded-lg">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <div className="text-center mt-8">
              <a
                href="/vie-du-club"
                className="inline-block border-2 font-semibold px-7 py-3 rounded-full hover:bg-amber-50 transition-colors text-sm"
                style={{ borderColor: "var(--primary)", color: "var(--primary)", fontFamily: "var(--font-geist-sans), sans-serif" }}
              >
                Voir toute la vie du club
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
