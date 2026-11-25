import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Zakelijke glasbewassing en buitenreiniging in Twente",
  description: "Simple Cleaning Service verzorgt zakelijke glasbewassing, reclameborden, gevelreclame, zonnepanelen, dakgoten en boeidelen in Borne en omgeving. Vraag vrijblijvend een offerte aan.",
  alternates: { canonical: "https://www.scs.care/zakelijk" },
};

const services = [
  { title: "Glasbewassing", text: "Schone ramen binnen en buiten, traditioneel of met osmosewater. Voor een verzorgde entree, showroom en werkplek.", path: "M3 3h18v18H3z M12 3v18 M3 12h18" },
  { title: "Reclameborden en gevelreclame", text: "Reiniging van reclameborden, gevelletters, bedrijfslogo's, reclamezuilen en lichtbakken, afgestemd op het materiaal.", path: "M3 4h18v12H3z M8 16v5 M16 16v5 M7 10h10" },
  { title: "Zonnepanelen reinigen", text: "Zorgvuldige verwijdering van vuil en aanslag op zonnepanelen, waar deze veilig bereikbaar zijn.", path: "M5 8h14l3 12H2z M12 8v12 M4 14h16 M12 2v3 M5 3l2 2 M19 3l-2 2" },
  { title: "Dakgoten schoonmaken", text: "Verwijdering van bladeren en opgehoopt vuil voor een goede afvoer van regenwater.", path: "M3 4v7a5 5 0 0 0 5 5h13 M3 4h18 M17 16v5" },
  { title: "Boeidelen reinigen", text: "Verwijdering van vuil en groene aanslag op boeidelen voor een verzorgde uitstraling van het bedrijfspand.", path: "M3 10l9-7 9 7 M5 10h14v5H5z M7 15v6 M17 15v6" },
];
const businesses = ["Kantoren en bedrijfspanden", "Winkels en showrooms", "Auto- en camperbedrijven", "Restaurants en horeca", "Scholen en kinderopvang", "Fitnesscentra en sportlocaties", "Bedrijfshallen en werkplaatsen", "Hotels en overige bedrijven"];
const benefits = [
  { title: "Flexibele samenwerking", text: "Eenmalige of periodieke reiniging, met een frequentie die past bij jouw bedrijf." },
  { title: "Persoonlijk contact", text: "Korte lijnen, duidelijke afspraken en rechtstreeks contact over de werkzaamheden." },
  { title: "Rekening met jouw bedrijfsvoering", text: "We stemmen de planning in overleg af om hinder voor klanten en medewerkers zoveel mogelijk te beperken." },
  { title: "Offerte op maat", text: "Een vrijblijvende prijsopgave op basis van het pand, de bereikbaarheid en de gewenste werkzaamheden." },
];

export default function ZakelijkPage() {
  return (
    <main>
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
          <p className="mb-5 text-sm font-bold uppercase tracking-widest text-sky-400">Zakelijke dienstverlening</p>
          <h1 className="max-w-4xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">Een representatief bedrijf begint met een schone uitstraling.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">Professionele glasbewassing en buitenreiniging voor bedrijven in Borne en omgeving. Van een streeploze showroom tot verzorgde gevelreclame: Simple Cleaning Service helpt jouw bedrijf goed voor de dag te komen.</p>
          <div className="relative mt-10 aspect-[16/7] min-h-[220px] overflow-hidden rounded-[2rem] bg-slate-800">
            <Image src="/images/zakelijk-bedrijfspand.jpg" alt="Sfeerbeeld van een modern bedrijfspand met een glazen gevel" fill priority sizes="(max-width: 1280px) 100vw, 1200px" className="object-cover" />
          </div>
          <p className="mt-2 text-xs text-slate-400">Sfeerbeeld ter illustratie.</p>
          <Link href="/offerte" className="mt-8 inline-flex rounded-xl bg-sky-600 px-6 py-4 font-bold text-white transition hover:bg-sky-700">Vrijblijvende zakelijke offerte <span aria-hidden="true" className="ml-3">→</span></Link>
        </div>
      </section>
      <section className="bg-white py-16 sm:py-24 text-slate-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-widest text-sky-600">Onze diensten</p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">Alles voor een verzorgde uitstraling</h2>
          <p className="mt-4 max-w-3xl text-slate-600">Combineer verschillende werkzaamheden en stem het onderhoud af op de behoeften van jouw bedrijf.</p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {services.map((service, index) => (
              <article key={service.title} className={`rounded-[2rem] border border-slate-200 bg-slate-50 p-7 ${index === 4 ? "sm:col-span-2" : ""}`}>
                <div className="mb-5 inline-flex rounded-2xl bg-sky-100 p-3 text-sky-700"><svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d={service.path}/></svg></div>
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="mt-3 leading-relaxed text-slate-600">{service.text}</p>
              </article>
            ))}
          </div>
          <Link href="/diensten" className="mt-8 inline-flex font-bold text-sky-700 hover:underline">Meer over onze diensten →</Link>
        </div>
      </section>
      <section className="bg-slate-100 py-16 sm:py-24 text-slate-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div><p className="text-sm font-bold uppercase tracking-widest text-sky-600">Voor bedrijven</p><h2 className="mt-3 text-3xl font-black sm:text-4xl">Van winkel tot bedrijfshal</h2><p className="mt-5 leading-relaxed text-slate-600">Een schone uitstraling draagt bij aan de eerste indruk van jouw onderneming. Of het nu gaat om de ramen van een kantoor, de glazen gevel van een showroom of een vervuild reclamebord langs de weg: we denken graag mee over een passende oplossing.</p></div>
            <ul className="grid gap-3 sm:grid-cols-2">{businesses.map((business) => <li key={business} className="flex items-center gap-3 rounded-xl bg-white p-4 font-medium"><span aria-hidden="true" className="font-bold text-sky-600">✓</span>{business}</li>)}</ul>
          </div>
        </div>
      </section>
      <section className="bg-white py-16 sm:py-24 text-slate-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-widest text-sky-600">Onze aanpak</p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">Duidelijke afspraken, een schone zaak</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">{benefits.map((benefit) => <article key={benefit.title} className="rounded-[2rem] border border-slate-200 p-7"><h3 className="text-xl font-bold">{benefit.title}</h3><p className="mt-3 leading-relaxed text-slate-600">{benefit.text}</p></article>)}</div>
        </div>
      </section>
      <section className="bg-slate-950 py-16 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-widest text-sky-400">Borne en omgeving</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-black sm:text-4xl">Ook jouw bedrijf helder, fris en streeploos?</h2>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-300">Wij richten ons op bedrijven in Borne, Hengelo, Almelo, Enschede, Oldenzaal, Delden, Goor, Tubbergen en omgeving. Vraag vrijblijvend een offerte aan of neem contact op om de mogelijkheden te bespreken.</p>
          <div className="mt-8 flex flex-wrap gap-4"><Link href="/offerte" className="rounded-xl bg-sky-600 px-6 py-4 font-bold text-white hover:bg-sky-700">Vraag een zakelijke offerte aan</Link><Link href="/contact" className="rounded-xl border border-slate-600 px-6 py-4 font-bold text-white hover:bg-slate-800">Neem contact op</Link></div>
        </div>
      </section>
    </main>
  );
}
