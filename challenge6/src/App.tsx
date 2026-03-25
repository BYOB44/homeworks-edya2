// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Exercise1 from "./pages/Exercise1";
import Exercise2 from "./pages/Exercise2";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />

          <Route
            path="/exercise1"
            element={
              <PrivateRoute>
                <Exercise1 />
              </PrivateRoute>
            }
          />

          <Route
            path="/exercise2"
            element={
              <PrivateRoute>
                <Exercise2 />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;