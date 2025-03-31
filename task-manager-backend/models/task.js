const mongoose = require('mongoose'); // Importing mongoose to interact with MongoDB

const taskSchema = new mongoose.Schema({ // Defining the schema for the Task model
  title: { // Title of the task
    type: String,
    required: true // Title is required
  },
  description: String, // Description of the task
  status: { // Status of the task
    type: String,
    enum: ['To-Do', 'In Progress', 'Completed'], // Possible values for status
    default: 'To-Do' // Default value is 'To-Do'
  },
  dueDate: Date // Due date for the task
});

const Task = mongoose.model('Task', taskSchema); // Creating the Task model based on the schema
module.exports = Task; // Exporting the Task model for use in other files
