import type { Metadata } from "next";
import { Space_Grotesk, Geist, Geist_Mono } from "next/font/google";
import StructuredData from "@/components/StructuredData";
import Analytics from "@/components/Analytics";
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
  metadataBase: new URL("https://detach.crabstertech.in"),
  title: "Detach — Handheld Digital Wellbeing Companion | Reconnect With What Matters",
  description:
    "Detach is a dedicated handheld companion by Crabster Technology that replaces compulsive phone scrolling with two-minute mindful micro-resets. Vibrant 1.69 inch color touch display, all-day battery, and shake to wake.",
  keywords: [
    "Detach",
    "Crabster Technology",
    "digital wellbeing device",
    "phone addiction companion",
    "anti distraction device",
    "mindful micro resets",
    "ESP32-S3 touch companion",
    "screen time reduction",
    "pocket habit breaker",
    "calm focus hardware"
  ],
  alternates: {
    canonical: "https://detach.crabstertech.in",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Detach | Reconnect With What Matters",
    description:
      "A dedicated physical companion to break compulsive screen habits. 1.69 inch color touch display, all-day battery, and USB-C fast charging.",
    url: "https://detach.crabstertech.in",
    siteName: "Detach - Crabster Technology",
    images: [
      {
        url: "/assets/detach_hero_4k.webp",
        width: 1920,
        height: 1080,
        alt: "Detach 1.69 inch Touch Companion by Crabster Technology",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Detach | Reconnect With What Matters",
    description: "Distraction free touch companion for digital wellbeing by Crabster Technology.",
    images: ["/assets/detach_hero_4k.webp"],
  },
  icons: {
    icon: "/assets/favicon/favicon-dark.png",
    apple: "/assets/favicon/favicon-dark.png",
  },
  category: "technology",
  authors: [{ name: "Crabster Technology", url: "https://crabstertech.in" }],
  creator: "Crabster Technology",
  publisher: "Crabster Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <StructuredData />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "zfzd370h2i");
            `,
          }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${geistSans.variable} ${geistMono.variable} antialiased bg-[#07070a] text-[#f4f4f7] min-h-screen selection:bg-[#3875ff]/30 selection:text-white`}
      >
        <Analytics />
        {children}
      </body>
    </html>
  );
}
