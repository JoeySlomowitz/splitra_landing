import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://splitra.app"),
  title: "Splitra - AI Receipt Scanner & Bill Splitting App",
  description: "AI-powered receipt scanner that splits bills instantly. Scan restaurant receipts, assign items to friends, and calculate who owes what in seconds. Download our iOS app on the App Store.",
  keywords: [
    "AI receipt scanner",
    "bill splitting app",
    "receipt splitting",
    "automatic bill calculator",
    "group expense splitter",
    "restaurant bill splitter",
    "OCR receipt app",
    "iOS bill splitting",
    "split bills with friends",
    "receipt scanner app",
    "Splitra"
  ],
  authors: [{ name: "Splitra Team" }],
  alternates: {
    canonical: "https://splitra.app",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://splitra.app",
    title: "Splitra - AI Receipt Scanner & Bill Splitting App",
    description: "AI-powered receipt scanner that splits bills instantly. Download now on the App Store!",
    siteName: "Splitra",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Splitra App - AI Receipt Scanner for Bill Splitting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Splitra - AI Receipt Scanner & Bill Splitting App",
    description: "AI-powered receipt scanner that splits bills instantly. Download now on the App Store!",
    images: ["/og-image.png"],
    site: "@SplitraApp"
  },
  appleWebApp: {
    capable: true,
    title: "Splitra",
    statusBarStyle: "black-translucent",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Splitra",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "iOS",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "ratingCount": "1"
    },
    "description": "AI-powered receipt scanner that splits bills instantly. Scan restaurant receipts, assign items to friends, and calculate who owes what in seconds.",
    "screenshot": "https://splitra.app/og-image.png",
    "downloadUrl": "https://apps.apple.com/au/app/splitra/id6744559322"
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Splitra",
    "url": "https://splitra.app",
    "logo": "https://splitra.app/icon.png",
    "sameAs": [
      "https://twitter.com/SplitraApp"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Support",
      "url": "https://splitra.app"
    }
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
