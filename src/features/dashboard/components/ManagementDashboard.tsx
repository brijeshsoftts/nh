import { DataTable } from "@/components/shared/DataTable";
import {
  BookingBadge,
  MaintenanceCategoryBadge,
  MaintenancePriorityBadge,
} from "@/components/shared/EnumBadges";
import { Header } from "@/components/shared/Header";
import { useAuth } from "@/hooks/useAuth";
import { formatDate } from "@/lib/formatDate";
import type { ColumnDef } from "@/types/shared.types";

import {
  dummyAttentionItems,
  dummyTodaysArrivals,
  dummyTodaysDepartures,
} from "../dashboard.mock";
import type {
  AttentionItem,
  TodaysArrival,
  TodaysDeparture,
} from "../dashboard.types";

import { ManagementKpi } from "./ManagementKpi";

function TodaysArrivals() {
  const columns: ColumnDef<TodaysArrival>[] = [
    {
      key: "booking",
      header: "Booking",
      accessorFn: (item) => item.booking,
    },
    {
      key: "customer",
      header: "Customer",
      accessorFn: (item) => item.customer,
    },
    {
      key: "room",
      header: "Room",
      accessorFn: (item) => item.room,
    },
    {
      key: "checkIn",
      header: "Check In",
      accessorFn: (item) => item.checkIn,
    },
    {
      key: "status",
      header: "Status",
      cell: (row) => <BookingBadge value={row.status} />,
    },
  ];

  return (
    <DataTable
      title="Today's Arrivals"
      description="Guests scheduled to check in today"
      data={dummyTodaysArrivals}
      columns={columns}
      showSearch={false}
      showPagination={false}
    />
  );
}

function TodaysDepartures() {
  const columns: ColumnDef<TodaysDeparture>[] = [
    {
      key: "booking",
      header: "Booking",
      accessorFn: (item) => item.booking,
    },
    {
      key: "customer",
      header: "Customer",
      accessorFn: (item) => item.customer,
    },
    {
      key: "room",
      header: "Room",
      accessorFn: (item) => item.room,
    },
    {
      key: "checkOut",
      header: "Check Out",
      cell: (row) => formatDate(row.checkOut),
    },
    {
      key: "status",
      header: "Status",
      cell: (row) => <BookingBadge value={row.status} />,
    },
  ];

  return (
    <DataTable
      title="Today's Departures"
      description="Guests scheduled to check out today"
      data={dummyTodaysDepartures}
      columns={columns}
      showSearch={false}
      showPagination={false}
    />
  );
}

function AttentionItems() {
  const columns: ColumnDef<AttentionItem>[] = [
    {
      key: "item",
      header: "Item",
    },
    {
      key: "type",
      header: "Type",
      cell: (row) => <MaintenanceCategoryBadge value={row.type} />,
    },
    {
      key: "room",
      header: "Room",
    },
    {
      key: "priority",
      header: "Priority",
      cell: (row) => <MaintenancePriorityBadge value={row.priority} />,
    },
    {
      key: "assignedTo",
      header: "Assigned To",
    },
  ];

  return (
    <DataTable
      title="Needs Attention"
      description="Maintenance requests and issues"
      data={dummyAttentionItems}
      columns={columns}
      showSearch={false}
      showPagination={false}
    />
  );
}

export function ManagementDashboard() {
  const { user } = useAuth();

  return (
    <>
      <Header
        eyebrow={`Good Morning, ${user?.fullName}`}
        title="Dashboard"
        description="A clear view of your hotel's operations and key activity."
      />
      <ManagementKpi />
      <div className="grid gap-6 lg:grid-cols-2">
        <TodaysArrivals />
        <TodaysDepartures />
      </div>
      <AttentionItems />
    </>
  );
}
