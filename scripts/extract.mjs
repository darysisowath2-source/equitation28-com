import * as cheerio from "cheerio";
import { writeFileSync } from "fs";

const BASE_URL = "https://www.equitation28.com";

async function fetchPage(url) {
  const res = await fetch(url);
  const buffer = await res.arrayBuffer();
  return new TextDecoder("iso-8859-1").decode(buffer);
}

function extractPage($, url) {
  return {
    url,
    title: $("title").text().trim(),
    h1: $("h1").map((_, el) => $(el).text().trim()).get(),
    h2: $("h2").map((_, el) => $(el).text().trim()).get(),
    paragraphs: $("p").map((_, el) => $(el).text().trim()).get().filter(Boolean),
    images: $("img").map((_, el) => ({
      src: $(el).attr("src"),
      alt: $(el).attr("alt") || "",
    })).get(),
    links: $("a[href]").map((_, el) => ({
      text: $(el).text().trim(),
      href: $(el).attr("href"),
    })).get().filter(l => l.text),
  };
}

function findInternalLinks($) {
  return $("a[href]")
    .map((_, el) => $(el).attr("href"))
    .get()
    .filter(href =>
      href &&
      !href.startsWith("mailto:") &&
      !href.startsWith("#") &&
      !href.startsWith("http")
    )
    .map(href => BASE_URL + "/" + href)
    .filter((v, i, arr) => arr.indexOf(v) === i);
}

async function main() {
  console.log("Extraction du site", BASE_URL);

  const visited = new Set();
  const queue = [BASE_URL];
  const results = [];

  while (queue.length > 0) {
    const url = queue.shift();
    if (visited.has(url)) continue;
    visited.add(url);

    try {
      console.log("→", url);
      const html = await fetchPage(url);
      const $ = cheerio.load(html);
      const page = extractPage($, url);
      results.push(page);

      const newLinks = findInternalLinks($).filter(l => !visited.has(l));
      queue.push(...newLinks);
    } catch (err) {
      console.error("Erreur sur", url, err.message);
    }
  }

  writeFileSync("scripts/content.json", JSON.stringify(results, null, 2));
  console.log(`\nTerminé ! ${results.length} pages extraites → scripts/content.json`);
}

main();
