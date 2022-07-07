const express = require("express");
const _ = require("lodash");
const morgan = require("morgan");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const blogRoutes = require('./routers/blogsRouter');

// initializze app 
const app = express();


// register new engine
app.set("view engine", "ejs");

// parse url request that can be access in the request body
app.use(express.urlencoded({ extended: true }));

// http logger
app.use(morgan("dev"));

// making accessible statics files to be accessbile
app.use(express.static("public")); // specifying the folder dir)

app.use(express.Router())


const db_URI =
  "mongodb+srv://cedrick:eiJbFs3FHQMcGxjs@cluster0.9pvaglg.mongodb.net/Event-organizer?retryWrites=true&w=majority";


  // connection to database.
mongoose
  .connect(db_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((results) => {
    // listen for request when db is connected
    console.log("connected to Db");
    // app.listen(process.env.PORT);
    app.listen(3000);

  })

  .catch((err) => console.log(err));


app.get("/contact", (req, res) => {
  res.render("contact", { title: "contact" });
});

app.get("/about", (req, res) => {
  // res.sendFile("./views/about.html", { root: __dirname });

  res.render("about", { title: "About" });
});

app.use(blogRoutes)

// 404 age -> in case ther's no match
app.use((req, res) => {
  // res.sendFile("./views/404.html", { root: __dirname }); //root specify where it should look
  res.status(404).render("404", { title: "404" });
});
