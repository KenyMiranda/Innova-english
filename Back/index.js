const express = require('express');
var cors = require('cors');
const connection = require('./connection');
const userRoute = require('./Routes/userRoute'); //Referencia al arhcivo userRoute de routes 
const app = express();
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/userRoute', userRoute);
module.exports = app;