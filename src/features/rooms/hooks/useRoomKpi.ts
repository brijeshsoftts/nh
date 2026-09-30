import { useQuery } from "@tanstack/react-query";

import { roomKeys } from "../rooms.keys";
import { roomService } from "../rooms.service";

export function useRoomKpi() {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: roomKeys.lists(),
    queryFn: roomService.getStats,
  });

  return {
    data,
    isLoading,
    isError,
    refetch,
  };
}
