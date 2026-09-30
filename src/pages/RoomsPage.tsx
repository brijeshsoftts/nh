import { NoAccess } from "@/components/shared/NoAccess";
import { ManagementRoom } from "@/features/rooms/components/ManagementRoom";
import { useAuth } from "@/hooks/useAuth";

export default function RoomsPage() {
  const { user } = useAuth();

  switch (user?.role) {
    case "ADMIN":
    case "MANAGER":
    case "STAFF":
      if (user?.category === "HOUSEKEEPER") {
        return <NoAccess />;
      }
      return <ManagementRoom />;
    case "CUSTOMER":
      return <NoAccess />;
    default:
      return <NoAccess />;
  }
}
