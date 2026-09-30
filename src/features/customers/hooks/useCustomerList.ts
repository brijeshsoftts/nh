import { useQuery } from "@tanstack/react-query";

import { removeEmptyValues } from "@/lib/removeEmptyValues";
import type { ListParams } from "@/types/api.types";

import { customerKeys } from "../customers.keys";
import { customerService } from "../customers.service";

export function useCustomerList(params: ListParams) {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: customerKeys.list(params),
    queryFn: () => customerService.getAll(removeEmptyValues(params)),
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
