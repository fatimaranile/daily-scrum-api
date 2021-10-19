const cors = require("cors");
const express = require("express");

//const database = require("./src/models");

const corsOptions = {
  origin: "http://localhost:8081",
};

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// sample GET endpoint
app.get("/", (request, response) => {
  response.json({
    message: "Daily Scrum API is running.",
  });
});

//database.sequelize.sync();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
