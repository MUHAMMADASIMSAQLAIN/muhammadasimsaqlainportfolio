import type { Project } from "./data";

/**
 * A separate digital-product case study, kept distinct from Asim's AI engineering focus.
 * The live URL and repository are verified from the public GitHub repository metadata.
 */
export const perfumeProject: Project = {
  slug: "asim-saqlain-perfumes",
  name: "ASIM SAQLAIN Perfumes",
  tagline: "Luxury fragrance storefront — independent digital product",
  featured: true,
  problem:
    "A premium fragrance label needs a focused online storefront that communicates its identity clearly and makes the collection easy to explore.",
  solution:
    "A branded fragrance storefront for ASIM SAQLAIN Perfumes, presented as a separate digital product in this portfolio. The project demonstrates responsive web presentation, product storytelling and a dedicated brand experience without changing Asim's primary AI engineering positioning.",
  features: [
    "Dedicated ASIM SAQLAIN Perfumes brand experience",
    "Product-led fragrance collection presentation",
    "Responsive storefront layout",
    "Brand storytelling and product discovery",
    "Separate live product site and source repository",
  ],
  architecture: [
    "A lightweight HTML, CSS and JavaScript frontend renders the storefront.",
    "Product and interaction behavior is handled by the site's client-side script.",
    "Static assets provide the visual identity and product presentation.",
    "The site is deployed separately from the developer portfolio.",
  ],
  stack: ["HTML", "CSS", "JavaScript", "Responsive Web Design", "Vercel"],
  role: [
    "Created the ASIM SAQLAIN Perfumes digital storefront.",
    "Organized the fragrance brand's product presentation and visual experience.",
    "Maintained a separate public repository and live deployment for the product.",
  ],
};
