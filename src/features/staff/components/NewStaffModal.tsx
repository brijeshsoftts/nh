import type { ReactNode } from "react";

import { InputField } from "@/components/shared/InputField";
import { SelectField } from "@/components/shared/SelectField";
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
import { STAFF_CATEGORY_OPTIONS } from "@/constants/enum.constant";
import { useScroll } from "@/hooks/useScroll";

import { useCreateStaffFacade } from "../hooks/useCreateStaff";

export const NewStaffModal = ({ children }: { children: ReactNode }) => {
  const { handleScroll, scrollAreaRef } = useScroll();
  const { handleSubmit, submit, register, errors, control, isPending } =
    useCreateStaffFacade();

  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-lg md:min-w-200">
        <form onSubmit={handleSubmit(submit)}>
          <DialogHeader>
            <DialogTitle>New Staff</DialogTitle>
            <DialogDescription>
              Add new staff members to your team.
            </DialogDescription>
          </DialogHeader>
          <ScrollArea
            className="h-100 py-4 pr-4"
            onScrollCapture={handleScroll}
            ref={scrollAreaRef}
          >
            <div className="flex flex-col gap-4">
              <div className="grid gap-4 md:grid-cols-2">
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
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <SelectField
                  name="category"
                  label="Staff Category"
                  placeholder="Select a staff category"
                  control={control}
                  options={STAFF_CATEGORY_OPTIONS}
                  error={errors.category?.message}
                  disabled={isPending}
                />

                <InputField
                  label="Phone Number"
                  placeholder="e.g. 9876543210"
                  {...register("phone")}
                  disabled={isPending}
                  error={errors.phone?.message}
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <InputField
                  label="Father's Name"
                  placeholder="e.g. Ramesh Sharma"
                  {...register("fatherName")}
                  disabled={isPending}
                  error={errors.fatherName?.message}
                />

                <InputField
                  label="Mother's Name"
                  placeholder="e.g. Sunita Sharma"
                  {...register("motherName")}
                  disabled={isPending}
                  error={errors.motherName?.message}
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <InputField
                  label="ID Proof Number"
                  placeholder="e.g. ABCD1234567"
                  {...register("idProofNumber")}
                  disabled={isPending}
                  error={errors.idProofNumber?.message}
                />

                <InputField
                  label="Qualification"
                  placeholder="e.g. B.Com"
                  {...register("qualification")}
                  disabled={isPending}
                  error={errors.qualification?.message}
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <InputField
                  label="Experience"
                  placeholder="e.g. 3 years"
                  {...register("experience")}
                  disabled={isPending}
                  error={errors.experience?.message}
                />

                <InputField
                  label="Emergency Contact"
                  placeholder="e.g. 9123456789"
                  {...register("emergencyContact")}
                  disabled={isPending}
                  error={errors.emergencyContact?.message}
                />
              </div>

              <TextareaField
                label="Address"
                placeholder="e.g. 221B MG Road, Lucknow, Uttar Pradesh"
                {...register("address")}
                disabled={isPending}
                error={errors.address?.message}
              />
            </div>
          </ScrollArea>
          <DialogFooter>
            <div className="flex justify-end gap-4">
              <DialogClose>
                <Button type="button" variant="outline">
                  Cancel
                </Button>
              </DialogClose>
              <Button type="submit">Save</Button>
            </div>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
