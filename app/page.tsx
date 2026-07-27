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
        <section id="home" className="scroll-mt-40">
          <Hero />
        </section>

        <section id="diensten" className="scroll-mt-40">
          <Benefits />
        </section>

        <section id="waarom" className="scroll-mt-40">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
            <h2 className="text-center text-3xl font-black text-blue-950">
              Waarom Simple Cleaning Service?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-slate-600">
              Betrouwbare service, duidelijke afspraken en een helder,
              fris en streeploos resultaat.
            </p>
          </div>
        </section>

        <section id="werkwijze" className="scroll-mt-40">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
            <h2 className="text-center text-3xl font-black text-blue-950">
              Onze werkwijze
            </h2>

            <div className="mx-auto mt-8 grid max-w-4xl gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
                <p className="text-lg font-bold text-blue-950">
                  1. Offerte aanvragen
                </p>
                <p className="mt-2 text-slate-600">
                  Vul eenvoudig het offerteformulier in.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
                <p className="text-lg font-bold text-blue-950">
                  2. Duidelijke afspraak
                </p>
                <p className="mt-2 text-slate-600">
                  Je ontvangt snel een duidelijke reactie en prijsopgave.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
                <p className="text-lg font-bold text-blue-950">
                  3. Streeploos resultaat
                </p>
                <p className="mt-2 text-slate-600">
                  Wij voeren het werk netjes en zorgvuldig uit.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="offerte" className="scroll-mt-40">
          <QuoteForm />
        </section>

        <section id="contact" className="scroll-mt-40">
          <CTA />
        </section>
      </main>
    </>
  );
}