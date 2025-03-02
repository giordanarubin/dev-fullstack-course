import express from "express";
const app = express();
const port = 3000;

// *********************
// Let’s practice using Postman. Make sure your server is running with nodemon.
// Then test the 5 different routes below with Postman. Open a separate tab for each request.
// Check that for each route you’re getting the correct status code returned to you from your server.
// You should not get any 404s or 500 status codes.
// *********************

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
}); //GET: vc "pede" algo para o servidor

app.post("/register", (req, res) => {
  //Do something with the data
  res.sendStatus(201);
}); //POST: vc envia informação para o servidor

app.put("/user/angela", (req, res) => {
  res.sendStatus(200);
}); //PUT: faz update substituindo completamente a informação anterior

app.patch("/user/angela", (req, res) => {
  res.sendStatus(200);
}); //PATCH: faz update substituindo apenas uma parte da info anterior

app.delete("/user/angela", (req, res) => {
  //Deleting
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
