import type { Metadata } from "next";
import { Playfair_Display, Great_Vibes, Lato } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Irantzu Rejilla — Especialista en rejilla y asientos artesanales",
  description:
    "Devuelvo belleza, funcionalidad y vida a cada silla, respetando su esencia original. Servicio en Araba y Bizkaia.",
  openGraph: {
    title: "Irantzu Rejilla — Especialista en rejilla y asientos artesanales",
    description: "Restauración de sillas. Especializada en rejilla y asientos artesanales. Talleres en Zuia y Bilbao.",
    url: "https://irantzurejilla.es",
    siteName: "Irantzu Rejilla",
    images: [
      {
        url: "https://irantzurejilla.es/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Irantzu Rejilla — Especialista en restauración de sillas",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${playfairDisplay.variable} ${greatVibes.variable} ${lato.variable}`}
    >
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
