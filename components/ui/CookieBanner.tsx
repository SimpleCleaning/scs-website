import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Algemene voorwaarden | Simple Cleaning Service",
  description:
    "Lees de algemene voorwaarden van Simple Cleaning Service voor glasbewassing en buitenreiniging.",
};

const legalLinks = [
  { label: "Algemene voorwaarden", href: "/algemene-voorwaarden" },
  { label: "Privacyverklaring", href: "/privacy" },
  { label: "Cookieverklaring", href: "/cookies" },
];

const articles = [
  {
    title: "Artikel 1 – Definities",
    paragraphs: [
      "Algemene Voorwaarden: deze algemene voorwaarden van Simple Cleaning Service.",
      "Simple Cleaning Service (SCS): de onderneming gevestigd in Borne, ingeschreven bij de Kamer van Koophandel onder nummer 82784329, bereikbaar via info@scs.care en www.scs.care.",
      "Opdrachtgever: iedere natuurlijke persoon of rechtspersoon die met SCS een overeenkomst sluit of daartoe een aanvraag doet.",
      "Consument: een Opdrachtgever die niet handelt in de uitoefening van een beroep of bedrijf.",
      "Zakelijke Opdrachtgever: een Opdrachtgever die handelt in de uitoefening van een beroep of bedrijf.",
      "Werkzaamheden: alle door SCS aangeboden en uitgevoerde diensten, waaronder glasbewassing en het reinigen van zonnepanelen, dakgoten, boeidelen en aanverwante buitenoppervlakken.",
      "Offerte: ieder schriftelijk of elektronisch aanbod van SCS met betrekking tot de Werkzaamheden.",
      "Overeenkomst: iedere overeenkomst tussen SCS en Opdrachtgever waarop deze Algemene Voorwaarden van toepassing zijn.",
      "Onderhoudsafspraak: een terugkerende afspraak, bijvoorbeeld iedere vier, zes of acht weken, zonder minimale looptijd of opzegtermijn.",
    ],
  },
  {
    title: "Artikel 2 – Toepasselijkheid",
    paragraphs: [
      "Deze Algemene Voorwaarden zijn van toepassing op alle aanvragen, Offertes, Overeenkomsten en Werkzaamheden van SCS.",
      "Afwijkingen zijn alleen geldig wanneer deze schriftelijk of per e-mail zijn overeengekomen.",
      "Voorwaarden van een Zakelijke Opdrachtgever worden uitdrukkelijk van de hand gewezen, tenzij SCS deze schriftelijk heeft aanvaard.",
      "Dwingendrechtelijke consumentenrechten blijven altijd van toepassing en gaan bij strijdigheid voor op deze Algemene Voorwaarden.",
    ],
  },
  {
    title: "Artikel 3 – Offertes en overeenkomsten",
    paragraphs: [
      "Offertes zijn vrijblijvend en veertien dagen geldig, tenzij anders vermeld.",
      "Een Overeenkomst komt tot stand nadat Opdrachtgever de Offerte mondeling, schriftelijk of elektronisch heeft aanvaard, of wanneer SCS met instemming van Opdrachtgever met de Werkzaamheden begint.",
      "Kennelijke vergissingen, schrijffouten en rekenfouten binden SCS niet.",
      "Een prijsopgave is gebaseerd op de informatie die Opdrachtgever verstrekt. Wanneer die informatie onvolledig of onjuist blijkt, mag SCS de prijs vóór uitvoering aanpassen.",
      "Bij overeenkomsten op afstand blijven de wettelijke consumentenregels over bedenktijd van toepassing.",
    ],
  },
  {
    title: "Artikel 4 – Prijzen",
    paragraphs: [
      "Alle bedragen worden in euro’s vermeld.",
      "Prijzen voor Consumenten zijn inclusief btw. Prijzen voor Zakelijke Opdrachtgevers zijn exclusief btw, tenzij uitdrukkelijk anders vermeld.",
      "Prijzen op de website, prijslijst, flyers en andere uitingen zijn vanaf-prijzen. De definitieve prijs is mede afhankelijk van het aantal ramen, afmetingen, bereikbaarheid, vervuilingsgraad, benodigde veiligheidsvoorzieningen en andere bijzonderheden.",
      "Wanneer de feitelijke situatie afwijkt van de verstrekte informatie of extra Werkzaamheden nodig blijken, bespreekt SCS de prijsaanpassing of het meerwerk vooraf.",
    ],
  },
  {
    title: "Artikel 5 – Uitvoering",
    paragraphs: [
      "SCS voert de Werkzaamheden zorgvuldig, vakkundig en naar beste inzicht uit.",
      "Genoemde data en tijdstippen zijn indicatief, tenzij schriftelijk uitdrukkelijk een fatale termijn is overeengekomen.",
      "SCS bepaalt binnen de Overeenkomst de wijze van uitvoering en de te gebruiken materialen en hulpmiddelen.",
      "SCS mag derden inschakelen.",
      "Wanneer Werkzaamheden niet veilig of verantwoord kunnen worden uitgevoerd, mag SCS deze overslaan, aanpassen, onderbreken of verplaatsen.",
    ],
  },
  {
    title: "Artikel 6 – Verplichtingen van Opdrachtgever",
    paragraphs: [
      "Opdrachtgever verstrekt tijdig alle informatie die redelijkerwijs nodig is voor een veilige en juiste uitvoering.",
      "Opdrachtgever meldt vooraf onder meer beschadigd of gebarsten glas, lekkende ramen, losse kozijnen, ondeugdelijke dakgoten, kwetsbare gevelonderdelen, defecte zonnepanelen, zwakke bevestigingen en andere risico’s.",
      "Opdrachtgever zorgt voor vrije en veilige toegang tot de locatie en verwijdert obstakels zoals tuinmeubilair, voertuigen, bloembakken en zonwering.",
      "Wanneer voor de uitvoering water of elektriciteit nodig is, stelt Opdrachtgever dit kosteloos en veilig beschikbaar, tenzij anders overeengekomen.",
      "Opdrachtgever zorgt ervoor dat huisdieren, kinderen en andere personen de Werkzaamheden niet hinderen of een veiligheidsrisico vormen.",
    ],
  },
  {
    title: "Artikel 7 – Veiligheid en bereikbaarheid",
    paragraphs: [
      "Veiligheid staat voorop. SCS mag Werkzaamheden weigeren, staken of verplaatsen wanneer de situatie naar haar oordeel onveilig is.",
      "SCS is niet verplicht Werkzaamheden uit te voeren wanneer geschikte en veilige toegang ontbreekt of wanneer ladders, hoogwerkers of andere hulpmiddelen niet veilig kunnen worden geplaatst.",
      "Indien aanvullende veiligheidsvoorzieningen, specialistisch materieel of extra personeel nodig zijn, kunnen de kosten daarvan als meerwerk worden berekend.",
    ],
  },
  {
    title: "Artikel 8 – Weersomstandigheden",
    paragraphs: [
      "SCS mag Werkzaamheden uitstellen, onderbreken of verplaatsen bij storm, harde wind, onweer, vorst, ijzel, extreme hitte, hevige neerslag of andere omstandigheden die een veilige of deugdelijke uitvoering verhinderen.",
      "Uitstel wegens weersomstandigheden geldt niet als tekortkoming en geeft geen recht op schadevergoeding.",
      "SCS neemt zo spoedig mogelijk contact op om een nieuwe afspraak te maken.",
    ],
  },
  {
    title: "Artikel 9 – Periodieke onderhoudsafspraken",
    paragraphs: [
      "Periodieke onderhoudsafspraken zijn volledig vrijblijvend.",
      "Zowel Opdrachtgever als SCS kan een periodieke onderhoudsafspraak op ieder moment beëindigen. Er geldt geen minimale looptijd of opzegtermijn.",
      "Reeds uitgevoerde Werkzaamheden en reeds verschuldigde bedragen blijven verschuldigd.",
      "Reeds ingeplande afspraken kunnen in overleg worden uitgevoerd, verplaatst of geannuleerd.",
    ],
  },
  {
    title: "Artikel 10 – Annuleren en verplaatsen",
    paragraphs: [
      "Opdrachtgever kan een eenmalige afspraak tot vierentwintig uur vóór het afgesproken tijdstip kosteloos annuleren of verplaatsen.",
      "Bij annulering binnen vierentwintig uur, afwezigheid of wanneer SCS ter plaatse niet kan beginnen door een omstandigheid voor rekening van Opdrachtgever, mag SCS redelijke voorrijkosten en reeds gemaakte kosten in rekening brengen.",
      "SCS mag een afspraak wegens ziekte, overmacht, onveilige omstandigheden of planningsproblemen verplaatsen en plant in overleg een nieuw moment.",
    ],
  },
  {
    title: "Artikel 11 – Meerwerk",
    paragraphs: [
      "Werkzaamheden die niet in de Offerte zijn opgenomen of door onverwachte omstandigheden extra tijd, materiaal of materieel vereisen, gelden als meerwerk.",
      "SCS meldt meerwerk en de verwachte extra kosten vooraf, voor zover redelijkerwijs mogelijk.",
      "Meerwerk kan leiden tot een hogere prijs en langere uitvoeringsduur.",
    ],
  },
  {
    title: "Artikel 12 – Bestaande gebreken en bijzondere materialen",
    paragraphs: [
      "SCS is niet aansprakelijk voor schade die voortvloeit uit reeds aanwezige gebreken, slijtage, achterstallig onderhoud, ondeugdelijke montage, materiaalmoeheid, corrosie, lekkage of verborgen gebreken.",
      "Bij zonnepanelen is SCS niet aansprakelijk voor reeds aanwezige defecten, microscheuren, productiefouten, slechte afdichting, beschadigde bekabeling of ondeugdelijke bevestiging.",
      "Bij dakgoten en boeidelen is SCS niet aansprakelijk voor schade door houtrot, corrosie, losse verbindingen, ondeugdelijke bevestiging of lekkage.",
      "SCS garandeert niet dat alle aanslag, verkleuring, kalk, oxidatie, cementsluier, krassen of ingebrand vuil volledig kan worden verwijderd.",
    ],
  },
  {
    title: "Artikel 13 – Oplevering en klachten",
    paragraphs: [
      "Opdrachtgever controleert het resultaat zo spoedig mogelijk na uitvoering.",
      "Zichtbare klachten worden bij voorkeur direct en uiterlijk binnen zeven dagen schriftelijk of per e-mail gemeld.",
      "De klacht bevat een duidelijke omschrijving en, indien mogelijk, foto’s.",
      "Opdrachtgever geeft SCS een redelijke gelegenheid om de klacht te onderzoeken en, wanneer gegrond, het werk te herstellen.",
    ],
  },
  {
    title: "Artikel 14 – Betaling",
    paragraphs: [
      "Facturen moeten binnen veertien dagen na factuurdatum worden betaald, tenzij schriftelijk anders afgesproken.",
      "Bij niet-tijdige betaling gelden de toepasselijke wettelijke rente en incassoregels.",
      "Voor Consumenten worden buitengerechtelijke incassokosten pas berekend nadat de wettelijk vereiste kosteloze betalingsherinnering is verzonden.",
      "SCS mag verdere Werkzaamheden opschorten zolang opeisbare facturen niet zijn betaald.",
    ],
  },
  {
    title: "Artikel 15 – Aansprakelijkheid",
    paragraphs: [
      "SCS is alleen aansprakelijk voor directe schade die het rechtstreekse gevolg is van een toerekenbare tekortkoming van SCS.",
      "De aansprakelijkheid is beperkt tot het bedrag dat de aansprakelijkheidsverzekering voor de betreffende gebeurtenis uitkeert, vermeerderd met het eigen risico.",
      "Wanneer geen verzekeringsuitkering plaatsvindt, is de aansprakelijkheid beperkt tot het factuurbedrag van de betreffende opdracht, met een maximum van € 1.000 per gebeurtenis, voor zover wettelijk toegestaan.",
      "SCS is niet aansprakelijk voor indirecte schade, gevolgschade, omzetverlies, winstderving of bedrijfsstagnatie, behalve wanneer dwingend recht anders bepaalt.",
      "Deze beperkingen gelden niet bij opzet of bewuste roekeloosheid van SCS.",
    ],
  },
  {
    title: "Artikel 16 – Overmacht",
    paragraphs: [
      "Onder overmacht vallen omstandigheden buiten de redelijke invloed van SCS, waaronder extreme weersomstandigheden, ziekte, ongeval, storing van materieel, stroom- of waterstoring, verkeersproblemen, overheidsmaatregelen, stakingen en uitval van ingeschakelde derden.",
      "Tijdens overmacht worden de verplichtingen van SCS opgeschort.",
      "Reeds uitgevoerde Werkzaamheden worden naar verhouding afgerekend.",
    ],
  },
  {
    title: "Artikel 17 – Persoonsgegevens",
    paragraphs: [
      "SCS verwerkt persoonsgegevens voor aanvragen, afspraken, offertes, facturatie, klantenservice en wettelijke verplichtingen.",
      "Meer informatie staat in de privacyverklaring op www.scs.care.",
    ],
  },
  {
    title: "Artikel 18 – Wijziging van de voorwaarden",
    paragraphs: [
      "SCS mag deze Algemene Voorwaarden wijzigen.",
      "Nieuwe voorwaarden gelden voor Overeenkomsten die na bekendmaking worden gesloten.",
      "Bij periodieke afspraken worden wezenlijke wijzigingen vooraf bekendgemaakt. Een Consument kan de onderhoudsafspraak altijd kosteloos beëindigen.",
      "De meest actuele versie staat op www.scs.care.",
    ],
  },
  {
    title: "Artikel 19 – Toepasselijk recht en geschillen",
    paragraphs: [
      "Op alle rechtsverhoudingen met SCS is Nederlands recht van toepassing.",
      "Partijen proberen een geschil eerst onderling op te lossen.",
      "Een geschil wordt voorgelegd aan de volgens de wet bevoegde Nederlandse rechter.",
      "Voor een Consument wordt niet afgeweken van de rechter die volgens dwingend consumentenrecht bevoegd is.",
    ],
  },
];

export default function AlgemeneVoorwaardenPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.35),transparent_38%),radial-gradient(circle_at_bottom_left,rgba(2,132,199,0.2),transparent_35%)]" />
        <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:px-8">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-sky-300">
            Algemene voorwaarden
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight sm:text-5xl">
            Duidelijke afspraken voor een helder resultaat
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            Hier leest u welke afspraken gelden voor offertes, planning,
            uitvoering en betaling bij Simple Cleaning Service.
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
                      item.href === "/algemene-voorwaarden"
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
                Simple Cleaning Service is gevestigd in Borne en staat
                ingeschreven bij de Kamer van Koophandel onder nummer 82784329.
              </p>
            </div>

            <div className="mt-10 grid gap-5">
              {articles.map((article, index) => (
                <details
                  key={article.title}
                  open={index < 2}
                  className="group rounded-2xl border border-slate-200 bg-slate-50 px-5 py-5"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-black text-slate-950">
                    <span>{article.title}</span>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-xl text-sky-700 shadow-sm transition group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <div className="mt-5 space-y-4 border-t border-slate-200 pt-5 leading-7 text-slate-600">
                    {article.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </details>
              ))}
            </div>

            <div className="mt-12 rounded-3xl bg-slate-950 p-7 text-white">
              <h2 className="text-2xl font-black">Vragen over de voorwaarden?</h2>
              <p className="mt-3 max-w-2xl leading-7 text-slate-300">
                Neem gerust contact op. We leggen afspraken graag duidelijk uit
                voordat de werkzaamheden beginnen.
              </p>
              <a
                href="mailto:info@scs.care"
                className="mt-6 inline-flex rounded-full bg-sky-500 px-6 py-3 font-black text-white transition hover:bg-sky-400"
              >
                Mail info@scs.care
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
