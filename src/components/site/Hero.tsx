import { CANDIDATE, IMAGES, WHATSAPP_LINK } from "@/lib/campaign";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-navy pt-24 text-white sm:pt-28"
      aria-label="Apresentação"
    >
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue/25 blur-3xl"
        aria-hidden="true"
      />
      <div className="mx-auto grid max-w-6xl gap-8 px-4 pb-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-6 lg:pb-0">
        <div className="pt-4 lg:pb-20">
          <p className="text-xs font-bold tracking-[0.35em] text-blue-light">
            {CANDIDATE.party}
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2">
            <h1 className="font-display text-6xl leading-[0.85] text-white sm:text-7xl lg:text-8xl">
              BIA
              <br />
              PICCOLI
            </h1>
            <p className="font-display text-8xl font-bold leading-[0.75] tracking-[-0.04em] text-blue-light sm:text-9xl lg:text-[10rem]">
              {CANDIDATE.number}
            </p>
          </div>
          <p className="mt-3 text-sm font-extrabold tracking-[0.3em] text-white/85">
            {CANDIDATE.role}
          </p>

          <p className="mt-7 font-display text-4xl leading-[0.95] text-white sm:text-5xl">
            Juntos, podemos <span className="text-blue-light">chegar mais longe!</span>
          </p>
          <p className="mt-4 max-w-md font-soft text-base leading-relaxed text-white/80">
            Acredita na minha história? Então curta, compartilhe e fale de mim para quem você
            confia.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <a
              href="#minha-historia"
              className="rounded-xl bg-white px-5 py-4 text-center text-sm font-extrabold tracking-wide text-navy transition-transform hover:scale-[1.02]"
            >
              📖 CONHEÇA MINHA HISTÓRIA
            </a>
            <a
              href="#propostas"
              className="rounded-xl border border-white/30 px-5 py-4 text-center text-sm font-extrabold tracking-wide text-white transition-colors hover:bg-white/10"
            >
              💙 MINHAS PROPOSTAS
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-blue-vivid px-5 py-4 text-center text-sm font-extrabold tracking-wide text-white transition-transform hover:scale-[1.02]"
            >
              📲 QUERO RECEBER MATERIAL
            </a>
            <a
              href="#foto-de-apoio"
              className="rounded-xl bg-blue px-5 py-4 text-center text-sm font-extrabold tracking-wide text-white transition-transform hover:scale-[1.02]"
            >
              📸 FAÇA SUA FOTO DE APOIO
            </a>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div
            className="absolute bottom-0 h-[80%] w-[92%] rounded-t-[999px] bg-gradient-to-b from-blue/40 to-navy-deep"
            aria-hidden="true"
          />
          <img
            src={IMAGES.portrait}
            alt="Bia Piccoli, candidata a Deputada Estadual, de braços cruzados e sorrindo"
            className="relative w-[min(100%,26rem)] select-none object-contain drop-shadow-2xl"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}
