import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ServicesDetail from "@/components/ServicesDetail";
import EmergencyBanner from "@/components/EmergencyBanner";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Electrical Services — Bognor Regis & West Sussex",
  description: "Full range of electrical services in Bognor Regis — rewires, consumer units, garden electrical, commercial lighting, appliance installs and 24/7 emergency callouts.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="What We Do"
        title="Every Job Done Right."
        subtitle="From a single socket to a full rewire — AZ Electrical covers domestic, commercial and bespoke electrical work across Bognor Regis and West Sussex."
      />
      <ServicesDetail />
      <EmergencyBanner />
      <CTASection />
    </>
  );
}
