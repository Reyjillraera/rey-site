import Cards from "../../components/Cards";
import { kits } from "../../lib/data";
export const metadata = { title: "Editorial & client welcome kits", description: "Warm minimalist client onboarding guides for creative and service professionals.", alternates: { canonical: "/kits" } };
export default function Kits() {
  return (
    <section className="page" style={{ paddingTop: "2.5rem" }}>
      <h1>editorial &amp; client welcome kits</h1>
      <p className="lead">Warm minimalist onboarding guides for interior designers, social media managers, wedding planners and other service professionals.</p>
      <Cards items={kits} />
    </section>
  );
}
