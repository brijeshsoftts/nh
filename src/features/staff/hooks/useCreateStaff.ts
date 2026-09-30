import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { notifyError } from "@/lib/notification";

import {
  type CreateStaff,
  CreateStaffSchema,
} from "../schema/createStaff.schema";
import { staffKeys, staffMutationKeys } from "../staff.keys";
import { staffService } from "../staff.service";

const useCreateStaff = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: staffMutationKeys.create,
    mutationFn: staffService.create,
    onSuccess: (res) => {
      toast.success(res?.message || "Staff created successfully");
      queryClient.invalidateQueries({
        queryKey: staffKeys.lists(),
      });
    },
    onError: notifyError,
  });
};

export const useCreateStaffFacade = () => {
  const { mutate, isPending, isSuccess } = useCreateStaff();

  const {
    handleSubmit,
    register,
    formState: { errors },
    getValues,
    control,
  } = useForm({
    resolver: zodResolver(CreateStaffSchema),
  });

  return {
    submit: (data: CreateStaff) => mutate(data),
    isPending,
    register,
    handleSubmit,
    errors,
    isSuccess,
    getValues,
    control,
  };
};
