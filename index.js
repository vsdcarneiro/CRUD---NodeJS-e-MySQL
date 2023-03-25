const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Set 'ejs' as template engine
app.set("view engine", "ejs");
// Set static file directory
app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.get("/", (req, res) => res.render("index"));

app.get("/ask", (req, res) => res.render("ask"));

app.post("/save-ask", (req, res) => {
  const question = req.body.question;
  res.send("Pergunta cadastrada com sucesso! " + question);
});

app.listen(port, () => {
  console.log("Server running on port", port);
});
