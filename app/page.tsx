import type { Metadata } from "next";
import Hero from "../components/offerte/Hero";
import QuoteForm from "../components/offerte/QuoteForm";
import Benefits from "../components/offerte/Benefits";
import CTA from "../components/offerte/CTA";

export const metadata: Metadata = {
  title: "Simple Cleaning Service | Professionele reiniging in Twente",
  description:
    "Simple Cleaning Service uit Borne voor glazen wassen, zonnepanelen reinigen, dakgoten schoonmaken en boeidelen reinigen.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Hero />
      <Benefits />
      <QuoteForm />
      <CTA />
    </main>
  );
}