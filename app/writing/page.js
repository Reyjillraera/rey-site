import Image from "next/image";
import { substack } from "../../lib/data";
export const metadata = { title: "Writing", description: "Short essays and practical breakdowns pairing everyday psychology with simple visual workflows.", alternates: { canonical: "/writing" } };
export default function Writing() {
  return (
    <section className="hero page">
      <div>
        <h1>writing</h1>
        <p className="lead">Short essays and practical breakdowns that pair everyday psychology with simple visual workflows.</p>
        <a className="btn" href={substack} target="_blank" rel="noopener noreferrer">Read on Substack</a>
      </div>
      <Image className="photo small" src="/img/loops.jpg" width={736} height={1000} sizes="340px" alt="Copper line drawing of stacked, looping shapes" />
    </section>
  );
}
