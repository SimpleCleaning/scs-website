export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden scroll-mt-28 bg-slate-50"
    >
      <div className="absolute inset-y-0 right-0 hidden w-[53%] lg:block">
        <div
          className="h-full w-full bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(248,250,252,1) 0%, rgba(248,250,252,.12) 38%, rgba(248,250,252,0) 100%), url('/hero-cleaning.jpg')",
          }}
        />
      </div>

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_30%,rgba(219,234,254,.75),transparent_42%)]" />

      <div className="mx-auto grid min-h-[620px] max-w-7xl items-center px-6 py-20 lg:grid-cols-2 lg:py-24">
        <div className="max-w-2xl">
          <p className="mb-5 inline-flex rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-bold text-blue-700 shadow-sm">
            Professionele reiniging in Twente
          </p>

          <h1 className="text-5xl font-black leading-[1.02] tracking-tight text-blue-950 sm:text-6xl lg:text-7xl">
            Schoon. Fris.
            <span className="block text-blue-600">Betrouwbaar.</span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
            Simple Cleaning Service staat voor professionele reiniging waar u
            op kunt vertrouwen. Voor een stralend resultaat, elke keer weer.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="tel:+31619909034"
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-blue-600 px-6 py-4 font-bold text-white shadow-lg shadow-blue-200 transition hover:-translate-y-0.5 hover:bg-blue-700"
            >
              ☎ Bel: 06 19909034
            </a>

            <a
              href="#offerte"
              className="inline-flex items-center justify-center gap-3 rounded-xl border-2 border-blue-200 bg-white px-6 py-4 font-bold text-blue-700 transition hover:border-blue-600"
            >
              Gratis offerte aanvragen
            </a>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {[
              ["Betrouwbaar & flexibel", "Heldere afspraken en persoonlijk contact."],
              ["Grondig schoon", "Aandacht voor elk detail en een verzorgd resultaat."],
              ["Particulier & zakelijk", "Voor woningen, winkels en bedrijfspanden."],
            ].map(([titel, tekst]) => (
              <div key={titel} className="flex items-start gap-3">
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-blue-200 bg-white text-blue-600">
                  ✓
                </div>

                <div>
                  <p className="text-sm font-bold text-blue-950">{titel}</p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    {tekst}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 lg:hidden">
          <div
            className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-blue-100 to-blue-50 bg-cover bg-center shadow-xl"
            style={{ backgroundImage: "url('/hero-cleaning.jpg')" }}
          />
        </div>
      </div>
    </section>
  );
}
