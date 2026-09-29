import { useAuth } from "@/hooks/useAuth";

import { ManagementPage } from "./ManagementPage";

const housekeepingTaskByRole = {
  ADMIN: ManagementPage,
};

export default function HousekeepingTasksPage() {
  const { user } = useAuth();

  const HousekeepingTask = user?.role
    ? housekeepingTaskByRole[user.role]
    : undefined;

  if (!HousekeepingTask) {
    return <>No Role</>;
  }

  return <HousekeepingTask />;
}
