const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const app = express();
const Blog = require("./models/blog");
const blogRoutes = require("./routes/blogRoutes");
const blogController = require("./controllers/blogController");

app.set("view engine", "ejs");

const dbURI =
  "mongodb+srv://RonaldRommel:Itachi1*.+@cluster0.paty8wc.mongodb.net/Blogging?retryWrites=true&w=majority";

mongoose
  .connect(dbURI)
  .then(() => {
    app.listen(3000);
    console.log("connected to database");
  })
  .catch((err) => console.log(err));

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.get("/", blogController.home);

app.use(blogRoutes);

app.use(blogController.error);
