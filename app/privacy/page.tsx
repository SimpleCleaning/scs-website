import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacyverklaring | Simple Cleaning Service",
  description:
    "Lees hoe Simple Cleaning Service persoonsgegevens verzamelt, gebruikt en beschermt.",
};

const sections = [
  {
    title: "1. Wie is verantwoordelijk?",
    paragraphs: [
      "Simple Cleaning Service is verantwoordelijk voor de verwerking van persoonsgegevens zoals beschreven in deze privacyverklaring.",
      "Contactgegevens: Simple Cleaning Service, gevestigd in Borne, KvK 82784329, e-mail info@scs.care, telefoon +31 6 19909034 en website www.scs.care.",
    ],
  },
  {
    title: "2. Welke persoonsgegevens verwerken wij?",
    paragraphs: [
      "Wij kunnen onder andere uw naam, adres, woonplaats, e-mailadres, telefoonnummer, gegevens over de gewenste werkzaamheden, berichten, afspraken, factuurgegevens en door u aangeleverde foto’s verwerken.",
      "Bij bezoek aan de website kunnen technische gegevens worden verwerkt, zoals het IP-adres, browsertype, apparaat en serverloggegevens. Deze gegevens worden hoofdzakelijk gebruikt voor beveiliging, technisch beheer en foutopsporing.",
    ],
  },
  {
    title: "3. Waarom verwerken wij deze gegevens?",
    paragraphs: [
      "Wij gebruiken persoonsgegevens om vragen en offerteaanvragen te behandelen, contact op te nemen, afspraken te plannen, werkzaamheden uit te voeren, offertes en facturen op te stellen, betalingen en administratie te verwerken en te voldoen aan wettelijke verplichtingen.",
      "Wanneer u foto’s meestuurt, gebruiken wij deze uitsluitend om de situatie en de benodigde werkzaamheden te beoordelen, tenzij wij afzonderlijk toestemming vragen voor een ander gebruik.",
    ],
  },
  {
    title: "4. Grondslagen",
    paragraphs: [
      "Wij verwerken persoonsgegevens wanneer dit nodig is voor de voorbereiding of uitvoering van een overeenkomst, om aan een wettelijke verplichting te voldoen, op basis van een gerechtvaardigd belang zoals beveiliging en bedrijfsadministratie, of op basis van uw toestemming wanneer toestemming wettelijk vereist is.",
    ],
  },
  {
    title: "5. Offerte- en contactformulieren",
    paragraphs: [
      "Gegevens die u via een formulier verstrekt, worden gebruikt om uw aanvraag te behandelen. Verstrek alleen informatie en foto’s die noodzakelijk zijn voor uw aanvraag.",
      "Wanneer een formulier gebruikmaakt van een externe e-mail- of hostingdienst, worden de gegevens via die dienst verwerkt om het bericht veilig bij ons af te leveren.",
    ],
  },
  {
    title: "6. Met wie delen wij gegevens?",
    paragraphs: [
      "Wij verkopen persoonsgegevens niet. Wij delen gegevens alleen wanneer dat nodig is voor onze dienstverlening of wettelijke verplichtingen.",
      "Wij kunnen gebruikmaken van dienstverleners voor hosting, e-mailafhandeling, boekhouding, facturatie, opslag en technisch beheer. Met partijen die namens ons persoonsgegevens verwerken, maken wij waar nodig passende afspraken.",
      "Gegevens kunnen ook worden verstrekt aan toezichthouders, belastingautoriteiten, incassodienstverleners of andere partijen wanneer dit wettelijk verplicht of noodzakelijk is voor de vaststelling, uitoefening of verdediging van rechten.",
    ],
  },
  {
    title: "7. Verwerking buiten de Europese Economische Ruimte",
    paragraphs: [
      "Sommige technische dienstverleners kunnen gegevens buiten de Europese Economische Ruimte verwerken. In dat geval streven wij naar passende waarborgen, bijvoorbeeld een adequaatheidsbesluit of door de Europese Commissie goedgekeurde standaardcontractbepalingen.",
    ],
  },
  {
    title: "8. Hoe lang bewaren wij gegevens?",
    paragraphs: [
      "Wij bewaren persoonsgegevens niet langer dan noodzakelijk voor het doel waarvoor zij zijn verzameld.",
      "Offerte- en contactgegevens bewaren wij zolang dit nodig is voor de behandeling van de aanvraag en een redelijke opvolgperiode. Gegevens die onderdeel zijn van onze financiële administratie bewaren wij gedurende de toepasselijke wettelijke bewaartermijn. Foto’s worden verwijderd wanneer zij niet langer nodig zijn voor de beoordeling, uitvoering of afhandeling van de opdracht, behoudens een wettelijke of gerechtvaardigde reden om ze langer te bewaren.",
    ],
  },
  {
    title: "9. Beveiliging",
    paragraphs: [
      "Wij nemen passende technische en organisatorische maatregelen om persoonsgegevens te beschermen tegen verlies, onbevoegde toegang, misbruik en ongewenste openbaarmaking.",
      "Geen enkele digitale overdracht of opslag is volledig zonder risico. Meld een vermoedelijk beveiligingsprobleem via info@scs.care.",
    ],
  },
  {
    title: "10. Uw privacyrechten",
    paragraphs: [
      "U kunt ons vragen om inzage, rectificatie, verwijdering, beperking of overdracht van uw persoonsgegevens. U kunt ook bezwaar maken tegen bepaalde verwerkingen en een eerder gegeven toestemming intrekken.",
      "Wij kunnen om aanvullende informatie vragen om uw identiteit te controleren. Wij reageren in beginsel binnen de daarvoor geldende wettelijke termijn.",
      "U kunt een klacht indienen bij de Autoriteit Persoonsgegevens wanneer u vindt dat wij niet correct met uw persoonsgegevens omgaan.",
    ],
  },
  {
    title: "11. Cookies",
    paragraphs: [
      "Informatie over cookies en vergelijkbare technieken vindt u in onze cookieverklaring.",
    ],
  },
  {
    title: "12. Wijzigingen",
    paragraphs: [
      "Wij kunnen deze privacyverklaring aanpassen wanneer onze dienstverlening, website of wetgeving verandert. De actuele versie staat altijd op deze website.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.35),transparent_38%),radial-gradient(circle_at_bottom_left,rgba(2,132,199,0.2),transparent_35%)]" />
        <div className="relative mx-auto max-w-5xl px-6 py-16 sm:py-20 lg:px-8">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-sky-300">
            Juridische informatie
          </p>
          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
            Privacyverklaring
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            Hier leggen wij uit welke persoonsgegevens wij verwerken, waarom
            wij dat doen en welke rechten u heeft.
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
                Deze privacyverklaring geldt voor de website, offerteaanvragen,
                contactmomenten en dienstverlening van Simple Cleaning Service.
              </p>
            </div>

            <div className="mt-12 space-y-12">
              {sections.map((section) => (
                <article key={section.title}>
                  <h2 className="text-2xl font-black tracking-tight text-slate-950">
                    {section.title}
                  </h2>
                  <div className="mt-5 space-y-4 leading-7 text-slate-600">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-14 border-t border-slate-200 pt-8">
              <h2 className="text-xl font-black text-slate-950">
                Contact over privacy
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                Stuur uw verzoek of vraag naar{" "}
                <a
                  href="mailto:info@scs.care"
                  className="font-bold text-sky-700 hover:text-sky-900"
                >
                  info@scs.care
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
