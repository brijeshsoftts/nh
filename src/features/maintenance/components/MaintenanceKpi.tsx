import { StatCard } from "@/components/shared/StateCard";

import { dummyMaintenanceKpis } from "../maintenance.mock";

export function MaintenanceKpi() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {dummyMaintenanceKpis?.map((kpi) => (
        <StatCard key={kpi.id} {...kpi} />
      ))}
    </div>
  );
}
