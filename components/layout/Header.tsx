import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex min-h-36 max-w-7xl items-center gap-8 px-4 py-3 sm:px-6">
        <a
          href="#home"
          aria-label="Ga naar de homepage"
          className="flex shrink-0 items-center"
        >
          <Image
            src="/logo.png"
            alt="Logo van Simple Cleaning Service"
            width={320}
            height={320}
            priority
            className="h-32 w-32 object-contain sm:h-36 sm:w-36 lg:h-44 lg:w-44"
          />
        </a>

        <div className="ml-auto flex items-center gap-8">
          <nav
            aria-label="Hoofdnavigatie"
            className="hidden items-center gap-7 lg:flex"
          >
            <a
              href="#home"
              className="font-semibold text-blue-700 transition hover:text-blue-900"
            >
              Home
            </a>

            <a
              href="#diensten"
              className="font-medium text-slate-700 transition hover:text-blue-700"
            >
              Diensten
            </a>

            <a
              href="#waarom"
              className="font-medium text-slate-700 transition hover:text-blue-700"
            >
              Over ons
            </a>

            <a
              href="#werkwijze"
              className="font-medium text-slate-700 transition hover:text-blue-700"
            >
              Werkwijze
            </a>

            <a
              href="#offerte"
              className="font-medium text-slate-700 transition hover:text-blue-700"
            >
              Offerte
            </a>

            <a
              href="#contact"
              className="font-medium text-slate-700 transition hover:text-blue-700"
            >
              Contact
            </a>
          </nav>

          <a
            href="#offerte"
            className="shrink-0 whitespace-nowrap rounded-2xl bg-blue-600 px-5 py-4 text-sm font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg sm:px-7"
          >
            Gratis offerte
          </a>
        </div>
      </div>
    </header>
  );
}