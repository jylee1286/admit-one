import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Admit One — Finally Know If Your Essay Is Actually Good",
  description:
    "We built rubrics from real conversations with admissions officers. No more guessing — just honest feedback on where you stand.",
  openGraph: {
    title: "Admit One — Finally Know If Your Essay Is Actually Good",
    description:
      "Rubrics built from real admissions officer conversations. Know exactly where you stand before you apply.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased bg-cream text-primary">
        {children}
      </body>
    </html>
  );
}
