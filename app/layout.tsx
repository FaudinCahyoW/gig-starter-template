import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://namadomainklien.com"),

  title: {
    default: "Business Web Template - Solusi Digital Terbaik untuk Bisnis Anda",
    template: "%s | Business Web Template",
  },
  description:
    "Tingkatkan konversi dan pertumbuhan bisnis Anda dengan landing page profesional yang responsive, cepat, dan teroptimasi SEO.",

  keywords: ["landing page", "jasa web design", "solusi digital bisnis"],

  authors: [{ name: "Business Web Template" }],
  creator: "Business Web Template",

  openGraph: {
    title: "Business Web Template - Solusi Digital Terbaik",
    description: "Tingkatkan konversi dan pertumbuhan bisnis Anda dengan sistem web yang scalable.",
    url: "https://namadomainklien.com",
    siteName: "Business Web Template",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "id_ID",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Business Web Template - Solusi Digital Terbaik",
    description: "Tingkatkan konversi dan pertumbuhan bisnis Anda dengan sistem web yang scalable.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        inter.variable
      )}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}