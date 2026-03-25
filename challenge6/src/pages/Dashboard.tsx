// src/pages/Dashboard.tsx
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div>
      <h2>Bienvenido: {user}</h2>

      <button onClick={logout}>Logout</button>

      <br /><br />

      <Link to="/exercise1">Ejercicio 1</Link>
      <br />
      <Link to="/exercise2">Ejercicio 2</Link>
    </div>
  );
};

export default Dashboard;