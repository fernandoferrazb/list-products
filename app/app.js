//Module dependencies

var express = require ('express'),
cons = require('consolidate');

var app = express();

app.engine('dust', cons.dust);

app.set('view engine', 'dust');
app.set('views', __dirname + ' /../views');

app.get('/', function (req, res) {
	console.log(req.url);
	res.render('index', {
		title: 'List products Init'
	});
});

//Server static JSON
var path = require("path");
app.get('/server', function (req, res) {
	res.sendFile(path.normalize(__dirname + '/../mocks/server.json'));
});

appServer = app.listen(process.env.PORT || 8000);
console.log("Express server started");



