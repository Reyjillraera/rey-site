const base = process.env.SITE_URL || "https://example.com";
export default function robots() { return { rules: { userAgent: "*", allow: "/" }, sitemap: base + "/sitemap.xml" }; }
