import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BackgroundParticles from "@/components/BackgroundParticles";
import StructuredData from "@/components/StructuredData";

const inter = Inter({ subsets: ["latin"], display: "swap" });

// Define site base URL for absolute URLs
const siteUrl = "https://paulg.io";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#4F46E5" // Indigo-600 color
};

export const metadata: Metadata = {
  title: {
    default: "Paul Gardiner | Software Engineer & CTO",
    template: "%s | Paul Gardiner"
  },
  description: "Paul Gardiner is a senior software engineer and CTO with 19 years of experience in building innovative solutions across web, mobile, and cloud platforms including AI and machine learning.",
  keywords: [
    "Software Engineer Edinburgh", 
    "CTO Scotland", 
    "AI Engineer UK", 
    "Artificial Intelligence Expert", 
    "Machine Learning Engineer", 
    "AI Developer Edinburgh", 
    "React Developer Scotland", 
    "Full Stack Developer UK", 
    "Node.js Expert Edinburgh", 
    "Python AI Developer", 
    "AWS Cloud Architect", 
    "GCP Solutions Architect", 
    "Edinburgh Tech Leader", 
    "Scotland CTO", 
    "UK Software Engineer", 
    "Cloud Infrastructure Engineer",
    "AI/ML Solutions"
  ],
  authors: [{ name: "Paul Gardiner" }],
  creator: "Paul Gardiner",
  publisher: "Paul Gardiner",
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: siteUrl
  },
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    title: "Paul Gardiner | Software Engineer & CTO",
    description: "Paul Gardiner is a senior software engineer and CTO with 19 years of experience in building innovative solutions across web, mobile, and cloud platforms including AI and machine learning.",
    siteName: "Paul Gardiner",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Paul Gardiner - Software Engineer & CTO"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Paul Gardiner | Software Engineer & CTO",
    description: "Paul Gardiner is a senior software engineer and CTO with 19 years of experience in building innovative solutions across web, mobile, and cloud platforms including AI and machine learning.",
    images: [`${siteUrl}/og-image.png`]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <StructuredData />
      </head>
      <body className={inter.className}>
        <BackgroundParticles />
        <main className="min-h-screen flex flex-col items-center justify-between p-8 md:p-16 max-w-7xl mx-auto relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}
