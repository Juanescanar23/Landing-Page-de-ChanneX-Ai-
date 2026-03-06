import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

const heading = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "ChanneX AI | Centraliza. Automatiza. Convierte.",
  description:
    "Plataforma B2B de conversión con IA para centralizar canales, calificar leads y automatizar seguimiento comercial.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${heading.variable} ${GeistSans.variable} bg-ink font-body text-paper antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
