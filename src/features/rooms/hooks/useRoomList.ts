import { useQuery } from "@tanstack/react-query";

import { removeEmptyValues } from "@/lib/removeEmptyValues";
import type { ListParams } from "@/types/api.types";

import { roomKeys } from "../rooms.keys";
import { roomService } from "../rooms.service";

export function useRoomList(params?: ListParams) {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: roomKeys.list(params),
    queryFn: () => roomService.getAll(removeEmptyValues(params)),
    placeholderData: (previousData) => previousData,
  });

  return {
    items: data?.data ?? [],
    pagination: data?.meta,
    isLoading,
    isError,
    refetch,
  };
}
