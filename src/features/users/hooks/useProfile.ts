import { useQuery } from "@tanstack/react-query";

import { usersKeys } from "../users.keys";
import { userService } from "../users.service";

export function useGetProfile() {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: usersKeys.lists(),
    queryFn: userService.getProfile,
  });

  return {
    user: data,
    isLoading,
    isError,
    refetch,
  };
}
