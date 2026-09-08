import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Simple Transport Service | Transport Borne",
  description:
    "Simple Transport Service uit Borne verzorgt betrouwbaar transport voor zakelijke en particuliere opdrachtgevers, waaronder vaste routes en transportopdrachten.",

  alternates: {
    canonical: "https://www.scs.care/transport",
  },

  openGraph: {
    title: "Simple Transport Service | Transport Borne",
    description:
      "Betrouwbaar transport voor zakelijke en particuliere opdrachtgevers vanuit Borne.",
    url: "https://www.scs.care/transport",
    type: "website",
  },
};

const transportBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.scs.care/transport#business",
  name: "Simple Transport Service",
  url: "https://www.simpleparcel.nl",
  telephone: "+31619909034",
  email: "info@simpleparcel.nl",
  description:
    "Transportbedrijf uit Borne voor zakelijke en particuliere transportopdrachten en vaste routes.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Borne",
    addressRegion: "Overijssel",
    addressCountry: "NL",
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Nederland",
  },
};

export default function TransportPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(transportBusinessJsonLd).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      <main className="min-h-screen bg-white text-slate-900">
        {/* HERO */}
        <section className="relative overflow-hidden bg-slate-950 text-white">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800" />

          <div className="relative mx-auto max-w-6xl px-6 py-20 sm:py-24 lg:py-28">
            <div className="max-w-4xl">
              <div className="mb-10 inline-block rounded-2xl bg-white p-5 shadow-xl sm:p-7">
                <img
                  src="/images/simple-transport-logo.png"
                  alt="Simple Transport Service"
                  className="h-auto w-full max-w-md sm:max-w-xl"
                />
              </div>

              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">
                Transport vanuit Borne
              </p>

              <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Betrouwbaar transport.
                <span className="block text-slate-300">
                  Duidelijke afspraken.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                Simple Transport Service verzorgt professioneel wegtransport
                voor zakelijke en particuliere opdrachtgevers. Betrouwbaar,
                flexibel en met persoonlijke communicatie.
              </p>

              <div className="mt-9 flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium text-slate-300">
                <span>✓ Zakelijk transport</span>
                <span>✓ Particulier transport</span>
                <span>✓ Vaste routes</span>
                <span>✓ Gevestigd in Borne</span>
              </div>
            </div>
          </div>
        </section>

        {/* OVER ONS */}
        <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
                Over Simple Transport Service
              </p>

              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Transport met duidelijke afspraken
              </h2>
            </div>

            <div className="space-y-5 text-lg leading-8 text-slate-600">
              <p>
                Simple Transport Service is gevestigd in Borne en verzorgt
                transport voor zakelijke en particuliere opdrachtgevers.
              </p>

              <p>
                Betrouwbaarheid, flexibiliteit en duidelijke communicatie staan
                centraal. Opdrachten worden zorgvuldig uitgevoerd met aandacht
                voor planning, materiaal en gemaakte afspraken.
              </p>
            </div>
          </div>
        </section>

        {/* DIENSTEN */}
        <section className="bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
            <div className="max-w-2xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
                Werkzaamheden
              </p>

              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Transportdiensten
              </h2>

              <p className="mt-4 text-lg leading-8 text-slate-600">
                Van zakelijke transportopdrachten en vaste routes tot het
                vervoeren van goederen voor particuliere opdrachtgevers.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
                <div className="mb-5 text-3xl">🚚</div>

                <h3 className="text-xl font-bold">
                  Zakelijk transport
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Professioneel en betrouwbaar transport voor bedrijven en
                  zakelijke opdrachtgevers.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
                <div className="mb-5 text-3xl">📦</div>

                <h3 className="text-xl font-bold">
                  Particulier transport
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Voor het ophalen en vervoeren van goederen voor particuliere
                  opdrachtgevers.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
                <div className="mb-5 text-3xl">📍</div>

                <h3 className="text-xl font-bold">
                  Vaste routes
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Betrouwbare uitvoering van terugkerende transportopdrachten
                  en vaste routes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WERKWIJZE */}
        <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
                Onze werkwijze
              </p>

              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Betrouwbaar onderweg
              </h2>

              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
                Bij iedere opdracht staan duidelijke afspraken en een
                zorgvuldige uitvoering voorop. Van het ophalen tot de aflevering
                weet u waar u aan toe bent.
              </p>
            </div>

            <div className="grid gap-4">
              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold">
                  Persoonlijk contact
                </h3>
                <p className="mt-2 text-slate-600">
                  Korte lijnen en duidelijke communicatie over de opdracht.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold">
                  Flexibele uitvoering
                </h3>
                <p className="mt-2 text-slate-600">
                  Transport afgestemd op de gemaakte afspraken en planning.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold">
                  Zorgvuldig transport
                </h3>
                <p className="mt-2 text-slate-600">
                  Aandacht voor goederen, materiaal en een nette aflevering.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="border-t border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
                  Contact
                </p>

                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Simple Transport Service
                </h2>

                <p className="mt-4 max-w-xl text-lg leading-8 text-slate-600">
                  Voor vragen over transportwerkzaamheden kunt u rechtstreeks
                  contact opnemen.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                <dl className="space-y-6">
                  <div>
                    <dt className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                      Vestigingsplaats
                    </dt>
                    <dd className="mt-1 text-lg font-semibold">
                      Borne
                    </dd>
                  </div>

                  <div>
                    <dt className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                      Telefoon
                    </dt>
                    <dd className="mt-1">
                      <a
                        href="tel:+31619909034"
                        className="text-lg font-semibold text-blue-600 hover:text-blue-700"
                      >
                        06 19 90 90 34
                      </a>
                    </dd>
                  </div>

                  <div>
                    <dt className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                      E-mail
                    </dt>
                    <dd className="mt-1">
                      <a
                        href="mailto:info@simpleparcel.nl"
                        className="text-lg font-semibold text-blue-600 hover:text-blue-700"
                      >
                        info@simpleparcel.nl
                      </a>
                    </dd>
                  </div>

                  <div>
                    <dt className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                      KvK
                    </dt>
                    <dd className="mt-1 text-lg font-semibold">
                      82784329
                    </dd>
                  </div>

                  <div>
                    <dt className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                      Website
                    </dt>
                    <dd className="mt-1 text-lg font-semibold">
                      www.simpleparcel.nl
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </section>

        {/* VERGUNNINGEN & REGISTRATIES */}
        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-6 py-10">
            <div className="flex flex-col items-center text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Vergunningen & registraties
              </p>

              <img
                src="/images/niwo-vihb.png"
                alt="NIWO en VIHB"
                className="mt-5 h-auto w-full max-w-[220px]"
              />

              <p className="mt-4 text-xs text-slate-400">
                NIWO-vergunninghouder · VIHB-geregistreerd
              </p>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-slate-950">
          <div className="mx-auto max-w-6xl px-6 py-8 text-center">
            <p className="font-semibold text-white">
              Simple Transport Service
            </p>

            <p className="mt-2 text-sm text-slate-400">
              Borne · Overijssel
            </p>

            <p className="mt-3 text-xs text-slate-500">
              KvK 82784329
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}