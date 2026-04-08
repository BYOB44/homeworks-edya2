import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";
import { useAuth } from "../hooks/useAuth";

interface Props {
  children: ReactNode;
}

const PrivateRoute = ({ children }: Props) => {
  const { user } = useAuth();

  // Si no hay usuario → manda al login
  if (!user) {
    return <Navigate to="/" />;
  }

  return children;
};

export default PrivateRoute;