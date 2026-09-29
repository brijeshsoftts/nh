import { StatCard } from "@/components/shared/StateCard";

import { dummyPaymentKpis } from "../payments.mock";

export function PaymentKpi() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {dummyPaymentKpis?.map((kpi) => (
        <StatCard key={kpi.id} {...kpi} />
      ))}
    </div>
  );
}
