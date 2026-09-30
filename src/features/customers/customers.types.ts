export interface CustomerItem {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  totalBookings: number;
  totalSpend: number;
  isActive: boolean;
}

export interface CustomerDetail extends CustomerItem {
  address: string;
  idProofNumber: string;
}
