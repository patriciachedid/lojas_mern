const express = require('express');
const products = require('./data/products');

const app = express();

app.listen(5000, console.log("servidor iniciado na porta 5000"));
app.get( '/', (req, res) => {
    req.send('a API esta funcionando')

});

app.get('api/products', (req, res) => {
    res.json(products)
});