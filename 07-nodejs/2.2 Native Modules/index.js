const fs = require("fs");

/*
fs.writeFile("message2.txt", "bla bla bla", (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
});
*/

fs.readFile("./message2.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
  });
