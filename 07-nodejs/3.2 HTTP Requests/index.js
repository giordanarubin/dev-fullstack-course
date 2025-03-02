import express from "express";

const app = express();
const port = 3000;

app.get("/", function(req, res) {
    res.send("Hello, world!");
});

app.get("/about", function(req, res) {
    res.send("<h1>Sou linda</h1>");
});

app.listen(port, function() {
    console.log(`server running on port ${port}`);
});
