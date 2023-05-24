const express = require("express");
var cors = require('cors')
const mongoose = require("mongoose");
require("dotenv").config();
const providerRoute = require("./routes/providers");

// settings
const app = express();
const port = process.env.PORT || 9000;

app.use(express.json());
app.use(cors())
app.use("/api", providerRoute);

// routes
app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

app.get("/version", (req, res) => {
  res.send("Welcome Candidate v1.0");
});
// mongodb connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to mongo-dbn"))
  .catch((error) => console.error(error));

// server listening
app.listen(port, () => console.log("Server listening to", port));