import { CANDIDATE, WHATSAPP_LINK } from "@/lib/campaign";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white" aria-label="Rodapé">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="font-display text-5xl leading-none sm:text-6xl">{CANDIDATE.name}</p>
            <p className="mt-3 font-display text-7xl font-bold leading-[0.75] tracking-[-0.04em] text-blue-light sm:text-8xl">
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
              <ul className="mt-3 flex flex-wrap gap-3 font-soft text-sm">
                <li>
                  <a
                    href={CANDIDATE.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2 text-white/90 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.2-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                    Instagram {CANDIDATE.instagramHandle}
                  </a>
                </li>
                <li className="rounded-lg border border-white/15 px-4 py-2 text-white/70">Facebook — em breve</li>
                <li className="rounded-lg border border-white/15 px-4 py-2 text-white/70">YouTube — em breve</li>
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
