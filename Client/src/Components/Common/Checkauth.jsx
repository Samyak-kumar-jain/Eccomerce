import { Navigate, useLocation } from "react-router-dom";

function CheckAuth({ isAuthenticated, user, children }) {
  const location = useLocation();

  console.log(location.pathname, isAuthenticated);

  // Allow unauthenticated users to access the /shop/home page
  if (location.pathname === "/shop/home") {
    return <>{children}</>;
  }

  // Redirect unauthenticated users trying to access any protected route to login
  if (!isAuthenticated) {
    if (!(location.pathname.includes("/login") || location.pathname.includes("/register"))) {
      return <Navigate to="/auth/login" replace />;
    }
  }

  // Redirect authenticated users based on their role and requested route
  if (isAuthenticated) {
    const isAdmin = user?.role === "admin";
    const isAuthRoute = location.pathname.includes("/auth");

    if (isAdmin && location.pathname.includes("shop")) {
      return <Navigate to="/admin/dashboard" replace />;
    }
    if (!isAdmin && location.pathname.includes("admin")) {
      return <Navigate to="/unauth-page" replace />;
    }
    if (isAuthRoute) {
      return isAdmin ? <Navigate to="/admin/dashboard" replace /> : <Navigate to="/shop/home" replace />;
    }
  }

  // Render the children component if no redirection is required
  return <>{children}</>;
}

export default CheckAuth;
