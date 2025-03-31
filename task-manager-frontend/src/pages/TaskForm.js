import { useState, useEffect } from "react"; // Importing React hooks for state and effect management
import { useNavigate, useParams } from "react-router-dom"; // Importing hooks for navigation and route parameters
import { createTask, getTaskById, updateTask } from "../services/taskService"; // Importing task service functions for API calls

const TaskForm = () => {
  const [task, setTask] = useState({ title: "", description: "", status: "To-Do", dueDate: "" }); // State to hold task data
  const { id } = useParams(); // Extracting task ID from URL parameters
  const navigate = useNavigate(); // Hook to programmatically navigate between routes

  useEffect(() => { // useEffect hook to fetch task data when the component mounts or ID changes
    if (id) {
      fetchTask(); // Fetch task data if ID is present in the URL
    }
  }, [id]);

  const fetchTask = async () => { // Function to fetch task data by ID
    const data = await getTaskById(id); // Call the getTaskById function from the service
    setTask(data);
  };

  const handleSubmit = async (e) => { // Function to handle form submission
    e.preventDefault(); // Prevent default form submission behavior
    if (id) {
      await updateTask(id, task); // Update task if ID is present
    } else {
      await createTask(task); // Create a new task if no ID is present
    }
    navigate("/"); // Navigate back to the task list after submission
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{id ? "Edit Task" : "Add Task"}</h1>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          placeholder="Title"
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
          className="border p-2 w-full"
          required
        />
        <textarea
          placeholder="Description"
          value={task.description}
          onChange={(e) => setTask({ ...task, description: e.target.value })}
          className="border p-2 w-full"
        />
        <select
          value={task.status}
          onChange={(e) => setTask({ ...task, status: e.target.value })}
          className="border p-2 w-full"
        >
          <option value="To-Do">To-Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          {id ? "Update Task" : "Create Task"}
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
