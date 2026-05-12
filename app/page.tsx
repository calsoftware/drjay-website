import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

export const metadata = {
  title: {
    absolute:
      "Dr Olajide Jolugbo | AI Strategy, Digital Transformation & Organisational Intelligence",
  },
  description:
    "Research-informed systems strategist and transformation practitioner. Advising boards and executive teams on AI strategy, digital transformation, business analysis and organisational capability ecosystem design.",
  alternates: { canonical: "https://olajide.today" },
  openGraph: {
    title: "Dr Olajide Jolugbo | AI Strategy, Digital Transformation & Organisational Intelligence",
    description:
      "Research-informed systems strategist advising on AI strategy, digital transformation, business analysis and organisational intelligence.",
    url: "https://olajide.today",
    type: "website",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <Hero />
      <Footer />
    </main>
  );
}