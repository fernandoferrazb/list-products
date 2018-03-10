//Module dependencies
var express = require('express'),
	cons = require('consolidate');

//Config
var app = require('../app/config/server.js');

var path = require("path");
var app = require('express')();
app.get('/products', function (req, res) {
	res.sendFile(path.normalize(__dirname + '/../mocks/server.json'));
});

appServer = app.listen(process.env.PORT || 5000);
console.log("Express server started");

//Get data API
var request = require('request');
request({ url: 'http://localhost:5000/products', json: true }, function (err, res, json) {
	if (err) {
		throw err;
	}
	console.log("Api ok");
});