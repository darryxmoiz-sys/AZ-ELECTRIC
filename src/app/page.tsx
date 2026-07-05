import type { Metadata } from "next";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import CaseStudySection from "@/components/CaseStudySection";
import ServicesGrid from "@/components/ServicesGrid";
import WhyChooseUs from "@/components/WhyChooseUs";
import EmergencyBanner from "@/components/EmergencyBanner";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "AZ Electrical | Certified Electricians in Bognor Regis, West Sussex",
  description: "AZ Electrical — NICEIC certified electricians in Bognor Regis. 20+ years of experience. We answer the phone and turn up on time. Emergency callouts, rewires, garden electrical, consumer units.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <CaseStudySection />
      <ServicesGrid />
      <WhyChooseUs />
      <EmergencyBanner />
      <TestimonialCarousel />
      <CTASection />
    </>
  );
}
