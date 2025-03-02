import express from "express";
import { dirname } from "path"; 
import { fileURLToPath } from "url";
import bodyParser from 'body-parser';

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));
var bandName = "";

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  bandName = req.body["street"] + req.body["pet"];
  res.send(`<h2>Your band name is:</h2><h3>${bandName}</h3>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
