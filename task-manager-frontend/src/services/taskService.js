import axios from "axios"; // Importing axios for making HTTP requests

const API_URL = "http://localhost:5000/api/tasks"; // URL of the API

export const getTasks = async () => { // Function to get all tasks
  const response = await axios.get(API_URL); // Using axios to make a GET request to the API
  return response.data;
};

export const getTaskById = async (id) => { // Function to get a task by its ID
  const response = await axios.get(`${API_URL}/${id}`); // Using template literals to construct the URL
  return response.data;
};

export const createTask = async (taskData) => { // Function to create a new task
  const response = await axios.post(API_URL, taskData); // Using POST to create a new task
  return response.data;
};

export const updateTask = async (id, taskData) => { // Function to update an existing task
  const response = await axios.patch(`${API_URL}/${id}`, taskData); // Using PATCH for partial updates
  return response.data;
};

export const deleteTask = async (id) => { // Function to delete a task by its ID
  await axios.delete(`${API_URL}/${id}`); // Using DELETE to remove a task
};
