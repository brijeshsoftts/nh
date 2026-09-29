import { useAuth } from "@/hooks/useAuth";

import { ManagementPage } from "./ManagementPage";

const dashboardByRole = {
  ADMIN: ManagementPage,
};

export default function DashboardPage() {
  const { user } = useAuth();

  const Dashboard = user?.role ? dashboardByRole[user.role] : undefined;

  if (!Dashboard) {
    return <>No Role</>;
  }

  return <Dashboard />;
}
