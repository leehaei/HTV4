// var server = http.createServer(function (request, response) {
//     router.css(request, response);
//     router.home(request, response);
//     router.user(request, response);
//   });
//   server.listen(3000);

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');




//MongoDB Connection
const connectDB = require('./DB/Connection')
connectDB();
// app.use('/api/userModel',require('./Api/User'));





var bodyParser = require('body-parser'); 

require('dotenv').config();

var app = express();

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

// view engine setup
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static('public')); //adddddddd

// Serve Static Assets
// app.use(express.static('public'));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
    response.render('main');
});

app.get('/budget', function(request, response) {
    response.render('budget');
});

app.get('/login', function(request, response) {
    response.render('login');
});

//added
app.get('/signup', function(request, response) {
    response.render('signup');
});

app.get('/finance', function(request, response) {
    response.render('finance');
});

// var server = http.createServer(function (request, response) {
//   router.css(request, response);
//   router.home(request, response);
//   router.user(request, response);
// });
// server.listen(3000);


module.exports = app;