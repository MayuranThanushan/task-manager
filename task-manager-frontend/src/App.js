import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importing necessary components from react-router-dom
import TaskList from "./pages/TaskList"; // Importing the TaskList component
import TaskForm from "./pages/TaskForm"; // Importing the TaskForm component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/add-task" element={<TaskForm />} />
        <Route path="/task/:id" element={<TaskForm />} />
      </Routes>
    </Router>
  );
};

export default App;
