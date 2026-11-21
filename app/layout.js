import "./globals.css";
import Link from "next/link";
import Line from "../components/Line";
import { mail, nav, substack } from "../lib/data";
export const metadata = {
  metadataBase: new URL(process.env.SITE_URL || "https://example.com"),
  title: { default: "Rey | Practical psychology, calm systems & editorial templates", template: "%s | Rey" },
  description: "Warm minimalist welcome kits and planners that turn mental clutter into structured, unhurried tools.",
};
export const viewport = { width: "device-width", initialScale: 1, themeColor: "#f2eadc" };
export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,500&family=Jost:wght@400;500&display=swap" />
      </head>
      <body>
        <Line />
        <header>
          <div className="wrap bar">
            <Link href="/" className="logo">rey</Link>
            <a className="btn" href={mail}>Reyjillraera</a>
            <nav aria-label="Main">{nav.map(([n, h]) => <Link key={h} href={h}>{n}</Link>)}</nav>
          </div>
        </header>
        <main className="wrap">{children}</main>
        <footer>
          <div className="wrap">
            <p>A portfolio and concept draft. <a href={substack} target="_blank" rel="noopener noreferrer">Substack</a> · @reyjillraera</p>
            {/* Add Instagram, TikTok and Pinterest links here. */}
          </div>
        </footer>
      </body>
    </html>
  );
}
