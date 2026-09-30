import type { ReactNode } from "react";

import { InputField } from "@/components/shared/InputField";
import { TextareaField } from "@/components/shared/TextareaField";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Spinner } from "@/components/ui/spinner";
import { useScroll } from "@/hooks/useScroll";

import { useCreateCustomerFacade } from "../hooks/useCreateCustomer";

export function NewCustomerModal({ children }: { children: ReactNode }) {
  const { handleScroll, scrollAreaRef } = useScroll();
  const { handleSubmit, submit, register, errors, isPending } =
    useCreateCustomerFacade();

  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-120">
        <form onSubmit={handleSubmit(submit)} className="space-y-4">
          <DialogHeader>
            <DialogTitle>New Customer</DialogTitle>
            <DialogDescription>
              Enter the customer details below to create a new customer.
            </DialogDescription>
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
                {...register("fullName")}
                disabled={isPending}
                error={errors.fullName?.message}
              />
              <InputField
                label="Email Address"
                placeholder="e.g. rahul.sharma@example.com"
                {...register("email")}
                disabled={isPending}
                error={errors.email?.message}
              />
              <InputField
                label="Phone Number"
                placeholder="e.g. 9876543210"
                {...register("phone")}
                disabled={isPending}
                error={errors.phone?.message}
              />
              <InputField
                label="ID Proof Number"
                placeholder="e.g. ABCD1234567"
                {...register("idProofNumber")}
                disabled={isPending}
                error={errors.idProofNumber?.message}
              />
              <TextareaField
                label="Address"
                placeholder="e.g. 123 Main Street, Anytown, USA"
                {...register("address")}
                disabled={isPending}
                error={errors.address?.message}
              />
            </div>
          </ScrollArea>

          <DialogFooter>
            <div className="flex justify-end gap-4">
              <DialogClose>
                <Button type="button" variant="outline" disabled={isPending}>
                  Cancel
                </Button>
              </DialogClose>
              <Button type="submit" disabled={isPending}>
                {isPending ? <Spinner /> : "Save"}
              </Button>
            </div>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
