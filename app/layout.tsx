import Footer from "@/components/Footer";
import Script from "next/script";
import "./globals.css";
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { Tinos } from "next/font/google";
import { ThresholdProvider } from "@/context/ThresholdContext";

const inter = Tinos({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Agromasina plus, Stajkovce",
  description:
    "Delovi za poljoprivredne mašine, priključne mašine, folije i još mnogo toga!",
  openGraph: {
    title: "Agromasina plus, Stajkovce",
    description: "Najbolji izbor traktora, prikolica, priključnih mašina..",
    url: "https://agromasina.com",
    siteName: "Agromasina plus, Stajkovce",
    locale: "sr_RS",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agromasina plus, Stajkovce",
    description: "Najpouzdaniji delovi za traktore i priključne mašine.",
  },
};

<Script />;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="canonical" href="https://agromasina.com" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <ThresholdProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThresholdProvider>
      </body>
    </html>
  );
}
