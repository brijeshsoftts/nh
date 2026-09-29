import { Header } from "@/components/shared/Header";
import { PaymentKpi } from "@/features/payments/components/PaymentKpi";

export default function PaymentsPage() {
  return (
    <>
      <Header
        title="Payment & Invoices"
        description="Manage payments, invoices, and transaction records."
      />
      <PaymentKpi />
    </>
  );
}
