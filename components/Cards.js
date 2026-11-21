import Image from "next/image";
import { mail } from "../lib/data";
export default function Cards({ items }) {
  return (
    <div className="grid">
      {items.map((i) => (
        <article className="card" key={i.f}>
          <Image src={`/thumbs/${i.f}.jpg`} width={372} height={526} alt={`Cover page of ${i.t}`} />
          <h2>{i.t}</h2>
          {i.d && <p>{i.d}</p>}
          <div className="row">
            <a className="btn sm" href={`/pdfs/${i.f}.pdf`} target="_blank" rel="noopener noreferrer">View PDF</a>
            <a className="btn sm ghost" href={`${mail}?subject=${encodeURIComponent(i.t)}`}>Ask about this</a>
          </div>
        </article>
      ))}
    </div>
  );
}
