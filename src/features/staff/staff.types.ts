import type { StaffCategory } from "@/types/enum.types";

export interface StaffItem {
  id: string;
  staff: string;
  email: string;
  phone: string;
  category: StaffCategory;
  isActive: boolean;
  createdAt: string;
  lastLogin: string;
}
