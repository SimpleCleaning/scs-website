import CookieBanner from "@/components/ui/CookieBanner";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.scs.care"),

  title: {
    default: "Simple Cleaning Service",
    template: "%s | Simple Cleaning Service",
  },

  description:
    "Professionele glasbewassing en buitenreiniging in Borne en omgeving. Voor ramen, zonnepanelen, dakgoten en boeidelen.",

  applicationName: "Simple Cleaning Service",

  keywords: [
    "glazenwasser Borne",
    "glasbewassing Borne",
    "ramen wassen Borne",
    "zonnepanelen reinigen Borne",
    "dakgoten reinigen Borne",
    "boeidelen reinigen",
    "glazenwasser Twente",
    "Simple Cleaning Service",
  ],

  authors: [
    {
      name: "Simple Cleaning Service",
      url: "https://www.scs.care",
    },
  ],

  creator: "Simple Cleaning Service",
  publisher: "Simple Cleaning Service",

  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://www.scs.care",
    siteName: "Simple Cleaning Service",
    title: "Simple Cleaning Service",
    description:
      "Professionele glasbewassing en buitenreiniging in Borne en omgeving.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nl"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-screen flex-col bg-white text-slate-900">
        <Header />

        <main className="flex-1">{children}</main>

        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}