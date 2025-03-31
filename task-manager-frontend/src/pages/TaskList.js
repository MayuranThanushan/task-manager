import { useEffect, useState } from "react"; // Importing React hooks
import { getTasks, deleteTask } from "../services/taskService";
import { useNavigate } from "react-router-dom";

const TaskList = () => { // Functional component for the task list page
  const [tasks, setTasks] = useState([]); // State to hold the list of tasks
  const navigate = useNavigate(); // Hook to programmatically navigate between routes

  useEffect(() => { // useEffect hook to load tasks when the component mounts
    loadTasks(); // Call the loadTasks function to fetch tasks from the API
  }, []);

  const loadTasks = async () => { // Function to load tasks from the API
    const data = await getTasks(); // Call the getTasks function from the service
    setTasks(data); // Update the state with the fetched tasks
  };

  const handleDelete = async (id) => { // Function to handle task deletion
    await deleteTask(id); // Call the deleteTask function from the service
    loadTasks(); // Reload tasks after deletion
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Task List</h1>
      <button
        onClick={() => navigate("/add-task")}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        Add Task
      </button>
      <ul className="space-y-3">
        {tasks.map((task) => (
          <li key={task._id} className="border p-3 rounded flex justify-between">
            <div>
              <h2 className="font-semibold">{task.title}</h2>
              <p>{task.status}</p>
            </div>
            <div>
              <button
                onClick={() => navigate(`/task/${task._id}`)}
                className="bg-green-500 text-white px-3 py-1 rounded mr-2"
              >
                View
              </button>
              <button
                onClick={() => handleDelete(task._id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
