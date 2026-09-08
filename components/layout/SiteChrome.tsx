"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

export default function SiteChrome({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isTransportPage =
    pathname === "/transport" || pathname.startsWith("/transport/");

  if (isTransportPage) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />

      <div className="flex-1">
        {children}
      </div>

      <Footer />
    </>
  );
}