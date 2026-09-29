import { StatCard } from "@/components/shared/StateCard";

import { dummyHousekeepingKpis } from "../tasks.mock";

export function TaskKpi() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {dummyHousekeepingKpis?.map((kpi) => (
        <StatCard key={kpi.id} {...kpi} />
      ))}
    </div>
  );
}
