import Link from "next/link";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-slate-950 px-6 py-12 text-white shadow-xl sm:px-10 lg:px-14 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_0.6fr] lg:items-center">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-sky-300">
                Persoonlijk contact
              </p>

              <h2 className="mt-4 max-w-3xl text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                Liever direct overleggen over de werkzaamheden?
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                Neem telefonisch of via WhatsApp contact op. We bespreken jouw
                wensen en geven duidelijk aan wat er mogelijk is.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <a
                href="tel:+31619909034"
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-sky-500 px-6 py-4 font-bold text-white transition hover:bg-sky-400"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                Bel 06 19909034
              </a>

              <a
                href="https://wa.me/31619909034?text=Hallo%20Simple%20Cleaning%20Service%2C%20ik%20wil%20graag%20informatie%20of%20een%20offerte."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/20 bg-white/10 px-6 py-4 font-bold text-white transition hover:bg-white/15"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Stuur een WhatsApp
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold text-sky-300 transition hover:text-sky-200"
              >
                Naar de contactpagina
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}