const express = require("express");
const products = require("./data/products");

const app = express();

app.listen(5000, console.log("Servidor está rodando na porta 5000"));

app.get("/", (req, res) => {
  res.send("API está funcionando");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const id = req.params.id;
  const product = products.find((p) => p._id === req.params.id);
  res.json(filteredProduct);
});
