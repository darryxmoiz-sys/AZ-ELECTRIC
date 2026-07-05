import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Contact AZ Electrical — Get a Free Quote",
  description: "Request a free quote from AZ Electrical. Call +44 7903 087501 or email azelectrical123@gmail.com. Based in Bognor Regis, covering West Sussex.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Get In Touch"
        title="Request a Free Quote."
        subtitle="No obligation, no faff — just a fair price and an honest answer. Call, email or fill in the form and Chris will get back to you the same day."
      />
      <ContactSection />
    </>
  );
}
