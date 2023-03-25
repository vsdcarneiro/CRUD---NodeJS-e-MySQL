const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const mysql = require("./database/connection");
const Issue = require("./database/Issue");
const Solution = require("./database/Solution");

// MySQL connection
mysql
  .authenticate()
  .then(() => {
    console.log("Database connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

// Set 'ejs' as template engine
app.set("view engine", "ejs");
// Set static file directory
app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.get("/", (req, res) => {
  Issue.findAll({ raw: true, order: [["id", "DESC"]] }).then((issues) => {
    res.render("index", { issues });
  });
});

app.get("/new-issue", (req, res) => res.render("new-issue"));

app.post("/save-issue", (req, res) => {
  const [title, description] = [req.body.title, req.body.description];
  Issue.create({ title, description }).then(() => res.redirect("/"));
});

app.get("/issue/:id", (req, res) => {
  const id = req.params.id;
  Issue.findOne({ where: { id } }).then((issue) => {
    if (issue) {
      res.render("issue", { issue });
    } else {
      res.redirect("/");
    }
  });
});

app.listen(port, () => {
  console.log("Server running on port", port);
});
