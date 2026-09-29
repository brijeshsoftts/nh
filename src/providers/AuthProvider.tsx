import { createContext, type ReactNode } from "react";

import { useGetProfile } from "@/features/users/hooks/useProfile";
import type { AuthCTX } from "@/types/context.types";

const initialCTX: AuthCTX = {
  isAuthenticated: false,
  isLoading: true,
};

export const AuthContext = createContext<AuthCTX>(initialCTX);

export function AuthProvider({ children }: { children: ReactNode }) {
  const { user, isLoading } = useGetProfile();

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!user,
        isLoading: isLoading,
        user: user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
