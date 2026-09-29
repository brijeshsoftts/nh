import { StatCard } from "@/components/shared/StateCard";

import { dummyManagementKpis } from "../dashboard.mock";

export function ManagementKpi() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {dummyManagementKpis?.map((kpi) => (
        <StatCard key={kpi.id} {...kpi} />
      ))}
    </div>
  );
}
