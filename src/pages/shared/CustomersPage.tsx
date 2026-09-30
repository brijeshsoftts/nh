import { Plus } from "lucide-react";

import { Header } from "@/components/shared/Header";
import { Button } from "@/components/ui/button";
import { CustomerKpi } from "@/features/customers/components/CustomerKpi";
import { CustomerTable } from "@/features/customers/components/CustomerTable";
import { NewCustomerModal } from "@/features/customers/components/NewCustomerModal";

export default function CustomersPage() {
  return (
    <>
      <Header
        title="Customer Management"
        description="Keep customer profiles and account information organized."
        rightContent={
          <>
            <NewCustomerModal>
              <Button>
                <Plus className="h-3.5 w-3.5" />
                <span>New Customer</span>
              </Button>
            </NewCustomerModal>
          </>
        }
      />
      <CustomerKpi />
      <CustomerTable />
    </>
  );
}
