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
  title: "Debjit Das | Data Analyst & Data Science Portfolio",
  description:
    "Portfolio of Debjit Das — Data Science postgraduate skilled in Data Analytics, SQL, Python, Power BI, Machine Learning, and Business Intelligence. Explore analytics dashboards, AI/ML projects, and real-world data solutions.",
  keywords: [
    "Debjit Das",
    "Data Analyst",
    "Data Science Portfolio",
    "Business Intelligence",
    "Power BI",
    "SQL",
    "Python",
    "Machine Learning",
    "Data Analytics",
    "AI ML Portfolio",
    "Dashboard Developer",
    "Data Visualization",
    "Analytics Engineer",
  ],
  authors: [{ name: "Debjit Das" }],
  creator: "Debjit Das",
  openGraph: {
    title: "Debjit Das | Data Analyst & AI/ML Portfolio",
    description:
      "Data Science postgraduate focused on analytics, dashboards, machine learning, and real-world data-driven solutions.",
    url: "https://your-portfolio-url.com",
    siteName: "Debjit Das Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Debjit Das | Data Analyst & AI/ML Portfolio",
    description:
      "Analytics, dashboards, machine learning, and data-driven solutions.",
  },
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
