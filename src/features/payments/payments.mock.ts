import type { StatCard } from "@/types/shared.types";

export const dummyPaymentKpis: StatCard[] = [
  {
    id: "collected-this-month",
    title: "Collected This Month",
    value: "₹8.42L",
    description: "Completed payments",
    icon: "IndianRupee",
  },
  {
    id: "outstanding",
    title: "Outstanding",
    value: "₹1.76L",
    description: "Unpaid and partially paid invoices",
    icon: "ReceiptText",
  },
  {
    id: "pending-failed",
    title: "Pending / Failed",
    value: "11",
    description: "Payments requiring attention",
    icon: "CircleAlert",
  },
  {
    id: "refunded-this-month",
    title: "Refunded This Month",
    value: "₹24,500",
    description: "Total refunded amount",
    icon: "RotateCcw",
  },
];
