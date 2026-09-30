import { type CreateStaff, CreateStaffSchema } from "./createStaff.schema";

export const UpdateStaffSchema = CreateStaffSchema.partial().refine(
  (data) => Object.keys(data).length > 0,
  {
    message: "At least one field is required",
  }
);

export type UpdateStaff = CreateStaff;
