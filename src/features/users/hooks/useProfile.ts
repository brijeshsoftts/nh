import { useQuery } from "@tanstack/react-query";

import { usersKeys } from "../users.keys";
import { dummyUserProfile } from "../users.mock";
import { userService } from "../users.service";

export function useGetProfile() {
  const { isLoading, isError, refetch } = useQuery({
    queryKey: usersKeys.lists(),
    queryFn: userService.getProfile,
  });

  return {
    user: dummyUserProfile,
    isLoading,
    isError,
    refetch,
  };
}
