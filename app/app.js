//Module dependencies

var express = require ('express'),
cons = require('consolidate');

var app = express();

app.engine('dust', cons.dust);

app.set('view engine', 'dust');
app.set('views', __dirname + ' /../views');

app.get('/*/', function (req, res) {
	console.log(req.url);
	res.render('index', {
		title: 'List products Init'
	});
});

appServer = app.listen(process.env.PORT || 3000);
console.log("Express server started");
