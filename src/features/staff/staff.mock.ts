import type { StatCard } from "@/types/shared.types";

export const dummyStaffKpis: StatCard[] = [
  {
    id: "total-staff",
    title: "Total Staff",
    value: "32",
    description: "Active staff members",
    icon: "Users",
  },
  {
    id: "receptionists",
    title: "Receptionists",
    value: "8",
    description: "Active · Reception",
    icon: "ConciergeBell",
  },
  {
    id: "housekeepers",
    title: "Housekeepers",
    value: "12",
    description: "Active · Housekeeping",
    icon: "Sparkles",
  },
  {
    id: "inactive-staff",
    title: "Inactive Staff",
    value: "4",
    description: "Currently inactive",
    icon: "UserX",
  },
];
