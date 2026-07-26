import type { Metadata } from "next";
import { Lexend, Oswald } from "next/font/google";
import "./globals.css";
import { MotionProvider } from "./providers";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Le Paddock — Bar, Restaurant & Tapas à Plessé",
  description:
    "Le Paddock, bar-restaurant à tapas idéalement collé au circuit de karting Solokart à Plessé. Terrasse et rooftop avec vue sur la piste, cuisine généreuse et cocktails jusqu'au soir.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${lexend.variable} ${oswald.variable} h-full scroll-smooth scroll-pt-16 antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ground text-ink font-sans">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
