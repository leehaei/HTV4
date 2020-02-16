var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
const mongoose = require('mongoose');
const auth = require('./Api/auth');
const generator = require('./generator');
var plotly = require('plotly')('leehaei', '6Vw31h9ReggMDkwFDLs7');

//MongoDB Connection
const connectDB = require('./DB/Connection')
connectDB();


var bodyParser = require('body-parser'); 

require('dotenv').config();

var app = express();

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

// app.use(bodyParser.urlencoded({extended : true}));
// app.use(bodyParser.json());


// app.use(bodyParser.urlencoded())
// app.use(bodyParser.urlencoded({
//     extended: true
//   }));

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// mongo db 
app.use('/api/userModel',require('./Api/User'));
mongoose.Promise = global.Promise;

//Route?
// app.use('/users', require('./routes/users'));

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
/*
app.get('/budget', function(request, response) {
    response.render('budget');
});
*/

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

//Authenticates signup
app.post('/auth', function(request, response) {
    var username = request.body.username;
    var password = request.body.password;
    console.log("username: ", username);
    console.log("password: ", password);
    if (username != "" && password != "") {
      const userParam = { username, password };
      auth.signUp(userParam);
    }
    response.render('finance');
});

//Authenticates login
app.post('/login', function(request, response) {
    response.render('finance');
});

app.post('/analyze', function(request, response) {
    var username = "admin1";
    var password = "1234";
    var university = request.body.university;
    var tuition = request.body.tuition;
    var program = request.body.program;
    var progLength = request.body.lengthOfProgram;
    var finHelp = request.body.expected_help;
    var grants = request.body.grants;
    var loans = request.body.loans;
    var housing = request.body.housing;
    var incomeSchool = request.body.incomeSchool;
    var incomeGrad = request.body.incomeGrad;
    const finance = { username, password, university, tuition, program, progLength, finHelp, grants, loans, housing, incomeSchool, incomeGrad};
    var myFirstPromise = new Promise((resolve, reject) => {
        auth.analyze(finance);
        generator.debtGenerator(finance);
        setTimeout( function() {
          resolve("Success!") 
        }, 1000) 
      });
      myFirstPromise.then((successMessage) => {
        response.render('finance');
      });
});

module.exports = app;