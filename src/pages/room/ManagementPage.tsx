import { Plus } from "lucide-react";

import { Header } from "@/components/shared/Header";
import { Button } from "@/components/ui/button";
import { RoomKpi } from "@/features/rooms/components/RoomKpi";

export function ManagementPage() {
  return (
    <>
      <Header
        title="Room Management"
        description="Manage rooms, types, amenities, pricing, and availability."
        rightContent={
          <>
            <Button>
              <Plus className="h-4 w-4" />
              <span>New Room</span>
            </Button>
          </>
        }
      />
      <RoomKpi />
    </>
  );
}
