import type { StaffCategory, UserRole } from "./enum.types";

export type User = {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  role: UserRole;
  isActive: boolean;
  createdAt: string;
  lastLoginAt?: string;
  profileImage?: { id: string; url: string; altText?: string };
  category?: StaffCategory;
};
