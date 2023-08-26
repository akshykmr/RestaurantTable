const express = require('express');  // importing express to create the app
const cors = require('cors'); // importing cors : Cross-Origin Resource Sharing
const routes = require('./../routes/dashboardRoutes'); // importing routes from routes folder

const app = express();  

app.use(cors()); // with this we giving access these module to app before performing any actio
app.use(express.json()); 
app.use('/', routes);

module.exports = app;
