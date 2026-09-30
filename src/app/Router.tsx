import { BrowserRouter, Route, Routes } from "react-router-dom";

import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { DashboardPage } from "@/pages/DashboardPage";
// import DashboardPage from "@/pages/dashboard/Index";
import HouseKeepingTasks from "@/pages/housekeeping-task/Index";
import IndexPage from "@/pages/public/Index";
import RoomsPage from "@/pages/RoomsPage";
// import RoomsPage from "@/pages/room/Index";
import AuditLogsPage from "@/pages/shared/AuditLog";
import BookingsPage from "@/pages/shared/BookingsPage";
import CustomersPage from "@/pages/shared/CustomersPage";
import MaintenancePage from "@/pages/shared/MaintenancePage";
import NewBookingPage from "@/pages/shared/NewBookingPage";
import NotificationsPage from "@/pages/shared/NotificationsPage";
import PaymentsPage from "@/pages/shared/PaymentsPage";
import ProfilePage from "@/pages/shared/ProfilePage";
import StaffPage from "@/pages/StaffPage";
// import StaffPage from "@/pages/shared/StaffPage";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<IndexPage />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="staff" element={<StaffPage />} />
          <Route path="customers" element={<CustomersPage />} />
          <Route path="rooms" element={<RoomsPage />} />
          <Route path="bookings" element={<BookingsPage />} />
          <Route path="bookings/new" element={<NewBookingPage />} />
          <Route path="maintenance" element={<MaintenancePage />} />
          <Route path="tasks" element={<HouseKeepingTasks />} />
          <Route path="payments" element={<PaymentsPage />} />
          <Route path="notifications" element={<NotificationsPage />} />
          <Route path="audit-logs" element={<AuditLogsPage />} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
