import { Plus } from "lucide-react";

import { Header } from "@/components/shared/Header";
import { Button } from "@/components/ui/button";
import { MaintenanceKpi } from "@/features/maintenance/components/MaintenanceKpi";

export default function MaintenancePage() {
  return (
    <>
      <Header
        title="Maintenance Reports"
        description="Track room issues, priorities, assignments, and resolutions."
        rightContent={
          <>
            <Button>
              <Plus className="h-4 w-4" />
              <span>New Report</span>
            </Button>
          </>
        }
      />
      <MaintenanceKpi />
    </>
  );
}
