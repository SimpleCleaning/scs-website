import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact | Simple Cleaning Service",
  description:
    "Neem contact op met Simple Cleaning Service uit Borne voor glasbewassing, zonnepanelenreiniging, dakgootreiniging en het reinigen van boeidelen.",
  alternates: {
    canonical: "/contact",
  },
};
const contactDetails = [
  {
    title: "Telefoon",
    value: "+31 6 19909034",
    description: "Bel ons voor vragen of een afspraak.",
    href: "tel:+31619909034",
    icon: "phone",
  },
  {
    title: "E-mail",
    value: "info@scs.care",
    description: "Stuur ons gerust een bericht.",
    href: "mailto:info@scs.care",
    icon: "email",
  },
  {
    title: "Vestigingsplaats",
    value: "Borne, Nederland",
    description: "Actief in Borne en omgeving.",
    href: null,
    icon: "location",
  },
];

const reasons = [
  "Een vraag over onze diensten",
  "Een prijsindicatie aanvragen",
  "Een afspraak laten inplannen",
  "Meerdere werkzaamheden combineren",
];

const faqs = [
  {
    question: "Voor welke werkzaamheden kan ik contact opnemen?",
    answer:
      "Je kunt contact opnemen voor glasbewassing, zonnepanelenreiniging, het schoonmaken van dakgoten en het reinigen van boeidelen.",
  },
  {
    question: "Kan ik meerdere diensten combineren?",
    answer:
      "Ja. Je kunt bijvoorbeeld glasbewassing combineren met het reinigen van zonnepanelen, dakgoten of boeidelen.",
  },
  {
    question: "Werken jullie ook buiten Borne?",
    answer:
      "Simple Cleaning Service is gevestigd in Borne en werkt ook in omliggende plaatsen. Neem contact op om te bespreken of jouw adres binnen ons werkgebied valt.",
  },
  {
    question: "Kan ik direct een offerte aanvragen?",
    answer:
      "Ja. Via de offertepagina kun je doorgeven welke werkzaamheden je wilt laten uitvoeren.",
  },
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

function ContactIcon({ name }: { name: string }) {
  const className = "h-7 w-7";

  if (name === "phone") {
    return (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden="true"
      >
        <path d="M6.6 3.5 9 8.2 6.8 10c1.4 3.1 3.9 5.6 7 7l1.8-2.2 4.8 2.4v3.1c0 .8-.6 1.4-1.4 1.5C10.5 22.3 1.7 13.5 2.2 5c.1-.8.7-1.4 1.5-1.4h2.9Z" />
      </svg>
    );
  }

  if (name === "email") {
    return (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden="true"
      >
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    );
  }

  return (
    <svg
      className={className}
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

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.35),transparent_38%),radial-gradient(circle_at_bottom_left,rgba(2,132,199,0.2),transparent_35%)]" />

        <div className="absolute -right-28 top-12 h-80 w-80 rounded-full border border-white/10" />
        <div className="absolute -right-10 top-32 h-48 w-48 rounded-full border border-white/10" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8 lg:py-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-sm font-bold text-sky-200">
              <span className="h-2 w-2 rounded-full bg-sky-400" />
              We helpen je graag
            </div>

            <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Neem contact op met{" "}
              <span className="text-sky-400">
                Simple Cleaning Service
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Heb je een vraag, wil je werkzaamheden combineren of een
              afspraak laten inplannen? Bel, mail of stuur ons een bericht via
              het contactformulier.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="tel:+31619909034"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-500 px-7 py-4 font-bold text-white shadow-xl shadow-sky-500/20 transition hover:-translate-y-0.5 hover:bg-sky-400"
              >
                Bel direct
                <ArrowIcon />
              </a>

              <a
                href="mailto:info@scs.care"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 py-4 font-bold text-white transition hover:border-white/40 hover:bg-white/10"
              >
                Stuur een e-mail
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur-sm">
            <div className="rounded-[1.5rem] bg-white p-7 text-slate-900 sm:p-9">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-sky-600">
                Direct contact
              </p>

              <div className="mt-7 space-y-5">
                {contactDetails.map((item) => {
                  const content = (
                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
                        <ContactIcon name={item.icon} />
                      </div>

                      <div>
                        <p className="text-sm font-bold text-slate-500">
                          {item.title}
                        </p>
                        <p className="mt-1 font-black text-slate-950">
                          {item.value}
                        </p>
                        <p className="mt-1 text-sm text-slate-500">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );

                  if (item.href) {
                    return (
                      <a
                        key={item.title}
                        href={item.href}
                        className="block rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-sky-200 hover:bg-sky-50"
                      >
                        {content}
                      </a>
                    );
                  }

                  return (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                    >
                      {content}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contactformulier */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-sky-600">
              Stuur een bericht
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Waarmee kunnen we je helpen?
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Vul het formulier zo volledig mogelijk in. Wanneer je op
              verzenden klikt, wordt je e-mailprogramma geopend met jouw
              bericht voor Simple Cleaning Service.
            </p>

            <div className="mt-8 space-y-4">
              {reasons.map((reason) => (
                <div
                  key={reason}
                  className="flex items-center gap-3 font-semibold text-slate-700"
                >
                  <CheckIcon />
                  <span>{reason}</span>
                </div>
              ))}
            </div>

            <div className="mt-9 rounded-3xl bg-sky-950 p-6 text-white">
              <p className="font-black">Liever direct contact?</p>

              <p className="mt-2 leading-7 text-slate-300">
                Bel ons via{" "}
                <a
                  href="tel:+31619909034"
                  className="font-bold text-sky-300 hover:text-sky-200"
                >
                  +31 6 19909034
                </a>{" "}
                of mail naar{" "}
                <a
                  href="mailto:info@scs.care"
                  className="font-bold text-sky-300 hover:text-sky-200"
                >
                  info@scs.care
                </a>
                .
              </p>
            </div>
          </div>

          <form
            action="mailto:info@scs.care"
            method="post"
            encType="text/plain"
            className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/50 sm:p-9"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="naam"
                  className="mb-2 block text-sm font-black text-slate-800"
                >
                  Naam *
                </label>
                <input
                  id="naam"
                  name="Naam"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Jouw naam"
                  className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                />
              </div>

              <div>
                <label
                  htmlFor="telefoon"
                  className="mb-2 block text-sm font-black text-slate-800"
                >
                  Telefoonnummer
                </label>
                <input
                  id="telefoon"
                  name="Telefoonnummer"
                  type="tel"
                  autoComplete="tel"
                  placeholder="06 12345678"
                  className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-black text-slate-800"
                >
                  E-mailadres *
                </label>
                <input
                  id="email"
                  name="E-mailadres"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="naam@voorbeeld.nl"
                  className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                />
              </div>

              <div>
                <label
                  htmlFor="woonplaats"
                  className="mb-2 block text-sm font-black text-slate-800"
                >
                  Woonplaats
                </label>
                <input
                  id="woonplaats"
                  name="Woonplaats"
                  type="text"
                  autoComplete="address-level2"
                  placeholder="Bijvoorbeeld Borne"
                  className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                />
              </div>
            </div>

            <div className="mt-6">
              <label
                htmlFor="onderwerp"
                className="mb-2 block text-sm font-black text-slate-800"
              >
                Onderwerp *
              </label>
              <select
                id="onderwerp"
                name="Onderwerp"
                required
                defaultValue=""
                className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3.5 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
              >
                <option value="" disabled>
                  Kies een onderwerp
                </option>
                <option value="Glazen wassen">Glazen wassen</option>
                <option value="Zonnepanelen reinigen">
                  Zonnepanelen reinigen
                </option>
                <option value="Dakgoten schoonmaken">
                  Dakgoten schoonmaken
                </option>
                <option value="Boeidelen reinigen">
                  Boeidelen reinigen
                </option>
                <option value="Meerdere diensten">
                  Meerdere diensten
                </option>
                <option value="Andere vraag">Andere vraag</option>
              </select>
            </div>

            <div className="mt-6">
              <label
                htmlFor="bericht"
                className="mb-2 block text-sm font-black text-slate-800"
              >
                Bericht *
              </label>
              <textarea
                id="bericht"
                name="Bericht"
                required
                rows={7}
                placeholder="Vertel kort waarmee we je kunnen helpen..."
                className="w-full resize-y rounded-2xl border border-slate-300 bg-white px-4 py-3.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
              />
            </div>

            <label className="mt-6 flex cursor-pointer items-start gap-3">
              <input
                type="checkbox"
                required
                className="mt-1 h-4 w-4 rounded border-slate-300 text-sky-600 focus:ring-sky-500"
              />

              <span className="text-sm leading-6 text-slate-600">
                Ik ga ermee akkoord dat mijn gegevens worden gebruikt om
                contact met mij op te nemen. *
              </span>
            </label>

            <button
              type="submit"
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-sky-600 px-7 py-4 font-black text-white shadow-lg shadow-sky-600/20 transition hover:-translate-y-0.5 hover:bg-sky-700 sm:w-auto"
            >
              Bericht verzenden
              <ArrowIcon />
            </button>
          </form>
        </div>
      </section>

      {/* Werkgebied */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-sky-950 p-8 text-white sm:p-10">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border-[40px] border-white/10" />
            <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full border-[35px] border-sky-400/20" />

            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-500">
                <ContactIcon name="location" />
              </div>

              <p className="mt-7 text-sm font-black uppercase tracking-[0.22em] text-sky-300">
                Ons werkgebied
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
                Gevestigd in Borne en actief in de regio
              </h2>

              <p className="mt-5 max-w-xl leading-8 text-slate-300">
                We voeren werkzaamheden uit in Borne en verschillende
                omliggende plaatsen in Twente. Neem contact op om te bespreken
                of we ook op jouw adres kunnen langskomen.
              </p>

              <a
                href="tel:+31619909034"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-black text-sky-700 transition hover:-translate-y-0.5 hover:bg-sky-50"
              >
                Vraag naar de mogelijkheden
                <ArrowIcon />
              </a>
            </div>
          </div>

          <div className="rounded-[2.5rem] border border-slate-200 bg-slate-50 p-8 sm:p-10">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-sky-600">
              Contactgegevens
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950">
              Simple Cleaning Service
            </h2>

            <div className="mt-8 divide-y divide-slate-200">
              <div className="flex items-center justify-between gap-5 py-5">
                <span className="font-semibold text-slate-500">Telefoon</span>
                <a
                  href="tel:+31619909034"
                  className="text-right font-black text-slate-950 hover:text-sky-600"
                >
                  +31 6 19909034
                </a>
              </div>

              <div className="flex items-center justify-between gap-5 py-5">
                <span className="font-semibold text-slate-500">E-mail</span>
                <a
                  href="mailto:info@scs.care"
                  className="text-right font-black text-slate-950 hover:text-sky-600"
                >
                  info@scs.care
                </a>
              </div>

              <div className="flex items-center justify-between gap-5 py-5">
                <span className="font-semibold text-slate-500">
                  Vestigingsplaats
                </span>
                <span className="text-right font-black text-slate-950">
                  Borne
                </span>
              </div>

              <div className="flex items-center justify-between gap-5 py-5">
                <span className="font-semibold text-slate-500">KvK</span>
                <span className="text-right font-black text-slate-950">
                  82784329
                </span>
              </div>

              <div className="flex items-center justify-between gap-5 py-5">
                <span className="font-semibold text-slate-500">BTW</span>
                <span className="text-right font-black text-slate-950">
                  NL003731152B38
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-sky-600">
              Veelgestelde vragen
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Goed om te weten
            </h2>
          </div>

          <div className="mt-12 divide-y divide-slate-200 rounded-[2rem] border border-slate-200 bg-white px-6 sm:px-9">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-black text-slate-950">
                  <span>{faq.question}</span>

                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xl text-sky-700 transition group-open:rotate-45">
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
      <section className="bg-white px-6 py-20 sm:py-24 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-sky-600 px-7 py-14 text-white shadow-2xl shadow-sky-600/20 sm:px-12 lg:px-16 lg:py-16">
          <div className="absolute -right-20 -top-28 h-72 w-72 rounded-full border-[40px] border-white/10" />
          <div className="absolute -bottom-28 right-40 h-64 w-64 rounded-full border-[35px] border-white/10" />

          <div className="relative grid gap-9 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-sky-100">
                Een prijsvoorstel ontvangen?
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
                Vraag vrijblijvend een offerte aan
              </h2>

              <p className="mt-5 text-lg leading-8 text-sky-50">
                Geef door welke werkzaamheden je wilt laten uitvoeren. We
                nemen vervolgens contact met je op.
              </p>
            </div>

            <Link
              href="/offerte"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-black text-sky-700 shadow-lg transition hover:-translate-y-0.5 hover:bg-sky-50"
            >
              Offerte aanvragen
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}