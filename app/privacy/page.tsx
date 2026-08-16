import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacyverklaring | Simple Cleaning Service",
  description:
    "Lees hoe Simple Cleaning Service persoonsgegevens verzamelt, gebruikt en beschermt.",
  alternates: {
    canonical: "/privacy",
  },
};

const legalLinks = [
  { label: "Algemene voorwaarden", href: "/algemene-voorwaarden" },
  { label: "Privacyverklaring", href: "/privacy" },
  { label: "Cookieverklaring", href: "/cookies" },
];

const sections = [
  {
    title: "Welke gegevens verwerken wij?",
    text: "Wij kunnen onder andere uw naam, adres, woonplaats, e-mailadres, telefoonnummer, gegevens over de gewenste werkzaamheden, berichten, afspraken, factuurgegevens en door u aangeleverde foto’s verwerken.",
  },
  {
    title: "Waarom verwerken wij deze gegevens?",
    text: "Wij gebruiken gegevens om vragen en offerteaanvragen te behandelen, contact op te nemen, afspraken te plannen, werkzaamheden uit te voeren, offertes en facturen op te stellen en te voldoen aan wettelijke verplichtingen.",
  },
  {
    title: "Foto’s bij een aanvraag",
    text: "Foto’s die u meestuurt gebruiken wij uitsluitend om de situatie en benodigde werkzaamheden te beoordelen, tenzij wij afzonderlijk toestemming vragen voor een ander gebruik.",
  },
  {
    title: "Met wie delen wij gegevens?",
    text: "Wij verkopen persoonsgegevens niet. Wij delen gegevens alleen wanneer dat nodig is voor onze dienstverlening of wettelijke verplichtingen, bijvoorbeeld met hosting-, e-mail-, boekhoud- of betaaldienstverleners.",
  },
  {
    title: "Hoe lang bewaren wij gegevens?",
    text: "Wij bewaren persoonsgegevens niet langer dan noodzakelijk. Financiële gegevens bewaren wij gedurende de toepasselijke wettelijke bewaartermijn. Foto’s verwijderen wij wanneer zij niet langer nodig zijn voor beoordeling, uitvoering of afhandeling.",
  },
  {
    title: "Uw privacyrechten",
    text: "U kunt ons vragen om inzage, rectificatie, verwijdering, beperking of overdracht van uw persoonsgegevens. U kunt ook bezwaar maken tegen bepaalde verwerkingen en toestemming intrekken.",
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.35),transparent_38%),radial-gradient(circle_at_bottom_left,rgba(2,132,199,0.2),transparent_35%)]" />
        <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:px-8">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-sky-300">
            Privacy
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight sm:text-5xl">
            Zorgvuldig omgaan met uw gegevens
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            Hier leest u welke persoonsgegevens wij verwerken, waarom wij dat
            doen en welke rechten u heeft.
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
                      item.href === "/privacy"
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

          <div>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/50 sm:p-10">
              <div className="rounded-2xl border border-sky-100 bg-sky-50 p-6">
                <p className="font-black text-sky-900">
                  Laatst bijgewerkt: 6 augustus 2026
                </p>
                <p className="mt-2 leading-7 text-slate-600">
                  Simple Cleaning Service is verantwoordelijk voor de
                  verwerking van persoonsgegevens zoals hieronder beschreven.
                </p>
              </div>

              <div className="mt-10 grid gap-5 sm:grid-cols-2">
                {sections.map((section, index) => (
                  <article
                    key={section.title}
                    className="rounded-3xl border border-slate-200 bg-slate-50 p-6"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 font-black text-sky-700">
                      {index + 1}
                    </div>
                    <h2 className="mt-5 text-xl font-black text-slate-950">
                      {section.title}
                    </h2>
                    <p className="mt-3 leading-7 text-slate-600">
                      {section.text}
                    </p>
                  </article>
                ))}
              </div>

              <div className="mt-10 space-y-8">
                <article>
                  <h2 className="text-2xl font-black text-slate-950">
                    Beveiliging
                  </h2>
                  <p className="mt-4 leading-7 text-slate-600">
                    Wij nemen passende technische en organisatorische
                    maatregelen om persoonsgegevens te beschermen tegen verlies,
                    onbevoegde toegang, misbruik en ongewenste openbaarmaking.
                  </p>
                </article>

                <article>
                  <h2 className="text-2xl font-black text-slate-950">
                    Klacht indienen
                  </h2>
                  <p className="mt-4 leading-7 text-slate-600">
                    Wanneer u vindt dat wij niet correct met uw gegevens omgaan,
                    kunt u contact met ons opnemen. U kunt daarnaast een klacht
                    indienen bij de Autoriteit Persoonsgegevens.
                  </p>
                </article>
              </div>

              <div className="mt-12 rounded-3xl bg-slate-950 p-7 text-white">
                <h2 className="text-2xl font-black">Vraag over uw gegevens?</h2>
                <p className="mt-3 leading-7 text-slate-300">
                  Stuur uw privacyvraag of verzoek naar info@scs.care.
                </p>
                <a
                  href="mailto:info@scs.care"
                  className="mt-6 inline-flex rounded-full bg-sky-500 px-6 py-3 font-black text-white transition hover:bg-sky-400"
                >
                  Neem contact op
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
