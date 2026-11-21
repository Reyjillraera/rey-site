import Image from "next/image";
export const metadata = { title: "About", description: "Rey. This is my journey.", alternates: { canonical: "/about" } };
export default function About() {
  return (
    <section className="hero page">
      <div>
        <h1>rey</h1>
        <p className="lead">This is my journey.</p>
      </div>
      <Image className="photo small" src="/img/labyrinth.jpg" width={736} height={1104} sizes="340px" alt="Brown line drawing of a tree whose crown is a spiral labyrinth" />
    </section>
  );
}
