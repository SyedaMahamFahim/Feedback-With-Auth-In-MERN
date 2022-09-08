const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase=require('./database/connection')

dotenv.config({ path: "configuration/config.env" });

// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exception`);
  process.exit(1);
});

 
const PORT = process.env.PORT;

const server = app.listen(PORT, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`);
});


// Connecting to database
connectDatabase()

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Unhandled Promise Rejection`);
  server.close(() => {
    process.exit(1);
  });
});