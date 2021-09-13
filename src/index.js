const express = require('express');
const cors = require('cors');
const path = require('path')

const app = express();


console.log(`Variavel __dirname: `, path.resolve('public'))
app.use("/", express.static(path.resolve('public')));

app.listen(80, () => { });