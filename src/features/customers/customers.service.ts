import { apiClient } from "@/lib/apiClient";
import type {
  ApiListResponse,
  ApiMessageResponse,
  ListParams,
} from "@/types/api.types";
import type { StatCard } from "@/types/shared.types";

import type { CreateCustomer } from "./schema/createCustomer.schema";
import type { UpdateCustomer } from "./schema/updateCustomer.schema";
import type { CustomerDetail, CustomerItem } from "./customers.types";

export const customerService = {
  create: (data: CreateCustomer): Promise<ApiMessageResponse> =>
    apiClient.post("/customers", data).then((r) => r.data),
  getAll: (params: ListParams): Promise<ApiListResponse<CustomerItem>> =>
    apiClient.get("/customers", { params }).then((r) => r.data),
  update: (id: string, data: UpdateCustomer): Promise<ApiMessageResponse> =>
    apiClient.patch(`/customers/${id}`, data).then((r) => r.data),
  delete: (id: string): Promise<ApiMessageResponse> =>
    apiClient.delete(`/customers/${id}`).then((r) => r.data),
  getById: (id: string): Promise<CustomerDetail> =>
    apiClient.get(`/customers/${id}`).then((r) => r.data?.data),
  getStats: (): Promise<StatCard[]> =>
    apiClient.get("/customers/stats").then((r) => r.data?.data),
};
