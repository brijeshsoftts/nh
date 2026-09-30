import { ErrorModal } from "@/components/shared/ErrorModal";
import { InputField } from "@/components/shared/InputField";
import { FullScreenLoader } from "@/components/shared/Loader";
import { TextareaField } from "@/components/shared/TextareaField";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Spinner } from "@/components/ui/spinner";
import { useScroll } from "@/hooks/useScroll";

import { useCreateCustomerFacade } from "../hooks/useCreateCustomer";
import { useCustomer } from "../hooks/useCustomer";

type UpdateCustomerModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  id: string;
};

export const UpdateCustomerModal = ({
  open,
  onOpenChange,
  id,
}: UpdateCustomerModalProps) => {
  const { handleScroll, scrollAreaRef } = useScroll();
  const { data: customer, isLoading, isError, refetch } = useCustomer(id);
  const { handleSubmit, submit, register, errors, isPending } =
    useCreateCustomerFacade();

  if (isLoading) {
    return <FullScreenLoader />;
  }

  if (isError) {
    return (
      <ErrorModal onOpenChange={onOpenChange} open={open} onRefetch={refetch} />
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-120">
        <form onSubmit={handleSubmit(submit)} className="space-y-4">
          <DialogHeader>
            <DialogTitle>Update Customer</DialogTitle>
            <DialogDescription>Update customer details.</DialogDescription>
          </DialogHeader>

          <ScrollArea
            className="h-80 pr-4"
            onScrollCapture={handleScroll}
            ref={scrollAreaRef}
          >
            <div className="flex flex-col gap-4">
              <InputField
                label="Full Name"
                placeholder="e.g. Rahul Sharma"
                {...register("fullName", { value: customer?.fullName })}
                disabled={isPending}
                error={errors.fullName?.message}
              />
              <InputField
                label="Email Address"
                placeholder="e.g. rahul.sharma@example.com"
                {...register("email", { value: customer?.email })}
                disabled={isPending}
                error={errors.email?.message}
              />
              <InputField
                label="Phone Number"
                placeholder="e.g. 9876543210"
                {...register("phone", { value: customer?.phone })}
                disabled={isPending}
                error={errors.phone?.message}
              />
              <InputField
                label="ID Proof Number"
                placeholder="e.g. ABCD1234567"
                {...register("idProofNumber", {
                  value: customer?.idProofNumber,
                })}
                disabled={isPending}
                error={errors.idProofNumber?.message}
              />
              <TextareaField
                label="Address"
                placeholder="e.g. 123 Main Street, Anytown, USA"
                {...register("address", { value: customer?.address })}
                disabled={isPending}
                error={errors.address?.message}
              />
            </div>
          </ScrollArea>

          <DialogFooter>
            <div className="flex justify-end gap-4">
              <Button
                type="button"
                variant="outline"
                disabled={isPending}
                onClick={() => onOpenChange(false)}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={isPending}>
                {isPending ? <Spinner /> : "Update"}
              </Button>
            </div>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
