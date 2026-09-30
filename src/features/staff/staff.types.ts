import type { StaffCategory } from "@/types/enum.types";

export interface StaffItem {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  category: StaffCategory;
  isActive: boolean;
  createdAt: string;
  lastLogin: string;
}

export interface StaffDetail extends StaffItem {
  address: string;
  fatherName: string;
  motherName: string;
  idProofNumber: string;
  qualification: string;
  experience: string;
  emergencyContact: string;
}
