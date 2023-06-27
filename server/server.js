require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const multer = require("multer");
const userRoutes = require("./routes/user");
const User = require("./models/userModel");
// express app
const app = express();
const path = require('path');

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
});

mongoose.connect("mongodb+srv://skavvathas:01052001sk@cluster0.9dsorio.mongodb.net/twitterClone", { useNewUrlParser: true });
//mongoose.connect("mongodb+srv://<username>:<password>@cluster0.9dsorio.mongodb.net/twitterClone", { useNewUrlParser: true });

// routes

app.use("/api/user", userRoutes);




app.listen(4000, function() {
    console.log("Server started on port 4000!");
});