import { EllipsisVertical } from "lucide-react";
import { useState } from "react";

import { DataTable } from "@/components/shared/DataTable";
import { StatusBadge } from "@/components/shared/EnumBadges";
import { IconBtn } from "@/components/shared/IconBtn";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useDebounce } from "@/hooks/useDebounce";
import type { ColumnDef } from "@/types/shared.types";

import { dummyCustomerItems } from "../customers.mock";
import type { CustomerItem } from "../customers.types";
import { useCustomerList } from "../hooks/useCustomerList";
import { useDeleteCustomer } from "../hooks/useDeleteCustomer";

import { UpdateCustomerModal } from "./UpdateCustomerModal";
import { ViewCustomerSheet } from "./ViewCustomerSheet";

const columns: ColumnDef<CustomerItem>[] = [
  { key: "fullName", header: "Full Name" },
  { key: "email", header: "Email" },
  { key: "phone", header: "Phone" },
  { key: "totalBookings", header: "Total Bookings" },
  {
    key: "totalSpend",
    header: "Total Spend",
    cell: (row) => <> ₹{row.totalSpend.toLocaleString()} </>,
  },
  {
    key: "isActive",
    header: "Status",
    cell: (row) => <StatusBadge value={row.isActive} />,
  },
  {
    key: "action",
    header: "Action",
    align: "center",
    cell: (row) => <ActionDropdownMenu id={row.id} />,
  },
];

const filters = [
  {
    key: "status",
    label: "Status",
    options: [
      {
        label: "Active",
        value: "Active",
      },
      {
        label: "Inactive",
        value: "Inactive",
      },
    ],
  },
];

export function CustomerTable() {
  const [query, setQuery] = useState("");
  const [filterValues, setFilterValues] = useState<Record<string, string>>({});
  const [page, setPage] = useState(1);
  const search = useDebounce(query, 500);
  const { pagination, isLoading, refetch } = useCustomerList({
    page,
    search,
    ...filterValues,
  });

  return (
    <DataTable
      title="Customers"
      description="Manage your customers."
      data={dummyCustomerItems}
      columns={columns}
      filters={filters}
      onFilterChange={(key, value) => {
        setFilterValues((prev) => ({ ...prev, [key]: value }));
      }}
      pagination={pagination}
      onPageChange={setPage}
      onSearchChange={setQuery}
      isLoading={isLoading}
      errorMessage="Something went wrong while loading customers."
      emptyMessage="Please add customers to your hotel."
      refetch={refetch}
    />
  );
}

function ActionDropdownMenu({ id }: { id: string }) {
  const [isViewModal, setIsViewModal] = useState(false);
  const [isUpdateModal, setIsUpdateModal] = useState(false);
  const { handleDelete, isDeleting } = useDeleteCustomer();

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <IconBtn size={"sm"} variant={"ghost"}>
            <EllipsisVertical />
          </IconBtn>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end">
          <DropdownMenuItem
            onClick={() => setIsViewModal(true)}
            disabled={isDeleting}
          >
            View
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => setIsUpdateModal(true)}
            disabled={isDeleting}
          >
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem
            className={"text-destructive"}
            onClick={() => handleDelete(id)}
            disabled={isDeleting}
          >
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {isViewModal && (
        <ViewCustomerSheet
          open={isViewModal}
          onOpenChange={setIsViewModal}
          id={id}
        />
      )}

      {isUpdateModal && (
        <UpdateCustomerModal
          open={isUpdateModal}
          onOpenChange={setIsUpdateModal}
          id={id}
        />
      )}
    </>
  );
}
