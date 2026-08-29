import { IMAGES } from "@/lib/campaign";
import { Reveal } from "./Reveal";

export function History() {
  return (
    <section id="minha-historia" className="bg-white" aria-labelledby="hist-title">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center sm:py-20">
        <Reveal className="order-2 lg:order-1">
          <div className="relative">
            <div
              className="absolute -left-3 -top-3 h-full w-full rounded-3xl border-2 border-blue/25"
              aria-hidden="true"
            />
            <img
              src={IMAGES.portrait}
              alt="Retrato de Bia Piccoli"
              loading="lazy"
              className="relative w-full rounded-3xl bg-cloud object-cover"
            />
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <h2 id="hist-title" className="font-display text-5xl leading-none text-navy sm:text-6xl">
              📖 MINHA HISTÓRIA
            </h2>
          </Reveal>
          <div className="mt-6 space-y-5 font-soft text-base leading-relaxed text-muted-foreground">
            <Reveal delay={60}>
              <p>
                Há mais de 30 anos trabalho dentro das comunidades, ouvindo as pessoas e
                trabalhando por inclusão, cidadania e oportunidades.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <p>
                Levo cursos profissionalizantes às ilhas e às comunidades, abrindo caminhos para
                quem mais precisa.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <p>
                Como Deputada Estadual, quero, através de projetos, recursos e parcerias, continuar
                fazendo muito mais por pessoas.
              </p>
            </Reveal>
          </div>

          <Reveal delay={240} className="mt-8">
            <div className="rounded-2xl bg-navy px-6 py-6 text-white">
              <p className="font-display text-5xl leading-none text-blue-light sm:text-6xl">
                ⏳ MAIS DE 30 ANOS
              </p>
              <p className="mt-2 text-sm font-semibold tracking-wide text-white/85">
                Trabalhando dentro das comunidades.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
