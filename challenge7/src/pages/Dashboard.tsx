import { useState } from "react";
import { useTasks } from "../hooks/useTasks";
import { useAuth } from "../hooks/useAuth";
import TaskItem from "../components/TaskItem";

const Dashboard = () => {
  const { tasks, addTask } = useTasks();
  const { logout, user } = useAuth();
  const [text, setText] = useState("");

  return (
    <div className="app-container">
      <div className="card">
        <h2>Tasks</h2>

        <p>Usuario: {user?.email}</p>

        <input
          placeholder="Nueva tarea"
          onChange={(e) => setText(e.target.value)}
        />

        <button onClick={() => addTask(text)}>Agregar</button>

        {/* Lista de tareas */}
        {tasks.map((task) => (
          <TaskItem key={task.id} {...task} />
        ))}

        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
};

export default Dashboard;