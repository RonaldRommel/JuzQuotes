const express = require("express");
const router = express.Router();
const Blog = require("../models/blog");
const blogController = require("../controllers/blogController");

router.get("/blogs", blogController.blogForm);
router.post("/blogs", blogController.newBlog);

module.exports = router;
