import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Diensten | Simple Cleaning Service",
  description:
    "Professionele glasbewassing, zonnepanelenreiniging, dakgootreiniging en reiniging van boeidelen in Borne en omgeving.",
  alternates: {
    canonical: "/diensten",
  },
};

type IconName = "window" | "solar" | "gutter" | "fascia";

type Service = {
  title: string;
  description: string;
  benefits: string[];
  icon: IconName;
  number: string;
};

const services: Service[] = [
  {
    number: "01",
    title: "Glazen wassen",
    description:
      "Schone ramen zorgen direct voor een verzorgde uitstraling en meer licht in huis. Wij reinigen ramen zorgvuldig en streeploos, voor zowel particulieren als bedrijven.",
    benefits: [
      "Streeploos en professioneel resultaat",
      "Geschikt voor woningen en bedrijfspanden",
      "Eenmalig of periodiek mogelijk",
    ],
    icon: "window",
  },
  {
    number: "02",
    title: "Zonnepanelen reinigen",
    description:
      "Vuil, stof, vogelpoep en aanslag kunnen zich op zonnepanelen ophopen. Met een zorgvuldige reiniging zorgen we ervoor dat jouw installatie weer schoon en verzorgd is.",
    benefits: [
      "Veilige en zorgvuldige werkwijze",
      "Reiniging zonder agressieve middelen",
      "Geschikt voor particuliere installaties",
    ],
    icon: "solar",
  },
  {
    number: "03",
    title: "Dakgoten schoonmaken",
    description:
      "Een verstopte dakgoot kan leiden tot overstromingen, lekkages en schade aan de gevel. Wij verwijderen bladeren, mos en ander vuil zodat regenwater weer goed kan wegstromen.",
    benefits: [
      "Voorkomt verstoppingen en lekkages",
      "Verwijdering van bladeren en aanslag",
      "Grondige controle tijdens de werkzaamheden",
    ],
    icon: "gutter",
  },
  {
    number: "04",
    title: "Boeidelen reinigen",
    description:
      "Boeidelen krijgen door het weer vaak te maken met groene aanslag, vuil en verkleuring. Wij reinigen ze grondig zodat de buitenzijde van jouw woning er weer fris uitziet.",
    benefits: [
      "Verwijdert vuil en groene aanslag",
      "Verzorgde uitstraling van de woning",
      "Te combineren met glasbewassing",
    ],
    icon: "fascia",
  },
];

const advantages = [
  {
    title: "Persoonlijke service",
    description:
      "Je hebt direct contact met de uitvoerder en ontvangt duidelijk advies over de werkzaamheden.",
  },
  {
    title: "Duidelijke afspraken",
    description:
      "Vooraf spreken we af wat we uitvoeren, wanneer we langskomen en wat de werkzaamheden kosten.",
  },
  {
    title: "Netjes en zorgvuldig",
    description:
      "We werken met aandacht voor jouw woning, tuin en omgeving en laten alles netjes achter.",
  },
  {
    title: "Actief in de regio",
    description:
      "Simple Cleaning Service is gevestigd in Borne en werkt in Borne en omliggende plaatsen.",
  },
];

const faqs = [
  {
    question: "Werken jullie alleen voor particulieren?",
    answer:
      "Nee. We voeren werkzaamheden uit voor zowel particulieren als kleinere bedrijven en bedrijfspanden.",
  },
  {
    question: "Kan ik meerdere diensten combineren?",
    answer:
      "Ja. Je kunt bijvoorbeeld glasbewassing combineren met het reinigen van zonnepanelen, dakgoten of boeidelen.",
  },
  {
    question: "Kan ik ook een periodieke afspraak maken?",
    answer:
      "Voor glasbewassing is een periodieke afspraak mogelijk. We bespreken samen welke frequentie het beste bij jouw situatie past.",
  },
  {
    question: "In welke plaatsen zijn jullie actief?",
    answer:
      "We zijn gevestigd in Borne en werken voornamelijk in Borne en de omliggende regio. Neem gerust contact op om te controleren of jouw adres binnen het werkgebied valt.",
  },
];

function ServiceIcon({ name }: { name: IconName }) {
  const iconClass = "h-9 w-9";

  if (name === "window") {
    return (
      <svg
        className={iconClass}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        aria-hidden="true"
      >
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="M12 3v18M4 12h16" />
        <path d="m7 8 2-2M15 17l2-2" />
      </svg>
    );
  }

  if (name === "solar") {
    return (
      <svg
        className={iconClass}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        aria-hidden="true"
      >
        <path d="M5 10h14l2 9H3l2-9Z" />
        <path d="M8 10 7 19M12 10v9M16 10l1 9M4 15h16" />
        <path d="M12 2v3M4.9 4.9 7 7M19.1 4.9 17 7M21 12h-2M5 12H3" />
      </svg>
    );
  }

  if (name === "gutter") {
    return (
      <svg
        className={iconClass}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        aria-hidden="true"
      >
        <path d="M3 6h18M5 6v4c0 3.3 2.7 6 6 6h2c3.3 0 6-2.7 6-6V6" />
        <path d="M12 16v5M9 21h6" />
        <path d="m8 10 1.5 1.5L12 9M14.5 11.5 17 9" />
      </svg>
    );
  }

  return (
    <svg
      className={iconClass}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      aria-hidden="true"
    >
      <path d="M3 8 12 3l9 5" />
      <path d="M5 8v11h14V8" />
      <path d="M3 8h18M3 11h18" />
      <path d="M8 15h8" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      className="mt-0.5 h-5 w-5 shrink-0 text-sky-600"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M16.704 5.292a1 1 0 0 1 .004 1.414l-7.25 7.292a1 1 0 0 1-1.42.004l-3.75-3.75a1 1 0 1 1 1.414-1.414l3.04 3.04 6.544-6.582a1 1 0 0 1 1.418-.004Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <path d="M4 10h12M11 5l5 5-5 5" />
    </svg>
  );
}

export default function DienstenPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.35),transparent_38%),radial-gradient(circle_at_bottom_left,rgba(2,132,199,0.2),transparent_35%)]" />

        <div className="absolute -right-32 top-16 h-80 w-80 rounded-full border border-white/10" />
        <div className="absolute -right-16 top-32 h-52 w-52 rounded-full border border-white/10" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-8 lg:py-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-sm font-bold text-sky-200">
              <span className="h-2 w-2 rounded-full bg-sky-400" />
              Schoon, zorgvuldig en betrouwbaar
            </div>

            <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Professionele reiniging voor een{" "}
              <span className="text-sky-400">verzorgde uitstraling</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Van streeploze ramen tot schone zonnepanelen, dakgoten en
              boeidelen. Simple Cleaning Service helpt jouw woning of pand
              netjes en verzorgd te houden.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/offerte"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-500 px-7 py-4 font-bold text-white shadow-xl shadow-sky-500/20 transition hover:-translate-y-0.5 hover:bg-sky-400"
              >
                Vraag een gratis offerte aan
                <ArrowIcon />
              </Link>

              <a
                href="tel:+31619909034"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 py-4 font-bold text-white transition hover:border-white/40 hover:bg-white/10"
              >
                Bel +31 6 19909034
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur-sm">
              <div className="rounded-[1.5rem] bg-white p-7 text-slate-900 sm:p-9">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-sky-600">
                  Onze diensten
                </p>

                <div className="mt-6 grid gap-4">
                  {services.map((service) => (
                    <div
                      key={service.title}
                      className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
                        <ServiceIcon name={service.icon} />
                      </div>

                      <div>
                        <p className="font-bold text-slate-950">
                          {service.title}
                        </p>
                        <p className="text-sm text-slate-500">
                          Voor woningen en bedrijfspanden
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-sky-600">
              Alles netjes geregeld
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Reiniging met aandacht voor ieder detail
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-slate-600">
              Buitenoppervlakken krijgen dagelijks te maken met regen, stof,
              bladeren, uitlaatgassen en groene aanslag. Regelmatige reiniging
              helpt om jouw woning of bedrijfspand fris en verzorgd te houden.
              Wij werken zorgvuldig, maken duidelijke afspraken en leveren
              werkzaamheden waar je op kunt vertrouwen.
            </p>
          </div>
        </div>
      </section>

      {/* Diensten */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-sky-600">
              Wat wij doen
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
              Onze schoonmaakdiensten
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Kies één losse dienst of combineer meerdere werkzaamheden in één
              afspraak.
            </p>
          </div>

          <div className="mt-14 grid gap-7 lg:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.title}
                className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-9"
              >
                <div className="absolute right-6 top-5 text-6xl font-black text-slate-100">
                  {service.number}
                </div>

                <div className="relative">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-100 text-sky-700 transition group-hover:bg-sky-600 group-hover:text-white">
                    <ServiceIcon name={service.icon} />
                  </div>

                  <h3 className="mt-7 text-2xl font-black tracking-tight text-slate-950">
                    {service.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {service.description}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {service.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex gap-3 text-sm font-semibold text-slate-700"
                      >
                        <CheckIcon />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/offerte"
                    className="mt-8 inline-flex items-center gap-2 font-bold text-sky-700 transition hover:gap-3 hover:text-sky-900"
                  >
                    Offerte voor deze dienst
                    <ArrowIcon />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Werkwijze */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="lg:sticky lg:top-32">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-sky-600">
                Onze werkwijze
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Van aanvraag tot een schoon resultaat
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                Geen ingewikkeld proces, maar snel contact en duidelijke
                afspraken.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 font-bold text-white transition hover:-translate-y-0.5 hover:bg-sky-700"
              >
                Neem contact op
                <ArrowIcon />
              </Link>
            </div>

            <div className="space-y-5">
              {[
                {
                  step: "1",
                  title: "Neem contact op",
                  text: "Vertel ons welke werkzaamheden je wilt laten uitvoeren en op welk adres.",
                },
                {
                  step: "2",
                  title: "Je ontvangt een voorstel",
                  text: "We bespreken de situatie en maken een duidelijke prijsafspraak voor de werkzaamheden.",
                },
                {
                  step: "3",
                  title: "We plannen een afspraak",
                  text: "Samen kiezen we een geschikt moment waarop de werkzaamheden kunnen worden uitgevoerd.",
                },
                {
                  step: "4",
                  title: "Alles wordt netjes uitgevoerd",
                  text: "We voeren de afgesproken werkzaamheden zorgvuldig uit en laten de omgeving netjes achter.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex gap-5 rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-7"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sky-600 text-lg font-black text-white">
                    {item.step}
                  </div>

                  <div>
                    <h3 className="text-lg font-black text-slate-950">
                      {item.title}
                    </h3>
                    <p className="mt-2 leading-7 text-slate-600">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Voordelen */}
      <section className="bg-sky-950 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-sky-300">
              Waarom Simple Cleaning Service?
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
              Een betrouwbare keuze voor jouw woning of pand
            </h2>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {advantages.map((advantage, index) => (
              <article
                key={advantage.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-400 font-black text-sky-950">
                  {index + 1}
                </div>

                <h3 className="mt-6 text-xl font-black">{advantage.title}</h3>

                <p className="mt-3 leading-7 text-slate-300">
                  {advantage.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Veelgestelde vragen */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-sky-600">
              Veelgestelde vragen
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Goed om te weten
            </h2>
          </div>

          <div className="mt-12 divide-y divide-slate-200 rounded-[2rem] border border-slate-200 bg-slate-50 px-6 sm:px-9">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-black text-slate-950">
                  <span>{faq.question}</span>

                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-xl text-sky-700 shadow-sm transition group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="max-w-3xl pt-4 leading-7 text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 px-6 py-20 sm:py-24 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-sky-600 px-7 py-14 text-white shadow-2xl shadow-sky-600/20 sm:px-12 lg:px-16 lg:py-16">
          <div className="absolute -right-20 -top-28 h-72 w-72 rounded-full border-[40px] border-white/10" />
          <div className="absolute -bottom-28 right-40 h-64 w-64 rounded-full border-[35px] border-white/10" />

          <div className="relative grid gap-9 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-sky-100">
                Klaar voor een schoon resultaat?
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
                Vraag vrijblijvend een offerte aan
              </h2>

              <p className="mt-5 text-lg leading-8 text-sky-50">
                Vertel ons welke werkzaamheden je wilt laten uitvoeren. We
                nemen zo snel mogelijk contact met je op.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href="/offerte"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-black text-sky-700 shadow-lg transition hover:-translate-y-0.5 hover:bg-sky-50"
              >
                Offerte aanvragen
                <ArrowIcon />
              </Link>

              <a
                href="tel:+31619909034"
                className="inline-flex items-center justify-center rounded-full border border-white/40 px-7 py-4 font-bold text-white transition hover:bg-white/10"
              >
                Direct bellen
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}