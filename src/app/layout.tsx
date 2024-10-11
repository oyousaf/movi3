import React from "react";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";
import RootLayoutClient from "./RootLayoutClient";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Movi3",
  description:
    "Movi3 PWA offers a seamless way to discover the latest movies, with powerful search options by genre, year, and more. Enjoy a smooth browsing experience across all devices—even offline—making it easy to explore trending films and hidden gems anytime, anywhere.",
  manifest: "/web.manifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  );
}
