import { Plus } from "lucide-react";

import { Header } from "@/components/shared/Header";
import { Button } from "@/components/ui/button";
import { StaffKpi } from "@/features/staff/components/StaffKpi";

export default function StaffPage() {
  return (
    <>
      <Header
        title="Staff Management"
        description="Manage your team, roles, and staff activity."
        rightContent={
          <>
            <Button>
              <Plus className="h-3.5 w-3.5" />
              <span>Add Staff</span>
            </Button>
          </>
        }
      />
      <StaffKpi />
    </>
  );
}
