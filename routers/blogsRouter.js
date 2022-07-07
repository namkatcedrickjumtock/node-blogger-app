const express = require("express");
const router = express.Router();
const blogcon = require("../controllers/blogControllers");

// get  request MiddleWares
router.get("/", (req, res) => {
  res.redirect("/blogs");
});

// post request middlewares
router.post("/blogs", blogcon.saveBlogToDb);

// submit blog
router.get("/blogs/create", (req, res) => {
  // res.sendFile("./views/about.html", { root: __dirname });
  res.render("creatblog", { title: "create Blog" });
});

// details request midleware
router.get("/blogs/:id", blogcon.blogDetails);

// deleteing by id from db
router.delete("/blogs/:id", blogcon.deleteBlogByIdFromDb);

// load blogs handler
router.get("/blogs", blogcon.loadAllBlogs);

module.exports = router;
