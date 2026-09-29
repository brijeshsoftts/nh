export type ID = string;
export type ISODate = string;

export type UserRole = "ADMIN" | "MANAGER" | "STAFF" | "CUSTOMER";
export type StaffCategory = "RECEPTIONIST" | "HOUSEKEEPER";
export type OccupancyStatus =
  "VACANT" | "RESERVED" | "OCCUPIED" | "OUT_OF_ORDER";
export type HousekeepingStatus = "CLEAN" | "DIRTY" | "CLEANING";
export type BookingStatus =
  | "PENDING"
  | "CONFIRMED"
  | "CHECKED_IN"
  | "CHECKED_OUT"
  | "CANCELLED"
  | "NO_SHOW";
export type TaskType = "CLEANING" | "DEEP_CLEAN" | "TURNDOWN";
export type TaskStatus = "PENDING" | "IN_PROGRESS" | "COMPLETED";
export type InvoiceStatus = "UNPAID" | "PARTIALLY_PAID" | "PAID" | "REFUNDED";
export type PaymentMethod = "CASH" | "CARD" | "UPI" | "BANK_TRANSFER";
export type PaymentStatus = "PENDING" | "COMPLETED" | "FAILED" | "REFUNDED";
export type MaintenanceCategory =
  "ELECTRICAL" | "PLUMBING" | "HVAC" | "FURNITURE" | "APPLIANCE" | "OTHER";
export type MaintenancePriority = "LOW" | "MEDIUM" | "HIGH" | "URGENT";
export type MaintenanceStatus =
  "REPORTED" | "ASSIGNED" | "IN_PROGRESS" | "COMPLETED" | "RESOLVED";
export type NotificationType =
  | "BOOKING_CONFIRMED"
  | "CHECK_IN_REMINDER"
  | "PAYMENT_RECEIVED"
  | "MAINTENANCE_CREATED"
  | "MAINTENANCE_ASSIGNED"
  | "MAINTENANCE_UPDATED"
  | "HOUSEKEEPING_ASSIGNED"
  | "BOOKING_CANCELLED";
