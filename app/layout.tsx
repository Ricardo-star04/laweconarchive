import type { Metadata } from "next";
import "./globals.css";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getSearchIndex } from "@/lib/search";
import { getSiteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "Law and Economics Archive",
    template: "%s | Law and Economics Archive"
  },
  description:
    "An English-language research archive for law and economics, with a focus on corporate law, securities regulation, financial law, and empirical legal studies.",
  keywords: [
    "law and economics",
    "corporate governance",
    "securities regulation",
    "financial regulation",
    "empirical legal studies",
    "comparative law",
    "governance",
    "regulation"
  ],
  alternates: {
    canonical: "/"
  },
  icons: {
    icon: "/brand/archive-emblem.png",
    apple: "/brand/archive-emblem.png"
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Law and Economics Archive",
    description:
      "A curated research archive for corporate governance, securities regulation, financial law, and empirical legal studies through law and economics.",
    siteName: "Law and Economics Archive"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const searchItems = getSearchIndex();

  return (
    <html lang="en">
      <body>
        <div className="academic-shell min-h-screen text-ink">
          <SiteHeader searchItems={searchItems} />
          <Breadcrumbs />
          <main className="mx-auto w-full max-w-6xl px-5 py-6 sm:px-6 md:py-8">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
