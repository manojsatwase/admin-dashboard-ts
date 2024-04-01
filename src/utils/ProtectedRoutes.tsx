import { Navigate, Outlet } from "react-router-dom";

interface ProtectedRouteProps {
  role: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ role }) => {
  const user = { isAuthenticated: true, adminRoute: true, isAdmin: true, userRole: ["user", "admin"] };
  const { isAuthenticated, adminRoute, isAdmin, userRole } = user;

  if (!userRole?.includes(role)) {
    return <Navigate to="/" replace />;
  }

  if (userRole[0] === role) {
    return <Outlet />;
  }

  if (!userRole?.includes(role) || !isAuthenticated || !adminRoute || !isAdmin) {
    return <Navigate to="/" replace />;
  }

  if (userRole[1] === role && isAuthenticated && isAdmin && adminRoute) {
    return <Outlet />;
  }

  // Handle case when none of the conditions are met
  return null;
};

export default ProtectedRoute;
