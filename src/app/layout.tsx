import type { Metadata } from "next";
import { Bodoni_Moda, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GrainOverlay from "@/components/GrainOverlay";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";

const bodoni = Bodoni_Moda({
  variable: "--font-display",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin", "latin-ext"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Nadine Abou Zaki | Sculptor, Writer, Director",
  description:
    "Nadine Abou Zaki: Sculptor, Writer, Director. Lebanese-French artist exploring tactile aesthetics through sculpture, theater, and interactive performance.",
  keywords:
    "Artist, Lebanese artist, art, tactile art, theater, performance, sculptor, sculpture, writer, author, blindfold, dance, accessibility, disability",
  authors: [{ name: "Nadine Abou Zaki" }],
  openGraph: {
    type: "website",
    siteName: "NadineAbouZaki",
    url: "https://www.nadineabouzaki.com/",
    title: "Nadine Abou Zaki: Sculptor, Writer, Director",
    description: "Lebanese-French artist exploring tactile aesthetics through sculpture, theater, and interactive performance.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bodoni.variable} ${jakarta.variable}`}>
        <CustomCursor />
        <GrainOverlay />
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
