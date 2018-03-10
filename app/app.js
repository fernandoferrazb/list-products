//Module dependencies
var express = require ('express'),
cons = require('consolidate');
var app = require('express')();

//Config view engine
var app = require('../app/config/server.js');

//Routes
var routes = require('./routes/web.js');
routes (app);

app.use(express.static(__dirname + '/../dist'));

appServer = app.listen(process.env.PORT || 8000);
console.log("Express server started");