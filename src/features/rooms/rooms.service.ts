import { apiClient } from "@/lib/apiClient";
import type {
  ApiListResponse,
  ApiMessageResponse,
  ListParams,
} from "@/types/api.types";
import type { StatCard } from "@/types/shared.types";

import type { CreateRoom } from "./schema/createRoom.schema";
import type { UpdateRoom } from "./schema/updateRoom.schema";
import type { RoomItem } from "./rooms.types";

export const roomService = {
  create: (data: CreateRoom): Promise<ApiMessageResponse> =>
    apiClient.post("/rooms", data).then((r) => r.data),
  getAll: (params?: ListParams): Promise<ApiListResponse<RoomItem>> =>
    apiClient.get("/rooms", { params }).then((r) => r.data),
  getById: (id: string): Promise<RoomItem> =>
    apiClient.get(`/rooms/${id}`).then((r) => r.data?.data),
  update: (id: string, data: UpdateRoom): Promise<ApiMessageResponse> =>
    apiClient.patch(`/rooms/${id}`, data).then((r) => r.data),
  delete: (id: string): Promise<ApiMessageResponse> =>
    apiClient.delete(`/rooms/${id}`).then((r) => r.data),
  getStats: (): Promise<StatCard[]> =>
    apiClient.get("/rooms/stats").then((r) => r.data.data),
};
