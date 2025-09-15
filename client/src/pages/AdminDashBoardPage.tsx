import PrivateRoute from "../components/authentication/PrivateRoute";
import AdminDashboard from "../layouts/AdminDashboard";

export default function AdminDashboardPage() {
  return (
    <PrivateRoute>
      <AdminDashboard />
    </PrivateRoute>
  );
}
