import { Geist, Geist_Mono } from "next/font/google";
import { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gold Price India - Track Today's Gold Rates",
  description:
    "Stay updated with the latest gold prices in various cities across India. View 18k, 22k, and 24k gold rates.",
    verification: {
      google: 'y_LnWeCrexR3FQRtlteL9D5MDZSKjDKVv2ef1VIt9Z8',
      
    }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        {/* Google site verification meta tag */}
        <meta name="google-site-verification" content="y_LnWeCrexR3FQRtlteL9D5MDZSKjDKVv2ef1VIt9Z8" />
        <link rel="canonical" href="https://goldpricetoday.vercel.app" />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <header aria-label="Main Header">
          <Header />
        </header>
        <main aria-label="Content">{children}</main>
        <footer aria-label="Footer">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
