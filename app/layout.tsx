import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://olajide.today"),
  title: {
    default: "Dr Olajide Jolugbo | AI Strategy, Digital Transformation & Organisational Intelligence",
    template: "%s | Dr Olajide Jolugbo",
  },
  description:
    "Dr Olajide Jolugbo — research-informed systems strategist and transformation practitioner. Specialist in AI strategy, digital transformation, business analysis, organisational intelligence and capability ecosystem design.",
  keywords: [
    "AI strategy",
    "AI in business analysis",
    "digital transformation",
    "business analysis",
    "organisational intelligence",
    "systems thinking",
    "transformation governance",
    "strategic analysis",
    "data and decision intelligence",
    "research and thought leadership",
    "artificial intelligence strategy",
    "capability ecosystem design",
    "learning systems architecture",
    "apprenticeship ecosystems",
    "cyber resilience",
    "strategic reports",
    "Dr Olajide Jolugbo",
  ],
  authors: [{ name: "Dr Olajide Jolugbo", url: "https://olajide.today" }],
  creator: "Dr Olajide Jolugbo",
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
    type: "website",
    locale: "en_GB",
    url: "https://olajide.today",
    siteName: "Dr Olajide Jolugbo",
    title: "Dr Olajide Jolugbo | AI Strategy, Digital Transformation & Organisational Intelligence",
    description:
      "Research-informed systems strategist and transformation practitioner specialising in AI strategy, digital transformation, business analysis and organisational capability ecosystem design.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr Olajide Jolugbo | AI Strategy & Systems Transformation",
    description:
      "Research-informed systems strategist specialising in AI strategy, digital transformation, business analysis and organisational intelligence.",
  },
  alternates: {
    canonical: "https://olajide.today",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Dr Olajide Jolugbo",
  jobTitle: "Systems Strategist and Transformation Practitioner",
  url: "https://olajide.today",
  sameAs: ["https://www.linkedin.com/in/olajidejolugbo"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "London",
    addressCountry: "GB",
  },
  knowsAbout: [
    "Artificial Intelligence Strategy",
    "Digital Transformation",
    "Business Analysis",
    "Organisational Intelligence",
    "Systems Thinking",
    "Data Science",
    "Learning Systems Architecture",
    "Capability Ecosystem Design",
    "Apprenticeship and Workforce Ecosystems",
    "Cyber Resilience and Digital Trust",
    "Assessment and Feedback Systems",
    "Scholarship of Teaching and Learning",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Dr Olajide Jolugbo",
  url: "https://olajide.today",
  description:
    "Research-informed systems strategist and transformation practitioner specialising in AI strategy, digital transformation and organisational intelligence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-950" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
