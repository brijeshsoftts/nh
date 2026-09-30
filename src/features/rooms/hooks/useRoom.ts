import { useQuery } from "@tanstack/react-query";

import { roomKeys } from "../rooms.keys";
import { roomService } from "../rooms.service";

export function useRoom(id: string) {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: roomKeys.detail(id),
    queryFn: () => roomService.getById(id),
    enabled: !!id,
  });

  return {
    data,
    isLoading,
    isError,
    refetch,
  };
}
