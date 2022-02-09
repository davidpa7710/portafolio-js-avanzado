const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server on Port ${port}`);
});

app.get("/", (req, res) => {
  res.send("hola mundo");
});
app.get("", (req, res) => {
  const obj = {
    id: 1,
    name: "David Palacios",
  };
  res.json(obj);
});
