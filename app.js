const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const todoRoutes = require("./routes/todoRoutes");
const userRoutes = require("./routes/userRoutes");
const errorMiddleware = require("./middleware/errors");
const { register, login, logout } = require("./controllers/userController");
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/api/v1/register", register)
// Routes
app.use("/api/v1/todo", todoRoutes);
app.use("/api/v1/users", userRoutes);

// App Methods
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(express.urlencoded({ extended: true }));




// Middleware for error
app.use(errorMiddleware);

module.exports = app;
