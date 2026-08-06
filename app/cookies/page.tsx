import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookieverklaring | Simple Cleaning Service",
  description:
    "Lees welke cookies en vergelijkbare technieken Simple Cleaning Service gebruikt.",
};

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.35),transparent_38%),radial-gradient(circle_at_bottom_left,rgba(2,132,199,0.2),transparent_35%)]" />
        <div className="relative mx-auto max-w-5xl px-6 py-16 sm:py-20 lg:px-8">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-sky-300">
            Juridische informatie
          </p>
          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
            Cookieverklaring
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            Hier leest u welke cookies en vergelijkbare technieken op deze
            website kunnen worden gebruikt.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/50 sm:p-10 lg:p-12">
            <div className="rounded-2xl border border-sky-100 bg-sky-50 p-6">
              <p className="font-black text-sky-900">
                Laatst bijgewerkt: 6 augustus 2026
              </p>
              <p className="mt-2 leading-7 text-slate-600">
                Op dit moment gebruikt de website geen advertentie- of
                trackingcookies voor gerichte reclame.
              </p>
            </div>

            <div className="mt-12 space-y-12 leading-7 text-slate-600">
              <article>
                <h2 className="text-2xl font-black text-slate-950">
                  1. Wat zijn cookies?
                </h2>
                <p className="mt-5">
                  Cookies zijn kleine bestanden die een website op uw apparaat
                  kan opslaan. Vergelijkbare technieken, zoals lokale opslag,
                  kunnen een vergelijkbare functie hebben.
                </p>
              </article>

              <article>
                <h2 className="text-2xl font-black text-slate-950">
                  2. Functionele en technische cookies
                </h2>
                <p className="mt-5">
                  Functionele of strikt noodzakelijke cookies kunnen worden
                  gebruikt om de website technisch goed, veilig en
                  gebruiksvriendelijk te laten werken. Voor strikt
                  noodzakelijke cookies is geen toestemming vereist.
                </p>
              </article>

              <article>
                <h2 className="text-2xl font-black text-slate-950">
                  3. Analytische cookies
                </h2>
                <p className="mt-5">
                  Simple Cleaning Service gebruikt momenteel geen afzonderlijk
                  door ons ingericht advertentie- of trackingplatform. De
                  hostingomgeving kan technische en geaggregeerde
                  gebruiksgegevens verwerken voor beveiliging, prestaties en
                  beheer.
                </p>
                <p className="mt-4">
                  Wanneer later een analysetool wordt toegevoegd, wordt deze
                  verklaring bijgewerkt. Als de tool toestemming vereist,
                  vragen wij die toestemming voordat de betreffende cookies
                  worden geplaatst.
                </p>
              </article>

              <article>
                <h2 className="text-2xl font-black text-slate-950">
                  4. Trackingcookies en marketing
                </h2>
                <p className="mt-5">
                  Wij plaatsen momenteel geen cookies om bezoekers over andere
                  websites te volgen of persoonlijke advertentieprofielen te
                  maken.
                </p>
              </article>

              <article>
                <h2 className="text-2xl font-black text-slate-950">
                  5. Externe links en diensten
                </h2>
                <p className="mt-5">
                  Wanneer u doorklikt naar een externe dienst, zoals WhatsApp,
                  kan die partij eigen cookies en persoonsgegevens verwerken.
                  Op het gebruik van die externe dienst zijn de voorwaarden en
                  privacyregels van die partij van toepassing.
                </p>
              </article>

              <article>
                <h2 className="text-2xl font-black text-slate-950">
                  6. Cookies beheren
                </h2>
                <p className="mt-5">
                  U kunt cookies via de instellingen van uw browser bekijken,
                  blokkeren of verwijderen. Het blokkeren van strikt
                  noodzakelijke technieken kan ertoe leiden dat onderdelen van
                  een website minder goed werken.
                </p>
              </article>

              <article>
                <h2 className="text-2xl font-black text-slate-950">
                  7. Wijzigingen en contact
                </h2>
                <p className="mt-5">
                  Wij passen deze verklaring aan wanneer het cookiegebruik
                  verandert. Vragen kunt u sturen naar{" "}
                  <a
                    href="mailto:info@scs.care"
                    className="font-bold text-sky-700 hover:text-sky-900"
                  >
                    info@scs.care
                  </a>
                  .
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
