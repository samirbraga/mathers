//includes
var http = require('http');
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var fs = require('fs');

// configure
app.set('views', __dirname + '/views');
app.engine('.html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
var port = Number( process.env.PORT || 4000 )
app.listen(port, function () {
  console.log('Mathsolver running in localhost:3000');
});

app.get('/', function (req, res) {
	res.render('new layout.html');
});
