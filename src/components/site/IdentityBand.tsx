import { CANDIDATE } from "@/lib/campaign";
import { Reveal } from "./Reveal";

export function IdentityBand() {
  return (
    <section className="bg-blue text-white" aria-label="Identidade da campanha">
      <Reveal className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-display text-4xl leading-none sm:text-5xl">{CANDIDATE.name}</p>
          <p className="mt-2 text-xs font-extrabold tracking-[0.32em] text-white/85">
            {CANDIDATE.role} · {CANDIDATE.party}
          </p>
        </div>
        <p className="font-display text-8xl font-bold leading-[0.75] tracking-[-0.04em] sm:text-9xl">{CANDIDATE.number}</p>
      </Reveal>
    </section>
  );
}
