import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ფორმაცია - ემოციების ჰაბი",
    template: "%s | ფორმაცია",
  },
  description:
    "ფორმაცია არის ემოციური განვითარების ცენტრი თბილისში. მითოდრამა, კალიგრაფია, Self მარკეტინგი და სხვა უნიკალური კურსები ბავშვებისა და მოზარდებისთვის.",
  keywords: [
    "ფორმაცია",
    "ემოციები",
    "მითოდრამა",
    "კალიგრაფია",
    "ბავშვები",
    "მოზარდები",
    "თბილისი",
    "განვითარება",
  ],
  authors: [{ name: "ფორმაცია - ემოციების ჰაბი" }],
  creator: "ფორმაცია",
  publisher: "ფორმაცია",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://formation.ge"),
  alternates: {
    canonical: "/",
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
  verification: {
    google: "your-google-verification-code", // დაამატეთ Google Search Console-ის კოდი
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ka">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
