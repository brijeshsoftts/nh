import {
  Info,
  Mail,
  MapPin,
  Phone,
  Receipt,
  ShieldCheck,
  ShoppingBag,
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
import { getInitials } from "@/lib/getInitials";

import { useCustomer } from "../hooks/useCustomer";

interface ViewCustomerSheetProps {
  id: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ViewCustomerSheet({
  open,
  onOpenChange,
  id,
}: ViewCustomerSheetProps) {
  const { isLoading, isError, refetch, data: customer } = useCustomer(id);

  if (isLoading) {
    return <FullScreenLoader />;
  }

  if (isError || !customer) {
    return (
      <ErrorModal onOpenChange={onOpenChange} open={open} onRefetch={refetch} />
    );
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="flex h-full w-full flex-col border-l border-border bg-background p-0 sm:max-w-md">
        {/* Header */}
        <div className="border-b border-border bg-card p-6 pb-4">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <Avatar className="h-12 w-12 border border-border">
                <AvatarFallback className="bg-primary/10 font-semibold text-primary">
                  {getInitials(customer.fullName)}
                </AvatarFallback>
              </Avatar>
              <div>
                <SheetTitle className="text-lg font-bold text-foreground">
                  {customer.fullName}
                </SheetTitle>
              </div>
            </div>

            <Badge
              variant={customer.isActive ? "default" : "secondary"}
              className="flex items-center gap-1 capitalize"
            >
              {customer.isActive ? (
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
          <div className="border-b border-border bg-card px-6 pt-3">
            <TabsList className="grid w-full grid-cols-2 bg-muted/50 p-1">
              <TabsTrigger value="overview" className="text-xs font-medium">
                <Info className="mr-1.5 h-3.5 w-3.5" />
                Overview
              </TabsTrigger>
              <TabsTrigger value="details" className="text-xs font-medium">
                <User className="mr-1.5 h-3.5 w-3.5" />
                Additional Info
              </TabsTrigger>
            </TabsList>
          </div>

          <ScrollArea className="flex-1 px-6 py-4">
            {/* OVERVIEW TAB */}
            <TabsContent value="overview" className="mt-0 space-y-6">
              {/* Activity Summary Stats */}
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1 rounded-lg border border-border bg-card p-3">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <ShoppingBag className="h-4 w-4" />
                    <span className="text-xs font-medium">Bookings</span>
                  </div>
                  <p className="text-lg font-bold text-foreground">
                    {customer.totalBookings}
                  </p>
                </div>
                <div className="space-y-1 rounded-lg border border-border bg-card p-3">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Receipt className="h-4 w-4" />
                    <span className="text-xs font-medium">Total Spend</span>
                  </div>
                  <p className="text-lg font-bold text-foreground">
                    ₹{customer.totalSpend}
                  </p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-3">
                <h4 className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                  Contact Information
                </h4>
                <div className="space-y-2.5 rounded-lg border border-border bg-card p-3">
                  <DetailRow
                    icon={<Mail className="h-4 w-4" />}
                    label="Email"
                    value={customer.email}
                  />
                  <Separator />
                  <DetailRow
                    icon={<Phone className="h-4 w-4" />}
                    label="Phone"
                    value={customer.phone}
                  />
                </div>
              </div>
            </TabsContent>

            {/* ADDITIONAL INFO TAB */}
            <TabsContent value="details" className="mt-0 space-y-6">
              <div className="space-y-3">
                <h4 className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                  Personal & Address
                </h4>
                <div className="space-y-2.5 rounded-lg border border-border bg-card p-3">
                  <DetailRow
                    icon={<MapPin className="h-4 w-4" />}
                    label="Address"
                    value={customer.address}
                  />
                  <Separator />
                  <DetailRow
                    icon={<ShieldCheck className="h-4 w-4" />}
                    label="ID Proof Number"
                    value={customer.idProofNumber}
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
