import { IMAGES } from "@/lib/campaign";
import { Reveal } from "./Reveal";

export function Highlight1998() {
  return (
    <section className="bg-navy text-white" aria-labelledby="ano-1998">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 lg:grid-cols-2 lg:items-center sm:py-20">
        <Reveal>
          <img
            src={IMAGES.tribuna}
            alt="Bia Piccoli discursando na tribuna da Câmara Municipal de Porto Alegre"
            loading="lazy"
            className="w-full rounded-3xl object-cover shadow-2xl shadow-black/30"
          />
        </Reveal>
        <Reveal delay={100}>
          <p id="ano-1998" className="font-display text-[7rem] leading-[0.8] text-blue-light sm:text-[10rem]">
            1998
          </p>
          <p className="mt-4 font-display text-3xl leading-tight sm:text-4xl">
            Em 1998, implementei a Coordenadoria do Idoso de Porto Alegre.
          </p>
          <div className="mt-6 h-px w-full bg-white/20" aria-hidden="true" />
          <p className="mt-6 font-soft text-lg leading-relaxed text-white/85">
            Antes de prometer, eu já estava na luta pelos idosos.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
