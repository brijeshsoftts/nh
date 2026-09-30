import { NoAccess } from "@/components/shared/NoAccess";
import { CustomerDashboard } from "@/features/dashboard/components/CustomerDashboard";
import { HousekeeperDashboard } from "@/features/dashboard/components/HousekeeperDashboard";
import { ManagementDashboard } from "@/features/dashboard/components/ManagementDashboard";
import { useAuth } from "@/hooks/useAuth";

export function DashboardPage() {
  const { user } = useAuth();

  switch (user?.role) {
    case "ADMIN":
    case "MANAGER":
    case "STAFF":
      if (user?.category === "HOUSEKEEPER") {
        return <HousekeeperDashboard />;
      }
      return <ManagementDashboard />;
    case "CUSTOMER":
      return <CustomerDashboard />;
    default:
      return <NoAccess />;
  }
}
