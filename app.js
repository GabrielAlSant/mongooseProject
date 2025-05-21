var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('./db/db');

var usersRouter = require('./routes/users');
var taksRouter = require('./routes/tasks');
var logsRouter = require('./routes/logs');
var commentsRouter = require('./routes/comments');

var app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', usersRouter);
app.use('/task', taksRouter);
app.use('/logs', logsRouter);
app.use('/comments', commentsRouter);


app.use(function(req, res, next) {
});


module.exports = app;
