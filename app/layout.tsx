import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zaki Adi Nugroho | Tech Explorer",
  description: "Portfolio of Zaki Adi Nugroho, berfokus pada Platform Web, AI & Data, dan Sistem Backend.",
  keywords: ["Zaki Adi Nugroho", "Portfolio", "Web Developer", "Backend Developer", "AI Enthusiast", "Tech Explorer", "Software Engineer"],
  openGraph: {
    title: "Zaki Adi Nugroho | Tech Explorer",
    description: "Portfolio of Zaki Adi Nugroho, berfokus pada Platform Web, AI & Data, dan Sistem Backend.",
    siteName: "Zaki Adi Nugroho Portfolio",
    images: [
      {
        url: "/iii.jpeg",
        width: 800,
        height: 800,
        alt: "Zaki Adi Nugroho Profile",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zaki Adi Nugroho | Tech Explorer",
    description: "Portfolio of Zaki Adi Nugroho, berfokus pada Platform Web, AI & Data, dan Sistem Backend.",
    images: ["/iii.jpeg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#09090b",
};

import LoadingScreen from "@/components/LoadingScreen";
import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased dark">
      <body
        className={`min-h-[100svh] bg-zinc-950 text-zinc-50 ${plusJakarta.className} selection:bg-zinc-800 selection:text-zinc-100 flex flex-col overscroll-none relative`}
      >
        {/* Global Noise Background */}
        <div
          className="pointer-events-none fixed inset-0 z-[-2] h-full w-full opacity-[0.04]"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
          }}
        ></div>

        {/* Ambient Subtle Glows */}
        <div className="pointer-events-none fixed inset-0 z-[-1] overflow-hidden">
          <div className="absolute -top-[25%] -left-[10%] w-[50%] h-[50%] rounded-full bg-zinc-600/10 blur-[120px]"></div>
          <div className="absolute top-[60%] -right-[10%] w-[40%] h-[60%] rounded-full bg-sky-900/10 blur-[120px]"></div>
        </div>

        <LoadingScreen />
        <CustomCursor />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
