export default function QuoteForm() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-black text-slate-900">
            Vraag vrijblijvend een offerte aan
          </h2>

          <p className="mt-4 text-slate-600">
            Vul onderstaand formulier in. Wij nemen zo snel mogelijk contact met
            je op.
          </p>
        </div>

        <form className="space-y-6 rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">

          <div className="grid gap-6 md:grid-cols-2">

            <div>
              <label className="mb-2 block font-semibold">
                Naam
              </label>

              <input
                type="text"
                className="w-full rounded-xl border p-3"
                placeholder="Jouw naam"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold">
                Telefoonnummer
              </label>

              <input
                type="tel"
                className="w-full rounded-xl border p-3"
                placeholder="06..."
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold">
                E-mailadres
              </label>

              <input
                type="email"
                className="w-full rounded-xl border p-3"
                placeholder="info@..."
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold">
                Plaats
              </label>

              <input
                type="text"
                className="w-full rounded-xl border p-3"
                placeholder="Borne"
              />
            </div>

          </div>

          <div>

            <label className="mb-3 block font-semibold">
              Gewenste werkzaamheden
            </label>

            <div className="grid gap-3 md:grid-cols-2">

              <label className="flex gap-3">
                <input type="checkbox" />
                Glazen wassen
              </label>

              <label className="flex gap-3">
                <input type="checkbox" />
                Zonnepanelen reinigen
              </label>

              <label className="flex gap-3">
                <input type="checkbox" />
                Dakgoten schoonmaken
              </label>

              <label className="flex gap-3">
                <input type="checkbox" />
                Boeidelen reinigen
              </label>

            </div>

          </div>

          <div>

            <label className="mb-2 block font-semibold">
              Opmerkingen
            </label>

            <textarea
              rows={6}
              className="w-full rounded-xl border p-3"
              placeholder="Omschrijf de werkzaamheden..."
            />

          </div>

          <button
            className="rounded-full bg-sky-600 px-8 py-4 font-bold text-white hover:bg-sky-700"
          >
            Offerte aanvragen
          </button>

        </form>
      </div>
    </section>
  );
}