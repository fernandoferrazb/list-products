//Config template engine

var express = require('express');
cons = require('consolidate');

var app = express();
app.engine('dust', cons.dust)
app.set('view engine', 'dust');
app.set('views', __dirname + '/../../views');

module.exports = app;