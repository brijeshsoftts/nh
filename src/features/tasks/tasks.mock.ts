import type { StatCard } from "@/types/shared.types";

export const dummyHousekeepingKpis: StatCard[] = [
  {
    id: "pending-today",
    title: "Pending Today",
    value: "14",
    description: "Tasks scheduled for today",
    icon: "ClipboardList",
  },
  {
    id: "in-progress",
    title: "In Progress",
    value: "7",
    description: "Tasks currently being handled",
    icon: "LoaderCircle",
  },
  {
    id: "completed-today",
    title: "Completed Today",
    value: "23",
    description: "Tasks completed today",
    icon: "CircleCheck",
  },
  {
    id: "dirty-rooms",
    title: "Dirty Rooms",
    value: "9",
    description: "Rooms requiring housekeeping",
    icon: "BedDouble",
  },
];
