'use strict';
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
//slash as the end indicated you look in index first
const routes = require('./routes/');

//set up environment port if none given default to 3000
const PORT = process.env.PORT || 3000;
const SESSION_SECRET = process.env.SESSION_SECRET || 'secret';

//urlencoded parse url
app.use(bodyParser.urlencoded({ extended: false }));
 //parse json
app.use(bodyParser.json());

//this tells the server where to get the static files--the ones that don't change
app.use(express.static(__dirname + "/public"));

//allows you to use the diferent routes
app.use(routes);


app.listen(PORT, () => {
  console.log(`${PORT} at your service. Node.js server started`);
});
