import { CANDIDATE, WHATSAPP_LINK } from "@/lib/campaign";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white" aria-label="Rodapé">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="font-display text-5xl leading-none sm:text-6xl">{CANDIDATE.name}</p>
            <p className="mt-3 font-display text-6xl leading-none text-blue-light sm:text-7xl">
              {CANDIDATE.number}
            </p>
            <p className="mt-3 text-xs font-extrabold tracking-[0.3em] text-white/85">
              {CANDIDATE.role}
            </p>
            <p className="mt-1 text-xs font-bold tracking-[0.25em] text-blue-light">
              {CANDIDATE.party}
            </p>
          </div>

          <div className="space-y-5">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-blue-vivid px-7 py-4 text-sm font-extrabold tracking-widest text-white transition-transform hover:scale-[1.03]"
            >
              📲 WHATSAPP {CANDIDATE.phoneLabel}
            </a>

            <div>
              <p className="text-xs font-bold tracking-[0.25em] text-white/60">REDES SOCIAIS</p>
              <ul className="mt-3 flex flex-wrap gap-3 font-soft text-sm text-white/70">
                <li className="rounded-lg border border-white/15 px-4 py-2">Instagram — em breve</li>
                <li className="rounded-lg border border-white/15 px-4 py-2">Facebook — em breve</li>
                <li className="rounded-lg border border-white/15 px-4 py-2">YouTube — em breve</li>
              </ul>
            </div>

            <div className="font-soft text-sm text-white/70">
              <p>CNPJ de campanha: {CANDIDATE.cnpj}</p>
              <p>WhatsApp: {CANDIDATE.phoneLabel}</p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/60">
          <p>
            {CANDIDATE.name} · {CANDIDATE.role} · {CANDIDATE.number} · {CANDIDATE.party} · CNPJ:{" "}
            {CANDIDATE.cnpj}
          </p>
        </div>
      </div>
    </footer>
  );
}
