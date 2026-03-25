import { useNavigate } from "react-router-dom";

const Exercise2 = () => {
  const navigate = useNavigate();

  return (
    <div className="app-container">
      <div className="card">
        <h2>Ejercicio 2 - Challenge 5</h2>

        <p>Este ejercicio corresponde al Challenge 5</p>

        <button
          onClick={() =>
            window.open(
              "https://github.com/BYOB44/homeworks-edya2/tree/challenges/challenge5",
              "_blank"
            )
          }
        >
          Ver en GitHub
        </button>

        <button
          className="btn-secondary"
          onClick={() => navigate("/dashboard")}
        >
          ← Volver
        </button>
      </div>
    </div>
  );
};

export default Exercise2;