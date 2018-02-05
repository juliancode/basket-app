const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const Basket = require('./models/basketModel');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

mongoose.connect('mongodb://localhost/Basketdb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  cors({
    origin: 'http://localhost:3000' // accept requests from this origin
  })
);

const routes = require('./routes/basketRoutes');
routes(app);

app.listen(port);

console.log(`REST API Server started: http://localhost:${port}!`);
