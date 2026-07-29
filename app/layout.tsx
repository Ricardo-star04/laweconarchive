import type { Metadata } from "next";
import "@fontsource/libre-baskerville/latin-400-italic.css";
import "./globals.css";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getSiteUrl } from "@/lib/site-url";
import { withBasePath } from "@/lib/base-path";

const isDevelopment = process.env.NODE_ENV === "development";
const staticContentSecurityPolicy = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDevelopment ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  `connect-src 'self'${isDevelopment ? " ws: http: https:" : ""}`,
  "media-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-src 'none'",
  "worker-src 'self' blob:",
  "manifest-src 'self'",
  ...(isDevelopment ? [] : ["upgrade-insecure-requests"])
].join("; ");

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
  icons: {
    icon: withBasePath("/brand/archive-emblem.png"),
    apple: withBasePath("/brand/archive-emblem.png")
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
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="Content-Security-Policy" content={staticContentSecurityPolicy} />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
      </head>
      <body>
        <div className="academic-shell min-h-screen text-ink">
          <SiteHeader />
          <Breadcrumbs />
          <main className="mx-auto w-full max-w-6xl px-5 py-6 sm:px-6 md:py-8">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
