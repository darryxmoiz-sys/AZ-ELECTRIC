import type { Metadata } from "next";
import GardenPage from "@/components/GardenPage";

export const metadata: Metadata = {
  title: "Bespoke Garden & Outdoor Electrical — West Sussex | AZ Electrical",
  description: "Premium bespoke garden and outdoor electrical installations across West Sussex. Garden kitchens, gym power, outdoor lighting, shed power — designed and installed by AZ Electrical.",
};

export default function GardenOutdoor() {
  return <GardenPage />;
}
