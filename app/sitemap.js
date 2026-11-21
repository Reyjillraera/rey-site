const base = process.env.SITE_URL || "https://example.com";
export default function sitemap() {
  return ["", "/kits", "/planners", "/writing", "/about", "/contact"].map((p) => ({ url: base + p, lastModified: new Date() }));
}
