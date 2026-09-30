import { apiClient } from "@/lib/apiClient";
import type { ApiMessageResponse } from "@/types/api.types";

import type { CreateStaff } from "./schema/createSchema.schema";

export const staffService = {
  create: (data: CreateStaff): Promise<ApiMessageResponse> =>
    apiClient.post("/staff", data).then((r) => r.data),
};
