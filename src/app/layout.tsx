import type { Metadata, Viewport } from "next";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { siteConfig } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Student FTC Robotics Research`,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.founder }],
  creator: siteConfig.founder,
  category: "education",
  classification: "FTC robotics research notes",
  keywords: [
    "BeyondBotz",
    "FTC robotics",
    "FIRST Tech Challenge",
    "FTC robotics research",
    "autonomous benchmarking",
    "robotics analytics",
    "FTC data analysis",
    "robotics mentorship",
    "STEM accessibility",
    "student FTC research notes"
  ],
  alternates: {
    canonical: siteConfig.url
  },
  openGraph: {
    title: `${siteConfig.name} | Student FTC Robotics Research`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/beyondbotz-research-hero.png",
        width: 1536,
        height: 864,
        alt: "BeyondBotz robotics research analytics visual."
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Student FTC Robotics Research`,
    description: siteConfig.description,
    images: ["/images/beyondbotz-research-hero.png"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export const viewport: Viewport = {
  themeColor: "#05060a",
  colorScheme: "dark"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ResearchProject",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    founder: {
      "@type": "Person",
      name: siteConfig.founder
    },
    sameAs: ["https://github.com/Shyha13/BeyondBotz"],
    about: [
      "FTC match analysis",
      "Autonomous benchmarking",
      "Robotics mentorship",
      "FTC team resources"
    ]
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-signal-cyan focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-carbon-950"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
