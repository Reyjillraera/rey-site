import Image from "next/image";
import Link from "next/link";
export const metadata = { title: { absolute: "Rey | Practical psychology, calm systems & editorial templates" }, alternates: { canonical: "/" } };
export default function Home() {
  return (
    <>
      <style>{"body{background:var(--paper)!important}"}</style>
      <section className="hero home">
        <div>
          <h1>practical psychology, calm systems &amp; editorial templates</h1>
          <p className="lead">Warm minimalist guides and planners that turn mental clutter and messy workflows into structured, unhurried tools.</p>
          <div className="row">
            <Link className="btn" href="/kits">See the kits</Link>
            <Link className="btn ghost" href="/planners">See the planners</Link>
          </div>
        </div>
        <div className="board"><Image src="/img/board.jpg" width={1200} height={1277} priority sizes="(min-width:800px) 60vw, 100vw" alt="Collage moodboard with a stack of books, a card reading understand yourself, understand the world, build a life with intention, a brain-to-heart illustration, line-art figures embracing, a marble statue, golden light and a palette of five browns" /><span className="shine" /></div>
      </section>
      <section>
        <h2>what guides the work</h2>
        <ul className="values"><li>clarity</li><li>aesthetic restraint</li><li>practical structure</li><li>tools that feel calming</li></ul>
      </section>
      <section className="tiles">
        <Link className="tile" href="/kits"><h2>Editorial &amp; client welcome kits</h2><span>Onboarding guides for creative and service professionals.</span></Link>
        <Link className="tile" href="/planners"><h2>Growth planners</h2><span>Daily and weekly reflection and priority planners.</span></Link>
        <Link className="tile" href="/writing"><h2>Writing</h2><span>Short essays and frameworks on Substack.</span></Link>
      </section>
    </>
  );
}
