import { useQuery } from "@tanstack/react-query";

import { removeEmptyValues } from "@/lib/removeEmptyValues";
import type { ListParams } from "@/types/api.types";

import { staffKeys } from "../staff.keys";
import { staffService } from "../staff.service";

export function useStaffList(params?: ListParams) {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: staffKeys.list(params),
    queryFn: () => staffService.getAll(removeEmptyValues(params)),
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
