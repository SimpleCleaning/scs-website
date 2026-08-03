"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const menuItems = [
  { label: "Home", href: "/", path: "/" },
  { label: "Diensten", href: "/diensten", path: "/diensten" },
  { label: "Over ons", href: "/over-ons", path: "/over-ons" },
  { label: "Werkwijze", href: "/#werkwijze", path: "#werkwijze" },
  { label: "Offerte", href: "/offerte", path: "/offerte" },
  { label: "Contact", href: "/contact", path: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
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

  function isActive(path: string) {
    if (path === "#werkwijze") {
      return pathname === "/" && hash === "#werkwijze";
    }

    if (path === "/") {
      return pathname === "/" && hash !== "#werkwijze";
    }

    return pathname === path;
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex min-h-36 max-w-7xl items-center gap-8 px-4 py-3 sm:px-6">
        <Link
          href="/"
          aria-label="Ga naar de homepage"
          className="flex shrink-0 items-center"
        >
          <Image
            src="/logo.png"
            alt="Logo van Simple Cleaning Service"
            width={360}
            height={360}
            priority
            className="h-36 w-36 object-contain sm:h-40 sm:w-40 lg:h-52 lg:w-52"
          />
        </Link>

        <div className="ml-auto flex items-center gap-6">
          <nav
            aria-label="Hoofdnavigatie"
            className="hidden items-center gap-2 lg:flex"
          >
            {menuItems.map((item) => {
              const active = isActive(item.path);

              return (
                <Link
                  key={item.label}
                  href={item.href}
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
            className="shrink-0 whitespace-nowrap rounded-2xl bg-blue-600 px-5 py-4 text-sm font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg sm:px-7"
          >
            Gratis offerte
          </Link>
        </div>
      </div>
    </header>
  );
}