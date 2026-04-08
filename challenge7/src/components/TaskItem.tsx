import { useTasks } from "../hooks/useTasks";

interface Props {
  id: number;
  text: string;
  completed: boolean;
}

const TaskItem = ({ id, text, completed }: Props) => {
  const { toggleTask, deleteTask } = useTasks();

  return (
    <div className={`task ${completed ? "completed" : ""}`}>
      <span onClick={() => toggleTask(id)}>
        {text}
      </span>

      <button onClick={() => deleteTask(id)}>
        X
      </button>
    </div>
  );
};

export default TaskItem;