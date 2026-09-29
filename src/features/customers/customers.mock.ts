import type { StatCard } from "@/types/shared.types";

export const dummyCustomerKpis: StatCard[] = [
  {
    id: "total-customers",
    title: "Total Customers",
    value: "1,248",
    description: "Registered customers",
    icon: "Users",
  },
  {
    id: "new-this-month",
    title: "New This Month",
    value: "86",
    description: "Customers joined this month",
    icon: "UserPlus",
  },
  {
    id: "repeat-customers",
    title: "Repeat Customers",
    value: "342",
    description: "More than 1 completed booking",
    icon: "Repeat2",
  },
  {
    id: "active-stays",
    title: "Active Stays",
    value: "74",
    description: "Customers currently checked in",
    icon: "Hotel",
  },
];
