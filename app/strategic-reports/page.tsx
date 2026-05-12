import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import StrategicReportsPage from "../../components/StrategicReportsPage";

export const metadata = {
  title: "Strategic Reports",
  description:
    "Strategic reports and applied transformation intelligence: anonymised executive insights across AI strategy, organisational systems, digital transformation and capability development.",
  alternates: { canonical: "https://olajide.today/strategic-reports" },
  openGraph: {
    title: "Strategic Reports | Dr Olajide Jolugbo",
    description:
      "Strategic intelligence reports on AI strategy, digital transformation, transformation governance and organisational capability — applied practitioner insights.",
    url: "https://olajide.today/strategic-reports",
    type: "website",
  },
};

export default function StrategicReportsRoute() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <StrategicReportsPage />
      <Footer />
    </main>
  );
}
