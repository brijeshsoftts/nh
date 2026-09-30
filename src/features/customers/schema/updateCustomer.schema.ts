import {
  type CreateCustomer,
  CreateCustomerSchema,
} from "./createCustomer.schema";

export const UpdateCustomerSchema = CreateCustomerSchema.partial().refine(
  (data) => Object.keys(data).length > 0,
  {
    message: "At least one field is required",
  }
);

export type UpdateCustomer = CreateCustomer;
