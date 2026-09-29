import type { User } from "./user.types";

export type AuthCTX = {
  isAuthenticated: boolean;
  isLoading: boolean;
  user?: User;
};
