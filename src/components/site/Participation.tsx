import { WHATSAPP_LINK, CANDIDATE } from "@/lib/campaign";
import { Reveal } from "./Reveal";

async function shareSite() {
  const data = {
    title: `${CANDIDATE.name} ${CANDIDATE.number}`,
    text: `${CANDIDATE.slogan} ${CANDIDATE.name} — ${CANDIDATE.role} ${CANDIDATE.number}.`,
    url: typeof window !== "undefined" ? window.location.href : "",
  };
  if (typeof navigator !== "undefined" && navigator.share) {
    try {
      await navigator.share(data);
      return;
    } catch {
      /* usuário cancelou */
    }
  }
  window.open(
    `https://wa.me/?text=${encodeURIComponent(`${data.text} ${data.url}`)}`,
    "_blank",
    "noopener",
  );
}

export function Participation() {
  return (
    <section id="participe" className="bg-cloud" aria-labelledby="participe-title">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <Reveal>
          <h2
            id="participe-title"
            className="font-display text-5xl leading-none text-navy sm:text-6xl"
          >
            🤝 PARTICIPE
          </h2>
          <p className="mt-4 font-display text-3xl leading-tight text-blue sm:text-4xl">
            {CANDIDATE.slogan}
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <Reveal delay={60}>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-full flex-col justify-between rounded-2xl bg-navy p-7 text-white transition-transform hover:-translate-y-1"
            >
              <span className="text-4xl" aria-hidden="true">
                📲
              </span>
              <span className="mt-5 font-display text-3xl leading-none">RECEBER MATERIAL</span>
              <span className="mt-2 font-soft text-sm text-white/80">
                Fale comigo no WhatsApp {CANDIDATE.phoneLabel}.
              </span>
            </a>
          </Reveal>
          <Reveal delay={130}>
            <a
              href="#foto-de-apoio"
              className="flex h-full flex-col justify-between rounded-2xl bg-blue p-7 text-white transition-transform hover:-translate-y-1"
            >
              <span className="text-4xl" aria-hidden="true">
                📸
              </span>
              <span className="mt-5 font-display text-3xl leading-none">FAZER FOTO DE APOIO</span>
              <span className="mt-2 font-soft text-sm text-white/85">
                Sua foto com a moldura oficial 1080x1080.
              </span>
            </a>
          </Reveal>
          <Reveal delay={200}>
            <button
              type="button"
              onClick={shareSite}
              className="flex h-full w-full flex-col justify-between rounded-2xl border-2 border-navy/15 bg-white p-7 text-left text-navy transition-transform hover:-translate-y-1"
            >
              <span className="text-4xl" aria-hidden="true">
                💙
              </span>
              <span className="mt-5 font-display text-3xl leading-none">COMPARTILHAR</span>
              <span className="mt-2 font-soft text-sm text-muted-foreground">
                Fale de mim para quem você confia.
              </span>
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
