export default function TopBar() {
  return (
    <div className="hidden bg-blue-950 text-white lg:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2.5 text-sm">
        <p className="font-medium">
          Streeploos schoon, elke keer opnieuw.
        </p>

        <div className="flex items-center gap-8 text-blue-50">
          <a
            href="tel:+31619909034"
            className="transition hover:text-white"
          >
            ☎ +31 6 19909034
          </a>

          <a
            href="mailto:info@scs.care"
            className="transition hover:text-white"
          >
            ✉ info@scs.care
          </a>

          <span>⌖ Borne, Overijssel</span>
        </div>
      </div>
    </div>
  );
}