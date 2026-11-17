
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  metadataBase: new URL("https://yadiraportuondo.com"),
  title: "Yadira Portuondo | Bienes Raíces en Miami",
  description:
    "Abriendo puertas a tu mejor inversión en Miami y South Florida.",
  openGraph: {
    title: "Yadira Portuondo | Bienes Raíces en Miami",
    description:
      "Asesoría profesional en compra, venta y renta de propiedades en Miami.",
    url: "https://yadiraportuondo.com",
    siteName: "Yadira Portuondo",
    images: [
      {
        url: "/og-yadira.png",
        width: 1200,
        height: 630,
        alt: "Yadira Portuondo Realtor - Miami y South Florida",
      },
    ],
    locale: "es_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yadira Portuondo | Bienes Raíces en Miami",
    description:
      "Abriendo puertas a tu mejor inversión en Miami y South Florida.",
    images: ["/og-yadira.png"],
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
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
