import Image from "next/image";
import Link from "next/link";

const prices = [
  {
    title: "Tussenwoning",
    price: "€35",
    image: "/images/tussenwoning.png",
  },
  {
    title: "Hoekwoning",
    price: "€45",
    image: "/images/hoekwoning.png",
  },
  {
    title: "Vrijstaande woning",
    price: "€55",
    image: "/images/vrijstaande-woning.png",
  },
];

function HouseBadge() {
  return (
    <div className="absolute -bottom-9 left-1/2 flex h-[4.5rem] w-[4.5rem] -translate-x-1/2 items-center justify-center rounded-full border-4 border-white bg-blue-700 text-white shadow-lg">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-9 w-9"
        aria-hidden="true"
      >
        <path d="m3 11 9-7 9 7" />
        <path d="M5 10v10h14V10" />
        <path d="M9 20v-6h6v6" />
      </svg>
    </div>
  );
}

export default function Pricing() {
  return (
    <section id="tarieven" className="bg-sky-50/70 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="hidden h-px w-28 bg-blue-600 sm:block" />
            <p className="text-sm font-black uppercase tracking-[0.22em] text-blue-700">
              Prijzen
            </p>
            <span className="text-blue-700">✦</span>
            <span className="hidden h-px w-28 bg-blue-600 sm:block" />
          </div>

          <h2 className="mt-3 text-4xl font-black tracking-tight text-blue-950 sm:text-5xl">
            Onze tarieven
          </h2>

          <p className="mt-3 text-lg font-medium text-slate-700">
            Transparant, eerlijk en scherp geprijsd
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {prices.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-[1.75rem] border border-blue-600 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="bg-gradient-to-r from-blue-700 to-blue-600 px-5 py-4 text-center text-white">
                <h3 className="text-xl font-black uppercase tracking-wide">
                  {item.title}
                </h3>
              </div>

              <div className="relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={900}
                  height={580}
                  className="h-52 w-full object-cover"
                />
                <HouseBadge />
              </div>

              <div className="px-6 pb-7 pt-14 text-center">
                <div className="flex items-center justify-center gap-3">
                  <span className="rounded-lg bg-blue-700 px-3 py-1.5 text-lg font-black text-white">
                    v.a.
                  </span>
                  <span className="text-6xl font-black tracking-tight text-blue-950">
                    {item.price}
                  </span>
                </div>

                <p className="mt-1 text-lg font-black uppercase tracking-wide text-blue-700">
                  per beurt
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-8 max-w-5xl rounded-2xl bg-white/70 px-6 py-4 text-center text-sm leading-6 text-slate-700">
          <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full border-2 border-blue-700 font-black text-blue-700">
            i
          </span>
          De uiteindelijke prijs is afhankelijk van onder andere het aantal
          ramen, de bereikbaarheid en eventuele bijzonderheden.
        </div>

        <div className="mt-6 text-center">
          <Link
            href="/offerte"
            className="inline-flex items-center justify-center rounded-xl bg-blue-700 px-8 py-4 text-base font-black text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-800"
          >
            Vraag een vrijblijvende offerte aan
          </Link>
        </div>
      </div>
    </section>
  );
}
