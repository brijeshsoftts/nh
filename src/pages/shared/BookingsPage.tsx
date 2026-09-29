import { Plus } from "lucide-react";

import { Header } from "@/components/shared/Header";
import { Button } from "@/components/ui/button";
import { BookingKpi } from "@/features/bookings/components/BookingKpi";

export default function BookingsPage() {
  return (
    <>
      <Header
        title="Bookings"
        description="Manage reservations and track their current status."
        rightContent={
          <>
            <Button>
              <Plus className="h-4 w-4" />
              <span>New Booking</span>
            </Button>
          </>
        }
      />
      <BookingKpi />
    </>
  );
}
