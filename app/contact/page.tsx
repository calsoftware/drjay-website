import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ContactCta from "../../components/ContactCta";

export const metadata = {
  title: "Contact & Strategic Engagement",
  description:
    "Available for strategic advisory, AI strategy engagements, research collaboration, organisational transformation and capability architecture. Initial enquiries welcome.",
  alternates: { canonical: "https://olajide.today/contact" },
  openGraph: {
    title: "Contact Dr Olajide Jolugbo | Strategic Engagement",
    description:
      "Available for strategic advisory, AI strategy, research collaboration and organisational transformation engagements. London, United Kingdom.",
    url: "https://olajide.today/contact",
    type: "website",
  },
};

export default function Contact() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="px-6 pt-10 pb-8 sm:px-10 lg:px-12 lg:pt-14 lg:pb-10 border-b border-slate-800/50">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-start">

            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-cyan-300/90 font-medium">
                Contact &amp; Strategic Engagement
              </p>
              <h1 className="mt-4 text-2xl font-bold tracking-normal text-slate-100 sm:text-3xl lg:text-3xl leading-snug">
                Strategic collaboration, research advisory and systems transformation.
              </h1>
            </div>

            <div className="text-base leading-7 text-slate-400 sm:text-lg sm:leading-8 lg:pt-1">
              <p>
                Available for strategic advisory, research collaboration, organisational transformation initiatives and capability architecture engagements across education, workforce and enterprise systems.
              </p>
            </div>

          </div>
        </div>
      </section>

      <ContactCta />
      <Footer />
    </main>
  );
}
