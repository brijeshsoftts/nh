import { Plus } from "lucide-react";

import { Header } from "@/components/shared/Header";
import { Button } from "@/components/ui/button";
import { CustomerKpi } from "@/features/customers/components/CustomerKpi";

export default function CustomersPage() {
  return (
    <>
      <Header
        title="Customer Management"
        description="Keep customer profiles and account information organized."
        rightContent={
          <>
            <Button>
              <Plus className="h-3.5 w-3.5" />
              <span>New Customer</span>
            </Button>
          </>
        }
      />
      <CustomerKpi />
    </>
  );
}
