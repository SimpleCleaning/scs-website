"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";

export default function Home() {
  const [melding, setMelding] = useState("");

  const diensten = [
    {
      titel: "Glazen wassen",
      icoon: "🪟",
      tekst: "Streeploos schone ramen voor woningen en bedrijfspanden.",
    },
    {
      titel: "Zonnepanelen reinigen",
      icoon: "☀️",
      tekst: "Veilige reiniging voor schone en goed presterende zonnepanelen.",
    },
    {
      titel: "Dakgoten schoonmaken",
      icoon: "🏠",
      tekst: "Verwijderen van bladeren, vuil en verstoppingen uit dakgoten.",
    },
    {
      titel: "Boeidelen reinigen",
      icoon: "✨",
      tekst: "Professionele reiniging van boeidelen en andere gevelonderdelen.",
    },
  ];

  async function verstuurOfferte(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formulier = new FormData(event.currentTarget);

    const naam = String(formulier.get("naam") ?? "").trim();
    const telefoon = String(formulier.get("telefoon") ?? "").trim();
    const email = String(formulier.get("email") ?? "").trim();
    const adres = String(formulier.get("adres") ?? "").trim();
    const dienst = String(formulier.get("dienst") ?? "").trim();
    const bericht = String(formulier.get("bericht") ?? "").trim();

    const tekst = [
      "Hallo Simple Cleaning Service,",
      "",
      "Ik wil graag een vrijblijvende offerte aanvragen.",
      "",
      `Naam: ${naam}`,
      `Telefoonnummer: ${telefoon}`,
      `E-mailadres: ${email || "Niet ingevuld"}`,
      `Adres of woonplaats: ${adres}`,
      `Gewenste dienst: ${dienst}`,
      "",
      "Aanvullende informatie:",
      bericht || "Geen aanvullende informatie.",
    ].join("\n");

    try {
      await navigator.clipboard.writeText(tekst);
      setMelding(
        "De aanvraag is gekopieerd. WhatsApp wordt geopend. Staat de tekst niet klaar? Druk dan in WhatsApp op Ctrl + V."
      );
    } catch {
      setMelding(
        "WhatsApp wordt geopend. Staat de tekst niet klaar? Kopieer de gegevens handmatig."
      );
    }

    const whatsappUrl = `https://wa.me/31619909034?text=${encodeURIComponent(
      tekst
    )}`;

    window.location.href = whatsappUrl;
  }

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <a href="#home" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Logo van Simple Cleaning Service"
              width={58}
              height={58}
              priority
              className="h-14 w-14 object-contain"
            />

            <div>
              <p className="text-base font-bold text-blue-900 sm:text-lg">
                Simple Cleaning Service
              </p>
              <p className="hidden text-sm text-slate-600 sm:block">
                Professionele reiniging in Overijssel
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            <a
              href="#diensten"
              className="font-medium transition hover:text-blue-700"
            >
              Diensten
            </a>

            <a
              href="#waarom"
              className="font-medium transition hover:text-blue-700"
            >
              Waarom wij
            </a>

            <a
              href="#offerte"
              className="font-medium transition hover:text-blue-700"
            >
              Offerte
            </a>

            <a
              href="#contact"
              className="font-medium transition hover:text-blue-700"
            >
              Contact
            </a>

            <a
              href="#offerte"
              className="rounded-lg bg-blue-700 px-5 py-3 font-semibold text-white transition hover:bg-blue-800"
            >
              Gratis offerte
            </a>
          </nav>

          <a
            href="tel:+31619909034"
            className="rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white md:hidden"
          >
            Bellen
          </a>
        </div>
      </header>

      <section
        id="home"
        className="scroll-mt-24 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700 text-white"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 text-center md:py-28">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-200">
            Simple Cleaning Service
          </p>

          <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Professionele reiniging voor een helder en verzorgd resultaat
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100 md:text-xl">
            Glazen wassen, zonnepanelen reinigen, dakgoten schoonmaken en
            boeidelen reinigen voor particulieren en bedrijven in Overijssel.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#offerte"
              className="rounded-xl bg-yellow-400 px-8 py-4 font-bold text-blue-950 transition hover:bg-yellow-300"
            >
              Gratis offerte aanvragen
            </a>

            <a
              href="tel:+31619909034"
              className="rounded-xl border border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-blue-900"
            >
              Bel direct
            </a>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/20 bg-white/10 p-5">
              <p className="font-semibold">Streeploos resultaat</p>
            </div>

            <div className="rounded-2xl border border-white/20 bg-white/10 p-5">
              <p className="font-semibold">Betrouwbare service</p>
            </div>

            <div className="rounded-2xl border border-white/20 bg-white/10 p-5">
              <p className="font-semibold">Particulier en zakelijk</p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="diensten"
        className="mx-auto max-w-7xl scroll-mt-24 px-6 py-20"
      >
        <div className="text-center">
          <p className="font-semibold text-blue-700">Onze werkzaamheden</p>

          <h2 className="mt-2 text-4xl font-bold">Onze diensten</h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
            Professionele reiniging met aandacht voor kwaliteit, veiligheid en
            een netjes eindresultaat.
          </p>
        </div>

        <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-4">
          {diensten.map((dienst) => (
            <article
              key={dienst.titel}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-4xl">{dienst.icoon}</div>

              <h3 className="mt-5 text-xl font-bold text-blue-900">
                {dienst.titel}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">{dienst.tekst}</p>

              <a
                href="#offerte"
                className="mt-6 inline-block font-semibold text-blue-700 hover:underline"
              >
                Offerte aanvragen →
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="waarom" className="scroll-mt-24 bg-slate-100 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <p className="font-semibold text-blue-700">
              Betrouwbaar en professioneel
            </p>

            <h2 className="mt-2 text-4xl font-bold">
              Waarom Simple Cleaning Service?
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-7 shadow-sm">
              <h3 className="text-xl font-bold text-blue-900">
                ✓ Persoonlijke service
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Heldere afspraken, direct contact en aandacht voor jouw woning
                of bedrijfspand.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-7 shadow-sm">
              <h3 className="text-xl font-bold text-blue-900">
                ✓ Osmosewater
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Voor een schoon en streeploos resultaat zonder achtergebleven
                kalkvlekken.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-7 shadow-sm">
              <h3 className="text-xl font-bold text-blue-900">
                ✓ Vrijblijvende offerte
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Je ontvangt vooraf duidelijkheid over de werkzaamheden en de
                bijbehorende prijs.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-7 shadow-sm">
              <h3 className="text-xl font-bold text-blue-900">
                ✓ Werkzaam in Overijssel
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Vanuit Borne helpen we particulieren en bedrijven in de regio
                Overijssel.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="offerte" className="scroll-mt-24 bg-white py-20">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center">
            <p className="font-semibold text-blue-700">Vrijblijvend en snel</p>

            <h2 className="mt-2 text-4xl font-bold">
              Vraag een gratis offerte aan
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
              Vul het formulier in. Daarna wordt WhatsApp geopend met jouw
              aanvraag. De tekst wordt ook gekopieerd zodat je deze zo nodig
              kunt plakken.
            </p>
          </div>

          <form
            onSubmit={verstuurOfferte}
            className="mt-12 space-y-6 rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm md:p-10"
          >
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="naam" className="mb-2 block font-semibold">
                  Naam *
                </label>
                <input
                  id="naam"
                  name="naam"
                  type="text"
                  required
                  placeholder="Je volledige naam"
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div>
                <label htmlFor="telefoon" className="mb-2 block font-semibold">
                  Telefoonnummer *
                </label>
                <input
                  id="telefoon"
                  name="telefoon"
                  type="tel"
                  required
                  placeholder="06 12345678"
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block font-semibold">
                  E-mailadres
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="naam@voorbeeld.nl"
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div>
                <label htmlFor="adres" className="mb-2 block font-semibold">
                  Adres of woonplaats *
                </label>
                <input
                  id="adres"
                  name="adres"
                  type="text"
                  required
                  placeholder="Straat, huisnummer en plaats"
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>
            </div>

            <div>
              <label htmlFor="dienst" className="mb-2 block font-semibold">
                Gewenste dienst *
              </label>
              <select
                id="dienst"
                name="dienst"
                required
                defaultValue=""
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              >
                <option value="" disabled>
                  Kies een dienst
                </option>
                <option value="Glazen wassen">Glazen wassen</option>
                <option value="Zonnepanelen reinigen">
                  Zonnepanelen reinigen
                </option>
                <option value="Dakgoten schoonmaken">
                  Dakgoten schoonmaken
                </option>
                <option value="Boeidelen reinigen">
                  Boeidelen reinigen
                </option>
                <option value="Meerdere diensten">
                  Meerdere diensten
                </option>
              </select>
            </div>

            <div>
              <label htmlFor="bericht" className="mb-2 block font-semibold">
                Aanvullende informatie
              </label>
              <textarea
                id="bericht"
                name="bericht"
                rows={5}
                placeholder="Vertel bijvoorbeeld hoeveel ramen, zonnepanelen of meters dakgoot het betreft."
                className="w-full resize-y rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-blue-700 px-8 py-4 text-lg font-bold text-white transition hover:bg-blue-800"
            >
              Versturen via WhatsApp
            </button>

            {melding && (
              <div className="rounded-xl bg-green-100 p-4 text-center text-green-800">
                {melding}
              </div>
            )}

            <p className="text-center text-sm text-slate-500">
              Je gegevens worden alleen gebruikt om contact met je op te nemen
              over deze aanvraag.
            </p>
          </form>
        </div>
      </section>

      <section className="bg-blue-700 py-16 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Liever direct contact?
          </h2>

          <p className="mt-4 text-lg text-blue-100">
            Bel, mail of stuur een WhatsApp-bericht voor meer informatie.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="tel:+31619909034"
              className="rounded-xl bg-white px-7 py-4 font-bold text-blue-800 transition hover:bg-blue-50"
            >
              06 19909034
            </a>

            <a
              href="mailto:info@scs.care"
              className="rounded-xl border border-white px-7 py-4 font-bold transition hover:bg-white hover:text-blue-800"
            >
              info@scs.care
            </a>
          </div>
        </div>
      </section>

      <footer
        id="contact"
        className="scroll-mt-24 bg-blue-950 py-12 text-white"
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-6 text-center md:grid-cols-3 md:text-left">
          <div>
            <h3 className="text-xl font-bold">Simple Cleaning Service</h3>

            <p className="mt-4 leading-7 text-blue-200">
              Professionele reiniging voor particulieren en bedrijven in
              Overijssel.
            </p>
          </div>

          <div>
            <h3 className="font-bold">Contact</h3>

            <p className="mt-4">
              <a href="tel:+31619909034" className="hover:underline">
                +31 6 19909034
              </a>
            </p>

            <p className="mt-2">
              <a href="mailto:info@scs.care" className="hover:underline">
                info@scs.care
              </a>
            </p>

            <p className="mt-2">
              <a
                href="https://www.scs.care"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                www.scs.care
              </a>
            </p>
          </div>

          <div>
            <h3 className="font-bold">Bedrijfsgegevens</h3>

            <p className="mt-4">Honingbes 10</p>
            <p>7623 ZA Borne</p>
            <p className="mt-2">KvK: 82784329</p>
            <p>BTW: NL003731152B38</p>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-7xl border-t border-blue-900 px-6 pt-6 text-center text-sm text-blue-300">
          © 2026 Simple Cleaning Service. Alle rechten voorbehouden.
        </div>
      </footer>

      <a
        href="https://wa.me/31619909034?text=Hallo%20Simple%20Cleaning%20Service%2C%20ik%20wil%20graag%20informatie%20of%20een%20offerte."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Neem contact op via WhatsApp"
        className="fixed bottom-5 right-5 z-50 rounded-full bg-green-600 px-5 py-4 font-bold text-white shadow-xl transition hover:scale-105 hover:bg-green-700"
      >
        WhatsApp
      </a>
    </main>
  );
}