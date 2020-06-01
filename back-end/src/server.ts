import express from "express";

const app = express();

app.get("/users", (req, res) => {
  console.log("listagem de usuarios");
  res.json(["diego", "jefferson", "Felizardo"]);
});

app.listen(3333);
