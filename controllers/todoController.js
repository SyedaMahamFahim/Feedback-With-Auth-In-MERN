const Todo = require("../models/todoModel");
const catchAsyncError = require("../middleware/catchAsycnError");
const ErrorHander = require("../utils/errorhander");

// Create Todo
exports.createTodo = catchAsyncError(async (req, res, next) => {
  const { title, description, status,user } = req.body;
  const todoData={
    title,
    description,
    status,  
    user: req.user._id,
  }
  const todo = new Todo(todoData);

  await todo.save();
  res.status(201).json({
    success: true,
    message: "Todo created successfully",
  });
});

// Get All Todos
exports.allTodos = catchAsyncError(async (req, res, next) => {
  const Todos = await Todo.find().populate(
    "user",
    "name email"
  );
  
  res.status(201).json({
    success: true,
    Todos,
  });
});

// Get Single Todo
exports.singleTodo = catchAsyncError(async (req, res, next) => {
  const todo = await Todo.findById(req.params.id);

  if (!todo) {
    return next(new ErrorHander("Task not found", 404));
  }

  res.status(201).json({
    success: true,
    todo,
  });
});

// Remove Todo
exports.removeSingleTodo = catchAsyncError(async (req, res, next) => {
  const todo = await Todo.findById(req.params.id);
  if (!todo) {
    return next(new ErrorHander("Task not found", 404));
  } else {
    await Todo.findByIdAndDelete(req.params.id);
    res.status(201).json({
      success: true,
      message: "Todo Removed Successfully",
    });
  }
});

// Update Todo
exports.updateSingleTodo = catchAsyncError(async (req, res, next) => {
  const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!todo) {
    return next(new ErrorHander("Task not found", 404));
  }
  res.status(201).json({
    success: true,
    message: "Todo Record Updated Successfully",
    todo,
  });
});
