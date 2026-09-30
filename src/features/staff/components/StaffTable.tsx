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
import { formatDate } from "@/lib/formatDate";
import type { ColumnDef } from "@/types/shared.types";

import { useDeleteStaff } from "../hooks/useDeleteStaff";
import { useStaffList } from "../hooks/useStaffList";
import { dummyStaffItems } from "../staff.mock";
import type { StaffItem } from "../staff.types";

import { UpdateStaffModal } from "./UpdateStaffModal";
import { ViewStaffSheet } from "./ViewStaffSheet";

const columns: ColumnDef<StaffItem>[] = [
  {
    key: "staff",
    header: "Staff",
    cell: (row) => (
      <div>
        <p>{row.fullName}</p>
        <p className="text-xs text-muted-foreground">{row.email}</p>
      </div>
    ),
  },
  { key: "phone", header: "Phone" },
  {
    key: "category",
    header: "Category",
    cell: (row) => row.category[0] + row.category.slice(1).toLowerCase(),
  },
  {
    key: "isActive",
    header: "Status",
    cell: (row) => <StatusBadge value={row.isActive} />,
  },
  {
    key: "createdAt",
    header: "Created At",
    cell: (row) => formatDate(row.createdAt),
  },
  {
    key: "lastLogin",
    header: "Last Login",
    cell: (row) => formatDate(row.lastLogin),
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
  {
    key: "category",
    label: "Category",
    options: [
      {
        label: "Receptionist",
        value: "Receptionist",
      },
      {
        label: "Housekeeper",
        value: "Housekeeper",
      },
    ],
  },
];

export function StaffTable() {
  const [query, setQuery] = useState("");
  const [filterValues, setFilterValues] = useState<Record<string, string>>({});
  const [page, setPage] = useState(1);
  const search = useDebounce(query, 500);
  const { pagination, isLoading, refetch } = useStaffList({
    page,
    search,
    ...filterValues,
  });

  return (
    <DataTable
      title="Staff"
      description="Manage your team, roles, and staff activity."
      data={dummyStaffItems}
      columns={columns}
      filters={filters}
      onFilterChange={(key, value) => {
        setFilterValues((prev) => ({ ...prev, [key]: value }));
      }}
      pagination={pagination}
      onPageChange={setPage}
      onSearchChange={setQuery}
      isLoading={isLoading}
      errorMessage="Something went wrong while loading staff."
      emptyMessage="Please add staff to your hotel."
      refetch={refetch}
    />
  );
}

function ActionDropdownMenu({ id }: { id: string }) {
  const [isViewModal, setIsViewModal] = useState(false);
  const [isUpdateModal, setIsUpdateModal] = useState(false);
  const { handleDelete, isDeleting } = useDeleteStaff();

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
        <ViewStaffSheet
          open={isViewModal}
          onOpenChange={setIsViewModal}
          id={id}
        />
      )}

      {isUpdateModal && (
        <UpdateStaffModal
          open={isUpdateModal}
          onOpenChange={setIsUpdateModal}
          id={id}
        />
      )}
    </>
  );
}
