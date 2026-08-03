import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="sm:col-span-2 lg:col-span-1">
          <Link href="/" className="inline-flex items-center">
            <span className="text-xl font-black text-white">
              Simple Cleaning Service
            </span>
          </Link>

          <p className="mt-5 max-w-sm leading-7 text-slate-400">
  Specialist in glasbewassing en het reinigen van zonnepanelen, dakgoten en boeidelen.
</p>

          <p className="mt-4 text-sm font-semibold text-sky-400">
            Helder, fris en streeploos!
          </p>
        </div>

        <div>
          <h2 className="font-black text-white">Navigatie</h2>

          <nav className="mt-5 flex flex-col gap-3 text-sm">
            <Link href="/" className="transition hover:text-sky-400">
              Home
            </Link>

            <Link
              href="/diensten"
              className="transition hover:text-sky-400"
            >
              Diensten
            </Link>

            <Link
              href="/over-ons"
              className="transition hover:text-sky-400"
            >
              Over ons
            </Link>

            <Link
              href="/#werkwijze"
              className="transition hover:text-sky-400"
            >
              Werkwijze
            </Link>

            <Link href="/offerte" className="transition hover:text-sky-400">
              Offerte
            </Link>

            <Link href="/contact" className="transition hover:text-sky-400">
              Contact
            </Link>
          </nav>
        </div>

        <div>
          <h2 className="font-black text-white">Contact</h2>

          <div className="mt-5 flex flex-col gap-3 text-sm">
            <a
              href="tel:+31619909034"
              className="transition hover:text-sky-400"
            >
              +31 6 19909034
            </a>

            <a
              href="mailto:info@scs.care"
              className="transition hover:text-sky-400"
            >
              info@scs.care
            </a>

            <p>Borne, Overijssel</p>
          </div>
        </div>

        <div>
          <h2 className="font-black text-white">Bedrijfsgegevens</h2>

          <div className="mt-5 space-y-3 text-sm">
            <p>KvK: 82784329</p>
            <p>BTW: NL003731152B38</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>
            © {new Date().getFullYear()} Simple Cleaning Service. Alle rechten
            voorbehouden.
          </p>

          <div className="flex flex-wrap gap-5">
            <Link href="/privacy" className="transition hover:text-white">
              Privacy
            </Link>

            <Link
              href="/algemene-voorwaarden"
              className="transition hover:text-white"
            >
              Algemene voorwaarden
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}