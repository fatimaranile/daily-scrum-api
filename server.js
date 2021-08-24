const cors = require("cors");
const express = require("express");

const corsOptions = {
  origin: "http://localhost:8081",
};

const expressApp = express();
const PORT = process.env.PORT || 8080;

expressApp.use(cors(corsOptions));
expressApp.use(express.json());
expressApp.use(express.urlencoded({ extended: true }));

// sample GET endpoint
expressApp.get("/", (request, response) => {
  response.json({
    message: "Daily Scrum API is running.",
  });
});

expressApp.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
