const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.listen(port, () => {
  console.log(`Server on Port ${port}`);
});

app.get("/", (req, res) => {
  res.send("hola mundo");
});
app.get("/trainer", (req, res) => {
  const obj = {
    id: 1,
    name: "David Palacios",
    edad: 24,
    region: 1,
  };
  res.json(obj);
});
app.get("/trainer/:idTrainer/regin/idRegion", (req, res) => {
  const { idTrainer, idRegion } = req.params
  const obj = {
    id: idTrainer,
    name: "Ash Ketchum",
    age: 10,
    region: idRegion
  };
  res.json(obj);
});
app.get("/trainers", (req, res) => {
  const { page, size } = req.query;
  if (page && size) {
    res.json({ page, size });
  } else {
    res.send('Parametros Obligatorios')
  }
});

app.post('/trainer', (req,res) => {
  const body = req.body;
  res.json({
    message: 'created',
    data: body
  });
});


