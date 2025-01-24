import type { Metadata } from "next";

import { DM_Sans, DM_Mono } from "next/font/google";

import "./globals.css";
import Providers from "./_contexts";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  weight: ["300", "400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "C-3PO",
  description:
    "A modular network of interoperable DeFi agentsSmarter Tools, Trending Insights, and Effortless Trades – All in One Place",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${dmSans.variable} ${dmMono.variable} antialiased  `}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
