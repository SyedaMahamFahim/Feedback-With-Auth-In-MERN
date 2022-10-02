const express =require('express')
const app=express()
const cookieParser = require("cookie-parser");



const errorMiddleware=require('./middleware/errors')


// App Methods
app.use(express.json())
app.use(cookieParser());
app.use(express.urlencoded( {extended: true} ))



// Import all routes
const todoRoutes=require("./routes/todoRoutes")
const userRoutes=require("./routes/userRoutes")

// Routes
app.use("/api/v1/todo",todoRoutes)
app.use("/api/v1/user",userRoutes)


// Middleware for error
app.use(errorMiddleware)

module.exports = app;


