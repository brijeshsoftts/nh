import type { HousekeepingStatus, OccupancyStatus } from "@/types/enum.types";

export interface RoomItem {
  id: string;
  roomNumber: string;
  name?: string;
  floor: number;
  occupancyStatus: OccupancyStatus;
  housekeepingStatus: HousekeepingStatus;
  isActive: boolean;
  roomType: { id: string; name: string; capacity: number; basePrice: number };
}

export interface RoomTypeItem {
  id: string;
  name: string;
  capacity: number;
  basePrice: number;
  isActive: boolean;
  roomCount: number;
}

export interface AmenityItem {
  id: string;
  name: string;
  icon?: string;
  isActive: boolean;
  roomTypeCount: number;
}
