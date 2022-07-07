// controllers for all blogs actions
const Blog = require("../Models/blogSchema");


// load all blgos to home page
const loadAllBlogs = (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 }) // newest to the holdest.
    .then((results) => {
      res.render("index", { title: "All Blogs", blogs: results });
    })
    .catch((err) => console.log(err));
};

// delete blog from db
const deleteBlogByIdFromDb = (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/blogs" });
    })
    .catch((err) => {
      console.log(err);
    });
};

// view blog details
const blogDetails = (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((results) => {
      res.render("detailsBlog", {
        title: "details page",
        detailsBlogs: [results],
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

// saving blogd to db

const saveBlogToDb = (req, res) => {
  const blog = new Blog(req.body);
  blog
    .save()
    .then((resp) => {
      res.redirect("/");
    })
    .catch((err) => console.log(err));
};

module.exports = {
  loadAllBlogs,
  blogDetails,
  deleteBlogByIdFromDb,
  saveBlogToDb
};
