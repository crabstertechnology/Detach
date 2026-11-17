import type { Metadata } from "next";
import { Space_Grotesk, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./slashvibe.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Detach | Reconnect With What Matters",
  description:
    "A dedicated handheld companion to break compulsive phone scrolling. Features a vibrant 1.69 inch color touchscreen, all-day battery life, and shake to wake motion sensor.",
  openGraph: {
    title: "Detach | Reconnect With What Matters",
    description:
      "A dedicated physical companion to break compulsive screen habits. 1.69 inch color touch display, all-day battery, and USB-C fast charging.",
    siteName: "DEtach - Crabster Technology",
    images: [
      {
        url: "/assets/generated/hero_cinematic.jpg",
        width: 1376,
        height: 768,
        alt: "DEtach 1.69 inch Touch Companion",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DEtach | 1.69\" Touch Companion",
    description: "Distraction free touch companion for digital wellbeing by Crabster Technology.",
    images: ["/assets/generated/hero_cinematic.jpg"],
  },
  icons: {
    icon: "/assets/favicon/favicon-dark.png",
    apple: "/assets/favicon/favicon-dark.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${spaceGrotesk.variable} ${geistSans.variable} ${geistMono.variable} antialiased bg-[#07070a] text-[#f4f4f7] min-h-screen selection:bg-[#3875ff]/30 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
