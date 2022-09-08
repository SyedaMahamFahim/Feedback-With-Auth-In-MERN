const express = require("express");
const router = express.Router();
const {
  createTodo,
  allTodos,
  singleTodo,
  removeSingleTodo,
  updateSingleTodo,
} = require("../controllers/todoController");

const { isAuthenticatedUser} = require("../middleware/auth");


// Before creating todo we need to check if user is authenticated or not

// Add
router.route("/add-todo").post(isAuthenticatedUser,createTodo);

// All Todos
router.route("/all-todos").get(isAuthenticatedUser, allTodos);

// Single Todo
router.route("/get-todo/:id").get(isAuthenticatedUser, singleTodo);

// Delete Todo
router.route("/remove-todo/:id").delete(isAuthenticatedUser,removeSingleTodo);

// Update Todo
router.route("/update-todo/:id").put(isAuthenticatedUser, updateSingleTodo);

module.exports = router;


// http://localhost:8000/api/v1/Todos/add-Todo

// POST  --- Create a new Todo
// DELETE  --- Delete a Todo
// GET --- Get all Todos
// PUT --- Update a Todo