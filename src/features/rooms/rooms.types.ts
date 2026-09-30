import type { HousekeepingStatus, OccupancyStatus } from "@/types/enum.types";

export interface RoomItem {
  id: string;
  roomNumber: string;
  name: string;
  roomType: string;
  floor: number;
  occupancy: OccupancyStatus;
  housekeeping: HousekeepingStatus;
  isActive: boolean;
}
