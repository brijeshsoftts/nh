import {
  Award,
  Briefcase,
  Calendar,
  Clock,
  GraduationCap,
  Info,
  Mail,
  MapPin,
  Phone,
  PhoneCall,
  ShieldCheck,
  User,
  UserCheck,
  UserX,
} from "lucide-react";
import React from "react";

import { ErrorModal } from "@/components/shared/ErrorModal";
import { FullScreenLoader } from "@/components/shared/Loader";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { formatDate } from "@/lib/formatDate";
import { getInitials } from "@/lib/getInitials";

import { useStaff } from "../hooks/useStaff";

interface ViewStaffSheetProps {
  id: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ViewStaffSheet({
  open,
  onOpenChange,
  id,
}: ViewStaffSheetProps) {
  const { isLoading, isError, refetch, data: staff } = useStaff(id);

  if (isLoading) {
    return <FullScreenLoader />;
  }

  if (isError || !staff) {
    return (
      <ErrorModal onOpenChange={onOpenChange} open={open} onRefetch={refetch} />
    );
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="flex h-full w-full flex-col border-l border-border bg-background p-0 sm:max-w-md">
        {/* Top Header */}
        <div className="border-b border-border bg-card p-6 pb-4">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <Avatar className="h-12 w-12 border border-border">
                <AvatarFallback className="bg-primary/10 font-semibold text-primary">
                  {getInitials(staff.fullName)}
                </AvatarFallback>
              </Avatar>
              <div>
                <SheetTitle className="text-lg font-bold text-foreground">
                  {staff.fullName}
                </SheetTitle>
              </div>
            </div>

            <Badge
              variant={staff.isActive ? "default" : "secondary"}
              className="flex items-center gap-1 capitalize"
            >
              {staff.isActive ? (
                <>
                  <UserCheck className="h-3 w-3 text-emerald-500" />
                  Active
                </>
              ) : (
                <>
                  <UserX className="h-3 w-3 text-muted-foreground" />
                  Inactive
                </>
              )}
            </Badge>
          </div>
        </div>

        {/* Tabbed Content Container */}
        <Tabs
          defaultValue="overview"
          className="flex flex-1 flex-col overflow-hidden"
        >
          {/* Tab Navigation */}
          <div className="border-b border-border bg-card px-6 pt-3">
            <TabsList className="grid w-full grid-cols-2 bg-muted/50 p-1">
              <TabsTrigger value="overview" className="text-xs font-medium">
                <Info className="mr-1.5 h-3.5 w-3.5" />
                Overview
              </TabsTrigger>
              <TabsTrigger value="personal" className="text-xs font-medium">
                <User className="mr-1.5 h-3.5 w-3.5" />
                Personal Details
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Scrollable Tab Body */}
          <ScrollArea className="flex-1 px-6 py-4">
            {/* OVERVIEW TAB */}
            <TabsContent value="overview" className="mt-0 space-y-6">
              {/* Primary Contact Section */}
              <div className="space-y-3">
                <h4 className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                  Contact Information
                </h4>
                <div className="space-y-2.5 rounded-lg border border-border bg-card p-3">
                  <DetailRow
                    icon={<Mail className="h-4 w-4" />}
                    label="Email"
                    value={staff.email}
                  />
                  <Separator />
                  <DetailRow
                    icon={<Phone className="h-4 w-4" />}
                    label="Phone"
                    value={staff.phone}
                  />
                  <Separator />
                  <DetailRow
                    icon={<MapPin className="h-4 w-4" />}
                    label="Address"
                    value={staff.address}
                  />
                </div>
              </div>

              {/* Employment / Role Section */}
              <div className="space-y-3">
                <h4 className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                  Work Details
                </h4>
                <div className="space-y-2.5 rounded-lg border border-border bg-card p-3">
                  <DetailRow
                    icon={<Briefcase className="h-4 w-4" />}
                    label="Category"
                    value={staff.category}
                  />
                  <Separator />
                  <DetailRow
                    icon={<Award className="h-4 w-4" />}
                    label="Experience"
                    value={staff.experience}
                  />
                  <Separator />
                  <DetailRow
                    icon={<Calendar className="h-4 w-4" />}
                    label="Joined Date"
                    value={formatDate(staff.createdAt)}
                  />
                  <Separator />
                  <DetailRow
                    icon={<Clock className="h-4 w-4" />}
                    label="Last Login"
                    value={formatDate(staff.lastLogin)}
                  />
                </div>
              </div>
            </TabsContent>

            {/* PERSONAL DETAILS TAB */}
            <TabsContent value="personal" className="mt-0 space-y-6">
              {/* Family & Identity */}
              <div className="space-y-3">
                <h4 className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                  Family & Verification
                </h4>
                <div className="space-y-2.5 rounded-lg border border-border bg-card p-3">
                  <DetailRow
                    icon={<User className="h-4 w-4" />}
                    label="Father's Name"
                    value={staff.fatherName}
                  />
                  <Separator />
                  <DetailRow
                    icon={<User className="h-4 w-4" />}
                    label="Mother's Name"
                    value={staff.motherName}
                  />
                  <Separator />
                  <DetailRow
                    icon={<ShieldCheck className="h-4 w-4" />}
                    label="ID Proof Number"
                    value={staff.idProofNumber}
                  />
                </div>
              </div>

              {/* Education & Emergency */}
              <div className="space-y-3">
                <h4 className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                  Qualifications & Emergency
                </h4>
                <div className="space-y-2.5 rounded-lg border border-border bg-card p-3">
                  <DetailRow
                    icon={<GraduationCap className="h-4 w-4" />}
                    label="Qualification"
                    value={staff.qualification}
                  />
                  <Separator />
                  <DetailRow
                    icon={<PhoneCall className="h-4 w-4" />}
                    label="Emergency Contact"
                    value={staff.emergencyContact}
                  />
                </div>
              </div>
            </TabsContent>
          </ScrollArea>
        </Tabs>
      </SheetContent>
    </Sheet>
  );
}

{
  /* Helper component for key-value row display */
}
function DetailRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between py-0.5 text-sm">
      <div className="flex items-center gap-2 text-muted-foreground">
        <span className="text-muted-foreground/80">{icon}</span>
        <span className="text-xs font-medium">{label}</span>
      </div>
      <span className="max-w-45 truncate text-right text-xs font-medium text-foreground">
        {value || "N/A"}
      </span>
    </div>
  );
}
