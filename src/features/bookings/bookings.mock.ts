import type { StatCard } from "@/types/shared.types";

export const dummyBookingKpis: StatCard[] = [
  {
    id: "pending-bookings",
    title: "Pending",
    value: "12",
    description: "Bookings awaiting confirmation",
    icon: "Clock3",
  },
  {
    id: "confirmed-upcoming",
    title: "Confirmed Upcoming",
    value: "34",
    description: "Confirmed with future check-in",
    icon: "CalendarCheck",
  },
  {
    id: "checked-in",
    title: "Checked In",
    value: "28",
    description: "Guests currently in house",
    icon: "LogIn",
  },
  {
    id: "cancelled-no-show",
    title: "Cancelled / No-show",
    value: "9",
    description: "This month",
    icon: "CalendarX",
  },
];
