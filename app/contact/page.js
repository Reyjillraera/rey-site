import Image from "next/image";
import { mail, substack } from "../../lib/data";
export const metadata = { title: "Contact", description: "Write to Rey about a welcome kit or planner.", alternates: { canonical: "/contact" } };
export default function Contact() {
  return (
    <section className="hero page">
      <div>
        <h1>contact</h1>
        <p className="lead">Write to me about a kit or a planner.</p>
        <div className="row">
          <a className="btn" href={mail}>Write to me</a>
          <a className="btn ghost" href={substack} target="_blank" rel="noopener noreferrer">Substack</a>
        </div>
      </div>
      <Image className="photo small" src="/img/journey.jpg" width={736} height={920} sizes="340px" alt="Two small figures seated on a long page of printed text" />
    </section>
  );
}
