import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#home" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Logo van Simple Cleaning Service"
            width={66}
            height={66}
            priority
            className="h-14 w-14 object-contain sm:h-16 sm:w-16"
          />

          <div>
            <p className="text-lg font-extrabold tracking-tight text-blue-950 sm:text-2xl">
              Simple
            </p>

            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-blue-600 sm:text-xs">
              Cleaning Service
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          <a
            href="#home"
            className="font-semibold text-blue-700"
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
          className="rounded-xl bg-blue-600 px-4 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-blue-700 sm:px-5"
        >
          Gratis offerte
        </a>
      </div>
    </header>
  );
}