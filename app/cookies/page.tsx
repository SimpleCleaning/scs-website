import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookieverklaring | Simple Cleaning Service",
  description:
    "Lees welke cookies en vergelijkbare technieken Simple Cleaning Service gebruikt.",
};

const legalLinks = [
  { label: "Algemene voorwaarden", href: "/algemene-voorwaarden" },
  { label: "Privacyverklaring", href: "/privacy" },
  { label: "Cookieverklaring", href: "/cookies" },
];

const cookieTypes = [
  {
    title: "Noodzakelijke technieken",
    status: "Actief",
    description:
      "Deze zijn nodig om de website technisch goed, veilig en gebruiksvriendelijk te laten werken.",
  },
  {
    title: "Analytische cookies",
    status: "Niet actief",
    description:
      "Op dit moment gebruiken wij geen afzonderlijk ingericht analyseplatform voor bezoekersstatistieken.",
  },
  {
    title: "Marketingcookies",
    status: "Niet actief",
    description:
      "Wij gebruiken geen cookies om bezoekers over andere websites te volgen of advertentieprofielen te maken.",
  },
];

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.35),transparent_38%),radial-gradient(circle_at_bottom_left,rgba(2,132,199,0.2),transparent_35%)]" />
        <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:px-8">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-sky-300">
            Cookies
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight sm:text-5xl">
            Duidelijk over cookies en tracking
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            Hier leest u welke cookies en vergelijkbare technieken op deze
            website worden gebruikt.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-[260px_1fr] lg:px-8">
          <aside className="lg:sticky lg:top-40 lg:self-start">
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="font-black text-slate-950">Juridisch</p>
              <nav className="mt-4 flex flex-col gap-2">
                {legalLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`rounded-xl px-3 py-2.5 text-sm font-semibold transition ${
                      item.href === "/cookies"
                        ? "bg-sky-100 text-sky-700"
                        : "text-slate-600 hover:bg-slate-100 hover:text-sky-700"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </aside>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/50 sm:p-10">
            <div className="rounded-2xl border border-sky-100 bg-sky-50 p-6">
              <p className="font-black text-sky-900">
                Laatst bijgewerkt: 6 augustus 2026
              </p>
              <p className="mt-2 leading-7 text-slate-600">
                Op dit moment gebruikt de website geen advertentie- of
                trackingcookies voor persoonlijke reclame.
              </p>
            </div>

            <div className="mt-10 grid gap-5">
              {cookieTypes.map((item) => (
                <article
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:flex sm:items-start sm:justify-between sm:gap-8"
                >
                  <div>
                    <h2 className="text-xl font-black text-slate-950">
                      {item.title}
                    </h2>
                    <p className="mt-3 max-w-2xl leading-7 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                  <span
                    className={`mt-4 inline-flex shrink-0 rounded-full px-4 py-2 text-sm font-black sm:mt-0 ${
                      item.status === "Actief"
                        ? "bg-emerald-100 text-emerald-800"
                        : "bg-slate-200 text-slate-700"
                    }`}
                  >
                    {item.status}
                  </span>
                </article>
              ))}
            </div>

            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              <article className="rounded-3xl border border-slate-200 p-6">
                <h2 className="text-xl font-black text-slate-950">
                  Externe diensten
                </h2>
                <p className="mt-3 leading-7 text-slate-600">
                  Wanneer u doorklikt naar bijvoorbeeld WhatsApp, kan die partij
                  eigen cookies en persoonsgegevens verwerken. De voorwaarden
                  van die externe partij zijn dan van toepassing.
                </p>
              </article>

              <article className="rounded-3xl border border-slate-200 p-6">
                <h2 className="text-xl font-black text-slate-950">
                  Cookies beheren
                </h2>
                <p className="mt-3 leading-7 text-slate-600">
                  U kunt cookies via de instellingen van uw browser bekijken,
                  blokkeren of verwijderen. Het blokkeren van noodzakelijke
                  technieken kan onderdelen van websites minder goed laten
                  werken.
                </p>
              </article>
            </div>

            <div className="mt-12 rounded-3xl bg-slate-950 p-7 text-white">
              <h2 className="text-2xl font-black">Verandert ons cookiegebruik?</h2>
              <p className="mt-3 leading-7 text-slate-300">
                Dan werken wij deze verklaring bij. Als toestemming wettelijk
                nodig is, vragen wij die voordat de betreffende cookies worden
                geplaatst.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
