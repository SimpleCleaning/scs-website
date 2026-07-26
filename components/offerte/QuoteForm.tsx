"use client";

import {
  Building2,
  Camera,
  Check,
  Home,
  Loader2,
  Mail,
  MapPin,
  MessageSquareText,
  Phone,
  Send,
  User,
} from "lucide-react";
import { FormEvent, useState } from "react";

const services = [
  {
    value: "Glazen wassen",
    title: "Glazen wassen",
    description: "Voor woningen en bedrijfspanden.",
  },
  {
    value: "Zonnepanelen reinigen",
    title: "Zonnepanelen reinigen",
    description: "Veilig en zorgvuldig gereinigd.",
  },
  {
    value: "Dakgoten schoonmaken",
    title: "Dakgoten schoonmaken",
    description: "Bladeren, vuil en verstoppingen verwijderen.",
  },
  {
    value: "Boeidelen reinigen",
    title: "Boeidelen reinigen",
    description: "Voor een verzorgde uitstraling van het pand.",
  },
];

type ApiResponse = {
  success?: boolean;
  message?: string;
};

export default function QuoteForm() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [customerType, setCustomerType] = useState("Particulier");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<
    "success" | "error" | ""
  >("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function clearMessage() {
    setMessage("");
    setMessageType("");
  }

  function toggleService(service: string) {
    setSelectedServices((currentServices) =>
      currentServices.includes(service)
        ? currentServices.filter((item) => item !== service)
        : [...currentServices, service],
    );

    clearMessage();
  }

  function handleCustomerTypeChange(type: string) {
    setCustomerType(type);
    clearMessage();
  }

  function handleFiles(files: FileList | null) {
    clearMessage();

    if (!files) {
      setSelectedFiles([]);
      return;
    }

    const imageFiles = Array.from(files);

    if (imageFiles.length > 3) {
      setMessage("Je kunt maximaal 3 foto's uploaden.");
      setMessageType("error");
      return;
    }

    const allowed = ["image/jpeg","image/png","image/webp"];

    for (const file of imageFiles) {
      if (!allowed.includes(file.type)) {
        setMessage("Alleen JPG, PNG en WEBP zijn toegestaan.");
        setMessageType("error");
        return;
      }

      if (file.size > 5 * 1024 * 1024) {
        setMessage(`'${file.name}' is groter dan 5 MB.`);
        setMessageType("error");
        return;
      }
    }

    setSelectedFiles(imageFiles);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    clearMessage();

    if (selectedServices.length === 0) {
      setMessage("Selecteer minimaal één gewenste werkzaamheid.");
      setMessageType("error");
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      customerType,
      company:
        customerType === "Zakelijk"
          ? String(formData.get("company") ?? "").trim()
          : "",
      address: String(formData.get("address") ?? "").trim(),
      postalCode: String(formData.get("postalCode") ?? "").trim(),
      city: String(formData.get("city") ?? "").trim(),
      services: selectedServices,
      additionalInformation: String(
        formData.get("additionalInformation") ?? "",
      ).trim(),
      privacyAccepted: formData.get("privacyAccepted") === "on",
    };

    setIsSubmitting(true);

    try {
      const uploadData = new FormData();

      Object.entries(payload).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          value.forEach((v) => uploadData.append(key, v));
        } else {
          uploadData.append(key, String(value));
        }
      });

      selectedFiles.forEach((file) => uploadData.append("photos", file));

      const response = await fetch("/api/offerte", {
        method: "POST",
        body: uploadData,
      });

      let result: ApiResponse = {};

      try {
        result = (await response.json()) as ApiResponse;
      } catch {
        result = {};
      }

      if (!response.ok || result.success !== true) {
        throw new Error(
          result.message ||
            "De offerteaanvraag kon niet worden verstuurd. Probeer het opnieuw.",
        );
      }

      setMessage(
        result.message ||
          "Bedankt! Je offerteaanvraag is succesvol verstuurd.",
      );
      setMessageType("success");

      form.reset();
      setSelectedServices([]);
      setSelectedFiles([]);
      setCustomerType("Particulier");
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Er is iets misgegaan. Probeer het later opnieuw.";

      setMessage(errorMessage);
      setMessageType("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  const inputClassName =
    "mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:ring-4 focus:ring-sky-100";

  const labelClassName = "block text-sm font-bold text-slate-800";

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <aside className="lg:sticky lg:top-28">
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-sky-600">
              Offerte aanvragen
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Vertel ons waarmee we je kunnen helpen
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Vul je contactgegevens in en selecteer de gewenste werkzaamheden.
              Wij nemen daarna persoonlijk contact met je op.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Vrijblijvende offerte",
                "Persoonlijk contact",
                "Reactie zo snel mogelijk",
                "Voor particulieren en bedrijven",
              ].map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-700">
                    <Check className="h-4 w-4" aria-hidden="true" />
                  </div>

                  <p className="font-semibold text-slate-700">{benefit}</p>
                </div>
              ))}
            </div>

            <div className="mt-9 rounded-3xl bg-slate-950 p-6 text-white">
              <p className="font-bold">Liever direct contact?</p>

              <p className="mt-2 text-sm leading-6 text-slate-300">
                Bel of stuur een bericht. We bespreken graag wat er nodig is.
              </p>

              <div className="mt-5 space-y-3">
                <a
                  href="tel:+31619909034"
                  className="flex items-center gap-3 font-semibold text-sky-300 transition hover:text-sky-200"
                >
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  06 19909034
                </a>

                <a
                  href="mailto:info@scs.care"
                  className="flex items-center gap-3 font-semibold text-sky-300 transition hover:text-sky-200"
                >
                  <Mail className="h-5 w-5" aria-hidden="true" />
                  info@scs.care
                </a>
              </div>
            </div>
          </aside>

          <form
            onSubmit={handleSubmit}
            onChange={clearMessage}
            className="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm sm:p-8 lg:p-10"
          >
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-sky-600">
                Stap 1
              </p>

              <h3 className="mt-2 text-2xl font-black text-slate-950">
                Contactgegevens
              </h3>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor="name" className={labelClassName}>
                    Naam *
                  </label>

                  <div className="relative">
                    <User
                      className="pointer-events-none absolute left-4 top-1/2 mt-1 h-5 w-5 -translate-y-1/2 text-slate-400"
                      aria-hidden="true"
                    />

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Voor- en achternaam"
                      className={`${inputClassName} pl-12`}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className={labelClassName}>
                    Telefoonnummer *
                  </label>

                  <div className="relative">
                    <Phone
                      className="pointer-events-none absolute left-4 top-1/2 mt-1 h-5 w-5 -translate-y-1/2 text-slate-400"
                      aria-hidden="true"
                    />

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      placeholder="06 12345678"
                      className={`${inputClassName} pl-12`}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className={labelClassName}>
                    E-mailadres *
                  </label>

                  <div className="relative">
                    <Mail
                      className="pointer-events-none absolute left-4 top-1/2 mt-1 h-5 w-5 -translate-y-1/2 text-slate-400"
                      aria-hidden="true"
                    />

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="naam@voorbeeld.nl"
                      className={`${inputClassName} pl-12`}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="my-9 border-t border-slate-200" />

            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-sky-600">
                Stap 2
              </p>

              <h3 className="mt-2 text-2xl font-black text-slate-950">
                Adres en type klant
              </h3>

              <div className="mt-6">
                <span className={labelClassName}>Type klant *</span>

                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  {[
                    {
                      value: "Particulier",
                      icon: Home,
                    },
                    {
                      value: "Zakelijk",
                      icon: Building2,
                    },
                  ].map((type) => {
                    const Icon = type.icon;
                    const isSelected = customerType === type.value;

                    return (
                      <label
                        key={type.value}
                        className={`flex cursor-pointer items-center gap-4 rounded-2xl border p-4 transition ${
                          isSelected
                            ? "border-sky-500 bg-sky-50 ring-2 ring-sky-100"
                            : "border-slate-300 bg-white hover:border-sky-300"
                        }`}
                      >
                        <input
                          type="radio"
                          name="customerType"
                          value={type.value}
                          checked={isSelected}
                          onChange={() =>
                            handleCustomerTypeChange(type.value)
                          }
                          className="sr-only"
                        />

                        <div
                          className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                            isSelected
                              ? "bg-sky-600 text-white"
                              : "bg-slate-100 text-slate-600"
                          }`}
                        >
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </div>

                        <span className="font-bold text-slate-900">
                          {type.value}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor="address" className={labelClassName}>
                    Straat en huisnummer *
                  </label>

                  <div className="relative">
                    <MapPin
                      className="pointer-events-none absolute left-4 top-1/2 mt-1 h-5 w-5 -translate-y-1/2 text-slate-400"
                      aria-hidden="true"
                    />

                    <input
                      id="address"
                      name="address"
                      type="text"
                      required
                      autoComplete="street-address"
                      placeholder="Straatnaam 10"
                      className={`${inputClassName} pl-12`}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="postalCode" className={labelClassName}>
                    Postcode *
                  </label>

                  <input
                    id="postalCode"
                    name="postalCode"
                    type="text"
                    required
                    autoComplete="postal-code"
                    placeholder="7623 ZA"
                    className={inputClassName}
                  />
                </div>

                <div>
                  <label htmlFor="city" className={labelClassName}>
                    Plaats *
                  </label>

                  <input
                    id="city"
                    name="city"
                    type="text"
                    required
                    autoComplete="address-level2"
                    placeholder="Borne"
                    className={inputClassName}
                  />
                </div>

                {customerType === "Zakelijk" && (
                  <div className="sm:col-span-2">
                    <label htmlFor="company" className={labelClassName}>
                      Bedrijfsnaam *
                    </label>

                    <input
                      id="company"
                      name="company"
                      type="text"
                      required
                      autoComplete="organization"
                      placeholder="Naam van het bedrijf"
                      className={inputClassName}
                    />
                  </div>
                )}
              </div>
            </div>

            <div className="my-9 border-t border-slate-200" />

            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-sky-600">
                Stap 3
              </p>

              <h3 className="mt-2 text-2xl font-black text-slate-950">
                Gewenste werkzaamheden
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Je kunt meerdere werkzaamheden selecteren.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {services.map((service) => {
                  const isSelected = selectedServices.includes(service.value);

                  return (
                    <label
                      key={service.value}
                      className={`cursor-pointer rounded-2xl border p-5 transition ${
                        isSelected
                          ? "border-sky-500 bg-sky-50 ring-2 ring-sky-100"
                          : "border-slate-300 bg-white hover:border-sky-300"
                      }`}
                    >
                      <input
                        type="checkbox"
                        name="services"
                        value={service.value}
                        checked={isSelected}
                        onChange={() => toggleService(service.value)}
                        className="sr-only"
                      />

                      <div className="flex items-start gap-4">
                        <div
                          className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border ${
                            isSelected
                              ? "border-sky-600 bg-sky-600 text-white"
                              : "border-slate-300 bg-white"
                          }`}
                        >
                          {isSelected && (
                            <Check className="h-4 w-4" aria-hidden="true" />
                          )}
                        </div>

                        <div>
                          <p className="font-bold text-slate-900">
                            {service.title}
                          </p>

                          <p className="mt-1 text-sm leading-6 text-slate-600">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </label>
                  );
                })}
              </div>

              <div className="mt-6">
                <label htmlFor="additionalInformation" className={labelClassName}>
                  Aanvullende informatie
                  <span className="ml-1 font-normal text-slate-500">
                    (optioneel)
                  </span>
                </label>

                <div className="relative">
                  <MessageSquareText
                    className="pointer-events-none absolute left-4 top-6 h-5 w-5 text-slate-400"
                    aria-hidden="true"
                  />

                  <textarea
                    id="additionalInformation"
                    name="additionalInformation"
                    rows={5}
                    placeholder="Vertel eventueel iets over het pand, de bereikbaarheid of andere bijzonderheden."
                    className={`${inputClassName} resize-y pl-12`}
                  />
                </div>
              </div>
            </div>

            <div className="my-9 border-t border-slate-200" />

            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-sky-600">
                Stap 4
              </p>

              <h3 className="mt-2 text-2xl font-black text-slate-950">
                Foto’s toevoegen
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Foto’s zijn niet verplicht. De geselecteerde foto’s worden
meegestuurd met je offerteaanvraag. Je kunt maximaal 3 foto’s
toevoegen van maximaal 5 MB per foto.
              </p>

              <label
                htmlFor="photos"
                className="mt-6 flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-white px-6 py-10 text-center transition hover:border-sky-400 hover:bg-sky-50"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
                  <Camera className="h-7 w-7" aria-hidden="true" />
                </div>

                <p className="mt-4 font-bold text-slate-900">
                  Klik om foto’s te selecteren
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  JPG, PNG of WEBP
                </p>

                <input
                  id="photos"
                  name="photos"
                  type="file"
                  accept="image/jpeg,image/png,image/webp"
                  multiple
                  onChange={(event) => handleFiles(event.target.files)}
                  className="sr-only"
                />
              </label>

              {selectedFiles.length > 0 && (
                <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4">
                  <p className="text-sm font-bold text-slate-800">
                    Geselecteerde foto’s:
                  </p>

                  <ul className="mt-3 space-y-2">
                    {selectedFiles.map((file, index) => (
                      <li
                        key={`${file.name}-${index}`}
                        className="flex items-center gap-2 text-sm text-slate-600"
                      >
                        <Check
                          className="h-4 w-4 shrink-0 text-green-600"
                          aria-hidden="true"
                        />

                        <span className="break-all">{file.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="my-9 border-t border-slate-200" />

            <div>
              <label className="flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  name="privacyAccepted"
                  required
                  className="mt-1 h-5 w-5 shrink-0 rounded border-slate-300 text-sky-600 focus:ring-sky-500"
                />

                <span className="text-sm leading-6 text-slate-600">
                  Ik ga akkoord met de verwerking van mijn gegevens voor het
                  behandelen van deze offerteaanvraag. *
                </span>
              </label>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-7 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-sky-600 px-8 py-4 text-base font-black text-white shadow-lg shadow-sky-200 transition hover:bg-sky-700 disabled:cursor-not-allowed disabled:opacity-70 sm:text-lg"
              >
                {isSubmitting ? (
                  <>
                    <Loader2
                      className="h-5 w-5 animate-spin"
                      aria-hidden="true"
                    />
                    Versturen...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" aria-hidden="true" />
                    Offerteaanvraag versturen
                  </>
                )}
              </button>

              {message && (
                <div
                  role={messageType === "error" ? "alert" : "status"}
                  aria-live="polite"
                  className={`mt-5 rounded-xl border p-4 text-sm font-semibold ${
                    messageType === "success"
                      ? "border-green-200 bg-green-50 text-green-800"
                      : "border-red-200 bg-red-50 text-red-800"
                  }`}
                >
                  {message}
                </div>
              )}

              <p className="mt-4 text-center text-xs leading-5 text-slate-500">
                Je gegevens worden veilig verzonden en uitsluitend gebruikt om
                je offerteaanvraag te behandelen.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}