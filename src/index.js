const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const providerRoute = require("./routes/providers");

// settings
const app = express();
const port = process.env.PORT || 9000;
const corsOptions ={
  origin:'https://develop.d86foqya0ux00.amplifyapp.com', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200,
  methods: "GET, POST, PUT, DELETE, OPTIONS"
}

// middlewares

app.use(cors(corsOptions));
app.use(express.json());





app.use("/api", providerRoute);

// routes
app.get("/", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.send("Welcome to my API");
});

app.get("/version", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.send("Welcome Candidate v1.0");
});
// mongodb connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to mongo-dbn"))
  .catch((error) => console.error(error));

// server listening
app.listen(port, () => console.log("Server listening to", port));