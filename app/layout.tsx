import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Admit One — College Essay Coaching with T20-Specific Rubrics",
  description:
    "Score your college essay against rubrics built from real admissions officer interviews. Know exactly where you stand before you apply.",
  openGraph: {
    title: "Admit One — Your Essay, Scored by the T20 Standard",
    description:
      "Rubrics built from real admissions officer interviews. Know exactly where you stand before you apply.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-cream text-primary">
        {children}
      </body>
    </html>
  );
}
