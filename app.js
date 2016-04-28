// Require Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var fs = require('fs');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');
var FileStreamRotator = require('file-stream-rotator');
var methodOverride = require('method-override');
var passport = require('passport');
var Strategy = require('passport-facebook').Strategy;

// Set common variables
var app = express();
var port = process.env.PORT || 80;
var logDirectory = __dirname + '/log';

// Morgan Setup
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

var accessLogStream = FileStreamRotator.getStream({
    date_format: 'YYYYMMDD',
    filename: logDirectory + '/access-%DATE%.log',
    frequency: 'daily',
    verbose: false
});
app.use(logger('dev', {stream: accessLogStream}));


// Set middlewares
app.use(bodyParser.json({limit:'10mb'}));
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(cookieParser());
app.use(expressSession({ secret: 'leoGordo', resave: true, saveUninitialized: true }));
app.use(express.static(__dirname + '/public/'));

// Error Handlers
app.use(function(req, res) {
    res.status(404).send('Not found (404)');
});

if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500)
            .send({
                message: err.message,
                error: err
            });
    });
}

app.use(function(err, req, res, next) {
    res.status(err.status || 500)
        .send({
            message: err.message,
            error: {}
        });
    //next(err);
});

// Login Routes
app.get('*', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

// Start Server
console.log('Server opened at port ' + port);
app.listen(port);
exports = module.exports = app;