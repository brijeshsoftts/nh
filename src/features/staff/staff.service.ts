import { apiClient } from "@/lib/apiClient";
import type {
  ApiListResponse,
  ApiMessageResponse,
  ListParams,
} from "@/types/api.types";
import type { StatCard } from "@/types/shared.types";

import type { CreateStaff } from "./schema/createStaff.schema";
import type { UpdateStaff } from "./schema/updateStaff.schema";
import type { StaffDetail, StaffItem } from "./staff.types";

export const staffService = {
  create: (data: CreateStaff): Promise<ApiMessageResponse> =>
    apiClient.post("/staff", data).then((r) => r.data),
  getAll: (params?: ListParams): Promise<ApiListResponse<StaffItem>> =>
    apiClient.get("/staff", { params }).then((r) => r.data),
  getById: (id: string): Promise<StaffDetail> =>
    apiClient.get(`/staff/${id}`).then((r) => r.data?.data),
  update: (id: string, data: UpdateStaff): Promise<ApiMessageResponse> =>
    apiClient.patch(`/staff/${id}`, data).then((r) => r.data),
  delete: (id: string): Promise<ApiMessageResponse> =>
    apiClient.delete(`/staff/${id}`).then((r) => r.data),
  getStats: (): Promise<StatCard[]> =>
    apiClient.get("/staff/stats").then((r) => r.data.data),
};
