import { Plus } from "lucide-react";

import { Header } from "@/components/shared/Header";
import { Button } from "@/components/ui/button";
import { ManagementKpi } from "@/features/dashboard/components/ManagementKpi";
import { useAuth } from "@/hooks/useAuth";

export function ManagementPage() {
  const { user } = useAuth();
  return (
    <>
      <Header
        eyebrow={`Good Morning, ${user?.fullName}`}
        title="Dashboard"
        description="A clear view of your hotel's operations and key activity."
        rightContent={
          <>
            <Button>
              <Plus className="h-4 w-4" />
              <span>New Room</span>
            </Button>
          </>
        }
      />
      <ManagementKpi />
    </>
  );
}
