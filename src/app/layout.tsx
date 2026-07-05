import type { Metadata } from "next";
import { Bebas_Neue, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import MobileCTABar from "@/components/MobileCTABar";
import CustomCursor from "@/components/CustomCursor";

const bebas = Bebas_Neue({
  subsets: ["latin"], variable: "--font-bebas", weight: ["400"], display: "swap",
});
const inter = Inter({
  subsets: ["latin"], variable: "--font-inter",
  weight: ["400","500","600","700"], display: "swap",
});
const mono = JetBrains_Mono({
  subsets: ["latin"], variable: "--font-mono",
  weight: ["400","500"], display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "AZ Electrical | Certified Electricians in Bognor Regis, West Sussex",
    template: "%s | AZ Electrical",
  },
  description:
    "AZ Electrical — NICEIC certified electricians in Bognor Regis. Chris has 20+ years of experience and is known for actually answering the phone and turning up on time. Emergency callouts, rewires, consumer units, bespoke garden & outdoor power.",
  keywords: [
    "electrician Bognor Regis","NICEIC electrician West Sussex","emergency electrician Bognor Regis",
    "garden electrical installation West Sussex","consumer unit upgrade Bognor Regis",
    "house rewire West Sussex","commercial electrician Bognor Regis",
  ],
  openGraph: {
    title: "AZ Electrical | Certified Electricians in Bognor Regis",
    description: "20+ years of experience. We actually answer the phone and turn up on time.",
    type: "website", locale: "en_GB",
    url: "https://www.azelectrical.co.uk",
    siteName: "AZ Electrical",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "AZ Electrical | Bognor Regis" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${bebas.variable} ${inter.variable} ${mono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#000000" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Electrician",
          name: "AZ Electrical",
          image: "https://www.azelectrical.co.uk/og-image.jpg",
          url: "https://www.azelectrical.co.uk",
          telephone: "+447903087501",
          email: "azelectrical123@gmail.com",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Bognor Regis",
            addressRegion: "West Sussex",
            addressCountry: "GB",
          },
          areaServed: [
            { "@type": "City", name: "Bognor Regis" },
            { "@type": "AdministrativeArea", name: "West Sussex" },
          ],
          priceRange: "££",
          aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "47" },
        })}} />
      </head>
      <body>
        <CustomCursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
        <MobileCTABar />
      </body>
    </html>
  );
}
