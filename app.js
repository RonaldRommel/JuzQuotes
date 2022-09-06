const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const app = express();
const Blog = require("./models/blog");
const blogRoutes = require("./routes/blogRoutes");
const blogController = require("./controllers/blogController");
require("dotenv").config();

app.set("view engine", "ejs");

const dbURI = process.env.MONGO_DB;

mongoose
  .connect(dbURI)
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => console.log(err));

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.get("/", blogController.home);

app.use(blogRoutes);

app.use(blogController.error);
