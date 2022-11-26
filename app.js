const express =require('express')
const app=express()
const cookieParser = require("cookie-parser");

const todoRoutes=require("./routes/todoRoutes")
const userRoutes=require("./routes/userRoutes")
const errorMiddleware=require('./middleware/errors')


// App Methods
app.use(express.json())
app.use(cookieParser());
app.use(express.urlencoded( {extended: true} ))




// Routes
app.use("/api/v1/todo",todoRoutes)
app.use("/api/v1/users",userRoutes)

app.get("/",(req,res)=>{
    res.send("Hello World")
})

// Middleware for error
app.use(errorMiddleware)

module.exports = app;


