import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About Chris — AZ Electrical, Bognor Regis",
  description: "Meet Chris, the electrician behind AZ Electrical. 20+ years of experience, NICEIC certified, and known above all else for turning up when he says he will.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About AZ Electrical"
        title="The Electrician Who Actually Shows Up."
        subtitle="20+ years of experience. A phone that gets answered. A van that arrives on time. Chris built AZ Electrical on one promise — do the job properly, every time."
      />
      <AboutSection />
      <CTASection />
    </>
  );
}
