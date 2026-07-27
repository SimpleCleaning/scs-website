import type { Metadata } from "next";

import Header from "../components/layout/Header";
import Hero from "../components/offerte/Hero";
import Benefits from "../components/offerte/Benefits";
import QuoteForm from "../components/offerte/QuoteForm";
import CTA from "../components/offerte/CTA";

export const metadata: Metadata = {
  title: "Simple Cleaning Service | Professionele schoonmaak in Borne",
  description:
    "Simple Cleaning Service verzorgt betrouwbare en professionele schoonmaakdiensten in Borne en omgeving. Vraag vrijblijvend een offerte aan.",
};

export default function HomePage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-white text-slate-900">
        <Hero />
        <Benefits />
        <QuoteForm />
        <CTA />
      </main>
    </>
  );
}