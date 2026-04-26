import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
  weight: ["300", "400", "500", "600", "700"],
});

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Parikrama Experiences | Handpicked Trips to Beautiful Places",
  description:
    "Since 2010. Handpicked trips across India. From the mountains of Kailash to the backwaters of Kerala, we help you plan perfect trips.",
};

import SearchOverlay from "@/components/SearchOverlay";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${outfit.variable} ${jetbrains.variable}`}>
      <body className="font-sans antialiased bg-[#FAF9F6] text-[#111]">
        <SearchOverlay />
        {children}
      </body>
    </html>
  );
}
