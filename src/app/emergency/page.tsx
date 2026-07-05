import type { Metadata } from "next";
import EmergencyPage from "@/components/EmergencyPage";

export const metadata: Metadata = {
  title: "24/7 Emergency Electrician — Bognor Regis | AZ Electrical",
  description: "Emergency electrician in Bognor Regis available 24 hours a day. Power cuts, sparking sockets, tripped fuses — call Chris now: +44 7903 087501.",
};

export default function Emergency() {
  return <EmergencyPage />;
}
