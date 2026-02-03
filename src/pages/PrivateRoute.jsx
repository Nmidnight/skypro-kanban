import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/useAuth";


export function PrivateRoute() {
  const token = useAuth()
  return token ? <Outlet /> : <Navigate to="/login" replace />;
}

