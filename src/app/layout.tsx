import type { Metadata } from "next";
import { Cormorant_Garamond, Crimson_Pro } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GrainOverlay from "@/components/GrainOverlay";
import CustomCursor from "@/components/CustomCursor";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const crimson = Crimson_Pro({
  variable: "--font-body",
  subsets: ["latin", "latin-ext"],
  weight: ["200", "300", "400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Nadine Abou Zaki | Sculptor, Writer, Director",
  description:
    "Nadine Abou Zaki: Sculptor, Writer, Director. Artist, Lebanese artist, tactile art, theater, performance, interactive performance, sculptor, sculpture.",
  keywords:
    "Artist, Lebanese artist, art, tactile art, theater, performance, sculptor, sculpture, writer, author, blindfold, dance, accessibility, disability",
  authors: [{ name: "Nadine Abou Zaki" }],
  openGraph: {
    type: "website",
    siteName: "NadineAbouZaki",
    url: "https://www.nadineabouzaki.com/",
    title: "Nadine Abou Zaki: Sculptor, Writer, Director",
    description: "Artist, Sculptor, Writer, Director, Interactive Performance",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${crimson.variable}`}>
        <CustomCursor />
        <GrainOverlay />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
