import Cards from "../../components/Cards";
import { planners } from "../../lib/data";
export const metadata = { title: "Practical psychology & growth planners", description: "Structured daily and weekly reflection and priority planners that reduce overwhelm and build steady habits.", alternates: { canonical: "/planners" } };
export default function Planners() {
  return (
    <section className="page" style={{ paddingTop: "2.5rem" }}>
      <h1>practical psychology &amp; growth planners</h1>
      <p className="lead">Structured daily and weekly reflection and priority planners, made to reduce overwhelm and build steady habits.</p>
      <Cards items={planners} />
    </section>
  );
}
