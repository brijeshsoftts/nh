import type { StatCard } from "@/types/shared.types";

export const dummyNotificationKpis: StatCard[] = [
  {
    id: "unread",
    title: "Unread",
    value: "18",
    description: "Notifications awaiting review",
    icon: "Bell",
  },
  {
    id: "today",
    title: "Today",
    value: "27",
    description: "Notifications received today",
    icon: "BellRing",
  },
  {
    id: "booking-related",
    title: "Booking Related",
    value: "42",
    description: "Booking notifications · Last 7 days",
    icon: "CalendarCheck",
  },
  {
    id: "maintenance-related",
    title: "Maintenance Related",
    value: "16",
    description: "Maintenance notifications · Last 7 days",
    icon: "Wrench",
  },
];
