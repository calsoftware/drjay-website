import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import InsightsPage from "../../components/InsightsPage";

export const metadata = {
  title: "Insights",
  description:
    "Research-informed reflections on AI in business analysis, digital transformation, organisational intelligence, systems thinking and strategic transformation — from Dr Olajide Jolugbo.",
  alternates: { canonical: "https://olajide.today/insights" },
  openGraph: {
    title: "Insights | Dr Olajide Jolugbo",
    description:
      "Business analysis insights, AI strategy reflections and research-informed commentary on digital transformation and organisational intelligence.",
    url: "https://olajide.today/insights",
    type: "website",
  },
};

export default function InsightsRoute() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <InsightsPage />
      <Footer />
    </main>
  );
}
