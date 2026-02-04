// src/app/portfolio/portfolioData.ts

export const PORTFOLIO_SLUGS = [
  "orogiallo",
  "cavoto",
  "borgo-alto",
  "elf",
  "martorelli",
  "sorrentino",
  "scintille",
  "crtf",
  "green-gusto",
  "sere-destate",
  "metellia",
  "dentalam",
  "gustosa",
] as const;

export type PortfolioSlug = (typeof PORTFOLIO_SLUGS)[number];

export function getPrevNext(slug: string) {
  const idx = PORTFOLIO_SLUGS.indexOf(slug as PortfolioSlug);

  // Se slug non esiste, fallback
  if (idx === -1) {
    return {
      prevSlug: PORTFOLIO_SLUGS[PORTFOLIO_SLUGS.length - 1],
      nextSlug: PORTFOLIO_SLUGS[0],
      index: -1,
      total: PORTFOLIO_SLUGS.length,
    };
  }

  const prevSlug = PORTFOLIO_SLUGS[(idx - 1 + PORTFOLIO_SLUGS.length) % PORTFOLIO_SLUGS.length];
  const nextSlug = PORTFOLIO_SLUGS[(idx + 1) % PORTFOLIO_SLUGS.length];

  return { prevSlug, nextSlug, index: idx, total: PORTFOLIO_SLUGS.length };
}
