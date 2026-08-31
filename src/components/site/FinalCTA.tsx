import { CANDIDATE, WHATSAPP_LINK } from "@/lib/campaign";
import { Reveal } from "./Reveal";

export function FinalCTA() {
  return (
    <section className="bg-navy text-white" aria-labelledby="final-title">
      <Reveal className="mx-auto max-w-4xl px-4 py-20 text-center">
        <h2 id="final-title" className="font-display text-5xl leading-[0.9] sm:text-7xl">
          💙 JUNTOS, PODEMOS
          <br />
          <span className="text-blue-light">CHEGAR MAIS LONGE!</span>
        </h2>
        <p className="mt-6 font-display text-7xl font-bold leading-[0.75] tracking-[-0.04em] sm:text-9xl">{CANDIDATE.number}</p>
        <p className="mt-2 text-xs font-extrabold tracking-[0.35em] text-white/80">
          {CANDIDATE.name} · {CANDIDATE.role}
        </p>

        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          <a
            href="#minha-historia"
            className="rounded-xl bg-white px-5 py-4 text-sm font-extrabold tracking-wide text-navy transition-transform hover:scale-[1.02]"
          >
            📖 O QUE JÁ FIZ
          </a>
          <a
            href="#propostas"
            className="rounded-xl border border-white/30 px-5 py-4 text-sm font-extrabold tracking-wide text-white transition-colors hover:bg-white/10"
          >
            💙 MINHAS PROPOSTAS
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-blue-vivid px-5 py-4 text-sm font-extrabold tracking-wide text-white transition-transform hover:scale-[1.02]"
          >
            📲 QUERO RECEBER MATERIAL
          </a>
          <a
            href="#foto-de-apoio"
            className="rounded-xl bg-blue px-5 py-4 text-sm font-extrabold tracking-wide text-white transition-transform hover:scale-[1.02]"
          >
            📸 FAÇA SUA FOTO DE APOIO
          </a>
        </div>
      </Reveal>
    </section>
  );
}
