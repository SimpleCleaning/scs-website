"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";

const diensten = [
  { titel: "Glazen wassen", tekst: "Streeploos schone ramen voor woningen en bedrijfspanden.", icoon: "🪟" },
  { titel: "Zonnepanelen reinigen", tekst: "Veilige reiniging voor schone en optimaal presterende zonnepanelen.", icoon: "☀️" },
  { titel: "Dakgoten schoonmaken", tekst: "Verwijderen van bladeren, vuil en verstoppingen uit dakgoten.", icoon: "🏠" },
  { titel: "Boeidelen reinigen", tekst: "Professionele reiniging van boeidelen en andere gevelonderdelen.", icoon: "✨" },
];

export default function Home() {
  const [melding, setMelding] = useState("");

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
      setMelding("De aanvraag is gekopieerd. WhatsApp wordt geopend.");
    } catch {
      setMelding("WhatsApp wordt geopend. Kopieer de gegevens zo nodig handmatig.");
    }

    window.location.href = `https://wa.me/31619909034?text=${encodeURIComponent(tekst)}`;
  }

  return (
    <main className="min-h-screen bg-white text-slate-950">
      <div className="hidden bg-blue-950 text-white lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2.5 text-sm">
          <p className="font-medium">Streeploos schoon, elke keer opnieuw.</p>
          <div className="flex items-center gap-8 text-blue-50">
            <a href="tel:+31619909034">☎ +31 6 19909034</a>
            <a href="mailto:info@scs.care">✉ info@scs.care</a>
            <span>⌖ Borne, Overijssel</span>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="#home" className="flex items-center gap-3">
            <Image src="/logo.png" alt="Logo van Simple Cleaning Service" width={66} height={66} priority className="h-14 w-14 object-contain sm:h-16 sm:w-16" />
            <div>
              <p className="text-lg font-extrabold tracking-tight text-blue-950 sm:text-2xl">Simple</p>
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-blue-600 sm:text-xs">Cleaning Service</p>
            </div>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            <a href="#home" className="font-semibold text-blue-700">Home</a>
            <a href="#diensten" className="font-medium text-slate-700 hover:text-blue-700">Diensten</a>
            <a href="#waarom" className="font-medium text-slate-700 hover:text-blue-700">Over ons</a>
            <a href="#werkwijze" className="font-medium text-slate-700 hover:text-blue-700">Werkwijze</a>
            <a href="#offerte" className="font-medium text-slate-700 hover:text-blue-700">Offerte</a>
            <a href="#contact" className="font-medium text-slate-700 hover:text-blue-700">Contact</a>
          </nav>

          <a href="#offerte" className="rounded-xl bg-blue-600 px-4 py-3 text-sm font-bold text-white shadow-sm hover:bg-blue-700 sm:px-5">Gratis offerte</a>
        </div>
      </header>

      <section id="home" className="relative overflow-hidden scroll-mt-28 bg-slate-50">
        <div className="absolute inset-y-0 right-0 hidden w-[53%] lg:block">
          <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: "linear-gradient(90deg, rgba(248,250,252,1) 0%, rgba(248,250,252,.12) 38%, rgba(248,250,252,0) 100%), url('/hero-cleaning.jpg')" }} />
        </div>

        <div className="mx-auto grid min-h-[620px] max-w-7xl items-center px-6 py-20 lg:grid-cols-2 lg:py-24">
          <div className="max-w-2xl">
            <p className="mb-5 inline-flex rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-bold text-blue-700 shadow-sm">Professionele reiniging in Twente</p>
            <h1 className="text-5xl font-black leading-[1.02] tracking-tight text-blue-950 sm:text-6xl lg:text-7xl">Schoon. Fris.<span className="block text-blue-600">Betrouwbaar.</span></h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">Simple Cleaning Service staat voor professionele reiniging waar u op kunt vertrouwen. Voor een stralend resultaat, elke keer weer.</p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a href="tel:+31619909034" className="inline-flex items-center justify-center gap-3 rounded-xl bg-blue-600 px-6 py-4 font-bold text-white shadow-lg shadow-blue-200 hover:bg-blue-700">☎ Bel: 06 19909034</a>
              <a href="#offerte" className="inline-flex items-center justify-center rounded-xl border-2 border-blue-200 bg-white px-6 py-4 font-bold text-blue-700 hover:border-blue-600">Gratis offerte aanvragen</a>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {[
                ["Betrouwbaar & flexibel", "Heldere afspraken en persoonlijk contact."],
                ["Grondig schoon", "Aandacht voor elk detail en een verzorgd resultaat."],
                ["Particulier & zakelijk", "Voor woningen, winkels, kantoren en bedrijfspanden."],
              ].map(([titel, tekst]) => (
                <div key={titel} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-blue-200 bg-white text-blue-600">✓</div>
                  <div><p className="text-sm font-bold text-blue-950">{titel}</p><p className="mt-1 text-xs leading-5 text-slate-500">{tekst}</p></div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 lg:hidden">
            <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-blue-100 to-blue-50 bg-cover bg-center shadow-xl" style={{ backgroundImage: "url('/hero-cleaning.jpg')" }} />
          </div>
        </div>
      </section>

      <section id="diensten" className="scroll-mt-28 border-y border-slate-200 bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-blue-600">Onze diensten</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-blue-950 sm:text-4xl">Waarmee kunnen wij u helpen?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-600">Professionele reinigingsdiensten voor particulieren en bedrijven.</p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {diensten.map((dienst) => (
              <article key={dienst.titel} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">
                <div className="text-4xl">{dienst.icoon}</div>
                <h3 className="mt-6 text-lg font-extrabold text-blue-950">{dienst.titel}</h3>
                <p className="mt-3 leading-7 text-slate-600">{dienst.tekst}</p>
                <a href="#offerte" className="mt-6 inline-flex font-bold text-blue-600">Offerte aanvragen →</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="waarom" className="scroll-mt-28 bg-slate-50 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-blue-600">Waarom SCS?</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-blue-950">Persoonlijke service en een zichtbaar schoon resultaat</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">Vanuit Borne helpen we klanten in Twente met betrouwbare, professionele reiniging. We werken netjes, veilig en volgens duidelijke afspraken.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {["Heldere afspraken", "Streeploos met osmosewater", "Vrijblijvende offerte", "Particulier en zakelijk"].map((punt) => (
              <div key={punt} className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm"><div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-700">✓</div><p className="font-bold text-blue-950">{punt}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section id="werkwijze" className="scroll-mt-28 bg-blue-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center"><p className="text-sm font-extrabold uppercase tracking-[0.18em] text-blue-300">Onze werkwijze</p><h2 className="mt-3 text-4xl font-black">Snel en eenvoudig geregeld</h2></div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[["1", "Neem contact op", "Bel, mail, WhatsApp of vul het offerteformulier in."], ["2", "Ontvang een voorstel", "We bespreken de werkzaamheden en sturen een duidelijke prijs."], ["3", "Wij maken het schoon", "We voeren het werk zorgvuldig uit en laten alles netjes achter."]].map(([nummer, titel, tekst]) => (
              <div key={nummer} className="rounded-2xl border border-white/10 bg-white/5 p-7"><div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-xl font-black">{nummer}</div><h3 className="mt-6 text-xl font-bold">{titel}</h3><p className="mt-3 leading-7 text-blue-100">{tekst}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section id="offerte" className="scroll-mt-28 bg-white py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center"><p className="text-sm font-extrabold uppercase tracking-[0.18em] text-blue-600">Vrijblijvend en snel</p><h2 className="mt-3 text-4xl font-black tracking-tight text-blue-950">Vraag een gratis offerte aan</h2><p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">Vul het formulier in. Daarna wordt WhatsApp geopend met uw aanvraag.</p></div>

          <form onSubmit={verstuurOfferte} className="mt-12 space-y-6 rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm md:p-10">
            <div className="grid gap-6 md:grid-cols-2">
              <div><label htmlFor="naam" className="mb-2 block font-bold text-blue-950">Naam *</label><input id="naam" name="naam" required className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100" /></div>
              <div><label htmlFor="telefoon" className="mb-2 block font-bold text-blue-950">Telefoonnummer *</label><input id="telefoon" name="telefoon" type="tel" required className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100" /></div>
              <div><label htmlFor="email" className="mb-2 block font-bold text-blue-950">E-mailadres</label><input id="email" name="email" type="email" className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100" /></div>
              <div><label htmlFor="adres" className="mb-2 block font-bold text-blue-950">Adres of woonplaats *</label><input id="adres" name="adres" required className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100" /></div>
            </div>
            <div><label htmlFor="dienst" className="mb-2 block font-bold text-blue-950">Gewenste dienst *</label><select id="dienst" name="dienst" required defaultValue="" className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100"><option value="" disabled>Kies een dienst</option><option>Glazen wassen</option><option>Zonnepanelen reinigen</option><option>Dakgoten schoonmaken</option><option>Boeidelen reinigen</option><option>Meerdere diensten</option></select></div>
            <div><label htmlFor="bericht" className="mb-2 block font-bold text-blue-950">Aanvullende informatie</label><textarea id="bericht" name="bericht" rows={5} className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100" /></div>
            <button type="submit" className="w-full rounded-xl bg-blue-600 px-8 py-4 text-lg font-black text-white hover:bg-blue-700">Versturen via WhatsApp</button>
            {melding && <div className="rounded-xl bg-green-100 p-4 text-center font-medium text-green-800">{melding}</div>}
          </form>
        </div>
      </section>

      <footer id="contact" className="scroll-mt-28 bg-gradient-to-r from-blue-950 to-blue-700 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
          <div><div className="flex items-center gap-3"><Image src="/logo.png" alt="" width={56} height={56} className="h-14 w-14 object-contain" /><div><p className="text-xl font-black">Simple</p><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-200">Cleaning Service</p></div></div><p className="mt-5 leading-7 text-blue-100">Professionele reiniging voor particulieren en bedrijven in Twente.</p></div>
          <div><h3 className="font-black">Snel naar</h3><div className="mt-4 space-y-2 text-blue-100"><p><a href="#home">Home</a></p><p><a href="#diensten">Diensten</a></p><p><a href="#waarom">Over ons</a></p><p><a href="#offerte">Offerte</a></p></div></div>
          <div><h3 className="font-black">Contact</h3><div className="mt-4 space-y-3 text-blue-100"><p><a href="tel:+31619909034">+31 6 19909034</a></p><p><a href="mailto:info@scs.care">info@scs.care</a></p><p>Honingbes 10</p><p>7623 ZA Borne</p></div></div>
          <div><h3 className="font-black">Bedrijfsgegevens</h3><div className="mt-4 space-y-3 text-blue-100"><p>KvK: 82784329</p><p>BTW: NL003731152B38</p><p>Werkgebied: Overijssel / Twente</p></div></div>
        </div>
        <div className="border-t border-white/10"><div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 text-sm text-blue-200 sm:flex-row sm:items-center sm:justify-between"><p>© 2026 Simple Cleaning Service. Alle rechten voorbehouden.</p><div className="flex gap-5"><a href="#">Privacyverklaring</a><a href="#">Algemene voorwaarden</a></div></div></div>
      </footer>

      <a href="https://wa.me/31619909034?text=Hallo%20Simple%20Cleaning%20Service%2C%20ik%20wil%20graag%20informatie%20of%20een%20offerte." target="_blank" rel="noopener noreferrer" className="fixed bottom-5 right-5 z-50 rounded-full bg-green-600 px-5 py-4 font-bold text-white shadow-xl hover:bg-green-700">WhatsApp</a>
    </main>
  );
}