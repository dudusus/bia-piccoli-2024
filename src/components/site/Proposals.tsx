import { PROPOSALS } from "@/lib/campaign";
import { Reveal } from "./Reveal";

export function Proposals() {
  return (
    <section id="propostas" className="bg-white" aria-labelledby="propostas-title">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <Reveal>
          <h2
            id="propostas-title"
            className="font-display text-5xl leading-none text-navy sm:text-6xl"
          >
            💙 MINHAS PROPOSTAS
          </h2>
          <div className="mt-4 h-1 w-24 bg-blue" aria-hidden="true" />
        </Reveal>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROPOSALS.map((p, i) => (
            <Reveal as="li" key={p.title} delay={i * 70}>
              <article className="h-full rounded-2xl bg-cloud p-6 transition-colors duration-300 hover:bg-navy hover:text-white group">
                <span className="text-3xl" aria-hidden="true">
                  {p.emoji}
                </span>
                <h3 className="mt-3 font-display text-2xl leading-tight text-navy group-hover:text-white sm:text-3xl">
                  {p.title}
                </h3>
                <p className="mt-2 font-soft text-sm leading-relaxed text-muted-foreground group-hover:text-white/85">
                  {p.text}
                </p>
              </article>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={120} className="mt-12">
          <div className="rounded-3xl bg-navy px-6 py-10 text-center text-white sm:px-10">
            <p className="font-display text-4xl leading-none sm:text-5xl">
              GOSTOU DAS MINHAS PROPOSTAS?
            </p>
            <p className="mx-auto mt-4 max-w-xl font-soft text-base leading-relaxed text-white/85">
              Compartilhe em seus grupos de amigos e redes sociais. Assim você me ajuda a fazer o
              que é preciso para nosso Estado!
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
