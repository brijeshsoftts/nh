import { Controller } from "react-hook-form";

import { ErrorModal } from "@/components/shared/ErrorModal";
import { InputField } from "@/components/shared/InputField";
import { FullScreenLoader } from "@/components/shared/Loader";
import { SelectField } from "@/components/shared/SelectField";
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
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Spinner } from "@/components/ui/spinner";
import { Switch } from "@/components/ui/switch";
import { STAFF_CATEGORY_OPTIONS } from "@/constants/enum.constant";
import { useScroll } from "@/hooks/useScroll";

import { useStaff } from "../hooks/useStaff";
import { useUpdateStaffFacade } from "../hooks/useUpdateStaff";

type UpdateStaffModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  id: string;
};

export const UpdateStaffModal = ({
  open,
  onOpenChange,
  id,
}: UpdateStaffModalProps) => {
  const { handleScroll, scrollAreaRef } = useScroll();
  const { data: staff, isLoading, isError, refetch } = useStaff(id);
  const { handleSubmit, submit, register, errors, control, isPending } =
    useUpdateStaffFacade(id);

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
      <DialogContent className="sm:max-w-lg md:min-w-200">
        <form onSubmit={handleSubmit(submit)}>
          <DialogHeader>
            <DialogTitle>Update Staff</DialogTitle>
            <DialogDescription>Update staff details.</DialogDescription>
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
                  {...register("fullName", { value: staff?.fullName })}
                  disabled={isPending}
                  error={errors.fullName?.message}
                />

                <InputField
                  label="Email Address"
                  placeholder="e.g. rahul.sharma@example.com"
                  {...register("email", { value: staff?.email })}
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
                  defaultValue={staff?.category}
                  disabled={isPending}
                />

                <InputField
                  label="Phone Number"
                  placeholder="e.g. 9876543210"
                  {...register("phone", { value: staff?.phone })}
                  disabled={isPending}
                  error={errors.phone?.message}
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <InputField
                  label="Father's Name"
                  placeholder="e.g. Ramesh Sharma"
                  {...register("fatherName", { value: staff?.fatherName })}
                  disabled={isPending}
                  error={errors.fatherName?.message}
                />

                <InputField
                  label="Mother's Name"
                  placeholder="e.g. Sunita Sharma"
                  {...register("motherName", { value: staff?.motherName })}
                  disabled={isPending}
                  error={errors.motherName?.message}
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <InputField
                  label="ID Proof Number"
                  placeholder="e.g. ABCD1234567"
                  {...register("idProofNumber", {
                    value: staff?.idProofNumber,
                  })}
                  disabled={isPending}
                  error={errors.idProofNumber?.message}
                />

                <InputField
                  label="Qualification"
                  placeholder="e.g. B.Com"
                  {...register("qualification", {
                    value: staff?.qualification,
                  })}
                  disabled={isPending}
                  error={errors.qualification?.message}
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <InputField
                  label="Experience"
                  placeholder="e.g. 3 years"
                  {...register("experience", { value: staff?.experience })}
                  disabled={isPending}
                  error={errors.experience?.message}
                />

                <InputField
                  label="Emergency Contact"
                  placeholder="e.g. 9123456789"
                  {...register("emergencyContact", {
                    value: staff?.emergencyContact,
                  })}
                  disabled={isPending}
                  error={errors.emergencyContact?.message}
                />
              </div>

              <div className="flex items-center justify-between rounded-lg border p-4">
                <div className="space-y-1">
                  <Label htmlFor="isActive">Active</Label>
                  <p className="text-sm text-muted-foreground">
                    Enable this room so it can be assigned to rooms.
                  </p>
                </div>

                <Controller
                  name="isActive"
                  control={control}
                  render={({ field }) => (
                    <Switch
                      id="isActive"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      disabled={isPending}
                    />
                  )}
                />
              </div>

              <TextareaField
                label="Address"
                placeholder="e.g. 221B MG Road, Lucknow, Uttar Pradesh"
                {...register("address", { value: staff?.address })}
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
