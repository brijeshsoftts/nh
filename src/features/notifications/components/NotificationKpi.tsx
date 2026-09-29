import { StatCard } from "@/components/shared/StateCard";

import { dummyNotificationKpis } from "../notifications.mock";

export function NotificationKpi() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {dummyNotificationKpis?.map((kpi) => (
        <StatCard key={kpi.id} {...kpi} />
      ))}
    </div>
  );
}
