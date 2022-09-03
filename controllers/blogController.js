const Blog = require("../models/blog");

// render new blog form page
const blogForm = (req, res) => {
  res.render("create", { title: "Create" });
};

// render home page
const home = (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("index", { title: "Home", blogs: result });
    })
    .catch((err) => {
      console.log(err);
    });
};

// submit a new blog
const newBlog = (req, res) => {
  const blog = new Blog(req.body);
  blog
    .save()
    .then((result) => {
      console.log("Added document");
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/");
    });
};

// render error page
const error = (req, res) => {
  console.log("Called");
  res.status(404).render("404");
};

module.exports = { newBlog, blogForm, home, error };
