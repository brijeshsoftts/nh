import { Plus } from "lucide-react";

import { DataTable } from "@/components/shared/DataTable";
import {
  HousekeepingBadge,
  OccupancyBadge,
  StatusBadge,
} from "@/components/shared/EnumBadges";
import { Header } from "@/components/shared/Header";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { ColumnDef } from "@/types/shared.types";

import { dummyRoomItems } from "../rooms.mock";
import type { RoomItem } from "../rooms.types";

import { RoomKpi } from "./RoomKpi";

function RoomTable() {
  const columns: ColumnDef<RoomItem>[] = [
    {
      key: "room",
      header: "Room",
      cell: (item) => (
        <div>
          <p>{item.name}</p>
          <p className="text-sm text-muted-foreground">#{item.roomNumber}</p>
        </div>
      ),
    },

    { key: "roomType", header: "Room Type" },
    { key: "floor", header: "Floor" },
    {
      key: "occupancy",
      header: "Occupancy",
      cell: (item) => <OccupancyBadge value={item.occupancy} />,
    },
    {
      key: "housekeeping",
      header: "Housekeeping",
      cell: (item) => <HousekeepingBadge value={item.housekeeping} />,
    },
    {
      key: "isActive",
      header: "Status",
      cell: (item) => <StatusBadge value={item.isActive} />,
    },
    {
      key: "action",
      header: "Action",
      align: "center",
      cell: (item) => (
        <button onClick={() => console.log(item.roomNumber)}>Action</button>
      ),
    },
  ];

  return (
    <>
      <DataTable
        title="Rooms"
        description="Manage rooms."
        data={dummyRoomItems}
        columns={columns}
        errorMessage="Something went wrong while loading customers."
        emptyMessage="Please add customers to your hotel."
      />
    </>
  );
}

export function ManagementRoom() {
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
      <Tabs defaultValue="room" className="w-full">
        <TabsList className={"rounded-md"}>
          <TabsTrigger value="room">Rooms</TabsTrigger>
          <TabsTrigger value="room-types">Room Types</TabsTrigger>
          <TabsTrigger value="amenities">Amenities</TabsTrigger>
        </TabsList>

        {/* 1. ROOM OVERVIEW TAB */}
        <TabsContent
          value="room"
          className="animate-in space-y-6 duration-500 fade-in-50"
        >
          <RoomTable />
        </TabsContent>

        {/* 2. ROOM TYPES TAB */}
        <TabsContent
          value="room-types"
          className="animate-in duration-500 fade-in-50"
        >
          Room Types
        </TabsContent>

        {/* 3. AMENITIES TAB */}
        <TabsContent
          value="amenities"
          className="animate-in duration-500 fade-in-50"
        >
          Amenities
        </TabsContent>
      </Tabs>
    </>
  );
}
