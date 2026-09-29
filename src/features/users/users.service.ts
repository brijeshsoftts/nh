import { apiClient } from "@/lib/apiClient";
import type { User } from "@/types/user.types";

export const userService = {
  getProfile: (): Promise<User> =>
    apiClient.get("/users/me").then((r) => r.data.data),
};
