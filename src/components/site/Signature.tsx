import { CANDIDATE } from "@/lib/campaign";

/** Assinatura oficial: nome + número grande + cargo. */
export function Signature({
  size = "md",
  tone = "light",
  className = "",
}: {
  size?: "sm" | "md" | "lg" | "xl";
  tone?: "light" | "dark";
  className?: string;
}) {
  const name = {
    sm: "text-xl",
    md: "text-3xl sm:text-4xl",
    lg: "text-5xl sm:text-6xl",
    xl: "text-6xl sm:text-8xl",
  }[size];
  const num = {
    sm: "text-2xl",
    md: "text-5xl sm:text-6xl",
    lg: "text-7xl sm:text-8xl",
    xl: "text-8xl sm:text-[10rem]",
  }[size];
  const role = {
    sm: "text-[0.55rem]",
    md: "text-[0.7rem]",
    lg: "text-xs sm:text-sm",
    xl: "text-sm sm:text-base",
  }[size];

  const nameColor = tone === "light" ? "text-white" : "text-navy";
  const numColor = tone === "light" ? "text-white" : "text-blue";
  const roleColor = tone === "light" ? "text-blue-light" : "text-blue";
  const barColor = tone === "light" ? "bg-white/30" : "bg-navy/20";

  return (
    <div className={`flex items-center gap-3 sm:gap-5 ${className}`}>
      <div className="min-w-0">
        <p className={`font-display leading-[0.85] ${name} ${nameColor}`}>{CANDIDATE.name}</p>
        <p className={`mt-1 font-bold tracking-[0.28em] ${role} ${roleColor}`}>{CANDIDATE.role}</p>
      </div>
      <span className={`h-[1.6em] w-px shrink-0 ${barColor}`} aria-hidden="true" />
      <div className="shrink-0 text-center">
        <p className={`font-display leading-[0.8] ${num} ${numColor}`}>{CANDIDATE.number}</p>
        <p className={`mt-1 font-bold tracking-[0.2em] ${role} ${roleColor}`}>PP</p>
      </div>
    </div>
  );
}
