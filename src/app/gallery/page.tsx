import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import GalleryGrid from "@/components/GalleryGrid";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Project Gallery — AZ Electrical",
  description: "Browse completed electrical projects by AZ Electrical across Bognor Regis and West Sussex — garden installs, rewires, consumer units and more.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        label="Recent Projects"
        title="See the Standard."
        subtitle="Every project left clean, tested and certified. Browse recent electrical work across Bognor Regis and West Sussex."
      />
      <GalleryGrid />
      <CTASection />
    </>
  );
}
