var express = require('express');
var app = express();

var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/users');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.get('/', function(req, res) {
	//res.send('Hello World!');
	res.json({hello: 'Hello World!'});
});

var users = require('./users.js')(app);

var server = app.listen(3000, function() {
	console.log('Server listening on port 3000');
});