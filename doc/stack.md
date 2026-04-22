# Stack technique — equitation28.com

Site Next.js hébergé sur Cloudflare Pages, avec extraction de contenu depuis l'URL d'origine (scraping de l'ancien site `equitation28.com`).

---

## 1. Framework — Next.js 15 (App Router)

**À quoi ça sert :** moteur du site. Gère le routage (chaque page = un fichier), le rendu côté serveur (SSR), la génération statique (SSG), les images optimisées, etc.

**Pourquoi :** imposé par le roadmap. C'est le standard React, très bien supporté par Cloudflare Pages.

**Alternatives écartées :** Astro (plus orienté contenu statique), Remix (moins d'intégration Cloudflare), Gatsby (déclinant).

---

## 2. Langage — TypeScript

**À quoi ça sert :** JavaScript avec des types. Attrape les erreurs avant l'exécution (ex : tu appelles une fonction avec le mauvais type d'argument, l'éditeur te le dit tout de suite).

**Pourquoi :** standard de fait dans l'écosystème Next.js. Évite des heures de debug de `undefined`.

**Alternatives écartées :** JavaScript pur (moins sûr), JSDoc (verbeux).

---

## 3. Styling — Tailwind CSS v4

**À quoi ça sert :** framework CSS où tu écris les styles directement dans le HTML via des classes utilitaires (ex : `class="text-lg font-bold bg-blue-500"`).

**Pourquoi :** rapide à écrire, pas de fichier CSS séparé à maintenir, bundle final très petit (les classes non utilisées sont supprimées).

**Alternatives écartées :** CSS Modules (plus verbeux), Styled Components (lourd en runtime), vanilla CSS (maintenance pénible sur un gros site).

---

## 4. Hébergement — Cloudflare Pages

**À quoi ça sert :** héberge le site, le sert via le CDN mondial Cloudflare (rapide partout), gère le HTTPS, les déploiements automatiques depuis Git.

**Pourquoi :** imposé par le roadmap. Gratuit pour les petits sites, très rapide, intégration native Next.js via `@cloudflare/next-on-pages`.

**Alternatives écartées :** Vercel (payant au-delà d'un certain trafic), Netlify (moins rapide que Cloudflare CDN), auto-hébergement (maintenance).

---

## 5. Adaptateur Cloudflare — `@cloudflare/next-on-pages`

**À quoi ça sert :** traduit le build Next.js en un format que Cloudflare Pages comprend (les API routes deviennent des Cloudflare Workers).

**Pourquoi :** indispensable pour faire tourner Next.js App Router sur Cloudflare Pages.

**Alternatives écartées :** export purement statique (on perd les API routes et le SSR).

---

## 6. Extraction de contenu — `cheerio` + `fetch`

**À quoi ça sert :** récupérer le HTML du site actuel `equitation28.com` via `fetch`, puis parser le HTML avec `cheerio` (équivalent jQuery côté serveur) pour extraire textes, images, liens.

**Pourquoi :** le roadmap demande d'extraire le contenu de l'URL. Cheerio est léger et suffit si le site est en HTML statique.

**Alternatives :**
- **Playwright / Puppeteer :** si le site utilise du JavaScript côté client (SPA). Plus lourd mais gère le rendu dynamique.
- **Copier-coller manuel :** viable si le site a peu de pages.

**Décision à prendre :** inspecter `equitation28.com` en premier pour voir si le contenu est dans le HTML initial (→ cheerio suffit) ou chargé en JS (→ Playwright).

---

## 7. Gestionnaire de paquets — `pnpm`

**À quoi ça sert :** installe les dépendances (`npm install` en version plus rapide et économe en disque).

**Pourquoi :** plus rapide que `npm`, cache partagé entre projets (moins de disque utilisé).

**Alternatives :** `npm` (par défaut, fonctionne aussi), `yarn` (vieillissant), `bun` (très récent, encore instable sur certains projets Next).

---

## 8. Qualité de code — ESLint + Prettier

**À quoi ça sert :**
- **ESLint :** détecte les erreurs et anti-patterns (variable non utilisée, promise non gérée…).
- **Prettier :** formate automatiquement le code (indentation, guillemets, virgules).

**Pourquoi :** évite les débats de style et attrape les bugs tôt. Next.js fournit ESLint pré-configuré.

---

## 9. Versioning — Git + GitHub

**À quoi ça sert :** historique des changements, branches pour travailler sans casser la version en ligne, déploiement auto sur Cloudflare Pages via webhook.

**Pourquoi :** Cloudflare Pages se branche directement sur un repo GitHub pour redéployer à chaque `git push`.

**Alternatives :** GitLab (supporté aussi par Cloudflare Pages), Bitbucket.

---

## Résumé en une image

```
[ Site source equitation28.com ]
              │
              │  (fetch + cheerio)
              ▼
[ Scripts d'extraction ]  →  [ Contenu: JSON / MDX ]
                                      │
                                      ▼
                          [ Next.js (App Router) ]
                                      │
                            (build via @cloudflare/next-on-pages)
                                      ▼
                          [ Cloudflare Pages + CDN ]
                                      │
                                      ▼
                          [ Visiteurs du nouveau site ]
```

---

## Prochaines étapes

1. Inspecter `equitation28.com` pour savoir si le HTML est statique ou dynamique → choisir cheerio vs Playwright.
2. `pnpm create next-app` pour initialiser le projet.
3. Installer `@cloudflare/next-on-pages`.
4. Écrire un premier script d'extraction dans `scripts/extract.ts`.
5. Connecter le repo à Cloudflare Pages.
