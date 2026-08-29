import { useEffect, useState } from "react";
import { CANDIDATE, WHATSAPP_LINK } from "@/lib/campaign";

const LINKS = [
  { href: "#inicio", label: "INÍCIO" },
  { href: "#minha-historia", label: "MINHA HISTÓRIA" },
  { href: "#o-que-ja-fiz", label: "O QUE JÁ FIZ" },
  { href: "#propostas", label: "PROPOSTAS" },
  { href: "#participe", label: "PARTICIPE" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "bg-navy shadow-lg shadow-navy/20" : "bg-navy/85 backdrop-blur"
      }`}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 lg:flex lg:justify-between">
        <a href="#inicio" className="flex min-w-0 items-center gap-3" aria-label="Início">
          <span className="font-display text-2xl leading-none text-white sm:text-3xl">
            {CANDIDATE.name}
          </span>
          <span className="h-6 w-px bg-white/25" aria-hidden="true" />
          <span className="font-display text-2xl leading-none text-blue-light sm:text-3xl">
            {CANDIDATE.number}
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Navegação principal">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs font-bold tracking-widest text-white/85 transition-colors hover:text-blue-light focus-visible:text-blue-light"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-blue-vivid px-5 py-2.5 text-xs font-extrabold tracking-widest text-white transition-transform hover:scale-[1.03] hover:bg-blue-light"
          >
            📲 MATERIAL
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="flex h-11 w-11 shrink-0 flex-col items-center justify-center gap-1.5 rounded-lg border border-white/20 lg:hidden"
        >
          <span
            className={`h-0.5 w-6 bg-white transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span className={`h-0.5 w-6 bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
          <span
            className={`h-0.5 w-6 bg-white transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      <div
        id="menu-mobile"
        hidden={!open}
        className="border-t border-white/10 bg-navy px-4 pb-6 pt-2 lg:hidden"
      >
        <nav className="flex flex-col" aria-label="Navegação mobile">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-white/10 py-4 text-sm font-bold tracking-widest text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-5 rounded-full bg-blue-vivid px-6 py-4 text-center text-sm font-extrabold tracking-widest text-white"
          >
            📲 QUERO RECEBER MATERIAL
          </a>
        </nav>
      </div>
    </header>
  );
}
