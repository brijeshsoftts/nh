import { Plus } from "lucide-react";

import { Header } from "@/components/shared/Header";
import { Button } from "@/components/ui/button";
import { NewStaffModal } from "@/features/staff/components/NewStaffModal";
import { StaffKpi } from "@/features/staff/components/StaffKpi";
import { StaffTable } from "@/features/staff/components/StaffTable";

export default function StaffPage() {
  return (
    <>
      <Header
        title="Staff Management"
        description="Manage your team, roles, and staff activity."
        rightContent={
          <>
            <NewStaffModal>
              <Button>
                <Plus className="h-3.5 w-3.5" />
                <span>Add Staff</span>
              </Button>
            </NewStaffModal>
          </>
        }
      />
      <StaffKpi />
      <StaffTable />
    </>
  );
}
