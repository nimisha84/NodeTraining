const express = require('express');
let books = require('././app.js');
const app = express();
const port = 3000;

let test=books.getBookRecommendations();
app.get('/', (req, res) => res.send(test));

app.listen(port, () => console.log('Example app listening on port ${port}!'));