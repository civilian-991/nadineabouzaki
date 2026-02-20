import type { Metadata } from "next";
import { Lora, Ubuntu_Condensed } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
});

const ubuntuCondensed = Ubuntu_Condensed({
  variable: "--font-ubuntu-condensed",
  subsets: ["latin", "latin-ext"],
  weight: "400",
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
      <body className={`${lora.variable} ${ubuntuCondensed.variable}`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
