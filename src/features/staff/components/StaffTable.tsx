import { EllipsisVertical } from "lucide-react";

import { DataTable } from "@/components/shared/DataTable";
import { StatusBadge } from "@/components/shared/EnumBadges";
import { IconBtn } from "@/components/shared/IconBtn";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { formatDate } from "@/lib/formatDate";
import type { ColumnDef } from "@/types/shared.types";

import { dummyStaffItems } from "../staff.mock";
import type { StaffItem } from "../staff.types";

const columns: ColumnDef<StaffItem>[] = [
  {
    key: "staff",
    header: "Staff",
    cell: (row) => (
      <div>
        <p>{row.staff}</p>
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
    cell: () => <ActionDropdownMenu />,
  },
];

export function StaffTable() {
  return (
    <DataTable
      title="Staff"
      description="Manage your team, roles, and staff activity."
      data={dummyStaffItems}
      columns={columns}
      pagination={{
        page: 20,
        limit: 20,
        total: 200,
      }}
    />
  );
}

function ActionDropdownMenu() {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <IconBtn size={"sm"} variant={"ghost"}>
            <EllipsisVertical />
          </IconBtn>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end">
          <DropdownMenuItem>View</DropdownMenuItem>
          <DropdownMenuItem>Edit</DropdownMenuItem>
          <DropdownMenuItem className={"text-destructive"}>
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
