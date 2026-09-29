import { Header } from "@/components/shared/Header";
import { NotificationKpi } from "@/features/notifications/components/NotificationKpi";

export default function NotificationsPage() {
  return (
    <>
      <Header
        title="Notifications"
        description="Keep track of important updates and system activity."
      />
      <NotificationKpi />
    </>
  );
}
