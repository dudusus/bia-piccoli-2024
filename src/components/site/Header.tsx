import { useEffect, useState } from "react";
import { CANDIDATE, WHATSAPP_LINK } from "@/lib/campaign";

const InstagramIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.2-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

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
          <span className="font-display text-2xl font-bold leading-none tracking-[-0.03em] text-blue-light sm:text-3xl">
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
          <a
            href={CANDIDATE.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Instagram ${CANDIDATE.instagramHandle}`}
            className="rounded-full border border-white/25 p-2.5 text-white transition-colors hover:border-white/50 hover:text-blue-light"
          >
            <InstagramIcon />
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
          <a
            href={CANDIDATE.instagram}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-3 flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-4 text-center text-sm font-extrabold tracking-widest text-white"
          >
            <InstagramIcon className="h-5 w-5" />
            SEGUIR NO INSTAGRAM
          </a>
        </nav>
      </div>
    </header>
  );
}
