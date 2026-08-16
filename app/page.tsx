import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Pricing from "../components/home/Pricing";

export const metadata: Metadata = {
  title: "Simple Cleaning Service | Glasbewassing en buitenreiniging",
  description:
    "Simple Cleaning Service uit Borne voor glasbewassing en het reinigen van zonnepanelen, dakgoten en boeidelen.",
};

const values = [
  {
    number: "01",
    title: "Betrouwbaar",
    description:
      "We komen onze afspraken na en houden je duidelijk op de hoogte van de planning en werkzaamheden.",
  },
  {
    number: "02",
    title: "Zorgvuldig",
    description:
      "We behandelen jouw woning, bedrijfspand en omgeving met aandacht en laten alles netjes achter.",
  },
  {
    number: "03",
    title: "Persoonlijk",
    description:
      "Je hebt direct contact en krijgt een duidelijk voorstel dat aansluit bij jouw situatie.",
  },
  {
    number: "04",
    title: "Professioneel",
    description:
      "We werken met geschikte materialen en kiezen voor een veilige en nette uitvoering.",
  },
];

const services = [
  "Glazen wassen",
  "Zonnepanelen reinigen",
  "Dakgoten schoonmaken",
  "Boeidelen reinigen",
];

const workSteps = [
  {
    step: "1",
    title: "Je neemt contact op",
    description:
      "Vertel ons welke werkzaamheden je wilt laten uitvoeren en waar de locatie zich bevindt.",
  },
  {
    step: "2",
    title: "We bespreken de situatie",
    description:
      "We bekijken wat nodig is en bespreken jouw wensen, de planning en eventuele bijzonderheden.",
  },
  {
    step: "3",
    title: "Je ontvangt een duidelijk voorstel",
    description:
      "Vooraf maken we heldere afspraken over de werkzaamheden en de bijbehorende kosten.",
  },
  {
    step: "4",
    title: "We voeren het werk zorgvuldig uit",
    description:
      "Op het afgesproken moment voeren we de werkzaamheden netjes en professioneel uit.",
  },
];

const areas = [
  "Borne",
  "Hengelo",
  "Almelo",
  "Enschede",
  "Oldenzaal",
  "Delden",
  "Tubbergen",
  "Omgeving Twente",
];

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

function CheckIcon() {
  return (
    <svg
      className="h-5 w-5 shrink-0 text-sky-600"
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

function SparkleIcon() {
  return (
    <svg
      className="h-8 w-8"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      aria-hidden="true"
    >
      <path d="M12 2c.7 4.8 3.2 7.3 8 8-4.8.7-7.3 3.2-8 8-.7-4.8-3.2-7.3-8-8 4.8-.7 7.3-3.2 8-8Z" />
      <path d="M19 16c.3 2.1 1.4 3.2 3.5 3.5-2.1.3-3.2 1.4-3.5 3.5-.3-2.1-1.4-3.2-3.5-3.5 2.1-.3 3.2-1.4 3.5-3.5Z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.32),transparent_38%),radial-gradient(circle_at_bottom_left,rgba(2,132,199,0.18),transparent_35%)]" />

        <div className="absolute -right-24 top-10 h-72 w-72 rounded-full border border-white/10" />
        <div className="absolute -right-10 top-28 h-44 w-44 rounded-full border border-white/10" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-14 sm:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8 lg:py-20">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-sm font-bold text-sky-200">
              <span className="h-2 w-2 rounded-full bg-sky-400" />
              Persoonlijk en professioneel
            </div>

            <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Schoonmaakservice met{" "}
              <span className="text-sky-400">aandacht voor kwaliteit</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Simple Cleaning Service is gevestigd in Borne en helpt
              particulieren en bedrijven met professionele reiniging van ramen,
              zonnepanelen, dakgoten en boeidelen.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/offerte"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-500 px-7 py-4 font-bold text-white shadow-xl shadow-sky-500/20 transition hover:-translate-y-0.5 hover:bg-sky-400"
              >
                Vraag een offerte aan
                <ArrowIcon />
              </Link>

              <Link
                href="/diensten"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 py-4 font-bold text-white transition hover:border-white/40 hover:bg-white/10"
              >
                Bekijk onze diensten
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur-sm">
              <div className="rounded-[1.5rem] bg-white p-8 text-slate-900 sm:p-10">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
                  <SparkleIcon />
                </div>

                <p className="mt-7 text-sm font-black uppercase tracking-[0.2em] text-sky-600">
                  Simple Cleaning Service
                </p>

                <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-950">
                  Duidelijke afspraken en een verzorgd resultaat
                </h2>

                <p className="mt-4 leading-7 text-slate-600">
                  We geloven dat goede service begint met persoonlijk contact.
                  Daarom bespreken we vooraf precies wat nodig is en zorgen we
                  voor een nette uitvoering.
                </p>

                <div className="mt-7 space-y-4">
                  {[
                    "Persoonlijk contact",
                    "Heldere prijsafspraken",
                    "Zorgvuldige uitvoering",
                    "Actief in Borne en omgeving",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 font-semibold text-slate-700"
                    >
                      <CheckIcon />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introductie */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-sky-600">
              Wie wij zijn
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Een lokale schoonmaakservice waarop je kunt rekenen
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-slate-600">
            <p>
              Simple Cleaning Service is een schoonmaakbedrijf uit Borne. Wij
              richten ons op professionele buitenreiniging voor woningen en
              kleinere bedrijfspanden.
            </p>

            <p>
              Onze aanpak is eenvoudig: goed luisteren, duidelijke afspraken
              maken en de werkzaamheden zorgvuldig uitvoeren. Je weet vooraf
              waar je aan toe bent en hebt direct contact wanneer je vragen
              hebt.
            </p>
          </div>
        </div>
      </section>

      {/* Verhaal */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div className="relative min-h-[430px] overflow-hidden rounded-[2.5rem] bg-sky-950 p-8 text-white shadow-xl sm:p-10">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border-[35px] border-white/10" />
            <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full border-[40px] border-sky-400/20" />

            <div className="relative flex h-full min-h-[350px] flex-col justify-between">
              <div>
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white p-1 shadow-md">
                  <Image
                    src="/logo.png"
                    alt="Logo van Simple Cleaning Service"
                    width={80}
                    height={80}
                    className="h-full w-full object-contain"
                  />
                </div>

                <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-sky-300">
                  Gevestigd in Borne
                </p>

                <h3 className="mt-4 max-w-md text-3xl font-black leading-tight">
                  Een nette uitstraling begint bij goed onderhoud
                </h3>
              </div>

              <div className="mt-12 rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-sm">
                <p className="leading-7 text-slate-200">
                  Regen, stof, groene aanslag en bladeren kunnen zich snel
                  ophopen. Met regelmatig onderhoud blijft jouw woning of pand
                  verzorgd en voorkom je onnodige vervuiling.
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-sky-600">
              Onze aanpak
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Geen ingewikkeld verhaal, maar gewoon goed werk
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              We vinden het belangrijk dat klanten gemakkelijk contact kunnen
              opnemen en snel duidelijkheid krijgen. Daarom houden we onze
              werkwijze overzichtelijk en communiceren we helder.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {services.map((service) => (
                <div
                  key={service}
                  className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 font-bold text-slate-800 shadow-sm"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-sky-100">
                    <CheckIcon />
                  </div>
                  <span>{service}</span>
                </div>
              ))}
            </div>

            <Link
              href="/diensten"
              className="mt-8 inline-flex items-center gap-2 font-black text-sky-700 transition hover:gap-3 hover:text-sky-900"
            >
              Bekijk alle diensten
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* Tarieven */}
      <Pricing />

      {/* Kernwaarden */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-sky-600">
              Onze kernwaarden
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
              Zo willen wij iedere klant helpen
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Goede dienstverlening draait niet alleen om het eindresultaat,
              maar ook om de manier waarop het werk wordt uitgevoerd.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <article
                key={value.title}
                className="group rounded-[2rem] border border-slate-200 bg-slate-50 p-7 transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:bg-white hover:shadow-xl"
              >
                <p className="text-sm font-black tracking-[0.2em] text-sky-600">
                  {value.number}
                </p>

                <h3 className="mt-6 text-xl font-black text-slate-950">
                  {value.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Werkwijze */}
      <section className="bg-sky-950 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-sky-300">
                Van aanvraag tot uitvoering
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
                Een duidelijke werkwijze zonder verrassingen
              </h2>

              <p className="mt-6 max-w-xl leading-8 text-slate-300">
                We houden het proces overzichtelijk, zodat je precies weet wat
                je kunt verwachten.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-sky-500 px-6 py-3.5 font-bold text-white transition hover:-translate-y-0.5 hover:bg-sky-400"
              >
                Neem contact op
                <ArrowIcon />
              </Link>
            </div>

            <div className="space-y-5">
              {workSteps.map((item) => (
                <article
                  key={item.step}
                  className="flex gap-5 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-7"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sky-400 text-lg font-black text-sky-950">
                    {item.step}
                  </div>

                  <div>
                    <h3 className="text-xl font-black">{item.title}</h3>

                    <p className="mt-2 leading-7 text-slate-300">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Werkgebied */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
          <div>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
              <LocationIcon />
            </div>

            <p className="mt-7 text-sm font-black uppercase tracking-[0.22em] text-sky-600">
              Werkgebied
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Actief in Borne en omgeving
            </h2>

            <p className="mt-5 max-w-xl leading-8 text-slate-600">
              Simple Cleaning Service is gevestigd in Borne en werkt
              voornamelijk in Twente. Staat jouw woonplaats er niet tussen?
              Neem dan gerust contact op om de mogelijkheden te bespreken.
            </p>

            <a
              href="tel:+31619909034"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 font-bold text-white transition hover:-translate-y-0.5 hover:bg-sky-700"
            >
              Vraag naar de mogelijkheden
              <ArrowIcon />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {areas.map((area) => (
              <div
                key={area}
                className="flex min-h-24 items-center justify-center rounded-3xl border border-slate-200 bg-white px-4 text-center font-black text-slate-800 shadow-sm"
              >
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white px-6 py-20 sm:py-24 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-sky-600 px-7 py-14 text-white shadow-2xl shadow-sky-600/20 sm:px-12 lg:px-16 lg:py-16">
          <div className="absolute -right-20 -top-28 h-72 w-72 rounded-full border-[40px] border-white/10" />
          <div className="absolute -bottom-28 right-40 h-64 w-64 rounded-full border-[35px] border-white/10" />

          <div className="relative grid gap-9 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-sky-100">
                Kennismaken?
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
                Vertel ons waarmee we je kunnen helpen
              </h2>

              <p className="mt-5 text-lg leading-8 text-sky-50">
                Neem vrijblijvend contact op voor meer informatie of vraag
                direct een offerte aan.
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