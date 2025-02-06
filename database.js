const mongoose = require("mongoose");
require('dotenv').config(); // to load the environment variables from .env file

const connectDatabase = () => {
  const dbURL = process.env.db_URL; // Fetching database URL from environment variable

  if (!dbURL) {
    console.log("Database connection URL is not defined in environment variables.");
    process.exit(1); // If the URL isn't found, terminate the application
  }

  mongoose
    .connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((data) => {
      console.log(`MongoDB connected with server: ${data.connection.host}`); // Successful connection message
    })
    .catch((err) => {
      console.log(`Database connection failed: ${err.message}`); // Error message if the connection fails
      process.exit(1); // Terminate the application if the connection fails
    });
};

module.exports = connectDatabase;
