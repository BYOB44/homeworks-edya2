import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

export function PrivateRoute() {
  const { user } = useAuthContext();

  // Si no hay usuario redirige al login sin poder volver atrás
  return user ? <Outlet /> : <Navigate to="/login" replace />;
}