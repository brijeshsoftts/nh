import { StatCard } from "@/components/shared/StateCard";

import { dummyBookingKpis } from "../bookings.mock";

export function BookingKpi() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {dummyBookingKpis?.map((kpi) => (
        <StatCard key={kpi.id} {...kpi} />
      ))}
    </div>
  );
}
