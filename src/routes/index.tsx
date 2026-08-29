import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { IdentityBand } from "@/components/site/IdentityBand";
import { History } from "@/components/site/History";
import { Achievements } from "@/components/site/Achievements";
import { Highlight1998 } from "@/components/site/Highlight1998";
import { Proposals } from "@/components/site/Proposals";
import { Participation } from "@/components/site/Participation";
import { MaterialCTA } from "@/components/site/MaterialCTA";
import { SupportPhoto } from "@/components/site/SupportPhoto";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Footer } from "@/components/site/Footer";
import { CANDIDATE } from "@/lib/campaign";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Bia Piccoli | 11 311 | Deputada Estadual" },
      {
        name: "description",
        content: "Conheça a história, a trajetória e as propostas de Bia Piccoli.",
      },
      { property: "og:title", content: "Bia Piccoli | 11 311 | Deputada Estadual" },
      {
        property: "og:description",
        content: "Conheça a história, a trajetória e as propostas de Bia Piccoli.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Bia Piccoli",
          jobTitle: "Candidata a Deputada Estadual",
          affiliation: { "@type": "Organization", name: "PP — Partido Progressista" },
          description: `${CANDIDATE.name} — ${CANDIDATE.role} ${CANDIDATE.number}. ${CANDIDATE.slogan}`,
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <IdentityBand />
        <History />
        <Achievements />
        <Highlight1998 />
        <Proposals />
        <Participation />
        <MaterialCTA />
        <SupportPhoto />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
