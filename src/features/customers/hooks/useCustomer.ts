import { useQuery } from "@tanstack/react-query";

import { customerKeys } from "../customers.keys";
import { customerService } from "../customers.service";

export function useCustomer(id: string) {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: customerKeys.detail(id),
    queryFn: () => customerService.getById(id),
    enabled: !!id,
  });

  return {
    data,
    isLoading,
    isError,
    refetch,
  };
}
