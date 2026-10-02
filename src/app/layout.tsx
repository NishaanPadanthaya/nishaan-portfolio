import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nishaan Padanthaya — AI / ML Engineer",
  description:
    "Nishaan Padanthaya is an AI/ML engineer working across applied machine learning, language models, industrial AI, and research.",
  openGraph: {
    title: "Nishaan Padanthaya — AI / ML Engineer",
    description:
      "Intelligent systems where research, engineering, and real-world problems meet.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nishaan Padanthaya — AI / ML Engineer",
    description:
      "Intelligent systems where research, engineering, and real-world problems meet.",
  },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
