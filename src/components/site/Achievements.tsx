import { ACHIEVEMENTS } from "@/lib/campaign";
import { Reveal } from "./Reveal";

export function Achievements() {
  return (
    <section id="o-que-ja-fiz" className="bg-cloud" aria-labelledby="feitos-title">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <Reveal>
          <h2 id="feitos-title" className="font-display text-5xl leading-none text-navy sm:text-6xl">
            ✅ O QUE EU JÁ FIZ
          </h2>
          <div className="mt-4 h-1 w-24 bg-blue" aria-hidden="true" />
        </Reveal>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2">
          {ACHIEVEMENTS.map((a, i) => (
            <Reveal as="li" key={a.title} delay={i * 80}>
              <article className="h-full rounded-2xl border border-border bg-white p-6 transition-transform duration-300 hover:-translate-y-1">
                <span className="text-3xl" aria-hidden="true">
                  {a.emoji}
                </span>
                <h3 className="mt-3 font-display text-2xl leading-tight text-navy sm:text-3xl">
                  {a.title}
                </h3>
                <p className="mt-2 font-soft text-sm leading-relaxed text-muted-foreground">
                  {a.text}
                </p>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
