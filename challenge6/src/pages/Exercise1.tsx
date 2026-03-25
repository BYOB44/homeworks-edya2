import { useNavigate } from "react-router-dom";

const Exercise1 = () => {
  const navigate = useNavigate();

  return (
    <div className="app-container">
      <div className="card">
        <h2>Ejercicio 1 - Challenge 4</h2>

        <p>Este ejercicio corresponde al Challenge 4</p>

        <button
          onClick={() =>
            window.open(
              "https://github.com/BYOB44/homeworks-edya2/tree/challenges/challenge4",
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

export default Exercise1;