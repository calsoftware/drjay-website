import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ExpertisePillars from "../components/ExpertisePillars";
import ResearchScholarship from "../components/ResearchScholarship";
import StrategicReports from "../components/StrategicReports";
import FeaturedWork from "../components/FeaturedWork";
import WeeklyInsights from "../components/WeeklyInsights";
import ContactCta from "../components/ContactCta";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <Hero />
      <ExpertisePillars />
      <ResearchScholarship />
      <StrategicReports />
      <FeaturedWork />
      <WeeklyInsights />
      <ContactCta />
      <Footer />
    </main>
  );
}