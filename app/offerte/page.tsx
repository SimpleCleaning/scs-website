import type { Metadata } from "next";
import Hero from "../../components/offerte/Hero";
import QuoteForm from "../../components/offerte/QuoteForm";
import Benefits from "../../components/offerte/Benefits";
import CTA from "../../components/offerte/CTA";

export const metadata: Metadata = {
  title: "Offerte glazenwasser Borne",
  description:
    "Vraag vrijblijvend een offerte aan voor glasbewassing en buitenreiniging in Borne en Twente. Voor ramen, zonnepanelen, dakgoten en boeidelen.",
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