import { useAuth } from "@/hooks/useAuth";

import { ManagementPage } from "./ManagementPage";

const roomByRole = {
  ADMIN: ManagementPage,
};

export default function RoomsPage() {
  const { user } = useAuth();

  const Rooms = user?.role ? roomByRole[user.role] : undefined;

  if (!Rooms) {
    return <>No Role</>;
  }

  return <Rooms />;
}
