import type { Metadata } from "next";
import { DM_Mono, Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const bodyFont = Manrope({ variable: "--font-body", subsets: ["latin"], display: "swap" });
const displayFont = Space_Grotesk({ variable: "--font-display", subsets: ["latin"], display: "swap" });
const labelFont = DM_Mono({ variable: "--font-label", weight: ["400", "500"], subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Nishaan Padanthaya — AI / ML Engineer",
  description:
    "Nishaan Padanthaya is an AI/ML engineer working across applied machine learning, language models, industrial AI, and published research.",
  openGraph: {
    title: "Nishaan Padanthaya — AI / ML Engineer",
    description:
      "Intelligent systems where research, engineering, and real-world problems meet.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Nishaan Padanthaya — AI / ML Engineer",
    description:
      "Intelligent systems where research, engineering, and real-world problems meet.",
  },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${displayFont.variable} ${labelFont.variable}`}>{children}</body>
    </html>
  );
}
