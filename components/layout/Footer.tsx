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
            Specialist in glasbewassing en het reinigen van zonnepanelen,
            dakgoten en boeidelen.
          </p>

          <p className="mt-4 text-sm font-semibold text-sky-400">
            Helder, fris en streeploos!
          </p>

          <div className="mt-6 inline-flex rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-400">
            Werkgebied: Borne en omgeving
          </div>
        </div>

        <div>
          <h2 className="font-black text-white">Navigatie</h2>

          <nav className="mt-5 flex flex-col gap-3 text-sm">
            <Link href="/" className="transition hover:text-sky-400">
              Home
            </Link>

            <Link href="/diensten" className="transition hover:text-sky-400">
              Diensten
            </Link>

            <Link href="/#tarieven" className="transition hover:text-sky-400">
              Tarieven
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

          <div className="mt-7 space-y-2 text-sm text-slate-400">
            <p>KvK: 82784329</p>
            <p>BTW: NL003731152B38</p>
          </div>
        </div>

        <div>
          <h2 className="font-black text-white">Juridisch</h2>

          <nav className="mt-5 flex flex-col gap-3 text-sm">
            <Link
              href="/algemene-voorwaarden"
              className="transition hover:text-sky-400"
            >
              Algemene voorwaarden
            </Link>

            <Link href="/privacy" className="transition hover:text-sky-400">
              Privacyverklaring
            </Link>

            <Link href="/cookies" className="transition hover:text-sky-400">
              Cookieverklaring
            </Link>
          </nav>

          <Link
            href="/offerte"
            className="mt-7 inline-flex rounded-full bg-sky-500 px-5 py-3 text-sm font-black text-white transition hover:bg-sky-400"
          >
            Gratis offerte
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>
            © {new Date().getFullYear()} Simple Cleaning Service. Alle rechten
            voorbehouden.
          </p>

          <p>Website: scs.care</p>
        </div>
      </div>
    </footer>
  );
}