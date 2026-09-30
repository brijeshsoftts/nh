import type {
  BookingStatus,
  MaintenanceCategory,
  MaintenancePriority,
} from "@/types/enum.types";

export interface TodaysArrival {
  id: string;
  booking: string;
  customer: string;
  room: string;
  checkIn: string;
  status: BookingStatus;
}

export interface TodaysDeparture {
  id: string;
  booking: string;
  customer: string;
  room: string;
  checkOut: string;
  status: BookingStatus;
}

export interface AttentionItem {
  id: string;
  item: string;
  type: MaintenanceCategory;
  room: string;
  priority: MaintenancePriority;
  assignedTo: string;
}
