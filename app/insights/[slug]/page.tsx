import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import InsightDetail from "../../../components/InsightDetail";
import { getInsightBySlug, getAllInsights } from "../../../lib/insightsData";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const insights = getAllInsights();
  return insights.map((insight) => ({
    slug: insight.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const insight = getInsightBySlug(params.slug);
  if (!insight) return {};

  const url = `https://olajide.today/insights/${insight.slug}`;

  return {
    title: insight.title,
    description: insight.synopsis,
    alternates: { canonical: url },
    openGraph: {
      title: insight.title,
      description: insight.synopsis,
      url,
      type: "article",
      publishedTime: insight.date,
      authors: [insight.author],
      tags: insight.themes,
    },
    twitter: {
      card: "summary_large_image",
      title: insight.title,
      description: insight.synopsis,
    },
  };
}

export default function InsightPage({ params }: { params: { slug: string } }) {
  const insight = getInsightBySlug(params.slug);

  if (!insight) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: insight.title,
    description: insight.synopsis,
    author: {
      "@type": "Person",
      name: insight.author,
      url: "https://olajide.today",
    },
    publisher: {
      "@type": "Person",
      name: "Dr Olajide Jolugbo",
      url: "https://olajide.today",
    },
    datePublished: insight.date,
    url: `https://olajide.today/insights/${insight.slug}`,
    keywords: insight.themes.join(", "),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://olajide.today/insights/${insight.slug}`,
    },
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Navbar />
      <InsightDetail insight={insight} />
      <Footer />
    </main>
  );
}
