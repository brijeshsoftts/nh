import { StatCard } from "@/components/shared/StateCard";

import { dummyRoomKpis } from "../rooms.mock";

export function RoomKpi() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {dummyRoomKpis?.map((kpi) => (
        <StatCard key={kpi.id} {...kpi} />
      ))}
    </div>
  );
}
