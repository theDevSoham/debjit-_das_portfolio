import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Navbar from "@/components/layout/navbar";
import "./globals.css";

import LenisProvider from "@/components/client/smooth-scroll/lenis-provider";
import ScrollProgress from "@/components/client/progress/scroll-progress";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export const metadata: Metadata = {
  title: "John Doe",
  description: "Data Scientist & Research Enthusiast",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} noise-bg bg-[#f8fafc] text-slate-900 antialiased`}
      >
        <LenisProvider>
          <ScrollProgress />
          <Navbar />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
