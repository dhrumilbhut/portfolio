import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Effects } from "@/components/Effects";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: "%s | Dhrumil Bhut",
  },
  description: site.description,
  keywords: [
    "Dhrumil Bhut",
    "Software Engineer",
    "Backend Engineer",
    "Node.js",
    "PostgreSQL",
    "AWS",
    "Redis",
    "RabbitMQ",
    "RAG",
    "LLM",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    title: site.title,
    description: site.ogDescription,
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
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="flex flex-col min-h-screen">
        <Effects />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
