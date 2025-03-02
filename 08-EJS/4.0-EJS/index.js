import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    const date = new Date();
    let day = date.getDay();
//    console.log(day);

    let type = "a weekday";
    let actv = "work";

    if (day === 0 || day === 6) {
        type = "the weekend";
        actv = "have fun"
    };

    res.render("index.ejs", {
        dayType: type,
        activity: actv
    });
});

app.listen(port, function() {
    console.log(`Listening on port ${port}.`);
});
