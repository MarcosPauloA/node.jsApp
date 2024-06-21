const express = require('express');
const routes = require('./routes/index.js');
const loginRouter = require('./routes/login');
const logoutRouter = require('./routes/logout');

const path = require('path');
/*
const createError = require('http-errors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
*/
const app = express();
routes(app);

app.use('/login', loginRouter);
app.use('/logout', logoutRouter);

// error handler
app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send({message: 'Erro interno do servidor'});
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// app.use(express.json());
/*
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

const __dirname = import.meta.dirname;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


*/
module.exports = app;
