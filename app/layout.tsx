import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Effects } from "@/components/Effects";
import ScrollProgress from "@/components/ScrollProgress";
import { site, siteDescription, siteOgDescription } from "@/lib/site";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

// Regenerate every page daily so server-rendered copy, including the
// years-of-experience figure in text and metadata, stays current without a redeploy.
export const revalidate = 86400;

// A function (not a constant) so the years figure in the descriptions is
// recomputed each time a page is generated or revalidated.
export const generateMetadata = (): Metadata => ({
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: "%s | Dhrumil Bhut",
  },
  description: siteDescription(),
  keywords: [
    "Dhrumil Bhut",
    "Backend Engineer",
    "AI Systems Engineer",
    "Distributed Systems",
    "AI Infrastructure",
    "Node.js",
    "TypeScript",
    "Python",
    "PostgreSQL",
    "Redis",
    "RabbitMQ",
    "RAG",
    "LLM Evaluation",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    title: site.title,
    description: siteOgDescription(),
    type: "website",
    url: site.url,
    siteName: site.name,
  },
  alternates: {
    types: {
      "application/rss+xml": "/feed.xml",
    },
  },
  icons: {
    // Versioned query string busts the browser's notoriously sticky favicon cache.
    icon: "/favicon.svg?v=2",
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning: browser extensions inject attributes onto <html>
    // (e.g. data-qb-installed) before React hydrates. Only affects this element.
    <html
      lang="en"
      className={`${jakarta.variable} ${playfair.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="flex flex-col min-h-screen">
        <ScrollProgress />
        <Effects />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
