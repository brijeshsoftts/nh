import type { StaffCategory } from "@/types/enum.types";
import type { User } from "@/types/user.types";

export interface StaffItem {
  id: string;
  user: User;
  category: StaffCategory;
  createdAt: string;
}
