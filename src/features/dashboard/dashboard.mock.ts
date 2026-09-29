import type { StatCard } from "@/types/shared.types";

export const dummyManagementKpis: StatCard[] = [
  {
    id: "occupancy",
    title: "Occupancy",
    value: "78.4%",
    description: "76 of 97 active rooms occupied",
    icon: "BedDouble",
  },
  {
    id: "check-ins-outs",
    title: "Today's Check-ins / Check-outs",
    value: "18 / 14",
    description: "18 arrivals · 14 departures",
    icon: "ArrowRightLeft",
  },
  {
    id: "revenue",
    title: "Revenue",
    value: "₹2.84L",
    description: "₹18,450 today · ₹2.84L this month",
    icon: "IndianRupee",
  },
  {
    id: "open-maintenance",
    title: "Open Maintenance",
    value: "17",
    description: "5 urgent · 12 high/normal priority",
    icon: "Wrench",
  },
];
