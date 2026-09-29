import { StatCard } from "@/components/shared/StateCard";

import { dummyCustomerKpis } from "../customers.mock";

export function CustomerKpi() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {dummyCustomerKpis?.map((kpi) => (
        <StatCard key={kpi.id} {...kpi} />
      ))}
    </div>
  );
}
