import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ResearchScholarship from "../../components/ResearchScholarship";

export const metadata = {
  title: "Research & Scholarship",
  description:
    "Scholarly research spanning AI-mediated learning, distributed cognition, assessment systems, apprenticeship ecosystems and the scholarship of teaching and learning — research and thought leadership from Dr Olajide Jolugbo.",
  alternates: { canonical: "https://olajide.today/research" },
  openGraph: {
    title: "Research & Scholarship | Dr Olajide Jolugbo",
    description:
      "Research and thought leadership spanning AI strategy, digital transformation, learning systems, assessment and organisational intelligence.",
    url: "https://olajide.today/research",
    type: "website",
  },
};

export default function Research() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <ResearchScholarship />
      <Footer />
    </main>
  );
}