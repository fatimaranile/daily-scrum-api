require('dotenv').config();
const cors = require("cors");
const express = require("express");

const db = require("./src/models");

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

if (process.env.NODE_ENV === "development") {
  db.sequelize.sync({ force: true }).then(() => {
    console.log("Dropping database.");
  });
} else {
  db.sequelize.sync();
}


app.listen(PORT, () => {
  console.log(`Web server is running on port ${PORT}`);
});
