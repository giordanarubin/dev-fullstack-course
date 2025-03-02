//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import { dirname } from "path"; 
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const __dirName = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.sendFile(__dirName + "/public/index.html");
  });

  app.post("/check", function(req, res) {
    var pwd = req.body.password;
    if (pwd === "ILoveProgramming") {
        res.sendFile(__dirName + "/public/secret.html");
    }
    else {
        res.redirect("/");
    }
  });

app.listen(port, function() {
    console.log(`Listening on port ${port}.`);
});
