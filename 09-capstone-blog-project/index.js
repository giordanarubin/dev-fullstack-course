import express from "express";

const app = express();
const port = 3000;

//lembrar que cada ação é uma rota!
app.get("/home", (req, res) => {
  res.render("index.ejs");
});

app.get("/about", (req, res) => {
  res.render("about.ejs");
});

app.get("/new-post", (req, res) => {
  res.render("new-post.ejs");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
