import type { Metadata } from "next";
import Hero from "../../components/offerte/Hero";
import QuoteForm from "../../components/offerte/QuoteForm";
import Benefits from "../../components/offerte/Benefits";
import CTA from "../../components/offerte/CTA";

export const metadata: Metadata = {
  title: "Offerte aanvragen | Simple Cleaning Service",
  description:
    "Vraag vrijblijvend een offerte aan bij Simple Cleaning Service voor glazen wassen, zonnepanelen reinigen, dakgoten schoonmaken en boeidelen reinigen.",
  alternates: {
    canonical: "/offerte",
  },
};

export default function OffertePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Hero />
      <QuoteForm />
      <Benefits />
      <CTA />
    </main>
  );
}