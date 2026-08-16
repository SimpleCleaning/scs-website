"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "Diensten", href: "/diensten" },
  { label: "Tarieven", href: "/#tarieven" },
  { label: "Offerte", href: "/offerte" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [hash, setHash] = useState("");

  useEffect(() => {
    function updateHash() {
      setHash(window.location.hash);
    }

    updateHash();

    window.addEventListener("hashchange", updateHash);

    return () => {
      window.removeEventListener("hashchange", updateHash);
    };
  }, [pathname]);

  function isActive(href: string) {
    if (href === "/#tarieven") {
      return pathname === "/" && hash === "#tarieven";
    }

    if (href === "/") {
      return pathname === "/" && hash !== "#tarieven";
    }

    return pathname === href;
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  function handleMenuClick(href: string) {
    closeMenu();

    if (href === "/#tarieven") {
      setHash("#tarieven");
    } else if (href === "/") {
      setHash("");
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex min-h-28 max-w-7xl items-center gap-4 px-4 py-2 sm:px-6">
        <Link
          href="/"
          aria-label="Ga naar de homepage"
          className="flex shrink-0 items-center"
          onClick={() => {
            closeMenu();
            setHash("");
          }}
        >
          <Image
            src="/logo.png"
            alt="Logo van Simple Cleaning Service"
            width={360}
            height={360}
            priority
            className="h-24 w-24 object-contain sm:h-28 sm:w-28 lg:h-40 lg:w-40"
          />
        </Link>

        <div className="ml-auto flex items-center gap-3">
          <nav
            aria-label="Hoofdnavigatie"
            className="hidden items-center gap-2 lg:flex"
          >
            {menuItems.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => handleMenuClick(item.href)}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                    active
                      ? "bg-sky-100 text-sky-700"
                      : "text-slate-700 hover:bg-slate-100 hover:text-sky-700"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <Link
            href="/offerte"
            className="hidden shrink-0 whitespace-nowrap rounded-2xl bg-blue-600 px-5 py-4 text-sm font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg sm:inline-flex lg:px-7"
            onClick={closeMenu}
          >
            Gratis offerte
          </Link>

          <button
            type="button"
            aria-label={menuOpen ? "Menu sluiten" : "Menu openen"}
            aria-expanded={menuOpen}
            aria-controls="mobiel-menu"
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-800 shadow-sm transition hover:bg-slate-100 lg:hidden"
          >
            {menuOpen ? (
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M6 6l12 12M18 6 6 18" />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          id="mobiel-menu"
          className="border-t border-slate-200 bg-white px-4 py-4 shadow-lg lg:hidden"
        >
          <nav
            aria-label="Mobiele navigatie"
            className="mx-auto flex max-w-7xl flex-col gap-2"
          >
            {menuItems.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => handleMenuClick(item.href)}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-xl px-4 py-3 font-semibold transition ${
                    active
                      ? "bg-sky-100 text-sky-700"
                      : "text-slate-700 hover:bg-slate-100 hover:text-sky-700"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <Link
              href="/offerte"
              onClick={closeMenu}
              className="mt-2 inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3.5 font-bold text-white transition hover:bg-blue-700 sm:hidden"
            >
              Gratis offerte
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}