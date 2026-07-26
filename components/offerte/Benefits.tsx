import {
  BadgeCheck,
  Clock3,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const benefits = [
  {
    title: "Vrijblijvende offerte",
    description:
      "Vraag eenvoudig een offerte aan zonder verplichtingen of verborgen kosten.",
    icon: ShieldCheck,
  },
  {
    title: "Snelle reactie",
    description:
      "Je ontvangt zo snel mogelijk een persoonlijke reactie op jouw aanvraag.",
    icon: Clock3,
  },
  {
    title: "Professioneel resultaat",
    description:
      "Wij werken zorgvuldig, veilig en met aandacht voor een schoon eindresultaat.",
    icon: Sparkles,
  },
];

export default function Benefits() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-800">
            <BadgeCheck className="h-4 w-4" aria-hidden="true" />
            Waarom Simple Cleaning Service?
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Schoon, betrouwbaar en zonder gedoe
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            Persoonlijke service voor woningen en bedrijven in Borne en
            omgeving.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <article
                key={benefit.title}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {benefit.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {benefit.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}