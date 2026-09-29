import type { StatCard } from "@/types/shared.types";

export const dummyMaintenanceKpis: StatCard[] = [
  {
    id: "open-reports",
    title: "Open Reports",
    value: "17",
    description: "Reported, assigned, or in progress",
    icon: "Wrench",
  },
  {
    id: "urgent-high",
    title: "Urgent / High Priority",
    value: "5",
    description: "Open high-priority reports",
    icon: "AlertTriangle",
  },
  {
    id: "unassigned",
    title: "Unassigned",
    value: "4",
    description: "Open reports awaiting assignment",
    icon: "UserRoundX",
  },
  {
    id: "resolved-this-month",
    title: "Resolved This Month",
    value: "31",
    description: "Reports successfully resolved",
    icon: "CircleCheck",
  },
];
