import { Navigate, Outlet } from "react-router-dom";

export function PrivateRoute({ isAuth }) {
  return isAuth ? <Outlet /> : <Navigate to="/login" replace />;
}

