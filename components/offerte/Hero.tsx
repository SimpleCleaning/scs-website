export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.35),transparent_38%),radial-gradient(circle_at_bottom_left,rgba(2,132,199,0.2),transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-sm font-bold text-sky-200">
            Vrijblijvende offerte
          </div>

        <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
  Vraag een offerte aan voor{" "}
  <span className="text-sky-400">glasbewassing in Borne</span>
</h1>

<p className="mt-6 text-lg leading-8 text-slate-300">
  Vraag vrijblijvend een prijsopgave aan voor glasbewassing en
  buitenreiniging in Borne en Twente. Geef aan of het gaat om ramen,
  zonnepanelen, dakgoten of boeidelen en wij nemen zo snel mogelijk
  contact met je op.
</p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
              <p className="text-3xl font-black text-sky-300">✓</p>
              <h3 className="mt-2 font-bold">Vrijblijvend</h3>
              <p className="mt-2 text-sm text-slate-300">
                Geen verplichtingen, alleen een duidelijke prijs.
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
              <p className="text-3xl font-black text-sky-300">⚡</p>
              <h3 className="mt-2 font-bold">Snelle reactie</h3>
              <p className="mt-2 text-sm text-slate-300">
                We reageren doorgaans binnen één werkdag.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}