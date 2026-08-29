import { WHATSAPP_LINK, CANDIDATE } from "@/lib/campaign";

const InstagramIcon = () => (
  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.2-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);
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

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
          <Reveal delay={120}>
            <a
              href={CANDIDATE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-full flex-col justify-between rounded-2xl bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 p-7 text-white transition-transform hover:-translate-y-1"
            >
              <InstagramIcon />
              <span className="mt-5 font-display text-3xl leading-none">SEGUIR NO INSTAGRAM</span>
              <span className="mt-2 font-soft text-sm text-white/90">{CANDIDATE.instagramHandle}</span>
            </a>
          </Reveal>
          <Reveal delay={180}>
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
          <Reveal delay={240}>
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
