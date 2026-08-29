import { CANDIDATE, WHATSAPP_LINK } from "@/lib/campaign";
import { Reveal } from "./Reveal";

export function MaterialCTA() {
  return (
    <section className="bg-blue-vivid text-white" aria-labelledby="material-title">
      <Reveal className="mx-auto grid max-w-6xl items-center gap-6 px-4 py-14 md:grid-cols-[1.2fr_auto]">
        <div>
          <h2 id="material-title" className="font-display text-4xl leading-none sm:text-5xl">
            📲 QUERO RECEBER MATERIAL
          </h2>
          <p className="mt-3 max-w-xl font-soft text-base text-white/90">
            Adesivos, santinhos e materiais da campanha. É só chamar no WhatsApp{" "}
            {CANDIDATE.phoneLabel} — sem cadastro, sem formulário.
          </p>
        </div>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-white px-8 py-5 text-center text-sm font-extrabold tracking-widest text-navy transition-transform hover:scale-[1.03]"
        >
          💬 CHAMAR NO WHATSAPP
        </a>
      </Reveal>
    </section>
  );
}
