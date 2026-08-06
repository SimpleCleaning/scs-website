"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type ConsentChoice = "necessary" | "accepted";

const STORAGE_KEY = "scs-cookie-consent";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const savedChoice = window.localStorage.getItem(STORAGE_KEY);

    if (savedChoice !== "necessary" && savedChoice !== "accepted") {
      setIsVisible(true);
    }
  }, []);

  function saveChoice(choice: ConsentChoice) {
    window.localStorage.setItem(STORAGE_KEY, choice);
    window.dispatchEvent(
      new CustomEvent("scs-cookie-consent-change", {
        detail: { choice },
      }),
    );
    setIsVisible(false);
  }

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[100] px-4 pb-4 sm:px-6 sm:pb-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-title"
      aria-describedby="cookie-description"
    >
      <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-slate-950/20">
        <div className="grid gap-6 p-5 sm:p-7 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="flex gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sky-100 text-2xl">
              🍪
            </div>

            <div>
              <h2
                id="cookie-title"
                className="text-xl font-black text-slate-950"
              >
                Cookies
              </h2>

              <p
                id="cookie-description"
                className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base"
              >
                Wij gebruiken noodzakelijke technieken om de website goed te
                laten werken. Met jouw toestemming kunnen wij later ook
                analytische cookies gebruiken om de website te verbeteren.
              </p>

              <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
                <Link
                  href="/privacy"
                  className="text-sky-700 transition hover:text-sky-900"
                >
                  Privacyverklaring
                </Link>

                <Link
                  href="/cookies"
                  className="text-sky-700 transition hover:text-sky-900"
                >
                  Cookieverklaring
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <button
              type="button"
              onClick={() => saveChoice("necessary")}
              className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-slate-300 bg-white px-5 py-3 font-bold text-slate-800 transition hover:border-sky-300 hover:bg-sky-50 hover:text-sky-800"
            >
              Alleen noodzakelijk
            </button>

            <button
              type="button"
              onClick={() => saveChoice("accepted")}
              className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-blue-600 px-5 py-3 font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg"
            >
              Alles accepteren
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}